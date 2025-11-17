import * as cdktf from 'cdktf';
import { DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDisk,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFile,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfs,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinder,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMap,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsi,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApi,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDir,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeral,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFc,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolume,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlocker,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepo,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfs,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPath,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsi,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfs,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjected,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyte,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbd,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIo,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersion,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGateway,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecData,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuse,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecrets,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsList,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsers,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMaster,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorker,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagement,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMaster,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadata,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAs,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsOutputReference,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstore,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform,
dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform,
DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference } from './structs0'
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#key DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#path DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsOutputReference {
    return new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#default_mode DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#items DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#secret_name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsList",
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#volume_name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#volume_namespace DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#storage_policy_id DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#storage_policy_name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#volume_path DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#aws_elastic_block_store DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#azure_disk DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#azure_file DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#cephfs DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#cinder DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#config_map DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#csi DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#downward_api DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#empty_dir DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#ephemeral DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#fc DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#flex_volume DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#flocker DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#gce_persistent_disk DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#git_repo DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#glusterfs DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#host_path DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#iscsi DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#nfs DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#persistent_volume_claim DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#photon_persistent_disk DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#portworx_volume DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#projected DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#quobyte DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#rbd DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#scale_io DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#secret DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#storageos DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#vsphere_volume DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCephfs) {
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
  private _cinder = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCinder) {
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
  private _configMap = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesConfigMap) {
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
  private _csi = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesEphemeral) {
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
  private _fc = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFc) {
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
  private _flexVolume = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesIscsi) {
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
  private _nfs = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesProjected) {
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
  private _quobyte = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesScaleIo) {
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
  private _secret = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesSecret) {
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
  private _storageos = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesVsphereVolume) {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesOutputReference {
    return new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsOutputReference {
    return new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata {
  /**
  * Annotations are annotations of pod specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels are labels of pod specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#labels DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList",
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#mount_path DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#mount_propagation DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#name DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#sub_path DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#sub_path_expr DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference {
    return new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker {
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by Alluxio component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#env DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * ImagePullSecrets that will be used to pull images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#image_pull_secrets DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * Whether to use hostnetwork or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#network_mode DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#network_mode}
  */
  readonly networkMode?: string;
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodMetadata defines labels and annotations that will be propagated to Alluxio's pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#pod_metadata DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata;
  /**
  * Ports used by Alluxio(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the Alluxio component. <br> Refer to <a href='https://docs.alluxio.io/os/user/stable/en/reference/Properties-List.html'>Alluxio Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the Alluxio component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources;
  /**
  * VolumeMounts specifies the volumes listed in '.spec.volumes' to mount into the alluxio runtime component's filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#volume_mounts DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image_pull_secrets: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_metadata: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToTerraform(struct!.podMetadata),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    pod_metadata: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._jvmOptions = undefined;
      this._networkMode = undefined;
      this._nodeSelector = undefined;
      this._podMetadata.internalValue = undefined;
      this._ports = undefined;
      this._properties = undefined;
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
      this._env = value.env;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._jvmOptions = value.jvmOptions;
      this._networkMode = value.networkMode;
      this._nodeSelector = value.nodeSelector;
      this._podMetadata.internalValue = value.podMetadata;
      this._ports = value.ports;
      this._properties = value.properties;
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
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerPodMetadata) {
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
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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
  private _resources = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerResources) {
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
  private _volumeMounts = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpec {
  /**
  * The version information that instructs fluid to orchestrate a particular version of Alluxio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#alluxio_version DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#alluxio_version}
  */
  readonly alluxioVersion?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersion;
  /**
  * The component spec of Alluxio API Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#api_gateway DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#api_gateway}
  */
  readonly apiGateway?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGateway;
  /**
  * Management strategies for the dataset to which the runtime is bound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#data DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecData;
  /**
  * Disable monitoring for Alluxio Runtime Prometheus is enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#disable_prometheus DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#disable_prometheus}
  */
  readonly disablePrometheus?: boolean | cdktf.IResolvable;
  /**
  * The component spec of Alluxio Fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#fuse DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#fuse}
  */
  readonly fuse?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuse;
  /**
  * Name of the configMap used to support HDFS configurations when using HDFS as Alluxio's UFS. The configMap must be in the same namespace with the AlluxioRuntime. The configMap should contain user-specific HDFS conf files in it. For now, only 'hdfs-site.xml' and 'core-site.xml' are supported. It must take the filename of the conf file as the key and content of the file as the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#hadoop_config DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#hadoop_config}
  */
  readonly hadoopConfig?: string;
  /**
  * ImagePullSecrets that will be used to pull images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#image_pull_secrets DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * The spec of init users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#init_users DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#init_users}
  */
  readonly initUsers?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsers;
  /**
  * The component spec of Alluxio job master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#job_master DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#job_master}
  */
  readonly jobMaster?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMaster;
  /**
  * The component spec of Alluxio job Worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#job_worker DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#job_worker}
  */
  readonly jobWorker?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorker;
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * RuntimeManagement defines policies when managing the runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#management DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#management}
  */
  readonly management?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagement;
  /**
  * The component spec of Alluxio master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#master DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#master}
  */
  readonly master?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMaster;
  /**
  * PodMetadata defines labels and annotations that will be propagated to Alluxio's pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#pod_metadata DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadata;
  /**
  * Configurable properties for Alluxio system. <br> Refer to <a href='https://docs.alluxio.io/os/user/stable/en/reference/Properties-List.html'>Alluxio Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The replicas of the worker, need to be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Manage the user to run Alluxio Runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#run_as DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#run_as}
  */
  readonly runAs?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAs;
  /**
  * Tiered storage used by Alluxio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#tieredstore DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#tieredstore}
  */
  readonly tieredstore?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstore;
  /**
  * Volumes is the list of Kubernetes volumes that can be mounted by the alluxio runtime components and/or fuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#volumes DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable;
  /**
  * The component spec of Alluxio worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/data_fluid_io_alluxio_runtime_v1alpha1_manifest#worker DataK8SDataFluidIoAlluxioRuntimeV1Alpha1Manifest#worker}
  */
  readonly worker?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker;
}

export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alluxio_version: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionToTerraform(struct!.alluxioVersion),
    api_gateway: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayToTerraform(struct!.apiGateway),
    data: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataToTerraform(struct!.data),
    disable_prometheus: cdktf.booleanToTerraform(struct!.disablePrometheus),
    fuse: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseToTerraform(struct!.fuse),
    hadoop_config: cdktf.stringToTerraform(struct!.hadoopConfig),
    image_pull_secrets: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_users: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersToTerraform(struct!.initUsers),
    job_master: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterToTerraform(struct!.jobMaster),
    job_worker: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform(struct!.jobWorker),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    management: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementToTerraform(struct!.management),
    master: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterToTerraform(struct!.master),
    pod_metadata: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    run_as: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsToTerraform(struct!.runAs),
    tieredstore: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform(struct!.tieredstore),
    volumes: cdktf.listMapper(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
    worker: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct!.worker),
  }
}


export function dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alluxio_version: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionToHclTerraform(struct!.alluxioVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersion",
    },
    api_gateway: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayToHclTerraform(struct!.apiGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGateway",
    },
    data: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecData",
    },
    disable_prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fuse: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseToHclTerraform(struct!.fuse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuse",
    },
    hadoop_config: {
      value: cdktf.stringToHclTerraform(struct!.hadoopConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsList",
    },
    init_users: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform(struct!.initUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsers",
    },
    job_master: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterToHclTerraform(struct!.jobMaster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMaster",
    },
    job_worker: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform(struct!.jobWorker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorker",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    management: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagement",
    },
    master: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterToHclTerraform(struct!.master),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMaster",
    },
    pod_metadata: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadata",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAs",
    },
    tieredstore: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform(struct!.tieredstore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstore",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesList",
    },
    worker: {
      value: dataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alluxioVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alluxioVersion = this._alluxioVersion?.internalValue;
    }
    if (this._apiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGateway = this._apiGateway?.internalValue;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._disablePrometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrometheus = this._disablePrometheus;
    }
    if (this._fuse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse?.internalValue;
    }
    if (this._hadoopConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.hadoopConfig = this._hadoopConfig;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initUsers = this._initUsers?.internalValue;
    }
    if (this._jobMaster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobMaster = this._jobMaster?.internalValue;
    }
    if (this._jobWorker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobWorker = this._jobWorker?.internalValue;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._master?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
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

  public set internalValue(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alluxioVersion.internalValue = undefined;
      this._apiGateway.internalValue = undefined;
      this._data.internalValue = undefined;
      this._disablePrometheus = undefined;
      this._fuse.internalValue = undefined;
      this._hadoopConfig = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initUsers.internalValue = undefined;
      this._jobMaster.internalValue = undefined;
      this._jobWorker.internalValue = undefined;
      this._jvmOptions = undefined;
      this._management.internalValue = undefined;
      this._master.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._properties = undefined;
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
      this._alluxioVersion.internalValue = value.alluxioVersion;
      this._apiGateway.internalValue = value.apiGateway;
      this._data.internalValue = value.data;
      this._disablePrometheus = value.disablePrometheus;
      this._fuse.internalValue = value.fuse;
      this._hadoopConfig = value.hadoopConfig;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initUsers.internalValue = value.initUsers;
      this._jobMaster.internalValue = value.jobMaster;
      this._jobWorker.internalValue = value.jobWorker;
      this._jvmOptions = value.jvmOptions;
      this._management.internalValue = value.management;
      this._master.internalValue = value.master;
      this._podMetadata.internalValue = value.podMetadata;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._runAs.internalValue = value.runAs;
      this._tieredstore.internalValue = value.tieredstore;
      this._volumes.internalValue = value.volumes;
      this._worker.internalValue = value.worker;
    }
  }

  // alluxio_version - computed: false, optional: true, required: false
  private _alluxioVersion = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersionOutputReference(this, "alluxio_version");
  public get alluxioVersion() {
    return this._alluxioVersion;
  }
  public putAlluxioVersion(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecAlluxioVersion) {
    this._alluxioVersion.internalValue = value;
  }
  public resetAlluxioVersion() {
    this._alluxioVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alluxioVersionInput() {
    return this._alluxioVersion.internalValue;
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecApiGateway) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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
  private _fuse = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuseOutputReference(this, "fuse");
  public get fuse() {
    return this._fuse;
  }
  public putFuse(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecFuse) {
    this._fuse.internalValue = value;
  }
  public resetFuse() {
    this._fuse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse.internalValue;
  }

  // hadoop_config - computed: false, optional: true, required: false
  private _hadoopConfig?: string; 
  public get hadoopConfig() {
    return this.getStringAttribute('hadoop_config');
  }
  public set hadoopConfig(value: string) {
    this._hadoopConfig = value;
  }
  public resetHadoopConfig() {
    this._hadoopConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopConfigInput() {
    return this._hadoopConfig;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_users - computed: false, optional: true, required: false
  private _initUsers = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsersOutputReference(this, "init_users");
  public get initUsers() {
    return this._initUsers;
  }
  public putInitUsers(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecInitUsers) {
    this._initUsers.internalValue = value;
  }
  public resetInitUsers() {
    this._initUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initUsersInput() {
    return this._initUsers.internalValue;
  }

  // job_master - computed: false, optional: true, required: false
  private _jobMaster = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMasterOutputReference(this, "job_master");
  public get jobMaster() {
    return this._jobMaster;
  }
  public putJobMaster(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobMaster) {
    this._jobMaster.internalValue = value;
  }
  public resetJobMaster() {
    this._jobMaster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobMasterInput() {
    return this._jobMaster.internalValue;
  }

  // job_worker - computed: false, optional: true, required: false
  private _jobWorker = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference(this, "job_worker");
  public get jobWorker() {
    return this._jobWorker;
  }
  public putJobWorker(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecJobWorker) {
    this._jobWorker.internalValue = value;
  }
  public resetJobWorker() {
    this._jobWorker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobWorkerInput() {
    return this._jobWorker.internalValue;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
  }

  // management - computed: false, optional: true, required: false
  private _management = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // master - computed: false, optional: true, required: false
  private _master = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecMaster) {
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
  private _podMetadata = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
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
  private _runAs = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecRunAs) {
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
  private _tieredstore = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference(this, "tieredstore");
  public get tieredstore() {
    return this._tieredstore;
  }
  public putTieredstore(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecTieredstore) {
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
  private _volumes = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable) {
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
  private _worker = new DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: DataK8SDataFluidIoAlluxioRuntimeV1Alpha1ManifestSpecWorker) {
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
