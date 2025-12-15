import * as cdktf from 'cdktf';
import { DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStore,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDisk,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFile,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinder,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMap,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsi,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApi,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDir,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeral,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFc,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolume,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlocker,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDisk,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepo,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPath,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImage,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsi,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaim,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDisk,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolume,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainers,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlp,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicy,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadata,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWrite,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResources,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClasses,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContext,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelector,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorage,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerations,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraints,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfig,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdb,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMounts,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsList } from './structs400'
import { DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinity,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfig,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMs,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainers,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfig,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigOutputReference,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcement,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliases,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesList,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecrets,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsToTerraform,
dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsList } from './structs0'
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#items DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#path DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#items DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#audience DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#expiration_seconds DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#path DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cluster_trust_bundle DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#downward_api DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#service_account_token DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#default_mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections. Each entry in this list handles one source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#sources DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#group DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#read_only DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#registry DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#tenant DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#user DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#fs_type DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#image DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#keyring DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#monitors DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#pool DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#read_only DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret_ref DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#user DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef",
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdSecretRef) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#fs_type DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#gateway DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#protection_domain DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#read_only DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret_ref DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#ssl_enabled DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storage_mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storage_pool DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#system DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef",
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#path DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#default_mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#items DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsList",
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#fs_type DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#read_only DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret_ref DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume_namespace DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef",
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosSecretRef) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#fs_type DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storage_policy_id DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storage_policy_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume_path DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#aws_elastic_block_store DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#azure_disk DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#azure_file DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cephfs DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cinder DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#csi DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#downward_api DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#empty_dir DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#ephemeral DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#fc DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#flex_volume DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#flocker DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#gce_persistent_disk DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#git_repo DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#glusterfs DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#host_path DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPath;
  /**
  * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided: - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#image DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImage;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#iscsi DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#nfs DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#persistent_volume_claim DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#photon_persistent_disk DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#portworx_volume DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#projected DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#quobyte DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#rbd DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scale_io DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storageos DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#vsphere_volume DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathToTerraform(struct!.hostPath),
    image: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageToTerraform(struct!.image),
    iscsi: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPath",
    },
    image: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImage",
    },
    iscsi: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined {
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
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
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
      this._image.internalValue = undefined;
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
      this._image.internalValue = value.image;
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
  private _awsElasticBlockStore = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCephfs) {
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
  private _cinder = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCinder) {
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
  private _configMap = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesConfigMap) {
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
  private _csi = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesEphemeral) {
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
  private _fc = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFc) {
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
  private _flexVolume = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesIscsi) {
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
  private _nfs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesProjected) {
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
  private _quobyte = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesScaleIo) {
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
  private _secret = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesSecret) {
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
  private _storageos = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesVsphereVolume) {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders {
  /**
  * Set the Content-Security-Policy header to HTTP responses. Unset if blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#content_security_policy DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#content_security_policy}
  */
  readonly contentSecurityPolicy?: string;
  /**
  * Set the Strict-Transport-Security header to HTTP responses. Unset if blank. Please make sure that you use this with care as this header might force browsers to load Prometheus and the other applications hosted on the same domain and subdomains over HTTPS. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#strict_transport_security DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#strict_transport_security}
  */
  readonly strictTransportSecurity?: string;
  /**
  * Set the X-Content-Type-Options header to HTTP responses. Unset if blank. Accepted value is nosniff. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#x_content_type_options DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#x_content_type_options}
  */
  readonly xContentTypeOptions?: string;
  /**
  * Set the X-Frame-Options header to HTTP responses. Unset if blank. Accepted values are deny and sameorigin. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#x_frame_options DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#x_frame_options}
  */
  readonly xFrameOptions?: string;
  /**
  * Set the X-XSS-Protection header to all responses. Unset if blank. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#x_xss_protection DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#x_xss_protection}
  */
  readonly xXssProtection?: string;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    strict_transport_security: cdktf.stringToTerraform(struct!.strictTransportSecurity),
    x_content_type_options: cdktf.stringToTerraform(struct!.xContentTypeOptions),
    x_frame_options: cdktf.stringToTerraform(struct!.xFrameOptions),
    x_xss_protection: cdktf.stringToTerraform(struct!.xXssProtection),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_transport_security: {
      value: cdktf.stringToHclTerraform(struct!.strictTransportSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_content_type_options: {
      value: cdktf.stringToHclTerraform(struct!.xContentTypeOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_frame_options: {
      value: cdktf.stringToHclTerraform(struct!.xFrameOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_xss_protection: {
      value: cdktf.stringToHclTerraform(struct!.xXssProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._strictTransportSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity;
    }
    if (this._xContentTypeOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.xContentTypeOptions = this._xContentTypeOptions;
    }
    if (this._xFrameOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFrameOptions = this._xFrameOptions;
    }
    if (this._xXssProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.xXssProtection = this._xXssProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = undefined;
      this._strictTransportSecurity = undefined;
      this._xContentTypeOptions = undefined;
      this._xFrameOptions = undefined;
      this._xXssProtection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._strictTransportSecurity = value.strictTransportSecurity;
      this._xContentTypeOptions = value.xContentTypeOptions;
      this._xFrameOptions = value.xFrameOptions;
      this._xXssProtection = value.xXssProtection;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity?: string; 
  public get strictTransportSecurity() {
    return this.getStringAttribute('strict_transport_security');
  }
  public set strictTransportSecurity(value: string) {
    this._strictTransportSecurity = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity;
  }

  // x_content_type_options - computed: false, optional: true, required: false
  private _xContentTypeOptions?: string; 
  public get xContentTypeOptions() {
    return this.getStringAttribute('x_content_type_options');
  }
  public set xContentTypeOptions(value: string) {
    this._xContentTypeOptions = value;
  }
  public resetXContentTypeOptions() {
    this._xContentTypeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xContentTypeOptionsInput() {
    return this._xContentTypeOptions;
  }

  // x_frame_options - computed: false, optional: true, required: false
  private _xFrameOptions?: string; 
  public get xFrameOptions() {
    return this.getStringAttribute('x_frame_options');
  }
  public set xFrameOptions(value: string) {
    this._xFrameOptions = value;
  }
  public resetXFrameOptions() {
    this._xFrameOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFrameOptionsInput() {
    return this._xFrameOptions;
  }

  // x_xss_protection - computed: false, optional: true, required: false
  private _xXssProtection?: string; 
  public get xXssProtection() {
    return this.getStringAttribute('x_xss_protection');
  }
  public set xXssProtection(value: string) {
    this._xXssProtection = value;
  }
  public resetXXssProtection() {
    this._xXssProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xXssProtectionInput() {
    return this._xXssProtection;
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig {
  /**
  * List of headers that can be added to HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#headers DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders;
  /**
  * Enable HTTP/2 support. Note that HTTP/2 is only supported with TLS. When TLSConfig is not configured, HTTP/2 will be disabled. Whenever the value of the field changes, a rolling update will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#http2 DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersToTerraform(struct!.headers),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._http2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._http2 = value.http2;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
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
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertSecret) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secret DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
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
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaSecret) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#optional DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig {
  /**
  * Contains the TLS certificate for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cert DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert;
  /**
  * Path to the TLS certificate file in the Prometheus container for the server. Mutually exclusive with 'cert'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cert_file DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * List of supported cipher suites for TLS versions up to TLS 1.2. If empty, Go default cipher suites are used. Available cipher suites are documented in the go documentation: https://golang.org/pkg/crypto/tls/#pkg-constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#cipher_suites DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Server policy for client authentication. Maps to ClientAuth Policies. For more detail on clientAuth options: https://golang.org/pkg/crypto/tls/#ClientAuthType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#client_auth_type DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#client_auth_type}
  */
  readonly clientAuthType?: string;
  /**
  * Contains the CA certificate for client certificate authentication to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#client_ca DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#client_ca}
  */
  readonly clientCa?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa;
  /**
  * Path to the CA certificate file for client certificate authentication to the server. Mutually exclusive with 'client_ca'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#client_ca_file DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#client_ca_file}
  */
  readonly clientCaFile?: string;
  /**
  * Elliptic curves that will be used in an ECDHE handshake, in preference order. Available curves are documented in the go documentation: https://golang.org/pkg/crypto/tls/#CurveID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#curve_preferences DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#curve_preferences}
  */
  readonly curvePreferences?: string[];
  /**
  * Path to the TLS key file in the Prometheus container for the server. Mutually exclusive with 'keySecret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key_file DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Secret containing the TLS key for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret;
  /**
  * Maximum TLS version that is acceptable. Defaults to TLS13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum TLS version that is acceptable. Defaults to TLS12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Controls whether the server selects the client's most preferred cipher suite, or the server's most preferred cipher suite. If true then the server's preference, as expressed in the order of elements in cipherSuites, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#prefer_server_cipher_suites DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#prefer_server_cipher_suites}
  */
  readonly preferServerCipherSuites?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertToTerraform(struct!.cert),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    client_auth_type: cdktf.stringToTerraform(struct!.clientAuthType),
    client_ca: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaToTerraform(struct!.clientCa),
    client_ca_file: cdktf.stringToTerraform(struct!.clientCaFile),
    curve_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.curvePreferences),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    prefer_server_cipher_suites: cdktf.booleanToTerraform(struct!.preferServerCipherSuites),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaToHclTerraform(struct!.clientCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa",
    },
    client_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.clientCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curve_preferences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.curvePreferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_server_cipher_suites: {
      value: cdktf.booleanToHclTerraform(struct!.preferServerCipherSuites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._clientAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthType = this._clientAuthType;
    }
    if (this._clientCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCa = this._clientCa?.internalValue;
    }
    if (this._clientCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaFile = this._clientCaFile;
    }
    if (this._curvePreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.curvePreferences = this._curvePreferences;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._preferServerCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferServerCipherSuites = this._preferServerCipherSuites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._certFile = undefined;
      this._cipherSuites = undefined;
      this._clientAuthType = undefined;
      this._clientCa.internalValue = undefined;
      this._clientCaFile = undefined;
      this._curvePreferences = undefined;
      this._keyFile = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._preferServerCipherSuites = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._certFile = value.certFile;
      this._cipherSuites = value.cipherSuites;
      this._clientAuthType = value.clientAuthType;
      this._clientCa.internalValue = value.clientCa;
      this._clientCaFile = value.clientCaFile;
      this._curvePreferences = value.curvePreferences;
      this._keyFile = value.keyFile;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._preferServerCipherSuites = value.preferServerCipherSuites;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // client_auth_type - computed: false, optional: true, required: false
  private _clientAuthType?: string; 
  public get clientAuthType() {
    return this.getStringAttribute('client_auth_type');
  }
  public set clientAuthType(value: string) {
    this._clientAuthType = value;
  }
  public resetClientAuthType() {
    this._clientAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthTypeInput() {
    return this._clientAuthType;
  }

  // client_ca - computed: false, optional: true, required: false
  private _clientCa = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCaOutputReference(this, "client_ca");
  public get clientCa() {
    return this._clientCa;
  }
  public putClientCa(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigClientCa) {
    this._clientCa.internalValue = value;
  }
  public resetClientCa() {
    this._clientCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaInput() {
    return this._clientCa.internalValue;
  }

  // client_ca_file - computed: false, optional: true, required: false
  private _clientCaFile?: string; 
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }
  public set clientCaFile(value: string) {
    this._clientCaFile = value;
  }
  public resetClientCaFile() {
    this._clientCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaFileInput() {
    return this._clientCaFile;
  }

  // curve_preferences - computed: false, optional: true, required: false
  private _curvePreferences?: string[]; 
  public get curvePreferences() {
    return this.getListAttribute('curve_preferences');
  }
  public set curvePreferences(value: string[]) {
    this._curvePreferences = value;
  }
  public resetCurvePreferences() {
    this._curvePreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvePreferencesInput() {
    return this._curvePreferences;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // prefer_server_cipher_suites - computed: false, optional: true, required: false
  private _preferServerCipherSuites?: boolean | cdktf.IResolvable; 
  public get preferServerCipherSuites() {
    return this.getBooleanAttribute('prefer_server_cipher_suites');
  }
  public set preferServerCipherSuites(value: boolean | cdktf.IResolvable) {
    this._preferServerCipherSuites = value;
  }
  public resetPreferServerCipherSuites() {
    this._preferServerCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferServerCipherSuitesInput() {
    return this._preferServerCipherSuites;
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb {
  /**
  * Defines HTTP parameters for web server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#http_config DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#http_config}
  */
  readonly httpConfig?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig;
  /**
  * Defines the maximum number of simultaneous connections A zero value means that Prometheus doesn't accept any incoming connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#max_connections DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The prometheus web page title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#page_title DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#page_title}
  */
  readonly pageTitle?: string;
  /**
  * Defines the TLS parameters for HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_config: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigToTerraform(struct!.httpConfig),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    page_title: cdktf.stringToTerraform(struct!.pageTitle),
    tls_config: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_config: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_title: {
      value: cdktf.stringToHclTerraform(struct!.pageTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._pageTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageTitle = this._pageTitle;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpConfig.internalValue = undefined;
      this._maxConnections = undefined;
      this._pageTitle = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpConfig.internalValue = value.httpConfig;
      this._maxConnections = value.maxConnections;
      this._pageTitle = value.pageTitle;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // page_title - computed: false, optional: true, required: false
  private _pageTitle?: string; 
  public get pageTitle() {
    return this.getStringAttribute('page_title');
  }
  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public resetPageTitle() {
    this._pageTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTitleInput() {
    return this._pageTitle;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpec {
  /**
  * AdditionalArgs allows setting additional arguments for the 'prometheus' container. It is intended for e.g. activating hidden flags which are not supported by the dedicated configuration options yet. The arguments are passed as-is to the Prometheus container which may cause issues if they are invalid or not supported by the given Prometheus version. In case of an argument conflict (e.g. an argument which is already set by the operator itself) or when providing an invalid argument, the reconciliation will fail and an error will be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#additional_args DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#additional_args}
  */
  readonly additionalArgs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgs[] | cdktf.IResolvable;
  /**
  * AdditionalScrapeConfigs allows specifying a key of a Secret containing additional Prometheus scrape configurations. Scrape configurations specified are appended to the configurations generated by the Prometheus Operator. Job configurations specified must have the form as specified in the official Prometheus documentation: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config. As scrape configs are appended, the user is responsible to make sure it is valid. Note that using this feature may expose the possibility to break upgrades of Prometheus. It is advised to review Prometheus release notes to ensure that no incompatible scrape configs are going to break Prometheus after the upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#additional_scrape_configs DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#additional_scrape_configs}
  */
  readonly additionalScrapeConfigs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigs;
  /**
  * Defines the Pods' affinity scheduling rules if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#affinity DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinity;
  /**
  * APIServerConfig allows specifying a host and auth methods to access the Kuberntees API server. If null, Prometheus is assumed to run inside of the cluster: it will discover the API servers automatically and use the Pod's CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#apiserver_config DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#apiserver_config}
  */
  readonly apiserverConfig?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfig;
  /**
  * When true, ServiceMonitor, PodMonitor and Probe object are forbidden to reference arbitrary files on the file system of the 'prometheus' container. When a ServiceMonitor's endpoint specifies a 'bearerTokenFile' value (e.g. '/var/run/secrets/kubernetes.io/serviceaccount/token'), a malicious target can get access to the Prometheus service account's token in the Prometheus' scrape request. Setting 'spec.arbitraryFSAccessThroughSM' to 'true' would prevent the attack. Users should instead provide the credentials using the 'spec.bearerTokenSecret' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#arbitrary_fs_access_through_s_ms DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#arbitrary_fs_access_through_s_ms}
  */
  readonly arbitraryFsAccessThroughSMs?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMs;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in the pod. If the field isn't set, the operator mounts the service account token by default. **Warning:** be aware that by default, Prometheus requires the service account token for Kubernetes service discovery. It is possible to use strategic merge patch to project the service account token into the 'prometheus' container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#automount_service_account_token DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * BodySizeLimit defines per-scrape on response body size. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedBodySizeLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#body_size_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#body_size_limit}
  */
  readonly bodySizeLimit?: string;
  /**
  * ConfigMaps is a list of ConfigMaps in the same namespace as the Prometheus object, which shall be mounted into the Prometheus Pods. Each ConfigMap is added to the StatefulSet definition as a volume named 'configmap-<configmap-name>'. The ConfigMaps are mounted into /etc/prometheus/configmaps/<configmap-name> in the 'prometheus' container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#config_maps DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * Containers allows injecting additional containers or modifying operator generated containers. This can be used to allow adding an authentication proxy to the Pods or to change the behavior of an operator generated container. Containers described here modify an operator generated container if they share the same name and modifications are done via a strategic merge patch. The names of containers managed by the operator are: * 'prometheus' * 'config-reloader' * 'thanos-sidecar' Overriding containers is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#containers DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainers[] | cdktf.IResolvable;
  /**
  * Defines the DNS configuration for the pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#dns_config DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfig;
  /**
  * Defines the DNS policy for the pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#dns_policy DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Enable access to Prometheus feature flags. By default, no features are enabled. Enabling features which are disabled by default is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice. For more information see https://prometheus.io/docs/prometheus/latest/feature_flags/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enable_features DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enable_features}
  */
  readonly enableFeatures?: string[];
  /**
  * Enable Prometheus to be used as a receiver for the Prometheus remote write protocol. WARNING: This is not considered an efficient way of ingesting samples. Use it with caution for specific low-volume use cases. It is not suitable for replacing the ingestion via scraping and turning Prometheus into a push-based metrics collection system. For more information see https://prometheus.io/docs/prometheus/latest/querying/api/#remote-write-receiver It requires Prometheus >= v2.33.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enable_remote_write_receiver DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enable_remote_write_receiver}
  */
  readonly enableRemoteWriteReceiver?: boolean | cdktf.IResolvable;
  /**
  * When defined, enforcedBodySizeLimit specifies a global limit on the size of uncompressed response body that will be accepted by Prometheus. Targets responding with a body larger than this many bytes will cause the scrape to fail. It requires Prometheus >= v2.28.0. When both 'enforcedBodySizeLimit' and 'bodySizeLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined bodySizeLimit value will inherit the global bodySizeLimit value (Prometheus >= 2.45.0) or the enforcedBodySizeLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedBodySizeLimit' is greater than the 'bodySizeLimit', the 'bodySizeLimit' will be set to 'enforcedBodySizeLimit'. * Scrape objects with a bodySizeLimit value less than or equal to enforcedBodySizeLimit keep their specific value. * Scrape objects with a bodySizeLimit value greater than enforcedBodySizeLimit are set to enforcedBodySizeLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_body_size_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_body_size_limit}
  */
  readonly enforcedBodySizeLimit?: string;
  /**
  * When defined, enforcedKeepDroppedTargets specifies a global limit on the number of targets dropped by relabeling that will be kept in memory. The value overrides any 'spec.keepDroppedTargets' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.keepDroppedTargets' is greater than zero and less than 'spec.enforcedKeepDroppedTargets'. It requires Prometheus >= v2.47.0. When both 'enforcedKeepDroppedTargets' and 'keepDroppedTargets' are defined and greater than zero, the following rules apply: * Scrape objects without a defined keepDroppedTargets value will inherit the global keepDroppedTargets value (Prometheus >= 2.45.0) or the enforcedKeepDroppedTargets value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedKeepDroppedTargets' is greater than the 'keepDroppedTargets', the 'keepDroppedTargets' will be set to 'enforcedKeepDroppedTargets'. * Scrape objects with a keepDroppedTargets value less than or equal to enforcedKeepDroppedTargets keep their specific value. * Scrape objects with a keepDroppedTargets value greater than enforcedKeepDroppedTargets are set to enforcedKeepDroppedTargets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_keep_dropped_targets DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_keep_dropped_targets}
  */
  readonly enforcedKeepDroppedTargets?: number;
  /**
  * When defined, enforcedLabelLimit specifies a global limit on the number of labels per sample. The value overrides any 'spec.labelLimit' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.labelLimit' is greater than zero and less than 'spec.enforcedLabelLimit'. It requires Prometheus >= v2.27.0. When both 'enforcedLabelLimit' and 'labelLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined labelLimit value will inherit the global labelLimit value (Prometheus >= 2.45.0) or the enforcedLabelLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedLabelLimit' is greater than the 'labelLimit', the 'labelLimit' will be set to 'enforcedLabelLimit'. * Scrape objects with a labelLimit value less than or equal to enforcedLabelLimit keep their specific value. * Scrape objects with a labelLimit value greater than enforcedLabelLimit are set to enforcedLabelLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_label_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_label_limit}
  */
  readonly enforcedLabelLimit?: number;
  /**
  * When defined, enforcedLabelNameLengthLimit specifies a global limit on the length of labels name per sample. The value overrides any 'spec.labelNameLengthLimit' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.labelNameLengthLimit' is greater than zero and less than 'spec.enforcedLabelNameLengthLimit'. It requires Prometheus >= v2.27.0. When both 'enforcedLabelNameLengthLimit' and 'labelNameLengthLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined labelNameLengthLimit value will inherit the global labelNameLengthLimit value (Prometheus >= 2.45.0) or the enforcedLabelNameLengthLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedLabelNameLengthLimit' is greater than the 'labelNameLengthLimit', the 'labelNameLengthLimit' will be set to 'enforcedLabelNameLengthLimit'. * Scrape objects with a labelNameLengthLimit value less than or equal to enforcedLabelNameLengthLimit keep their specific value. * Scrape objects with a labelNameLengthLimit value greater than enforcedLabelNameLengthLimit are set to enforcedLabelNameLengthLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_label_name_length_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_label_name_length_limit}
  */
  readonly enforcedLabelNameLengthLimit?: number;
  /**
  * When not null, enforcedLabelValueLengthLimit defines a global limit on the length of labels value per sample. The value overrides any 'spec.labelValueLengthLimit' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.labelValueLengthLimit' is greater than zero and less than 'spec.enforcedLabelValueLengthLimit'. It requires Prometheus >= v2.27.0. When both 'enforcedLabelValueLengthLimit' and 'labelValueLengthLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined labelValueLengthLimit value will inherit the global labelValueLengthLimit value (Prometheus >= 2.45.0) or the enforcedLabelValueLengthLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedLabelValueLengthLimit' is greater than the 'labelValueLengthLimit', the 'labelValueLengthLimit' will be set to 'enforcedLabelValueLengthLimit'. * Scrape objects with a labelValueLengthLimit value less than or equal to enforcedLabelValueLengthLimit keep their specific value. * Scrape objects with a labelValueLengthLimit value greater than enforcedLabelValueLengthLimit are set to enforcedLabelValueLengthLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_label_value_length_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_label_value_length_limit}
  */
  readonly enforcedLabelValueLengthLimit?: number;
  /**
  * When not empty, a label will be added to: 1. All metrics scraped from 'ServiceMonitor', 'PodMonitor', 'Probe' and 'ScrapeConfig' objects. 2. All metrics generated from recording rules defined in 'PrometheusRule' objects. 3. All alerts generated from alerting rules defined in 'PrometheusRule' objects. 4. All vector selectors of PromQL expressions defined in 'PrometheusRule' objects. The label will not added for objects referenced in 'spec.excludedFromEnforcement'. The label's name is this field's value. The label's value is the namespace of the 'ServiceMonitor', 'PodMonitor', 'Probe', 'PrometheusRule' or 'ScrapeConfig' object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_namespace_label DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_namespace_label}
  */
  readonly enforcedNamespaceLabel?: string;
  /**
  * When defined, enforcedSampleLimit specifies a global limit on the number of scraped samples that will be accepted. This overrides any 'spec.sampleLimit' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.sampleLimit' is greater than zero and less than 'spec.enforcedSampleLimit'. It is meant to be used by admins to keep the overall number of samples/series under a desired limit. When both 'enforcedSampleLimit' and 'sampleLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined sampleLimit value will inherit the global sampleLimit value (Prometheus >= 2.45.0) or the enforcedSampleLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedSampleLimit' is greater than the 'sampleLimit', the 'sampleLimit' will be set to 'enforcedSampleLimit'. * Scrape objects with a sampleLimit value less than or equal to enforcedSampleLimit keep their specific value. * Scrape objects with a sampleLimit value greater than enforcedSampleLimit are set to enforcedSampleLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_sample_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_sample_limit}
  */
  readonly enforcedSampleLimit?: number;
  /**
  * When defined, enforcedTargetLimit specifies a global limit on the number of scraped targets. The value overrides any 'spec.targetLimit' set by ServiceMonitor, PodMonitor, Probe objects unless 'spec.targetLimit' is greater than zero and less than 'spec.enforcedTargetLimit'. It is meant to be used by admins to to keep the overall number of targets under a desired limit. When both 'enforcedTargetLimit' and 'targetLimit' are defined and greater than zero, the following rules apply: * Scrape objects without a defined targetLimit value will inherit the global targetLimit value (Prometheus >= 2.45.0) or the enforcedTargetLimit value (Prometheus < v2.45.0). If Prometheus version is >= 2.45.0 and the 'enforcedTargetLimit' is greater than the 'targetLimit', the 'targetLimit' will be set to 'enforcedTargetLimit'. * Scrape objects with a targetLimit value less than or equal to enforcedTargetLimit keep their specific value. * Scrape objects with a targetLimit value greater than enforcedTargetLimit are set to enforcedTargetLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#enforced_target_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#enforced_target_limit}
  */
  readonly enforcedTargetLimit?: number;
  /**
  * List of references to PodMonitor, ServiceMonitor, Probe and PrometheusRule objects to be excluded from enforcing a namespace label of origin. It is only applicable if 'spec.enforcedNamespaceLabel' set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#excluded_from_enforcement DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#excluded_from_enforcement}
  */
  readonly excludedFromEnforcement?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcement[] | cdktf.IResolvable;
  /**
  * The labels to add to any time series or alerts when communicating with external systems (federation, remote storage, Alertmanager). Labels defined by 'spec.replicaExternalLabelName' and 'spec.prometheusExternalLabelName' take precedence over this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#external_labels DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#external_labels}
  */
  readonly externalLabels?: { [key: string]: string };
  /**
  * The external URL under which the Prometheus service is externally available. This is necessary to generate correct URLs (for instance if Prometheus is accessible behind an Ingress resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#external_url DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Optional list of hosts and IPs that will be injected into the Pod's hosts file if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#host_aliases DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Use the host's network namespace if true. Make sure to understand the security implications if you want to enable it (https://kubernetes.io/docs/concepts/configuration/overview/). When hostNetwork is enabled, this will set the DNS policy to 'ClusterFirstWithHostNet' automatically (unless '.spec.DNSPolicy' is set to a different value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#host_network DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * When true, 'spec.namespaceSelector' from all PodMonitor, ServiceMonitor and Probe objects will be ignored. They will only discover targets within the namespace of the PodMonitor, ServiceMonitor and Probe object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#ignore_namespace_selectors DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#ignore_namespace_selectors}
  */
  readonly ignoreNamespaceSelectors?: boolean | cdktf.IResolvable;
  /**
  * Container image name for Prometheus. If specified, it takes precedence over the 'spec.baseImage', 'spec.tag' and 'spec.sha' fields. Specifying 'spec.version' is still necessary to ensure the Prometheus Operator knows which version of Prometheus is being configured. If neither 'spec.image' nor 'spec.baseImage' are defined, the operator will use the latest upstream version of Prometheus available at the time when the operator was released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#image DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy for the 'prometheus', 'init-config-reloader' and 'config-reloader' containers. See https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#image_pull_policy DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * An optional list of references to Secrets in the same namespace to use for pulling images from registries. See http://kubernetes.io/docs/user-guide/images#specifying-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#image_pull_secrets DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InitContainers allows injecting initContainers to the Pod definition. Those can be used to e.g. fetch secrets for injection into the Prometheus configuration from external sources. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ InitContainers described here modify an operator generated init containers if they share the same name and modifications are done via a strategic merge patch. The names of init container name managed by the operator are: * 'init-config-reloader'. Overriding init containers is entirely outside the scope of what the maintainers will support and by doing so, you accept that this behaviour may break at any time without notice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#init_containers DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit. It requires Prometheus >= v2.47.0. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedKeepDroppedTargets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#keep_dropped_targets DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#keep_dropped_targets}
  */
  readonly keepDroppedTargets?: number;
  /**
  * Per-scrape limit on number of labels that will be accepted for a sample. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedLabelLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#label_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#label_limit}
  */
  readonly labelLimit?: number;
  /**
  * Per-scrape limit on length of labels name that will be accepted for a sample. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedLabelNameLengthLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#label_name_length_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#label_name_length_limit}
  */
  readonly labelNameLengthLimit?: number;
  /**
  * Per-scrape limit on length of labels value that will be accepted for a sample. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedLabelValueLengthLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#label_value_length_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#label_value_length_limit}
  */
  readonly labelValueLengthLimit?: number;
  /**
  * When true, the Prometheus server listens on the loopback address instead of the Pod IP's address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#listen_local DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#listen_local}
  */
  readonly listenLocal?: boolean | cdktf.IResolvable;
  /**
  * Log format for Log level for Prometheus and the config-reloader sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#log_format DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * Log level for Prometheus and the config-reloader sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#log_level DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Defines the maximum time that the 'prometheus' container's startup probe will wait before being considered failed. The startup probe will return success after the WAL replay is complete. If set, the value should be greater than 60 (seconds). Otherwise it will be equal to 600 seconds (15 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#maximum_startup_duration_seconds DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#maximum_startup_duration_seconds}
  */
  readonly maximumStartupDurationSeconds?: number;
  /**
  * Minimum number of seconds for which a newly created Pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) This is an alpha field from kubernetes 1.22 until 1.24 which requires enabling the StatefulSetMinReadySeconds feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#min_ready_seconds DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Mode defines how the Prometheus operator deploys the PrometheusAgent pod(s). For now this field has no effect. (Alpha) Using this field requires the 'PrometheusAgentDaemonSet' feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#mode DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Defines on which Nodes the Pods are scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#node_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Settings related to the OTLP receiver feature. It requires Prometheus >= v2.55.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#otlp DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#otlp}
  */
  readonly otlp?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlp;
  /**
  * When true, Prometheus resolves label conflicts by renaming the labels in the scraped data to “exported_” for all targets created from ServiceMonitor, PodMonitor and ScrapeConfig objects. Otherwise the HonorLabels field of the service or pod monitor applies. In practice,'overrideHonorLaels:true' enforces 'honorLabels:false' for all ServiceMonitor, PodMonitor and ScrapeConfig objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#override_honor_labels DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#override_honor_labels}
  */
  readonly overrideHonorLabels?: boolean | cdktf.IResolvable;
  /**
  * When true, Prometheus ignores the timestamps for all the targets created from service and pod monitors. Otherwise the HonorTimestamps field of the service or pod monitor applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#override_honor_timestamps DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#override_honor_timestamps}
  */
  readonly overrideHonorTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When a Prometheus deployment is paused, no actions except for deletion will be performed on the underlying objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#paused DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The field controls if and how PVCs are deleted during the lifecycle of a StatefulSet. The default behavior is all PVCs are retained. This is an alpha field from kubernetes 1.23 until 1.26 and a beta field from 1.26. It requires enabling the StatefulSetAutoDeletePVC feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#persistent_volume_claim_retention_policy DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#persistent_volume_claim_retention_policy}
  */
  readonly persistentVolumeClaimRetentionPolicy?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicy;
  /**
  * PodMetadata configures labels and annotations which are propagated to the Prometheus pods. The following items are reserved and cannot be overridden: * 'prometheus' label, set to the name of the Prometheus object. * 'app.kubernetes.io/instance' label, set to the name of the Prometheus object. * 'app.kubernetes.io/managed-by' label, set to 'prometheus-operator'. * 'app.kubernetes.io/name' label, set to 'prometheus'. * 'app.kubernetes.io/version' label, set to the Prometheus version. * 'operator.prometheus.io/name' label, set to the name of the Prometheus object. * 'operator.prometheus.io/shard' label, set to the shard number of the Prometheus object. * 'kubectl.kubernetes.io/default-container' annotation, set to 'prometheus'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#pod_metadata DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadata;
  /**
  * Namespaces to match for PodMonitors discovery. An empty label selector matches all namespaces. A null label selector (default value) matches the current namespace only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#pod_monitor_namespace_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#pod_monitor_namespace_selector}
  */
  readonly podMonitorNamespaceSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelector;
  /**
  * PodMonitors to be selected for target discovery. An empty label selector matches all objects. A null label selector matches no objects. If 'spec.serviceMonitorSelector', 'spec.podMonitorSelector', 'spec.probeSelector' and 'spec.scrapeConfigSelector' are null, the Prometheus configuration is unmanaged. The Prometheus operator will ensure that the Prometheus configuration's Secret exists, but it is the responsibility of the user to provide the raw gzipped Prometheus configuration under the 'prometheus.yaml.gz' key. This behavior is *deprecated* and will be removed in the next major version of the custom resource definition. It is recommended to use 'spec.additionalScrapeConfigs' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#pod_monitor_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#pod_monitor_selector}
  */
  readonly podMonitorSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelector;
  /**
  * PodTargetLabels are appended to the 'spec.podTargetLabels' field of all PodMonitor and ServiceMonitor objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#pod_target_labels DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#pod_target_labels}
  */
  readonly podTargetLabels?: string[];
  /**
  * Port name used for the pods and governing service. Default: 'web'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#port_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Priority class assigned to the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#priority_class_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Namespaces to match for Probe discovery. An empty label selector matches all namespaces. A null label selector matches the current namespace only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#probe_namespace_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#probe_namespace_selector}
  */
  readonly probeNamespaceSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelector;
  /**
  * Probes to be selected for target discovery. An empty label selector matches all objects. A null label selector matches no objects. If 'spec.serviceMonitorSelector', 'spec.podMonitorSelector', 'spec.probeSelector' and 'spec.scrapeConfigSelector' are null, the Prometheus configuration is unmanaged. The Prometheus operator will ensure that the Prometheus configuration's Secret exists, but it is the responsibility of the user to provide the raw gzipped Prometheus configuration under the 'prometheus.yaml.gz' key. This behavior is *deprecated* and will be removed in the next major version of the custom resource definition. It is recommended to use 'spec.additionalScrapeConfigs' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#probe_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#probe_selector}
  */
  readonly probeSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelector;
  /**
  * Name of Prometheus external label used to denote the Prometheus instance name. The external label will _not_ be added when the field is set to the empty string (```'). Default: 'prometheus'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#prometheus_external_label_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#prometheus_external_label_name}
  */
  readonly prometheusExternalLabelName?: string;
  /**
  * Defines the strategy used to reload the Prometheus configuration. If not specified, the configuration is reloaded using the /-/reload HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#reload_strategy DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#reload_strategy}
  */
  readonly reloadStrategy?: string;
  /**
  * Defines the list of remote write configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#remote_write DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#remote_write}
  */
  readonly remoteWrite?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWrite[] | cdktf.IResolvable;
  /**
  * Name of Prometheus external label used to denote the replica name. The external label will _not_ be added when the field is set to the empty string (```'). Default: 'prometheus_replica'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#replica_external_label_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#replica_external_label_name}
  */
  readonly replicaExternalLabelName?: string;
  /**
  * Number of replicas of each shard to deploy for a Prometheus deployment. 'spec.replicas' multiplied by 'spec.shards' is the total number of Pods created. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#replicas DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Defines the resources requests and limits of the 'prometheus' container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#resources DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResources;
  /**
  * The route prefix Prometheus registers HTTP handlers for. This is useful when using 'spec.externalURL', and a proxy is rewriting HTTP routes of a request, and the actual ExternalURL is still true, but the server serves requests under a different route prefix. For example for use with 'kubectl proxy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#route_prefix DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#route_prefix}
  */
  readonly routePrefix?: string;
  /**
  * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedSampleLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#sample_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * List of scrape classes to expose to scraping objects such as PodMonitors, ServiceMonitors, Probes and ScrapeConfigs. This is an *experimental feature*, it may change in any upcoming release in a breaking way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_classes DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_classes}
  */
  readonly scrapeClasses?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClasses[] | cdktf.IResolvable;
  /**
  * Namespaces to match for ScrapeConfig discovery. An empty label selector matches all namespaces. A null label selector matches the current namespace only. Note that the ScrapeConfig custom resource definition is currently at Alpha level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_config_namespace_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_config_namespace_selector}
  */
  readonly scrapeConfigNamespaceSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelector;
  /**
  * ScrapeConfigs to be selected for target discovery. An empty label selector matches all objects. A null label selector matches no objects. If 'spec.serviceMonitorSelector', 'spec.podMonitorSelector', 'spec.probeSelector' and 'spec.scrapeConfigSelector' are null, the Prometheus configuration is unmanaged. The Prometheus operator will ensure that the Prometheus configuration's Secret exists, but it is the responsibility of the user to provide the raw gzipped Prometheus configuration under the 'prometheus.yaml.gz' key. This behavior is *deprecated* and will be removed in the next major version of the custom resource definition. It is recommended to use 'spec.additionalScrapeConfigs' instead. Note that the ScrapeConfig custom resource definition is currently at Alpha level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_config_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_config_selector}
  */
  readonly scrapeConfigSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelector;
  /**
  * Interval between consecutive scrapes. Default: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_interval DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * The protocols to negotiate during a scrape. It tells clients the protocols supported by Prometheus in order of preference (from most to least preferred). If unset, Prometheus uses its default value. It requires Prometheus >= v2.49.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_protocols DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_protocols}
  */
  readonly scrapeProtocols?: string[];
  /**
  * Number of seconds to wait until a scrape request times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#scrape_timeout DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * Secrets is a list of Secrets in the same namespace as the Prometheus object, which shall be mounted into the Prometheus Pods. Each Secret is added to the StatefulSet definition as a volume named 'secret-<secret-name>'. The Secrets are mounted into /etc/prometheus/secrets/<secret-name> in the 'prometheus' container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#secrets DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#security_context DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContext;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run the Prometheus Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#service_account_name DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Defines the service discovery role used to discover targets from 'ServiceMonitor' objects and Alertmanager endpoints. If set, the value should be either 'Endpoints' or 'EndpointSlice'. If unset, the operator assumes the 'Endpoints' role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#service_discovery_role DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#service_discovery_role}
  */
  readonly serviceDiscoveryRole?: string;
  /**
  * Namespaces to match for ServicedMonitors discovery. An empty label selector matches all namespaces. A null label selector (default value) matches the current namespace only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#service_monitor_namespace_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#service_monitor_namespace_selector}
  */
  readonly serviceMonitorNamespaceSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelector;
  /**
  * ServiceMonitors to be selected for target discovery. An empty label selector matches all objects. A null label selector matches no objects. If 'spec.serviceMonitorSelector', 'spec.podMonitorSelector', 'spec.probeSelector' and 'spec.scrapeConfigSelector' are null, the Prometheus configuration is unmanaged. The Prometheus operator will ensure that the Prometheus configuration's Secret exists, but it is the responsibility of the user to provide the raw gzipped Prometheus configuration under the 'prometheus.yaml.gz' key. This behavior is *deprecated* and will be removed in the next major version of the custom resource definition. It is recommended to use 'spec.additionalScrapeConfigs' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#service_monitor_selector DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#service_monitor_selector}
  */
  readonly serviceMonitorSelector?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelector;
  /**
  * Number of shards to distribute targets onto. 'spec.replicas' multiplied by 'spec.shards' is the total number of Pods created. Note that scaling down shards will not reshard data onto remaining instances, it must be manually moved. Increasing shards will not reshard data either but it will continue to be available from the same instances. To query globally, use Thanos sidecar and Thanos querier or remote write data to a central location. Sharding is performed on the content of the '__address__' target meta-label for PodMonitors and ServiceMonitors and '__param_target__' for Probes. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#shards DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#shards}
  */
  readonly shards?: number;
  /**
  * Storage defines the storage used by Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#storage DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorage;
  /**
  * TargetLimit defines a limit on the number of scraped targets that will be accepted. Only valid in Prometheus versions 2.45.0 and newer. Note that the global limit only applies to scrape objects that don't specify an explicit limit value. If you want to enforce a maximum limit for all scrape objects, refer to enforcedTargetLimit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#target_limit DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#target_limit}
  */
  readonly targetLimit?: number;
  /**
  * Defines the Pods' tolerations if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#tolerations DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Defines the pod's topology spread constraints if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#topology_spread_constraints DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * TracingConfig configures tracing in Prometheus. This is an *experimental feature*, it may change in any upcoming release in a breaking way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#tracing_config DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#tracing_config}
  */
  readonly tracingConfig?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfig;
  /**
  * Defines the runtime reloadable configuration of the timeseries database(TSDB). It requires Prometheus >= v2.39.0 or PrometheusAgent >= v2.54.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#tsdb DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#tsdb}
  */
  readonly tsdb?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdb;
  /**
  * Version of Prometheus being deployed. The operator uses this information to generate the Prometheus StatefulSet + configuration files. If not specified, the operator assumes the latest upstream version of Prometheus available at the time when the version of the operator was released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#version DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * VolumeMounts allows the configuration of additional VolumeMounts. VolumeMounts will be appended to other VolumeMounts in the 'prometheus' container, that are generated as a result of StorageSpec objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volume_mounts DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Volumes allows the configuration of additional volumes on the output StatefulSet definition. Volumes specified will be appended to other volumes that are generated as a result of StorageSpec objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#volumes DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable;
  /**
  * Configures compression of the write-ahead log (WAL) using Snappy. WAL compression is enabled by default for Prometheus >= 2.20.0 Requires Prometheus v2.11.0 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#wal_compression DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#wal_compression}
  */
  readonly walCompression?: boolean | cdktf.IResolvable;
  /**
  * Defines the configuration of the Prometheus web server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/monitoring_coreos_com_prometheus_agent_v1alpha1_manifest#web DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1Manifest#web}
  */
  readonly web?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb;
}

export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_args: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsToTerraform, false)(struct!.additionalArgs),
    additional_scrape_configs: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsToTerraform(struct!.additionalScrapeConfigs),
    affinity: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityToTerraform(struct!.affinity),
    apiserver_config: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigToTerraform(struct!.apiserverConfig),
    arbitrary_fs_access_through_s_ms: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsToTerraform(struct!.arbitraryFsAccessThroughSMs),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    body_size_limit: cdktf.stringToTerraform(struct!.bodySizeLimit),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    containers: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableFeatures),
    enable_remote_write_receiver: cdktf.booleanToTerraform(struct!.enableRemoteWriteReceiver),
    enforced_body_size_limit: cdktf.stringToTerraform(struct!.enforcedBodySizeLimit),
    enforced_keep_dropped_targets: cdktf.numberToTerraform(struct!.enforcedKeepDroppedTargets),
    enforced_label_limit: cdktf.numberToTerraform(struct!.enforcedLabelLimit),
    enforced_label_name_length_limit: cdktf.numberToTerraform(struct!.enforcedLabelNameLengthLimit),
    enforced_label_value_length_limit: cdktf.numberToTerraform(struct!.enforcedLabelValueLengthLimit),
    enforced_namespace_label: cdktf.stringToTerraform(struct!.enforcedNamespaceLabel),
    enforced_sample_limit: cdktf.numberToTerraform(struct!.enforcedSampleLimit),
    enforced_target_limit: cdktf.numberToTerraform(struct!.enforcedTargetLimit),
    excluded_from_enforcement: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementToTerraform, false)(struct!.excludedFromEnforcement),
    external_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalLabels),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    host_aliases: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    ignore_namespace_selectors: cdktf.booleanToTerraform(struct!.ignoreNamespaceSelectors),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersToTerraform, false)(struct!.initContainers),
    keep_dropped_targets: cdktf.numberToTerraform(struct!.keepDroppedTargets),
    label_limit: cdktf.numberToTerraform(struct!.labelLimit),
    label_name_length_limit: cdktf.numberToTerraform(struct!.labelNameLengthLimit),
    label_value_length_limit: cdktf.numberToTerraform(struct!.labelValueLengthLimit),
    listen_local: cdktf.booleanToTerraform(struct!.listenLocal),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    maximum_startup_duration_seconds: cdktf.numberToTerraform(struct!.maximumStartupDurationSeconds),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    otlp: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpToTerraform(struct!.otlp),
    override_honor_labels: cdktf.booleanToTerraform(struct!.overrideHonorLabels),
    override_honor_timestamps: cdktf.booleanToTerraform(struct!.overrideHonorTimestamps),
    paused: cdktf.booleanToTerraform(struct!.paused),
    persistent_volume_claim_retention_policy: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyToTerraform(struct!.persistentVolumeClaimRetentionPolicy),
    pod_metadata: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    pod_monitor_namespace_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorToTerraform(struct!.podMonitorNamespaceSelector),
    pod_monitor_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorToTerraform(struct!.podMonitorSelector),
    pod_target_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podTargetLabels),
    port_name: cdktf.stringToTerraform(struct!.portName),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    probe_namespace_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorToTerraform(struct!.probeNamespaceSelector),
    probe_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorToTerraform(struct!.probeSelector),
    prometheus_external_label_name: cdktf.stringToTerraform(struct!.prometheusExternalLabelName),
    reload_strategy: cdktf.stringToTerraform(struct!.reloadStrategy),
    remote_write: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteToTerraform, false)(struct!.remoteWrite),
    replica_external_label_name: cdktf.stringToTerraform(struct!.replicaExternalLabelName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    route_prefix: cdktf.stringToTerraform(struct!.routePrefix),
    sample_limit: cdktf.numberToTerraform(struct!.sampleLimit),
    scrape_classes: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesToTerraform, false)(struct!.scrapeClasses),
    scrape_config_namespace_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorToTerraform(struct!.scrapeConfigNamespaceSelector),
    scrape_config_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorToTerraform(struct!.scrapeConfigSelector),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    scrape_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scrapeProtocols),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    security_context: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextToTerraform(struct!.securityContext),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_discovery_role: cdktf.stringToTerraform(struct!.serviceDiscoveryRole),
    service_monitor_namespace_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorToTerraform(struct!.serviceMonitorNamespaceSelector),
    service_monitor_selector: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorToTerraform(struct!.serviceMonitorSelector),
    shards: cdktf.numberToTerraform(struct!.shards),
    storage: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageToTerraform(struct!.storage),
    target_limit: cdktf.numberToTerraform(struct!.targetLimit),
    tolerations: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    tracing_config: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigToTerraform(struct!.tracingConfig),
    tsdb: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbToTerraform(struct!.tsdb),
    version: cdktf.stringToTerraform(struct!.version),
    volume_mounts: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
    wal_compression: cdktf.booleanToTerraform(struct!.walCompression),
    web: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebToTerraform(struct!.web),
  }
}


export function dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_args: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsToHclTerraform, false)(struct!.additionalArgs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsList",
    },
    additional_scrape_configs: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsToHclTerraform(struct!.additionalScrapeConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigs",
    },
    affinity: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinity",
    },
    apiserver_config: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigToHclTerraform(struct!.apiserverConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfig",
    },
    arbitrary_fs_access_through_s_ms: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsToHclTerraform(struct!.arbitraryFsAccessThroughSMs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMs",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.bodySizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersList",
    },
    dns_config: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_remote_write_receiver: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteWriteReceiver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforced_body_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.enforcedBodySizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_keep_dropped_targets: {
      value: cdktf.numberToHclTerraform(struct!.enforcedKeepDroppedTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_label_limit: {
      value: cdktf.numberToHclTerraform(struct!.enforcedLabelLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_label_name_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.enforcedLabelNameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_label_value_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.enforcedLabelValueLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_namespace_label: {
      value: cdktf.stringToHclTerraform(struct!.enforcedNamespaceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_sample_limit: {
      value: cdktf.numberToHclTerraform(struct!.enforcedSampleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforced_target_limit: {
      value: cdktf.numberToHclTerraform(struct!.enforcedTargetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_from_enforcement: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementToHclTerraform, false)(struct!.excludedFromEnforcement),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementList",
    },
    external_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_namespace_selectors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNamespaceSelectors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersList",
    },
    keep_dropped_targets: {
      value: cdktf.numberToHclTerraform(struct!.keepDroppedTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_name_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelNameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_value_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelValueLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_local: {
      value: cdktf.booleanToHclTerraform(struct!.listenLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_startup_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumStartupDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    otlp: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpToHclTerraform(struct!.otlp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlp",
    },
    override_honor_labels: {
      value: cdktf.booleanToHclTerraform(struct!.overrideHonorLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_honor_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.overrideHonorTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persistent_volume_claim_retention_policy: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyToHclTerraform(struct!.persistentVolumeClaimRetentionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicy",
    },
    pod_metadata: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadata",
    },
    pod_monitor_namespace_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorToHclTerraform(struct!.podMonitorNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelector",
    },
    pod_monitor_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorToHclTerraform(struct!.podMonitorSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelector",
    },
    pod_target_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podTargetLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
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
    probe_namespace_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorToHclTerraform(struct!.probeNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelector",
    },
    probe_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorToHclTerraform(struct!.probeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelector",
    },
    prometheus_external_label_name: {
      value: cdktf.stringToHclTerraform(struct!.prometheusExternalLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reload_strategy: {
      value: cdktf.stringToHclTerraform(struct!.reloadStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_write: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteToHclTerraform, false)(struct!.remoteWrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteList",
    },
    replica_external_label_name: {
      value: cdktf.stringToHclTerraform(struct!.replicaExternalLabelName),
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
    resources: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResources",
    },
    route_prefix: {
      value: cdktf.stringToHclTerraform(struct!.routePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_limit: {
      value: cdktf.numberToHclTerraform(struct!.sampleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrape_classes: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesToHclTerraform, false)(struct!.scrapeClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesList",
    },
    scrape_config_namespace_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorToHclTerraform(struct!.scrapeConfigNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelector",
    },
    scrape_config_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorToHclTerraform(struct!.scrapeConfigSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelector",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scrapeProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContext",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_discovery_role: {
      value: cdktf.stringToHclTerraform(struct!.serviceDiscoveryRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_monitor_namespace_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorToHclTerraform(struct!.serviceMonitorNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelector",
    },
    service_monitor_selector: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorToHclTerraform(struct!.serviceMonitorSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelector",
    },
    shards: {
      value: cdktf.numberToHclTerraform(struct!.shards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorage",
    },
    target_limit: {
      value: cdktf.numberToHclTerraform(struct!.targetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsList",
    },
    tracing_config: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigToHclTerraform(struct!.tracingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfig",
    },
    tsdb: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbToHclTerraform(struct!.tsdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdb",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesList",
    },
    wal_compression: {
      value: cdktf.booleanToHclTerraform(struct!.walCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web: {
      value: dataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalArgs = this._additionalArgs?.internalValue;
    }
    if (this._additionalScrapeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalScrapeConfigs = this._additionalScrapeConfigs?.internalValue;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._apiserverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiserverConfig = this._apiserverConfig?.internalValue;
    }
    if (this._arbitraryFsAccessThroughSMs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arbitraryFsAccessThroughSMs = this._arbitraryFsAccessThroughSMs?.internalValue;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._bodySizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySizeLimit = this._bodySizeLimit;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
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
    if (this._enableFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFeatures = this._enableFeatures;
    }
    if (this._enableRemoteWriteReceiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteWriteReceiver = this._enableRemoteWriteReceiver;
    }
    if (this._enforcedBodySizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedBodySizeLimit = this._enforcedBodySizeLimit;
    }
    if (this._enforcedKeepDroppedTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedKeepDroppedTargets = this._enforcedKeepDroppedTargets;
    }
    if (this._enforcedLabelLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedLabelLimit = this._enforcedLabelLimit;
    }
    if (this._enforcedLabelNameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedLabelNameLengthLimit = this._enforcedLabelNameLengthLimit;
    }
    if (this._enforcedLabelValueLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedLabelValueLengthLimit = this._enforcedLabelValueLengthLimit;
    }
    if (this._enforcedNamespaceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedNamespaceLabel = this._enforcedNamespaceLabel;
    }
    if (this._enforcedSampleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedSampleLimit = this._enforcedSampleLimit;
    }
    if (this._enforcedTargetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedTargetLimit = this._enforcedTargetLimit;
    }
    if (this._excludedFromEnforcement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedFromEnforcement = this._excludedFromEnforcement?.internalValue;
    }
    if (this._externalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLabels = this._externalLabels;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._ignoreNamespaceSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNamespaceSelectors = this._ignoreNamespaceSelectors;
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
    if (this._keepDroppedTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDroppedTargets = this._keepDroppedTargets;
    }
    if (this._labelLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLimit = this._labelLimit;
    }
    if (this._labelNameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameLengthLimit = this._labelNameLengthLimit;
    }
    if (this._labelValueLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValueLengthLimit = this._labelValueLengthLimit;
    }
    if (this._listenLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenLocal = this._listenLocal;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maximumStartupDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumStartupDurationSeconds = this._maximumStartupDurationSeconds;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._otlp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otlp = this._otlp?.internalValue;
    }
    if (this._overrideHonorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHonorLabels = this._overrideHonorLabels;
    }
    if (this._overrideHonorTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHonorTimestamps = this._overrideHonorTimestamps;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._persistentVolumeClaimRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaimRetentionPolicy = this._persistentVolumeClaimRetentionPolicy?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._podMonitorNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMonitorNamespaceSelector = this._podMonitorNamespaceSelector?.internalValue;
    }
    if (this._podMonitorSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMonitorSelector = this._podMonitorSelector?.internalValue;
    }
    if (this._podTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTargetLabels = this._podTargetLabels;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._probeNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeNamespaceSelector = this._probeNamespaceSelector?.internalValue;
    }
    if (this._probeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeSelector = this._probeSelector?.internalValue;
    }
    if (this._prometheusExternalLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusExternalLabelName = this._prometheusExternalLabelName;
    }
    if (this._reloadStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadStrategy = this._reloadStrategy;
    }
    if (this._remoteWrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteWrite = this._remoteWrite?.internalValue;
    }
    if (this._replicaExternalLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaExternalLabelName = this._replicaExternalLabelName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._routePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePrefix = this._routePrefix;
    }
    if (this._sampleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLimit = this._sampleLimit;
    }
    if (this._scrapeClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeClasses = this._scrapeClasses?.internalValue;
    }
    if (this._scrapeConfigNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeConfigNamespaceSelector = this._scrapeConfigNamespaceSelector?.internalValue;
    }
    if (this._scrapeConfigSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeConfigSelector = this._scrapeConfigSelector?.internalValue;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._scrapeProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeProtocols = this._scrapeProtocols;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceDiscoveryRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscoveryRole = this._serviceDiscoveryRole;
    }
    if (this._serviceMonitorNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitorNamespaceSelector = this._serviceMonitorNamespaceSelector?.internalValue;
    }
    if (this._serviceMonitorSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitorSelector = this._serviceMonitorSelector?.internalValue;
    }
    if (this._shards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._targetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLimit = this._targetLimit;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._tracingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfig = this._tracingConfig?.internalValue;
    }
    if (this._tsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsdb = this._tsdb?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._walCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.walCompression = this._walCompression;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalArgs.internalValue = undefined;
      this._additionalScrapeConfigs.internalValue = undefined;
      this._affinity.internalValue = undefined;
      this._apiserverConfig.internalValue = undefined;
      this._arbitraryFsAccessThroughSMs.internalValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._bodySizeLimit = undefined;
      this._configMaps = undefined;
      this._containers.internalValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enableFeatures = undefined;
      this._enableRemoteWriteReceiver = undefined;
      this._enforcedBodySizeLimit = undefined;
      this._enforcedKeepDroppedTargets = undefined;
      this._enforcedLabelLimit = undefined;
      this._enforcedLabelNameLengthLimit = undefined;
      this._enforcedLabelValueLengthLimit = undefined;
      this._enforcedNamespaceLabel = undefined;
      this._enforcedSampleLimit = undefined;
      this._enforcedTargetLimit = undefined;
      this._excludedFromEnforcement.internalValue = undefined;
      this._externalLabels = undefined;
      this._externalUrl = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostNetwork = undefined;
      this._ignoreNamespaceSelectors = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._keepDroppedTargets = undefined;
      this._labelLimit = undefined;
      this._labelNameLengthLimit = undefined;
      this._labelValueLengthLimit = undefined;
      this._listenLocal = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._maximumStartupDurationSeconds = undefined;
      this._minReadySeconds = undefined;
      this._mode = undefined;
      this._nodeSelector = undefined;
      this._otlp.internalValue = undefined;
      this._overrideHonorLabels = undefined;
      this._overrideHonorTimestamps = undefined;
      this._paused = undefined;
      this._persistentVolumeClaimRetentionPolicy.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._podMonitorNamespaceSelector.internalValue = undefined;
      this._podMonitorSelector.internalValue = undefined;
      this._podTargetLabels = undefined;
      this._portName = undefined;
      this._priorityClassName = undefined;
      this._probeNamespaceSelector.internalValue = undefined;
      this._probeSelector.internalValue = undefined;
      this._prometheusExternalLabelName = undefined;
      this._reloadStrategy = undefined;
      this._remoteWrite.internalValue = undefined;
      this._replicaExternalLabelName = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._routePrefix = undefined;
      this._sampleLimit = undefined;
      this._scrapeClasses.internalValue = undefined;
      this._scrapeConfigNamespaceSelector.internalValue = undefined;
      this._scrapeConfigSelector.internalValue = undefined;
      this._scrapeInterval = undefined;
      this._scrapeProtocols = undefined;
      this._scrapeTimeout = undefined;
      this._secrets = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._serviceDiscoveryRole = undefined;
      this._serviceMonitorNamespaceSelector.internalValue = undefined;
      this._serviceMonitorSelector.internalValue = undefined;
      this._shards = undefined;
      this._storage.internalValue = undefined;
      this._targetLimit = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._tracingConfig.internalValue = undefined;
      this._tsdb.internalValue = undefined;
      this._version = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._walCompression = undefined;
      this._web.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalArgs.internalValue = value.additionalArgs;
      this._additionalScrapeConfigs.internalValue = value.additionalScrapeConfigs;
      this._affinity.internalValue = value.affinity;
      this._apiserverConfig.internalValue = value.apiserverConfig;
      this._arbitraryFsAccessThroughSMs.internalValue = value.arbitraryFsAccessThroughSMs;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._bodySizeLimit = value.bodySizeLimit;
      this._configMaps = value.configMaps;
      this._containers.internalValue = value.containers;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enableFeatures = value.enableFeatures;
      this._enableRemoteWriteReceiver = value.enableRemoteWriteReceiver;
      this._enforcedBodySizeLimit = value.enforcedBodySizeLimit;
      this._enforcedKeepDroppedTargets = value.enforcedKeepDroppedTargets;
      this._enforcedLabelLimit = value.enforcedLabelLimit;
      this._enforcedLabelNameLengthLimit = value.enforcedLabelNameLengthLimit;
      this._enforcedLabelValueLengthLimit = value.enforcedLabelValueLengthLimit;
      this._enforcedNamespaceLabel = value.enforcedNamespaceLabel;
      this._enforcedSampleLimit = value.enforcedSampleLimit;
      this._enforcedTargetLimit = value.enforcedTargetLimit;
      this._excludedFromEnforcement.internalValue = value.excludedFromEnforcement;
      this._externalLabels = value.externalLabels;
      this._externalUrl = value.externalUrl;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostNetwork = value.hostNetwork;
      this._ignoreNamespaceSelectors = value.ignoreNamespaceSelectors;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._keepDroppedTargets = value.keepDroppedTargets;
      this._labelLimit = value.labelLimit;
      this._labelNameLengthLimit = value.labelNameLengthLimit;
      this._labelValueLengthLimit = value.labelValueLengthLimit;
      this._listenLocal = value.listenLocal;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._maximumStartupDurationSeconds = value.maximumStartupDurationSeconds;
      this._minReadySeconds = value.minReadySeconds;
      this._mode = value.mode;
      this._nodeSelector = value.nodeSelector;
      this._otlp.internalValue = value.otlp;
      this._overrideHonorLabels = value.overrideHonorLabels;
      this._overrideHonorTimestamps = value.overrideHonorTimestamps;
      this._paused = value.paused;
      this._persistentVolumeClaimRetentionPolicy.internalValue = value.persistentVolumeClaimRetentionPolicy;
      this._podMetadata.internalValue = value.podMetadata;
      this._podMonitorNamespaceSelector.internalValue = value.podMonitorNamespaceSelector;
      this._podMonitorSelector.internalValue = value.podMonitorSelector;
      this._podTargetLabels = value.podTargetLabels;
      this._portName = value.portName;
      this._priorityClassName = value.priorityClassName;
      this._probeNamespaceSelector.internalValue = value.probeNamespaceSelector;
      this._probeSelector.internalValue = value.probeSelector;
      this._prometheusExternalLabelName = value.prometheusExternalLabelName;
      this._reloadStrategy = value.reloadStrategy;
      this._remoteWrite.internalValue = value.remoteWrite;
      this._replicaExternalLabelName = value.replicaExternalLabelName;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._routePrefix = value.routePrefix;
      this._sampleLimit = value.sampleLimit;
      this._scrapeClasses.internalValue = value.scrapeClasses;
      this._scrapeConfigNamespaceSelector.internalValue = value.scrapeConfigNamespaceSelector;
      this._scrapeConfigSelector.internalValue = value.scrapeConfigSelector;
      this._scrapeInterval = value.scrapeInterval;
      this._scrapeProtocols = value.scrapeProtocols;
      this._scrapeTimeout = value.scrapeTimeout;
      this._secrets = value.secrets;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceDiscoveryRole = value.serviceDiscoveryRole;
      this._serviceMonitorNamespaceSelector.internalValue = value.serviceMonitorNamespaceSelector;
      this._serviceMonitorSelector.internalValue = value.serviceMonitorSelector;
      this._shards = value.shards;
      this._storage.internalValue = value.storage;
      this._targetLimit = value.targetLimit;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._tracingConfig.internalValue = value.tracingConfig;
      this._tsdb.internalValue = value.tsdb;
      this._version = value.version;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
      this._walCompression = value.walCompression;
      this._web.internalValue = value.web;
    }
  }

  // additional_args - computed: false, optional: true, required: false
  private _additionalArgs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgsList(this, "additional_args", false);
  public get additionalArgs() {
    return this._additionalArgs;
  }
  public putAdditionalArgs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalArgs[] | cdktf.IResolvable) {
    this._additionalArgs.internalValue = value;
  }
  public resetAdditionalArgs() {
    this._additionalArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArgsInput() {
    return this._additionalArgs.internalValue;
  }

  // additional_scrape_configs - computed: false, optional: true, required: false
  private _additionalScrapeConfigs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigsOutputReference(this, "additional_scrape_configs");
  public get additionalScrapeConfigs() {
    return this._additionalScrapeConfigs;
  }
  public putAdditionalScrapeConfigs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAdditionalScrapeConfigs) {
    this._additionalScrapeConfigs.internalValue = value;
  }
  public resetAdditionalScrapeConfigs() {
    this._additionalScrapeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalScrapeConfigsInput() {
    return this._additionalScrapeConfigs.internalValue;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // apiserver_config - computed: false, optional: true, required: false
  private _apiserverConfig = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfigOutputReference(this, "apiserver_config");
  public get apiserverConfig() {
    return this._apiserverConfig;
  }
  public putApiserverConfig(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecApiserverConfig) {
    this._apiserverConfig.internalValue = value;
  }
  public resetApiserverConfig() {
    this._apiserverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverConfigInput() {
    return this._apiserverConfig.internalValue;
  }

  // arbitrary_fs_access_through_s_ms - computed: false, optional: true, required: false
  private _arbitraryFsAccessThroughSMs = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMsOutputReference(this, "arbitrary_fs_access_through_s_ms");
  public get arbitraryFsAccessThroughSMs() {
    return this._arbitraryFsAccessThroughSMs;
  }
  public putArbitraryFsAccessThroughSMs(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecArbitraryFsAccessThroughSMs) {
    this._arbitraryFsAccessThroughSMs.internalValue = value;
  }
  public resetArbitraryFsAccessThroughSMs() {
    this._arbitraryFsAccessThroughSMs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbitraryFsAccessThroughSMsInput() {
    return this._arbitraryFsAccessThroughSMs.internalValue;
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

  // body_size_limit - computed: false, optional: true, required: false
  private _bodySizeLimit?: string; 
  public get bodySizeLimit() {
    return this.getStringAttribute('body_size_limit');
  }
  public set bodySizeLimit(value: string) {
    this._bodySizeLimit = value;
  }
  public resetBodySizeLimit() {
    this._bodySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeLimitInput() {
    return this._bodySizeLimit;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecContainers[] | cdktf.IResolvable) {
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
  private _dnsConfig = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecDnsConfig) {
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

  // enable_features - computed: false, optional: true, required: false
  private _enableFeatures?: string[]; 
  public get enableFeatures() {
    return this.getListAttribute('enable_features');
  }
  public set enableFeatures(value: string[]) {
    this._enableFeatures = value;
  }
  public resetEnableFeatures() {
    this._enableFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFeaturesInput() {
    return this._enableFeatures;
  }

  // enable_remote_write_receiver - computed: false, optional: true, required: false
  private _enableRemoteWriteReceiver?: boolean | cdktf.IResolvable; 
  public get enableRemoteWriteReceiver() {
    return this.getBooleanAttribute('enable_remote_write_receiver');
  }
  public set enableRemoteWriteReceiver(value: boolean | cdktf.IResolvable) {
    this._enableRemoteWriteReceiver = value;
  }
  public resetEnableRemoteWriteReceiver() {
    this._enableRemoteWriteReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteWriteReceiverInput() {
    return this._enableRemoteWriteReceiver;
  }

  // enforced_body_size_limit - computed: false, optional: true, required: false
  private _enforcedBodySizeLimit?: string; 
  public get enforcedBodySizeLimit() {
    return this.getStringAttribute('enforced_body_size_limit');
  }
  public set enforcedBodySizeLimit(value: string) {
    this._enforcedBodySizeLimit = value;
  }
  public resetEnforcedBodySizeLimit() {
    this._enforcedBodySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedBodySizeLimitInput() {
    return this._enforcedBodySizeLimit;
  }

  // enforced_keep_dropped_targets - computed: false, optional: true, required: false
  private _enforcedKeepDroppedTargets?: number; 
  public get enforcedKeepDroppedTargets() {
    return this.getNumberAttribute('enforced_keep_dropped_targets');
  }
  public set enforcedKeepDroppedTargets(value: number) {
    this._enforcedKeepDroppedTargets = value;
  }
  public resetEnforcedKeepDroppedTargets() {
    this._enforcedKeepDroppedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedKeepDroppedTargetsInput() {
    return this._enforcedKeepDroppedTargets;
  }

  // enforced_label_limit - computed: false, optional: true, required: false
  private _enforcedLabelLimit?: number; 
  public get enforcedLabelLimit() {
    return this.getNumberAttribute('enforced_label_limit');
  }
  public set enforcedLabelLimit(value: number) {
    this._enforcedLabelLimit = value;
  }
  public resetEnforcedLabelLimit() {
    this._enforcedLabelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedLabelLimitInput() {
    return this._enforcedLabelLimit;
  }

  // enforced_label_name_length_limit - computed: false, optional: true, required: false
  private _enforcedLabelNameLengthLimit?: number; 
  public get enforcedLabelNameLengthLimit() {
    return this.getNumberAttribute('enforced_label_name_length_limit');
  }
  public set enforcedLabelNameLengthLimit(value: number) {
    this._enforcedLabelNameLengthLimit = value;
  }
  public resetEnforcedLabelNameLengthLimit() {
    this._enforcedLabelNameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedLabelNameLengthLimitInput() {
    return this._enforcedLabelNameLengthLimit;
  }

  // enforced_label_value_length_limit - computed: false, optional: true, required: false
  private _enforcedLabelValueLengthLimit?: number; 
  public get enforcedLabelValueLengthLimit() {
    return this.getNumberAttribute('enforced_label_value_length_limit');
  }
  public set enforcedLabelValueLengthLimit(value: number) {
    this._enforcedLabelValueLengthLimit = value;
  }
  public resetEnforcedLabelValueLengthLimit() {
    this._enforcedLabelValueLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedLabelValueLengthLimitInput() {
    return this._enforcedLabelValueLengthLimit;
  }

  // enforced_namespace_label - computed: false, optional: true, required: false
  private _enforcedNamespaceLabel?: string; 
  public get enforcedNamespaceLabel() {
    return this.getStringAttribute('enforced_namespace_label');
  }
  public set enforcedNamespaceLabel(value: string) {
    this._enforcedNamespaceLabel = value;
  }
  public resetEnforcedNamespaceLabel() {
    this._enforcedNamespaceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedNamespaceLabelInput() {
    return this._enforcedNamespaceLabel;
  }

  // enforced_sample_limit - computed: false, optional: true, required: false
  private _enforcedSampleLimit?: number; 
  public get enforcedSampleLimit() {
    return this.getNumberAttribute('enforced_sample_limit');
  }
  public set enforcedSampleLimit(value: number) {
    this._enforcedSampleLimit = value;
  }
  public resetEnforcedSampleLimit() {
    this._enforcedSampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedSampleLimitInput() {
    return this._enforcedSampleLimit;
  }

  // enforced_target_limit - computed: false, optional: true, required: false
  private _enforcedTargetLimit?: number; 
  public get enforcedTargetLimit() {
    return this.getNumberAttribute('enforced_target_limit');
  }
  public set enforcedTargetLimit(value: number) {
    this._enforcedTargetLimit = value;
  }
  public resetEnforcedTargetLimit() {
    this._enforcedTargetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedTargetLimitInput() {
    return this._enforcedTargetLimit;
  }

  // excluded_from_enforcement - computed: false, optional: true, required: false
  private _excludedFromEnforcement = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcementList(this, "excluded_from_enforcement", false);
  public get excludedFromEnforcement() {
    return this._excludedFromEnforcement;
  }
  public putExcludedFromEnforcement(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecExcludedFromEnforcement[] | cdktf.IResolvable) {
    this._excludedFromEnforcement.internalValue = value;
  }
  public resetExcludedFromEnforcement() {
    this._excludedFromEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFromEnforcementInput() {
    return this._excludedFromEnforcement.internalValue;
  }

  // external_labels - computed: false, optional: true, required: false
  private _externalLabels?: { [key: string]: string }; 
  public get externalLabels() {
    return this.getStringMapAttribute('external_labels');
  }
  public set externalLabels(value: { [key: string]: string }) {
    this._externalLabels = value;
  }
  public resetExternalLabels() {
    this._externalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLabelsInput() {
    return this._externalLabels;
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
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

  // ignore_namespace_selectors - computed: false, optional: true, required: false
  private _ignoreNamespaceSelectors?: boolean | cdktf.IResolvable; 
  public get ignoreNamespaceSelectors() {
    return this.getBooleanAttribute('ignore_namespace_selectors');
  }
  public set ignoreNamespaceSelectors(value: boolean | cdktf.IResolvable) {
    this._ignoreNamespaceSelectors = value;
  }
  public resetIgnoreNamespaceSelectors() {
    this._ignoreNamespaceSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNamespaceSelectorsInput() {
    return this._ignoreNamespaceSelectors;
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
  private _imagePullSecrets = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // keep_dropped_targets - computed: false, optional: true, required: false
  private _keepDroppedTargets?: number; 
  public get keepDroppedTargets() {
    return this.getNumberAttribute('keep_dropped_targets');
  }
  public set keepDroppedTargets(value: number) {
    this._keepDroppedTargets = value;
  }
  public resetKeepDroppedTargets() {
    this._keepDroppedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDroppedTargetsInput() {
    return this._keepDroppedTargets;
  }

  // label_limit - computed: false, optional: true, required: false
  private _labelLimit?: number; 
  public get labelLimit() {
    return this.getNumberAttribute('label_limit');
  }
  public set labelLimit(value: number) {
    this._labelLimit = value;
  }
  public resetLabelLimit() {
    this._labelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLimitInput() {
    return this._labelLimit;
  }

  // label_name_length_limit - computed: false, optional: true, required: false
  private _labelNameLengthLimit?: number; 
  public get labelNameLengthLimit() {
    return this.getNumberAttribute('label_name_length_limit');
  }
  public set labelNameLengthLimit(value: number) {
    this._labelNameLengthLimit = value;
  }
  public resetLabelNameLengthLimit() {
    this._labelNameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameLengthLimitInput() {
    return this._labelNameLengthLimit;
  }

  // label_value_length_limit - computed: false, optional: true, required: false
  private _labelValueLengthLimit?: number; 
  public get labelValueLengthLimit() {
    return this.getNumberAttribute('label_value_length_limit');
  }
  public set labelValueLengthLimit(value: number) {
    this._labelValueLengthLimit = value;
  }
  public resetLabelValueLengthLimit() {
    this._labelValueLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueLengthLimitInput() {
    return this._labelValueLengthLimit;
  }

  // listen_local - computed: false, optional: true, required: false
  private _listenLocal?: boolean | cdktf.IResolvable; 
  public get listenLocal() {
    return this.getBooleanAttribute('listen_local');
  }
  public set listenLocal(value: boolean | cdktf.IResolvable) {
    this._listenLocal = value;
  }
  public resetListenLocal() {
    this._listenLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenLocalInput() {
    return this._listenLocal;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // maximum_startup_duration_seconds - computed: false, optional: true, required: false
  private _maximumStartupDurationSeconds?: number; 
  public get maximumStartupDurationSeconds() {
    return this.getNumberAttribute('maximum_startup_duration_seconds');
  }
  public set maximumStartupDurationSeconds(value: number) {
    this._maximumStartupDurationSeconds = value;
  }
  public resetMaximumStartupDurationSeconds() {
    this._maximumStartupDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumStartupDurationSecondsInput() {
    return this._maximumStartupDurationSeconds;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // otlp - computed: false, optional: true, required: false
  private _otlp = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlpOutputReference(this, "otlp");
  public get otlp() {
    return this._otlp;
  }
  public putOtlp(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecOtlp) {
    this._otlp.internalValue = value;
  }
  public resetOtlp() {
    this._otlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otlpInput() {
    return this._otlp.internalValue;
  }

  // override_honor_labels - computed: false, optional: true, required: false
  private _overrideHonorLabels?: boolean | cdktf.IResolvable; 
  public get overrideHonorLabels() {
    return this.getBooleanAttribute('override_honor_labels');
  }
  public set overrideHonorLabels(value: boolean | cdktf.IResolvable) {
    this._overrideHonorLabels = value;
  }
  public resetOverrideHonorLabels() {
    this._overrideHonorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideHonorLabelsInput() {
    return this._overrideHonorLabels;
  }

  // override_honor_timestamps - computed: false, optional: true, required: false
  private _overrideHonorTimestamps?: boolean | cdktf.IResolvable; 
  public get overrideHonorTimestamps() {
    return this.getBooleanAttribute('override_honor_timestamps');
  }
  public set overrideHonorTimestamps(value: boolean | cdktf.IResolvable) {
    this._overrideHonorTimestamps = value;
  }
  public resetOverrideHonorTimestamps() {
    this._overrideHonorTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideHonorTimestampsInput() {
    return this._overrideHonorTimestamps;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // persistent_volume_claim_retention_policy - computed: false, optional: true, required: false
  private _persistentVolumeClaimRetentionPolicy = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicyOutputReference(this, "persistent_volume_claim_retention_policy");
  public get persistentVolumeClaimRetentionPolicy() {
    return this._persistentVolumeClaimRetentionPolicy;
  }
  public putPersistentVolumeClaimRetentionPolicy(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPersistentVolumeClaimRetentionPolicy) {
    this._persistentVolumeClaimRetentionPolicy.internalValue = value;
  }
  public resetPersistentVolumeClaimRetentionPolicy() {
    this._persistentVolumeClaimRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimRetentionPolicyInput() {
    return this._persistentVolumeClaimRetentionPolicy.internalValue;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // pod_monitor_namespace_selector - computed: false, optional: true, required: false
  private _podMonitorNamespaceSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelectorOutputReference(this, "pod_monitor_namespace_selector");
  public get podMonitorNamespaceSelector() {
    return this._podMonitorNamespaceSelector;
  }
  public putPodMonitorNamespaceSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorNamespaceSelector) {
    this._podMonitorNamespaceSelector.internalValue = value;
  }
  public resetPodMonitorNamespaceSelector() {
    this._podMonitorNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorNamespaceSelectorInput() {
    return this._podMonitorNamespaceSelector.internalValue;
  }

  // pod_monitor_selector - computed: false, optional: true, required: false
  private _podMonitorSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelectorOutputReference(this, "pod_monitor_selector");
  public get podMonitorSelector() {
    return this._podMonitorSelector;
  }
  public putPodMonitorSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecPodMonitorSelector) {
    this._podMonitorSelector.internalValue = value;
  }
  public resetPodMonitorSelector() {
    this._podMonitorSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorSelectorInput() {
    return this._podMonitorSelector.internalValue;
  }

  // pod_target_labels - computed: false, optional: true, required: false
  private _podTargetLabels?: string[]; 
  public get podTargetLabels() {
    return this.getListAttribute('pod_target_labels');
  }
  public set podTargetLabels(value: string[]) {
    this._podTargetLabels = value;
  }
  public resetPodTargetLabels() {
    this._podTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTargetLabelsInput() {
    return this._podTargetLabels;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
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

  // probe_namespace_selector - computed: false, optional: true, required: false
  private _probeNamespaceSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelectorOutputReference(this, "probe_namespace_selector");
  public get probeNamespaceSelector() {
    return this._probeNamespaceSelector;
  }
  public putProbeNamespaceSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeNamespaceSelector) {
    this._probeNamespaceSelector.internalValue = value;
  }
  public resetProbeNamespaceSelector() {
    this._probeNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeNamespaceSelectorInput() {
    return this._probeNamespaceSelector.internalValue;
  }

  // probe_selector - computed: false, optional: true, required: false
  private _probeSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelectorOutputReference(this, "probe_selector");
  public get probeSelector() {
    return this._probeSelector;
  }
  public putProbeSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecProbeSelector) {
    this._probeSelector.internalValue = value;
  }
  public resetProbeSelector() {
    this._probeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeSelectorInput() {
    return this._probeSelector.internalValue;
  }

  // prometheus_external_label_name - computed: false, optional: true, required: false
  private _prometheusExternalLabelName?: string; 
  public get prometheusExternalLabelName() {
    return this.getStringAttribute('prometheus_external_label_name');
  }
  public set prometheusExternalLabelName(value: string) {
    this._prometheusExternalLabelName = value;
  }
  public resetPrometheusExternalLabelName() {
    this._prometheusExternalLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusExternalLabelNameInput() {
    return this._prometheusExternalLabelName;
  }

  // reload_strategy - computed: false, optional: true, required: false
  private _reloadStrategy?: string; 
  public get reloadStrategy() {
    return this.getStringAttribute('reload_strategy');
  }
  public set reloadStrategy(value: string) {
    this._reloadStrategy = value;
  }
  public resetReloadStrategy() {
    this._reloadStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadStrategyInput() {
    return this._reloadStrategy;
  }

  // remote_write - computed: false, optional: true, required: false
  private _remoteWrite = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWriteList(this, "remote_write", false);
  public get remoteWrite() {
    return this._remoteWrite;
  }
  public putRemoteWrite(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecRemoteWrite[] | cdktf.IResolvable) {
    this._remoteWrite.internalValue = value;
  }
  public resetRemoteWrite() {
    this._remoteWrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWriteInput() {
    return this._remoteWrite.internalValue;
  }

  // replica_external_label_name - computed: false, optional: true, required: false
  private _replicaExternalLabelName?: string; 
  public get replicaExternalLabelName() {
    return this.getStringAttribute('replica_external_label_name');
  }
  public set replicaExternalLabelName(value: string) {
    this._replicaExternalLabelName = value;
  }
  public resetReplicaExternalLabelName() {
    this._replicaExternalLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaExternalLabelNameInput() {
    return this._replicaExternalLabelName;
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
  private _resources = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // route_prefix - computed: false, optional: true, required: false
  private _routePrefix?: string; 
  public get routePrefix() {
    return this.getStringAttribute('route_prefix');
  }
  public set routePrefix(value: string) {
    this._routePrefix = value;
  }
  public resetRoutePrefix() {
    this._routePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefixInput() {
    return this._routePrefix;
  }

  // sample_limit - computed: false, optional: true, required: false
  private _sampleLimit?: number; 
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }
  public set sampleLimit(value: number) {
    this._sampleLimit = value;
  }
  public resetSampleLimit() {
    this._sampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit;
  }

  // scrape_classes - computed: false, optional: true, required: false
  private _scrapeClasses = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClassesList(this, "scrape_classes", false);
  public get scrapeClasses() {
    return this._scrapeClasses;
  }
  public putScrapeClasses(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeClasses[] | cdktf.IResolvable) {
    this._scrapeClasses.internalValue = value;
  }
  public resetScrapeClasses() {
    this._scrapeClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeClassesInput() {
    return this._scrapeClasses.internalValue;
  }

  // scrape_config_namespace_selector - computed: false, optional: true, required: false
  private _scrapeConfigNamespaceSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelectorOutputReference(this, "scrape_config_namespace_selector");
  public get scrapeConfigNamespaceSelector() {
    return this._scrapeConfigNamespaceSelector;
  }
  public putScrapeConfigNamespaceSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigNamespaceSelector) {
    this._scrapeConfigNamespaceSelector.internalValue = value;
  }
  public resetScrapeConfigNamespaceSelector() {
    this._scrapeConfigNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeConfigNamespaceSelectorInput() {
    return this._scrapeConfigNamespaceSelector.internalValue;
  }

  // scrape_config_selector - computed: false, optional: true, required: false
  private _scrapeConfigSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelectorOutputReference(this, "scrape_config_selector");
  public get scrapeConfigSelector() {
    return this._scrapeConfigSelector;
  }
  public putScrapeConfigSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecScrapeConfigSelector) {
    this._scrapeConfigSelector.internalValue = value;
  }
  public resetScrapeConfigSelector() {
    this._scrapeConfigSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeConfigSelectorInput() {
    return this._scrapeConfigSelector.internalValue;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // scrape_protocols - computed: false, optional: true, required: false
  private _scrapeProtocols?: string[]; 
  public get scrapeProtocols() {
    return this.getListAttribute('scrape_protocols');
  }
  public set scrapeProtocols(value: string[]) {
    this._scrapeProtocols = value;
  }
  public resetScrapeProtocols() {
    this._scrapeProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeProtocolsInput() {
    return this._scrapeProtocols;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecSecurityContext) {
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

  // service_discovery_role - computed: false, optional: true, required: false
  private _serviceDiscoveryRole?: string; 
  public get serviceDiscoveryRole() {
    return this.getStringAttribute('service_discovery_role');
  }
  public set serviceDiscoveryRole(value: string) {
    this._serviceDiscoveryRole = value;
  }
  public resetServiceDiscoveryRole() {
    this._serviceDiscoveryRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryRoleInput() {
    return this._serviceDiscoveryRole;
  }

  // service_monitor_namespace_selector - computed: false, optional: true, required: false
  private _serviceMonitorNamespaceSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelectorOutputReference(this, "service_monitor_namespace_selector");
  public get serviceMonitorNamespaceSelector() {
    return this._serviceMonitorNamespaceSelector;
  }
  public putServiceMonitorNamespaceSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorNamespaceSelector) {
    this._serviceMonitorNamespaceSelector.internalValue = value;
  }
  public resetServiceMonitorNamespaceSelector() {
    this._serviceMonitorNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorNamespaceSelectorInput() {
    return this._serviceMonitorNamespaceSelector.internalValue;
  }

  // service_monitor_selector - computed: false, optional: true, required: false
  private _serviceMonitorSelector = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelectorOutputReference(this, "service_monitor_selector");
  public get serviceMonitorSelector() {
    return this._serviceMonitorSelector;
  }
  public putServiceMonitorSelector(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecServiceMonitorSelector) {
    this._serviceMonitorSelector.internalValue = value;
  }
  public resetServiceMonitorSelector() {
    this._serviceMonitorSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorSelectorInput() {
    return this._serviceMonitorSelector.internalValue;
  }

  // shards - computed: false, optional: true, required: false
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  public resetShards() {
    this._shards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // target_limit - computed: false, optional: true, required: false
  private _targetLimit?: number; 
  public get targetLimit() {
    return this.getNumberAttribute('target_limit');
  }
  public set targetLimit(value: number) {
    this._targetLimit = value;
  }
  public resetTargetLimit() {
    this._targetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLimitInput() {
    return this._targetLimit;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfigOutputReference(this, "tracing_config");
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public putTracingConfig(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTracingConfig) {
    this._tracingConfig.internalValue = value;
  }
  public resetTracingConfig() {
    this._tracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig.internalValue;
  }

  // tsdb - computed: false, optional: true, required: false
  private _tsdb = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdbOutputReference(this, "tsdb");
  public get tsdb() {
    return this._tsdb;
  }
  public putTsdb(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecTsdb) {
    this._tsdb.internalValue = value;
  }
  public resetTsdb() {
    this._tsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsdbInput() {
    return this._tsdb.internalValue;
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

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // wal_compression - computed: false, optional: true, required: false
  private _walCompression?: boolean | cdktf.IResolvable; 
  public get walCompression() {
    return this.getBooleanAttribute('wal_compression');
  }
  public set walCompression(value: boolean | cdktf.IResolvable) {
    this._walCompression = value;
  }
  public resetWalCompression() {
    this._walCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walCompressionInput() {
    return this._walCompression;
  }

  // web - computed: false, optional: true, required: false
  private _web = new DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: DataK8SMonitoringCoreosComPrometheusAgentV1Alpha1ManifestSpecWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}
