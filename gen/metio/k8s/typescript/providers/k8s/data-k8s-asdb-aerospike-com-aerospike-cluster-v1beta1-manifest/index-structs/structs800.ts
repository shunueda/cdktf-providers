import * as cdktf from 'cdktf';
import { DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptions,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospike,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicy,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicy,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpec,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfig,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServices,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesOutputReference } from './structs400'
import { DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControl,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicy,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyOutputReference,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCert,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertToTerraform,
dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertToHclTerraform,
DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertOutputReference } from './structs0'
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers {
  /**
  * ContainerName is the name of the container to attach this volume to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#container_name DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#mount_options DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#mount_options}
  */
  readonly mountOptions?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptions;
  /**
  * Path to attach the volume on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#path DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    mount_options: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsToTerraform(struct!.mountOptions),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers | cdktf.IResolvable): any {
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
    mount_options: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptions",
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._mountOptions.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._mountOptions.internalValue = value.mountOptions;
      this._path = value.path;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions {
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#mount_propagation DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#read_only DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#sub_path DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $( VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#sub_path_expr DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPropagation = undefined;
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
      this._mountPropagation = value.mountPropagation;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars {
  /**
  * ContainerName is the name of the container to attach this volume to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#container_name DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#mount_options DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#mount_options}
  */
  readonly mountOptions?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions;
  /**
  * Path to attach the volume on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#path DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    mount_options: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsToTerraform(struct!.mountOptions),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars | cdktf.IResolvable): any {
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
    mount_options: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions",
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._mountOptions.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._mountOptions.internalValue = value.mountOptions;
      this._path = value.path;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#key DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#mode DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#path DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#default_mode DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#items DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#name DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#optional DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsList",
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#medium DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#size_limit DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir | cdktf.IResolvable): any {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir | cdktf.IResolvable | undefined) {
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata {
  /**
  * Key - Value pair that may be set by external tools to store and retrieve arbitrary metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#annotations DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Key - Value pairs that can be used to organize and categorize scope and select objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#labels DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#key DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#operator DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#values DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#match_expressions DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#match_labels DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsList",
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume {
  /**
  * Name for creating PVC for this volume, Name or path should be given Name string 'json:'name''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#access_modes DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#metadata DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata;
  /**
  * A label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#selector DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector;
  /**
  * Size of volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#size DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#size}
  */
  readonly size: string;
  /**
  * StorageClass should be pre-created by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#storage_class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#storage_class}
  */
  readonly storageClass: string;
  /**
  * VolumeMode specifies if the volume is block/raw or a filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#volume_mode DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    metadata: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataToTerraform(struct!.metadata),
    selector: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorToTerraform(struct!.selector),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume | cdktf.IResolvable): any {
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
    metadata: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata",
    },
    selector: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._metadata.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._size = undefined;
      this._storageClass = undefined;
      this._volumeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._metadata.internalValue = value.metadata;
      this._selector.internalValue = value.selector;
      this._size = value.size;
      this._storageClass = value.storageClass;
      this._volumeMode = value.volumeMode;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volume_mode - computed: false, optional: false, required: true
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#key DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#mode DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#path DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems | cdktf.IResolvable): any {
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


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems | cdktf.IResolvable): any {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#default_mode DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#items DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#optional DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#secret_name DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsList",
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

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource {
  /**
  * ConfigMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#config_map DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap;
  /**
  * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#empty_dir DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir;
  /**
  * PersistentVolumeSpec describes a persistent volume to claim and attach to Aerospike pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#persistent_volume DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#persistent_volume}
  */
  readonly persistentVolume?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume;
  /**
  * Adapts a Secret into a volume. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#secret DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirToTerraform(struct!.emptyDir),
    persistent_volume: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeToTerraform(struct!.persistentVolume),
    secret: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretToTerraform(struct!.secret),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap",
    },
    empty_dir: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir",
    },
    persistent_volume: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeToHclTerraform(struct!.persistentVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume",
    },
    secret: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._persistentVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolume = this._persistentVolume?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._persistentVolume.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._emptyDir.internalValue = value.emptyDir;
      this._persistentVolume.internalValue = value.persistentVolume;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // persistent_volume - computed: false, optional: true, required: false
  private _persistentVolume = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolumeOutputReference(this, "persistent_volume");
  public get persistentVolume() {
    return this._persistentVolume;
  }
  public putPersistentVolume(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourcePersistentVolume) {
    this._persistentVolume.internalValue = value;
  }
  public resetPersistentVolume() {
    this._persistentVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeInput() {
    return this._persistentVolume.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes {
  /**
  * Aerospike attachment of this volume on Aerospike server container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#aerospike DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#aerospike}
  */
  readonly aerospike?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospike;
  /**
  * CascadeDelete determines if the persistent volumes are deleted after the pod this volume binds to is terminated and removed from the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#cascade_delete DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#cascade_delete}
  */
  readonly cascadeDelete?: boolean | cdktf.IResolvable;
  /**
  * Effective/operative value to use for cascade delete after applying defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#effective_cascade_delete DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#effective_cascade_delete}
  */
  readonly effectiveCascadeDelete?: boolean | cdktf.IResolvable;
  /**
  * Effective/operative value to use as the volume init method after applying defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#effective_init_method DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#effective_init_method}
  */
  readonly effectiveInitMethod?: string;
  /**
  * Effective/operative value to use as the volume wipe method after applying defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#effective_wipe_method DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#effective_wipe_method}
  */
  readonly effectiveWipeMethod?: string;
  /**
  * InitContainers are additional init containers where this volume will be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#init_containers DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers[] | cdktf.IResolvable;
  /**
  * InitMethod determines how volumes attached to Aerospike server pods are initialized when the pods come up the first time. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#init_method DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#init_method}
  */
  readonly initMethod?: string;
  /**
  * Name for this volume, Name or path should be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#name DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Sidecars are side containers where this volume will be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#sidecars DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#sidecars}
  */
  readonly sidecars?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars[] | cdktf.IResolvable;
  /**
  * Source of this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#source DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#source}
  */
  readonly source?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource;
  /**
  * WipeMethod determines how volumes attached to Aerospike server pods are wiped for dealing with storage format changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#wipe_method DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#wipe_method}
  */
  readonly wipeMethod?: string;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aerospike: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeToTerraform(struct!.aerospike),
    cascade_delete: cdktf.booleanToTerraform(struct!.cascadeDelete),
    effective_cascade_delete: cdktf.booleanToTerraform(struct!.effectiveCascadeDelete),
    effective_init_method: cdktf.stringToTerraform(struct!.effectiveInitMethod),
    effective_wipe_method: cdktf.stringToTerraform(struct!.effectiveWipeMethod),
    init_containers: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersToTerraform, false)(struct!.initContainers),
    init_method: cdktf.stringToTerraform(struct!.initMethod),
    name: cdktf.stringToTerraform(struct!.name),
    sidecars: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsToTerraform, false)(struct!.sidecars),
    source: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceToTerraform(struct!.source),
    wipe_method: cdktf.stringToTerraform(struct!.wipeMethod),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aerospike: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeToHclTerraform(struct!.aerospike),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospike",
    },
    cascade_delete: {
      value: cdktf.booleanToHclTerraform(struct!.cascadeDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effective_cascade_delete: {
      value: cdktf.booleanToHclTerraform(struct!.effectiveCascadeDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effective_init_method: {
      value: cdktf.stringToHclTerraform(struct!.effectiveInitMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_wipe_method: {
      value: cdktf.stringToHclTerraform(struct!.effectiveWipeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersList",
    },
    init_method: {
      value: cdktf.stringToHclTerraform(struct!.initMethod),
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
    sidecars: {
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsToHclTerraform, false)(struct!.sidecars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsList",
    },
    source: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource",
    },
    wipe_method: {
      value: cdktf.stringToHclTerraform(struct!.wipeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aerospike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aerospike = this._aerospike?.internalValue;
    }
    if (this._cascadeDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadeDelete = this._cascadeDelete;
    }
    if (this._effectiveCascadeDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveCascadeDelete = this._effectiveCascadeDelete;
    }
    if (this._effectiveInitMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveInitMethod = this._effectiveInitMethod;
    }
    if (this._effectiveWipeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveWipeMethod = this._effectiveWipeMethod;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._initMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.initMethod = this._initMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sidecars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecars = this._sidecars?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._wipeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.wipeMethod = this._wipeMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aerospike.internalValue = undefined;
      this._cascadeDelete = undefined;
      this._effectiveCascadeDelete = undefined;
      this._effectiveInitMethod = undefined;
      this._effectiveWipeMethod = undefined;
      this._initContainers.internalValue = undefined;
      this._initMethod = undefined;
      this._name = undefined;
      this._sidecars.internalValue = undefined;
      this._source.internalValue = undefined;
      this._wipeMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aerospike.internalValue = value.aerospike;
      this._cascadeDelete = value.cascadeDelete;
      this._effectiveCascadeDelete = value.effectiveCascadeDelete;
      this._effectiveInitMethod = value.effectiveInitMethod;
      this._effectiveWipeMethod = value.effectiveWipeMethod;
      this._initContainers.internalValue = value.initContainers;
      this._initMethod = value.initMethod;
      this._name = value.name;
      this._sidecars.internalValue = value.sidecars;
      this._source.internalValue = value.source;
      this._wipeMethod = value.wipeMethod;
    }
  }

  // aerospike - computed: false, optional: true, required: false
  private _aerospike = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospikeOutputReference(this, "aerospike");
  public get aerospike() {
    return this._aerospike;
  }
  public putAerospike(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesAerospike) {
    this._aerospike.internalValue = value;
  }
  public resetAerospike() {
    this._aerospike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aerospikeInput() {
    return this._aerospike.internalValue;
  }

  // cascade_delete - computed: false, optional: true, required: false
  private _cascadeDelete?: boolean | cdktf.IResolvable; 
  public get cascadeDelete() {
    return this.getBooleanAttribute('cascade_delete');
  }
  public set cascadeDelete(value: boolean | cdktf.IResolvable) {
    this._cascadeDelete = value;
  }
  public resetCascadeDelete() {
    this._cascadeDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeDeleteInput() {
    return this._cascadeDelete;
  }

  // effective_cascade_delete - computed: false, optional: true, required: false
  private _effectiveCascadeDelete?: boolean | cdktf.IResolvable; 
  public get effectiveCascadeDelete() {
    return this.getBooleanAttribute('effective_cascade_delete');
  }
  public set effectiveCascadeDelete(value: boolean | cdktf.IResolvable) {
    this._effectiveCascadeDelete = value;
  }
  public resetEffectiveCascadeDelete() {
    this._effectiveCascadeDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveCascadeDeleteInput() {
    return this._effectiveCascadeDelete;
  }

  // effective_init_method - computed: false, optional: true, required: false
  private _effectiveInitMethod?: string; 
  public get effectiveInitMethod() {
    return this.getStringAttribute('effective_init_method');
  }
  public set effectiveInitMethod(value: string) {
    this._effectiveInitMethod = value;
  }
  public resetEffectiveInitMethod() {
    this._effectiveInitMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveInitMethodInput() {
    return this._effectiveInitMethod;
  }

  // effective_wipe_method - computed: false, optional: true, required: false
  private _effectiveWipeMethod?: string; 
  public get effectiveWipeMethod() {
    return this.getStringAttribute('effective_wipe_method');
  }
  public set effectiveWipeMethod(value: string) {
    this._effectiveWipeMethod = value;
  }
  public resetEffectiveWipeMethod() {
    this._effectiveWipeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveWipeMethodInput() {
    return this._effectiveWipeMethod;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // init_method - computed: false, optional: true, required: false
  private _initMethod?: string; 
  public get initMethod() {
    return this.getStringAttribute('init_method');
  }
  public set initMethod(value: string) {
    this._initMethod = value;
  }
  public resetInitMethod() {
    this._initMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initMethodInput() {
    return this._initMethod;
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

  // sidecars - computed: false, optional: true, required: false
  private _sidecars = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecarsList(this, "sidecars", false);
  public get sidecars() {
    return this._sidecars;
  }
  public putSidecars(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSidecars[] | cdktf.IResolvable) {
    this._sidecars.internalValue = value;
  }
  public resetSidecars() {
    this._sidecars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarsInput() {
    return this._sidecars.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // wipe_method - computed: false, optional: true, required: false
  private _wipeMethod?: string; 
  public get wipeMethod() {
    return this.getStringAttribute('wipe_method');
  }
  public set wipeMethod(value: string) {
    this._wipeMethod = value;
  }
  public resetWipeMethod() {
    this._wipeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeMethodInput() {
    return this._wipeMethod;
  }
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesOutputReference {
    return new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage {
  /**
  * BlockVolumePolicy contains default policies for block volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#block_volume_policy DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#block_volume_policy}
  */
  readonly blockVolumePolicy?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicy;
  /**
  * CleanupThreads contains maximum number of cleanup threads(dd or blkdiscard) per init container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#cleanup_threads DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#cleanup_threads}
  */
  readonly cleanupThreads?: number;
  /**
  * FileSystemVolumePolicy contains default policies for filesystem volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#filesystem_volume_policy DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#filesystem_volume_policy}
  */
  readonly filesystemVolumePolicy?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicy;
  /**
  * Volumes list to attach to created pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#volumes DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#volumes}
  */
  readonly volumes?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes[] | cdktf.IResolvable;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_policy: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyToTerraform(struct!.blockVolumePolicy),
    cleanup_threads: cdktf.numberToTerraform(struct!.cleanupThreads),
    filesystem_volume_policy: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyToTerraform(struct!.filesystemVolumePolicy),
    volumes: cdktf.listMapper(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_policy: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyToHclTerraform(struct!.blockVolumePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicy",
    },
    cleanup_threads: {
      value: cdktf.numberToHclTerraform(struct!.cleanupThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filesystem_volume_policy: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyToHclTerraform(struct!.filesystemVolumePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicy",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumePolicy = this._blockVolumePolicy?.internalValue;
    }
    if (this._cleanupThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupThreads = this._cleanupThreads;
    }
    if (this._filesystemVolumePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemVolumePolicy = this._filesystemVolumePolicy?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumePolicy.internalValue = undefined;
      this._cleanupThreads = undefined;
      this._filesystemVolumePolicy.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumePolicy.internalValue = value.blockVolumePolicy;
      this._cleanupThreads = value.cleanupThreads;
      this._filesystemVolumePolicy.internalValue = value.filesystemVolumePolicy;
      this._volumes.internalValue = value.volumes;
    }
  }

  // block_volume_policy - computed: false, optional: true, required: false
  private _blockVolumePolicy = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicyOutputReference(this, "block_volume_policy");
  public get blockVolumePolicy() {
    return this._blockVolumePolicy;
  }
  public putBlockVolumePolicy(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageBlockVolumePolicy) {
    this._blockVolumePolicy.internalValue = value;
  }
  public resetBlockVolumePolicy() {
    this._blockVolumePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumePolicyInput() {
    return this._blockVolumePolicy.internalValue;
  }

  // cleanup_threads - computed: false, optional: true, required: false
  private _cleanupThreads?: number; 
  public get cleanupThreads() {
    return this.getNumberAttribute('cleanup_threads');
  }
  public set cleanupThreads(value: number) {
    this._cleanupThreads = value;
  }
  public resetCleanupThreads() {
    this._cleanupThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupThreadsInput() {
    return this._cleanupThreads;
  }

  // filesystem_volume_policy - computed: false, optional: true, required: false
  private _filesystemVolumePolicy = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicyOutputReference(this, "filesystem_volume_policy");
  public get filesystemVolumePolicy() {
    return this._filesystemVolumePolicy;
  }
  public putFilesystemVolumePolicy(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageFilesystemVolumePolicy) {
    this._filesystemVolumePolicy.internalValue = value;
  }
  public resetFilesystemVolumePolicy() {
    this._filesystemVolumePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemVolumePolicyInput() {
    return this._filesystemVolumePolicy.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy {
  /**
  * skipWorkDirValidate validates that Aerospike work directory is mounted on a persistent file storage. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#skip_work_dir_validate DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#skip_work_dir_validate}
  */
  readonly skipWorkDirValidate: boolean | cdktf.IResolvable;
  /**
  * ValidateXdrDigestLogFile validates that xdr digest log file is mounted on a persistent file storage. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#skip_xdr_dlog_file_validate DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#skip_xdr_dlog_file_validate}
  */
  readonly skipXdrDlogFileValidate: boolean | cdktf.IResolvable;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_work_dir_validate: cdktf.booleanToTerraform(struct!.skipWorkDirValidate),
    skip_xdr_dlog_file_validate: cdktf.booleanToTerraform(struct!.skipXdrDlogFileValidate),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_work_dir_validate: {
      value: cdktf.booleanToHclTerraform(struct!.skipWorkDirValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_xdr_dlog_file_validate: {
      value: cdktf.booleanToHclTerraform(struct!.skipXdrDlogFileValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipWorkDirValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWorkDirValidate = this._skipWorkDirValidate;
    }
    if (this._skipXdrDlogFileValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipXdrDlogFileValidate = this._skipXdrDlogFileValidate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skipWorkDirValidate = undefined;
      this._skipXdrDlogFileValidate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skipWorkDirValidate = value.skipWorkDirValidate;
      this._skipXdrDlogFileValidate = value.skipXdrDlogFileValidate;
    }
  }

  // skip_work_dir_validate - computed: false, optional: false, required: true
  private _skipWorkDirValidate?: boolean | cdktf.IResolvable; 
  public get skipWorkDirValidate() {
    return this.getBooleanAttribute('skip_work_dir_validate');
  }
  public set skipWorkDirValidate(value: boolean | cdktf.IResolvable) {
    this._skipWorkDirValidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWorkDirValidateInput() {
    return this._skipWorkDirValidate;
  }

  // skip_xdr_dlog_file_validate - computed: false, optional: false, required: true
  private _skipXdrDlogFileValidate?: boolean | cdktf.IResolvable; 
  public get skipXdrDlogFileValidate() {
    return this.getBooleanAttribute('skip_xdr_dlog_file_validate');
  }
  public set skipXdrDlogFileValidate(value: boolean | cdktf.IResolvable) {
    this._skipXdrDlogFileValidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipXdrDlogFileValidateInput() {
    return this._skipXdrDlogFileValidate;
  }
}
export interface DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpec {
  /**
  * Has the Aerospike roles and users definitions. Required if aerospike cluster security is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#aerospike_access_control DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#aerospike_access_control}
  */
  readonly aerospikeAccessControl?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControl;
  /**
  * Sets config in aerospike.conf file. Other configs are taken as default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#aerospike_config DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#aerospike_config}
  */
  readonly aerospikeConfig: { [key: string]: string };
  /**
  * AerospikeNetworkPolicy specifies how clients and tools access the Aerospike cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#aerospike_network_policy DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#aerospike_network_policy}
  */
  readonly aerospikeNetworkPolicy?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicy;
  /**
  * Aerospike server image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#image DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * Certificates to connect to Aerospike.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#operator_client_cert DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#operator_client_cert}
  */
  readonly operatorClientCert?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCert;
  /**
  * Specify additional configuration for the Aerospike pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#pod_spec DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#pod_spec}
  */
  readonly podSpec?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpec;
  /**
  * RackConfig Configures the operator to deploy rack aware Aerospike cluster. Pods will be deployed in given racks based on given configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#rack_config DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#rack_config}
  */
  readonly rackConfig?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfig;
  /**
  * RosterNodeBlockList is a list of blocked nodeIDs from roster in a strong-consistency setup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#roster_node_block_list DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#roster_node_block_list}
  */
  readonly rosterNodeBlockList?: string[];
  /**
  * SeedsFinderServices creates additional Kubernetes service that allow clients to discover Aerospike cluster nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#seeds_finder_services DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#seeds_finder_services}
  */
  readonly seedsFinderServices?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServices;
  /**
  * Aerospike cluster size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#size DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#size}
  */
  readonly size: number;
  /**
  * Storage specify persistent storage to use for the Aerospike pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#storage DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#storage}
  */
  readonly storage?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage;
  /**
  * ValidationPolicy controls validation of the Aerospike cluster resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/asdb_aerospike_com_aerospike_cluster_v1beta1_manifest#validation_policy DataK8SAsdbAerospikeComAerospikeClusterV1Beta1Manifest#validation_policy}
  */
  readonly validationPolicy?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy;
}

export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aerospike_access_control: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlToTerraform(struct!.aerospikeAccessControl),
    aerospike_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.aerospikeConfig),
    aerospike_network_policy: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyToTerraform(struct!.aerospikeNetworkPolicy),
    image: cdktf.stringToTerraform(struct!.image),
    operator_client_cert: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertToTerraform(struct!.operatorClientCert),
    pod_spec: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecToTerraform(struct!.podSpec),
    rack_config: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigToTerraform(struct!.rackConfig),
    roster_node_block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rosterNodeBlockList),
    seeds_finder_services: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesToTerraform(struct!.seedsFinderServices),
    size: cdktf.numberToTerraform(struct!.size),
    storage: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageToTerraform(struct!.storage),
    validation_policy: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyToTerraform(struct!.validationPolicy),
  }
}


export function dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aerospike_access_control: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlToHclTerraform(struct!.aerospikeAccessControl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControl",
    },
    aerospike_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.aerospikeConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    aerospike_network_policy: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyToHclTerraform(struct!.aerospikeNetworkPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicy",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_client_cert: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertToHclTerraform(struct!.operatorClientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCert",
    },
    pod_spec: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecToHclTerraform(struct!.podSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpec",
    },
    rack_config: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigToHclTerraform(struct!.rackConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfig",
    },
    roster_node_block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rosterNodeBlockList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    seeds_finder_services: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesToHclTerraform(struct!.seedsFinderServices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServices",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage",
    },
    validation_policy: {
      value: dataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyToHclTerraform(struct!.validationPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aerospikeAccessControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aerospikeAccessControl = this._aerospikeAccessControl?.internalValue;
    }
    if (this._aerospikeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.aerospikeConfig = this._aerospikeConfig;
    }
    if (this._aerospikeNetworkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aerospikeNetworkPolicy = this._aerospikeNetworkPolicy?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._operatorClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorClientCert = this._operatorClientCert?.internalValue;
    }
    if (this._podSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSpec = this._podSpec?.internalValue;
    }
    if (this._rackConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rackConfig = this._rackConfig?.internalValue;
    }
    if (this._rosterNodeBlockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.rosterNodeBlockList = this._rosterNodeBlockList;
    }
    if (this._seedsFinderServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedsFinderServices = this._seedsFinderServices?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._validationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationPolicy = this._validationPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aerospikeAccessControl.internalValue = undefined;
      this._aerospikeConfig = undefined;
      this._aerospikeNetworkPolicy.internalValue = undefined;
      this._image = undefined;
      this._operatorClientCert.internalValue = undefined;
      this._podSpec.internalValue = undefined;
      this._rackConfig.internalValue = undefined;
      this._rosterNodeBlockList = undefined;
      this._seedsFinderServices.internalValue = undefined;
      this._size = undefined;
      this._storage.internalValue = undefined;
      this._validationPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aerospikeAccessControl.internalValue = value.aerospikeAccessControl;
      this._aerospikeConfig = value.aerospikeConfig;
      this._aerospikeNetworkPolicy.internalValue = value.aerospikeNetworkPolicy;
      this._image = value.image;
      this._operatorClientCert.internalValue = value.operatorClientCert;
      this._podSpec.internalValue = value.podSpec;
      this._rackConfig.internalValue = value.rackConfig;
      this._rosterNodeBlockList = value.rosterNodeBlockList;
      this._seedsFinderServices.internalValue = value.seedsFinderServices;
      this._size = value.size;
      this._storage.internalValue = value.storage;
      this._validationPolicy.internalValue = value.validationPolicy;
    }
  }

  // aerospike_access_control - computed: false, optional: true, required: false
  private _aerospikeAccessControl = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControlOutputReference(this, "aerospike_access_control");
  public get aerospikeAccessControl() {
    return this._aerospikeAccessControl;
  }
  public putAerospikeAccessControl(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeAccessControl) {
    this._aerospikeAccessControl.internalValue = value;
  }
  public resetAerospikeAccessControl() {
    this._aerospikeAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aerospikeAccessControlInput() {
    return this._aerospikeAccessControl.internalValue;
  }

  // aerospike_config - computed: false, optional: false, required: true
  private _aerospikeConfig?: { [key: string]: string }; 
  public get aerospikeConfig() {
    return this.getStringMapAttribute('aerospike_config');
  }
  public set aerospikeConfig(value: { [key: string]: string }) {
    this._aerospikeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aerospikeConfigInput() {
    return this._aerospikeConfig;
  }

  // aerospike_network_policy - computed: false, optional: true, required: false
  private _aerospikeNetworkPolicy = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicyOutputReference(this, "aerospike_network_policy");
  public get aerospikeNetworkPolicy() {
    return this._aerospikeNetworkPolicy;
  }
  public putAerospikeNetworkPolicy(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecAerospikeNetworkPolicy) {
    this._aerospikeNetworkPolicy.internalValue = value;
  }
  public resetAerospikeNetworkPolicy() {
    this._aerospikeNetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aerospikeNetworkPolicyInput() {
    return this._aerospikeNetworkPolicy.internalValue;
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

  // operator_client_cert - computed: false, optional: true, required: false
  private _operatorClientCert = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCertOutputReference(this, "operator_client_cert");
  public get operatorClientCert() {
    return this._operatorClientCert;
  }
  public putOperatorClientCert(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecOperatorClientCert) {
    this._operatorClientCert.internalValue = value;
  }
  public resetOperatorClientCert() {
    this._operatorClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorClientCertInput() {
    return this._operatorClientCert.internalValue;
  }

  // pod_spec - computed: false, optional: true, required: false
  private _podSpec = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpecOutputReference(this, "pod_spec");
  public get podSpec() {
    return this._podSpec;
  }
  public putPodSpec(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecPodSpec) {
    this._podSpec.internalValue = value;
  }
  public resetPodSpec() {
    this._podSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSpecInput() {
    return this._podSpec.internalValue;
  }

  // rack_config - computed: false, optional: true, required: false
  private _rackConfig = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfigOutputReference(this, "rack_config");
  public get rackConfig() {
    return this._rackConfig;
  }
  public putRackConfig(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecRackConfig) {
    this._rackConfig.internalValue = value;
  }
  public resetRackConfig() {
    this._rackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackConfigInput() {
    return this._rackConfig.internalValue;
  }

  // roster_node_block_list - computed: false, optional: true, required: false
  private _rosterNodeBlockList?: string[]; 
  public get rosterNodeBlockList() {
    return this.getListAttribute('roster_node_block_list');
  }
  public set rosterNodeBlockList(value: string[]) {
    this._rosterNodeBlockList = value;
  }
  public resetRosterNodeBlockList() {
    this._rosterNodeBlockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rosterNodeBlockListInput() {
    return this._rosterNodeBlockList;
  }

  // seeds_finder_services - computed: false, optional: true, required: false
  private _seedsFinderServices = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServicesOutputReference(this, "seeds_finder_services");
  public get seedsFinderServices() {
    return this._seedsFinderServices;
  }
  public putSeedsFinderServices(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecSeedsFinderServices) {
    this._seedsFinderServices.internalValue = value;
  }
  public resetSeedsFinderServices() {
    this._seedsFinderServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedsFinderServicesInput() {
    return this._seedsFinderServices.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // validation_policy - computed: false, optional: true, required: false
  private _validationPolicy = new DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicyOutputReference(this, "validation_policy");
  public get validationPolicy() {
    return this._validationPolicy;
  }
  public putValidationPolicy(value: DataK8SAsdbAerospikeComAerospikeClusterV1Beta1ManifestSpecValidationPolicy) {
    this._validationPolicy.internalValue = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy.internalValue;
  }
}
