// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#metadata DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata;
  /**
  * KogitoInfraSpec defines the desired state of KogitoInfra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#spec DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec;
}
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#annotations DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#labels DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#namespace DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences {
  /**
  * Permission on the file mounted as volume on deployment. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#file_mode DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'. Default mount path is /home/kogito/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#mount_path DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * This must match the Name of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_mode: {
      value: cdktf.numberToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileMode = undefined;
      this._mountPath = undefined;
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
      this._fileMode = value.fileMode;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // file_mode - computed: false, optional: true, required: false
  private _fileMode?: number; 
  public get fileMode() {
    return this.getNumberAttribute('file_mode');
  }
  public set fileMode(value: number) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesOutputReference {
    return new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#key DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#api_version DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#field_path DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#container_name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#divisor DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#resource DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#key DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#config_map_key_ref DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#field_ref DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#resource_field_ref DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#secret_key_ref DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromSecretKeyRef) {
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#value DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#value_from DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs | cdktf.IResolvable): any {
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
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsValueFrom) {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsOutputReference {
    return new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource {
  /**
  * APIVersion describes the API Version of referred Kubernetes resource for example, infinispan.org/v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#api_version DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind describes the kind of referred Kubernetes resource for example, Infinispan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#kind DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of referred resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace where referred resource exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#namespace DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences {
  /**
  * Permission on the file mounted as volume on deployment. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#file_mode DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'. Default mount path is /home/kogito/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#mount_path DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * This must match the Name of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_mode: {
      value: cdktf.numberToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileMode = undefined;
      this._mountPath = undefined;
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
      this._fileMode = value.fileMode;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // file_mode - computed: false, optional: true, required: false
  private _fileMode?: number; 
  public get fileMode() {
    return this.getNumberAttribute('file_mode');
  }
  public set fileMode(value: number) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesOutputReference {
    return new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec {
  /**
  * List of secret that should be mounted to the services as envs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#config_map_env_from_references DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#config_map_env_from_references}
  */
  readonly configMapEnvFromReferences?: string[];
  /**
  * List of configmap that should be added to the services bound to this infra instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#config_map_volume_references DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#config_map_volume_references}
  */
  readonly configMapVolumeReferences?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences[] | cdktf.IResolvable;
  /**
  * Environment variables to be added to the runtime container. Keys must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#envs DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#envs}
  */
  readonly envs?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable;
  /**
  * Optional properties which would be needed to setup correct runtime/service configuration, based on the resource type. For example, MongoDB will require 'username' and 'database' as properties for a correct setup, else it will fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#infra_properties DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#infra_properties}
  */
  readonly infraProperties?: { [key: string]: string };
  /**
  * Resource for the service. Example: Infinispan/Kafka/Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#resource DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource;
  /**
  * List of secret that should be mounted to the services as envs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#secret_env_from_references DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#secret_env_from_references}
  */
  readonly secretEnvFromReferences?: string[];
  /**
  * List of secret that should be munted to the services bound to this infra instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#secret_volume_references DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest#secret_volume_references}
  */
  readonly secretVolumeReferences?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences[] | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_env_from_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMapEnvFromReferences),
    config_map_volume_references: cdktf.listMapper(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesToTerraform, false)(struct!.configMapVolumeReferences),
    envs: cdktf.listMapper(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsToTerraform, false)(struct!.envs),
    infra_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.infraProperties),
    resource: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceToTerraform(struct!.resource),
    secret_env_from_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretEnvFromReferences),
    secret_volume_references: cdktf.listMapper(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesToTerraform, false)(struct!.secretVolumeReferences),
  }
}


