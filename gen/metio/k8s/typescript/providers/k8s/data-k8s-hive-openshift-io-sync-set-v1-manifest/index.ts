// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#metadata DataK8SHiveOpenshiftIoSyncSetV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata;
  /**
  * SyncSetSpec defines the SyncSetCommonSpec resources and patches to sync along with ClusterDeploymentRefs indicating which clusters the SyncSet applies to in the SyncSet's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#spec DataK8SHiveOpenshiftIoSyncSetV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#annotations DataK8SHiveOpenshiftIoSyncSetV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#labels DataK8SHiveOpenshiftIoSyncSetV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#name DataK8SHiveOpenshiftIoSyncSetV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#namespace DataK8SHiveOpenshiftIoSyncSetV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#name DataK8SHiveOpenshiftIoSyncSetV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsOutputReference {
    return new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches {
  /**
  * APIVersion is the Group and Version of the object to be patched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#api_version DataK8SHiveOpenshiftIoSyncSetV1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind is the Kind of the object to be patched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#kind DataK8SHiveOpenshiftIoSyncSetV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the object to be patched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#name DataK8SHiveOpenshiftIoSyncSetV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the Namespace in which the object to patch exists. Defaults to the SyncSet's Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#namespace DataK8SHiveOpenshiftIoSyncSetV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Patch is the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#patch DataK8SHiveOpenshiftIoSyncSetV1Manifest#patch}
  */
  readonly patch: string;
  /**
  * PatchType indicates the PatchType as 'strategic' (default), 'json', or 'merge'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#patch_type DataK8SHiveOpenshiftIoSyncSetV1Manifest#patch_type}
  */
  readonly patchType?: string;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patch: cdktf.stringToTerraform(struct!.patch),
    patch_type: cdktf.stringToTerraform(struct!.patchType),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches | cdktf.IResolvable): any {
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
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_type: {
      value: cdktf.stringToHclTerraform(struct!.patchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches | cdktf.IResolvable | undefined {
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
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._patchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchType = this._patchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._patch = undefined;
      this._patchType = undefined;
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
      this._patch = value.patch;
      this._patchType = value.patchType;
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

  // patch - computed: false, optional: false, required: true
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // patch_type - computed: false, optional: true, required: false
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  public resetPatchType() {
    this._patchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }
}

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesOutputReference {
    return new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef {
  /**
  * Name is the name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#name DataK8SHiveOpenshiftIoSyncSetV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace where the secret lives. If not present for the source secret reference, it is assumed to be the same namespace as the syncset with the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#namespace DataK8SHiveOpenshiftIoSyncSetV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef {
  /**
  * Name is the name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#name DataK8SHiveOpenshiftIoSyncSetV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace where the secret lives. If not present for the source secret reference, it is assumed to be the same namespace as the syncset with the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#namespace DataK8SHiveOpenshiftIoSyncSetV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings {
  /**
  * SourceRef specifies the name and namespace of a secret on the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#source_ref DataK8SHiveOpenshiftIoSyncSetV1Manifest#source_ref}
  */
  readonly sourceRef: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef;
  /**
  * TargetRef specifies the target name and namespace of the secret on the target cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#target_ref DataK8SHiveOpenshiftIoSyncSetV1Manifest#target_ref}
  */
  readonly targetRef: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ref: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefToTerraform(struct!.sourceRef),
    target_ref: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ref: {
      value: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef",
    },
    target_ref: {
      value: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRef.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRef.internalValue = value.sourceRef;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsOutputReference {
    return new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec {
  /**
  * ApplyBehavior indicates how resources in this syncset will be applied to the target cluster. The default value of 'Apply' indicates that resources should be applied using the 'oc apply' command. If no value is set, 'Apply' is assumed. A value of 'CreateOnly' indicates that the resource will only be created if it does not already exist in the target cluster. Otherwise, it will be left alone. A value of 'CreateOrUpdate' indicates that the resource will be created/updated without the use of the 'oc apply' command, allowing larger resources to be synced, but losing some functionality of the 'oc apply' command such as the ability to remove annotations, labels, and other map entries in general.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#apply_behavior DataK8SHiveOpenshiftIoSyncSetV1Manifest#apply_behavior}
  */
  readonly applyBehavior?: string;
  /**
  * ClusterDeploymentRefs is the list of LocalObjectReference indicating which clusters the SyncSet applies to in the SyncSet's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#cluster_deployment_refs DataK8SHiveOpenshiftIoSyncSetV1Manifest#cluster_deployment_refs}
  */
  readonly clusterDeploymentRefs: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs[] | cdktf.IResolvable;
  /**
  * EnableResourceTemplates, if True, causes hive to honor golang text/templates in Resources. While the standard syntax is supported, it won't do you a whole lot of good as the parser does not pass a data object (i.e. there is no 'dot' for you to use). This currently exists to expose a single function: {{ fromCDLabel 'some.label/key' }} will be substituted with the string value of ClusterDeployment.Labels['some.label/key']. The empty string is interpolated if there are no labels, or if the indicated key does not exist. Note that this only works in values (not e.g. map keys) that are of type string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#enable_resource_templates DataK8SHiveOpenshiftIoSyncSetV1Manifest#enable_resource_templates}
  */
  readonly enableResourceTemplates?: boolean | cdktf.IResolvable;
  /**
  * Patches is the list of patches to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#patches DataK8SHiveOpenshiftIoSyncSetV1Manifest#patches}
  */
  readonly patches?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches[] | cdktf.IResolvable;
  /**
  * ResourceApplyMode indicates if the Resource apply mode is 'Upsert' (default) or 'Sync'. ApplyMode 'Upsert' indicates create and update. ApplyMode 'Sync' indicates create, update and delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#resource_apply_mode DataK8SHiveOpenshiftIoSyncSetV1Manifest#resource_apply_mode}
  */
  readonly resourceApplyMode?: string;
  /**
  * Resources is the list of objects to sync from RawExtension definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#resources DataK8SHiveOpenshiftIoSyncSetV1Manifest#resources}
  */
  readonly resources?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Secrets is the list of secrets to sync along with their respective destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#secret_mappings DataK8SHiveOpenshiftIoSyncSetV1Manifest#secret_mappings}
  */
  readonly secretMappings?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_behavior: cdktf.stringToTerraform(struct!.applyBehavior),
    cluster_deployment_refs: cdktf.listMapper(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsToTerraform, false)(struct!.clusterDeploymentRefs),
    enable_resource_templates: cdktf.booleanToTerraform(struct!.enableResourceTemplates),
    patches: cdktf.listMapper(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesToTerraform, false)(struct!.patches),
    resource_apply_mode: cdktf.stringToTerraform(struct!.resourceApplyMode),
    resources: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.resources),
    secret_mappings: cdktf.listMapper(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsToTerraform, false)(struct!.secretMappings),
  }
}


export function dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_behavior: {
      value: cdktf.stringToHclTerraform(struct!.applyBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_deployment_refs: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsToHclTerraform, false)(struct!.clusterDeploymentRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsList",
    },
    enable_resource_templates: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceTemplates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesList",
    },
    resource_apply_mode: {
      value: cdktf.stringToHclTerraform(struct!.resourceApplyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    secret_mappings: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsToHclTerraform, false)(struct!.secretMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyBehavior = this._applyBehavior;
    }
    if (this._clusterDeploymentRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentRefs = this._clusterDeploymentRefs?.internalValue;
    }
    if (this._enableResourceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceTemplates = this._enableResourceTemplates;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._resourceApplyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplyMode = this._resourceApplyMode;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._secretMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretMappings = this._secretMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyBehavior = undefined;
      this._clusterDeploymentRefs.internalValue = undefined;
      this._enableResourceTemplates = undefined;
      this._patches.internalValue = undefined;
      this._resourceApplyMode = undefined;
      this._resources = undefined;
      this._secretMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyBehavior = value.applyBehavior;
      this._clusterDeploymentRefs.internalValue = value.clusterDeploymentRefs;
      this._enableResourceTemplates = value.enableResourceTemplates;
      this._patches.internalValue = value.patches;
      this._resourceApplyMode = value.resourceApplyMode;
      this._resources = value.resources;
      this._secretMappings.internalValue = value.secretMappings;
    }
  }

  // apply_behavior - computed: false, optional: true, required: false
  private _applyBehavior?: string; 
  public get applyBehavior() {
    return this.getStringAttribute('apply_behavior');
  }
  public set applyBehavior(value: string) {
    this._applyBehavior = value;
  }
  public resetApplyBehavior() {
    this._applyBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyBehaviorInput() {
    return this._applyBehavior;
  }

  // cluster_deployment_refs - computed: false, optional: false, required: true
  private _clusterDeploymentRefs = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefsList(this, "cluster_deployment_refs", false);
  public get clusterDeploymentRefs() {
    return this._clusterDeploymentRefs;
  }
  public putClusterDeploymentRefs(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecClusterDeploymentRefs[] | cdktf.IResolvable) {
    this._clusterDeploymentRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentRefsInput() {
    return this._clusterDeploymentRefs.internalValue;
  }

  // enable_resource_templates - computed: false, optional: true, required: false
  private _enableResourceTemplates?: boolean | cdktf.IResolvable; 
  public get enableResourceTemplates() {
    return this.getBooleanAttribute('enable_resource_templates');
  }
  public set enableResourceTemplates(value: boolean | cdktf.IResolvable) {
    this._enableResourceTemplates = value;
  }
  public resetEnableResourceTemplates() {
    this._enableResourceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceTemplatesInput() {
    return this._enableResourceTemplates;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // resource_apply_mode - computed: false, optional: true, required: false
  private _resourceApplyMode?: string; 
  public get resourceApplyMode() {
    return this.getStringAttribute('resource_apply_mode');
  }
  public set resourceApplyMode(value: string) {
    this._resourceApplyMode = value;
  }
  public resetResourceApplyMode() {
    this._resourceApplyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplyModeInput() {
    return this._resourceApplyMode;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get resources() {
    return this.interpolationForAttribute('resources');
  }
  public set resources(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // secret_mappings - computed: false, optional: true, required: false
  private _secretMappings = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappingsList(this, "secret_mappings", false);
  public get secretMappings() {
    return this._secretMappings;
  }
  public putSecretMappings(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecSecretMappings[] | cdktf.IResolvable) {
    this._secretMappings.internalValue = value;
  }
  public resetSecretMappings() {
    this._secretMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretMappingsInput() {
    return this._secretMappings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest k8s_hive_openshift_io_sync_set_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoSyncSetV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_sync_set_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoSyncSetV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoSyncSetV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoSyncSetV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoSyncSetV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_sync_set_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_sync_set_v1_manifest k8s_hive_openshift_io_sync_set_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoSyncSetV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoSyncSetV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_sync_set_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoSyncSetV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoSyncSetV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoSyncSetV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoSyncSetV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
