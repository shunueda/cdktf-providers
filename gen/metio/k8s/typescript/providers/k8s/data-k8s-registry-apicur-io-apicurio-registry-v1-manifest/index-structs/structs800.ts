import * as cdktf from 'cdktf';
import { DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRef,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundle,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMap,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStore,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDisk,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFile,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfs,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinder,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMap,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsi,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApi,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDir,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeral,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFc,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolume,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlocker,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDisk,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepo,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfs,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPath,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsi,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfs,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaim,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDisk,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolume,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainers,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliases,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecrets,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainers,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOs,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGates,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContext,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerations,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraints,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsList } from './structs400'
import { DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinity,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainers,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfig,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadata,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinity,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecrets,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsList,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResources,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadata,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataOutputReference,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfiguration,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationToTerraform,
dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationToHclTerraform,
DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationOutputReference } from './structs0'
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#field_ref DataK8SRegistryApicurIoApicurioRegistryV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#resource_field_ref DataK8SRegistryApicurIoApicurioRegistryV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#items DataK8SRegistryApicurIoApicurioRegistryV1Manifest#items}
  */
  readonly items?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#key DataK8SRegistryApicurIoApicurioRegistryV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#items DataK8SRegistryApicurIoApicurioRegistryV1Manifest#items}
  */
  readonly items?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#optional DataK8SRegistryApicurIoApicurioRegistryV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#audience DataK8SRegistryApicurIoApicurioRegistryV1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#expiration_seconds DataK8SRegistryApicurIoApicurioRegistryV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#cluster_trust_bundle DataK8SRegistryApicurIoApicurioRegistryV1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#config_map DataK8SRegistryApicurIoApicurioRegistryV1Manifest#config_map}
  */
  readonly configMap?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#downward_api DataK8SRegistryApicurIoApicurioRegistryV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret}
  */
  readonly secret?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#service_account_token DataK8SRegistryApicurIoApicurioRegistryV1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#default_mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#sources DataK8SRegistryApicurIoApicurioRegistryV1Manifest#sources}
  */
  readonly sources?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#group DataK8SRegistryApicurIoApicurioRegistryV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#read_only DataK8SRegistryApicurIoApicurioRegistryV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#registry DataK8SRegistryApicurIoApicurioRegistryV1Manifest#registry}
  */
  readonly registry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#tenant DataK8SRegistryApicurIoApicurioRegistryV1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#user DataK8SRegistryApicurIoApicurioRegistryV1Manifest#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volume DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#fs_type DataK8SRegistryApicurIoApicurioRegistryV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#image DataK8SRegistryApicurIoApicurioRegistryV1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#keyring DataK8SRegistryApicurIoApicurioRegistryV1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#monitors DataK8SRegistryApicurIoApicurioRegistryV1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#pool DataK8SRegistryApicurIoApicurioRegistryV1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#read_only DataK8SRegistryApicurIoApicurioRegistryV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret_ref DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#user DataK8SRegistryApicurIoApicurioRegistryV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdSecretRef) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#fs_type DataK8SRegistryApicurIoApicurioRegistryV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#gateway DataK8SRegistryApicurIoApicurioRegistryV1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#protection_domain DataK8SRegistryApicurIoApicurioRegistryV1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#read_only DataK8SRegistryApicurIoApicurioRegistryV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret_ref DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#ssl_enabled DataK8SRegistryApicurIoApicurioRegistryV1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#storage_mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#storage_pool DataK8SRegistryApicurIoApicurioRegistryV1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#system DataK8SRegistryApicurIoApicurioRegistryV1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volume_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#key DataK8SRegistryApicurIoApicurioRegistryV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#default_mode DataK8SRegistryApicurIoApicurioRegistryV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#items DataK8SRegistryApicurIoApicurioRegistryV1Manifest#items}
  */
  readonly items?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#optional DataK8SRegistryApicurIoApicurioRegistryV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsList",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#fs_type DataK8SRegistryApicurIoApicurioRegistryV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#read_only DataK8SRegistryApicurIoApicurioRegistryV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret_ref DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volume_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volume_namespace DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosSecretRef) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#fs_type DataK8SRegistryApicurIoApicurioRegistryV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#storage_policy_id DataK8SRegistryApicurIoApicurioRegistryV1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#storage_policy_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volume_path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#aws_elastic_block_store DataK8SRegistryApicurIoApicurioRegistryV1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#azure_disk DataK8SRegistryApicurIoApicurioRegistryV1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#azure_file DataK8SRegistryApicurIoApicurioRegistryV1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#cephfs DataK8SRegistryApicurIoApicurioRegistryV1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#cinder DataK8SRegistryApicurIoApicurioRegistryV1Manifest#cinder}
  */
  readonly cinder?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#config_map DataK8SRegistryApicurIoApicurioRegistryV1Manifest#config_map}
  */
  readonly configMap?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#csi DataK8SRegistryApicurIoApicurioRegistryV1Manifest#csi}
  */
  readonly csi?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#downward_api DataK8SRegistryApicurIoApicurioRegistryV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#empty_dir DataK8SRegistryApicurIoApicurioRegistryV1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#ephemeral DataK8SRegistryApicurIoApicurioRegistryV1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#fc DataK8SRegistryApicurIoApicurioRegistryV1Manifest#fc}
  */
  readonly fc?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#flex_volume DataK8SRegistryApicurIoApicurioRegistryV1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#flocker DataK8SRegistryApicurIoApicurioRegistryV1Manifest#flocker}
  */
  readonly flocker?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#gce_persistent_disk DataK8SRegistryApicurIoApicurioRegistryV1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#git_repo DataK8SRegistryApicurIoApicurioRegistryV1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#glusterfs DataK8SRegistryApicurIoApicurioRegistryV1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host_path DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host_path}
  */
  readonly hostPath?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#iscsi DataK8SRegistryApicurIoApicurioRegistryV1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#nfs DataK8SRegistryApicurIoApicurioRegistryV1Manifest#nfs}
  */
  readonly nfs?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#persistent_volume_claim DataK8SRegistryApicurIoApicurioRegistryV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#photon_persistent_disk DataK8SRegistryApicurIoApicurioRegistryV1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#portworx_volume DataK8SRegistryApicurIoApicurioRegistryV1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#projected DataK8SRegistryApicurIoApicurioRegistryV1Manifest#projected}
  */
  readonly projected?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#quobyte DataK8SRegistryApicurIoApicurioRegistryV1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#rbd DataK8SRegistryApicurIoApicurioRegistryV1Manifest#rbd}
  */
  readonly rbd?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#scale_io DataK8SRegistryApicurIoApicurioRegistryV1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#secret DataK8SRegistryApicurIoApicurioRegistryV1Manifest#secret}
  */
  readonly secret?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#storageos DataK8SRegistryApicurIoApicurioRegistryV1Manifest#storageos}
  */
  readonly storageos?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#vsphere_volume DataK8SRegistryApicurIoApicurioRegistryV1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCephfs) {
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
  private _cinder = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCinder) {
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
  private _configMap = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesConfigMap) {
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
  private _csi = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesEphemeral) {
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
  private _fc = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFc) {
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
  private _flexVolume = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesIscsi) {
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
  private _nfs = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesProjected) {
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
  private _quobyte = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesScaleIo) {
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
  private _secret = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesSecret) {
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
  private _storageos = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesVsphereVolume) {
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#active_deadline_seconds DataK8SRegistryApicurIoApicurioRegistryV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#affinity DataK8SRegistryApicurIoApicurioRegistryV1Manifest#affinity}
  */
  readonly affinity?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#automount_service_account_token DataK8SRegistryApicurIoApicurioRegistryV1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#containers DataK8SRegistryApicurIoApicurioRegistryV1Manifest#containers}
  */
  readonly containers?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#dns_config DataK8SRegistryApicurIoApicurioRegistryV1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#dns_policy DataK8SRegistryApicurIoApicurioRegistryV1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#enable_service_links DataK8SRegistryApicurIoApicurioRegistryV1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#ephemeral_containers DataK8SRegistryApicurIoApicurioRegistryV1Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host_aliases DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host_ipc DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host_network DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host_pid DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#hostname DataK8SRegistryApicurIoApicurioRegistryV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#image_pull_secrets DataK8SRegistryApicurIoApicurioRegistryV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#init_containers DataK8SRegistryApicurIoApicurioRegistryV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#node_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#node_selector DataK8SRegistryApicurIoApicurioRegistryV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#os DataK8SRegistryApicurIoApicurioRegistryV1Manifest#os}
  */
  readonly os?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#overhead DataK8SRegistryApicurIoApicurioRegistryV1Manifest#overhead}
  */
  readonly overhead?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#preemption_policy DataK8SRegistryApicurIoApicurioRegistryV1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#priority DataK8SRegistryApicurIoApicurioRegistryV1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#priority_class_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#readiness_gates DataK8SRegistryApicurIoApicurioRegistryV1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#restart_policy DataK8SRegistryApicurIoApicurioRegistryV1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#runtime_class_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#scheduler_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#security_context DataK8SRegistryApicurIoApicurioRegistryV1Manifest#security_context}
  */
  readonly securityContext?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#service_account DataK8SRegistryApicurIoApicurioRegistryV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#service_account_name DataK8SRegistryApicurIoApicurioRegistryV1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#set_hostname_as_fqdn DataK8SRegistryApicurIoApicurioRegistryV1Manifest#set_hostname_as_fqdn}
  */
  readonly setHostnameAsFqdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#share_process_namespace DataK8SRegistryApicurIoApicurioRegistryV1Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#subdomain DataK8SRegistryApicurIoApicurioRegistryV1Manifest#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#termination_grace_period_seconds DataK8SRegistryApicurIoApicurioRegistryV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#tolerations DataK8SRegistryApicurIoApicurioRegistryV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#topology_spread_constraints DataK8SRegistryApicurIoApicurioRegistryV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#volumes DataK8SRegistryApicurIoApicurioRegistryV1Manifest#volumes}
  */
  readonly volumes?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    affinity: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityToTerraform(struct!.affinity),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    containers: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    ephemeral_containers: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    host_aliases: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_pull_secrets: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    os: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsToTerraform(struct!.os),
    overhead: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overhead),
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    security_context: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    set_hostname_as_fqdn: cdktf.booleanToTerraform(struct!.setHostnameAsFqdn),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec | cdktf.IResolvable): any {
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
    affinity: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinity",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersList",
    },
    dns_config: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ephemeral_containers: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesList",
    },
    host_ipc: {
      value: cdktf.booleanToHclTerraform(struct!.hostIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_pid: {
      value: cdktf.booleanToHclTerraform(struct!.hostPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersList",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
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
    os: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOs",
    },
    overhead: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overhead),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preemption_policy: {
      value: cdktf.stringToHclTerraform(struct!.preemptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesList",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContext",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_hostname_as_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.setHostnameAsFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_process_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
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
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._ephemeralContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainers = this._ephemeralContainers?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    if (this._overhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.overhead = this._overhead;
    }
    if (this._preemptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionPolicy = this._preemptionPolicy;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._setHostnameAsFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHostnameAsFqdn = this._setHostnameAsFqdn;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
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
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._affinity.internalValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._containers.internalValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enableServiceLinks = undefined;
      this._ephemeralContainers.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._hostname = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._os.internalValue = undefined;
      this._overhead = undefined;
      this._preemptionPolicy = undefined;
      this._priority = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._restartPolicy = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountName = undefined;
      this._setHostnameAsFqdn = undefined;
      this._shareProcessNamespace = undefined;
      this._subdomain = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._affinity.internalValue = value.affinity;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._containers.internalValue = value.containers;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enableServiceLinks = value.enableServiceLinks;
      this._ephemeralContainers.internalValue = value.ephemeralContainers;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._hostname = value.hostname;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._os.internalValue = value.os;
      this._overhead = value.overhead;
      this._preemptionPolicy = value.preemptionPolicy;
      this._priority = value.priority;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._restartPolicy = value.restartPolicy;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountName = value.serviceAccountName;
      this._setHostnameAsFqdn = value.setHostnameAsFqdn;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._subdomain = value.subdomain;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumes.internalValue = value.volumes;
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

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecAffinity) {
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

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecContainers[] | cdktf.IResolvable) {
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
  private _dnsConfig = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecDnsConfig) {
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

  // ephemeral_containers - computed: false, optional: true, required: false
  private _ephemeralContainers = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecEphemeralContainers[] | cdktf.IResolvable) {
    this._ephemeralContainers.internalValue = value;
  }
  public resetEphemeralContainers() {
    this._ephemeralContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainersInput() {
    return this._ephemeralContainers.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
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

  // os - computed: false, optional: true, required: false
  private _os = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // overhead - computed: false, optional: true, required: false
  private _overhead?: { [key: string]: string }; 
  public get overhead() {
    return this.getStringMapAttribute('overhead');
  }
  public set overhead(value: { [key: string]: string }) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
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

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // set_hostname_as_fqdn - computed: false, optional: true, required: false
  private _setHostnameAsFqdn?: boolean | cdktf.IResolvable; 
  public get setHostnameAsFqdn() {
    return this.getBooleanAttribute('set_hostname_as_fqdn');
  }
  public set setHostnameAsFqdn(value: boolean | cdktf.IResolvable) {
    this._setHostnameAsFqdn = value;
  }
  public resetSetHostnameAsFqdn() {
    this._setHostnameAsFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHostnameAsFqdnInput() {
    return this._setHostnameAsFqdn;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
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
  private _tolerations = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#metadata DataK8SRegistryApicurIoApicurioRegistryV1Manifest#metadata}
  */
  readonly metadata?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#spec DataK8SRegistryApicurIoApicurioRegistryV1Manifest#spec}
  */
  readonly spec?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataToTerraform(struct!.metadata),
    spec: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecToTerraform(struct!.spec),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadata",
    },
    spec: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewMetadata) {
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
  private _spec = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewSpec) {
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
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#effect DataK8SRegistryApicurIoApicurioRegistryV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#key DataK8SRegistryApicurIoApicurioRegistryV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#operator DataK8SRegistryApicurIoApicurioRegistryV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#toleration_seconds DataK8SRegistryApicurIoApicurioRegistryV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#value DataK8SRegistryApicurIoApicurioRegistryV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsOutputReference {
    return new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment {
  /**
  * Affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#affinity DataK8SRegistryApicurIoApicurioRegistryV1Manifest#affinity}
  */
  readonly affinity?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinity;
  /**
  * Hostname: Apicurio Registry application hostname (part of the URL without the protocol and path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#host DataK8SRegistryApicurIoApicurioRegistryV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Apicurio Registry image: Replaces the default Apicurio Registry application image. Overrides the values in the REGISTRY_IMAGE_MEM, REGISTRY_IMAGE_KAFKASQL and REGISTRY_IMAGE_SQL Operator environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#image DataK8SRegistryApicurIoApicurioRegistryV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Apicurio Registry image pull secrets: List of Secrets to use when pulling the Apicurio Registry image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#image_pull_secrets DataK8SRegistryApicurIoApicurioRegistryV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Apicurio Registry managed resources: Configure how the Operator manages Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#managed_resources DataK8SRegistryApicurIoApicurioRegistryV1Manifest#managed_resources}
  */
  readonly managedResources?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResources;
  /**
  * Metadata of the Apicurio Registry pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#metadata DataK8SRegistryApicurIoApicurioRegistryV1Manifest#metadata}
  */
  readonly metadata?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#pod_template_spec_preview DataK8SRegistryApicurIoApicurioRegistryV1Manifest#pod_template_spec_preview}
  */
  readonly podTemplateSpecPreview?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview;
  /**
  * Replicas: The required number of Apicurio Registry pods. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#replicas DataK8SRegistryApicurIoApicurioRegistryV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#tolerations DataK8SRegistryApicurIoApicurioRegistryV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityToTerraform(struct!.affinity),
    host: cdktf.stringToTerraform(struct!.host),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    managed_resources: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesToTerraform(struct!.managedResources),
    metadata: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataToTerraform(struct!.metadata),
    pod_template_spec_preview: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewToTerraform(struct!.podTemplateSpecPreview),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinity",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsList",
    },
    managed_resources: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesToHclTerraform(struct!.managedResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResources",
    },
    metadata: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadata",
    },
    pod_template_spec_preview: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewToHclTerraform(struct!.podTemplateSpecPreview),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._managedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedResources = this._managedResources?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._podTemplateSpecPreview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplateSpecPreview = this._podTemplateSpecPreview?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._host = undefined;
      this._image = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._managedResources.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._podTemplateSpecPreview.internalValue = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._host = value.host;
      this._image = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._managedResources.internalValue = value.managedResources;
      this._metadata.internalValue = value.metadata;
      this._podTemplateSpecPreview.internalValue = value.podTemplateSpecPreview;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
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

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // managed_resources - computed: false, optional: true, required: false
  private _managedResources = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResourcesOutputReference(this, "managed_resources");
  public get managedResources() {
    return this._managedResources;
  }
  public putManagedResources(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentManagedResources) {
    this._managedResources.internalValue = value;
  }
  public resetManagedResources() {
    this._managedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourcesInput() {
    return this._managedResources.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // pod_template_spec_preview - computed: false, optional: true, required: false
  private _podTemplateSpecPreview = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreviewOutputReference(this, "pod_template_spec_preview");
  public get podTemplateSpecPreview() {
    return this._podTemplateSpecPreview;
  }
  public putPodTemplateSpecPreview(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentPodTemplateSpecPreview) {
    this._podTemplateSpecPreview.internalValue = value;
  }
  public resetPodTemplateSpecPreview() {
    this._podTemplateSpecPreview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateSpecPreviewInput() {
    return this._podTemplateSpecPreview.internalValue;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpec {
  /**
  * Apicurio Registry application configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#configuration DataK8SRegistryApicurIoApicurioRegistryV1Manifest#configuration}
  */
  readonly configuration?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfiguration;
  /**
  * Apicurio Registry deployment configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/registry_apicur_io_apicurio_registry_v1_manifest#deployment DataK8SRegistryApicurIoApicurioRegistryV1Manifest#deployment}
  */
  readonly deployment?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment;
}

export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecToTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationToTerraform(struct!.configuration),
    deployment: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentToTerraform(struct!.deployment),
  }
}


export function dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecToHclTerraform(struct?: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfiguration",
    },
    deployment: {
      value: dataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._deployment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._deployment.internalValue = value.deployment;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SRegistryApicurIoApicurioRegistryV1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }
}
