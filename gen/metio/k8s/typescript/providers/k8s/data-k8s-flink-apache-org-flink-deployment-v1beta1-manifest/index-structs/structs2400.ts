import * as cdktf from 'cdktf';
import { DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStore,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDisk,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFile,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfs,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinder,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMap,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsi,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApi,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDir,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeral,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFc,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolume,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlocker,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDisk,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepo,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfs,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPath,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsi,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfs,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaim,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDisk,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolume,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjected,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyte,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbd,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIo,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainers,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliases,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecrets,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainers,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOs,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGates,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaims,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGates,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContext,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerations,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraints,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsList } from './structs2000'
import { DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinity,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainers,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersList,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfig,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadata,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplate,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateOutputReference } from './structs1600'
import { DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngress,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressOutputReference,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJob,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobOutputReference } from './structs0'
import { DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManager,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerToTerraform,
dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerToHclTerraform,
DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerOutputReference } from './structs800'
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#key DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#mode DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#default_mode DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#items DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#items}
  */
  readonly items?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#optional DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#secret_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsList",
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#fs_type DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#secret_ref DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_namespace DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef",
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosSecretRef) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#fs_type DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#storage_policy_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#storage_policy_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_path}
  */
  readonly volumePath?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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

  // volume_path - computed: false, optional: true, required: false
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  public resetVolumePath() {
    this._volumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#aws_elastic_block_store DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#azure_disk DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#azure_file DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#cephfs DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#cinder DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#cinder}
  */
  readonly cinder?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#config_map DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#csi DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#csi}
  */
  readonly csi?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#downward_api DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#empty_dir DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ephemeral DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#fc DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#fc}
  */
  readonly fc?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#flex_volume DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#flocker DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#flocker}
  */
  readonly flocker?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#gce_persistent_disk DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#git_repo DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#glusterfs DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_path}
  */
  readonly hostPath?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#iscsi DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#nfs DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#nfs}
  */
  readonly nfs?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#persistent_volume_claim DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#photon_persistent_disk DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#portworx_volume DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#projected DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#projected}
  */
  readonly projected?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#quobyte DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyte;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#rbd DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#rbd}
  */
  readonly rbd?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#scale_io DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#secret DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#storageos DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#storageos}
  */
  readonly storageos?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#vsphere_volume DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCephfs) {
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
  private _cinder = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCinder) {
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
  private _configMap = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesConfigMap) {
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
  private _csi = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesEphemeral) {
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
  private _fc = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFc) {
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
  private _flexVolume = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesProjected) {
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
  private _quobyte = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesScaleIo) {
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
  private _secret = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesSecret) {
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
  private _storageos = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesVsphereVolume) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#active_deadline_seconds DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#affinity DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#automount_service_account_token DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#containers DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#containers}
  */
  readonly containers?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#dns_config DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#dns_policy DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#enable_service_links DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ephemeral_containers DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_aliases DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_ipc DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_network DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_pid DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_users DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_users}
  */
  readonly hostUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#hostname DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image_pull_secrets DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#init_containers DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#node_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#node_selector DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#os DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#os}
  */
  readonly os?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#overhead DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#overhead}
  */
  readonly overhead?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#preemption_policy DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#priority DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#priority_class_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#readiness_gates DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resource_claims DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resource_claims}
  */
  readonly resourceClaims?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#restart_policy DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#runtime_class_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#scheduler_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#scheduling_gates DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#scheduling_gates}
  */
  readonly schedulingGates?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#security_context DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#service_account DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#service_account_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#set_hostname_as_fqdn DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#set_hostname_as_fqdn}
  */
  readonly setHostnameAsFqdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#share_process_namespace DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#subdomain DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#termination_grace_period_seconds DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#tolerations DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#topology_spread_constraints DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volumes DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volumes}
  */
  readonly volumes?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    affinity: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityToTerraform(struct!.affinity),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    containers: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    ephemeral_containers: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    host_aliases: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    host_users: cdktf.booleanToTerraform(struct!.hostUsers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_pull_secrets: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    os: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsToTerraform(struct!.os),
    overhead: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overhead),
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    resource_claims: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsToTerraform, false)(struct!.resourceClaims),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    scheduling_gates: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesToTerraform, false)(struct!.schedulingGates),
    security_context: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    set_hostname_as_fqdn: cdktf.booleanToTerraform(struct!.setHostnameAsFqdn),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec | cdktf.IResolvable): any {
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
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinity",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersList",
    },
    dns_config: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfig",
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
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesList",
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
    host_users: {
      value: cdktf.booleanToHclTerraform(struct!.hostUsers),
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
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersList",
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
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOs",
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
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesList",
    },
    resource_claims: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsToHclTerraform, false)(struct!.resourceClaims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsList",
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
    scheduling_gates: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesToHclTerraform, false)(struct!.schedulingGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesList",
    },
    security_context: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContext",
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
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec | cdktf.IResolvable | undefined {
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
    if (this._hostUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUsers = this._hostUsers;
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
    if (this._resourceClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaims = this._resourceClaims?.internalValue;
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
    if (this._schedulingGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingGates = this._schedulingGates?.internalValue;
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec | cdktf.IResolvable | undefined) {
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
      this._hostUsers = undefined;
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
      this._resourceClaims.internalValue = undefined;
      this._restartPolicy = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._schedulingGates.internalValue = undefined;
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
      this._hostUsers = value.hostUsers;
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
      this._resourceClaims.internalValue = value.resourceClaims;
      this._restartPolicy = value.restartPolicy;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._schedulingGates.internalValue = value.schedulingGates;
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
  private _affinity = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecAffinity) {
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
  private _containers = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _dnsConfig = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecDnsConfig) {
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
  private _ephemeralContainers = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecEphemeralContainers[] | cdktf.IResolvable) {
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
  private _hostAliases = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecHostAliases[] | cdktf.IResolvable) {
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

  // host_users - computed: false, optional: true, required: false
  private _hostUsers?: boolean | cdktf.IResolvable; 
  public get hostUsers() {
    return this.getBooleanAttribute('host_users');
  }
  public set hostUsers(value: boolean | cdktf.IResolvable) {
    this._hostUsers = value;
  }
  public resetHostUsers() {
    this._hostUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUsersInput() {
    return this._hostUsers;
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
  private _imagePullSecrets = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
  private _os = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOs) {
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
  private _readinessGates = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // resource_claims - computed: false, optional: true, required: false
  private _resourceClaims = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaimsList(this, "resource_claims", false);
  public get resourceClaims() {
    return this._resourceClaims;
  }
  public putResourceClaims(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecResourceClaims[] | cdktf.IResolvable) {
    this._resourceClaims.internalValue = value;
  }
  public resetResourceClaims() {
    this._resourceClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimsInput() {
    return this._resourceClaims.internalValue;
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

  // scheduling_gates - computed: false, optional: true, required: false
  private _schedulingGates = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGatesList(this, "scheduling_gates", false);
  public get schedulingGates() {
    return this._schedulingGates;
  }
  public putSchedulingGates(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSchedulingGates[] | cdktf.IResolvable) {
    this._schedulingGates.internalValue = value;
  }
  public resetSchedulingGates() {
    this._schedulingGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingGatesInput() {
    return this._schedulingGates.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecSecurityContext) {
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
  private _tolerations = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#last_probe_time DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#last_probe_time}
  */
  readonly lastProbeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#last_transition_time DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#last_transition_time}
  */
  readonly lastTransitionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#status DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#type DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_probe_time: cdktf.stringToTerraform(struct!.lastProbeTime),
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_probe_time: {
      value: cdktf.stringToHclTerraform(struct!.lastProbeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastProbeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastProbeTime = this._lastProbeTime;
    }
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastProbeTime = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastProbeTime = value.lastProbeTime;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_probe_time - computed: false, optional: true, required: false
  private _lastProbeTime?: string; 
  public get lastProbeTime() {
    return this.getStringAttribute('last_probe_time');
  }
  public set lastProbeTime(value: string) {
    this._lastProbeTime = value;
  }
  public resetLastProbeTime() {
    this._lastProbeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastProbeTimeInput() {
    return this._lastProbeTime;
  }

  // last_transition_time - computed: false, optional: true, required: false
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  public resetLastTransitionTime() {
    this._lastTransitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#claims DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#limits DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#requests DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsList",
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#mount_path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#recursive_read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts | cdktf.IResolvable): any {
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
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
    }
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

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#allocated_resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#last_state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#last_state}
  */
  readonly lastState?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ready DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ready}
  */
  readonly ready?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#restart_count DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#restart_count}
  */
  readonly restartCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started}
  */
  readonly started?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#state}
  */
  readonly state?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_mounts DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    image: cdktf.stringToTerraform(struct!.image),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    last_state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateToTerraform(struct!.lastState),
    name: cdktf.stringToTerraform(struct!.name),
    ready: cdktf.booleanToTerraform(struct!.ready),
    resources: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesToTerraform(struct!.resources),
    restart_count: cdktf.numberToTerraform(struct!.restartCount),
    started: cdktf.booleanToTerraform(struct!.started),
    state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateToTerraform(struct!.state),
    volume_mounts: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
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
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateToHclTerraform(struct!.lastState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready: {
      value: cdktf.booleanToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources",
    },
    restart_count: {
      value: cdktf.numberToHclTerraform(struct!.restartCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started: {
      value: cdktf.booleanToHclTerraform(struct!.started),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._lastState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastState = this._lastState?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restartCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartCount = this._restartCount;
    }
    if (this._started !== undefined) {
      hasAnyValues = true;
      internalValueResult.started = this._started;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedResources = undefined;
      this._containerId = undefined;
      this._image = undefined;
      this._imageId = undefined;
      this._lastState.internalValue = undefined;
      this._name = undefined;
      this._ready = undefined;
      this._resources.internalValue = undefined;
      this._restartCount = undefined;
      this._started = undefined;
      this._state.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedResources = value.allocatedResources;
      this._containerId = value.containerId;
      this._image = value.image;
      this._imageId = value.imageId;
      this._lastState.internalValue = value.lastState;
      this._name = value.name;
      this._ready = value.ready;
      this._resources.internalValue = value.resources;
      this._restartCount = value.restartCount;
      this._started = value.started;
      this._state.internalValue = value.state;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // last_state - computed: false, optional: true, required: false
  private _lastState = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastStateOutputReference(this, "last_state");
  public get lastState() {
    return this._lastState;
  }
  public putLastState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesLastState) {
    this._lastState.internalValue = value;
  }
  public resetLastState() {
    this._lastState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStateInput() {
    return this._lastState.internalValue;
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

  // ready - computed: false, optional: true, required: false
  private _ready?: boolean | cdktf.IResolvable; 
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
  public set ready(value: boolean | cdktf.IResolvable) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restart_count - computed: false, optional: true, required: false
  private _restartCount?: number; 
  public get restartCount() {
    return this.getNumberAttribute('restart_count');
  }
  public set restartCount(value: number) {
    this._restartCount = value;
  }
  public resetRestartCount() {
    this._restartCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartCountInput() {
    return this._restartCount;
  }

  // started - computed: false, optional: true, required: false
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // state - computed: false, optional: true, required: false
  private _state = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#claims DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#limits DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#requests DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsList",
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#mount_path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#recursive_read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts | cdktf.IResolvable): any {
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
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
    }
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

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#allocated_resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#last_state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#last_state}
  */
  readonly lastState?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ready DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ready}
  */
  readonly ready?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#restart_count DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#restart_count}
  */
  readonly restartCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started}
  */
  readonly started?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#state}
  */
  readonly state?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_mounts DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    image: cdktf.stringToTerraform(struct!.image),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    last_state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateToTerraform(struct!.lastState),
    name: cdktf.stringToTerraform(struct!.name),
    ready: cdktf.booleanToTerraform(struct!.ready),
    resources: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesToTerraform(struct!.resources),
    restart_count: cdktf.numberToTerraform(struct!.restartCount),
    started: cdktf.booleanToTerraform(struct!.started),
    state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateToTerraform(struct!.state),
    volume_mounts: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
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
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateToHclTerraform(struct!.lastState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready: {
      value: cdktf.booleanToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources",
    },
    restart_count: {
      value: cdktf.numberToHclTerraform(struct!.restartCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started: {
      value: cdktf.booleanToHclTerraform(struct!.started),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._lastState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastState = this._lastState?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restartCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartCount = this._restartCount;
    }
    if (this._started !== undefined) {
      hasAnyValues = true;
      internalValueResult.started = this._started;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedResources = undefined;
      this._containerId = undefined;
      this._image = undefined;
      this._imageId = undefined;
      this._lastState.internalValue = undefined;
      this._name = undefined;
      this._ready = undefined;
      this._resources.internalValue = undefined;
      this._restartCount = undefined;
      this._started = undefined;
      this._state.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedResources = value.allocatedResources;
      this._containerId = value.containerId;
      this._image = value.image;
      this._imageId = value.imageId;
      this._lastState.internalValue = value.lastState;
      this._name = value.name;
      this._ready = value.ready;
      this._resources.internalValue = value.resources;
      this._restartCount = value.restartCount;
      this._started = value.started;
      this._state.internalValue = value.state;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // last_state - computed: false, optional: true, required: false
  private _lastState = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastStateOutputReference(this, "last_state");
  public get lastState() {
    return this._lastState;
  }
  public putLastState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesLastState) {
    this._lastState.internalValue = value;
  }
  public resetLastState() {
    this._lastState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStateInput() {
    return this._lastState.internalValue;
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

  // ready - computed: false, optional: true, required: false
  private _ready?: boolean | cdktf.IResolvable; 
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
  public set ready(value: boolean | cdktf.IResolvable) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restart_count - computed: false, optional: true, required: false
  private _restartCount?: number; 
  public get restartCount() {
    return this.getNumberAttribute('restart_count');
  }
  public set restartCount(value: number) {
    this._restartCount = value;
  }
  public resetRestartCount() {
    this._restartCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartCountInput() {
    return this._restartCount;
  }

  // started - computed: false, optional: true, required: false
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // state - computed: false, optional: true, required: false
  private _state = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ip DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#claims DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#limits DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#requests DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsList",
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startedAt = value.startedAt;
    }
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#exit_code DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#exit_code}
  */
  readonly exitCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#finished_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#finished_at}
  */
  readonly finishedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#signal DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#signal}
  */
  readonly signal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started_at DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started_at}
  */
  readonly startedAt?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    exit_code: cdktf.numberToTerraform(struct!.exitCode),
    finished_at: cdktf.stringToTerraform(struct!.finishedAt),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    signal: cdktf.numberToTerraform(struct!.signal),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exit_code: {
      value: cdktf.numberToHclTerraform(struct!.exitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished_at: {
      value: cdktf.stringToHclTerraform(struct!.finishedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal: {
      value: cdktf.numberToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._exitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitCode = this._exitCode;
    }
    if (this._finishedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishedAt = this._finishedAt;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerId = undefined;
      this._exitCode = undefined;
      this._finishedAt = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._signal = undefined;
      this._startedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerId = value.containerId;
      this._exitCode = value.exitCode;
      this._finishedAt = value.finishedAt;
      this._message = value.message;
      this._reason = value.reason;
      this._signal = value.signal;
      this._startedAt = value.startedAt;
    }
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // exit_code - computed: false, optional: true, required: false
  private _exitCode?: number; 
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }
  public set exitCode(value: number) {
    this._exitCode = value;
  }
  public resetExitCode() {
    this._exitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitCodeInput() {
    return this._exitCode;
  }

  // finished_at - computed: false, optional: true, required: false
  private _finishedAt?: string; 
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }
  public set finishedAt(value: string) {
    this._finishedAt = value;
  }
  public resetFinishedAt() {
    this._finishedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedAtInput() {
    return this._finishedAt;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: number; 
  public get signal() {
    return this.getNumberAttribute('signal');
  }
  public set signal(value: number) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._reason = value.reason;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#running DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#running}
  */
  readonly running?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#terminated DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#terminated}
  */
  readonly terminated?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#waiting DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#waiting}
  */
  readonly waiting?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningToTerraform(struct!.running),
    terminated: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedToTerraform(struct!.terminated),
    waiting: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingToTerraform(struct!.waiting),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningToHclTerraform(struct!.running),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning",
    },
    terminated: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedToHclTerraform(struct!.terminated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated",
    },
    waiting: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingToHclTerraform(struct!.waiting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._running?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.running = this._running?.internalValue;
    }
    if (this._terminated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminated = this._terminated?.internalValue;
    }
    if (this._waiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waiting = this._waiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._running.internalValue = undefined;
      this._terminated.internalValue = undefined;
      this._waiting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._running.internalValue = value.running;
      this._terminated.internalValue = value.terminated;
      this._waiting.internalValue = value.waiting;
    }
  }

  // running - computed: false, optional: true, required: false
  private _running = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunningOutputReference(this, "running");
  public get running() {
    return this._running;
  }
  public putRunning(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateRunning) {
    this._running.internalValue = value;
  }
  public resetRunning() {
    this._running.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running.internalValue;
  }

  // terminated - computed: false, optional: true, required: false
  private _terminated = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminatedOutputReference(this, "terminated");
  public get terminated() {
    return this._terminated;
  }
  public putTerminated(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateTerminated) {
    this._terminated.internalValue = value;
  }
  public resetTerminated() {
    this._terminated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedInput() {
    return this._terminated.internalValue;
  }

  // waiting - computed: false, optional: true, required: false
  private _waiting = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaitingOutputReference(this, "waiting");
  public get waiting() {
    return this._waiting;
  }
  public putWaiting(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateWaiting) {
    this._waiting.internalValue = value;
  }
  public resetWaiting() {
    this._waiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingInput() {
    return this._waiting.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#mount_path DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#recursive_read_only DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts | cdktf.IResolvable): any {
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
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
    }
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

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#allocated_resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image_id DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#last_state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#last_state}
  */
  readonly lastState?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ready DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ready}
  */
  readonly ready?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resources DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#restart_count DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#restart_count}
  */
  readonly restartCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#started DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#started}
  */
  readonly started?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#state DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#state}
  */
  readonly state?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#volume_mounts DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    image: cdktf.stringToTerraform(struct!.image),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    last_state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateToTerraform(struct!.lastState),
    name: cdktf.stringToTerraform(struct!.name),
    ready: cdktf.booleanToTerraform(struct!.ready),
    resources: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesToTerraform(struct!.resources),
    restart_count: cdktf.numberToTerraform(struct!.restartCount),
    started: cdktf.booleanToTerraform(struct!.started),
    state: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateToTerraform(struct!.state),
    volume_mounts: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
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
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateToHclTerraform(struct!.lastState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready: {
      value: cdktf.booleanToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources",
    },
    restart_count: {
      value: cdktf.numberToHclTerraform(struct!.restartCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    started: {
      value: cdktf.booleanToHclTerraform(struct!.started),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateToHclTerraform(struct!.state),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._lastState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastState = this._lastState?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restartCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartCount = this._restartCount;
    }
    if (this._started !== undefined) {
      hasAnyValues = true;
      internalValueResult.started = this._started;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedResources = undefined;
      this._containerId = undefined;
      this._image = undefined;
      this._imageId = undefined;
      this._lastState.internalValue = undefined;
      this._name = undefined;
      this._ready = undefined;
      this._resources.internalValue = undefined;
      this._restartCount = undefined;
      this._started = undefined;
      this._state.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedResources = value.allocatedResources;
      this._containerId = value.containerId;
      this._image = value.image;
      this._imageId = value.imageId;
      this._lastState.internalValue = value.lastState;
      this._name = value.name;
      this._ready = value.ready;
      this._resources.internalValue = value.resources;
      this._restartCount = value.restartCount;
      this._started = value.started;
      this._state.internalValue = value.state;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // last_state - computed: false, optional: true, required: false
  private _lastState = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastStateOutputReference(this, "last_state");
  public get lastState() {
    return this._lastState;
  }
  public putLastState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesLastState) {
    this._lastState.internalValue = value;
  }
  public resetLastState() {
    this._lastState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastStateInput() {
    return this._lastState.internalValue;
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

  // ready - computed: false, optional: true, required: false
  private _ready?: boolean | cdktf.IResolvable; 
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
  public set ready(value: boolean | cdktf.IResolvable) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restart_count - computed: false, optional: true, required: false
  private _restartCount?: number; 
  public get restartCount() {
    return this.getNumberAttribute('restart_count');
  }
  public set restartCount(value: number) {
    this._restartCount = value;
  }
  public resetRestartCount() {
    this._restartCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartCountInput() {
    return this._restartCount;
  }

  // started - computed: false, optional: true, required: false
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // state - computed: false, optional: true, required: false
  private _state = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ip DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resource_claim_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resource_claim_name}
  */
  readonly resourceClaimName?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_claim_name: cdktf.stringToTerraform(struct!.resourceClaimName),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses | cdktf.IResolvable): any {
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
    resource_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaimName = this._resourceClaimName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceClaimName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceClaimName = value.resourceClaimName;
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

  // resource_claim_name - computed: false, optional: true, required: false
  private _resourceClaimName?: string; 
  public get resourceClaimName() {
    return this.getStringAttribute('resource_claim_name');
  }
  public set resourceClaimName(value: string) {
    this._resourceClaimName = value;
  }
  public resetResourceClaimName() {
    this._resourceClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimNameInput() {
    return this._resourceClaimName;
  }
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesOutputReference {
    return new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#conditions DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#conditions}
  */
  readonly conditions?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#container_statuses DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#container_statuses}
  */
  readonly containerStatuses?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ephemeral_container_statuses DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ephemeral_container_statuses}
  */
  readonly ephemeralContainerStatuses?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_i_ps DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_i_ps}
  */
  readonly hostIPs?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#host_ip DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#init_container_statuses DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#init_container_statuses}
  */
  readonly initContainerStatuses?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#message DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#nominated_node_name DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#nominated_node_name}
  */
  readonly nominatedNodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#phase DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#pod_i_ps DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#pod_i_ps}
  */
  readonly podIPs?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#pod_ip DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#pod_ip}
  */
  readonly podIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#qos_class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#qos_class}
  */
  readonly qosClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#reason DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resize DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resize}
  */
  readonly resize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resource_claim_statuses DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resource_claim_statuses}
  */
  readonly resourceClaimStatuses?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#start_time DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsToTerraform, false)(struct!.conditions),
    container_statuses: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesToTerraform, false)(struct!.containerStatuses),
    ephemeral_container_statuses: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesToTerraform, false)(struct!.ephemeralContainerStatuses),
    host_i_ps: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsToTerraform, false)(struct!.hostIPs),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    init_container_statuses: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesToTerraform, false)(struct!.initContainerStatuses),
    message: cdktf.stringToTerraform(struct!.message),
    nominated_node_name: cdktf.stringToTerraform(struct!.nominatedNodeName),
    phase: cdktf.stringToTerraform(struct!.phase),
    pod_i_ps: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsToTerraform, false)(struct!.podIPs),
    pod_ip: cdktf.stringToTerraform(struct!.podIp),
    qos_class: cdktf.stringToTerraform(struct!.qosClass),
    reason: cdktf.stringToTerraform(struct!.reason),
    resize: cdktf.stringToTerraform(struct!.resize),
    resource_claim_statuses: cdktf.listMapper(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesToTerraform, false)(struct!.resourceClaimStatuses),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsList",
    },
    container_statuses: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesToHclTerraform, false)(struct!.containerStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesList",
    },
    ephemeral_container_statuses: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesToHclTerraform, false)(struct!.ephemeralContainerStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesList",
    },
    host_i_ps: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsToHclTerraform, false)(struct!.hostIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsList",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_container_statuses: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesToHclTerraform, false)(struct!.initContainerStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesList",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nominated_node_name: {
      value: cdktf.stringToHclTerraform(struct!.nominatedNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_i_ps: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsToHclTerraform, false)(struct!.podIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsList",
    },
    pod_ip: {
      value: cdktf.stringToHclTerraform(struct!.podIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_class: {
      value: cdktf.stringToHclTerraform(struct!.qosClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resize: {
      value: cdktf.stringToHclTerraform(struct!.resize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_claim_statuses: {
      value: cdktf.listMapperHcl(dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesToHclTerraform, false)(struct!.resourceClaimStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesList",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._containerStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStatuses = this._containerStatuses?.internalValue;
    }
    if (this._ephemeralContainerStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainerStatuses = this._ephemeralContainerStatuses?.internalValue;
    }
    if (this._hostIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIPs = this._hostIPs?.internalValue;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._initContainerStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainerStatuses = this._initContainerStatuses?.internalValue;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._nominatedNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nominatedNodeName = this._nominatedNodeName;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._podIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIPs = this._podIPs?.internalValue;
    }
    if (this._podIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIp = this._podIp;
    }
    if (this._qosClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosClass = this._qosClass;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._resize !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize;
    }
    if (this._resourceClaimStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaimStatuses = this._resourceClaimStatuses?.internalValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._containerStatuses.internalValue = undefined;
      this._ephemeralContainerStatuses.internalValue = undefined;
      this._hostIPs.internalValue = undefined;
      this._hostIp = undefined;
      this._initContainerStatuses.internalValue = undefined;
      this._message = undefined;
      this._nominatedNodeName = undefined;
      this._phase = undefined;
      this._podIPs.internalValue = undefined;
      this._podIp = undefined;
      this._qosClass = undefined;
      this._reason = undefined;
      this._resize = undefined;
      this._resourceClaimStatuses.internalValue = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._containerStatuses.internalValue = value.containerStatuses;
      this._ephemeralContainerStatuses.internalValue = value.ephemeralContainerStatuses;
      this._hostIPs.internalValue = value.hostIPs;
      this._hostIp = value.hostIp;
      this._initContainerStatuses.internalValue = value.initContainerStatuses;
      this._message = value.message;
      this._nominatedNodeName = value.nominatedNodeName;
      this._phase = value.phase;
      this._podIPs.internalValue = value.podIPs;
      this._podIp = value.podIp;
      this._qosClass = value.qosClass;
      this._reason = value.reason;
      this._resize = value.resize;
      this._resourceClaimStatuses.internalValue = value.resourceClaimStatuses;
      this._startTime = value.startTime;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // container_statuses - computed: false, optional: true, required: false
  private _containerStatuses = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatusesList(this, "container_statuses", false);
  public get containerStatuses() {
    return this._containerStatuses;
  }
  public putContainerStatuses(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusContainerStatuses[] | cdktf.IResolvable) {
    this._containerStatuses.internalValue = value;
  }
  public resetContainerStatuses() {
    this._containerStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStatusesInput() {
    return this._containerStatuses.internalValue;
  }

  // ephemeral_container_statuses - computed: false, optional: true, required: false
  private _ephemeralContainerStatuses = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatusesList(this, "ephemeral_container_statuses", false);
  public get ephemeralContainerStatuses() {
    return this._ephemeralContainerStatuses;
  }
  public putEphemeralContainerStatuses(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusEphemeralContainerStatuses[] | cdktf.IResolvable) {
    this._ephemeralContainerStatuses.internalValue = value;
  }
  public resetEphemeralContainerStatuses() {
    this._ephemeralContainerStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainerStatusesInput() {
    return this._ephemeralContainerStatuses.internalValue;
  }

  // host_i_ps - computed: false, optional: true, required: false
  private _hostIPs = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPsList(this, "host_i_ps", false);
  public get hostIPs() {
    return this._hostIPs;
  }
  public putHostIPs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusHostIPs[] | cdktf.IResolvable) {
    this._hostIPs.internalValue = value;
  }
  public resetHostIPs() {
    this._hostIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIPsInput() {
    return this._hostIPs.internalValue;
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

  // init_container_statuses - computed: false, optional: true, required: false
  private _initContainerStatuses = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatusesList(this, "init_container_statuses", false);
  public get initContainerStatuses() {
    return this._initContainerStatuses;
  }
  public putInitContainerStatuses(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusInitContainerStatuses[] | cdktf.IResolvable) {
    this._initContainerStatuses.internalValue = value;
  }
  public resetInitContainerStatuses() {
    this._initContainerStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerStatusesInput() {
    return this._initContainerStatuses.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // nominated_node_name - computed: false, optional: true, required: false
  private _nominatedNodeName?: string; 
  public get nominatedNodeName() {
    return this.getStringAttribute('nominated_node_name');
  }
  public set nominatedNodeName(value: string) {
    this._nominatedNodeName = value;
  }
  public resetNominatedNodeName() {
    this._nominatedNodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nominatedNodeNameInput() {
    return this._nominatedNodeName;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // pod_i_ps - computed: false, optional: true, required: false
  private _podIPs = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPsList(this, "pod_i_ps", false);
  public get podIPs() {
    return this._podIPs;
  }
  public putPodIPs(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusPodIPs[] | cdktf.IResolvable) {
    this._podIPs.internalValue = value;
  }
  public resetPodIPs() {
    this._podIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIPsInput() {
    return this._podIPs.internalValue;
  }

  // pod_ip - computed: false, optional: true, required: false
  private _podIp?: string; 
  public get podIp() {
    return this.getStringAttribute('pod_ip');
  }
  public set podIp(value: string) {
    this._podIp = value;
  }
  public resetPodIp() {
    this._podIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpInput() {
    return this._podIp;
  }

  // qos_class - computed: false, optional: true, required: false
  private _qosClass?: string; 
  public get qosClass() {
    return this.getStringAttribute('qos_class');
  }
  public set qosClass(value: string) {
    this._qosClass = value;
  }
  public resetQosClass() {
    this._qosClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosClassInput() {
    return this._qosClass;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // resize - computed: false, optional: true, required: false
  private _resize?: string; 
  public get resize() {
    return this.getStringAttribute('resize');
  }
  public set resize(value: string) {
    this._resize = value;
  }
  public resetResize() {
    this._resize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize;
  }

  // resource_claim_statuses - computed: false, optional: true, required: false
  private _resourceClaimStatuses = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatusesList(this, "resource_claim_statuses", false);
  public get resourceClaimStatuses() {
    return this._resourceClaimStatuses;
  }
  public putResourceClaimStatuses(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusResourceClaimStatuses[] | cdktf.IResolvable) {
    this._resourceClaimStatuses.internalValue = value;
  }
  public resetResourceClaimStatuses() {
    this._resourceClaimStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimStatusesInput() {
    return this._resourceClaimStatuses.internalValue;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#api_version DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#kind DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#metadata DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#spec DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#status DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#status}
  */
  readonly status?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecToTerraform(struct!.spec),
    status: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusToTerraform(struct!.status),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate | cdktf.IResolvable): any {
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
    metadata: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadata",
    },
    spec: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec",
    },
    status: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate | cdktf.IResolvable | undefined {
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
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
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
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateMetadata) {
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
  private _spec = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#cpu DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ephemeral_storage DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ephemeral_storage}
  */
  readonly ephemeralStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#memory DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    ephemeral_storage: cdktf.stringToTerraform(struct!.ephemeralStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ephemeral_storage: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ephemeralStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._ephemeralStorage = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._ephemeralStorage = value.ephemeralStorage;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: string; 
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: string) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#pod_template DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#pod_template}
  */
  readonly podTemplate?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#replicas DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#resource DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_template: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateToTerraform(struct!.podTemplate),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resource: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceToTerraform(struct!.resource),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_template: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateToHclTerraform(struct!.podTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplate = this._podTemplate?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podTemplate.internalValue = undefined;
      this._replicas = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podTemplate.internalValue = value.podTemplate;
      this._replicas = value.replicas;
      this._resource.internalValue = value.resource;
    }
  }

  // pod_template - computed: false, optional: true, required: false
  private _podTemplate = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplateOutputReference(this, "pod_template");
  public get podTemplate() {
    return this._podTemplate;
  }
  public putPodTemplate(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerPodTemplate) {
    this._podTemplate.internalValue = value;
  }
  public resetPodTemplate() {
    this._podTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateInput() {
    return this._podTemplate.internalValue;
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

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}
export interface DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#flink_configuration DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#flink_configuration}
  */
  readonly flinkConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#flink_version DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#flink_version}
  */
  readonly flinkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#image_pull_policy DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#ingress DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#job DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#job}
  */
  readonly job?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#job_manager DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#job_manager}
  */
  readonly jobManager?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManager;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#log_configuration DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#log_configuration}
  */
  readonly logConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#mode DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#pod_template DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#pod_template}
  */
  readonly podTemplate?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#restart_nonce DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#restart_nonce}
  */
  readonly restartNonce?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#service_account DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/flink_apache_org_flink_deployment_v1beta1_manifest#task_manager DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1Manifest#task_manager}
  */
  readonly taskManager?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager;
}

export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecToTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flink_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.flinkConfiguration),
    flink_version: cdktf.stringToTerraform(struct!.flinkVersion),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    ingress: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressToTerraform(struct!.ingress),
    job: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobToTerraform(struct!.job),
    job_manager: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerToTerraform(struct!.jobManager),
    log_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logConfiguration),
    mode: cdktf.stringToTerraform(struct!.mode),
    pod_template: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateToTerraform(struct!.podTemplate),
    restart_nonce: cdktf.numberToTerraform(struct!.restartNonce),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    task_manager: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerToTerraform(struct!.taskManager),
  }
}


export function dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flink_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.flinkConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    flink_version: {
      value: cdktf.stringToHclTerraform(struct!.flinkVersion),
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
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngress",
    },
    job: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJob",
    },
    job_manager: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerToHclTerraform(struct!.jobManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManager",
    },
    log_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_template: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateToHclTerraform(struct!.podTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplate",
    },
    restart_nonce: {
      value: cdktf.numberToHclTerraform(struct!.restartNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_manager: {
      value: dataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerToHclTerraform(struct!.taskManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flinkConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkConfiguration = this._flinkConfiguration;
    }
    if (this._flinkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkVersion = this._flinkVersion;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._jobManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobManager = this._jobManager?.internalValue;
    }
    if (this._logConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._podTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplate = this._podTemplate?.internalValue;
    }
    if (this._restartNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartNonce = this._restartNonce;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._taskManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskManager = this._taskManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flinkConfiguration = undefined;
      this._flinkVersion = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._ingress.internalValue = undefined;
      this._job.internalValue = undefined;
      this._jobManager.internalValue = undefined;
      this._logConfiguration = undefined;
      this._mode = undefined;
      this._podTemplate.internalValue = undefined;
      this._restartNonce = undefined;
      this._serviceAccount = undefined;
      this._taskManager.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flinkConfiguration = value.flinkConfiguration;
      this._flinkVersion = value.flinkVersion;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._ingress.internalValue = value.ingress;
      this._job.internalValue = value.job;
      this._jobManager.internalValue = value.jobManager;
      this._logConfiguration = value.logConfiguration;
      this._mode = value.mode;
      this._podTemplate.internalValue = value.podTemplate;
      this._restartNonce = value.restartNonce;
      this._serviceAccount = value.serviceAccount;
      this._taskManager.internalValue = value.taskManager;
    }
  }

  // flink_configuration - computed: false, optional: true, required: false
  private _flinkConfiguration?: { [key: string]: string }; 
  public get flinkConfiguration() {
    return this.getStringMapAttribute('flink_configuration');
  }
  public set flinkConfiguration(value: { [key: string]: string }) {
    this._flinkConfiguration = value;
  }
  public resetFlinkConfiguration() {
    this._flinkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkConfigurationInput() {
    return this._flinkConfiguration;
  }

  // flink_version - computed: false, optional: true, required: false
  private _flinkVersion?: string; 
  public get flinkVersion() {
    return this.getStringAttribute('flink_version');
  }
  public set flinkVersion(value: string) {
    this._flinkVersion = value;
  }
  public resetFlinkVersion() {
    this._flinkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkVersionInput() {
    return this._flinkVersion;
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

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // job_manager - computed: false, optional: true, required: false
  private _jobManager = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManagerOutputReference(this, "job_manager");
  public get jobManager() {
    return this._jobManager;
  }
  public putJobManager(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecJobManager) {
    this._jobManager.internalValue = value;
  }
  public resetJobManager() {
    this._jobManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobManagerInput() {
    return this._jobManager.internalValue;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration?: { [key: string]: string }; 
  public get logConfiguration() {
    return this.getStringMapAttribute('log_configuration');
  }
  public set logConfiguration(value: { [key: string]: string }) {
    this._logConfiguration = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration;
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

  // pod_template - computed: false, optional: true, required: false
  private _podTemplate = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplateOutputReference(this, "pod_template");
  public get podTemplate() {
    return this._podTemplate;
  }
  public putPodTemplate(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecPodTemplate) {
    this._podTemplate.internalValue = value;
  }
  public resetPodTemplate() {
    this._podTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateInput() {
    return this._podTemplate.internalValue;
  }

  // restart_nonce - computed: false, optional: true, required: false
  private _restartNonce?: number; 
  public get restartNonce() {
    return this.getNumberAttribute('restart_nonce');
  }
  public set restartNonce(value: number) {
    this._restartNonce = value;
  }
  public resetRestartNonce() {
    this._restartNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartNonceInput() {
    return this._restartNonce;
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

  // task_manager - computed: false, optional: true, required: false
  private _taskManager = new DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManagerOutputReference(this, "task_manager");
  public get taskManager() {
    return this._taskManager;
  }
  public putTaskManager(value: DataK8SFlinkApacheOrgFlinkDeploymentV1Beta1ManifestSpecTaskManager) {
    this._taskManager.internalValue = value;
  }
  public resetTaskManager() {
    this._taskManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskManagerInput() {
    return this._taskManager.internalValue;
  }
}
