import * as cdktf from 'cdktf';
import { DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFc,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFrom,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliases,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainers,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResources,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContext,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainers,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerations,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMounts,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsList } from './structs400'
import { DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinity,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainers,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfig,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnv,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMounts,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResources,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnv,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFrom,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromList,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadata,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataOutputReference,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelector,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorToTerraform,
dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorToHclTerraform,
DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorOutputReference } from './structs0'
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#claim_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#pd_id DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
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

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_id DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
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
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined {
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
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
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
      this._volumeId = value.volumeId;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#key DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#items DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#optional DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#api_version DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#field_path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#container_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#divisor DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#resource DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#field_ref DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#resource_field_ref DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
    resource_field_ref: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
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

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#items DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#key DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#items DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#optional DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#audience DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#expiration_seconds DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources {
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#config_map DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#downward_api DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#service_account_token DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#default_mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#sources DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
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
    sources: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#group DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#registry DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#tenant DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#user DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#image DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#keyring DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#monitors DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#pool DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret_ref DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#user DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
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

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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
  private _secretRef = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#gateway DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#protection_domain DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret_ref DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#ssl_enabled DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storage_mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storage_pool DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#system DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
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
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
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
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
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

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
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
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#key DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#default_mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#items DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#optional DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#read_only DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret_ref DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_namespace DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fs_type DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storage_policy_id DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storage_policy_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#aws_elastic_block_store DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#azure_disk DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#azure_file DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#cephfs DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#cinder DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#config_map DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#csi DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#downward_api DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#empty_dir DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#ephemeral DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#fc DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#flex_volume DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#flocker DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#gce_persistent_disk DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#git_repo DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#glusterfs DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#host_path DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#iscsi DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#nfs DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#persistent_volume_claim DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#photon_persistent_disk DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#portworx_volume DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#projected DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#quobyte DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#rbd DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#scale_io DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#secret DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storageos DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#vsphere_volume DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs) {
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
  private _cinder = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder) {
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
  private _configMap = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap) {
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
  private _csi = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral) {
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
  private _fc = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFc) {
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
  private _flexVolume = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi) {
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
  private _nfs = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected) {
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
  private _quobyte = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo) {
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
  private _secret = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret) {
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
  private _storageos = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume) {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsOutputReference {
    return new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#claims DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#limits DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#requests DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsList",
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

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#access_modes DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#access_modes}
  */
  readonly accessModes: string[];
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#resources DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#resources}
  */
  readonly resources: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#storage_class_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName: string;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    resources: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesToTerraform(struct!.resources),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._resources.internalValue = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._resources.internalValue = value.resources;
      this._storageClassName = value.storageClassName;
    }
  }

  // access_modes - computed: false, optional: false, required: true
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Affinity is a group of affinity scheduling rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#affinity DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#automount_service_account_token DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#container_mode DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#container_mode}
  */
  readonly containerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#containers DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#dns_config DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfig;
  /**
  * DNSPolicy defines how a pod's DNS will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#dns_policy DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_enabled DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_enabled}
  */
  readonly dockerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_env DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_env}
  */
  readonly dockerEnv?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_mtu DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_mtu}
  */
  readonly dockerMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_registry_mirror DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_registry_mirror}
  */
  readonly dockerRegistryMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_var_run_volume_size_limit DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_var_run_volume_size_limit}
  */
  readonly dockerVarRunVolumeSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#docker_volume_mounts DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#docker_volume_mounts}
  */
  readonly dockerVolumeMounts?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMounts[] | cdktf.IResolvable;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#dockerd_container_resources DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#dockerd_container_resources}
  */
  readonly dockerdContainerResources?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#dockerd_within_runner_container DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#dockerd_within_runner_container}
  */
  readonly dockerdWithinRunnerContainer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#enable_service_links DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#enterprise DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#enterprise}
  */
  readonly enterprise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#env DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#env_from DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#ephemeral DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#ephemeral_containers DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#github_api_credentials_from DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#github_api_credentials_from}
  */
  readonly githubApiCredentialsFrom?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#group DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#host_aliases DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#image DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#image_pull_policy DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#image_pull_secrets DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#init_containers DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#labels DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#node_selector DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#organization DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#priority_class_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#repository DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#resources DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResources;
  /**
  * RuntimeClassName is the container runtime configuration that containers should run under. More info: https://kubernetes.io/docs/concepts/containers/runtime-class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#runtime_class_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext. Field values of container.securityContext take precedence over field values of PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#security_context DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#service_account_name DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#sidecar_containers DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#sidecar_containers}
  */
  readonly sidecarContainers?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#termination_grace_period_seconds DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#tolerations DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#topology_spread_constraints DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_mounts DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_size_limit DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_size_limit}
  */
  readonly volumeSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volume_storage_medium DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volume_storage_medium}
  */
  readonly volumeStorageMedium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#volumes DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#work_dir DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#work_dir}
  */
  readonly workDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#work_volume_claim_template DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#work_volume_claim_template}
  */
  readonly workVolumeClaimTemplate?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    container_mode: cdktf.stringToTerraform(struct!.containerMode),
    containers: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    docker_enabled: cdktf.booleanToTerraform(struct!.dockerEnabled),
    docker_env: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvToTerraform, false)(struct!.dockerEnv),
    docker_mtu: cdktf.numberToTerraform(struct!.dockerMtu),
    docker_registry_mirror: cdktf.stringToTerraform(struct!.dockerRegistryMirror),
    docker_var_run_volume_size_limit: cdktf.stringToTerraform(struct!.dockerVarRunVolumeSizeLimit),
    docker_volume_mounts: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsToTerraform, false)(struct!.dockerVolumeMounts),
    dockerd_container_resources: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesToTerraform(struct!.dockerdContainerResources),
    dockerd_within_runner_container: cdktf.booleanToTerraform(struct!.dockerdWithinRunnerContainer),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    enterprise: cdktf.stringToTerraform(struct!.enterprise),
    env: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromToTerraform, false)(struct!.envFrom),
    ephemeral: cdktf.booleanToTerraform(struct!.ephemeral),
    ephemeral_containers: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    github_api_credentials_from: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromToTerraform(struct!.githubApiCredentialsFrom),
    group: cdktf.stringToTerraform(struct!.group),
    host_aliases: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    organization: cdktf.stringToTerraform(struct!.organization),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    repository: cdktf.stringToTerraform(struct!.repository),
    resources: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesToTerraform(struct!.resources),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    security_context: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    sidecar_containers: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersToTerraform, false)(struct!.sidecarContainers),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volume_mounts: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volume_size_limit: cdktf.stringToTerraform(struct!.volumeSizeLimit),
    volume_storage_medium: cdktf.stringToTerraform(struct!.volumeStorageMedium),
    volumes: cdktf.listMapper(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesToTerraform, false)(struct!.volumes),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
    work_volume_claim_template: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateToTerraform(struct!.workVolumeClaimTemplate),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinity",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_mode: {
      value: cdktf.stringToHclTerraform(struct!.containerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersList",
    },
    dns_config: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dockerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_env: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvToHclTerraform, false)(struct!.dockerEnv),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvList",
    },
    docker_mtu: {
      value: cdktf.numberToHclTerraform(struct!.dockerMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_registry_mirror: {
      value: cdktf.stringToHclTerraform(struct!.dockerRegistryMirror),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_var_run_volume_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.dockerVarRunVolumeSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsToHclTerraform, false)(struct!.dockerVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsList",
    },
    dockerd_container_resources: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesToHclTerraform(struct!.dockerdContainerResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResources",
    },
    dockerd_within_runner_container: {
      value: cdktf.booleanToHclTerraform(struct!.dockerdWithinRunnerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enterprise: {
      value: cdktf.stringToHclTerraform(struct!.enterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromList",
    },
    ephemeral: {
      value: cdktf.booleanToHclTerraform(struct!.ephemeral),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ephemeral_containers: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList",
    },
    github_api_credentials_from: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromToHclTerraform(struct!.githubApiCredentialsFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFrom",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList",
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
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersList",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
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
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResources",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContext",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sidecar_containers: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersToHclTerraform, false)(struct!.sidecarContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersList",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsList",
    },
    volume_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.volumeSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_storage_medium: {
      value: cdktf.stringToHclTerraform(struct!.volumeStorageMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesList",
    },
    work_dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_volume_claim_template: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateToHclTerraform(struct!.workVolumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._containerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMode = this._containerMode;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._dockerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerEnabled = this._dockerEnabled;
    }
    if (this._dockerEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerEnv = this._dockerEnv?.internalValue;
    }
    if (this._dockerMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerMtu = this._dockerMtu;
    }
    if (this._dockerRegistryMirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistryMirror = this._dockerRegistryMirror;
    }
    if (this._dockerVarRunVolumeSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVarRunVolumeSizeLimit = this._dockerVarRunVolumeSizeLimit;
    }
    if (this._dockerVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVolumeMounts = this._dockerVolumeMounts?.internalValue;
    }
    if (this._dockerdContainerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerdContainerResources = this._dockerdContainerResources?.internalValue;
    }
    if (this._dockerdWithinRunnerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerdWithinRunnerContainer = this._dockerdWithinRunnerContainer;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._enterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterprise = this._enterprise;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._ephemeral !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral;
    }
    if (this._ephemeralContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainers = this._ephemeralContainers?.internalValue;
    }
    if (this._githubApiCredentialsFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApiCredentialsFrom = this._githubApiCredentialsFrom?.internalValue;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._sidecarContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarContainers = this._sidecarContainers?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumeSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeLimit = this._volumeSizeLimit;
    }
    if (this._volumeStorageMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeStorageMedium = this._volumeStorageMedium;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    if (this._workVolumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workVolumeClaimTemplate = this._workVolumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._containerMode = undefined;
      this._containers.internalValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._dockerEnabled = undefined;
      this._dockerEnv.internalValue = undefined;
      this._dockerMtu = undefined;
      this._dockerRegistryMirror = undefined;
      this._dockerVarRunVolumeSizeLimit = undefined;
      this._dockerVolumeMounts.internalValue = undefined;
      this._dockerdContainerResources.internalValue = undefined;
      this._dockerdWithinRunnerContainer = undefined;
      this._enableServiceLinks = undefined;
      this._enterprise = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._ephemeral = undefined;
      this._ephemeralContainers.internalValue = undefined;
      this._githubApiCredentialsFrom.internalValue = undefined;
      this._group = undefined;
      this._hostAliases.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._labels = undefined;
      this._nodeSelector = undefined;
      this._organization = undefined;
      this._priorityClassName = undefined;
      this._repository = undefined;
      this._resources.internalValue = undefined;
      this._runtimeClassName = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._sidecarContainers.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumeSizeLimit = undefined;
      this._volumeStorageMedium = undefined;
      this._volumes.internalValue = undefined;
      this._workDir = undefined;
      this._workVolumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._containerMode = value.containerMode;
      this._containers.internalValue = value.containers;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._dockerEnabled = value.dockerEnabled;
      this._dockerEnv.internalValue = value.dockerEnv;
      this._dockerMtu = value.dockerMtu;
      this._dockerRegistryMirror = value.dockerRegistryMirror;
      this._dockerVarRunVolumeSizeLimit = value.dockerVarRunVolumeSizeLimit;
      this._dockerVolumeMounts.internalValue = value.dockerVolumeMounts;
      this._dockerdContainerResources.internalValue = value.dockerdContainerResources;
      this._dockerdWithinRunnerContainer = value.dockerdWithinRunnerContainer;
      this._enableServiceLinks = value.enableServiceLinks;
      this._enterprise = value.enterprise;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._ephemeral = value.ephemeral;
      this._ephemeralContainers.internalValue = value.ephemeralContainers;
      this._githubApiCredentialsFrom.internalValue = value.githubApiCredentialsFrom;
      this._group = value.group;
      this._hostAliases.internalValue = value.hostAliases;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._labels = value.labels;
      this._nodeSelector = value.nodeSelector;
      this._organization = value.organization;
      this._priorityClassName = value.priorityClassName;
      this._repository = value.repository;
      this._resources.internalValue = value.resources;
      this._runtimeClassName = value.runtimeClassName;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccountName = value.serviceAccountName;
      this._sidecarContainers.internalValue = value.sidecarContainers;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumeSizeLimit = value.volumeSizeLimit;
      this._volumeStorageMedium = value.volumeStorageMedium;
      this._volumes.internalValue = value.volumes;
      this._workDir = value.workDir;
      this._workVolumeClaimTemplate.internalValue = value.workVolumeClaimTemplate;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // container_mode - computed: false, optional: true, required: false
  private _containerMode?: string; 
  public get containerMode() {
    return this.getStringAttribute('container_mode');
  }
  public set containerMode(value: string) {
    this._containerMode = value;
  }
  public resetContainerMode() {
    this._containerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerModeInput() {
    return this._containerMode;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // docker_enabled - computed: false, optional: true, required: false
  private _dockerEnabled?: boolean | cdktf.IResolvable; 
  public get dockerEnabled() {
    return this.getBooleanAttribute('docker_enabled');
  }
  public set dockerEnabled(value: boolean | cdktf.IResolvable) {
    this._dockerEnabled = value;
  }
  public resetDockerEnabled() {
    this._dockerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerEnabledInput() {
    return this._dockerEnabled;
  }

  // docker_env - computed: false, optional: true, required: false
  private _dockerEnv = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnvList(this, "docker_env", false);
  public get dockerEnv() {
    return this._dockerEnv;
  }
  public putDockerEnv(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerEnv[] | cdktf.IResolvable) {
    this._dockerEnv.internalValue = value;
  }
  public resetDockerEnv() {
    this._dockerEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerEnvInput() {
    return this._dockerEnv.internalValue;
  }

  // docker_mtu - computed: false, optional: true, required: false
  private _dockerMtu?: number; 
  public get dockerMtu() {
    return this.getNumberAttribute('docker_mtu');
  }
  public set dockerMtu(value: number) {
    this._dockerMtu = value;
  }
  public resetDockerMtu() {
    this._dockerMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerMtuInput() {
    return this._dockerMtu;
  }

  // docker_registry_mirror - computed: false, optional: true, required: false
  private _dockerRegistryMirror?: string; 
  public get dockerRegistryMirror() {
    return this.getStringAttribute('docker_registry_mirror');
  }
  public set dockerRegistryMirror(value: string) {
    this._dockerRegistryMirror = value;
  }
  public resetDockerRegistryMirror() {
    this._dockerRegistryMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistryMirrorInput() {
    return this._dockerRegistryMirror;
  }

  // docker_var_run_volume_size_limit - computed: false, optional: true, required: false
  private _dockerVarRunVolumeSizeLimit?: string; 
  public get dockerVarRunVolumeSizeLimit() {
    return this.getStringAttribute('docker_var_run_volume_size_limit');
  }
  public set dockerVarRunVolumeSizeLimit(value: string) {
    this._dockerVarRunVolumeSizeLimit = value;
  }
  public resetDockerVarRunVolumeSizeLimit() {
    this._dockerVarRunVolumeSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVarRunVolumeSizeLimitInput() {
    return this._dockerVarRunVolumeSizeLimit;
  }

  // docker_volume_mounts - computed: false, optional: true, required: false
  private _dockerVolumeMounts = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMountsList(this, "docker_volume_mounts", false);
  public get dockerVolumeMounts() {
    return this._dockerVolumeMounts;
  }
  public putDockerVolumeMounts(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerVolumeMounts[] | cdktf.IResolvable) {
    this._dockerVolumeMounts.internalValue = value;
  }
  public resetDockerVolumeMounts() {
    this._dockerVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeMountsInput() {
    return this._dockerVolumeMounts.internalValue;
  }

  // dockerd_container_resources - computed: false, optional: true, required: false
  private _dockerdContainerResources = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResourcesOutputReference(this, "dockerd_container_resources");
  public get dockerdContainerResources() {
    return this._dockerdContainerResources;
  }
  public putDockerdContainerResources(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecDockerdContainerResources) {
    this._dockerdContainerResources.internalValue = value;
  }
  public resetDockerdContainerResources() {
    this._dockerdContainerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerdContainerResourcesInput() {
    return this._dockerdContainerResources.internalValue;
  }

  // dockerd_within_runner_container - computed: false, optional: true, required: false
  private _dockerdWithinRunnerContainer?: boolean | cdktf.IResolvable; 
  public get dockerdWithinRunnerContainer() {
    return this.getBooleanAttribute('dockerd_within_runner_container');
  }
  public set dockerdWithinRunnerContainer(value: boolean | cdktf.IResolvable) {
    this._dockerdWithinRunnerContainer = value;
  }
  public resetDockerdWithinRunnerContainer() {
    this._dockerdWithinRunnerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerdWithinRunnerContainerInput() {
    return this._dockerdWithinRunnerContainer;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // enterprise - computed: false, optional: true, required: false
  private _enterprise?: string; 
  public get enterprise() {
    return this.getStringAttribute('enterprise');
  }
  public set enterprise(value: string) {
    this._enterprise = value;
  }
  public resetEnterprise() {
    this._enterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseInput() {
    return this._enterprise;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral?: boolean | cdktf.IResolvable; 
  public get ephemeral() {
    return this.getBooleanAttribute('ephemeral');
  }
  public set ephemeral(value: boolean | cdktf.IResolvable) {
    this._ephemeral = value;
  }
  public resetEphemeral() {
    this._ephemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
  }

  // ephemeral_containers - computed: false, optional: true, required: false
  private _ephemeralContainers = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable) {
    this._ephemeralContainers.internalValue = value;
  }
  public resetEphemeralContainers() {
    this._ephemeralContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainersInput() {
    return this._ephemeralContainers.internalValue;
  }

  // github_api_credentials_from - computed: false, optional: true, required: false
  private _githubApiCredentialsFrom = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFromOutputReference(this, "github_api_credentials_from");
  public get githubApiCredentialsFrom() {
    return this._githubApiCredentialsFrom;
  }
  public putGithubApiCredentialsFrom(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecGithubApiCredentialsFrom) {
    this._githubApiCredentialsFrom.internalValue = value;
  }
  public resetGithubApiCredentialsFrom() {
    this._githubApiCredentialsFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubApiCredentialsFromInput() {
    return this._githubApiCredentialsFrom.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
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

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // sidecar_containers - computed: false, optional: true, required: false
  private _sidecarContainers = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainersList(this, "sidecar_containers", false);
  public get sidecarContainers() {
    return this._sidecarContainers;
  }
  public putSidecarContainers(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecSidecarContainers[] | cdktf.IResolvable) {
    this._sidecarContainers.internalValue = value;
  }
  public resetSidecarContainers() {
    this._sidecarContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarContainersInput() {
    return this._sidecarContainers.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volume_size_limit - computed: false, optional: true, required: false
  private _volumeSizeLimit?: string; 
  public get volumeSizeLimit() {
    return this.getStringAttribute('volume_size_limit');
  }
  public set volumeSizeLimit(value: string) {
    this._volumeSizeLimit = value;
  }
  public resetVolumeSizeLimit() {
    this._volumeSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeLimitInput() {
    return this._volumeSizeLimit;
  }

  // volume_storage_medium - computed: false, optional: true, required: false
  private _volumeStorageMedium?: string; 
  public get volumeStorageMedium() {
    return this.getStringAttribute('volume_storage_medium');
  }
  public set volumeStorageMedium(value: string) {
    this._volumeStorageMedium = value;
  }
  public resetVolumeStorageMedium() {
    this._volumeStorageMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeStorageMediumInput() {
    return this._volumeStorageMedium;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }

  // work_volume_claim_template - computed: false, optional: true, required: false
  private _workVolumeClaimTemplate = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplateOutputReference(this, "work_volume_claim_template");
  public get workVolumeClaimTemplate() {
    return this._workVolumeClaimTemplate;
  }
  public putWorkVolumeClaimTemplate(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecWorkVolumeClaimTemplate) {
    this._workVolumeClaimTemplate.internalValue = value;
  }
  public resetWorkVolumeClaimTemplate() {
    this._workVolumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workVolumeClaimTemplateInput() {
    return this._workVolumeClaimTemplate.internalValue;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#metadata DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadata;
  /**
  * RunnerSpec defines the desired state of Runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#spec DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpec {
  /**
  * EffectiveTime is the time the upstream controller requested to sync Replicas. It is usually populated by the webhook-based autoscaler via HRA and RunnerDeployment. The value is used to prevent runnerreplicaset controller from unnecessarily recreating ephemeral runners based on potentially outdated Replicas value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#effective_time DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#replicas DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#selector DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/actions_summerwind_dev_runner_replica_set_v1alpha1_manifest#template DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1Manifest#template}
  */
  readonly template: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate;
}

export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_time: cdktf.stringToTerraform(struct!.effectiveTime),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    selector: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    template: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_time: {
      value: cdktf.stringToHclTerraform(struct!.effectiveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selector: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelector",
    },
    template: {
      value: dataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveTime = this._effectiveTime;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveTime = undefined;
      this._replicas = undefined;
      this._selector.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectiveTime = value.effectiveTime;
      this._replicas = value.replicas;
      this._selector.internalValue = value.selector;
      this._template.internalValue = value.template;
    }
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SActionsSummerwindDevRunnerReplicaSetV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
