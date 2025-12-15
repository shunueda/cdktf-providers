import * as cdktf from 'cdktf';
import { DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDisk,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFile,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfs,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinder,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMap,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsi,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApi,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDir,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeral,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFc,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolume,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlocker,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepo,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfs,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPath,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsi,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfs,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjected,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyte,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbd,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIo,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecret,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageos,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuse,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsers,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorker,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersion,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMaster,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadata,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAs,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsOutputReference,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstore,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform,
dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform,
DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference } from './structs0'
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#storage_policy_id DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#storage_policy_name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#volume_path DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#aws_elastic_block_store DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#azure_disk DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#azure_file DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#cephfs DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#cinder DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#config_map DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#csi DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#downward_api DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#empty_dir DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#ephemeral DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#fc DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#flex_volume DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#flocker DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#gce_persistent_disk DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#git_repo DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#glusterfs DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#host_path DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#iscsi DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#nfs DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#persistent_volume_claim DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#photon_persistent_disk DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#portworx_volume DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#projected DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#quobyte DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#rbd DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#scale_io DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#secret DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#storageos DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#vsphere_volume DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesOutputReference {
    return new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#api_version DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#field_path DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#container_name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#divisor DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#resource DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#config_map_key_ref DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#field_ref DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#resource_field_ref DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#secret_key_ref DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromSecretKeyRef) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#value DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#value_from DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv | cdktf.IResolvable): any {
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
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvValueFrom) {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvOutputReference {
    return new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata {
  /**
  * Annotations are annotations of pod specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels are labels of pod specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#labels DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#container_port DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#host_ip DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#host_port DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#protocol DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference {
    return new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList",
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#mount_path DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#mount_propagation DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#sub_path DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#sub_path_expr DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference {
    return new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker {
  /**
  * Enabled or Disabled for the components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by JuiceFS component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv[] | cdktf.IResolvable;
  /**
  * Whether to use hostnetwork or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#network_mode DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#network_mode}
  */
  readonly networkMode?: string;
  /**
  * NodeSelector is a selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#options DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * PodMetadata defines labels and annotations that will be propagated to JuiceFs's pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#pod_metadata DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata;
  /**
  * Ports used by JuiceFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable;
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the JuiceFS component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources;
  /**
  * VolumeMounts specifies the volumes listed in '.spec.volumes' to mount into runtime component's filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#volume_mounts DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.listMapper(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvToTerraform, false)(struct!.env),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    pod_metadata: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToTerraform(struct!.podMetadata),
    ports: cdktf.listMapper(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsToTerraform, false)(struct!.ports),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvList",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_metadata: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsList",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._env.internalValue = undefined;
      this._networkMode = undefined;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._podMetadata.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._env.internalValue = value.env;
      this._networkMode = value.networkMode;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._podMetadata.internalValue = value.podMetadata;
      this._ports.internalValue = value.ports;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
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

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpec {
  /**
  * CleanCachePolicy defines cleanCache Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#clean_cache_policy DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#clean_cache_policy}
  */
  readonly cleanCachePolicy?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy;
  /**
  * Configs of JuiceFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#configs DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#configs}
  */
  readonly configs?: string[];
  /**
  * Disable monitoring for JuiceFS Runtime Prometheus is enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#disable_prometheus DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#disable_prometheus}
  */
  readonly disablePrometheus?: boolean | cdktf.IResolvable;
  /**
  * Desired state for JuiceFS Fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#fuse DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#fuse}
  */
  readonly fuse?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuse;
  /**
  * The spec of init users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#init_users DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#init_users}
  */
  readonly initUsers?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsers;
  /**
  * The component spec of JuiceFS job Worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#job_worker DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#job_worker}
  */
  readonly jobWorker?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorker;
  /**
  * The version information that instructs fluid to orchestrate a particular version of JuiceFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#juicefs_version DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#juicefs_version}
  */
  readonly juicefsVersion?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersion;
  /**
  * The component spec of JuiceFS master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#master DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#master}
  */
  readonly master?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMaster;
  /**
  * PodMetadata defines labels and annotations that will be propagated to JuiceFs's pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#pod_metadata DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadata;
  /**
  * The replicas of the worker, need to be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Manage the user to run Juicefs Runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#run_as DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#run_as}
  */
  readonly runAs?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAs;
  /**
  * Tiered storage used by JuiceFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#tieredstore DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#tieredstore}
  */
  readonly tieredstore?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstore;
  /**
  * Volumes is the list of Kubernetes volumes that can be mounted by the alluxio runtime components and/or fuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#volumes DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable;
  /**
  * The component spec of JuiceFS worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/data_fluid_io_juice_fs_runtime_v1alpha1_manifest#worker DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1Manifest#worker}
  */
  readonly worker?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker;
}

export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clean_cache_policy: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToTerraform(struct!.cleanCachePolicy),
    configs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configs),
    disable_prometheus: cdktf.booleanToTerraform(struct!.disablePrometheus),
    fuse: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseToTerraform(struct!.fuse),
    init_users: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersToTerraform(struct!.initUsers),
    job_worker: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform(struct!.jobWorker),
    juicefs_version: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionToTerraform(struct!.juicefsVersion),
    master: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterToTerraform(struct!.master),
    pod_metadata: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    run_as: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsToTerraform(struct!.runAs),
    tieredstore: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform(struct!.tieredstore),
    volumes: cdktf.listMapper(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
    worker: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct!.worker),
  }
}


