// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#metadata DataK8SCamelApacheOrgCamelCatalogV1Manifest#metadata}
  */
  readonly metadata: DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata;
  /**
  * the desired state of the catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#spec DataK8SCamelApacheOrgCamelCatalogV1Manifest#spec}
  */
  readonly spec?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec;
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#annotations DataK8SCamelApacheOrgCamelCatalogV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#labels DataK8SCamelApacheOrgCamelCatalogV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#name DataK8SCamelApacheOrgCamelCatalogV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#namespace DataK8SCamelApacheOrgCamelCatalogV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
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
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * provide a list of artifacts to exclude for this dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#exclusions DataK8SCamelApacheOrgCamelCatalogV1Manifest#exclusions}
  */
  readonly exclusions?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions[] | cdktf.IResolvable;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    exclusions: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsToTerraform, false)(struct!.exclusions),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies | cdktf.IResolvable): any {
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
    exclusions: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsToHclTerraform, false)(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsList",
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies | cdktf.IResolvable | undefined {
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
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._exclusions.internalValue = undefined;
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
      this._exclusions.internalValue = value.exclusions;
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

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
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
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
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
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * provide a list of artifacts to exclude for this dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#exclusions DataK8SCamelApacheOrgCamelCatalogV1Manifest#exclusions}
  */
  readonly exclusions?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions[] | cdktf.IResolvable;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    exclusions: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsToTerraform, false)(struct!.exclusions),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies | cdktf.IResolvable): any {
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
    exclusions: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsToHclTerraform, false)(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsList",
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies | cdktf.IResolvable | undefined {
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
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._exclusions.internalValue = undefined;
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
      this._exclusions.internalValue = value.exclusions;
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

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer {
  /**
  * list of dependencies needed for this scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesToTerraform, false)(struct!.dependencies),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
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
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * provide a list of artifacts to exclude for this dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#exclusions DataK8SCamelApacheOrgCamelCatalogV1Manifest#exclusions}
  */
  readonly exclusions?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions[] | cdktf.IResolvable;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    exclusions: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsToTerraform, false)(struct!.exclusions),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies | cdktf.IResolvable): any {
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
    exclusions: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsToHclTerraform, false)(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsList",
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies | cdktf.IResolvable | undefined {
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
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._exclusions.internalValue = undefined;
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
      this._exclusions.internalValue = value.exclusions;
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

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer {
  /**
  * list of dependencies needed for this scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesToTerraform, false)(struct!.dependencies),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes {
  /**
  * required scope for consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#consumer DataK8SCamelApacheOrgCamelCatalogV1Manifest#consumer}
  */
  readonly consumer?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer;
  /**
  * is a HTTP based scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#http DataK8SCamelApacheOrgCamelCatalogV1Manifest#http}
  */
  readonly http: boolean | cdktf.IResolvable;
  /**
  * the ID (ie, timer in a timer:xyz URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#id DataK8SCamelApacheOrgCamelCatalogV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * is a passive scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#passive DataK8SCamelApacheOrgCamelCatalogV1Manifest#passive}
  */
  readonly passive: boolean | cdktf.IResolvable;
  /**
  * required scope for producers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#producer DataK8SCamelApacheOrgCamelCatalogV1Manifest#producer}
  */
  readonly producer?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerToTerraform(struct!.consumer),
    http: cdktf.booleanToTerraform(struct!.http),
    id: cdktf.stringToTerraform(struct!.id),
    passive: cdktf.booleanToTerraform(struct!.passive),
    producer: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerToTerraform(struct!.producer),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerToHclTerraform(struct!.consumer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer",
    },
    http: {
      value: cdktf.booleanToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    producer: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerToHclTerraform(struct!.producer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer?.internalValue;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._producer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.producer = this._producer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumer.internalValue = undefined;
      this._http = undefined;
      this._id = undefined;
      this._passive = undefined;
      this._producer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumer.internalValue = value.consumer;
      this._http = value.http;
      this._id = value.id;
      this._passive = value.passive;
      this._producer.internalValue = value.producer;
    }
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // http - computed: false, optional: false, required: true
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // passive - computed: false, optional: false, required: true
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // producer - computed: false, optional: true, required: false
  private _producer = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducerOutputReference(this, "producer");
  public get producer() {
    return this._producer;
  }
  public putProducer(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesProducer) {
    this._producer.internalValue = value;
  }
  public resetProducer() {
    this._producer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer.internalValue;
  }
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * accepted data formats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dataformats DataK8SCamelApacheOrgCamelCatalogV1Manifest#dataformats}
  */
  readonly dataformats?: string[];
  /**
  * required dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies[] | cdktf.IResolvable;
  /**
  * provide a list of artifacts to exclude for this dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#exclusions DataK8SCamelApacheOrgCamelCatalogV1Manifest#exclusions}
  */
  readonly exclusions?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions[] | cdktf.IResolvable;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * the Java types used by the artifact feature (ie, component, data format, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#java_types DataK8SCamelApacheOrgCamelCatalogV1Manifest#java_types}
  */
  readonly javaTypes?: string[];
  /**
  * accepted languages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#languages DataK8SCamelApacheOrgCamelCatalogV1Manifest#languages}
  */
  readonly languages?: string[];
  /**
  * accepted URI schemes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#schemes DataK8SCamelApacheOrgCamelCatalogV1Manifest#schemes}
  */
  readonly schemes?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes[] | cdktf.IResolvable;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    dataformats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataformats),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesToTerraform, false)(struct!.dependencies),
    exclusions: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsToTerraform, false)(struct!.exclusions),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    java_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.javaTypes),
    languages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languages),
    schemes: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesToTerraform, false)(struct!.schemes),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts | cdktf.IResolvable): any {
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
    dataformats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataformats),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesList",
    },
    exclusions: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsToHclTerraform, false)(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsList",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.javaTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    languages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schemes: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesToHclTerraform, false)(struct!.schemes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesList",
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts | cdktf.IResolvable | undefined {
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
    if (this._dataformats !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformats = this._dataformats;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._javaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaTypes = this._javaTypes;
    }
    if (this._languages !== undefined) {
      hasAnyValues = true;
      internalValueResult.languages = this._languages;
    }
    if (this._schemes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemes = this._schemes?.internalValue;
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._dataformats = undefined;
      this._dependencies.internalValue = undefined;
      this._exclusions.internalValue = undefined;
      this._groupId = undefined;
      this._javaTypes = undefined;
      this._languages = undefined;
      this._schemes.internalValue = undefined;
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
      this._dataformats = value.dataformats;
      this._dependencies.internalValue = value.dependencies;
      this._exclusions.internalValue = value.exclusions;
      this._groupId = value.groupId;
      this._javaTypes = value.javaTypes;
      this._languages = value.languages;
      this._schemes.internalValue = value.schemes;
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

  // dataformats - computed: false, optional: true, required: false
  private _dataformats?: string[]; 
  public get dataformats() {
    return this.getListAttribute('dataformats');
  }
  public set dataformats(value: string[]) {
    this._dataformats = value;
  }
  public resetDataformats() {
    this._dataformats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformatsInput() {
    return this._dataformats;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsExclusions[] | cdktf.IResolvable) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
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

  // java_types - computed: false, optional: true, required: false
  private _javaTypes?: string[]; 
  public get javaTypes() {
    return this.getListAttribute('java_types');
  }
  public set javaTypes(value: string[]) {
    this._javaTypes = value;
  }
  public resetJavaTypes() {
    this._javaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaTypesInput() {
    return this._javaTypes;
  }

  // languages - computed: false, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
  }

  // schemes - computed: false, optional: true, required: false
  private _schemes = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemesList(this, "schemes", false);
  public get schemes() {
    return this._schemes;
  }
  public putSchemes(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsSchemes[] | cdktf.IResolvable) {
    this._schemes.internalValue = value;
  }
  public resetSchemes() {
    this._schemes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemesInput() {
    return this._schemes.internalValue;
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
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * a list of additional dependencies required beside the base one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies[] | cdktf.IResolvable;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * a list of DSLs supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#languages DataK8SCamelApacheOrgCamelCatalogV1Manifest#languages}
  */
  readonly languages?: string[];
  /**
  * the metadata of the loader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#metadata DataK8SCamelApacheOrgCamelCatalogV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesToTerraform, false)(struct!.dependencies),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    languages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.languages),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders | cdktf.IResolvable): any {
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
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesList",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    languages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.languages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders | cdktf.IResolvable | undefined {
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
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._languages !== undefined) {
      hasAnyValues = true;
      internalValueResult.languages = this._languages;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._dependencies.internalValue = undefined;
      this._groupId = undefined;
      this._languages = undefined;
      this._metadata = undefined;
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
      this._dependencies.internalValue = value.dependencies;
      this._groupId = value.groupId;
      this._languages = value.languages;
      this._metadata = value.metadata;
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

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
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

  // languages - computed: false, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
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
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#key DataK8SCamelApacheOrgCamelCatalogV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#value DataK8SCamelApacheOrgCamelCatalogV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#key DataK8SCamelApacheOrgCamelCatalogV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#value DataK8SCamelApacheOrgCamelCatalogV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities {
  /**
  * Set of required Camel build time properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#build_time_properties DataK8SCamelApacheOrgCamelCatalogV1Manifest#build_time_properties}
  */
  readonly buildTimeProperties?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable;
  /**
  * List of required Maven dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies[] | cdktf.IResolvable;
  /**
  * Set of generic metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#metadata DataK8SCamelApacheOrgCamelCatalogV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Set of required Camel runtime properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#runtime_properties DataK8SCamelApacheOrgCamelCatalogV1Manifest#runtime_properties}
  */
  readonly runtimeProperties?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_time_properties: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesToTerraform, false)(struct!.buildTimeProperties),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    runtime_properties: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesToTerraform, false)(struct!.runtimeProperties),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_time_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesToHclTerraform, false)(struct!.buildTimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesToHclTerraform, false)(struct!.runtimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildTimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildTimeProperties = this._buildTimeProperties?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._runtimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProperties = this._runtimeProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._runtimeProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = value.buildTimeProperties;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._runtimeProperties.internalValue = value.runtimeProperties;
    }
  }

  // build_time_properties - computed: false, optional: true, required: false
  private _buildTimeProperties = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimePropertiesList(this, "build_time_properties", false);
  public get buildTimeProperties() {
    return this._buildTimeProperties;
  }
  public putBuildTimeProperties(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable) {
    this._buildTimeProperties.internalValue = value;
  }
  public resetBuildTimeProperties() {
    this._buildTimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimePropertiesInput() {
    return this._buildTimeProperties.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
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

  // runtime_properties - computed: false, optional: true, required: false
  private _runtimeProperties = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimePropertiesList(this, "runtime_properties", false);
  public get runtimeProperties() {
    return this._runtimeProperties;
  }
  public putRuntimeProperties(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable) {
    this._runtimeProperties.internalValue = value;
  }
  public resetRuntimeProperties() {
    this._runtimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimePropertiesInput() {
    return this._runtimeProperties.internalValue;
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifact_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#classifier DataK8SCamelApacheOrgCamelCatalogV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#group_id DataK8SCamelApacheOrgCamelCatalogV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#type DataK8SCamelApacheOrgCamelCatalogV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesOutputReference {
    return new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime {
  /**
  * application entry point (main) to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#application_class DataK8SCamelApacheOrgCamelCatalogV1Manifest#application_class}
  */
  readonly applicationClass: string;
  /**
  * features offered by this runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#capabilities DataK8SCamelApacheOrgCamelCatalogV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities;
  /**
  * list of dependencies needed to run the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#dependencies DataK8SCamelApacheOrgCamelCatalogV1Manifest#dependencies}
  */
  readonly dependencies: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies[] | cdktf.IResolvable;
  /**
  * set of metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#metadata DataK8SCamelApacheOrgCamelCatalogV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Camel main application provider, ie, Camel Quarkus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#provider DataK8SCamelApacheOrgCamelCatalogV1Manifest#provider}
  */
  readonly provider: string;
  /**
  * Camel K Runtime version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#version DataK8SCamelApacheOrgCamelCatalogV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_class: cdktf.stringToTerraform(struct!.applicationClass),
    capabilities: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesToTerraform(struct!.capabilities),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    provider: cdktf.stringToTerraform(struct!.provider),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_class: {
      value: cdktf.stringToHclTerraform(struct!.applicationClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
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

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationClass = this._applicationClass;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationClass = undefined;
      this._capabilities.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationClass = value.applicationClass;
      this._capabilities.internalValue = value.capabilities;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // application_class - computed: false, optional: false, required: true
  private _applicationClass?: string; 
  public get applicationClass() {
    return this.getStringAttribute('application_class');
  }
  public set applicationClass(value: string) {
    this._applicationClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationClassInput() {
    return this._applicationClass;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // dependencies - computed: false, optional: false, required: true
  private _dependencies = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec {
  /**
  * artifacts required by this catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#artifacts DataK8SCamelApacheOrgCamelCatalogV1Manifest#artifacts}
  */
  readonly artifacts: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts;
  /**
  * loaders required by this catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#loaders DataK8SCamelApacheOrgCamelCatalogV1Manifest#loaders}
  */
  readonly loaders: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders;
  /**
  * the runtime targeted for the catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#runtime DataK8SCamelApacheOrgCamelCatalogV1Manifest#runtime}
  */
  readonly runtime: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime;
}

export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecToTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifacts: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsToTerraform(struct!.artifacts),
    loaders: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersToTerraform(struct!.loaders),
    runtime: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeToTerraform(struct!.runtime),
  }
}


export function dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecToHclTerraform(struct?: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifacts: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsToHclTerraform(struct!.artifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts",
    },
    loaders: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersToHclTerraform(struct!.loaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders",
    },
    runtime: {
      value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeToHclTerraform(struct!.runtime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._loaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loaders = this._loaders?.internalValue;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = undefined;
      this._loaders.internalValue = undefined;
      this._runtime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = value.artifacts;
      this._loaders.internalValue = value.loaders;
      this._runtime.internalValue = value.runtime;
    }
  }

  // artifacts - computed: false, optional: false, required: true
  private _artifacts = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecArtifacts) {
    this._artifacts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // loaders - computed: false, optional: false, required: true
  private _loaders = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoadersOutputReference(this, "loaders");
  public get loaders() {
    return this._loaders;
  }
  public putLoaders(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecLoaders) {
    this._loaders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadersInput() {
    return this._loaders.internalValue;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecRuntime) {
    this._runtime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest k8s_camel_apache_org_camel_catalog_v1_manifest}
*/
export class DataK8SCamelApacheOrgCamelCatalogV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_camel_apache_org_camel_catalog_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCamelApacheOrgCamelCatalogV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCamelApacheOrgCamelCatalogV1Manifest to import
  * @param importFromId The id of the existing DataK8SCamelApacheOrgCamelCatalogV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCamelApacheOrgCamelCatalogV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_camel_apache_org_camel_catalog_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/camel_apache_org_camel_catalog_v1_manifest k8s_camel_apache_org_camel_catalog_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCamelApacheOrgCamelCatalogV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCamelApacheOrgCamelCatalogV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_camel_apache_org_camel_catalog_v1_manifest',
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
  private _metadata = new DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCamelApacheOrgCamelCatalogV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec) {
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
      metadata: dataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCamelApacheOrgCamelCatalogV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCamelApacheOrgCamelCatalogV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgCamelCatalogV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