export function dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_env_from_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMapEnvFromReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_map_volume_references: {
      value: cdktf.listMapperHcl(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesToHclTerraform, false)(struct!.configMapVolumeReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesList",
    },
    envs: {
      value: cdktf.listMapperHcl(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsList",
    },
    infra_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.infraProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource: {
      value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource",
    },
    secret_env_from_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretEnvFromReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_volume_references: {
      value: cdktf.listMapperHcl(dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesToHclTerraform, false)(struct!.secretVolumeReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapEnvFromReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapEnvFromReferences = this._configMapEnvFromReferences;
    }
    if (this._configMapVolumeReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapVolumeReferences = this._configMapVolumeReferences?.internalValue;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._infraProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraProperties = this._infraProperties;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._secretEnvFromReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnvFromReferences = this._secretEnvFromReferences;
    }
    if (this._secretVolumeReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVolumeReferences = this._secretVolumeReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapEnvFromReferences = undefined;
      this._configMapVolumeReferences.internalValue = undefined;
      this._envs.internalValue = undefined;
      this._infraProperties = undefined;
      this._resource.internalValue = undefined;
      this._secretEnvFromReferences = undefined;
      this._secretVolumeReferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapEnvFromReferences = value.configMapEnvFromReferences;
      this._configMapVolumeReferences.internalValue = value.configMapVolumeReferences;
      this._envs.internalValue = value.envs;
      this._infraProperties = value.infraProperties;
      this._resource.internalValue = value.resource;
      this._secretEnvFromReferences = value.secretEnvFromReferences;
      this._secretVolumeReferences.internalValue = value.secretVolumeReferences;
    }
  }

  // config_map_env_from_references - computed: false, optional: true, required: false
  private _configMapEnvFromReferences?: string[]; 
  public get configMapEnvFromReferences() {
    return this.getListAttribute('config_map_env_from_references');
  }
  public set configMapEnvFromReferences(value: string[]) {
    this._configMapEnvFromReferences = value;
  }
  public resetConfigMapEnvFromReferences() {
    this._configMapEnvFromReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapEnvFromReferencesInput() {
    return this._configMapEnvFromReferences;
  }

  // config_map_volume_references - computed: false, optional: true, required: false
  private _configMapVolumeReferences = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferencesList(this, "config_map_volume_references", false);
  public get configMapVolumeReferences() {
    return this._configMapVolumeReferences;
  }
  public putConfigMapVolumeReferences(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecConfigMapVolumeReferences[] | cdktf.IResolvable) {
    this._configMapVolumeReferences.internalValue = value;
  }
  public resetConfigMapVolumeReferences() {
    this._configMapVolumeReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapVolumeReferencesInput() {
    return this._configMapVolumeReferences.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // infra_properties - computed: false, optional: true, required: false
  private _infraProperties?: { [key: string]: string }; 
  public get infraProperties() {
    return this.getStringMapAttribute('infra_properties');
  }
  public set infraProperties(value: { [key: string]: string }) {
    this._infraProperties = value;
  }
  public resetInfraProperties() {
    this._infraProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraPropertiesInput() {
    return this._infraProperties;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // secret_env_from_references - computed: false, optional: true, required: false
  private _secretEnvFromReferences?: string[]; 
  public get secretEnvFromReferences() {
    return this.getListAttribute('secret_env_from_references');
  }
  public set secretEnvFromReferences(value: string[]) {
    this._secretEnvFromReferences = value;
  }
  public resetSecretEnvFromReferences() {
    this._secretEnvFromReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvFromReferencesInput() {
    return this._secretEnvFromReferences;
  }

  // secret_volume_references - computed: false, optional: true, required: false
  private _secretVolumeReferences = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferencesList(this, "secret_volume_references", false);
  public get secretVolumeReferences() {
    return this._secretVolumeReferences;
  }
  public putSecretVolumeReferences(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecSecretVolumeReferences[] | cdktf.IResolvable) {
    this._secretVolumeReferences.internalValue = value;
  }
  public resetSecretVolumeReferences() {
    this._secretVolumeReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVolumeReferencesInput() {
    return this._secretVolumeReferences.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest k8s_app_kiegroup_org_kogito_infra_v1beta1_manifest}
*/
export class DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_kiegroup_org_kogito_infra_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppKiegroupOrgKogitoInfraV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_kiegroup_org_kogito_infra_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/app_kiegroup_org_kogito_infra_v1beta1_manifest k8s_app_kiegroup_org_kogito_infra_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_kiegroup_org_kogito_infra_v1beta1_manifest',
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
  private _metadata = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppKiegroupOrgKogitoInfraV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
