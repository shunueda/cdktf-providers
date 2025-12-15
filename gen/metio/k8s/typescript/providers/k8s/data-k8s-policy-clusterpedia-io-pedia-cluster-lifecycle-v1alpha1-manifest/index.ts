// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#metadata DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#spec DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#annotations DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#labels DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#name DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#group DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#key DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#name_template DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#name_template}
  */
  readonly nameTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#namespace_template DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#namespace_template}
  */
  readonly namespaceTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#resource DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#version DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesToTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    key: cdktf.stringToTerraform(struct!.key),
    name_template: cdktf.stringToTerraform(struct!.nameTemplate),
    namespace_template: cdktf.stringToTerraform(struct!.namespaceTemplate),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesToHclTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_template: {
      value: cdktf.stringToHclTerraform(struct!.nameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_template: {
      value: cdktf.stringToHclTerraform(struct!.namespaceTemplate),
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

export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._nameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTemplate = this._nameTemplate;
    }
    if (this._namespaceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplate = this._namespaceTemplate;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._key = undefined;
      this._nameTemplate = undefined;
      this._namespaceTemplate = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._key = value.key;
      this._nameTemplate = value.nameTemplate;
      this._namespaceTemplate = value.namespaceTemplate;
      this._resource = value.resource;
      this._version = value.version;
    }
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

  // name_template - computed: false, optional: false, required: true
  private _nameTemplate?: string; 
  public get nameTemplate() {
    return this.getStringAttribute('name_template');
  }
  public set nameTemplate(value: string) {
    this._nameTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplateInput() {
    return this._nameTemplate;
  }

  // namespace_template - computed: false, optional: true, required: false
  private _namespaceTemplate?: string; 
  public get namespaceTemplate() {
    return this.getStringAttribute('namespace_template');
  }
  public set namespaceTemplate(value: string) {
    this._namespaceTemplate = value;
  }
  public resetNamespaceTemplate() {
    this._namespaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplateInput() {
    return this._namespaceTemplate;
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

export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesOutputReference {
    return new DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#group DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#name DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#namespace DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#resource DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#version DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceToTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceToHclTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
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
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
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

export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resource = value.resource;
      this._version = value.version;
    }
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
export interface DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#creation_condition DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#creation_condition}
  */
  readonly creationCondition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#references DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#references}
  */
  readonly references?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#source DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#source}
  */
  readonly source: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#template DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest#template}
  */
  readonly template: string;
}

export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_condition: cdktf.stringToTerraform(struct!.creationCondition),
    references: cdktf.listMapper(dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesToTerraform, false)(struct!.references),
    source: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceToTerraform(struct!.source),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_condition: {
      value: cdktf.stringToHclTerraform(struct!.creationCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: cdktf.listMapperHcl(dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesToHclTerraform, false)(struct!.references),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesList",
    },
    source: {
      value: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationCondition = this._creationCondition;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationCondition = undefined;
      this._references.internalValue = undefined;
      this._source.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationCondition = value.creationCondition;
      this._references.internalValue = value.references;
      this._source.internalValue = value.source;
      this._template = value.template;
    }
  }

  // creation_condition - computed: false, optional: false, required: true
  private _creationCondition?: string; 
  public get creationCondition() {
    return this.getStringAttribute('creation_condition');
  }
  public set creationCondition(value: string) {
    this._creationCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationConditionInput() {
    return this._creationCondition;
  }

  // references - computed: false, optional: true, required: false
  private _references = new DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecReferences[] | cdktf.IResolvable) {
    this._references.internalValue = value;
  }
  public resetReferences() {
    this._references.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest k8s_policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest}
*/
export class DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest k8s_policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_clusterpedia_io_pedia_cluster_lifecycle_v1alpha1_manifest',
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
  private _metadata = new DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyClusterpediaIoPediaClusterLifecycleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
