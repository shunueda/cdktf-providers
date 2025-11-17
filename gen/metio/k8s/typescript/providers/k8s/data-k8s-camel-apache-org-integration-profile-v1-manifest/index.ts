// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#metadata DataK8SCamelApacheOrgIntegrationProfileV1Manifest#metadata}
  */
  readonly metadata: DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata;
  /**
  * IntegrationProfileSpec applies user defined settings to the IntegrationProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#spec DataK8SCamelApacheOrgIntegrationProfileV1Manifest#spec}
  */
  readonly spec?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec;
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#namespace DataK8SCamelApacheOrgIntegrationProfileV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsOutputReference {
    return new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#artifact_id DataK8SCamelApacheOrgIntegrationProfileV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#classifier DataK8SCamelApacheOrgIntegrationProfileV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#group_id DataK8SCamelApacheOrgIntegrationProfileV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#version DataK8SCamelApacheOrgIntegrationProfileV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension | cdktf.IResolvable): any {
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
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
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
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionOutputReference {
    return new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#secret_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesSecretKeyRef) {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesOutputReference {
    return new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#secret_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecretKeyRef) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#optional DataK8SCamelApacheOrgIntegrationProfileV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#secret_key_ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecuritySecretKeyRef) {
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven {
  /**
  * The Secrets name and key, containing the CA certificate(s) used to connect to remote Maven repositories. It can contain X.509 certificates, and PKCS#7 formatted certificate chains. A JKS formatted keystore is automatically created to store the CA certificate(s), and configured to be used as a trusted certificate(s) by the Maven commands. Note that the root CA certificates are also imported into the created keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ca_secrets DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ca_secrets}
  */
  readonly caSecrets?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets[] | cdktf.IResolvable;
  /**
  * The CLI options that are appended to the list of arguments for Maven commands, e.g., '-V,--no-transfer-progress,-Dstyle.color=never'. See https://maven.apache.org/ref/3.8.4/maven-embedder/cli.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#cli_options DataK8SCamelApacheOrgIntegrationProfileV1Manifest#cli_options}
  */
  readonly cliOptions?: string[];
  /**
  * The Maven build extensions. See https://maven.apache.org/guides/mini/guide-using-extensions.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#extension DataK8SCamelApacheOrgIntegrationProfileV1Manifest#extension}
  */
  readonly extension?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension[] | cdktf.IResolvable;
  /**
  * The path of the local Maven repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#local_repository DataK8SCamelApacheOrgIntegrationProfileV1Manifest#local_repository}
  */
  readonly localRepository?: string;
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#profiles DataK8SCamelApacheOrgIntegrationProfileV1Manifest#profiles}
  */
  readonly profiles?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles[] | cdktf.IResolvable;
  /**
  * The Maven properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#properties DataK8SCamelApacheOrgIntegrationProfileV1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#settings DataK8SCamelApacheOrgIntegrationProfileV1Manifest#settings}
  */
  readonly settings?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings;
  /**
  * A reference to the ConfigMap or Secret key that contains the security of the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#settings_security DataK8SCamelApacheOrgIntegrationProfileV1Manifest#settings_security}
  */
  readonly settingsSecurity?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secrets: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsToTerraform, false)(struct!.caSecrets),
    cli_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cliOptions),
    extension: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionToTerraform, false)(struct!.extension),
    local_repository: cdktf.stringToTerraform(struct!.localRepository),
    profiles: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesToTerraform, false)(struct!.profiles),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    settings: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsToTerraform(struct!.settings),
    settings_security: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityToTerraform(struct!.settingsSecurity),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secrets: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsToHclTerraform, false)(struct!.caSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsList",
    },
    cli_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cliOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extension: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionToHclTerraform, false)(struct!.extension),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionList",
    },
    local_repository: {
      value: cdktf.stringToHclTerraform(struct!.localRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesToHclTerraform, false)(struct!.profiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesList",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    settings: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings",
    },
    settings_security: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityToHclTerraform(struct!.settingsSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecrets = this._caSecrets?.internalValue;
    }
    if (this._cliOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOptions = this._cliOptions;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._localRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRepository = this._localRepository;
    }
    if (this._profiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._settingsSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsSecurity = this._settingsSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = undefined;
      this._cliOptions = undefined;
      this._extension.internalValue = undefined;
      this._localRepository = undefined;
      this._profiles.internalValue = undefined;
      this._properties = undefined;
      this._settings.internalValue = undefined;
      this._settingsSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = value.caSecrets;
      this._cliOptions = value.cliOptions;
      this._extension.internalValue = value.extension;
      this._localRepository = value.localRepository;
      this._profiles.internalValue = value.profiles;
      this._properties = value.properties;
      this._settings.internalValue = value.settings;
      this._settingsSecurity.internalValue = value.settingsSecurity;
    }
  }

  // ca_secrets - computed: false, optional: true, required: false
  private _caSecrets = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecretsList(this, "ca_secrets", false);
  public get caSecrets() {
    return this._caSecrets;
  }
  public putCaSecrets(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenCaSecrets[] | cdktf.IResolvable) {
    this._caSecrets.internalValue = value;
  }
  public resetCaSecrets() {
    this._caSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretsInput() {
    return this._caSecrets.internalValue;
  }

  // cli_options - computed: false, optional: true, required: false
  private _cliOptions?: string[]; 
  public get cliOptions() {
    return this.getListAttribute('cli_options');
  }
  public set cliOptions(value: string[]) {
    this._cliOptions = value;
  }
  public resetCliOptions() {
    this._cliOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOptionsInput() {
    return this._cliOptions;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtensionList(this, "extension", false);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // local_repository - computed: false, optional: true, required: false
  private _localRepository?: string; 
  public get localRepository() {
    return this.getStringAttribute('local_repository');
  }
  public set localRepository(value: string) {
    this._localRepository = value;
  }
  public resetLocalRepository() {
    this._localRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRepositoryInput() {
    return this._localRepository;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenProfiles[] | cdktf.IResolvable) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // settings_security - computed: false, optional: true, required: false
  private _settingsSecurity = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurityOutputReference(this, "settings_security");
  public get settingsSecurity() {
    return this._settingsSecurity;
  }
  public putSettingsSecurity(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenSettingsSecurity) {
    this._settingsSecurity.internalValue = value;
  }
  public resetSettingsSecurity() {
    this._settingsSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsSecurityInput() {
    return this._settingsSecurity.internalValue;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#address DataK8SCamelApacheOrgIntegrationProfileV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ca DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#insecure DataK8SCamelApacheOrgIntegrationProfileV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#organization DataK8SCamelApacheOrgIntegrationProfileV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild {
  /**
  * a base image that can be used as base layer for all images. It can be useful if you want to provide some custom base image with further utility software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#base_image DataK8SCamelApacheOrgIntegrationProfileV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * Maven configuration used to build the Camel/Camel-Quarkus applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#maven DataK8SCamelApacheOrgIntegrationProfileV1Manifest#maven}
  */
  readonly maven?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven;
  /**
  * the image registry used to push/pull Integration images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#registry DataK8SCamelApacheOrgIntegrationProfileV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry;
  /**
  * the runtime used. Likely Camel Quarkus (we used to have main runtime which has been discontinued since version 1.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#runtime_provider DataK8SCamelApacheOrgIntegrationProfileV1Manifest#runtime_provider}
  */
  readonly runtimeProvider?: string;
  /**
  * the Camel K Runtime dependency version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#runtime_version DataK8SCamelApacheOrgIntegrationProfileV1Manifest#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * how much time to wait before time out the pipeline process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#timeout DataK8SCamelApacheOrgIntegrationProfileV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    maven: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenToTerraform(struct!.maven),
    registry: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryToTerraform(struct!.registry),
    runtime_provider: cdktf.stringToTerraform(struct!.runtimeProvider),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maven: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven",
    },
    registry: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry",
    },
    runtime_provider: {
      value: cdktf.stringToHclTerraform(struct!.runtimeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._runtimeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProvider = this._runtimeProvider;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._maven.internalValue = undefined;
      this._registry.internalValue = undefined;
      this._runtimeProvider = undefined;
      this._runtimeVersion = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._maven.internalValue = value.maven;
      this._registry.internalValue = value.registry;
      this._runtimeProvider = value.runtimeProvider;
      this._runtimeVersion = value.runtimeVersion;
      this._timeout = value.timeout;
    }
  }

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }

  // runtime_provider - computed: false, optional: true, required: false
  private _runtimeProvider?: string; 
  public get runtimeProvider() {
    return this.getStringAttribute('runtime_provider');
  }
  public set runtimeProvider(value: string) {
    this._runtimeProvider = value;
  }
  public resetRuntimeProvider() {
    this._runtimeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProviderInput() {
    return this._runtimeProvider;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories {
  /**
  * the remote repository in the format github:ORG/REPO/PATH_TO_KAMELETS_FOLDER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#uri DataK8SCamelApacheOrgIntegrationProfileV1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesOutputReference {
    return new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet {
  /**
  * remote repository used to retrieve Kamelet catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#repositories DataK8SCamelApacheOrgIntegrationProfileV1Manifest#repositories}
  */
  readonly repositories?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repositories: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesToTerraform, false)(struct!.repositories),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repositories: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesToHclTerraform, false)(struct!.repositories),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositories.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositories.internalValue = value.repositories;
    }
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositoriesList(this, "repositories", false);
  public get repositories() {
    return this._repositories;
  }
  public putRepositories(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletRepositories[] | cdktf.IResolvable) {
    this._repositories.internalValue = value;
  }
  public resetRepositories() {
    this._repositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories.internalValue;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines a set of nodes the integration pod(s) are eligible to be scheduled on, based on labels on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#node_affinity_labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#node_affinity_labels}
  */
  readonly nodeAffinityLabels?: string[];
  /**
  * Always co-locates multiple replicas of the integration in the same node (default 'false').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_affinity DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_affinity}
  */
  readonly podAffinity?: boolean | cdktf.IResolvable;
  /**
  * Defines a set of pods (namely those matching the label selector, relative to the given namespace) that the integration pod(s) should be co-located with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_affinity_labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_affinity_labels}
  */
  readonly podAffinityLabels?: string[];
  /**
  * Never co-locates multiple replicas of the integration in the same node (default 'false').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_anti_affinity DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: boolean | cdktf.IResolvable;
  /**
  * Defines a set of pods (namely those matching the label selector, relative to the given namespace) that the integration pod(s) should not be co-located with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_anti_affinity_labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_anti_affinity_labels}
  */
  readonly podAntiAffinityLabels?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    node_affinity_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeAffinityLabels),
    pod_affinity: cdktf.booleanToTerraform(struct!.podAffinity),
    pod_affinity_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAffinityLabels),
    pod_anti_affinity: cdktf.booleanToTerraform(struct!.podAntiAffinity),
    pod_anti_affinity_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAntiAffinityLabels),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_affinity_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeAffinityLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.podAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_affinity_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAffinityLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_anti_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.podAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_anti_affinity_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAntiAffinityLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nodeAffinityLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityLabels = this._nodeAffinityLabels;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAffinityLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityLabels = this._podAffinityLabels;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    if (this._podAntiAffinityLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinityLabels = this._podAntiAffinityLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._nodeAffinityLabels = undefined;
      this._podAffinity = undefined;
      this._podAffinityLabels = undefined;
      this._podAntiAffinity = undefined;
      this._podAntiAffinityLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._nodeAffinityLabels = value.nodeAffinityLabels;
      this._podAffinity = value.podAffinity;
      this._podAffinityLabels = value.podAffinityLabels;
      this._podAntiAffinity = value.podAntiAffinity;
      this._podAntiAffinityLabels = value.podAntiAffinityLabels;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: string[]; 
  public get nodeAffinityLabels() {
    return this.getListAttribute('node_affinity_labels');
  }
  public set nodeAffinityLabels(value: string[]) {
    this._nodeAffinityLabels = value;
  }
  public resetNodeAffinityLabels() {
    this._nodeAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityLabelsInput() {
    return this._nodeAffinityLabels;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: boolean | cdktf.IResolvable; 
  public get podAffinity() {
    return this.getBooleanAttribute('pod_affinity');
  }
  public set podAffinity(value: boolean | cdktf.IResolvable) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_affinity_labels - computed: false, optional: true, required: false
  private _podAffinityLabels?: string[]; 
  public get podAffinityLabels() {
    return this.getListAttribute('pod_affinity_labels');
  }
  public set podAffinityLabels(value: string[]) {
    this._podAffinityLabels = value;
  }
  public resetPodAffinityLabels() {
    this._podAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityLabelsInput() {
    return this._podAffinityLabels;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: boolean | cdktf.IResolvable; 
  public get podAntiAffinity() {
    return this.getBooleanAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: boolean | cdktf.IResolvable) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }

  // pod_anti_affinity_labels - computed: false, optional: true, required: false
  private _podAntiAffinityLabels?: string[]; 
  public get podAntiAffinityLabels() {
    return this.getListAttribute('pod_anti_affinity_labels');
  }
  public set podAntiAffinityLabels(value: string[]) {
    this._podAntiAffinityLabels = value;
  }
  public resetPodAntiAffinityLabels() {
    this._podAntiAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityLabelsInput() {
    return this._podAntiAffinityLabels;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder {
  /**
  * When using 'pod' strategy, annotation to use for the builder pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Specify a base image. In order to have the application working properly it must be a container image which has a Java JDK installed and ready to use on path (ie '/usr/bin/java').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#base_image DataK8SCamelApacheOrgIntegrationProfileV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use the incremental image build option, to reuse existing containers (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#incremental_image_build DataK8SCamelApacheOrgIntegrationProfileV1Manifest#incremental_image_build}
  */
  readonly incrementalImageBuild?: boolean | cdktf.IResolvable;
  /**
  * When using 'pod' strategy, the maximum amount of CPU required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#limit_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * When using 'pod' strategy, the maximum amount of memory required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#limit_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * A list of references pointing to configmaps/secrets that contains a maven profile. This configmap/secret is a resource of the IntegrationKit created, therefore it needs to be present in the namespace where the operator is going to create the IntegrationKit. The content of the maven profile is expected to be a text containing a valid maven profile starting with '<profile>' and ending with '</profile>' that will be integrated as an inline profile in the POM. Syntax: [configmap|secret]:name[/key], where name represents the resource name, key optionally represents the resource key to be filtered (default key value = profile.xml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#maven_profiles DataK8SCamelApacheOrgIntegrationProfileV1Manifest#maven_profiles}
  */
  readonly mavenProfiles?: string[];
  /**
  * Defines a set of nodes the builder pod is eligible to be scheduled on, based on labels on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#node_selector DataK8SCamelApacheOrgIntegrationProfileV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The build order strategy to use, either 'dependencies', 'fifo' or 'sequential' (default is the platform default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#order_strategy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of manifest platforms to use to build a container image (default 'linux/amd64').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#platforms DataK8SCamelApacheOrgIntegrationProfileV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * A list of properties to be provided to the build task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#properties DataK8SCamelApacheOrgIntegrationProfileV1Manifest#properties}
  */
  readonly properties?: string[];
  /**
  * When using 'pod' strategy, the minimum amount of CPU required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#request_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * When using 'pod' strategy, the minimum amount of memory required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#request_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * The strategy to use, either 'pod' or 'routine' (default 'routine')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#strategy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * A list of tasks to be executed (available only when using 'pod' strategy) with format '<name>;<container-image>;<container-command>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks}
  */
  readonly tasks?: string[];
  /**
  * A list of tasks sorted by the order of execution in a csv format, ie, '<taskName1>,<taskName2>,...'. Mind that you must include also the operator tasks ('builder', 'quarkus-native', 'package', 'jib', 's2i') if you need to execute them. Useful only with 'pod' strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks_filter DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks_filter}
  */
  readonly tasksFilter?: string;
  /**
  * A list of limit cpu configuration for the specific task with format '<task-name>:<limit-cpu-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks_limit_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks_limit_cpu}
  */
  readonly tasksLimitCpu?: string[];
  /**
  * A list of limit memory configuration for the specific task with format '<task-name>:<limit-memory-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks_limit_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks_limit_memory}
  */
  readonly tasksLimitMemory?: string[];
  /**
  * A list of request cpu configuration for the specific task with format '<task-name>:<request-cpu-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks_request_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks_request_cpu}
  */
  readonly tasksRequestCpu?: string[];
  /**
  * A list of request memory configuration for the specific task with format '<task-name>:<request-memory-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tasks_request_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tasks_request_memory}
  */
  readonly tasksRequestMemory?: string[];
  /**
  * Enable verbose logging on build components that support it (e.g. Kaniko build pod). Deprecated no longer in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#verbose DataK8SCamelApacheOrgIntegrationProfileV1Manifest#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    incremental_image_build: cdktf.booleanToTerraform(struct!.incrementalImageBuild),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    maven_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mavenProfiles),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasks),
    tasks_filter: cdktf.stringToTerraform(struct!.tasksFilter),
    tasks_limit_cpu: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksLimitCpu),
    tasks_limit_memory: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksLimitMemory),
    tasks_request_cpu: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksRequestCpu),
    tasks_request_memory: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksRequestMemory),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder | cdktf.IResolvable): any {
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
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    incremental_image_build: {
      value: cdktf.booleanToHclTerraform(struct!.incrementalImageBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maven_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mavenProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    order_strategy: {
      value: cdktf.stringToHclTerraform(struct!.orderStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
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
    tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_filter: {
      value: cdktf.stringToHclTerraform(struct!.tasksFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks_limit_cpu: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksLimitCpu),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_limit_memory: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksLimitMemory),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_request_cpu: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksRequestCpu),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_request_memory: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksRequestMemory),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbose: {
      value: cdktf.booleanToHclTerraform(struct!.verbose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._incrementalImageBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalImageBuild = this._incrementalImageBuild;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._mavenProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenProfiles = this._mavenProfiles;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._tasksFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksFilter = this._tasksFilter;
    }
    if (this._tasksLimitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksLimitCpu = this._tasksLimitCpu;
    }
    if (this._tasksLimitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksLimitMemory = this._tasksLimitMemory;
    }
    if (this._tasksRequestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksRequestCpu = this._tasksRequestCpu;
    }
    if (this._tasksRequestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksRequestMemory = this._tasksRequestMemory;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._baseImage = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._incrementalImageBuild = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._mavenProfiles = undefined;
      this._nodeSelector = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._properties = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._tasks = undefined;
      this._tasksFilter = undefined;
      this._tasksLimitCpu = undefined;
      this._tasksLimitMemory = undefined;
      this._tasksRequestCpu = undefined;
      this._tasksRequestMemory = undefined;
      this._verbose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._baseImage = value.baseImage;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._incrementalImageBuild = value.incrementalImageBuild;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._mavenProfiles = value.mavenProfiles;
      this._nodeSelector = value.nodeSelector;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._properties = value.properties;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._tasks = value.tasks;
      this._tasksFilter = value.tasksFilter;
      this._tasksLimitCpu = value.tasksLimitCpu;
      this._tasksLimitMemory = value.tasksLimitMemory;
      this._tasksRequestCpu = value.tasksRequestCpu;
      this._tasksRequestMemory = value.tasksRequestMemory;
      this._verbose = value.verbose;
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

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // incremental_image_build - computed: false, optional: true, required: false
  private _incrementalImageBuild?: boolean | cdktf.IResolvable; 
  public get incrementalImageBuild() {
    return this.getBooleanAttribute('incremental_image_build');
  }
  public set incrementalImageBuild(value: boolean | cdktf.IResolvable) {
    this._incrementalImageBuild = value;
  }
  public resetIncrementalImageBuild() {
    this._incrementalImageBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalImageBuildInput() {
    return this._incrementalImageBuild;
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // maven_profiles - computed: false, optional: true, required: false
  private _mavenProfiles?: string[]; 
  public get mavenProfiles() {
    return this.getListAttribute('maven_profiles');
  }
  public set mavenProfiles(value: string[]) {
    this._mavenProfiles = value;
  }
  public resetMavenProfiles() {
    this._mavenProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenProfilesInput() {
    return this._mavenProfiles;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // order_strategy - computed: false, optional: true, required: false
  private _orderStrategy?: string; 
  public get orderStrategy() {
    return this.getStringAttribute('order_strategy');
  }
  public set orderStrategy(value: string) {
    this._orderStrategy = value;
  }
  public resetOrderStrategy() {
    this._orderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderStrategyInput() {
    return this._orderStrategy;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return this.getListAttribute('platforms');
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
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

  // tasks - computed: false, optional: true, required: false
  private _tasks?: string[]; 
  public get tasks() {
    return this.getListAttribute('tasks');
  }
  public set tasks(value: string[]) {
    this._tasks = value;
  }
  public resetTasks() {
    this._tasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }

  // tasks_filter - computed: false, optional: true, required: false
  private _tasksFilter?: string; 
  public get tasksFilter() {
    return this.getStringAttribute('tasks_filter');
  }
  public set tasksFilter(value: string) {
    this._tasksFilter = value;
  }
  public resetTasksFilter() {
    this._tasksFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksFilterInput() {
    return this._tasksFilter;
  }

  // tasks_limit_cpu - computed: false, optional: true, required: false
  private _tasksLimitCpu?: string[]; 
  public get tasksLimitCpu() {
    return this.getListAttribute('tasks_limit_cpu');
  }
  public set tasksLimitCpu(value: string[]) {
    this._tasksLimitCpu = value;
  }
  public resetTasksLimitCpu() {
    this._tasksLimitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksLimitCpuInput() {
    return this._tasksLimitCpu;
  }

  // tasks_limit_memory - computed: false, optional: true, required: false
  private _tasksLimitMemory?: string[]; 
  public get tasksLimitMemory() {
    return this.getListAttribute('tasks_limit_memory');
  }
  public set tasksLimitMemory(value: string[]) {
    this._tasksLimitMemory = value;
  }
  public resetTasksLimitMemory() {
    this._tasksLimitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksLimitMemoryInput() {
    return this._tasksLimitMemory;
  }

  // tasks_request_cpu - computed: false, optional: true, required: false
  private _tasksRequestCpu?: string[]; 
  public get tasksRequestCpu() {
    return this.getListAttribute('tasks_request_cpu');
  }
  public set tasksRequestCpu(value: string[]) {
    this._tasksRequestCpu = value;
  }
  public resetTasksRequestCpu() {
    this._tasksRequestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksRequestCpuInput() {
    return this._tasksRequestCpu;
  }

  // tasks_request_memory - computed: false, optional: true, required: false
  private _tasksRequestMemory?: string[]; 
  public get tasksRequestMemory() {
    return this.getListAttribute('tasks_request_memory');
  }
  public set tasksRequestMemory(value: string[]) {
    this._tasksRequestMemory = value;
  }
  public resetTasksRequestMemory() {
    this._tasksRequestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksRequestMemoryInput() {
    return this._tasksRequestMemory;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of properties to be provided to the Integration runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#properties DataK8SCamelApacheOrgIntegrationProfileV1Manifest#properties}
  */
  readonly properties?: string[];
  /**
  * The camel-k-runtime version to use for the integration. It overrides the default version set in the Integration Platform. You can use a fixed version (for example '3.2.3') or a semantic version (for example '3.x') which will try to resolve to the best matching Catalog existing on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#runtime_version DataK8SCamelApacheOrgIntegrationProfileV1Manifest#runtime_version}
  */
  readonly runtimeVersion?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._properties = undefined;
      this._runtimeVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._properties = value.properties;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer {
  /**
  * Security Context AllowPrivilegeEscalation configuration (default false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#allow_privilege_escalation DataK8SCamelApacheOrgIntegrationProfileV1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * To automatically enable the trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Security Context Capabilities Add configuration (default none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#capabilities_add DataK8SCamelApacheOrgIntegrationProfileV1Manifest#capabilities_add}
  */
  readonly capabilitiesAdd?: string[];
  /**
  * Security Context Capabilities Drop configuration (default ALL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#capabilities_drop DataK8SCamelApacheOrgIntegrationProfileV1Manifest#capabilities_drop}
  */
  readonly capabilitiesDrop?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Can be used to enable/disable exposure via kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#expose DataK8SCamelApacheOrgIntegrationProfileV1Manifest#expose}
  */
  readonly expose?: boolean | cdktf.IResolvable;
  /**
  * The main container image to use for the Integration. When using this parameter the operator will create a synthetic IntegrationKit which won't be able to execute traits requiring CamelCatalog. If the container image you're using is coming from an IntegrationKit, use instead Integration '.spec.integrationKit' parameter. If you're moving the Integration across environments, you will also need to create an 'external' IntegrationKit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#image DataK8SCamelApacheOrgIntegrationProfileV1Manifest#image}
  */
  readonly image?: string;
  /**
  * The pull policy: Always|Never|IfNotPresent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#image_pull_policy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The maximum amount of CPU to be provided (default 500 millicores).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#limit_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory to be provided (default 512 Mi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#limit_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The main container name. It's named 'integration' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#name}
  */
  readonly name?: string;
  /**
  * To configure a different port exposed by the container (default '8080').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#port DataK8SCamelApacheOrgIntegrationProfileV1Manifest#port}
  */
  readonly port?: number;
  /**
  * To configure a different port name for the port exposed by the container. It defaults to 'http' only when the 'expose' parameter is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#port_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * The minimum amount of CPU required (default 125 millicores).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#request_cpu DataK8SCamelApacheOrgIntegrationProfileV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required (default 128 Mi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#request_memory DataK8SCamelApacheOrgIntegrationProfileV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * Security Context RunAsNonRoot configuration (default false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#run_as_non_root DataK8SCamelApacheOrgIntegrationProfileV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Security Context RunAsUser configuration (default none): this value is automatically retrieved in Openshift clusters when not explicitly set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#run_as_user DataK8SCamelApacheOrgIntegrationProfileV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Security Context SeccompProfileType configuration (default RuntimeDefault).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#seccomp_profile_type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#seccomp_profile_type}
  */
  readonly seccompProfileType?: string;
  /**
  * To configure under which service port the container port is to be exposed (default '80').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#service_port DataK8SCamelApacheOrgIntegrationProfileV1Manifest#service_port}
  */
  readonly servicePort?: number;
  /**
  * To configure under which service port name the container port is to be exposed (default 'http').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#service_port_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#service_port_name}
  */
  readonly servicePortName?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    auto: cdktf.booleanToTerraform(struct!.auto),
    capabilities_add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilitiesAdd),
    capabilities_drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilitiesDrop),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expose: cdktf.booleanToTerraform(struct!.expose),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    seccomp_profile_type: cdktf.stringToTerraform(struct!.seccompProfileType),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    service_port_name: cdktf.stringToTerraform(struct!.servicePortName),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities_add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilitiesAdd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capabilities_drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilitiesDrop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose: {
      value: cdktf.booleanToHclTerraform(struct!.expose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seccomp_profile_type: {
      value: cdktf.stringToHclTerraform(struct!.seccompProfileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_port_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._capabilitiesAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilitiesAdd = this._capabilitiesAdd;
    }
    if (this._capabilitiesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilitiesDrop = this._capabilitiesDrop;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expose !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seccompProfileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfileType = this._seccompProfileType;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._servicePortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePortName = this._servicePortName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._auto = undefined;
      this._capabilitiesAdd = undefined;
      this._capabilitiesDrop = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._expose = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._name = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seccompProfileType = undefined;
      this._servicePort = undefined;
      this._servicePortName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._auto = value.auto;
      this._capabilitiesAdd = value.capabilitiesAdd;
      this._capabilitiesDrop = value.capabilitiesDrop;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._expose = value.expose;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._name = value.name;
      this._port = value.port;
      this._portName = value.portName;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seccompProfileType = value.seccompProfileType;
      this._servicePort = value.servicePort;
      this._servicePortName = value.servicePortName;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // capabilities_add - computed: false, optional: true, required: false
  private _capabilitiesAdd?: string[]; 
  public get capabilitiesAdd() {
    return this.getListAttribute('capabilities_add');
  }
  public set capabilitiesAdd(value: string[]) {
    this._capabilitiesAdd = value;
  }
  public resetCapabilitiesAdd() {
    this._capabilitiesAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesAddInput() {
    return this._capabilitiesAdd;
  }

  // capabilities_drop - computed: false, optional: true, required: false
  private _capabilitiesDrop?: string[]; 
  public get capabilitiesDrop() {
    return this.getListAttribute('capabilities_drop');
  }
  public set capabilitiesDrop(value: string[]) {
    this._capabilitiesDrop = value;
  }
  public resetCapabilitiesDrop() {
    this._capabilitiesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesDropInput() {
    return this._capabilitiesDrop;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // expose - computed: false, optional: true, required: false
  private _expose?: boolean | cdktf.IResolvable; 
  public get expose() {
    return this.getBooleanAttribute('expose');
  }
  public set expose(value: boolean | cdktf.IResolvable) {
    this._expose = value;
  }
  public resetExpose() {
    this._expose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
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

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // seccomp_profile_type - computed: false, optional: true, required: false
  private _seccompProfileType?: string; 
  public get seccompProfileType() {
    return this.getStringAttribute('seccomp_profile_type');
  }
  public set seccompProfileType(value: string) {
    this._seccompProfileType = value;
  }
  public resetSeccompProfileType() {
    this._seccompProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileTypeInput() {
    return this._seccompProfileType;
  }

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // service_port_name - computed: false, optional: true, required: false
  private _servicePortName?: string; 
  public get servicePortName() {
    return this.getStringAttribute('service_port_name');
  }
  public set servicePortName(value: string) {
    this._servicePortName = value;
  }
  public resetServicePortName() {
    this._servicePortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortNameInput() {
    return this._servicePortName;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron {
  /**
  * Specifies the duration in seconds, relative to the start time, that the job may be continuously active before it is considered to be failed. It defaults to 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#active_deadline_seconds DataK8SCamelApacheOrgIntegrationProfileV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Automatically deploy the integration as CronJob when all routes are either starting from a periodic consumer (only 'cron', 'timer' and 'quartz' are supported) or a passive consumer (e.g. 'direct' is a passive consumer). It's required that all periodic consumers have the same period, and it can be expressed as cron schedule (e.g. '1m' can be expressed as '0/1 * * * *', while '35m' or '50s' cannot).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of retries before marking the job failed. It defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#backoff_limit DataK8SCamelApacheOrgIntegrationProfileV1Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * A comma separated list of the Camel components that need to be customized in order for them to work when the schedule is triggered externally by Kubernetes. Supported components are currently: 'cron', 'timer' and 'quartz'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#components DataK8SCamelApacheOrgIntegrationProfileV1Manifest#components}
  */
  readonly components?: string;
  /**
  * Specifies how to treat concurrent executions of a Job. Valid values are: - 'Allow': allows CronJobs to run concurrently; - 'Forbid' (default): forbids concurrent runs, skipping next run if previous run hasn't finished yet; - 'Replace': cancels currently running job and replaces it with a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#concurrency_policy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use the default Camel implementation of the 'cron' endpoint ('quartz') instead of trying to materialize the integration as Kubernetes CronJob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#fallback DataK8SCamelApacheOrgIntegrationProfileV1Manifest#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * The CronJob schedule for the whole integration. If multiple routes are declared, they must have the same schedule for this mechanism to work correctly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#schedule DataK8SCamelApacheOrgIntegrationProfileV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Optional deadline in seconds for starting the job if it misses scheduled time for any reason. Missed jobs executions will be counted as failed ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#starting_deadline_seconds DataK8SCamelApacheOrgIntegrationProfileV1Manifest#starting_deadline_seconds}
  */
  readonly startingDeadlineSeconds?: number;
  /**
  * The timezone that the CronJob will run on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#time_zone DataK8SCamelApacheOrgIntegrationProfileV1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    auto: cdktf.booleanToTerraform(struct!.auto),
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    components: cdktf.stringToTerraform(struct!.components),
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback: cdktf.booleanToTerraform(struct!.fallback),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    starting_deadline_seconds: cdktf.numberToTerraform(struct!.startingDeadlineSeconds),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    components: {
      value: cdktf.stringToHclTerraform(struct!.components),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback: {
      value: cdktf.booleanToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.startingDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._startingDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingDeadlineSeconds = this._startingDeadlineSeconds;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._auto = undefined;
      this._backoffLimit = undefined;
      this._components = undefined;
      this._concurrencyPolicy = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._fallback = undefined;
      this._schedule = undefined;
      this._startingDeadlineSeconds = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._auto = value.auto;
      this._backoffLimit = value.backoffLimit;
      this._components = value.components;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._fallback = value.fallback;
      this._schedule = value.schedule;
      this._startingDeadlineSeconds = value.startingDeadlineSeconds;
      this._timeZone = value.timeZone;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
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

  // components - computed: false, optional: true, required: false
  private _components?: string; 
  public get components() {
    return this.getStringAttribute('components');
  }
  public set components(value: string) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // concurrency_policy - computed: false, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // fallback - computed: false, optional: true, required: false
  private _fallback?: boolean | cdktf.IResolvable; 
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }
  public set fallback(value: boolean | cdktf.IResolvable) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // starting_deadline_seconds - computed: false, optional: true, required: false
  private _startingDeadlineSeconds?: number; 
  public get startingDeadlineSeconds() {
    return this.getNumberAttribute('starting_deadline_seconds');
  }
  public set startingDeadlineSeconds(value: number) {
    this._startingDeadlineSeconds = value;
  }
  public resetStartingDeadlineSeconds() {
    this._startingDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingDeadlineSecondsInput() {
    return this._startingDeadlineSeconds;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Allows to explicitly select the desired deployment kind between 'deployment', 'cron-job' or 'knative-service' when creating the resources for running the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#kind DataK8SCamelApacheOrgIntegrationProfileV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Deprecated: won't be able to enforce client side update in the future. Use server-side apply to update the owned resources (default 'true'). Note that it automatically falls back to client-side patching, if SSA is not available, e.g., on old Kubernetes clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#use_ssa DataK8SCamelApacheOrgIntegrationProfileV1Manifest#use_ssa}
  */
  readonly useSsa?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kind: cdktf.stringToTerraform(struct!.kind),
    use_ssa: cdktf.booleanToTerraform(struct!.useSsa),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssa: {
      value: cdktf.booleanToHclTerraform(struct!.useSsa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._useSsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsa = this._useSsa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._kind = undefined;
      this._useSsa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._kind = value.kind;
      this._useSsa = value.useSsa;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // use_ssa - computed: false, optional: true, required: false
  private _useSsa?: boolean | cdktf.IResolvable; 
  public get useSsa() {
    return this.getBooleanAttribute('use_ssa');
  }
  public set useSsa(value: boolean | cdktf.IResolvable) {
    this._useSsa = value;
  }
  public resetUseSsa() {
    this._useSsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSsaInput() {
    return this._useSsa;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum time in seconds for the deployment to make progress before it is considered to be failed. It defaults to '60s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#progress_deadline_seconds DataK8SCamelApacheOrgIntegrationProfileV1Manifest#progress_deadline_seconds}
  */
  readonly progressDeadlineSeconds?: number;
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to '25%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#rolling_update_max_surge DataK8SCamelApacheOrgIntegrationProfileV1Manifest#rolling_update_max_surge}
  */
  readonly rollingUpdateMaxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to '25%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#rolling_update_max_unavailable DataK8SCamelApacheOrgIntegrationProfileV1Manifest#rolling_update_max_unavailable}
  */
  readonly rollingUpdateMaxUnavailable?: string;
  /**
  * The deployment strategy to use to replace existing pods with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#strategy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    progress_deadline_seconds: cdktf.numberToTerraform(struct!.progressDeadlineSeconds),
    rolling_update_max_surge: cdktf.stringToTerraform(struct!.rollingUpdateMaxSurge),
    rolling_update_max_unavailable: cdktf.stringToTerraform(struct!.rollingUpdateMaxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    progress_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.progressDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_update_max_surge: {
      value: cdktf.stringToHclTerraform(struct!.rollingUpdateMaxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_update_max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.rollingUpdateMaxUnavailable),
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._progressDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressDeadlineSeconds = this._progressDeadlineSeconds;
    }
    if (this._rollingUpdateMaxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdateMaxSurge = this._rollingUpdateMaxSurge;
    }
    if (this._rollingUpdateMaxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdateMaxUnavailable = this._rollingUpdateMaxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._progressDeadlineSeconds = undefined;
      this._rollingUpdateMaxSurge = undefined;
      this._rollingUpdateMaxUnavailable = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._progressDeadlineSeconds = value.progressDeadlineSeconds;
      this._rollingUpdateMaxSurge = value.rollingUpdateMaxSurge;
      this._rollingUpdateMaxUnavailable = value.rollingUpdateMaxUnavailable;
      this._strategy = value.strategy;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // progress_deadline_seconds - computed: false, optional: true, required: false
  private _progressDeadlineSeconds?: number; 
  public get progressDeadlineSeconds() {
    return this.getNumberAttribute('progress_deadline_seconds');
  }
  public set progressDeadlineSeconds(value: number) {
    this._progressDeadlineSeconds = value;
  }
  public resetProgressDeadlineSeconds() {
    this._progressDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressDeadlineSecondsInput() {
    return this._progressDeadlineSeconds;
  }

  // rolling_update_max_surge - computed: false, optional: true, required: false
  private _rollingUpdateMaxSurge?: string; 
  public get rollingUpdateMaxSurge() {
    return this.getStringAttribute('rolling_update_max_surge');
  }
  public set rollingUpdateMaxSurge(value: string) {
    this._rollingUpdateMaxSurge = value;
  }
  public resetRollingUpdateMaxSurge() {
    this._rollingUpdateMaxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateMaxSurgeInput() {
    return this._rollingUpdateMaxSurge;
  }

  // rolling_update_max_unavailable - computed: false, optional: true, required: false
  private _rollingUpdateMaxUnavailable?: string; 
  public get rollingUpdateMaxUnavailable() {
    return this.getStringAttribute('rolling_update_max_unavailable');
  }
  public set rollingUpdateMaxUnavailable(value: string) {
    this._rollingUpdateMaxUnavailable = value;
  }
  public resetRollingUpdateMaxUnavailable() {
    this._rollingUpdateMaxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateMaxUnavailableInput() {
    return this._rollingUpdateMaxUnavailable;
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Enables injection of 'NAMESPACE' and 'POD_NAME' environment variables (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#container_meta DataK8SCamelApacheOrgIntegrationProfileV1Manifest#container_meta}
  */
  readonly containerMeta?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Propagates the 'HTTP_PROXY', 'HTTPS_PROXY' and 'NO_PROXY' environment variables (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#http_proxy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#http_proxy}
  */
  readonly httpProxy?: boolean | cdktf.IResolvable;
  /**
  * A list of environment variables to be added to the integration container. The syntax is either VAR=VALUE or VAR=[configmap|secret]:name/key, where name represents the resource name, and key represents the resource key to be mapped as and environment variable. These take precedence over any previously defined environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#vars DataK8SCamelApacheOrgIntegrationProfileV1Manifest#vars}
  */
  readonly vars?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    container_meta: cdktf.booleanToTerraform(struct!.containerMeta),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.booleanToTerraform(struct!.httpProxy),
    vars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vars),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    container_meta: {
      value: cdktf.booleanToHclTerraform(struct!.containerMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vars),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._containerMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMeta = this._containerMeta;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._containerMeta = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._vars = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._containerMeta = value.containerMeta;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._vars = value.vars;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // container_meta - computed: false, optional: true, required: false
  private _containerMeta?: boolean | cdktf.IResolvable; 
  public get containerMeta() {
    return this.getBooleanAttribute('container_meta');
  }
  public set containerMeta(value: boolean | cdktf.IResolvable) {
    this._containerMeta = value;
  }
  public resetContainerMeta() {
    this._containerMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetaInput() {
    return this._containerMeta;
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

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: boolean | cdktf.IResolvable; 
  public get httpProxy() {
    return this.getBooleanAttribute('http_proxy');
  }
  public set httpProxy(value: boolean | cdktf.IResolvable) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: string[]; 
  public get vars() {
    return this.getListAttribute('vars');
  }
  public set vars(value: string[]) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The error handler ref name provided or found in application properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ref DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ref}
  */
  readonly ref?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._ref = value.ref;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Discovery client cache to be used, either 'disabled', 'disk' or 'memory' (default 'memory'). Deprecated: to be removed from trait configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#discovery_cache DataK8SCamelApacheOrgIntegrationProfileV1Manifest#discovery_cache}
  */
  readonly discoveryCache?: string;
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    discovery_cache: cdktf.stringToTerraform(struct!.discoveryCache),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    discovery_cache: {
      value: cdktf.stringToHclTerraform(struct!.discoveryCache),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._discoveryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryCache = this._discoveryCache;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._discoveryCache = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._discoveryCache = value.discoveryCache;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // discovery_cache - computed: false, optional: true, required: false
  private _discoveryCache?: string; 
  public get discoveryCache() {
    return this.getStringAttribute('discovery_cache');
  }
  public set discoveryCache(value: string) {
    this._discoveryCache = value;
  }
  public resetDiscoveryCache() {
    this._discoveryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCacheInput() {
    return this._discoveryCache;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum consecutive failures for the liveness probe to be considered failed after having succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_failure_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_failure_threshold}
  */
  readonly livenessFailureThreshold?: number;
  /**
  * Number of seconds after the container has started before the liveness probe is initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_initial_delay DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_initial_delay}
  */
  readonly livenessInitialDelay?: number;
  /**
  * How often to perform the liveness probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_period DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_period}
  */
  readonly livenessPeriod?: number;
  /**
  * The liveness probe path to use (default provided by the Catalog runtime used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_probe DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_probe}
  */
  readonly livenessProbe?: string;
  /**
  * Configures the liveness probe for the integration container (default 'false').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_probe_enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_probe_enabled}
  */
  readonly livenessProbeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Scheme to use when connecting to the liveness probe (default 'HTTP').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_scheme DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_scheme}
  */
  readonly livenessScheme?: string;
  /**
  * Minimum consecutive successes for the liveness probe to be considered successful after having failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_success_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_success_threshold}
  */
  readonly livenessSuccessThreshold?: number;
  /**
  * Number of seconds after which the liveness probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#liveness_timeout DataK8SCamelApacheOrgIntegrationProfileV1Manifest#liveness_timeout}
  */
  readonly livenessTimeout?: number;
  /**
  * Minimum consecutive failures for the readiness probe to be considered failed after having succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_failure_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_failure_threshold}
  */
  readonly readinessFailureThreshold?: number;
  /**
  * Number of seconds after the container has started before the readiness probe is initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_initial_delay DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_initial_delay}
  */
  readonly readinessInitialDelay?: number;
  /**
  * How often to perform the readiness probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_period DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_period}
  */
  readonly readinessPeriod?: number;
  /**
  * The readiness probe path to use (default provided by the Catalog runtime used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_probe DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_probe}
  */
  readonly readinessProbe?: string;
  /**
  * Configures the readiness probe for the integration container (default 'true').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_probe_enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_probe_enabled}
  */
  readonly readinessProbeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Scheme to use when connecting to the readiness probe (default 'HTTP').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_scheme DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_scheme}
  */
  readonly readinessScheme?: string;
  /**
  * Minimum consecutive successes for the readiness probe to be considered successful after having failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_success_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_success_threshold}
  */
  readonly readinessSuccessThreshold?: number;
  /**
  * Number of seconds after which the readiness probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#readiness_timeout DataK8SCamelApacheOrgIntegrationProfileV1Manifest#readiness_timeout}
  */
  readonly readinessTimeout?: number;
  /**
  * Minimum consecutive failures for the startup probe to be considered failed after having succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_failure_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_failure_threshold}
  */
  readonly startupFailureThreshold?: number;
  /**
  * Number of seconds after the container has started before the startup probe is initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_initial_delay DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_initial_delay}
  */
  readonly startupInitialDelay?: number;
  /**
  * How often to perform the startup probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_period DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_period}
  */
  readonly startupPeriod?: number;
  /**
  * The startup probe path to use (default provided by the Catalog runtime used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_probe DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_probe}
  */
  readonly startupProbe?: string;
  /**
  * Configures the startup probe for the integration container (default 'false').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_probe_enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_probe_enabled}
  */
  readonly startupProbeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Scheme to use when connecting to the startup probe (default 'HTTP').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_scheme DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_scheme}
  */
  readonly startupScheme?: string;
  /**
  * Minimum consecutive successes for the startup probe to be considered successful after having failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_success_threshold DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_success_threshold}
  */
  readonly startupSuccessThreshold?: number;
  /**
  * Number of seconds after which the startup probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#startup_timeout DataK8SCamelApacheOrgIntegrationProfileV1Manifest#startup_timeout}
  */
  readonly startupTimeout?: number;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    liveness_failure_threshold: cdktf.numberToTerraform(struct!.livenessFailureThreshold),
    liveness_initial_delay: cdktf.numberToTerraform(struct!.livenessInitialDelay),
    liveness_period: cdktf.numberToTerraform(struct!.livenessPeriod),
    liveness_probe: cdktf.stringToTerraform(struct!.livenessProbe),
    liveness_probe_enabled: cdktf.booleanToTerraform(struct!.livenessProbeEnabled),
    liveness_scheme: cdktf.stringToTerraform(struct!.livenessScheme),
    liveness_success_threshold: cdktf.numberToTerraform(struct!.livenessSuccessThreshold),
    liveness_timeout: cdktf.numberToTerraform(struct!.livenessTimeout),
    readiness_failure_threshold: cdktf.numberToTerraform(struct!.readinessFailureThreshold),
    readiness_initial_delay: cdktf.numberToTerraform(struct!.readinessInitialDelay),
    readiness_period: cdktf.numberToTerraform(struct!.readinessPeriod),
    readiness_probe: cdktf.stringToTerraform(struct!.readinessProbe),
    readiness_probe_enabled: cdktf.booleanToTerraform(struct!.readinessProbeEnabled),
    readiness_scheme: cdktf.stringToTerraform(struct!.readinessScheme),
    readiness_success_threshold: cdktf.numberToTerraform(struct!.readinessSuccessThreshold),
    readiness_timeout: cdktf.numberToTerraform(struct!.readinessTimeout),
    startup_failure_threshold: cdktf.numberToTerraform(struct!.startupFailureThreshold),
    startup_initial_delay: cdktf.numberToTerraform(struct!.startupInitialDelay),
    startup_period: cdktf.numberToTerraform(struct!.startupPeriod),
    startup_probe: cdktf.stringToTerraform(struct!.startupProbe),
    startup_probe_enabled: cdktf.booleanToTerraform(struct!.startupProbeEnabled),
    startup_scheme: cdktf.stringToTerraform(struct!.startupScheme),
    startup_success_threshold: cdktf.numberToTerraform(struct!.startupSuccessThreshold),
    startup_timeout: cdktf.numberToTerraform(struct!.startupTimeout),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    liveness_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.livenessFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.livenessInitialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_period: {
      value: cdktf.numberToHclTerraform(struct!.livenessPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe: {
      value: cdktf.stringToHclTerraform(struct!.livenessProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.livenessProbeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    liveness_scheme: {
      value: cdktf.stringToHclTerraform(struct!.livenessScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.livenessSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_timeout: {
      value: cdktf.numberToHclTerraform(struct!.livenessTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.readinessFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.readinessInitialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_period: {
      value: cdktf.numberToHclTerraform(struct!.readinessPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_probe: {
      value: cdktf.stringToHclTerraform(struct!.readinessProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_probe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.readinessProbeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readiness_scheme: {
      value: cdktf.stringToHclTerraform(struct!.readinessScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.readinessSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readiness_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readinessTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.startupFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.startupInitialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_period: {
      value: cdktf.numberToHclTerraform(struct!.startupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_probe: {
      value: cdktf.stringToHclTerraform(struct!.startupProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_probe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.startupProbeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    startup_scheme: {
      value: cdktf.stringToHclTerraform(struct!.startupScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.startupSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_timeout: {
      value: cdktf.numberToHclTerraform(struct!.startupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._livenessFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessFailureThreshold = this._livenessFailureThreshold;
    }
    if (this._livenessInitialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessInitialDelay = this._livenessInitialDelay;
    }
    if (this._livenessPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessPeriod = this._livenessPeriod;
    }
    if (this._livenessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe;
    }
    if (this._livenessProbeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeEnabled = this._livenessProbeEnabled;
    }
    if (this._livenessScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessScheme = this._livenessScheme;
    }
    if (this._livenessSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessSuccessThreshold = this._livenessSuccessThreshold;
    }
    if (this._livenessTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessTimeout = this._livenessTimeout;
    }
    if (this._readinessFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessFailureThreshold = this._readinessFailureThreshold;
    }
    if (this._readinessInitialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessInitialDelay = this._readinessInitialDelay;
    }
    if (this._readinessPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessPeriod = this._readinessPeriod;
    }
    if (this._readinessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe;
    }
    if (this._readinessProbeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbeEnabled = this._readinessProbeEnabled;
    }
    if (this._readinessScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessScheme = this._readinessScheme;
    }
    if (this._readinessSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessSuccessThreshold = this._readinessSuccessThreshold;
    }
    if (this._readinessTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessTimeout = this._readinessTimeout;
    }
    if (this._startupFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupFailureThreshold = this._startupFailureThreshold;
    }
    if (this._startupInitialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupInitialDelay = this._startupInitialDelay;
    }
    if (this._startupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupPeriod = this._startupPeriod;
    }
    if (this._startupProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe;
    }
    if (this._startupProbeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbeEnabled = this._startupProbeEnabled;
    }
    if (this._startupScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupScheme = this._startupScheme;
    }
    if (this._startupSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupSuccessThreshold = this._startupSuccessThreshold;
    }
    if (this._startupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupTimeout = this._startupTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._livenessFailureThreshold = undefined;
      this._livenessInitialDelay = undefined;
      this._livenessPeriod = undefined;
      this._livenessProbe = undefined;
      this._livenessProbeEnabled = undefined;
      this._livenessScheme = undefined;
      this._livenessSuccessThreshold = undefined;
      this._livenessTimeout = undefined;
      this._readinessFailureThreshold = undefined;
      this._readinessInitialDelay = undefined;
      this._readinessPeriod = undefined;
      this._readinessProbe = undefined;
      this._readinessProbeEnabled = undefined;
      this._readinessScheme = undefined;
      this._readinessSuccessThreshold = undefined;
      this._readinessTimeout = undefined;
      this._startupFailureThreshold = undefined;
      this._startupInitialDelay = undefined;
      this._startupPeriod = undefined;
      this._startupProbe = undefined;
      this._startupProbeEnabled = undefined;
      this._startupScheme = undefined;
      this._startupSuccessThreshold = undefined;
      this._startupTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._livenessFailureThreshold = value.livenessFailureThreshold;
      this._livenessInitialDelay = value.livenessInitialDelay;
      this._livenessPeriod = value.livenessPeriod;
      this._livenessProbe = value.livenessProbe;
      this._livenessProbeEnabled = value.livenessProbeEnabled;
      this._livenessScheme = value.livenessScheme;
      this._livenessSuccessThreshold = value.livenessSuccessThreshold;
      this._livenessTimeout = value.livenessTimeout;
      this._readinessFailureThreshold = value.readinessFailureThreshold;
      this._readinessInitialDelay = value.readinessInitialDelay;
      this._readinessPeriod = value.readinessPeriod;
      this._readinessProbe = value.readinessProbe;
      this._readinessProbeEnabled = value.readinessProbeEnabled;
      this._readinessScheme = value.readinessScheme;
      this._readinessSuccessThreshold = value.readinessSuccessThreshold;
      this._readinessTimeout = value.readinessTimeout;
      this._startupFailureThreshold = value.startupFailureThreshold;
      this._startupInitialDelay = value.startupInitialDelay;
      this._startupPeriod = value.startupPeriod;
      this._startupProbe = value.startupProbe;
      this._startupProbeEnabled = value.startupProbeEnabled;
      this._startupScheme = value.startupScheme;
      this._startupSuccessThreshold = value.startupSuccessThreshold;
      this._startupTimeout = value.startupTimeout;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // liveness_failure_threshold - computed: false, optional: true, required: false
  private _livenessFailureThreshold?: number; 
  public get livenessFailureThreshold() {
    return this.getNumberAttribute('liveness_failure_threshold');
  }
  public set livenessFailureThreshold(value: number) {
    this._livenessFailureThreshold = value;
  }
  public resetLivenessFailureThreshold() {
    this._livenessFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessFailureThresholdInput() {
    return this._livenessFailureThreshold;
  }

  // liveness_initial_delay - computed: false, optional: true, required: false
  private _livenessInitialDelay?: number; 
  public get livenessInitialDelay() {
    return this.getNumberAttribute('liveness_initial_delay');
  }
  public set livenessInitialDelay(value: number) {
    this._livenessInitialDelay = value;
  }
  public resetLivenessInitialDelay() {
    this._livenessInitialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInitialDelayInput() {
    return this._livenessInitialDelay;
  }

  // liveness_period - computed: false, optional: true, required: false
  private _livenessPeriod?: number; 
  public get livenessPeriod() {
    return this.getNumberAttribute('liveness_period');
  }
  public set livenessPeriod(value: number) {
    this._livenessPeriod = value;
  }
  public resetLivenessPeriod() {
    this._livenessPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessPeriodInput() {
    return this._livenessPeriod;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe?: string; 
  public get livenessProbe() {
    return this.getStringAttribute('liveness_probe');
  }
  public set livenessProbe(value: string) {
    this._livenessProbe = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe;
  }

  // liveness_probe_enabled - computed: false, optional: true, required: false
  private _livenessProbeEnabled?: boolean | cdktf.IResolvable; 
  public get livenessProbeEnabled() {
    return this.getBooleanAttribute('liveness_probe_enabled');
  }
  public set livenessProbeEnabled(value: boolean | cdktf.IResolvable) {
    this._livenessProbeEnabled = value;
  }
  public resetLivenessProbeEnabled() {
    this._livenessProbeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeEnabledInput() {
    return this._livenessProbeEnabled;
  }

  // liveness_scheme - computed: false, optional: true, required: false
  private _livenessScheme?: string; 
  public get livenessScheme() {
    return this.getStringAttribute('liveness_scheme');
  }
  public set livenessScheme(value: string) {
    this._livenessScheme = value;
  }
  public resetLivenessScheme() {
    this._livenessScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessSchemeInput() {
    return this._livenessScheme;
  }

  // liveness_success_threshold - computed: false, optional: true, required: false
  private _livenessSuccessThreshold?: number; 
  public get livenessSuccessThreshold() {
    return this.getNumberAttribute('liveness_success_threshold');
  }
  public set livenessSuccessThreshold(value: number) {
    this._livenessSuccessThreshold = value;
  }
  public resetLivenessSuccessThreshold() {
    this._livenessSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessSuccessThresholdInput() {
    return this._livenessSuccessThreshold;
  }

  // liveness_timeout - computed: false, optional: true, required: false
  private _livenessTimeout?: number; 
  public get livenessTimeout() {
    return this.getNumberAttribute('liveness_timeout');
  }
  public set livenessTimeout(value: number) {
    this._livenessTimeout = value;
  }
  public resetLivenessTimeout() {
    this._livenessTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessTimeoutInput() {
    return this._livenessTimeout;
  }

  // readiness_failure_threshold - computed: false, optional: true, required: false
  private _readinessFailureThreshold?: number; 
  public get readinessFailureThreshold() {
    return this.getNumberAttribute('readiness_failure_threshold');
  }
  public set readinessFailureThreshold(value: number) {
    this._readinessFailureThreshold = value;
  }
  public resetReadinessFailureThreshold() {
    this._readinessFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessFailureThresholdInput() {
    return this._readinessFailureThreshold;
  }

  // readiness_initial_delay - computed: false, optional: true, required: false
  private _readinessInitialDelay?: number; 
  public get readinessInitialDelay() {
    return this.getNumberAttribute('readiness_initial_delay');
  }
  public set readinessInitialDelay(value: number) {
    this._readinessInitialDelay = value;
  }
  public resetReadinessInitialDelay() {
    this._readinessInitialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInitialDelayInput() {
    return this._readinessInitialDelay;
  }

  // readiness_period - computed: false, optional: true, required: false
  private _readinessPeriod?: number; 
  public get readinessPeriod() {
    return this.getNumberAttribute('readiness_period');
  }
  public set readinessPeriod(value: number) {
    this._readinessPeriod = value;
  }
  public resetReadinessPeriod() {
    this._readinessPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessPeriodInput() {
    return this._readinessPeriod;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe?: string; 
  public get readinessProbe() {
    return this.getStringAttribute('readiness_probe');
  }
  public set readinessProbe(value: string) {
    this._readinessProbe = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe;
  }

  // readiness_probe_enabled - computed: false, optional: true, required: false
  private _readinessProbeEnabled?: boolean | cdktf.IResolvable; 
  public get readinessProbeEnabled() {
    return this.getBooleanAttribute('readiness_probe_enabled');
  }
  public set readinessProbeEnabled(value: boolean | cdktf.IResolvable) {
    this._readinessProbeEnabled = value;
  }
  public resetReadinessProbeEnabled() {
    this._readinessProbeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeEnabledInput() {
    return this._readinessProbeEnabled;
  }

  // readiness_scheme - computed: false, optional: true, required: false
  private _readinessScheme?: string; 
  public get readinessScheme() {
    return this.getStringAttribute('readiness_scheme');
  }
  public set readinessScheme(value: string) {
    this._readinessScheme = value;
  }
  public resetReadinessScheme() {
    this._readinessScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessSchemeInput() {
    return this._readinessScheme;
  }

  // readiness_success_threshold - computed: false, optional: true, required: false
  private _readinessSuccessThreshold?: number; 
  public get readinessSuccessThreshold() {
    return this.getNumberAttribute('readiness_success_threshold');
  }
  public set readinessSuccessThreshold(value: number) {
    this._readinessSuccessThreshold = value;
  }
  public resetReadinessSuccessThreshold() {
    this._readinessSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessSuccessThresholdInput() {
    return this._readinessSuccessThreshold;
  }

  // readiness_timeout - computed: false, optional: true, required: false
  private _readinessTimeout?: number; 
  public get readinessTimeout() {
    return this.getNumberAttribute('readiness_timeout');
  }
  public set readinessTimeout(value: number) {
    this._readinessTimeout = value;
  }
  public resetReadinessTimeout() {
    this._readinessTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessTimeoutInput() {
    return this._readinessTimeout;
  }

  // startup_failure_threshold - computed: false, optional: true, required: false
  private _startupFailureThreshold?: number; 
  public get startupFailureThreshold() {
    return this.getNumberAttribute('startup_failure_threshold');
  }
  public set startupFailureThreshold(value: number) {
    this._startupFailureThreshold = value;
  }
  public resetStartupFailureThreshold() {
    this._startupFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupFailureThresholdInput() {
    return this._startupFailureThreshold;
  }

  // startup_initial_delay - computed: false, optional: true, required: false
  private _startupInitialDelay?: number; 
  public get startupInitialDelay() {
    return this.getNumberAttribute('startup_initial_delay');
  }
  public set startupInitialDelay(value: number) {
    this._startupInitialDelay = value;
  }
  public resetStartupInitialDelay() {
    this._startupInitialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInitialDelayInput() {
    return this._startupInitialDelay;
  }

  // startup_period - computed: false, optional: true, required: false
  private _startupPeriod?: number; 
  public get startupPeriod() {
    return this.getNumberAttribute('startup_period');
  }
  public set startupPeriod(value: number) {
    this._startupPeriod = value;
  }
  public resetStartupPeriod() {
    this._startupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupPeriodInput() {
    return this._startupPeriod;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe?: string; 
  public get startupProbe() {
    return this.getStringAttribute('startup_probe');
  }
  public set startupProbe(value: string) {
    this._startupProbe = value;
  }
  public resetStartupProbe() {
    this._startupProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe;
  }

  // startup_probe_enabled - computed: false, optional: true, required: false
  private _startupProbeEnabled?: boolean | cdktf.IResolvable; 
  public get startupProbeEnabled() {
    return this.getBooleanAttribute('startup_probe_enabled');
  }
  public set startupProbeEnabled(value: boolean | cdktf.IResolvable) {
    this._startupProbeEnabled = value;
  }
  public resetStartupProbeEnabled() {
    this._startupProbeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeEnabledInput() {
    return this._startupProbeEnabled;
  }

  // startup_scheme - computed: false, optional: true, required: false
  private _startupScheme?: string; 
  public get startupScheme() {
    return this.getStringAttribute('startup_scheme');
  }
  public set startupScheme(value: string) {
    this._startupScheme = value;
  }
  public resetStartupScheme() {
    this._startupScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupSchemeInput() {
    return this._startupScheme;
  }

  // startup_success_threshold - computed: false, optional: true, required: false
  private _startupSuccessThreshold?: number; 
  public get startupSuccessThreshold() {
    return this.getNumberAttribute('startup_success_threshold');
  }
  public set startupSuccessThreshold(value: number) {
    this._startupSuccessThreshold = value;
  }
  public resetStartupSuccessThreshold() {
    this._startupSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupSuccessThresholdInput() {
    return this._startupSuccessThreshold;
  }

  // startup_timeout - computed: false, optional: true, required: false
  private _startupTimeout?: number; 
  public get startupTimeout() {
    return this.getNumberAttribute('startup_timeout');
  }
  public set startupTimeout(value: number) {
    this._startupTimeout = value;
  }
  public resetStartupTimeout() {
    this._startupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTimeoutInput() {
    return this._startupTimeout;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress {
  /**
  * The annotations added to the ingress. This can be used to set controller specific annotations, e.g., when using the NGINX Ingress controller: See https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/nginx-configuration/annotations.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * To automatically add an ingress whenever the integration uses an HTTP endpoint consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * To configure the host exposed by the ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#host DataK8SCamelApacheOrgIntegrationProfileV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The Ingress class name as defined by the Ingress spec See https://kubernetes.io/docs/concepts/services-networking/ingress/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ingress_class_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * To configure the path exposed by the ingress (default '/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#path DataK8SCamelApacheOrgIntegrationProfileV1Manifest#path}
  */
  readonly path?: string;
  /**
  * To configure the path type exposed by the ingress. One of 'Exact', 'Prefix', 'ImplementationSpecific' (default to 'Prefix').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#path_type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#path_type}
  */
  readonly pathType?: string;
  /**
  * To configure tls hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_hosts DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_hosts}
  */
  readonly tlsHosts?: string[];
  /**
  * To configure tls secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_secret_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_secret_name}
  */
  readonly tlsSecretName?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    tls_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsHosts),
    tls_secret_name: cdktf.stringToTerraform(struct!.tlsSecretName),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress | cdktf.IResolvable): any {
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
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
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
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._tlsHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHosts = this._tlsHosts;
    }
    if (this._tlsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretName = this._tlsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._ingressClassName = undefined;
      this._path = undefined;
      this._pathType = undefined;
      this._tlsHosts = undefined;
      this._tlsSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._host = value.host;
      this._ingressClassName = value.ingressClassName;
      this._path = value.path;
      this._pathType = value.pathType;
      this._tlsHosts = value.tlsHosts;
      this._tlsSecretName = value.tlsSecretName;
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

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
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

  // path_type - computed: false, optional: true, required: false
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // tls_hosts - computed: false, optional: true, required: false
  private _tlsHosts?: string[]; 
  public get tlsHosts() {
    return this.getListAttribute('tls_hosts');
  }
  public set tlsHosts(value: string[]) {
    this._tlsHosts = value;
  }
  public resetTlsHosts() {
    this._tlsHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostsInput() {
    return this._tlsHosts;
  }

  // tls_secret_name - computed: false, optional: true, required: false
  private _tlsSecretName?: string; 
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
  public set tlsSecretName(value: string) {
    this._tlsSecretName = value;
  }
  public resetTlsSecretName() {
    this._tlsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretNameInput() {
    return this._tlsSecretName;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio {
  /**
  * Configures a (comma-separated) list of CIDR subnets that should not be intercepted by the Istio proxy ('10.0.0.0/8,172.16.0.0/12,192.168.0.0/16' by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#allow DataK8SCamelApacheOrgIntegrationProfileV1Manifest#allow}
  */
  readonly allow?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Forces the value for labels 'sidecar.istio.io/inject'. By default the label is set to 'true' on deployment and not set on Knative Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#inject DataK8SCamelApacheOrgIntegrationProfileV1Manifest#inject}
  */
  readonly inject?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.stringToTerraform(struct!.allow),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inject: cdktf.booleanToTerraform(struct!.inject),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.stringToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inject: {
      value: cdktf.booleanToHclTerraform(struct!.inject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inject !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._inject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._inject = value.inject;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string; 
  public get allow() {
    return this.getStringAttribute('allow');
  }
  public set allow(value: string) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // inject - computed: false, optional: true, required: false
  private _inject?: boolean | cdktf.IResolvable; 
  public get inject() {
    return this.getBooleanAttribute('inject');
  }
  public set inject(value: boolean | cdktf.IResolvable) {
    this._inject = value;
  }
  public resetInject() {
    this._inject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia {
  /**
  * The PEM encoded CA certification file path, used to verify client certificates, applicable when 'protocol' is 'https' and 'use-ssl-client-authentication' is 'true' (default '/var/run/secrets/kubernetes.io/serviceaccount/service-ca.crt' for OpenShift).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ca_cert DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The principal(s) which must be given in a client certificate to allow access to the Jolokia endpoint, applicable when 'protocol' is 'https' and 'use-ssl-client-authentication' is 'true' (default 'clientPrincipal=cn=system:master-proxy', 'cn=hawtio-online.hawtio.svc' and 'cn=fuse-console.fuse.svc' for OpenShift).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#client_principal DataK8SCamelApacheOrgIntegrationProfileV1Manifest#client_principal}
  */
  readonly clientPrincipal?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Listen for multicast requests (default 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#discovery_enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#discovery_enabled}
  */
  readonly discoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mandate the client certificate contains a client flag in the extended key usage section, applicable when 'protocol' is 'https' and 'use-ssl-client-authentication' is 'true' (default 'true' for OpenShift).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#extended_client_check DataK8SCamelApacheOrgIntegrationProfileV1Manifest#extended_client_check}
  */
  readonly extendedClientCheck?: boolean | cdktf.IResolvable;
  /**
  * The Host address to which the Jolokia agent should bind to. If ''*'' or ''0.0.0.0'' is given, the servers binds to every network interface (default ''*'').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#host DataK8SCamelApacheOrgIntegrationProfileV1Manifest#host}
  */
  readonly host?: string;
  /**
  * A list of additional Jolokia options as defined in https://jolokia.org/reference/html/agents.html#agent-jvm-config[JVM agent configuration options]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#options DataK8SCamelApacheOrgIntegrationProfileV1Manifest#options}
  */
  readonly options?: string[];
  /**
  * The password used for authentication, applicable when the 'user' option is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#password DataK8SCamelApacheOrgIntegrationProfileV1Manifest#password}
  */
  readonly password?: string;
  /**
  * The Jolokia endpoint port (default '8778').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#port DataK8SCamelApacheOrgIntegrationProfileV1Manifest#port}
  */
  readonly port?: number;
  /**
  * The protocol to use, either 'http' or 'https' (default 'https' for OpenShift)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#protocol DataK8SCamelApacheOrgIntegrationProfileV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Whether client certificates should be used for authentication (default 'true' for OpenShift).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#use_ssl_client_authentication DataK8SCamelApacheOrgIntegrationProfileV1Manifest#use_ssl_client_authentication}
  */
  readonly useSslClientAuthentication?: boolean | cdktf.IResolvable;
  /**
  * The user to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#user DataK8SCamelApacheOrgIntegrationProfileV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_principal: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientPrincipal),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    discovery_enabled: cdktf.booleanToTerraform(struct!.discoveryEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extended_client_check: cdktf.booleanToTerraform(struct!.extendedClientCheck),
    host: cdktf.stringToTerraform(struct!.host),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    use_ssl_client_authentication: cdktf.booleanToTerraform(struct!.useSslClientAuthentication),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_principal: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientPrincipal),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    discovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.discoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_client_check: {
      value: cdktf.booleanToHclTerraform(struct!.extendedClientCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl_client_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.useSslClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrincipal = this._clientPrincipal;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._discoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryEnabled = this._discoveryEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extendedClientCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedClientCheck = this._extendedClientCheck;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._useSslClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSslClientAuthentication = this._useSslClientAuthentication;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._clientPrincipal = undefined;
      this._configuration = undefined;
      this._discoveryEnabled = undefined;
      this._enabled = undefined;
      this._extendedClientCheck = undefined;
      this._host = undefined;
      this._options = undefined;
      this._password = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._useSslClientAuthentication = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._clientPrincipal = value.clientPrincipal;
      this._configuration = value.configuration;
      this._discoveryEnabled = value.discoveryEnabled;
      this._enabled = value.enabled;
      this._extendedClientCheck = value.extendedClientCheck;
      this._host = value.host;
      this._options = value.options;
      this._password = value.password;
      this._port = value.port;
      this._protocol = value.protocol;
      this._useSslClientAuthentication = value.useSslClientAuthentication;
      this._user = value.user;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_principal - computed: false, optional: true, required: false
  private _clientPrincipal?: string[]; 
  public get clientPrincipal() {
    return this.getListAttribute('client_principal');
  }
  public set clientPrincipal(value: string[]) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // discovery_enabled - computed: false, optional: true, required: false
  private _discoveryEnabled?: boolean | cdktf.IResolvable; 
  public get discoveryEnabled() {
    return this.getBooleanAttribute('discovery_enabled');
  }
  public set discoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._discoveryEnabled = value;
  }
  public resetDiscoveryEnabled() {
    this._discoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEnabledInput() {
    return this._discoveryEnabled;
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

  // extended_client_check - computed: false, optional: true, required: false
  private _extendedClientCheck?: boolean | cdktf.IResolvable; 
  public get extendedClientCheck() {
    return this.getBooleanAttribute('extended_client_check');
  }
  public set extendedClientCheck(value: boolean | cdktf.IResolvable) {
    this._extendedClientCheck = value;
  }
  public resetExtendedClientCheck() {
    this._extendedClientCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedClientCheckInput() {
    return this._extendedClientCheck;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // use_ssl_client_authentication - computed: false, optional: true, required: false
  private _useSslClientAuthentication?: boolean | cdktf.IResolvable; 
  public get useSslClientAuthentication() {
    return this.getBooleanAttribute('use_ssl_client_authentication');
  }
  public set useSslClientAuthentication(value: boolean | cdktf.IResolvable) {
    this._useSslClientAuthentication = value;
  }
  public resetUseSslClientAuthentication() {
    this._useSslClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslClientAuthenticationInput() {
    return this._useSslClientAuthentication;
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm {
  /**
  * Additional JVM classpath (use 'Linux' classpath separator)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#classpath DataK8SCamelApacheOrgIntegrationProfileV1Manifest#classpath}
  */
  readonly classpath?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Activates remote debugging, so that a debugger can be attached to the JVM, e.g., using port-forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#debug DataK8SCamelApacheOrgIntegrationProfileV1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Transport address at which to listen for the newly launched JVM (default '*:5005')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#debug_address DataK8SCamelApacheOrgIntegrationProfileV1Manifest#debug_address}
  */
  readonly debugAddress?: string;
  /**
  * Suspends the target JVM immediately before the main class is loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#debug_suspend DataK8SCamelApacheOrgIntegrationProfileV1Manifest#debug_suspend}
  */
  readonly debugSuspend?: boolean | cdktf.IResolvable;
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Jar dependency which will run the application. Leave it empty for managed Integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#jar DataK8SCamelApacheOrgIntegrationProfileV1Manifest#jar}
  */
  readonly jar?: string;
  /**
  * A list of JVM options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#options DataK8SCamelApacheOrgIntegrationProfileV1Manifest#options}
  */
  readonly options?: string[];
  /**
  * Prints the command used the start the JVM in the container logs (default 'true') Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#print_command DataK8SCamelApacheOrgIntegrationProfileV1Manifest#print_command}
  */
  readonly printCommand?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classpath: cdktf.stringToTerraform(struct!.classpath),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    debug: cdktf.booleanToTerraform(struct!.debug),
    debug_address: cdktf.stringToTerraform(struct!.debugAddress),
    debug_suspend: cdktf.booleanToTerraform(struct!.debugSuspend),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    jar: cdktf.stringToTerraform(struct!.jar),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    print_command: cdktf.booleanToTerraform(struct!.printCommand),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classpath: {
      value: cdktf.stringToHclTerraform(struct!.classpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    debug_address: {
      value: cdktf.stringToHclTerraform(struct!.debugAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_suspend: {
      value: cdktf.booleanToHclTerraform(struct!.debugSuspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jar: {
      value: cdktf.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    print_command: {
      value: cdktf.booleanToHclTerraform(struct!.printCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.classpath = this._classpath;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._debugAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugAddress = this._debugAddress;
    }
    if (this._debugSuspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugSuspend = this._debugSuspend;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._printCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.printCommand = this._printCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classpath = undefined;
      this._configuration = undefined;
      this._debug = undefined;
      this._debugAddress = undefined;
      this._debugSuspend = undefined;
      this._enabled = undefined;
      this._jar = undefined;
      this._options = undefined;
      this._printCommand = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classpath = value.classpath;
      this._configuration = value.configuration;
      this._debug = value.debug;
      this._debugAddress = value.debugAddress;
      this._debugSuspend = value.debugSuspend;
      this._enabled = value.enabled;
      this._jar = value.jar;
      this._options = value.options;
      this._printCommand = value.printCommand;
    }
  }

  // classpath - computed: false, optional: true, required: false
  private _classpath?: string; 
  public get classpath() {
    return this.getStringAttribute('classpath');
  }
  public set classpath(value: string) {
    this._classpath = value;
  }
  public resetClasspath() {
    this._classpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classpathInput() {
    return this._classpath;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // debug_address - computed: false, optional: true, required: false
  private _debugAddress?: string; 
  public get debugAddress() {
    return this.getStringAttribute('debug_address');
  }
  public set debugAddress(value: string) {
    this._debugAddress = value;
  }
  public resetDebugAddress() {
    this._debugAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugAddressInput() {
    return this._debugAddress;
  }

  // debug_suspend - computed: false, optional: true, required: false
  private _debugSuspend?: boolean | cdktf.IResolvable; 
  public get debugSuspend() {
    return this.getBooleanAttribute('debug_suspend');
  }
  public set debugSuspend(value: boolean | cdktf.IResolvable) {
    this._debugSuspend = value;
  }
  public resetDebugSuspend() {
    this._debugSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugSuspendInput() {
    return this._debugSuspend;
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

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // print_command - computed: false, optional: true, required: false
  private _printCommand?: boolean | cdktf.IResolvable; 
  public get printCommand() {
    return this.getBooleanAttribute('print_command');
  }
  public set printCommand(value: boolean | cdktf.IResolvable) {
    this._printCommand = value;
  }
  public resetPrintCommand() {
    this._printCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printCommandInput() {
    return this._printCommand;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets {
  /**
  * Automatically inject all referenced Kamelets and their default configuration (enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of Kamelet names to load into the current integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#list DataK8SCamelApacheOrgIntegrationProfileV1Manifest#list}
  */
  readonly list?: string;
  /**
  * The directory where the application mounts and reads Kamelet spec (default '/etc/camel/kamelets')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#mount_point DataK8SCamelApacheOrgIntegrationProfileV1Manifest#mount_point}
  */
  readonly mountPoint?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    list: cdktf.stringToTerraform(struct!.list),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.stringToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._list = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._list = value.list;
      this._mountPoint = value.mountPoint;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // list - computed: false, optional: true, required: false
  private _list?: string; 
  public get list() {
    return this.getStringAttribute('list');
  }
  public set list(value: string) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda {
  /**
  * TraitConfiguration parameters configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration: { [key: string]: string };
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative {
  /**
  * Enable automatic discovery of all trait properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * List of channels used as destination of integration routes. Can contain simple channel names or full Camel URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#channel_sinks DataK8SCamelApacheOrgIntegrationProfileV1Manifest#channel_sinks}
  */
  readonly channelSinks?: string[];
  /**
  * List of channels used as source of integration routes. Can contain simple channel names or full Camel URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#channel_sources DataK8SCamelApacheOrgIntegrationProfileV1Manifest#channel_sources}
  */
  readonly channelSources?: string[];
  /**
  * Can be used to inject a Knative complete configuration in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#config DataK8SCamelApacheOrgIntegrationProfileV1Manifest#config}
  */
  readonly config?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of endpoints used as destination of integration routes. Can contain simple endpoint names or full Camel URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#endpoint_sinks DataK8SCamelApacheOrgIntegrationProfileV1Manifest#endpoint_sinks}
  */
  readonly endpointSinks?: string[];
  /**
  * List of channels used as source of integration routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#endpoint_sources DataK8SCamelApacheOrgIntegrationProfileV1Manifest#endpoint_sources}
  */
  readonly endpointSources?: string[];
  /**
  * List of event types that the integration will produce. Can contain simple event types or full Camel URIs (to use a specific broker).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#event_sinks DataK8SCamelApacheOrgIntegrationProfileV1Manifest#event_sinks}
  */
  readonly eventSinks?: string[];
  /**
  * List of event types that the integration will be subscribed to. Can contain simple event types or full Camel URIs (to use a specific broker different from 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#event_sources DataK8SCamelApacheOrgIntegrationProfileV1Manifest#event_sources}
  */
  readonly eventSources?: string[];
  /**
  * Enables the default filtering for the Knative trigger using the event type If this is true, the created Knative trigger uses the event type as a filter on the event stream when no other filter criteria is given. (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#filter_event_type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#filter_event_type}
  */
  readonly filterEventType?: boolean | cdktf.IResolvable;
  /**
  * Enables filtering on events based on the header 'ce-knativehistory'. Since this header has been removed in newer versions of Knative, filtering is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#filter_source_channels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#filter_source_channels}
  */
  readonly filterSourceChannels?: boolean | cdktf.IResolvable;
  /**
  * Sets filter attributes on the event stream (such as event type, source, subject and so on). A list of key-value pairs that represent filter attributes and its values. The syntax is KEY=VALUE, e.g., 'source='my.source''. Filter attributes get set on the Knative trigger that is being created as part of this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#filters DataK8SCamelApacheOrgIntegrationProfileV1Manifest#filters}
  */
  readonly filters?: string[];
  /**
  * Enables the camel-k-operator to set the 'bindings.knative.dev/include=true' label to the namespace As Knative requires this label to perform injection of K_SINK URL into the service. If this is false, the integration pod may start and fail, read the SinkBinding Knative documentation. (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#namespace_label DataK8SCamelApacheOrgIntegrationProfileV1Manifest#namespace_label}
  */
  readonly namespaceLabel?: boolean | cdktf.IResolvable;
  /**
  * Allows binding the integration to a sink via a Knative SinkBinding resource. This can be used when the integration targets a single sink. It's enabled by default when the integration targets a single sink (except when the integration is owned by a Knative source).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#sink_binding DataK8SCamelApacheOrgIntegrationProfileV1Manifest#sink_binding}
  */
  readonly sinkBinding?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    channel_sinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelSinks),
    channel_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelSources),
    config: cdktf.stringToTerraform(struct!.config),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint_sinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpointSinks),
    endpoint_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpointSources),
    event_sinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventSinks),
    event_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventSources),
    filter_event_type: cdktf.booleanToTerraform(struct!.filterEventType),
    filter_source_channels: cdktf.booleanToTerraform(struct!.filterSourceChannels),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    namespace_label: cdktf.booleanToTerraform(struct!.namespaceLabel),
    sink_binding: cdktf.booleanToTerraform(struct!.sinkBinding),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_sinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelSinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_sinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpointSinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    endpoint_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpointSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_sinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventSinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_event_type: {
      value: cdktf.booleanToHclTerraform(struct!.filterEventType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_source_channels: {
      value: cdktf.booleanToHclTerraform(struct!.filterSourceChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_label: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sink_binding: {
      value: cdktf.booleanToHclTerraform(struct!.sinkBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._channelSinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelSinks = this._channelSinks;
    }
    if (this._channelSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelSources = this._channelSources;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointSinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSinks = this._endpointSinks;
    }
    if (this._endpointSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSources = this._endpointSources;
    }
    if (this._eventSinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSinks = this._eventSinks;
    }
    if (this._eventSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSources = this._eventSources;
    }
    if (this._filterEventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEventType = this._filterEventType;
    }
    if (this._filterSourceChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSourceChannels = this._filterSourceChannels;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._namespaceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceLabel = this._namespaceLabel;
    }
    if (this._sinkBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkBinding = this._sinkBinding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._channelSinks = undefined;
      this._channelSources = undefined;
      this._config = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._endpointSinks = undefined;
      this._endpointSources = undefined;
      this._eventSinks = undefined;
      this._eventSources = undefined;
      this._filterEventType = undefined;
      this._filterSourceChannels = undefined;
      this._filters = undefined;
      this._namespaceLabel = undefined;
      this._sinkBinding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._channelSinks = value.channelSinks;
      this._channelSources = value.channelSources;
      this._config = value.config;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._endpointSinks = value.endpointSinks;
      this._endpointSources = value.endpointSources;
      this._eventSinks = value.eventSinks;
      this._eventSources = value.eventSources;
      this._filterEventType = value.filterEventType;
      this._filterSourceChannels = value.filterSourceChannels;
      this._filters = value.filters;
      this._namespaceLabel = value.namespaceLabel;
      this._sinkBinding = value.sinkBinding;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // channel_sinks - computed: false, optional: true, required: false
  private _channelSinks?: string[]; 
  public get channelSinks() {
    return this.getListAttribute('channel_sinks');
  }
  public set channelSinks(value: string[]) {
    this._channelSinks = value;
  }
  public resetChannelSinks() {
    this._channelSinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSinksInput() {
    return this._channelSinks;
  }

  // channel_sources - computed: false, optional: true, required: false
  private _channelSources?: string[]; 
  public get channelSources() {
    return this.getListAttribute('channel_sources');
  }
  public set channelSources(value: string[]) {
    this._channelSources = value;
  }
  public resetChannelSources() {
    this._channelSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSourcesInput() {
    return this._channelSources;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // endpoint_sinks - computed: false, optional: true, required: false
  private _endpointSinks?: string[]; 
  public get endpointSinks() {
    return this.getListAttribute('endpoint_sinks');
  }
  public set endpointSinks(value: string[]) {
    this._endpointSinks = value;
  }
  public resetEndpointSinks() {
    this._endpointSinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSinksInput() {
    return this._endpointSinks;
  }

  // endpoint_sources - computed: false, optional: true, required: false
  private _endpointSources?: string[]; 
  public get endpointSources() {
    return this.getListAttribute('endpoint_sources');
  }
  public set endpointSources(value: string[]) {
    this._endpointSources = value;
  }
  public resetEndpointSources() {
    this._endpointSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSourcesInput() {
    return this._endpointSources;
  }

  // event_sinks - computed: false, optional: true, required: false
  private _eventSinks?: string[]; 
  public get eventSinks() {
    return this.getListAttribute('event_sinks');
  }
  public set eventSinks(value: string[]) {
    this._eventSinks = value;
  }
  public resetEventSinks() {
    this._eventSinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSinksInput() {
    return this._eventSinks;
  }

  // event_sources - computed: false, optional: true, required: false
  private _eventSources?: string[]; 
  public get eventSources() {
    return this.getListAttribute('event_sources');
  }
  public set eventSources(value: string[]) {
    this._eventSources = value;
  }
  public resetEventSources() {
    this._eventSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourcesInput() {
    return this._eventSources;
  }

  // filter_event_type - computed: false, optional: true, required: false
  private _filterEventType?: boolean | cdktf.IResolvable; 
  public get filterEventType() {
    return this.getBooleanAttribute('filter_event_type');
  }
  public set filterEventType(value: boolean | cdktf.IResolvable) {
    this._filterEventType = value;
  }
  public resetFilterEventType() {
    this._filterEventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEventTypeInput() {
    return this._filterEventType;
  }

  // filter_source_channels - computed: false, optional: true, required: false
  private _filterSourceChannels?: boolean | cdktf.IResolvable; 
  public get filterSourceChannels() {
    return this.getBooleanAttribute('filter_source_channels');
  }
  public set filterSourceChannels(value: boolean | cdktf.IResolvable) {
    this._filterSourceChannels = value;
  }
  public resetFilterSourceChannels() {
    this._filterSourceChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSourceChannelsInput() {
    return this._filterSourceChannels;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // namespace_label - computed: false, optional: true, required: false
  private _namespaceLabel?: boolean | cdktf.IResolvable; 
  public get namespaceLabel() {
    return this.getBooleanAttribute('namespace_label');
  }
  public set namespaceLabel(value: boolean | cdktf.IResolvable) {
    this._namespaceLabel = value;
  }
  public resetNamespaceLabel() {
    this._namespaceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLabelInput() {
    return this._namespaceLabel;
  }

  // sink_binding - computed: false, optional: true, required: false
  private _sinkBinding?: boolean | cdktf.IResolvable; 
  public get sinkBinding() {
    return this.getBooleanAttribute('sink_binding');
  }
  public set sinkBinding(value: boolean | cdktf.IResolvable) {
    this._sinkBinding = value;
  }
  public resetSinkBinding() {
    this._sinkBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkBindingInput() {
    return this._sinkBinding;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService {
  /**
  * The annotations added to route. This can be used to set knative service specific annotations CLI usage example: -t 'knative-service.annotations.'haproxy.router.openshift.io/balance'=true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Automatically deploy the integration as Knative service when all conditions hold: * Integration is using the Knative profile * All routes are either starting from an HTTP based consumer or a passive consumer (e.g. 'direct' is a passive consumer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Configures the Knative autoscaling metric property (e.g. to set 'concurrency' based or 'cpu' based autoscaling). Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#autoscaling_metric DataK8SCamelApacheOrgIntegrationProfileV1Manifest#autoscaling_metric}
  */
  readonly autoscalingMetric?: string;
  /**
  * Sets the allowed concurrency level or CPU percentage (depending on the autoscaling metric) for each Pod. Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#autoscaling_target DataK8SCamelApacheOrgIntegrationProfileV1Manifest#autoscaling_target}
  */
  readonly autoscalingTarget?: number;
  /**
  * Configures the Knative autoscaling class property (e.g. to set 'hpa.autoscaling.knative.dev' or 'kpa.autoscaling.knative.dev' autoscaling). Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#class DataK8SCamelApacheOrgIntegrationProfileV1Manifest#class}
  */
  readonly class?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An upper bound for the number of Pods that can be running in parallel for the integration. Knative has its own cap value that depends on the installation. Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#max_scale DataK8SCamelApacheOrgIntegrationProfileV1Manifest#max_scale}
  */
  readonly maxScale?: number;
  /**
  * The minimum number of Pods that should be running at any time for the integration. It's **zero** by default, meaning that the integration is scaled down to zero when not used for a configured amount of time. Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#min_scale DataK8SCamelApacheOrgIntegrationProfileV1Manifest#min_scale}
  */
  readonly minScale?: number;
  /**
  * Enables to gradually shift traffic to the latest Revision and sets the rollout duration. It's disabled by default and must be expressed as a Golang 'time.Duration' string representation, rounded to a second precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#rollout_duration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#rollout_duration}
  */
  readonly rolloutDuration?: string;
  /**
  * The maximum duration in seconds that the request instance is allowed to respond to a request. This field propagates to the integration pod's terminationGracePeriodSeconds Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#timeout_seconds DataK8SCamelApacheOrgIntegrationProfileV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Setting 'cluster-local', Knative service becomes a private service. Specifically, this option applies the 'networking.knative.dev/visibility' label to Knative service. Refer to the Knative documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#visibility DataK8SCamelApacheOrgIntegrationProfileV1Manifest#visibility}
  */
  readonly visibility?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    auto: cdktf.booleanToTerraform(struct!.auto),
    autoscaling_metric: cdktf.stringToTerraform(struct!.autoscalingMetric),
    autoscaling_target: cdktf.numberToTerraform(struct!.autoscalingTarget),
    class: cdktf.stringToTerraform(struct!.class),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_scale: cdktf.numberToTerraform(struct!.maxScale),
    min_scale: cdktf.numberToTerraform(struct!.minScale),
    rollout_duration: cdktf.stringToTerraform(struct!.rolloutDuration),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService | cdktf.IResolvable): any {
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
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscaling_metric: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_target: {
      value: cdktf.numberToHclTerraform(struct!.autoscalingTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_scale: {
      value: cdktf.numberToHclTerraform(struct!.maxScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_scale: {
      value: cdktf.numberToHclTerraform(struct!.minScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollout_duration: {
      value: cdktf.stringToHclTerraform(struct!.rolloutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._autoscalingMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingMetric = this._autoscalingMetric;
    }
    if (this._autoscalingTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingTarget = this._autoscalingTarget;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScale = this._maxScale;
    }
    if (this._minScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScale = this._minScale;
    }
    if (this._rolloutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutDuration = this._rolloutDuration;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._auto = undefined;
      this._autoscalingMetric = undefined;
      this._autoscalingTarget = undefined;
      this._class = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._maxScale = undefined;
      this._minScale = undefined;
      this._rolloutDuration = undefined;
      this._timeoutSeconds = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._auto = value.auto;
      this._autoscalingMetric = value.autoscalingMetric;
      this._autoscalingTarget = value.autoscalingTarget;
      this._class = value.class;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._maxScale = value.maxScale;
      this._minScale = value.minScale;
      this._rolloutDuration = value.rolloutDuration;
      this._timeoutSeconds = value.timeoutSeconds;
      this._visibility = value.visibility;
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

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // autoscaling_metric - computed: false, optional: true, required: false
  private _autoscalingMetric?: string; 
  public get autoscalingMetric() {
    return this.getStringAttribute('autoscaling_metric');
  }
  public set autoscalingMetric(value: string) {
    this._autoscalingMetric = value;
  }
  public resetAutoscalingMetric() {
    this._autoscalingMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingMetricInput() {
    return this._autoscalingMetric;
  }

  // autoscaling_target - computed: false, optional: true, required: false
  private _autoscalingTarget?: number; 
  public get autoscalingTarget() {
    return this.getNumberAttribute('autoscaling_target');
  }
  public set autoscalingTarget(value: number) {
    this._autoscalingTarget = value;
  }
  public resetAutoscalingTarget() {
    this._autoscalingTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingTargetInput() {
    return this._autoscalingTarget;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // max_scale - computed: false, optional: true, required: false
  private _maxScale?: number; 
  public get maxScale() {
    return this.getNumberAttribute('max_scale');
  }
  public set maxScale(value: number) {
    this._maxScale = value;
  }
  public resetMaxScale() {
    this._maxScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleInput() {
    return this._maxScale;
  }

  // min_scale - computed: false, optional: true, required: false
  private _minScale?: number; 
  public get minScale() {
    return this.getNumberAttribute('min_scale');
  }
  public set minScale(value: number) {
    this._minScale = value;
  }
  public resetMinScale() {
    this._minScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleInput() {
    return this._minScale;
  }

  // rollout_duration - computed: false, optional: true, required: false
  private _rolloutDuration?: string; 
  public get rolloutDuration() {
    return this.getStringAttribute('rollout_duration');
  }
  public set rolloutDuration(value: string) {
    this._rolloutDuration = value;
  }
  public resetRolloutDuration() {
    this._rolloutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutDurationInput() {
    return this._rolloutDuration;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging {
  /**
  * Colorize the log output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#color DataK8SCamelApacheOrgIntegrationProfileV1Manifest#color}
  */
  readonly color?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Logs message format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#format DataK8SCamelApacheOrgIntegrationProfileV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Output the logs in JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#json DataK8SCamelApacheOrgIntegrationProfileV1Manifest#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * Enable 'pretty printing' of the JSON logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#json_pretty_print DataK8SCamelApacheOrgIntegrationProfileV1Manifest#json_pretty_print}
  */
  readonly jsonPrettyPrint?: boolean | cdktf.IResolvable;
  /**
  * Adjust the logging level (defaults to 'INFO')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#level DataK8SCamelApacheOrgIntegrationProfileV1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.booleanToTerraform(struct!.color),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    format: cdktf.stringToTerraform(struct!.format),
    json: cdktf.booleanToTerraform(struct!.json),
    json_pretty_print: cdktf.booleanToTerraform(struct!.jsonPrettyPrint),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.booleanToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.booleanToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_pretty_print: {
      value: cdktf.booleanToHclTerraform(struct!.jsonPrettyPrint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._jsonPrettyPrint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPrettyPrint = this._jsonPrettyPrint;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._format = undefined;
      this._json = undefined;
      this._jsonPrettyPrint = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._format = value.format;
      this._json = value.json;
      this._jsonPrettyPrint = value.jsonPrettyPrint;
      this._level = value.level;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: boolean | cdktf.IResolvable; 
  public get color() {
    return this.getBooleanAttribute('color');
  }
  public set color(value: boolean | cdktf.IResolvable) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // json - computed: false, optional: true, required: false
  private _json?: boolean | cdktf.IResolvable; 
  public get json() {
    return this.getBooleanAttribute('json');
  }
  public set json(value: boolean | cdktf.IResolvable) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // json_pretty_print - computed: false, optional: true, required: false
  private _jsonPrettyPrint?: boolean | cdktf.IResolvable; 
  public get jsonPrettyPrint() {
    return this.getBooleanAttribute('json_pretty_print');
  }
  public set jsonPrettyPrint(value: boolean | cdktf.IResolvable) {
    this._jsonPrettyPrint = value;
  }
  public resetJsonPrettyPrint() {
    this._jsonPrettyPrint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPrettyPrintInput() {
    return this._jsonPrettyPrint;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster {
  /**
  * TraitConfiguration parameters configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration: { [key: string]: string };
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount {
  /**
  * A list of configuration pointing to configmap/secret. The configuration are expected to be UTF-8 resources as they are processed by runtime Camel Context and tried to be parsed as property files. They are also made available on the classpath in order to ease their usage directly from the Route. Syntax: [configmap|secret]:name[/key], where name represents the resource name and key optionally represents the resource key to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configs DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configs}
  */
  readonly configs?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * A list of EmptyDir volumes to be mounted. Syntax: [name:/container/path]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#empty_dirs DataK8SCamelApacheOrgIntegrationProfileV1Manifest#empty_dirs}
  */
  readonly emptyDirs?: string[];
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable 'hot reload' when a secret/configmap mounted is edited (default 'false'). The configmap/secret must be marked with 'camel.apache.org/integration' label to be taken in account. The resource will be watched for any kind change, also for changes in metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#hot_reload DataK8SCamelApacheOrgIntegrationProfileV1Manifest#hot_reload}
  */
  readonly hotReload?: boolean | cdktf.IResolvable;
  /**
  * A list of resources (text or binary content) pointing to configmap/secret. The resources are expected to be any resource type (text or binary content). The destination path can be either a default location or any path specified by the user. Syntax: [configmap|secret]:name[/key][@path], where name represents the resource name, key optionally represents the resource key to be filtered and path represents the destination path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#resources DataK8SCamelApacheOrgIntegrationProfileV1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Deprecated: no longer available since version 2.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#scan_kamelets_implicit_label_secrets DataK8SCamelApacheOrgIntegrationProfileV1Manifest#scan_kamelets_implicit_label_secrets}
  */
  readonly scanKameletsImplicitLabelSecrets?: boolean | cdktf.IResolvable;
  /**
  * A list of Persistent Volume Claims to be mounted. Syntax: [pvcname:/container/path]. If the PVC is not found, the Integration fails. You can use the syntax [pvcname:/container/path:size:accessMode<:storageClass>] to create a dynamic PVC based on the Storage Class provided or the default cluster Storage Class. However, if the PVC exists, the operator would mount it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#volumes DataK8SCamelApacheOrgIntegrationProfileV1Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configs),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    empty_dirs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emptyDirs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hot_reload: cdktf.booleanToTerraform(struct!.hotReload),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    scan_kamelets_implicit_label_secrets: cdktf.booleanToTerraform(struct!.scanKameletsImplicitLabelSecrets),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    empty_dirs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emptyDirs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hot_reload: {
      value: cdktf.booleanToHclTerraform(struct!.hotReload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scan_kamelets_implicit_label_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.scanKameletsImplicitLabelSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._emptyDirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirs = this._emptyDirs;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hotReload !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotReload = this._hotReload;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._scanKameletsImplicitLabelSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanKameletsImplicitLabelSecrets = this._scanKameletsImplicitLabelSecrets;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs = undefined;
      this._configuration = undefined;
      this._emptyDirs = undefined;
      this._enabled = undefined;
      this._hotReload = undefined;
      this._resources = undefined;
      this._scanKameletsImplicitLabelSecrets = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs = value.configs;
      this._configuration = value.configuration;
      this._emptyDirs = value.emptyDirs;
      this._enabled = value.enabled;
      this._hotReload = value.hotReload;
      this._resources = value.resources;
      this._scanKameletsImplicitLabelSecrets = value.scanKameletsImplicitLabelSecrets;
      this._volumes = value.volumes;
    }
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: string[]; 
  public get configs() {
    return this.getListAttribute('configs');
  }
  public set configs(value: string[]) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // empty_dirs - computed: false, optional: true, required: false
  private _emptyDirs?: string[]; 
  public get emptyDirs() {
    return this.getListAttribute('empty_dirs');
  }
  public set emptyDirs(value: string[]) {
    this._emptyDirs = value;
  }
  public resetEmptyDirs() {
    this._emptyDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirsInput() {
    return this._emptyDirs;
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

  // hot_reload - computed: false, optional: true, required: false
  private _hotReload?: boolean | cdktf.IResolvable; 
  public get hotReload() {
    return this.getBooleanAttribute('hot_reload');
  }
  public set hotReload(value: boolean | cdktf.IResolvable) {
    this._hotReload = value;
  }
  public resetHotReload() {
    this._hotReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotReloadInput() {
    return this._hotReload;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // scan_kamelets_implicit_label_secrets - computed: false, optional: true, required: false
  private _scanKameletsImplicitLabelSecrets?: boolean | cdktf.IResolvable; 
  public get scanKameletsImplicitLabelSecrets() {
    return this.getBooleanAttribute('scan_kamelets_implicit_label_secrets');
  }
  public set scanKameletsImplicitLabelSecrets(value: boolean | cdktf.IResolvable) {
    this._scanKameletsImplicitLabelSecrets = value;
  }
  public resetScanKameletsImplicitLabelSecrets() {
    this._scanKameletsImplicitLabelSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanKameletsImplicitLabelSecretsInput() {
    return this._scanKameletsImplicitLabelSecrets;
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi {
  /**
  * The configmaps holding the spec of the OpenAPI (compatible with > 3.0 spec only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configmaps DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configmaps}
  */
  readonly configmaps?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configmaps),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configmaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configmaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configmaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmaps = this._configmaps;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configmaps = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configmaps = value.configmaps;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configmaps - computed: false, optional: true, required: false
  private _configmaps?: string[]; 
  public get configmaps() {
    return this.getListAttribute('configmaps');
  }
  public set configmaps(value: string[]) {
    this._configmaps = value;
  }
  public resetConfigmaps() {
    this._configmaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapsInput() {
    return this._configmaps;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of annotations to be transferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#target_annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#target_annotations}
  */
  readonly targetAnnotations?: string[];
  /**
  * The set of labels to be transferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#target_labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#target_labels}
  */
  readonly targetLabels?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetAnnotations),
    target_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetLabels),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetAnnotations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._targetAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAnnotations = this._targetAnnotations;
    }
    if (this._targetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabels = this._targetLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._targetAnnotations = undefined;
      this._targetLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._targetAnnotations = value.targetAnnotations;
      this._targetLabels = value.targetLabels;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // target_annotations - computed: false, optional: true, required: false
  private _targetAnnotations?: string[]; 
  public get targetAnnotations() {
    return this.getListAttribute('target_annotations');
  }
  public set targetAnnotations(value: string[]) {
    this._targetAnnotations = value;
  }
  public resetTargetAnnotations() {
    this._targetAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAnnotationsInput() {
    return this._targetAnnotations;
  }

  // target_labels - computed: false, optional: true, required: false
  private _targetLabels?: string[]; 
  public get targetLabels() {
    return this.getListAttribute('target_labels');
  }
  public set targetLabels(value: string[]) {
    this._targetLabels = value;
  }
  public resetTargetLabels() {
    this._targetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelsInput() {
    return this._targetLabels;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of pods for the Integration that can be unavailable after an eviction. It can be either an absolute number or a percentage (default '1' if 'min-available' is also not set). Only one of 'max-unavailable' and 'min-available' can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#max_unavailable DataK8SCamelApacheOrgIntegrationProfileV1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * The number of pods for the Integration that must still be available after an eviction. It can be either an absolute number or a percentage. Only one of 'min-available' and 'max-unavailable' can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#min_available DataK8SCamelApacheOrgIntegrationProfileV1Manifest#min_available}
  */
  readonly minAvailable?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform {
  /**
  * To automatically detect from the environment if a default platform can be created (it will be created on OpenShift or when a registry address is set). Deprecated: Platform is auto generated by the operator install procedure - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * To create a default (empty) platform when the platform is missing. Deprecated: Platform is auto generated by the operator install procedure - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#create_default DataK8SCamelApacheOrgIntegrationProfileV1Manifest#create_default}
  */
  readonly createDefault?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the platform should be created globally in the case of global operator (default true). Deprecated: Platform is auto generated by the operator install procedure - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#global DataK8SCamelApacheOrgIntegrationProfileV1Manifest#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    create_default: cdktf.booleanToTerraform(struct!.createDefault),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    global: cdktf.booleanToTerraform(struct!.global),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    create_default: {
      value: cdktf.booleanToHclTerraform(struct!.createDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._createDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefault = this._createDefault;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._createDefault = undefined;
      this._enabled = undefined;
      this._global = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._createDefault = value.createDefault;
      this._enabled = value.enabled;
      this._global = value.global;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // create_default - computed: false, optional: true, required: false
  private _createDefault?: boolean | cdktf.IResolvable; 
  public get createDefault() {
    return this.getBooleanAttribute('create_default');
  }
  public set createDefault(value: boolean | cdktf.IResolvable) {
    this._createDefault = value;
  }
  public resetCreateDefault() {
    this._createDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultInput() {
    return this._createDefault;
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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether a 'PodMonitor' resource is created (default 'true').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_monitor DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_monitor}
  */
  readonly podMonitor?: boolean | cdktf.IResolvable;
  /**
  * The 'PodMonitor' resource labels, applicable when 'pod-monitor' is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod_monitor_labels DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod_monitor_labels}
  */
  readonly podMonitorLabels?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    pod_monitor: cdktf.booleanToTerraform(struct!.podMonitor),
    pod_monitor_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podMonitorLabels),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.podMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_monitor_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podMonitorLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._podMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMonitor = this._podMonitor;
    }
    if (this._podMonitorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMonitorLabels = this._podMonitorLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._podMonitor = undefined;
      this._podMonitorLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._podMonitor = value.podMonitor;
      this._podMonitorLabels = value.podMonitorLabels;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // pod_monitor - computed: false, optional: true, required: false
  private _podMonitor?: boolean | cdktf.IResolvable; 
  public get podMonitor() {
    return this.getBooleanAttribute('pod_monitor');
  }
  public set podMonitor(value: boolean | cdktf.IResolvable) {
    this._podMonitor = value;
  }
  public resetPodMonitor() {
    this._podMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorInput() {
    return this._podMonitor;
  }

  // pod_monitor_labels - computed: false, optional: true, required: false
  private _podMonitorLabels?: string[]; 
  public get podMonitorLabels() {
    return this.getListAttribute('pod_monitor_labels');
  }
  public set podMonitorLabels(value: string[]) {
    this._podMonitorLabels = value;
  }
  public resetPodMonitorLabels() {
    this._podMonitorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorLabelsInput() {
    return this._podMonitorLabels;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret {
  /**
  * Automatically configures the platform registry secret on the pod if it is of type 'kubernetes.io/dockerconfigjson'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When using a global operator with a shared platform, this enables delegation of the 'system:image-puller' cluster role on the operator namespace to the integration service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#image_puller_delegation DataK8SCamelApacheOrgIntegrationProfileV1Manifest#image_puller_delegation}
  */
  readonly imagePullerDelegation?: boolean | cdktf.IResolvable;
  /**
  * The pull secret name to set on the Pod. If left empty this is automatically taken from the 'IntegrationPlatform' registry configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#secret_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    image_puller_delegation: cdktf.booleanToTerraform(struct!.imagePullerDelegation),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_puller_delegation: {
      value: cdktf.booleanToHclTerraform(struct!.imagePullerDelegation),
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._imagePullerDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullerDelegation = this._imagePullerDelegation;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._imagePullerDelegation = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._imagePullerDelegation = value.imagePullerDelegation;
      this._secretName = value.secretName;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // image_puller_delegation - computed: false, optional: true, required: false
  private _imagePullerDelegation?: boolean | cdktf.IResolvable; 
  public get imagePullerDelegation() {
    return this.getBooleanAttribute('image_puller_delegation');
  }
  public set imagePullerDelegation(value: boolean | cdktf.IResolvable) {
    this._imagePullerDelegation = value;
  }
  public resetImagePullerDelegation() {
    this._imagePullerDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullerDelegationInput() {
    return this._imagePullerDelegation;
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus {
  /**
  * The Quarkus mode to run: either 'jvm' or 'native' (default 'jvm'). In case both 'jvm' and 'native' are specified, two 'IntegrationKit' resources are created, with the 'native' kit having precedence over the 'jvm' one once ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#build_mode DataK8SCamelApacheOrgIntegrationProfileV1Manifest#build_mode}
  */
  readonly buildMode?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The base image to use when running a native build (default 'quay.io/quarkus/quarkus-micro-image:2.0')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#native_base_image DataK8SCamelApacheOrgIntegrationProfileV1Manifest#native_base_image}
  */
  readonly nativeBaseImage?: string;
  /**
  * The image containing the tooling required for a native build (by default it will use the one provided in the runtime catalog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#native_builder_image DataK8SCamelApacheOrgIntegrationProfileV1Manifest#native_builder_image}
  */
  readonly nativeBuilderImage?: string;
  /**
  * The Quarkus package types, 'fast-jar' or 'native' (default 'fast-jar'). In case both 'fast-jar' and 'native' are specified, two 'IntegrationKit' resources are created, with the native kit having precedence over the 'fast-jar' one once ready. The order influences the resolution of the current kit for the integration. The kit corresponding to the first package type will be assigned to the integration in case no existing kit that matches the integration exists. Deprecated: use 'build-mode' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#package_types DataK8SCamelApacheOrgIntegrationProfileV1Manifest#package_types}
  */
  readonly packageTypes?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buildMode),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    native_base_image: cdktf.stringToTerraform(struct!.nativeBaseImage),
    native_builder_image: cdktf.stringToTerraform(struct!.nativeBuilderImage),
    package_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageTypes),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.buildMode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    native_base_image: {
      value: cdktf.stringToHclTerraform(struct!.nativeBaseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_builder_image: {
      value: cdktf.stringToHclTerraform(struct!.nativeBuilderImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildMode = this._buildMode;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nativeBaseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeBaseImage = this._nativeBaseImage;
    }
    if (this._nativeBuilderImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeBuilderImage = this._nativeBuilderImage;
    }
    if (this._packageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageTypes = this._packageTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildMode = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._nativeBaseImage = undefined;
      this._nativeBuilderImage = undefined;
      this._packageTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildMode = value.buildMode;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._nativeBaseImage = value.nativeBaseImage;
      this._nativeBuilderImage = value.nativeBuilderImage;
      this._packageTypes = value.packageTypes;
    }
  }

  // build_mode - computed: false, optional: true, required: false
  private _buildMode?: string[]; 
  public get buildMode() {
    return this.getListAttribute('build_mode');
  }
  public set buildMode(value: string[]) {
    this._buildMode = value;
  }
  public resetBuildMode() {
    this._buildMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildModeInput() {
    return this._buildMode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // native_base_image - computed: false, optional: true, required: false
  private _nativeBaseImage?: string; 
  public get nativeBaseImage() {
    return this.getStringAttribute('native_base_image');
  }
  public set nativeBaseImage(value: string) {
    this._nativeBaseImage = value;
  }
  public resetNativeBaseImage() {
    this._nativeBaseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeBaseImageInput() {
    return this._nativeBaseImage;
  }

  // native_builder_image - computed: false, optional: true, required: false
  private _nativeBuilderImage?: string; 
  public get nativeBuilderImage() {
    return this.getStringAttribute('native_builder_image');
  }
  public set nativeBuilderImage(value: string) {
    this._nativeBuilderImage = value;
  }
  public resetNativeBuilderImage() {
    this._nativeBuilderImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeBuilderImageInput() {
    return this._nativeBuilderImage;
  }

  // package_types - computed: false, optional: true, required: false
  private _packageTypes?: string[]; 
  public get packageTypes() {
    return this.getListAttribute('package_types');
  }
  public set packageTypes(value: string[]) {
    this._packageTypes = value;
  }
  public resetPackageTypes() {
    this._packageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypesInput() {
    return this._packageTypes;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute {
  /**
  * The annotations added to route. This can be used to set route specific annotations For annotations options see https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html#route-specific-annotations CLI usage example: -t 'route.annotations.'haproxy.router.openshift.io/balance'=true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationProfileV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * To configure the host exposed by the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#host DataK8SCamelApacheOrgIntegrationProfileV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The TLS CA certificate contents. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_ca_certificate DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_ca_certificate}
  */
  readonly tlsCaCertificate?: string;
  /**
  * The secret name and key reference to the TLS CA certificate. The format is 'secret-name[/key-name]', the value represents the secret name, if there is only one key in the secret it will be read, otherwise you can set a key name separated with a '/'. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_ca_certificate_secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_ca_certificate_secret}
  */
  readonly tlsCaCertificateSecret?: string;
  /**
  * The TLS certificate contents. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_certificate DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_certificate}
  */
  readonly tlsCertificate?: string;
  /**
  * The secret name and key reference to the TLS certificate. The format is 'secret-name[/key-name]', the value represents the secret name, if there is only one key in the secret it will be read, otherwise you can set a key name separated with a '/'. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_certificate_secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_certificate_secret}
  */
  readonly tlsCertificateSecret?: string;
  /**
  * The destination CA certificate provides the contents of the ca certificate of the final destination. When using reencrypt termination this file should be provided in order to have routers use it for health checks on the secure connection. If this field is not specified, the router may provide its own destination CA and perform hostname validation using the short service name (service.namespace.svc), which allows infrastructure generated certificates to automatically verify. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_destination_ca_certificate DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_destination_ca_certificate}
  */
  readonly tlsDestinationCaCertificate?: string;
  /**
  * The secret name and key reference to the destination CA certificate. The format is 'secret-name[/key-name]', the value represents the secret name, if there is only one key in the secret it will be read, otherwise you can set a key name separated with a '/'. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_destination_ca_certificate_secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_destination_ca_certificate_secret}
  */
  readonly tlsDestinationCaCertificateSecret?: string;
  /**
  * To configure how to deal with insecure traffic, e.g. 'Allow', 'Disable' or 'Redirect' traffic. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_insecure_edge_termination_policy DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_insecure_edge_termination_policy}
  */
  readonly tlsInsecureEdgeTerminationPolicy?: string;
  /**
  * The TLS certificate key contents. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_key DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_key}
  */
  readonly tlsKey?: string;
  /**
  * The secret name and key reference to the TLS certificate key. The format is 'secret-name[/key-name]', the value represents the secret name, if there is only one key in the secret it will be read, otherwise you can set a key name separated with a '/'. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_key_secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_key_secret}
  */
  readonly tlsKeySecret?: string;
  /**
  * The TLS termination type, like 'edge', 'passthrough' or 'reencrypt'. Refer to the OpenShift route documentation for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tls_termination DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tls_termination}
  */
  readonly tlsTermination?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    tls_ca_certificate: cdktf.stringToTerraform(struct!.tlsCaCertificate),
    tls_ca_certificate_secret: cdktf.stringToTerraform(struct!.tlsCaCertificateSecret),
    tls_certificate: cdktf.stringToTerraform(struct!.tlsCertificate),
    tls_certificate_secret: cdktf.stringToTerraform(struct!.tlsCertificateSecret),
    tls_destination_ca_certificate: cdktf.stringToTerraform(struct!.tlsDestinationCaCertificate),
    tls_destination_ca_certificate_secret: cdktf.stringToTerraform(struct!.tlsDestinationCaCertificateSecret),
    tls_insecure_edge_termination_policy: cdktf.stringToTerraform(struct!.tlsInsecureEdgeTerminationPolicy),
    tls_key: cdktf.stringToTerraform(struct!.tlsKey),
    tls_key_secret: cdktf.stringToTerraform(struct!.tlsKeySecret),
    tls_termination: cdktf.stringToTerraform(struct!.tlsTermination),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute | cdktf.IResolvable): any {
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
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca_certificate_secret: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCertificateSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_secret: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_destination_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.tlsDestinationCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_destination_ca_certificate_secret: {
      value: cdktf.stringToHclTerraform(struct!.tlsDestinationCaCertificateSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_insecure_edge_termination_policy: {
      value: cdktf.stringToHclTerraform(struct!.tlsInsecureEdgeTerminationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.tlsKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_termination: {
      value: cdktf.stringToHclTerraform(struct!.tlsTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tlsCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCertificate = this._tlsCaCertificate;
    }
    if (this._tlsCaCertificateSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCertificateSecret = this._tlsCaCertificateSecret;
    }
    if (this._tlsCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificate = this._tlsCertificate;
    }
    if (this._tlsCertificateSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateSecret = this._tlsCertificateSecret;
    }
    if (this._tlsDestinationCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsDestinationCaCertificate = this._tlsDestinationCaCertificate;
    }
    if (this._tlsDestinationCaCertificateSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsDestinationCaCertificateSecret = this._tlsDestinationCaCertificateSecret;
    }
    if (this._tlsInsecureEdgeTerminationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInsecureEdgeTerminationPolicy = this._tlsInsecureEdgeTerminationPolicy;
    }
    if (this._tlsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKey = this._tlsKey;
    }
    if (this._tlsKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKeySecret = this._tlsKeySecret;
    }
    if (this._tlsTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTermination = this._tlsTermination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._tlsCaCertificate = undefined;
      this._tlsCaCertificateSecret = undefined;
      this._tlsCertificate = undefined;
      this._tlsCertificateSecret = undefined;
      this._tlsDestinationCaCertificate = undefined;
      this._tlsDestinationCaCertificateSecret = undefined;
      this._tlsInsecureEdgeTerminationPolicy = undefined;
      this._tlsKey = undefined;
      this._tlsKeySecret = undefined;
      this._tlsTermination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._host = value.host;
      this._tlsCaCertificate = value.tlsCaCertificate;
      this._tlsCaCertificateSecret = value.tlsCaCertificateSecret;
      this._tlsCertificate = value.tlsCertificate;
      this._tlsCertificateSecret = value.tlsCertificateSecret;
      this._tlsDestinationCaCertificate = value.tlsDestinationCaCertificate;
      this._tlsDestinationCaCertificateSecret = value.tlsDestinationCaCertificateSecret;
      this._tlsInsecureEdgeTerminationPolicy = value.tlsInsecureEdgeTerminationPolicy;
      this._tlsKey = value.tlsKey;
      this._tlsKeySecret = value.tlsKeySecret;
      this._tlsTermination = value.tlsTermination;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // tls_ca_certificate - computed: false, optional: true, required: false
  private _tlsCaCertificate?: string; 
  public get tlsCaCertificate() {
    return this.getStringAttribute('tls_ca_certificate');
  }
  public set tlsCaCertificate(value: string) {
    this._tlsCaCertificate = value;
  }
  public resetTlsCaCertificate() {
    this._tlsCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertificateInput() {
    return this._tlsCaCertificate;
  }

  // tls_ca_certificate_secret - computed: false, optional: true, required: false
  private _tlsCaCertificateSecret?: string; 
  public get tlsCaCertificateSecret() {
    return this.getStringAttribute('tls_ca_certificate_secret');
  }
  public set tlsCaCertificateSecret(value: string) {
    this._tlsCaCertificateSecret = value;
  }
  public resetTlsCaCertificateSecret() {
    this._tlsCaCertificateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertificateSecretInput() {
    return this._tlsCaCertificateSecret;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }

  // tls_certificate_secret - computed: false, optional: true, required: false
  private _tlsCertificateSecret?: string; 
  public get tlsCertificateSecret() {
    return this.getStringAttribute('tls_certificate_secret');
  }
  public set tlsCertificateSecret(value: string) {
    this._tlsCertificateSecret = value;
  }
  public resetTlsCertificateSecret() {
    this._tlsCertificateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateSecretInput() {
    return this._tlsCertificateSecret;
  }

  // tls_destination_ca_certificate - computed: false, optional: true, required: false
  private _tlsDestinationCaCertificate?: string; 
  public get tlsDestinationCaCertificate() {
    return this.getStringAttribute('tls_destination_ca_certificate');
  }
  public set tlsDestinationCaCertificate(value: string) {
    this._tlsDestinationCaCertificate = value;
  }
  public resetTlsDestinationCaCertificate() {
    this._tlsDestinationCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDestinationCaCertificateInput() {
    return this._tlsDestinationCaCertificate;
  }

  // tls_destination_ca_certificate_secret - computed: false, optional: true, required: false
  private _tlsDestinationCaCertificateSecret?: string; 
  public get tlsDestinationCaCertificateSecret() {
    return this.getStringAttribute('tls_destination_ca_certificate_secret');
  }
  public set tlsDestinationCaCertificateSecret(value: string) {
    this._tlsDestinationCaCertificateSecret = value;
  }
  public resetTlsDestinationCaCertificateSecret() {
    this._tlsDestinationCaCertificateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDestinationCaCertificateSecretInput() {
    return this._tlsDestinationCaCertificateSecret;
  }

  // tls_insecure_edge_termination_policy - computed: false, optional: true, required: false
  private _tlsInsecureEdgeTerminationPolicy?: string; 
  public get tlsInsecureEdgeTerminationPolicy() {
    return this.getStringAttribute('tls_insecure_edge_termination_policy');
  }
  public set tlsInsecureEdgeTerminationPolicy(value: string) {
    this._tlsInsecureEdgeTerminationPolicy = value;
  }
  public resetTlsInsecureEdgeTerminationPolicy() {
    this._tlsInsecureEdgeTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureEdgeTerminationPolicyInput() {
    return this._tlsInsecureEdgeTerminationPolicy;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this.getStringAttribute('tls_key');
  }
  public set tlsKey(value: string) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }

  // tls_key_secret - computed: false, optional: true, required: false
  private _tlsKeySecret?: string; 
  public get tlsKeySecret() {
    return this.getStringAttribute('tls_key_secret');
  }
  public set tlsKeySecret(value: string) {
    this._tlsKeySecret = value;
  }
  public resetTlsKeySecret() {
    this._tlsKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeySecretInput() {
    return this._tlsKeySecret;
  }

  // tls_termination - computed: false, optional: true, required: false
  private _tlsTermination?: string; 
  public get tlsTermination() {
    return this.getStringAttribute('tls_termination');
  }
  public set tlsTermination(value: string) {
    this._tlsTermination = value;
  }
  public resetTlsTermination() {
    this._tlsTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTerminationInput() {
    return this._tlsTermination;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Security Context RunAsNonRoot configuration (default false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#run_as_non_root DataK8SCamelApacheOrgIntegrationProfileV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Security Context RunAsUser configuration (default none): this value is automatically retrieved in Openshift clusters when not explicitly set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#run_as_user DataK8SCamelApacheOrgIntegrationProfileV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Security Context SeccompProfileType configuration (default RuntimeDefault).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#seccomp_profile_type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#seccomp_profile_type}
  */
  readonly seccompProfileType?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    seccomp_profile_type: cdktf.stringToTerraform(struct!.seccompProfileType),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seccomp_profile_type: {
      value: cdktf.stringToHclTerraform(struct!.seccompProfileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seccompProfileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfileType = this._seccompProfileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seccompProfileType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seccompProfileType = value.seccompProfileType;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // seccomp_profile_type - computed: false, optional: true, required: false
  private _seccompProfileType?: string; 
  public get seccompProfileType() {
    return this.getStringAttribute('seccomp_profile_type');
  }
  public set seccompProfileType(value: string) {
    this._seccompProfileType = value;
  }
  public resetSeccompProfileType() {
    this._seccompProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileTypeInput() {
    return this._seccompProfileType;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService {
  /**
  * To automatically detect from the code if a Service needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Service to be exposed as NodePort (default 'false'). Deprecated: Use service type instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#node_port DataK8SCamelApacheOrgIntegrationProfileV1Manifest#node_port}
  */
  readonly nodePort?: boolean | cdktf.IResolvable;
  /**
  * The type of service to be used, either 'ClusterIP', 'NodePort' or 'LoadBalancer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#type DataK8SCamelApacheOrgIntegrationProfileV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    node_port: cdktf.booleanToTerraform(struct!.nodePort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port: {
      value: cdktf.booleanToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._nodePort = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._nodePort = value.nodePort;
      this._type = value.type;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: boolean | cdktf.IResolvable; 
  public get nodePort() {
    return this.getBooleanAttribute('node_port');
  }
  public set nodePort(value: boolean | cdktf.IResolvable) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
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
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of Services in the form [[apigroup/]version:]kind:[namespace/]name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#services DataK8SCamelApacheOrgIntegrationProfileV1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._services = value.services;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi {
  /**
  * TraitConfiguration parameters configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration: { [key: string]: string };
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry {
  /**
  * Enables automatic configuration of the trait, including automatic discovery of the telemetry endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#auto DataK8SCamelApacheOrgIntegrationProfileV1Manifest#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The target endpoint of the Telemetry service (automatically discovered by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#endpoint DataK8SCamelApacheOrgIntegrationProfileV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The sampler of the telemetry used for tracing (default 'on')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#sampler DataK8SCamelApacheOrgIntegrationProfileV1Manifest#sampler}
  */
  readonly sampler?: string;
  /**
  * The sampler of the telemetry used for tracing is parent based (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#sampler_parent_based DataK8SCamelApacheOrgIntegrationProfileV1Manifest#sampler_parent_based}
  */
  readonly samplerParentBased?: boolean | cdktf.IResolvable;
  /**
  * The sampler ratio of the telemetry used for tracing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#sampler_ratio DataK8SCamelApacheOrgIntegrationProfileV1Manifest#sampler_ratio}
  */
  readonly samplerRatio?: string;
  /**
  * The name of the service that publishes telemetry data (defaults to the integration name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#service_name DataK8SCamelApacheOrgIntegrationProfileV1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    sampler: cdktf.stringToTerraform(struct!.sampler),
    sampler_parent_based: cdktf.booleanToTerraform(struct!.samplerParentBased),
    sampler_ratio: cdktf.stringToTerraform(struct!.samplerRatio),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler: {
      value: cdktf.stringToHclTerraform(struct!.sampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_parent_based: {
      value: cdktf.booleanToHclTerraform(struct!.samplerParentBased),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampler_ratio: {
      value: cdktf.stringToHclTerraform(struct!.samplerRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._sampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampler = this._sampler;
    }
    if (this._samplerParentBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerParentBased = this._samplerParentBased;
    }
    if (this._samplerRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerRatio = this._samplerRatio;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._endpoint = undefined;
      this._sampler = undefined;
      this._samplerParentBased = undefined;
      this._samplerRatio = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._endpoint = value.endpoint;
      this._sampler = value.sampler;
      this._samplerParentBased = value.samplerParentBased;
      this._samplerRatio = value.samplerRatio;
      this._serviceName = value.serviceName;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // sampler - computed: false, optional: true, required: false
  private _sampler?: string; 
  public get sampler() {
    return this.getStringAttribute('sampler');
  }
  public set sampler(value: string) {
    this._sampler = value;
  }
  public resetSampler() {
    this._sampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerInput() {
    return this._sampler;
  }

  // sampler_parent_based - computed: false, optional: true, required: false
  private _samplerParentBased?: boolean | cdktf.IResolvable; 
  public get samplerParentBased() {
    return this.getBooleanAttribute('sampler_parent_based');
  }
  public set samplerParentBased(value: boolean | cdktf.IResolvable) {
    this._samplerParentBased = value;
  }
  public resetSamplerParentBased() {
    this._samplerParentBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerParentBasedInput() {
    return this._samplerParentBased;
  }

  // sampler_ratio - computed: false, optional: true, required: false
  private _samplerRatio?: string; 
  public get samplerRatio() {
    return this.getStringAttribute('sampler_ratio');
  }
  public set samplerRatio(value: string) {
    this._samplerRatio = value;
  }
  public resetSamplerRatio() {
    this._samplerRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerRatioInput() {
    return this._samplerRatio;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale {
  /**
  * TraitConfiguration parameters configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration: { [key: string]: string };
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationProfileV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The list of taints to tolerate, in the form 'Key[=Value]:Effect[:Seconds]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#taints DataK8SCamelApacheOrgIntegrationProfileV1Manifest#taints}
  */
  readonly taints?: string[];
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    taints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taints),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    taints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._taints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._taints = value.taints;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // taints - computed: false, optional: true, required: false
  private _taints?: string[]; 
  public get taints() {
    return this.getListAttribute('taints');
  }
  public set taints(value: string[]) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing {
  /**
  * TraitConfiguration parameters configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#configuration}
  */
  readonly configuration: { [key: string]: string };
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits {
  /**
  * The extension point with addon traits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#addons DataK8SCamelApacheOrgIntegrationProfileV1Manifest#addons}
  */
  readonly addons?: { [key: string]: string };
  /**
  * The configuration of Affinity trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#affinity DataK8SCamelApacheOrgIntegrationProfileV1Manifest#affinity}
  */
  readonly affinity?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity;
  /**
  * The configuration of Builder trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#builder DataK8SCamelApacheOrgIntegrationProfileV1Manifest#builder}
  */
  readonly builder?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder;
  /**
  * The configuration of Camel trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#camel DataK8SCamelApacheOrgIntegrationProfileV1Manifest#camel}
  */
  readonly camel?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel;
  /**
  * The configuration of Container trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#container DataK8SCamelApacheOrgIntegrationProfileV1Manifest#container}
  */
  readonly container?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer;
  /**
  * The configuration of Cron trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#cron DataK8SCamelApacheOrgIntegrationProfileV1Manifest#cron}
  */
  readonly cron?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron;
  /**
  * The configuration of Dependencies trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#dependencies DataK8SCamelApacheOrgIntegrationProfileV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies;
  /**
  * The configuration of Deployer trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#deployer DataK8SCamelApacheOrgIntegrationProfileV1Manifest#deployer}
  */
  readonly deployer?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer;
  /**
  * The configuration of Deployment trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#deployment DataK8SCamelApacheOrgIntegrationProfileV1Manifest#deployment}
  */
  readonly deployment?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment;
  /**
  * The configuration of Environment trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#environment DataK8SCamelApacheOrgIntegrationProfileV1Manifest#environment}
  */
  readonly environment?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment;
  /**
  * The configuration of Error Handler trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#error_handler DataK8SCamelApacheOrgIntegrationProfileV1Manifest#error_handler}
  */
  readonly errorHandler?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler;
  /**
  * The configuration of GC trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#gc DataK8SCamelApacheOrgIntegrationProfileV1Manifest#gc}
  */
  readonly gc?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc;
  /**
  * The configuration of Health trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#health DataK8SCamelApacheOrgIntegrationProfileV1Manifest#health}
  */
  readonly health?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth;
  /**
  * The configuration of Ingress trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#ingress DataK8SCamelApacheOrgIntegrationProfileV1Manifest#ingress}
  */
  readonly ingress?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress;
  /**
  * The configuration of Istio trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#istio DataK8SCamelApacheOrgIntegrationProfileV1Manifest#istio}
  */
  readonly istio?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio;
  /**
  * The configuration of Jolokia trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#jolokia DataK8SCamelApacheOrgIntegrationProfileV1Manifest#jolokia}
  */
  readonly jolokia?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia;
  /**
  * The configuration of JVM trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#jvm DataK8SCamelApacheOrgIntegrationProfileV1Manifest#jvm}
  */
  readonly jvm?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm;
  /**
  * The configuration of Kamelets trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#kamelets DataK8SCamelApacheOrgIntegrationProfileV1Manifest#kamelets}
  */
  readonly kamelets?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets;
  /**
  * Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#keda DataK8SCamelApacheOrgIntegrationProfileV1Manifest#keda}
  */
  readonly keda?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda;
  /**
  * The configuration of Knative trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#knative DataK8SCamelApacheOrgIntegrationProfileV1Manifest#knative}
  */
  readonly knative?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative;
  /**
  * The configuration of Knative Service trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#knative_service DataK8SCamelApacheOrgIntegrationProfileV1Manifest#knative_service}
  */
  readonly knativeService?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService;
  /**
  * The configuration of Logging trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#logging DataK8SCamelApacheOrgIntegrationProfileV1Manifest#logging}
  */
  readonly logging?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging;
  /**
  * Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#master DataK8SCamelApacheOrgIntegrationProfileV1Manifest#master}
  */
  readonly master?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster;
  /**
  * The configuration of Mount trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#mount DataK8SCamelApacheOrgIntegrationProfileV1Manifest#mount}
  */
  readonly mount?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount;
  /**
  * The configuration of OpenAPI trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#openapi DataK8SCamelApacheOrgIntegrationProfileV1Manifest#openapi}
  */
  readonly openapi?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi;
  /**
  * The configuration of Owner trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#owner DataK8SCamelApacheOrgIntegrationProfileV1Manifest#owner}
  */
  readonly owner?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner;
  /**
  * The configuration of PDB trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pdb DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pdb}
  */
  readonly pdb?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb;
  /**
  * The configuration of Platform trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#platform DataK8SCamelApacheOrgIntegrationProfileV1Manifest#platform}
  */
  readonly platform?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform;
  /**
  * The configuration of Pod trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pod DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pod}
  */
  readonly pod?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod;
  /**
  * The configuration of Prometheus trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#prometheus DataK8SCamelApacheOrgIntegrationProfileV1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus;
  /**
  * The configuration of Pull Secret trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#pull_secret DataK8SCamelApacheOrgIntegrationProfileV1Manifest#pull_secret}
  */
  readonly pullSecret?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret;
  /**
  * The configuration of Quarkus trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#quarkus DataK8SCamelApacheOrgIntegrationProfileV1Manifest#quarkus}
  */
  readonly quarkus?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus;
  /**
  * The configuration of Registry trait (support removed since version 2.5.0). Deprecated: use jvm trait or read documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#registry DataK8SCamelApacheOrgIntegrationProfileV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry;
  /**
  * The configuration of Route trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#route DataK8SCamelApacheOrgIntegrationProfileV1Manifest#route}
  */
  readonly route?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute;
  /**
  * The configuration of Security Context trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#security_context DataK8SCamelApacheOrgIntegrationProfileV1Manifest#security_context}
  */
  readonly securityContext?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext;
  /**
  * The configuration of Service trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#service DataK8SCamelApacheOrgIntegrationProfileV1Manifest#service}
  */
  readonly service?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService;
  /**
  * The configuration of Service Binding trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#service_binding DataK8SCamelApacheOrgIntegrationProfileV1Manifest#service_binding}
  */
  readonly serviceBinding?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding;
  /**
  * Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#strimzi DataK8SCamelApacheOrgIntegrationProfileV1Manifest#strimzi}
  */
  readonly strimzi?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi;
  /**
  * The configuration of Telemetry trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#telemetry DataK8SCamelApacheOrgIntegrationProfileV1Manifest#telemetry}
  */
  readonly telemetry?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry;
  /**
  * Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#threescale DataK8SCamelApacheOrgIntegrationProfileV1Manifest#threescale}
  */
  readonly threescale?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale;
  /**
  * The configuration of Toleration trait
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#toleration DataK8SCamelApacheOrgIntegrationProfileV1Manifest#toleration}
  */
  readonly toleration?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration;
  /**
  * Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#tracing DataK8SCamelApacheOrgIntegrationProfileV1Manifest#tracing}
  */
  readonly tracing?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addons),
    affinity: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityToTerraform(struct!.affinity),
    builder: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderToTerraform(struct!.builder),
    camel: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelToTerraform(struct!.camel),
    container: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerToTerraform(struct!.container),
    cron: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronToTerraform(struct!.cron),
    dependencies: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesToTerraform(struct!.dependencies),
    deployer: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerToTerraform(struct!.deployer),
    deployment: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentToTerraform(struct!.deployment),
    environment: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentToTerraform(struct!.environment),
    error_handler: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerToTerraform(struct!.errorHandler),
    gc: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcToTerraform(struct!.gc),
    health: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthToTerraform(struct!.health),
    ingress: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressToTerraform(struct!.ingress),
    istio: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioToTerraform(struct!.istio),
    jolokia: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaToTerraform(struct!.jolokia),
    jvm: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmToTerraform(struct!.jvm),
    kamelets: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsToTerraform(struct!.kamelets),
    keda: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaToTerraform(struct!.keda),
    knative: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeToTerraform(struct!.knative),
    knative_service: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceToTerraform(struct!.knativeService),
    logging: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingToTerraform(struct!.logging),
    master: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterToTerraform(struct!.master),
    mount: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountToTerraform(struct!.mount),
    openapi: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiToTerraform(struct!.openapi),
    owner: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerToTerraform(struct!.owner),
    pdb: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbToTerraform(struct!.pdb),
    platform: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformToTerraform(struct!.platform),
    pod: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodToTerraform(struct!.pod),
    prometheus: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusToTerraform(struct!.prometheus),
    pull_secret: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretToTerraform(struct!.pullSecret),
    quarkus: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusToTerraform(struct!.quarkus),
    registry: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryToTerraform(struct!.registry),
    route: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteToTerraform(struct!.route),
    security_context: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextToTerraform(struct!.securityContext),
    service: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceToTerraform(struct!.service),
    service_binding: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingToTerraform(struct!.serviceBinding),
    strimzi: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziToTerraform(struct!.strimzi),
    telemetry: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryToTerraform(struct!.telemetry),
    threescale: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleToTerraform(struct!.threescale),
    toleration: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationToTerraform(struct!.toleration),
    tracing: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingToTerraform(struct!.tracing),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addons),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    affinity: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity",
    },
    builder: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderToHclTerraform(struct!.builder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder",
    },
    camel: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelToHclTerraform(struct!.camel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel",
    },
    container: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer",
    },
    cron: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron",
    },
    dependencies: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesToHclTerraform(struct!.dependencies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies",
    },
    deployer: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerToHclTerraform(struct!.deployer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer",
    },
    deployment: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment",
    },
    environment: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment",
    },
    error_handler: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerToHclTerraform(struct!.errorHandler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler",
    },
    gc: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcToHclTerraform(struct!.gc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc",
    },
    health: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth",
    },
    ingress: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress",
    },
    istio: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioToHclTerraform(struct!.istio),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio",
    },
    jolokia: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaToHclTerraform(struct!.jolokia),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia",
    },
    jvm: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmToHclTerraform(struct!.jvm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm",
    },
    kamelets: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsToHclTerraform(struct!.kamelets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets",
    },
    keda: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaToHclTerraform(struct!.keda),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda",
    },
    knative: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeToHclTerraform(struct!.knative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative",
    },
    knative_service: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceToHclTerraform(struct!.knativeService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService",
    },
    logging: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging",
    },
    master: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterToHclTerraform(struct!.master),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster",
    },
    mount: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountToHclTerraform(struct!.mount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount",
    },
    openapi: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiToHclTerraform(struct!.openapi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi",
    },
    owner: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner",
    },
    pdb: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbToHclTerraform(struct!.pdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb",
    },
    platform: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform",
    },
    pod: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod",
    },
    prometheus: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus",
    },
    pull_secret: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretToHclTerraform(struct!.pullSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret",
    },
    quarkus: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusToHclTerraform(struct!.quarkus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus",
    },
    registry: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry",
    },
    route: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute",
    },
    security_context: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext",
    },
    service: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService",
    },
    service_binding: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingToHclTerraform(struct!.serviceBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding",
    },
    strimzi: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziToHclTerraform(struct!.strimzi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi",
    },
    telemetry: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryToHclTerraform(struct!.telemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry",
    },
    threescale: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleToHclTerraform(struct!.threescale),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale",
    },
    toleration: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationToHclTerraform(struct!.toleration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration",
    },
    tracing: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._builder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builder = this._builder?.internalValue;
    }
    if (this._camel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.camel = this._camel?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._deployer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployer = this._deployer?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._errorHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandler = this._errorHandler?.internalValue;
    }
    if (this._gc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gc = this._gc?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._istio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istio = this._istio?.internalValue;
    }
    if (this._jolokia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jolokia = this._jolokia?.internalValue;
    }
    if (this._jvm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvm = this._jvm?.internalValue;
    }
    if (this._kamelets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kamelets = this._kamelets?.internalValue;
    }
    if (this._keda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keda = this._keda?.internalValue;
    }
    if (this._knative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knative = this._knative?.internalValue;
    }
    if (this._knativeService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knativeService = this._knativeService?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._master?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master?.internalValue;
    }
    if (this._mount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount?.internalValue;
    }
    if (this._openapi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openapi = this._openapi?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._pdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdb = this._pdb?.internalValue;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._pullSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecret = this._pullSecret?.internalValue;
    }
    if (this._quarkus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarkus = this._quarkus?.internalValue;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._serviceBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceBinding = this._serviceBinding?.internalValue;
    }
    if (this._strimzi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strimzi = this._strimzi?.internalValue;
    }
    if (this._telemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry?.internalValue;
    }
    if (this._threescale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threescale = this._threescale?.internalValue;
    }
    if (this._toleration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleration = this._toleration?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._affinity.internalValue = undefined;
      this._builder.internalValue = undefined;
      this._camel.internalValue = undefined;
      this._container.internalValue = undefined;
      this._cron.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._deployer.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._errorHandler.internalValue = undefined;
      this._gc.internalValue = undefined;
      this._health.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._istio.internalValue = undefined;
      this._jolokia.internalValue = undefined;
      this._jvm.internalValue = undefined;
      this._kamelets.internalValue = undefined;
      this._keda.internalValue = undefined;
      this._knative.internalValue = undefined;
      this._knativeService.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._master.internalValue = undefined;
      this._mount.internalValue = undefined;
      this._openapi.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._pdb.internalValue = undefined;
      this._platform.internalValue = undefined;
      this._pod.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._pullSecret.internalValue = undefined;
      this._quarkus.internalValue = undefined;
      this._registry.internalValue = undefined;
      this._route.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._service.internalValue = undefined;
      this._serviceBinding.internalValue = undefined;
      this._strimzi.internalValue = undefined;
      this._telemetry.internalValue = undefined;
      this._threescale.internalValue = undefined;
      this._toleration.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._affinity.internalValue = value.affinity;
      this._builder.internalValue = value.builder;
      this._camel.internalValue = value.camel;
      this._container.internalValue = value.container;
      this._cron.internalValue = value.cron;
      this._dependencies.internalValue = value.dependencies;
      this._deployer.internalValue = value.deployer;
      this._deployment.internalValue = value.deployment;
      this._environment.internalValue = value.environment;
      this._errorHandler.internalValue = value.errorHandler;
      this._gc.internalValue = value.gc;
      this._health.internalValue = value.health;
      this._ingress.internalValue = value.ingress;
      this._istio.internalValue = value.istio;
      this._jolokia.internalValue = value.jolokia;
      this._jvm.internalValue = value.jvm;
      this._kamelets.internalValue = value.kamelets;
      this._keda.internalValue = value.keda;
      this._knative.internalValue = value.knative;
      this._knativeService.internalValue = value.knativeService;
      this._logging.internalValue = value.logging;
      this._master.internalValue = value.master;
      this._mount.internalValue = value.mount;
      this._openapi.internalValue = value.openapi;
      this._owner.internalValue = value.owner;
      this._pdb.internalValue = value.pdb;
      this._platform.internalValue = value.platform;
      this._pod.internalValue = value.pod;
      this._prometheus.internalValue = value.prometheus;
      this._pullSecret.internalValue = value.pullSecret;
      this._quarkus.internalValue = value.quarkus;
      this._registry.internalValue = value.registry;
      this._route.internalValue = value.route;
      this._securityContext.internalValue = value.securityContext;
      this._service.internalValue = value.service;
      this._serviceBinding.internalValue = value.serviceBinding;
      this._strimzi.internalValue = value.strimzi;
      this._telemetry.internalValue = value.telemetry;
      this._threescale.internalValue = value.threescale;
      this._toleration.internalValue = value.toleration;
      this._tracing.internalValue = value.tracing;
    }
  }

  // addons - computed: false, optional: true, required: false
  private _addons?: { [key: string]: string }; 
  public get addons() {
    return this.getStringMapAttribute('addons');
  }
  public set addons(value: { [key: string]: string }) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // builder - computed: false, optional: true, required: false
  private _builder = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilderOutputReference(this, "builder");
  public get builder() {
    return this._builder;
  }
  public putBuilder(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsBuilder) {
    this._builder.internalValue = value;
  }
  public resetBuilder() {
    this._builder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builderInput() {
    return this._builder.internalValue;
  }

  // camel - computed: false, optional: true, required: false
  private _camel = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamelOutputReference(this, "camel");
  public get camel() {
    return this._camel;
  }
  public putCamel(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCamel) {
    this._camel.internalValue = value;
  }
  public resetCamel() {
    this._camel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camelInput() {
    return this._camel.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependenciesOutputReference(this, "dependencies");
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDependencies) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // deployer - computed: false, optional: true, required: false
  private _deployer = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployerOutputReference(this, "deployer");
  public get deployer() {
    return this._deployer;
  }
  public putDeployer(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployer) {
    this._deployer.internalValue = value;
  }
  public resetDeployer() {
    this._deployer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployerInput() {
    return this._deployer.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // error_handler - computed: false, optional: true, required: false
  private _errorHandler = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandlerOutputReference(this, "error_handler");
  public get errorHandler() {
    return this._errorHandler;
  }
  public putErrorHandler(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsErrorHandler) {
    this._errorHandler.internalValue = value;
  }
  public resetErrorHandler() {
    this._errorHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerInput() {
    return this._errorHandler.internalValue;
  }

  // gc - computed: false, optional: true, required: false
  private _gc = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGcOutputReference(this, "gc");
  public get gc() {
    return this._gc;
  }
  public putGc(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsGc) {
    this._gc.internalValue = value;
  }
  public resetGc() {
    this._gc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcInput() {
    return this._gc.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // istio - computed: false, optional: true, required: false
  private _istio = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // jolokia - computed: false, optional: true, required: false
  private _jolokia = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokiaOutputReference(this, "jolokia");
  public get jolokia() {
    return this._jolokia;
  }
  public putJolokia(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJolokia) {
    this._jolokia.internalValue = value;
  }
  public resetJolokia() {
    this._jolokia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jolokiaInput() {
    return this._jolokia.internalValue;
  }

  // jvm - computed: false, optional: true, required: false
  private _jvm = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvmOutputReference(this, "jvm");
  public get jvm() {
    return this._jvm;
  }
  public putJvm(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsJvm) {
    this._jvm.internalValue = value;
  }
  public resetJvm() {
    this._jvm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmInput() {
    return this._jvm.internalValue;
  }

  // kamelets - computed: false, optional: true, required: false
  private _kamelets = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKameletsOutputReference(this, "kamelets");
  public get kamelets() {
    return this._kamelets;
  }
  public putKamelets(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKamelets) {
    this._kamelets.internalValue = value;
  }
  public resetKamelets() {
    this._kamelets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kameletsInput() {
    return this._kamelets.internalValue;
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKedaOutputReference(this, "keda");
  public get keda() {
    return this._keda;
  }
  public putKeda(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKeda) {
    this._keda.internalValue = value;
  }
  public resetKeda() {
    this._keda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kedaInput() {
    return this._keda.internalValue;
  }

  // knative - computed: false, optional: true, required: false
  private _knative = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeOutputReference(this, "knative");
  public get knative() {
    return this._knative;
  }
  public putKnative(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnative) {
    this._knative.internalValue = value;
  }
  public resetKnative() {
    this._knative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knativeInput() {
    return this._knative.internalValue;
  }

  // knative_service - computed: false, optional: true, required: false
  private _knativeService = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeServiceOutputReference(this, "knative_service");
  public get knativeService() {
    return this._knativeService;
  }
  public putKnativeService(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsKnativeService) {
    this._knativeService.internalValue = value;
  }
  public resetKnativeService() {
    this._knativeService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knativeServiceInput() {
    return this._knativeService.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // master - computed: false, optional: true, required: false
  private _master = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMaster) {
    this._master.internalValue = value;
  }
  public resetMaster() {
    this._master.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // mount - computed: false, optional: true, required: false
  private _mount = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMountOutputReference(this, "mount");
  public get mount() {
    return this._mount;
  }
  public putMount(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsMount) {
    this._mount.internalValue = value;
  }
  public resetMount() {
    this._mount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount.internalValue;
  }

  // openapi - computed: false, optional: true, required: false
  private _openapi = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapiOutputReference(this, "openapi");
  public get openapi() {
    return this._openapi;
  }
  public putOpenapi(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOpenapi) {
    this._openapi.internalValue = value;
  }
  public resetOpenapi() {
    this._openapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiInput() {
    return this._openapi.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // pdb - computed: false, optional: true, required: false
  private _pdb = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdbOutputReference(this, "pdb");
  public get pdb() {
    return this._pdb;
  }
  public putPdb(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPdb) {
    this._pdb.internalValue = value;
  }
  public resetPdb() {
    this._pdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbInput() {
    return this._pdb.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // pull_secret - computed: false, optional: true, required: false
  private _pullSecret = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecretOutputReference(this, "pull_secret");
  public get pullSecret() {
    return this._pullSecret;
  }
  public putPullSecret(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsPullSecret) {
    this._pullSecret.internalValue = value;
  }
  public resetPullSecret() {
    this._pullSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretInput() {
    return this._pullSecret.internalValue;
  }

  // quarkus - computed: false, optional: true, required: false
  private _quarkus = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkusOutputReference(this, "quarkus");
  public get quarkus() {
    return this._quarkus;
  }
  public putQuarkus(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsQuarkus) {
    this._quarkus.internalValue = value;
  }
  public resetQuarkus() {
    this._quarkus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarkusInput() {
    return this._quarkus.internalValue;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // service_binding - computed: false, optional: true, required: false
  private _serviceBinding = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBindingOutputReference(this, "service_binding");
  public get serviceBinding() {
    return this._serviceBinding;
  }
  public putServiceBinding(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsServiceBinding) {
    this._serviceBinding.internalValue = value;
  }
  public resetServiceBinding() {
    this._serviceBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBindingInput() {
    return this._serviceBinding.internalValue;
  }

  // strimzi - computed: false, optional: true, required: false
  private _strimzi = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimziOutputReference(this, "strimzi");
  public get strimzi() {
    return this._strimzi;
  }
  public putStrimzi(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsStrimzi) {
    this._strimzi.internalValue = value;
  }
  public resetStrimzi() {
    this._strimzi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strimziInput() {
    return this._strimzi.internalValue;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetryOutputReference(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }
  public putTelemetry(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTelemetry) {
    this._telemetry.internalValue = value;
  }
  public resetTelemetry() {
    this._telemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry.internalValue;
  }

  // threescale - computed: false, optional: true, required: false
  private _threescale = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescaleOutputReference(this, "threescale");
  public get threescale() {
    return this._threescale;
  }
  public putThreescale(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsThreescale) {
    this._threescale.internalValue = value;
  }
  public resetThreescale() {
    this._threescale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threescaleInput() {
    return this._threescale.internalValue;
  }

  // toleration - computed: false, optional: true, required: false
  private _toleration = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTolerationOutputReference(this, "toleration");
  public get toleration() {
    return this._toleration;
  }
  public putToleration(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToleration) {
    this._toleration.internalValue = value;
  }
  public resetToleration() {
    this._toleration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationInput() {
    return this._toleration.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec {
  /**
  * specify how to build the Integration/IntegrationKits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#build DataK8SCamelApacheOrgIntegrationProfileV1Manifest#build}
  */
  readonly buildAttribute?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild;
  /**
  * configuration to be executed to all Kamelets controlled by this IntegrationProfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#kamelet DataK8SCamelApacheOrgIntegrationProfileV1Manifest#kamelet}
  */
  readonly kamelet?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet;
  /**
  * list of traits to be executed for all the Integration/IntegrationKits built from this IntegrationProfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#traits DataK8SCamelApacheOrgIntegrationProfileV1Manifest#traits}
  */
  readonly traits?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits;
}

export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecToTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildToTerraform(struct!.buildAttribute),
    kamelet: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletToTerraform(struct!.kamelet),
    traits: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToTerraform(struct!.traits),
  }
}


export function dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildToHclTerraform(struct!.buildAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild",
    },
    kamelet: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletToHclTerraform(struct!.kamelet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet",
    },
    traits: {
      value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsToHclTerraform(struct!.traits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build?.internalValue;
    }
    if (this._kamelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kamelet = this._kamelet?.internalValue;
    }
    if (this._traits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traits = this._traits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._build.internalValue = undefined;
      this._kamelet.internalValue = undefined;
      this._traits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._build.internalValue = value.buildAttribute;
      this._kamelet.internalValue = value.kamelet;
      this._traits.internalValue = value.traits;
    }
  }

  // build - computed: false, optional: true, required: false
  private _build = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // kamelet - computed: false, optional: true, required: false
  private _kamelet = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKameletOutputReference(this, "kamelet");
  public get kamelet() {
    return this._kamelet;
  }
  public putKamelet(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecKamelet) {
    this._kamelet.internalValue = value;
  }
  public resetKamelet() {
    this._kamelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kameletInput() {
    return this._kamelet.internalValue;
  }

  // traits - computed: false, optional: true, required: false
  private _traits = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraitsOutputReference(this, "traits");
  public get traits() {
    return this._traits;
  }
  public putTraits(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecTraits) {
    this._traits.internalValue = value;
  }
  public resetTraits() {
    this._traits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traitsInput() {
    return this._traits.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest k8s_camel_apache_org_integration_profile_v1_manifest}
*/
export class DataK8SCamelApacheOrgIntegrationProfileV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_camel_apache_org_integration_profile_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCamelApacheOrgIntegrationProfileV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCamelApacheOrgIntegrationProfileV1Manifest to import
  * @param importFromId The id of the existing DataK8SCamelApacheOrgIntegrationProfileV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCamelApacheOrgIntegrationProfileV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_camel_apache_org_integration_profile_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_integration_profile_v1_manifest k8s_camel_apache_org_integration_profile_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCamelApacheOrgIntegrationProfileV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCamelApacheOrgIntegrationProfileV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_camel_apache_org_integration_profile_v1_manifest',
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
  private _metadata = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec) {
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
      metadata: dataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCamelApacheOrgIntegrationProfileV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgIntegrationProfileV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
