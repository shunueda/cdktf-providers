import * as cdktf from 'cdktf';
import { DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFile,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfs,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinder,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMap,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeral,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFc,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlocker,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepo,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPath,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfs,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinity,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnv,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFrom,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainers,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerations,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMounts,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadata,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfig,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFrom,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRef,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloud,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOn,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappings,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecks,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecrets,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsList } from './structs0'
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#resource_field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#audience DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#expiration_seconds DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#cluster_trust_bundle DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#config_map DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#downward_api DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#service_account_token DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
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
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#default_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#sources DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#group DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#registry DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#tenant DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#user DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#image DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#keyring DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#monitors DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#pool DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#user DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#gateway DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#protection_domain DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#ssl_enabled DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#storage_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#storage_pool DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#system DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#default_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume_namespace DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#storage_policy_id DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#storage_policy_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume_path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#aws_elastic_block_store DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#azure_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#azure_file DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#cephfs DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#cinder DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#config_map DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#csi DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#downward_api DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#empty_dir DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#ephemeral DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#fc DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#flex_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#flocker DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#gce_persistent_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#git_repo DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#glusterfs DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#host_path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#iscsi DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#nfs DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#persistent_volume_claim DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#photon_persistent_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#portworx_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#projected DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#quobyte DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#rbd DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#scale_io DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#storageos DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#vsphere_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCephfs) {
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
  private _cinder = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCinder) {
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
  private _configMap = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesConfigMap) {
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
  private _csi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesEphemeral) {
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
  private _fc = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFc) {
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
  private _flexVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesIscsi) {
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
  private _nfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesProjected) {
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
  private _quobyte = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesScaleIo) {
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
  private _secret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesSecret) {
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
  private _storageos = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec {
  /**
  * Set the Affinity for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#affinity DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinity;
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#env DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#env_from DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * Runner pod image to use other than default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#image DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Set up Init Containers for the Runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#init_containers DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Set the NodeSelector for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#node_selector DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Set the Tolerations for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#tolerations DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Set Volume Mounts for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volume_mounts DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Set Volumes for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#volumes DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityToTerraform(struct!.affinity),
    env: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    init_containers: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    volume_mounts: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinity",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._image = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._image = value.image;
      this._initContainers.internalValue = value.initContainers;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
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

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#metadata DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#spec DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadata",
    },
    spec: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateMetadata) {
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
  private _spec = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateSpec) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#api_version DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#kind DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#namespace DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate {
  /**
  * ForceUnlock a Terraform state if it has become locked for any reason. Defaults to 'no'. This is an Enum and has the expected values of: - auto - yes - no WARNING: Only use 'auto' in the cases where you are absolutely certain that no other system is using this state, you could otherwise end up in a bad place See https://www.terraform.io/language/state/locking#force-unlock for more information on the terraform state lock and force unlock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#force_unlock DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#force_unlock}
  */
  readonly forceUnlock?: string;
  /**
  * LockIdentifier holds the Identifier required by Terraform to unlock the state if it ever gets into a locked state. You'll need to put the Lock Identifier in here while setting ForceUnlock to either 'yes' or 'auto'. Leave this empty to do nothing, set this to the value of the 'Lock Info: ID: [value]', e.g. 'f2ab685b-f84d-ac0b-a125-378a22877e8d', to force unlock the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#lock_identifier DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#lock_identifier}
  */
  readonly lockIdentifier?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_unlock: cdktf.stringToTerraform(struct!.forceUnlock),
    lock_identifier: cdktf.stringToTerraform(struct!.lockIdentifier),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_unlock: {
      value: cdktf.stringToHclTerraform(struct!.forceUnlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lock_identifier: {
      value: cdktf.stringToHclTerraform(struct!.lockIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceUnlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUnlock = this._forceUnlock;
    }
    if (this._lockIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockIdentifier = this._lockIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceUnlock = undefined;
      this._lockIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceUnlock = value.forceUnlock;
      this._lockIdentifier = value.lockIdentifier;
    }
  }

  // force_unlock - computed: false, optional: true, required: false
  private _forceUnlock?: string; 
  public get forceUnlock() {
    return this.getStringAttribute('force_unlock');
  }
  public set forceUnlock(value: string) {
    this._forceUnlock = value;
  }
  public resetForceUnlock() {
    this._forceUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUnlockInput() {
    return this._forceUnlock;
  }

  // lock_identifier - computed: false, optional: true, required: false
  private _lockIdentifier?: string; 
  public get lockIdentifier() {
    return this.getStringAttribute('lock_identifier');
  }
  public set lockIdentifier(value: string) {
    this._lockIdentifier = value;
  }
  public resetLockIdentifier() {
    this._lockIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockIdentifierInput() {
    return this._lockIdentifier;
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#api_version DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#field_path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#container_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#divisor DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#resource DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#config_map_key_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#resource_field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#secret_key_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromSecretKeyRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars {
  /**
  * Name is the name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#value DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
  /**
  * EnvVarSource represents a source for the value of an EnvVar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#value_from DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
    value_from: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    value_from: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars | cdktf.IResolvable | undefined) {
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
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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
  private _valueFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsValueFrom) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom {
  /**
  * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#kind DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the values referent. Should reside in the same namespace as the referring resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Optional marks this VarsReference as optional. When set, a not found error for the values reference is ignored, but any VarsKey or transient error will still result in a reconciliation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * VarsKeys is the data key at which a specific value can be found. Defaults to all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#vars_keys DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#vars_keys}
  */
  readonly varsKeys?: string[];
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vars_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.varsKeys),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vars_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.varsKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._varsKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.varsKeys = this._varsKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._varsKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._optional = value.optional;
      this._varsKeys = value.varsKeys;
    }
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

  // vars_keys - computed: false, optional: true, required: false
  private _varsKeys?: string[]; 
  public get varsKeys() {
    return this.getListAttribute('vars_keys');
  }
  public set varsKeys(value: string[]) {
    this._varsKeys = value;
  }
  public resetVarsKeys() {
    this._varsKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsKeysInput() {
    return this._varsKeys;
  }
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#enabled DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#error_message_template DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#error_message_template}
  */
  readonly errorMessageTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#payload_type DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#payload_type}
  */
  readonly payloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#stage DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#test_expression DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#test_expression}
  */
  readonly testExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#url DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    error_message_template: cdktf.stringToTerraform(struct!.errorMessageTemplate),
    payload_type: cdktf.stringToTerraform(struct!.payloadType),
    stage: cdktf.stringToTerraform(struct!.stage),
    test_expression: cdktf.stringToTerraform(struct!.testExpression),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks | cdktf.IResolvable): any {
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
    error_message_template: {
      value: cdktf.stringToHclTerraform(struct!.errorMessageTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_expression: {
      value: cdktf.stringToHclTerraform(struct!.testExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._errorMessageTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessageTemplate = this._errorMessageTemplate;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._testExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.testExpression = this._testExpression;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._errorMessageTemplate = undefined;
      this._payloadType = undefined;
      this._stage = undefined;
      this._testExpression = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._errorMessageTemplate = value.errorMessageTemplate;
      this._payloadType = value.payloadType;
      this._stage = value.stage;
      this._testExpression = value.testExpression;
      this._url = value.url;
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

  // error_message_template - computed: false, optional: true, required: false
  private _errorMessageTemplate?: string; 
  public get errorMessageTemplate() {
    return this.getStringAttribute('error_message_template');
  }
  public set errorMessageTemplate(value: string) {
    this._errorMessageTemplate = value;
  }
  public resetErrorMessageTemplate() {
    this._errorMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageTemplateInput() {
    return this._errorMessageTemplate;
  }

  // payload_type - computed: false, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // test_expression - computed: false, optional: true, required: false
  private _testExpression?: string; 
  public get testExpression() {
    return this.getStringAttribute('test_expression');
  }
  public set testExpression(value: string) {
    this._testExpression = value;
  }
  public resetTestExpression() {
    this._testExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testExpressionInput() {
    return this._testExpression;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret {
  /**
  * Name is the name of the Secret to be written
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Outputs contain the selected names of outputs to be written to the secret. Empty array means writing all outputs, which is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#outputs DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#outputs}
  */
  readonly outputs?: string[];
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    outputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputs),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret | cdktf.IResolvable): any {
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
    outputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._outputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._outputs = value.outputs;
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

  // outputs - computed: false, optional: true, required: false
  private _outputs?: string[]; 
  public get outputs() {
    return this.getListAttribute('outputs');
  }
  public set outputs(value: string[]) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpec {
  /**
  * Clean the runner pod up after each reconciliation cycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#always_cleanup_runner_pod DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#always_cleanup_runner_pod}
  */
  readonly alwaysCleanupRunnerPod?: boolean | cdktf.IResolvable;
  /**
  * ApprovePlan specifies name of a plan wanted to approve. If its value is 'auto', the controller will automatically approve every plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#approve_plan DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#approve_plan}
  */
  readonly approvePlan?: string;
  /**
  * BackendConfigSpec is for specifying configuration for Terraform's Kubernetes backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#backend_config DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#backend_config}
  */
  readonly backendConfig?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#backend_configs_from DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#backend_configs_from}
  */
  readonly backendConfigsFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFrom[] | cdktf.IResolvable;
  /**
  * BreakTheGlass specifies if the reconciliation should stop and allow interactive shell in case of emergency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#break_the_glass DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#break_the_glass}
  */
  readonly breakTheGlass?: boolean | cdktf.IResolvable;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#cli_config_secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#cli_config_secret_ref}
  */
  readonly cliConfigSecretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#cloud DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#cloud}
  */
  readonly cloud?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#depends_on DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOn[] | cdktf.IResolvable;
  /**
  * Destroy produces a destroy plan. Applying the plan will destroy all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#destroy DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#destroy}
  */
  readonly destroy?: boolean | cdktf.IResolvable;
  /**
  * Create destroy plan and apply it to destroy terraform resources upon deletion of this object. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#destroy_resources_on_deletion DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#destroy_resources_on_deletion}
  */
  readonly destroyResourcesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Disable automatic drift detection. Drift detection may be resource intensive in the context of a large cluster or complex Terraform statefile. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#disable_drift_detection DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#disable_drift_detection}
  */
  readonly disableDriftDetection?: boolean | cdktf.IResolvable;
  /**
  * EnableInventory enables the object to store resource entries as the inventory for external use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#enable_inventory DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#enable_inventory}
  */
  readonly enableInventory?: boolean | cdktf.IResolvable;
  /**
  * Enterprise is the enterprise configuration placeholder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#enterprise DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#enterprise}
  */
  readonly enterprise?: { [key: string]: string };
  /**
  * List of all configuration files to be created in initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#file_mappings DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#file_mappings}
  */
  readonly fileMappings?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappings[] | cdktf.IResolvable;
  /**
  * Force instructs the controller to unconditionally re-plan and re-apply TF resources. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#force DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * List of health checks to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#health_checks DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * The interval at which to reconcile the Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#interval DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Parallelism limits the number of concurrent operations of Terraform apply step. Zero (0) means using the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#parallelism DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Path to the directory containing Terraform (.tf) files. Defaults to 'None', which translates to the root path of the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#read_inputs_from_secrets DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#read_inputs_from_secrets}
  */
  readonly readInputsFromSecrets?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecrets[] | cdktf.IResolvable;
  /**
  * RefreshBeforeApply forces refreshing of the state before the apply step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#refresh_before_apply DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#refresh_before_apply}
  */
  readonly refreshBeforeApply?: boolean | cdktf.IResolvable;
  /**
  * The interval at which to retry a previously failed reconciliation. The default value is 15 when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#retry_interval DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#runner_pod_template DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#runner_pod_template}
  */
  readonly runnerPodTemplate?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate;
  /**
  * Configure the termination grace period for the runner pod. Use this parameter to allow the Terraform process to gracefully shutdown. Consider increasing for large, complex or slow-moving Terraform managed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#runner_termination_grace_period_seconds DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#runner_termination_grace_period_seconds}
  */
  readonly runnerTerminationGracePeriodSeconds?: number;
  /**
  * Name of a ServiceAccount for the runner Pod to provision Terraform resources. Default to tf-runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#service_account_name DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * SourceRef is the reference of the source where the Terraform files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#source_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#source_ref}
  */
  readonly sourceRef: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef;
  /**
  * StoreReadablePlan enables storing the plan in a readable format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#store_readable_plan DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#store_readable_plan}
  */
  readonly storeReadablePlan?: string;
  /**
  * Suspend is to tell the controller to suspend subsequent TF executions, it does not apply to already started executions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#suspend DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Targets specify the resource, module or collection of resources to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#targets DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#targets}
  */
  readonly targets?: string[];
  /**
  * TFStateSpec allows the user to set ForceUnlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#tfstate DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#tfstate}
  */
  readonly tfstate?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate;
  /**
  * Values map to the Terraform variable 'values', which is an object of arbitrary values. It is a convenient way to pass values to Terraform resources without having to define a variable for each value. To use this feature, your Terraform file must define the variable 'values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#values DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * List of input variables to set for the Terraform program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#vars DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#vars}
  */
  readonly vars?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars[] | cdktf.IResolvable;
  /**
  * List of references to a Secret or a ConfigMap to generate variables for Terraform resources based on its data, selectively by varsKey. Values of the later Secret / ConfigMap with the same keys will override those of the former.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#vars_from DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#vars_from}
  */
  readonly varsFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#webhooks DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#webhooks}
  */
  readonly webhooks?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#workspace DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#workspace}
  */
  readonly workspace?: string;
  /**
  * A list of target secrets for the outputs to be written as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha1_manifest#write_outputs_to_secret DataK8SInfraContribFluxcdIoTerraformV1Alpha1Manifest#write_outputs_to_secret}
  */
  readonly writeOutputsToSecret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_cleanup_runner_pod: cdktf.booleanToTerraform(struct!.alwaysCleanupRunnerPod),
    approve_plan: cdktf.stringToTerraform(struct!.approvePlan),
    backend_config: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigToTerraform(struct!.backendConfig),
    backend_configs_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromToTerraform, false)(struct!.backendConfigsFrom),
    break_the_glass: cdktf.booleanToTerraform(struct!.breakTheGlass),
    cli_config_secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefToTerraform(struct!.cliConfigSecretRef),
    cloud: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudToTerraform(struct!.cloud),
    depends_on: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnToTerraform, false)(struct!.dependsOn),
    destroy: cdktf.booleanToTerraform(struct!.destroy),
    destroy_resources_on_deletion: cdktf.booleanToTerraform(struct!.destroyResourcesOnDeletion),
    disable_drift_detection: cdktf.booleanToTerraform(struct!.disableDriftDetection),
    enable_inventory: cdktf.booleanToTerraform(struct!.enableInventory),
    enterprise: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enterprise),
    file_mappings: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsToTerraform, false)(struct!.fileMappings),
    force: cdktf.booleanToTerraform(struct!.force),
    health_checks: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    interval: cdktf.stringToTerraform(struct!.interval),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    path: cdktf.stringToTerraform(struct!.path),
    read_inputs_from_secrets: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsToTerraform, false)(struct!.readInputsFromSecrets),
    refresh_before_apply: cdktf.booleanToTerraform(struct!.refreshBeforeApply),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    runner_pod_template: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateToTerraform(struct!.runnerPodTemplate),
    runner_termination_grace_period_seconds: cdktf.numberToTerraform(struct!.runnerTerminationGracePeriodSeconds),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    source_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    store_readable_plan: cdktf.stringToTerraform(struct!.storeReadablePlan),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    tfstate: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateToTerraform(struct!.tfstate),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    vars: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsToTerraform, false)(struct!.vars),
    vars_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromToTerraform, false)(struct!.varsFrom),
    webhooks: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksToTerraform, false)(struct!.webhooks),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    write_outputs_to_secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretToTerraform(struct!.writeOutputsToSecret),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_cleanup_runner_pod: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysCleanupRunnerPod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    approve_plan: {
      value: cdktf.stringToHclTerraform(struct!.approvePlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_config: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigToHclTerraform(struct!.backendConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfig",
    },
    backend_configs_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromToHclTerraform, false)(struct!.backendConfigsFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromList",
    },
    break_the_glass: {
      value: cdktf.booleanToHclTerraform(struct!.breakTheGlass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cli_config_secret_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefToHclTerraform(struct!.cliConfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRef",
    },
    cloud: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloud",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnList",
    },
    destroy: {
      value: cdktf.booleanToHclTerraform(struct!.destroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destroy_resources_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.destroyResourcesOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_drift_detection: {
      value: cdktf.booleanToHclTerraform(struct!.disableDriftDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_inventory: {
      value: cdktf.booleanToHclTerraform(struct!.enableInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enterprise: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enterprise),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    file_mappings: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsToHclTerraform, false)(struct!.fileMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsList",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
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
    read_inputs_from_secrets: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsToHclTerraform, false)(struct!.readInputsFromSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsList",
    },
    refresh_before_apply: {
      value: cdktf.booleanToHclTerraform(struct!.refreshBeforeApply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_pod_template: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateToHclTerraform(struct!.runnerPodTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate",
    },
    runner_termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.runnerTerminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef",
    },
    store_readable_plan: {
      value: cdktf.stringToHclTerraform(struct!.storeReadablePlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tfstate: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateToHclTerraform(struct!.tfstate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vars: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsToHclTerraform, false)(struct!.vars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsList",
    },
    vars_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromToHclTerraform, false)(struct!.varsFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromList",
    },
    webhooks: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksToHclTerraform, false)(struct!.webhooks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksList",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_outputs_to_secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretToHclTerraform(struct!.writeOutputsToSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysCleanupRunnerPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysCleanupRunnerPod = this._alwaysCleanupRunnerPod;
    }
    if (this._approvePlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvePlan = this._approvePlan;
    }
    if (this._backendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfig = this._backendConfig?.internalValue;
    }
    if (this._backendConfigsFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfigsFrom = this._backendConfigsFrom?.internalValue;
    }
    if (this._breakTheGlass !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakTheGlass = this._breakTheGlass;
    }
    if (this._cliConfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliConfigSecretRef = this._cliConfigSecretRef?.internalValue;
    }
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._destroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroy = this._destroy;
    }
    if (this._destroyResourcesOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroyResourcesOnDeletion = this._destroyResourcesOnDeletion;
    }
    if (this._disableDriftDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDriftDetection = this._disableDriftDetection;
    }
    if (this._enableInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInventory = this._enableInventory;
    }
    if (this._enterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterprise = this._enterprise;
    }
    if (this._fileMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMappings = this._fileMappings?.internalValue;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readInputsFromSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readInputsFromSecrets = this._readInputsFromSecrets?.internalValue;
    }
    if (this._refreshBeforeApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshBeforeApply = this._refreshBeforeApply;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._runnerPodTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerPodTemplate = this._runnerPodTemplate?.internalValue;
    }
    if (this._runnerTerminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerTerminationGracePeriodSeconds = this._runnerTerminationGracePeriodSeconds;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._storeReadablePlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeReadablePlan = this._storeReadablePlan;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._tfstate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfstate = this._tfstate?.internalValue;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._vars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars?.internalValue;
    }
    if (this._varsFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varsFrom = this._varsFrom?.internalValue;
    }
    if (this._webhooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooks = this._webhooks?.internalValue;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    if (this._writeOutputsToSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOutputsToSecret = this._writeOutputsToSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysCleanupRunnerPod = undefined;
      this._approvePlan = undefined;
      this._backendConfig.internalValue = undefined;
      this._backendConfigsFrom.internalValue = undefined;
      this._breakTheGlass = undefined;
      this._cliConfigSecretRef.internalValue = undefined;
      this._cloud.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._destroy = undefined;
      this._destroyResourcesOnDeletion = undefined;
      this._disableDriftDetection = undefined;
      this._enableInventory = undefined;
      this._enterprise = undefined;
      this._fileMappings.internalValue = undefined;
      this._force = undefined;
      this._healthChecks.internalValue = undefined;
      this._interval = undefined;
      this._parallelism = undefined;
      this._path = undefined;
      this._readInputsFromSecrets.internalValue = undefined;
      this._refreshBeforeApply = undefined;
      this._retryInterval = undefined;
      this._runnerPodTemplate.internalValue = undefined;
      this._runnerTerminationGracePeriodSeconds = undefined;
      this._serviceAccountName = undefined;
      this._sourceRef.internalValue = undefined;
      this._storeReadablePlan = undefined;
      this._suspend = undefined;
      this._targets = undefined;
      this._tfstate.internalValue = undefined;
      this._values = undefined;
      this._vars.internalValue = undefined;
      this._varsFrom.internalValue = undefined;
      this._webhooks.internalValue = undefined;
      this._workspace = undefined;
      this._writeOutputsToSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysCleanupRunnerPod = value.alwaysCleanupRunnerPod;
      this._approvePlan = value.approvePlan;
      this._backendConfig.internalValue = value.backendConfig;
      this._backendConfigsFrom.internalValue = value.backendConfigsFrom;
      this._breakTheGlass = value.breakTheGlass;
      this._cliConfigSecretRef.internalValue = value.cliConfigSecretRef;
      this._cloud.internalValue = value.cloud;
      this._dependsOn.internalValue = value.dependsOn;
      this._destroy = value.destroy;
      this._destroyResourcesOnDeletion = value.destroyResourcesOnDeletion;
      this._disableDriftDetection = value.disableDriftDetection;
      this._enableInventory = value.enableInventory;
      this._enterprise = value.enterprise;
      this._fileMappings.internalValue = value.fileMappings;
      this._force = value.force;
      this._healthChecks.internalValue = value.healthChecks;
      this._interval = value.interval;
      this._parallelism = value.parallelism;
      this._path = value.path;
      this._readInputsFromSecrets.internalValue = value.readInputsFromSecrets;
      this._refreshBeforeApply = value.refreshBeforeApply;
      this._retryInterval = value.retryInterval;
      this._runnerPodTemplate.internalValue = value.runnerPodTemplate;
      this._runnerTerminationGracePeriodSeconds = value.runnerTerminationGracePeriodSeconds;
      this._serviceAccountName = value.serviceAccountName;
      this._sourceRef.internalValue = value.sourceRef;
      this._storeReadablePlan = value.storeReadablePlan;
      this._suspend = value.suspend;
      this._targets = value.targets;
      this._tfstate.internalValue = value.tfstate;
      this._values = value.values;
      this._vars.internalValue = value.vars;
      this._varsFrom.internalValue = value.varsFrom;
      this._webhooks.internalValue = value.webhooks;
      this._workspace = value.workspace;
      this._writeOutputsToSecret.internalValue = value.writeOutputsToSecret;
    }
  }

  // always_cleanup_runner_pod - computed: false, optional: true, required: false
  private _alwaysCleanupRunnerPod?: boolean | cdktf.IResolvable; 
  public get alwaysCleanupRunnerPod() {
    return this.getBooleanAttribute('always_cleanup_runner_pod');
  }
  public set alwaysCleanupRunnerPod(value: boolean | cdktf.IResolvable) {
    this._alwaysCleanupRunnerPod = value;
  }
  public resetAlwaysCleanupRunnerPod() {
    this._alwaysCleanupRunnerPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCleanupRunnerPodInput() {
    return this._alwaysCleanupRunnerPod;
  }

  // approve_plan - computed: false, optional: true, required: false
  private _approvePlan?: string; 
  public get approvePlan() {
    return this.getStringAttribute('approve_plan');
  }
  public set approvePlan(value: string) {
    this._approvePlan = value;
  }
  public resetApprovePlan() {
    this._approvePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvePlanInput() {
    return this._approvePlan;
  }

  // backend_config - computed: false, optional: true, required: false
  private _backendConfig = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfig) {
    this._backendConfig.internalValue = value;
  }
  public resetBackendConfig() {
    this._backendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigInput() {
    return this._backendConfig.internalValue;
  }

  // backend_configs_from - computed: false, optional: true, required: false
  private _backendConfigsFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFromList(this, "backend_configs_from", false);
  public get backendConfigsFrom() {
    return this._backendConfigsFrom;
  }
  public putBackendConfigsFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecBackendConfigsFrom[] | cdktf.IResolvable) {
    this._backendConfigsFrom.internalValue = value;
  }
  public resetBackendConfigsFrom() {
    this._backendConfigsFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigsFromInput() {
    return this._backendConfigsFrom.internalValue;
  }

  // break_the_glass - computed: false, optional: true, required: false
  private _breakTheGlass?: boolean | cdktf.IResolvable; 
  public get breakTheGlass() {
    return this.getBooleanAttribute('break_the_glass');
  }
  public set breakTheGlass(value: boolean | cdktf.IResolvable) {
    this._breakTheGlass = value;
  }
  public resetBreakTheGlass() {
    this._breakTheGlass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakTheGlassInput() {
    return this._breakTheGlass;
  }

  // cli_config_secret_ref - computed: false, optional: true, required: false
  private _cliConfigSecretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRefOutputReference(this, "cli_config_secret_ref");
  public get cliConfigSecretRef() {
    return this._cliConfigSecretRef;
  }
  public putCliConfigSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCliConfigSecretRef) {
    this._cliConfigSecretRef.internalValue = value;
  }
  public resetCliConfigSecretRef() {
    this._cliConfigSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConfigSecretRefInput() {
    return this._cliConfigSecretRef.internalValue;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // destroy - computed: false, optional: true, required: false
  private _destroy?: boolean | cdktf.IResolvable; 
  public get destroy() {
    return this.getBooleanAttribute('destroy');
  }
  public set destroy(value: boolean | cdktf.IResolvable) {
    this._destroy = value;
  }
  public resetDestroy() {
    this._destroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyInput() {
    return this._destroy;
  }

  // destroy_resources_on_deletion - computed: false, optional: true, required: false
  private _destroyResourcesOnDeletion?: boolean | cdktf.IResolvable; 
  public get destroyResourcesOnDeletion() {
    return this.getBooleanAttribute('destroy_resources_on_deletion');
  }
  public set destroyResourcesOnDeletion(value: boolean | cdktf.IResolvable) {
    this._destroyResourcesOnDeletion = value;
  }
  public resetDestroyResourcesOnDeletion() {
    this._destroyResourcesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyResourcesOnDeletionInput() {
    return this._destroyResourcesOnDeletion;
  }

  // disable_drift_detection - computed: false, optional: true, required: false
  private _disableDriftDetection?: boolean | cdktf.IResolvable; 
  public get disableDriftDetection() {
    return this.getBooleanAttribute('disable_drift_detection');
  }
  public set disableDriftDetection(value: boolean | cdktf.IResolvable) {
    this._disableDriftDetection = value;
  }
  public resetDisableDriftDetection() {
    this._disableDriftDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDriftDetectionInput() {
    return this._disableDriftDetection;
  }

  // enable_inventory - computed: false, optional: true, required: false
  private _enableInventory?: boolean | cdktf.IResolvable; 
  public get enableInventory() {
    return this.getBooleanAttribute('enable_inventory');
  }
  public set enableInventory(value: boolean | cdktf.IResolvable) {
    this._enableInventory = value;
  }
  public resetEnableInventory() {
    this._enableInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInventoryInput() {
    return this._enableInventory;
  }

  // enterprise - computed: false, optional: true, required: false
  private _enterprise?: { [key: string]: string }; 
  public get enterprise() {
    return this.getStringMapAttribute('enterprise');
  }
  public set enterprise(value: { [key: string]: string }) {
    this._enterprise = value;
  }
  public resetEnterprise() {
    this._enterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseInput() {
    return this._enterprise;
  }

  // file_mappings - computed: false, optional: true, required: false
  private _fileMappings = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappingsList(this, "file_mappings", false);
  public get fileMappings() {
    return this._fileMappings;
  }
  public putFileMappings(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecFileMappings[] | cdktf.IResolvable) {
    this._fileMappings.internalValue = value;
  }
  public resetFileMappings() {
    this._fileMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMappingsInput() {
    return this._fileMappings.internalValue;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
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

  // read_inputs_from_secrets - computed: false, optional: true, required: false
  private _readInputsFromSecrets = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecretsList(this, "read_inputs_from_secrets", false);
  public get readInputsFromSecrets() {
    return this._readInputsFromSecrets;
  }
  public putReadInputsFromSecrets(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecReadInputsFromSecrets[] | cdktf.IResolvable) {
    this._readInputsFromSecrets.internalValue = value;
  }
  public resetReadInputsFromSecrets() {
    this._readInputsFromSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInputsFromSecretsInput() {
    return this._readInputsFromSecrets.internalValue;
  }

  // refresh_before_apply - computed: false, optional: true, required: false
  private _refreshBeforeApply?: boolean | cdktf.IResolvable; 
  public get refreshBeforeApply() {
    return this.getBooleanAttribute('refresh_before_apply');
  }
  public set refreshBeforeApply(value: boolean | cdktf.IResolvable) {
    this._refreshBeforeApply = value;
  }
  public resetRefreshBeforeApply() {
    this._refreshBeforeApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshBeforeApplyInput() {
    return this._refreshBeforeApply;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // runner_pod_template - computed: false, optional: true, required: false
  private _runnerPodTemplate = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplateOutputReference(this, "runner_pod_template");
  public get runnerPodTemplate() {
    return this._runnerPodTemplate;
  }
  public putRunnerPodTemplate(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecRunnerPodTemplate) {
    this._runnerPodTemplate.internalValue = value;
  }
  public resetRunnerPodTemplate() {
    this._runnerPodTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerPodTemplateInput() {
    return this._runnerPodTemplate.internalValue;
  }

  // runner_termination_grace_period_seconds - computed: false, optional: true, required: false
  private _runnerTerminationGracePeriodSeconds?: number; 
  public get runnerTerminationGracePeriodSeconds() {
    return this.getNumberAttribute('runner_termination_grace_period_seconds');
  }
  public set runnerTerminationGracePeriodSeconds(value: number) {
    this._runnerTerminationGracePeriodSeconds = value;
  }
  public resetRunnerTerminationGracePeriodSeconds() {
    this._runnerTerminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerTerminationGracePeriodSecondsInput() {
    return this._runnerTerminationGracePeriodSeconds;
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

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }

  // store_readable_plan - computed: false, optional: true, required: false
  private _storeReadablePlan?: string; 
  public get storeReadablePlan() {
    return this.getStringAttribute('store_readable_plan');
  }
  public set storeReadablePlan(value: string) {
    this._storeReadablePlan = value;
  }
  public resetStoreReadablePlan() {
    this._storeReadablePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeReadablePlanInput() {
    return this._storeReadablePlan;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // tfstate - computed: false, optional: true, required: false
  private _tfstate = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstateOutputReference(this, "tfstate");
  public get tfstate() {
    return this._tfstate;
  }
  public putTfstate(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecTfstate) {
    this._tfstate.internalValue = value;
  }
  public resetTfstate() {
    this._tfstate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfstateInput() {
    return this._tfstate.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // vars - computed: false, optional: true, required: false
  private _vars = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsList(this, "vars", false);
  public get vars() {
    return this._vars;
  }
  public putVars(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVars[] | cdktf.IResolvable) {
    this._vars.internalValue = value;
  }
  public resetVars() {
    this._vars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars.internalValue;
  }

  // vars_from - computed: false, optional: true, required: false
  private _varsFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFromList(this, "vars_from", false);
  public get varsFrom() {
    return this._varsFrom;
  }
  public putVarsFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecVarsFrom[] | cdktf.IResolvable) {
    this._varsFrom.internalValue = value;
  }
  public resetVarsFrom() {
    this._varsFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsFromInput() {
    return this._varsFrom.internalValue;
  }

  // webhooks - computed: false, optional: true, required: false
  private _webhooks = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWebhooks[] | cdktf.IResolvable) {
    this._webhooks.internalValue = value;
  }
  public resetWebhooks() {
    this._webhooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksInput() {
    return this._webhooks.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // write_outputs_to_secret - computed: false, optional: true, required: false
  private _writeOutputsToSecret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecretOutputReference(this, "write_outputs_to_secret");
  public get writeOutputsToSecret() {
    return this._writeOutputsToSecret;
  }
  public putWriteOutputsToSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha1ManifestSpecWriteOutputsToSecret) {
    this._writeOutputsToSecret.internalValue = value;
  }
  public resetWriteOutputsToSecret() {
    this._writeOutputsToSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOutputsToSecretInput() {
    return this._writeOutputsToSecret.internalValue;
  }
}
