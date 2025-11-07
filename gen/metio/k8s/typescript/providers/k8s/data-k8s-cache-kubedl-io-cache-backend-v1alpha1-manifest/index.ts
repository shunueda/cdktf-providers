// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#metadata DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#spec DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec;
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#annotations DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#labels DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#name DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#namespace DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#cache_path DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#cache_path}
  */
  readonly cachePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#medium_type DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#medium_type}
  */
  readonly mediumType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#quota DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#quota}
  */
  readonly quota?: string;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_path: cdktf.stringToTerraform(struct!.cachePath),
    medium_type: cdktf.stringToTerraform(struct!.mediumType),
    quota: cdktf.stringToTerraform(struct!.quota),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_path: {
      value: cdktf.stringToHclTerraform(struct!.cachePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medium_type: {
      value: cdktf.stringToHclTerraform(struct!.mediumType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.stringToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePath = this._cachePath;
    }
    if (this._mediumType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumType = this._mediumType;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePath = undefined;
      this._mediumType = undefined;
      this._quota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePath = value.cachePath;
      this._mediumType = value.mediumType;
      this._quota = value.quota;
    }
  }

  // cache_path - computed: false, optional: true, required: false
  private _cachePath?: string; 
  public get cachePath() {
    return this.getStringAttribute('cache_path');
  }
  public set cachePath(value: string) {
    this._cachePath = value;
  }
  public resetCachePath() {
    this._cachePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePathInput() {
    return this._cachePath;
  }

  // medium_type - computed: false, optional: true, required: false
  private _mediumType?: string; 
  public get mediumType() {
    return this.getStringAttribute('medium_type');
  }
  public set mediumType(value: string) {
    this._mediumType = value;
  }
  public resetMediumType() {
    this._mediumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumTypeInput() {
    return this._mediumType;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageList extends cdktf.ComplexList {
  public internalValue? : DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageOutputReference {
    return new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#replicas DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#tiered_storage DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#tiered_storage}
  */
  readonly tieredStorage?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage[] | cdktf.IResolvable;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tiered_storage: cdktf.listMapper(dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageToTerraform, false)(struct!.tieredStorage),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tiered_storage: {
      value: cdktf.listMapperHcl(dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageToHclTerraform, false)(struct!.tieredStorage),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tieredStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredStorage = this._tieredStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicas = undefined;
      this._tieredStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicas = value.replicas;
      this._tieredStorage.internalValue = value.tieredStorage;
    }
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tiered_storage - computed: false, optional: true, required: false
  private _tieredStorage = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeTieredStorage[] | cdktf.IResolvable) {
    this._tieredStorage.internalValue = value;
  }
  public resetTieredStorage() {
    this._tieredStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStorageInput() {
    return this._tieredStorage.internalValue;
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#alluxio_runtime DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#alluxio_runtime}
  */
  readonly alluxioRuntime?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alluxio_runtime: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeToTerraform(struct!.alluxioRuntime),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alluxio_runtime: {
      value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeToHclTerraform(struct!.alluxioRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alluxioRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alluxioRuntime = this._alluxioRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alluxioRuntime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alluxioRuntime.internalValue = value.alluxioRuntime;
    }
  }

  // alluxio_runtime - computed: false, optional: true, required: false
  private _alluxioRuntime = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntimeOutputReference(this, "alluxio_runtime");
  public get alluxioRuntime() {
    return this._alluxioRuntime;
  }
  public putAlluxioRuntime(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidAlluxioRuntime) {
    this._alluxioRuntime.internalValue = value;
  }
  public resetAlluxioRuntime() {
    this._alluxioRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alluxioRuntimeInput() {
    return this._alluxioRuntime.internalValue;
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#fluid DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#fluid}
  */
  readonly fluid?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fluid: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidToTerraform(struct!.fluid),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fluid: {
      value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidToHclTerraform(struct!.fluid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fluid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluid = this._fluid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fluid.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fluid.internalValue = value.fluid;
    }
  }

  // fluid - computed: false, optional: true, required: false
  private _fluid = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluidOutputReference(this, "fluid");
  public get fluid() {
    return this._fluid;
  }
  public putFluid(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineFluid) {
    this._fluid.internalValue = value;
  }
  public resetFluid() {
    this._fluid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluidInput() {
    return this._fluid.internalValue;
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#location DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#sub_dir_name DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#sub_dir_name}
  */
  readonly subDirName?: string;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    sub_dir_name: cdktf.stringToTerraform(struct!.subDirName),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_dir_name: {
      value: cdktf.stringToHclTerraform(struct!.subDirName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subDirName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subDirName = this._subDirName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._subDirName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._subDirName = value.subDirName;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // sub_dir_name - computed: false, optional: true, required: false
  private _subDirName?: string; 
  public get subDirName() {
    return this.getStringAttribute('sub_dir_name');
  }
  public set subDirName(value: string) {
    this._subDirName = value;
  }
  public resetSubDirName() {
    this._subDirName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDirNameInput() {
    return this._subDirName;
  }
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesOutputReference {
    return new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#data_sources DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#data_sources}
  */
  readonly dataSources?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources[] | cdktf.IResolvable;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sources: cdktf.listMapper(dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesToTerraform, false)(struct!.dataSources),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sources: {
      value: cdktf.listMapperHcl(dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesToHclTerraform, false)(struct!.dataSources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSources.internalValue = value.dataSources;
    }
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSourcesList(this, "data_sources", false);
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetDataSources[] | cdktf.IResolvable) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#idle_time DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#idle_time}
  */
  readonly idleTime?: number;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_time: cdktf.numberToTerraform(struct!.idleTime),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_time: {
      value: cdktf.numberToHclTerraform(struct!.idleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTime = this._idleTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTime = value.idleTime;
    }
  }

  // idle_time - computed: false, optional: true, required: false
  private _idleTime?: number; 
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }
  public set idleTime(value: number) {
    this._idleTime = value;
  }
  public resetIdleTime() {
    this._idleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInput() {
    return this._idleTime;
  }
}
export interface DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#cache_engine DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#cache_engine}
  */
  readonly cacheEngine?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#dataset DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#dataset}
  */
  readonly dataset?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#mount_path DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#name DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#options DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest#options}
  */
  readonly options?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions;
}

export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_engine: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineToTerraform(struct!.cacheEngine),
    dataset: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetToTerraform(struct!.dataset),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    options: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsToTerraform(struct!.options),
  }
}


export function dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_engine: {
      value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineToHclTerraform(struct!.cacheEngine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine",
    },
    dataset: {
      value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset",
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
    options: {
      value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEngine = this._cacheEngine?.internalValue;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheEngine.internalValue = undefined;
      this._dataset.internalValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheEngine.internalValue = value.cacheEngine;
      this._dataset.internalValue = value.dataset;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._options.internalValue = value.options;
    }
  }

  // cache_engine - computed: false, optional: true, required: false
  private _cacheEngine = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngineOutputReference(this, "cache_engine");
  public get cacheEngine() {
    return this._cacheEngine;
  }
  public putCacheEngine(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecCacheEngine) {
    this._cacheEngine.internalValue = value;
  }
  public resetCacheEngine() {
    this._cacheEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEngineInput() {
    return this._cacheEngine.internalValue;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecDataset) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest k8s_cache_kubedl_io_cache_backend_v1alpha1_manifest}
*/
export class DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cache_kubedl_io_cache_backend_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCacheKubedlIoCacheBackendV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cache_kubedl_io_cache_backend_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cache_kubedl_io_cache_backend_v1alpha1_manifest k8s_cache_kubedl_io_cache_backend_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cache_kubedl_io_cache_backend_v1alpha1_manifest',
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
  private _metadata = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCacheKubedlIoCacheBackendV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