export function dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clean_cache_policy: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToHclTerraform(struct!.cleanCachePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy",
    },
    configs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fuse: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseToHclTerraform(struct!.fuse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuse",
    },
    init_users: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform(struct!.initUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsers",
    },
    job_worker: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform(struct!.jobWorker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorker",
    },
    juicefs_version: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionToHclTerraform(struct!.juicefsVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersion",
    },
    master: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterToHclTerraform(struct!.master),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMaster",
    },
    pod_metadata: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadata",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAs",
    },
    tieredstore: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform(struct!.tieredstore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstore",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesList",
    },
    worker: {
      value: dataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanCachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanCachePolicy = this._cleanCachePolicy?.internalValue;
    }
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    if (this._disablePrometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrometheus = this._disablePrometheus;
    }
    if (this._fuse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse?.internalValue;
    }
    if (this._initUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initUsers = this._initUsers?.internalValue;
    }
    if (this._jobWorker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobWorker = this._jobWorker?.internalValue;
    }
    if (this._juicefsVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.juicefsVersion = this._juicefsVersion?.internalValue;
    }
    if (this._master?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._runAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs?.internalValue;
    }
    if (this._tieredstore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredstore = this._tieredstore?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanCachePolicy.internalValue = undefined;
      this._configs = undefined;
      this._disablePrometheus = undefined;
      this._fuse.internalValue = undefined;
      this._initUsers.internalValue = undefined;
      this._jobWorker.internalValue = undefined;
      this._juicefsVersion.internalValue = undefined;
      this._master.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._replicas = undefined;
      this._runAs.internalValue = undefined;
      this._tieredstore.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._worker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanCachePolicy.internalValue = value.cleanCachePolicy;
      this._configs = value.configs;
      this._disablePrometheus = value.disablePrometheus;
      this._fuse.internalValue = value.fuse;
      this._initUsers.internalValue = value.initUsers;
      this._jobWorker.internalValue = value.jobWorker;
      this._juicefsVersion.internalValue = value.juicefsVersion;
      this._master.internalValue = value.master;
      this._podMetadata.internalValue = value.podMetadata;
      this._replicas = value.replicas;
      this._runAs.internalValue = value.runAs;
      this._tieredstore.internalValue = value.tieredstore;
      this._volumes.internalValue = value.volumes;
      this._worker.internalValue = value.worker;
    }
  }

  // clean_cache_policy - computed: false, optional: true, required: false
  private _cleanCachePolicy = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyOutputReference(this, "clean_cache_policy");
  public get cleanCachePolicy() {
    return this._cleanCachePolicy;
  }
  public putCleanCachePolicy(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy) {
    this._cleanCachePolicy.internalValue = value;
  }
  public resetCleanCachePolicy() {
    this._cleanCachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanCachePolicyInput() {
    return this._cleanCachePolicy.internalValue;
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

  // disable_prometheus - computed: false, optional: true, required: false
  private _disablePrometheus?: boolean | cdktf.IResolvable; 
  public get disablePrometheus() {
    return this.getBooleanAttribute('disable_prometheus');
  }
  public set disablePrometheus(value: boolean | cdktf.IResolvable) {
    this._disablePrometheus = value;
  }
  public resetDisablePrometheus() {
    this._disablePrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrometheusInput() {
    return this._disablePrometheus;
  }

  // fuse - computed: false, optional: true, required: false
  private _fuse = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuseOutputReference(this, "fuse");
  public get fuse() {
    return this._fuse;
  }
  public putFuse(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecFuse) {
    this._fuse.internalValue = value;
  }
  public resetFuse() {
    this._fuse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse.internalValue;
  }

  // init_users - computed: false, optional: true, required: false
  private _initUsers = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsersOutputReference(this, "init_users");
  public get initUsers() {
    return this._initUsers;
  }
  public putInitUsers(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecInitUsers) {
    this._initUsers.internalValue = value;
  }
  public resetInitUsers() {
    this._initUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initUsersInput() {
    return this._initUsers.internalValue;
  }

  // job_worker - computed: false, optional: true, required: false
  private _jobWorker = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference(this, "job_worker");
  public get jobWorker() {
    return this._jobWorker;
  }
  public putJobWorker(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJobWorker) {
    this._jobWorker.internalValue = value;
  }
  public resetJobWorker() {
    this._jobWorker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobWorkerInput() {
    return this._jobWorker.internalValue;
  }

  // juicefs_version - computed: false, optional: true, required: false
  private _juicefsVersion = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersionOutputReference(this, "juicefs_version");
  public get juicefsVersion() {
    return this._juicefsVersion;
  }
  public putJuicefsVersion(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecJuicefsVersion) {
    this._juicefsVersion.internalValue = value;
  }
  public resetJuicefsVersion() {
    this._juicefsVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get juicefsVersionInput() {
    return this._juicefsVersion.internalValue;
  }

  // master - computed: false, optional: true, required: false
  private _master = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecMaster) {
    this._master.internalValue = value;
  }
  public resetMaster() {
    this._master.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
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

  // run_as - computed: false, optional: true, required: false
  private _runAs = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // tieredstore - computed: false, optional: true, required: false
  private _tieredstore = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference(this, "tieredstore");
  public get tieredstore() {
    return this._tieredstore;
  }
  public putTieredstore(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecTieredstore) {
    this._tieredstore.internalValue = value;
  }
  public resetTieredstore() {
    this._tieredstore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredstoreInput() {
    return this._tieredstore.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: DataK8SDataFluidIoJuiceFsRuntimeV1Alpha1ManifestSpecWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}
