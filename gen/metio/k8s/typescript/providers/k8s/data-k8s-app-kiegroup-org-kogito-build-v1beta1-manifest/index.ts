// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#metadata DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata;
  /**
  * KogitoBuildSpec defines the desired state of KogitoBuild.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#spec DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec;
}
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#annotations DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#labels DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#namespace DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact {
  /**
  * Indicates the unique base name of the primary artifact being generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#artifact_id DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * Indicates the unique identifier of the organization or group that created the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#group_id DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#group_id}
  */
  readonly groupId?: string;
  /**
  * Indicates the version of the artifact generated by the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#version DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._groupId = value.groupId;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#key DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#api_version DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#field_path DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#container_name DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#divisor DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#resource DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#key DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#optional DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#config_map_key_ref DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#field_ref DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#resource_field_ref DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#secret_key_ref DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromSecretKeyRef) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#name DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#value DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#value_from DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv | cdktf.IResolvable): any {
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
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvValueFrom) {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvOutputReference {
    return new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource {
  /**
  * Context/subdirectory where the code is located, relative to the repo root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#context_dir DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * Branch to use in the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#reference DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#reference}
  */
  readonly reference?: string;
  /**
  * Git URI for the s2i source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#uri DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#uri}
  */
  readonly uri: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    reference: cdktf.stringToTerraform(struct!.reference),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextDir = undefined;
      this._reference = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextDir = value.contextDir;
      this._reference = value.reference;
      this._uri = value.uri;
    }
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#limits DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#requests DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks {
  /**
  * Secret value for webHook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#secret DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * WebHook type, either GitHub or Generic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#type DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret = value.secret;
      this._type = value.type;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksOutputReference {
    return new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec {
  /**
  * Artifact contains override information for building the Maven artifact (used for Local Source builds). You might want to override this information when building from decisions, rules or process files. In this scenario the Kogito Images will generate a new Java project for you underneath. This information will be used to generate this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#artifact DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#artifact}
  */
  readonly artifact?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact;
  /**
  * Image used to build the Kogito Service from source (Local and Remote). If not defined the operator will use image provided by the Kogito Team based on the 'Runtime' field. Example: 'quay.io/kiegroup/kogito-jvm-builder:latest'. On OpenShift an ImageStream will be created in the current namespace pointing to the given image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#build_image DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#build_image}
  */
  readonly buildImage?: string;
  /**
  * DisableIncremental indicates that source to image builds should NOT be incremental. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#disable_incremental DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#disable_incremental}
  */
  readonly disableIncremental?: boolean | cdktf.IResolvable;
  /**
  * If set to true will print the logs for downloading/uploading of maven dependencies. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#enable_maven_download_output DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#enable_maven_download_output}
  */
  readonly enableMavenDownloadOutput?: boolean | cdktf.IResolvable;
  /**
  * Environment variables used during build time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#env DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#env}
  */
  readonly env?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Information about the git repository where the Kogito Service source code resides. Ignored for binary builds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#git_source DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#git_source}
  */
  readonly gitSource?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource;
  /**
  * Maven Mirror URL to be used during source-to-image builds (Local and Remote) to considerably increase build speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#maven_mirror_url DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#maven_mirror_url}
  */
  readonly mavenMirrorUrl?: string;
  /**
  * Native indicates if the Kogito Service built should be compiled to run on native mode when Runtime is Quarkus (Source to Image build only). For more information, see https://www.graalvm.org/docs/reference-manual/aot-compilation/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#native DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#native}
  */
  readonly native?: boolean | cdktf.IResolvable;
  /**
  * Resources Requirements for builder pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#resources DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources;
  /**
  * Which runtime Kogito service base image to use when building the Kogito service. If 'BuildImage' is set, this value is ignored by the operator. Default value: quarkus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#runtime DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#runtime}
  */
  readonly runtime?: string;
  /**
  * Image used as the base image for the final Kogito service. This image only has the required packages to run the application. For example: quarkus based services will have only JVM installed, native services only the packages required by the OS. If not defined the operator will use image provided by the Kogito Team based on the 'Runtime' field. Example: 'quay.io/kiegroup/kogito-jvm-builder:latest'. On OpenShift an ImageStream will be created in the current namespace pointing to the given image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#runtime_image DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#runtime_image}
  */
  readonly runtimeImage?: string;
  /**
  * Set this field targeting the desired KogitoRuntime when this KogitoBuild instance has a different name than the KogitoRuntime. By default this KogitoBuild instance will generate a final image named after its own name (.metadata.name). On OpenShift, an ImageStream will be created causing a redeployment on any KogitoRuntime with the same name. On Kubernetes, the final image will be pushed to the KogitoRuntime deployment. If you have multiple KogitoBuild instances (let's say BinaryBuildType and Remote Source), you might need that both target the same KogitoRuntime. Both KogitoBuilds will update the same ImageStream or generate a final image to the same KogitoRuntime deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#target_kogito_runtime DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#target_kogito_runtime}
  */
  readonly targetKogitoRuntime?: string;
  /**
  * Sets the type of build that this instance will handle: Binary - takes an uploaded binary file already compiled and creates a Kogito service image from it. RemoteSource - pulls the source code from a Git repository, builds the binary and then the final Kogito service image. LocalSource - takes an uploaded resource file such as DRL (rules), DMN (decision) or BPMN (process), builds the binary and the final Kogito service image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#type DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * WebHooks secrets for source to image builds based on Git repositories (Remote Sources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#web_hooks DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest#web_hooks}
  */
  readonly webHooks?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks[] | cdktf.IResolvable;
}

export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactToTerraform(struct!.artifact),
    build_image: cdktf.stringToTerraform(struct!.buildImage),
    disable_incremental: cdktf.booleanToTerraform(struct!.disableIncremental),
    enable_maven_download_output: cdktf.booleanToTerraform(struct!.enableMavenDownloadOutput),
    env: cdktf.listMapper(dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvToTerraform, false)(struct!.env),
    git_source: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceToTerraform(struct!.gitSource),
    maven_mirror_url: cdktf.stringToTerraform(struct!.mavenMirrorUrl),
    native: cdktf.booleanToTerraform(struct!.native),
    resources: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    runtime_image: cdktf.stringToTerraform(struct!.runtimeImage),
    target_kogito_runtime: cdktf.stringToTerraform(struct!.targetKogitoRuntime),
    type: cdktf.stringToTerraform(struct!.type),
    web_hooks: cdktf.listMapper(dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksToTerraform, false)(struct!.webHooks),
  }
}


export function dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact",
    },
    build_image: {
      value: cdktf.stringToHclTerraform(struct!.buildImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_incremental: {
      value: cdktf.booleanToHclTerraform(struct!.disableIncremental),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_maven_download_output: {
      value: cdktf.booleanToHclTerraform(struct!.enableMavenDownloadOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvList",
    },
    git_source: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource",
    },
    maven_mirror_url: {
      value: cdktf.stringToHclTerraform(struct!.mavenMirrorUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native: {
      value: cdktf.booleanToHclTerraform(struct!.native),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources",
    },
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_image: {
      value: cdktf.stringToHclTerraform(struct!.runtimeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_kogito_runtime: {
      value: cdktf.stringToHclTerraform(struct!.targetKogitoRuntime),
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
    web_hooks: {
      value: cdktf.listMapperHcl(dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksToHclTerraform, false)(struct!.webHooks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._buildImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildImage = this._buildImage;
    }
    if (this._disableIncremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIncremental = this._disableIncremental;
    }
    if (this._enableMavenDownloadOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMavenDownloadOutput = this._enableMavenDownloadOutput;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._gitSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSource = this._gitSource?.internalValue;
    }
    if (this._mavenMirrorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenMirrorUrl = this._mavenMirrorUrl;
    }
    if (this._native !== undefined) {
      hasAnyValues = true;
      internalValueResult.native = this._native;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._runtimeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeImage = this._runtimeImage;
    }
    if (this._targetKogitoRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKogitoRuntime = this._targetKogitoRuntime;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._webHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHooks = this._webHooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact.internalValue = undefined;
      this._buildImage = undefined;
      this._disableIncremental = undefined;
      this._enableMavenDownloadOutput = undefined;
      this._env.internalValue = undefined;
      this._gitSource.internalValue = undefined;
      this._mavenMirrorUrl = undefined;
      this._native = undefined;
      this._resources.internalValue = undefined;
      this._runtime = undefined;
      this._runtimeImage = undefined;
      this._targetKogitoRuntime = undefined;
      this._type = undefined;
      this._webHooks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifact.internalValue = value.artifact;
      this._buildImage = value.buildImage;
      this._disableIncremental = value.disableIncremental;
      this._enableMavenDownloadOutput = value.enableMavenDownloadOutput;
      this._env.internalValue = value.env;
      this._gitSource.internalValue = value.gitSource;
      this._mavenMirrorUrl = value.mavenMirrorUrl;
      this._native = value.native;
      this._resources.internalValue = value.resources;
      this._runtime = value.runtime;
      this._runtimeImage = value.runtimeImage;
      this._targetKogitoRuntime = value.targetKogitoRuntime;
      this._type = value.type;
      this._webHooks.internalValue = value.webHooks;
    }
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // build_image - computed: false, optional: true, required: false
  private _buildImage?: string; 
  public get buildImage() {
    return this.getStringAttribute('build_image');
  }
  public set buildImage(value: string) {
    this._buildImage = value;
  }
  public resetBuildImage() {
    this._buildImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageInput() {
    return this._buildImage;
  }

  // disable_incremental - computed: false, optional: true, required: false
  private _disableIncremental?: boolean | cdktf.IResolvable; 
  public get disableIncremental() {
    return this.getBooleanAttribute('disable_incremental');
  }
  public set disableIncremental(value: boolean | cdktf.IResolvable) {
    this._disableIncremental = value;
  }
  public resetDisableIncremental() {
    this._disableIncremental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIncrementalInput() {
    return this._disableIncremental;
  }

  // enable_maven_download_output - computed: false, optional: true, required: false
  private _enableMavenDownloadOutput?: boolean | cdktf.IResolvable; 
  public get enableMavenDownloadOutput() {
    return this.getBooleanAttribute('enable_maven_download_output');
  }
  public set enableMavenDownloadOutput(value: boolean | cdktf.IResolvable) {
    this._enableMavenDownloadOutput = value;
  }
  public resetEnableMavenDownloadOutput() {
    this._enableMavenDownloadOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMavenDownloadOutputInput() {
    return this._enableMavenDownloadOutput;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // git_source - computed: false, optional: true, required: false
  private _gitSource = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecGitSource) {
    this._gitSource.internalValue = value;
  }
  public resetGitSource() {
    this._gitSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSourceInput() {
    return this._gitSource.internalValue;
  }

  // maven_mirror_url - computed: false, optional: true, required: false
  private _mavenMirrorUrl?: string; 
  public get mavenMirrorUrl() {
    return this.getStringAttribute('maven_mirror_url');
  }
  public set mavenMirrorUrl(value: string) {
    this._mavenMirrorUrl = value;
  }
  public resetMavenMirrorUrl() {
    this._mavenMirrorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenMirrorUrlInput() {
    return this._mavenMirrorUrl;
  }

  // native - computed: false, optional: true, required: false
  private _native?: boolean | cdktf.IResolvable; 
  public get native() {
    return this.getBooleanAttribute('native');
  }
  public set native(value: boolean | cdktf.IResolvable) {
    this._native = value;
  }
  public resetNative() {
    this._native = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeInput() {
    return this._native;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // runtime_image - computed: false, optional: true, required: false
  private _runtimeImage?: string; 
  public get runtimeImage() {
    return this.getStringAttribute('runtime_image');
  }
  public set runtimeImage(value: string) {
    this._runtimeImage = value;
  }
  public resetRuntimeImage() {
    this._runtimeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeImageInput() {
    return this._runtimeImage;
  }

  // target_kogito_runtime - computed: false, optional: true, required: false
  private _targetKogitoRuntime?: string; 
  public get targetKogitoRuntime() {
    return this.getStringAttribute('target_kogito_runtime');
  }
  public set targetKogitoRuntime(value: string) {
    this._targetKogitoRuntime = value;
  }
  public resetTargetKogitoRuntime() {
    this._targetKogitoRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKogitoRuntimeInput() {
    return this._targetKogitoRuntime;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // web_hooks - computed: false, optional: true, required: false
  private _webHooks = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooksList(this, "web_hooks", false);
  public get webHooks() {
    return this._webHooks;
  }
  public putWebHooks(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecWebHooks[] | cdktf.IResolvable) {
    this._webHooks.internalValue = value;
  }
  public resetWebHooks() {
    this._webHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHooksInput() {
    return this._webHooks.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest k8s_app_kiegroup_org_kogito_build_v1beta1_manifest}
*/
export class DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_kiegroup_org_kogito_build_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppKiegroupOrgKogitoBuildV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_kiegroup_org_kogito_build_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/app_kiegroup_org_kogito_build_v1beta1_manifest k8s_app_kiegroup_org_kogito_build_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_kiegroup_org_kogito_build_v1beta1_manifest',
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
  private _metadata = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppKiegroupOrgKogitoBuildV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
