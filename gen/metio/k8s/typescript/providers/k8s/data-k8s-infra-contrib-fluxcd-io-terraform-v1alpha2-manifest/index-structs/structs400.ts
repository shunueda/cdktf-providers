import * as cdktf from 'cdktf';
import { DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFile,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfs,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinder,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMap,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeral,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFc,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlocker,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepo,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPath,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsi,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinity,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnv,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFrom,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliases,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainers,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResources,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContext,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerations,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMounts,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadata,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfig,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFrom,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlanner,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRef,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloud,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudOutputReference,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOn,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappings,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecks,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecrets,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsList,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediation,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationToTerraform,
dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationToHclTerraform,
DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationOutputReference } from './structs0'
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#server DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#server}
  */
  readonly server: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#claim_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#pd_id DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_id DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#operator DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#values DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#match_expressions DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#match_labels DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#label_selector DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#signer_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#api_version DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#field_path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#container_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#divisor DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#resource DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#resource_field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#audience DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#expiration_seconds DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#cluster_trust_bundle DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#config_map DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#config_map}
  */
  readonly configMap?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#downward_api DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret}
  */
  readonly secret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#service_account_token DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#default_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#sources DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#sources}
  */
  readonly sources?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#group DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#registry DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#tenant DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#user DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#image DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#keyring DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#monitors DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#pool DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#user DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#gateway DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#protection_domain DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#ssl_enabled DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#storage_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#storage_pool DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#system DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#default_mode DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#items DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#items}
  */
  readonly items?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_namespace DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef",
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosSecretRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fs_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#storage_policy_id DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#storage_policy_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#aws_elastic_block_store DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#azure_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#azure_file DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#azure_file}
  */
  readonly azureFile?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#cephfs DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#cephfs}
  */
  readonly cephfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#cinder DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#cinder}
  */
  readonly cinder?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#config_map DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#config_map}
  */
  readonly configMap?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#csi DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#csi}
  */
  readonly csi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#downward_api DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#empty_dir DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#ephemeral DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#fc DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#fc}
  */
  readonly fc?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#flex_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#flocker DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#flocker}
  */
  readonly flocker?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#gce_persistent_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#git_repo DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#glusterfs DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#host_path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#host_path}
  */
  readonly hostPath?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#iscsi DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#iscsi}
  */
  readonly iscsi?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#nfs DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#nfs}
  */
  readonly nfs?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#persistent_volume_claim DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#photon_persistent_disk DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#portworx_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#projected DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#projected}
  */
  readonly projected?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#quobyte DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#quobyte}
  */
  readonly quobyte?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#rbd DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#rbd}
  */
  readonly rbd?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#scale_io DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret}
  */
  readonly secret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#storageos DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#storageos}
  */
  readonly storageos?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#vsphere_volume DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCephfs) {
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
  private _cinder = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCinder) {
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
  private _configMap = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesConfigMap) {
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
  private _csi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesEphemeral) {
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
  private _fc = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFc) {
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
  private _flexVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesIscsi) {
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
  private _nfs = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesProjected) {
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
  private _quobyte = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesScaleIo) {
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
  private _secret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesSecret) {
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
  private _storageos = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesVsphereVolume) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec {
  /**
  * Set the Affinity for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#affinity DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#affinity}
  */
  readonly affinity?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinity;
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#env DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#env}
  */
  readonly env?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#env_from DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#env_from}
  */
  readonly envFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * Set host aliases for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#host_aliases DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Runner pod image to use other than default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#image DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#image}
  */
  readonly image?: string;
  /**
  * Set up Init Containers for the Runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#init_containers DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#init_containers}
  */
  readonly initContainers?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Set the NodeSelector for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#node_selector DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Set PriorityClassName for the Runner Pod container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#priority_class_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Set Resources for the Runner Pod container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#resources DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResources;
  /**
  * Set SecurityContext for the Runner Pod container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#security_context DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#security_context}
  */
  readonly securityContext?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContext;
  /**
  * Set the Tolerations for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#tolerations DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Set Volume Mounts for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volume_mounts DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Set Volumes for the Runner Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#volumes DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#volumes}
  */
  readonly volumes?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityToTerraform(struct!.affinity),
    env: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromToTerraform, false)(struct!.envFrom),
    host_aliases: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    image: cdktf.stringToTerraform(struct!.image),
    init_containers: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resources: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesToTerraform(struct!.resources),
    security_context: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    volume_mounts: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinity",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResources",
    },
    security_context: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContext",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable | undefined {
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
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
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
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._image = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeSelector = undefined;
      this._priorityClassName = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
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
      this._hostAliases.internalValue = value.hostAliases;
      this._image = value.image;
      this._initContainers.internalValue = value.initContainers;
      this._nodeSelector = value.nodeSelector;
      this._priorityClassName = value.priorityClassName;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecAffinity) {
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
  private _env = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecHostAliases[] | cdktf.IResolvable) {
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

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecInitContainers[] | cdktf.IResolvable) {
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecTolerations[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumeMounts[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#metadata DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#metadata}
  */
  readonly metadata?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#spec DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadata",
    },
    spec: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateMetadata) {
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
  private _spec = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateSpec) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#api_version DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#kind DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#namespace DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate {
  /**
  * ForceUnlock a Terraform state if it has become locked for any reason. Defaults to 'no'. This is an Enum and has the expected values of: - auto - yes - no WARNING: Only use 'auto' in the cases where you are absolutely certain that no other system is using this state, you could otherwise end up in a bad place See https://www.terraform.io/language/state/locking#force-unlock for more information on the terraform state lock and force unlock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#force_unlock DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#force_unlock}
  */
  readonly forceUnlock?: string;
  /**
  * LockIdentifier holds the Identifier required by Terraform to unlock the state if it ever gets into a locked state. You'll need to put the Lock Identifier in here while setting ForceUnlock to either 'yes' or 'auto'. Leave this empty to do nothing, set this to the value of the 'Lock Info: ID: [value]', e.g. 'f2ab685b-f84d-ac0b-a125-378a22877e8d', to force unlock the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#lock_identifier DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#lock_identifier}
  */
  readonly lockIdentifier?: string;
  /**
  * LockTimeout is a Duration string that instructs Terraform to retry acquiring a lock for the specified period of time before returning an error. The duration syntax is a number followed by a time unit letter, such as '3s' for three seconds. Defaults to '0s' which will behave as though 'LockTimeout' was not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#lock_timeout DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#lock_timeout}
  */
  readonly lockTimeout?: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_unlock: cdktf.stringToTerraform(struct!.forceUnlock),
    lock_identifier: cdktf.stringToTerraform(struct!.lockIdentifier),
    lock_timeout: cdktf.stringToTerraform(struct!.lockTimeout),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate | cdktf.IResolvable): any {
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
    lock_timeout: {
      value: cdktf.stringToHclTerraform(struct!.lockTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate | cdktf.IResolvable | undefined {
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
    if (this._lockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockTimeout = this._lockTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceUnlock = undefined;
      this._lockIdentifier = undefined;
      this._lockTimeout = undefined;
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
      this._lockTimeout = value.lockTimeout;
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

  // lock_timeout - computed: false, optional: true, required: false
  private _lockTimeout?: string; 
  public get lockTimeout() {
    return this.getStringAttribute('lock_timeout');
  }
  public set lockTimeout(value: string) {
    this._lockTimeout = value;
  }
  public resetLockTimeout() {
    this._lockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeoutInput() {
    return this._lockTimeout;
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#api_version DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#field_path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#container_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#divisor DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#resource DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#key DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#config_map_key_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#resource_field_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#secret_key_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromSecretKeyRef) {
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars {
  /**
  * Name is the name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#value DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#value}
  */
  readonly value?: { [key: string]: string };
  /**
  * EnvVarSource represents a source for the value of an EnvVar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#value_from DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
    value_from: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsValueFrom) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom {
  /**
  * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#kind DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the values referent. Should reside in the same namespace as the referring resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Optional marks this VarsReference as optional. When set, a not found error for the values reference is ignored, but any VarsKey or transient error will still result in a reconciliation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#optional DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * VarsKeys is the data key at which a specific value can be found. Defaults to all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#vars_keys DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#vars_keys}
  */
  readonly varsKeys?: string[];
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#enabled DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#error_message_template DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#error_message_template}
  */
  readonly errorMessageTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#payload_type DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#payload_type}
  */
  readonly payloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#stage DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#test_expression DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#test_expression}
  */
  readonly testExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#url DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#url}
  */
  readonly url: string;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks | cdktf.IResolvable): any {
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


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks | cdktf.IResolvable | undefined) {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksOutputReference {
    return new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret {
  /**
  * Annotations to add to the outputted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#annotations DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to add to the outputted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#labels DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name is the name of the Secret to be written
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Outputs contain the selected names of outputs to be written to the secret. Empty array means writing all outputs, which is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#outputs DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#outputs}
  */
  readonly outputs?: string[];
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    outputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputs),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret | cdktf.IResolvable): any {
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

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret | cdktf.IResolvable | undefined {
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
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._outputs = value.outputs;
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
export interface DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpec {
  /**
  * Clean the runner pod up after each reconciliation cycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#always_cleanup_runner_pod DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#always_cleanup_runner_pod}
  */
  readonly alwaysCleanupRunnerPod?: boolean | cdktf.IResolvable;
  /**
  * ApprovePlan specifies name of a plan wanted to approve. If its value is 'auto', the controller will automatically approve every plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#approve_plan DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#approve_plan}
  */
  readonly approvePlan?: string;
  /**
  * BackendConfigSpec is for specifying configuration for Terraform's Kubernetes backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#backend_config DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#backend_config}
  */
  readonly backendConfig?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#backend_configs_from DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#backend_configs_from}
  */
  readonly backendConfigsFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFrom[] | cdktf.IResolvable;
  /**
  * BranchPlanner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#branch_planner DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#branch_planner}
  */
  readonly branchPlanner?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlanner;
  /**
  * BreakTheGlass specifies if the reconciliation should stop and allow interactive shell in case of emergency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#break_the_glass DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#break_the_glass}
  */
  readonly breakTheGlass?: boolean | cdktf.IResolvable;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#cli_config_secret_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#cli_config_secret_ref}
  */
  readonly cliConfigSecretRef?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#cloud DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#cloud}
  */
  readonly cloud?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#depends_on DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOn[] | cdktf.IResolvable;
  /**
  * Destroy produces a destroy plan. Applying the plan will destroy all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#destroy DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#destroy}
  */
  readonly destroy?: boolean | cdktf.IResolvable;
  /**
  * Create destroy plan and apply it to destroy terraform resources upon deletion of this object. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#destroy_resources_on_deletion DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#destroy_resources_on_deletion}
  */
  readonly destroyResourcesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Disable automatic drift detection. Drift detection may be resource intensive in the context of a large cluster or complex Terraform statefile. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#disable_drift_detection DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#disable_drift_detection}
  */
  readonly disableDriftDetection?: boolean | cdktf.IResolvable;
  /**
  * EnableInventory enables the object to store resource entries as the inventory for external use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#enable_inventory DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#enable_inventory}
  */
  readonly enableInventory?: boolean | cdktf.IResolvable;
  /**
  * Enterprise is the enterprise configuration placeholder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#enterprise DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#enterprise}
  */
  readonly enterprise?: { [key: string]: string };
  /**
  * List of all configuration files to be created in initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#file_mappings DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#file_mappings}
  */
  readonly fileMappings?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappings[] | cdktf.IResolvable;
  /**
  * Force instructs the controller to unconditionally re-plan and re-apply TF resources. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#force DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * List of health checks to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#health_checks DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * The interval at which to reconcile the Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#interval DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#interval}
  */
  readonly interval: string;
  /**
  * The maximum requeue duration after a previously failed reconciliation. Only applicable when RetryStrategy is set to ExponentialBackoff. The default value is 24 hours when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#max_retry_interval DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#max_retry_interval}
  */
  readonly maxRetryInterval?: string;
  /**
  * Parallelism limits the number of concurrent operations of Terraform apply step. Zero (0) means using the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#parallelism DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Path to the directory containing Terraform (.tf) files. Defaults to 'None', which translates to the root path of the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#path DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * PlanOnly specifies if the reconciliation should or should not stop at plan phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#plan_only DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#plan_only}
  */
  readonly planOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#read_inputs_from_secrets DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#read_inputs_from_secrets}
  */
  readonly readInputsFromSecrets?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecrets[] | cdktf.IResolvable;
  /**
  * RefreshBeforeApply forces refreshing of the state before the apply step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#refresh_before_apply DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#refresh_before_apply}
  */
  readonly refreshBeforeApply?: boolean | cdktf.IResolvable;
  /**
  * Remediation specifies what the controller should do when reconciliation fails. The default is to not perform any action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#remediation DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#remediation}
  */
  readonly remediation?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediation;
  /**
  * The interval at which to retry a previously failed reconciliation. The default value is 15 when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#retry_interval DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * The strategy to use when retrying a previously failed reconciliation. The default strategy is StaticInterval and the retry interval is based on the RetryInterval value. The ExponentialBackoff strategy uses the formula: 2^reconciliationFailures * RetryInterval with a maximum requeue duration of MaxRetryInterval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#retry_strategy DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#retry_strategy}
  */
  readonly retryStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#runner_pod_template DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#runner_pod_template}
  */
  readonly runnerPodTemplate?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate;
  /**
  * Configure the termination grace period for the runner pod. Use this parameter to allow the Terraform process to gracefully shutdown. Consider increasing for large, complex or slow-moving Terraform managed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#runner_termination_grace_period_seconds DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#runner_termination_grace_period_seconds}
  */
  readonly runnerTerminationGracePeriodSeconds?: number;
  /**
  * Name of a ServiceAccount for the runner Pod to provision Terraform resources. Default to tf-runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#service_account_name DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * SourceRef is the reference of the source where the Terraform files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#source_ref DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#source_ref}
  */
  readonly sourceRef: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef;
  /**
  * StoreReadablePlan enables storing the plan in a readable format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#store_readable_plan DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#store_readable_plan}
  */
  readonly storeReadablePlan?: string;
  /**
  * Suspend is to tell the controller to suspend subsequent TF executions, it does not apply to already started executions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#suspend DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Targets specify the resource, module or collection of resources to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#targets DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#targets}
  */
  readonly targets?: string[];
  /**
  * TfVarsFiles loads all given .tfvars files. It copycats the -var-file functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#tf_vars_files DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#tf_vars_files}
  */
  readonly tfVarsFiles?: string[];
  /**
  * TFStateSpec allows the user to set ForceUnlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#tfstate DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#tfstate}
  */
  readonly tfstate?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate;
  /**
  * Values map to the Terraform variable 'values', which is an object of arbitrary values. It is a convenient way to pass values to Terraform resources without having to define a variable for each value. To use this feature, your Terraform file must define the variable 'values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#values DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * List of input variables to set for the Terraform program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#vars DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#vars}
  */
  readonly vars?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars[] | cdktf.IResolvable;
  /**
  * List of references to a Secret or a ConfigMap to generate variables for Terraform resources based on its data, selectively by varsKey. Values of the later Secret / ConfigMap with the same keys will override those of the former.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#vars_from DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#vars_from}
  */
  readonly varsFrom?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#webhooks DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#webhooks}
  */
  readonly webhooks?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#workspace DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#workspace}
  */
  readonly workspace?: string;
  /**
  * A list of target secrets for the outputs to be written as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infra_contrib_fluxcd_io_terraform_v1alpha2_manifest#write_outputs_to_secret DataK8SInfraContribFluxcdIoTerraformV1Alpha2Manifest#write_outputs_to_secret}
  */
  readonly writeOutputsToSecret?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret;
}

export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecToTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_cleanup_runner_pod: cdktf.booleanToTerraform(struct!.alwaysCleanupRunnerPod),
    approve_plan: cdktf.stringToTerraform(struct!.approvePlan),
    backend_config: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigToTerraform(struct!.backendConfig),
    backend_configs_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromToTerraform, false)(struct!.backendConfigsFrom),
    branch_planner: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerToTerraform(struct!.branchPlanner),
    break_the_glass: cdktf.booleanToTerraform(struct!.breakTheGlass),
    cli_config_secret_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefToTerraform(struct!.cliConfigSecretRef),
    cloud: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudToTerraform(struct!.cloud),
    depends_on: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnToTerraform, false)(struct!.dependsOn),
    destroy: cdktf.booleanToTerraform(struct!.destroy),
    destroy_resources_on_deletion: cdktf.booleanToTerraform(struct!.destroyResourcesOnDeletion),
    disable_drift_detection: cdktf.booleanToTerraform(struct!.disableDriftDetection),
    enable_inventory: cdktf.booleanToTerraform(struct!.enableInventory),
    enterprise: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enterprise),
    file_mappings: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsToTerraform, false)(struct!.fileMappings),
    force: cdktf.booleanToTerraform(struct!.force),
    health_checks: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_retry_interval: cdktf.stringToTerraform(struct!.maxRetryInterval),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    path: cdktf.stringToTerraform(struct!.path),
    plan_only: cdktf.booleanToTerraform(struct!.planOnly),
    read_inputs_from_secrets: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsToTerraform, false)(struct!.readInputsFromSecrets),
    refresh_before_apply: cdktf.booleanToTerraform(struct!.refreshBeforeApply),
    remediation: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationToTerraform(struct!.remediation),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    retry_strategy: cdktf.stringToTerraform(struct!.retryStrategy),
    runner_pod_template: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateToTerraform(struct!.runnerPodTemplate),
    runner_termination_grace_period_seconds: cdktf.numberToTerraform(struct!.runnerTerminationGracePeriodSeconds),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    source_ref: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    store_readable_plan: cdktf.stringToTerraform(struct!.storeReadablePlan),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    tf_vars_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tfVarsFiles),
    tfstate: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateToTerraform(struct!.tfstate),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    vars: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsToTerraform, false)(struct!.vars),
    vars_from: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromToTerraform, false)(struct!.varsFrom),
    webhooks: cdktf.listMapper(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksToTerraform, false)(struct!.webhooks),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    write_outputs_to_secret: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretToTerraform(struct!.writeOutputsToSecret),
  }
}


export function dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigToHclTerraform(struct!.backendConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfig",
    },
    backend_configs_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromToHclTerraform, false)(struct!.backendConfigsFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromList",
    },
    branch_planner: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerToHclTerraform(struct!.branchPlanner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlanner",
    },
    break_the_glass: {
      value: cdktf.booleanToHclTerraform(struct!.breakTheGlass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cli_config_secret_ref: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefToHclTerraform(struct!.cliConfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRef",
    },
    cloud: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloud",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnList",
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
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsToHclTerraform, false)(struct!.fileMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsList",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryInterval),
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
    plan_only: {
      value: cdktf.booleanToHclTerraform(struct!.planOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_inputs_from_secrets: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsToHclTerraform, false)(struct!.readInputsFromSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsList",
    },
    refresh_before_apply: {
      value: cdktf.booleanToHclTerraform(struct!.refreshBeforeApply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediation: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationToHclTerraform(struct!.remediation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediation",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_strategy: {
      value: cdktf.stringToHclTerraform(struct!.retryStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_pod_template: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateToHclTerraform(struct!.runnerPodTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate",
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
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef",
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
    tf_vars_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tfVarsFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tfstate: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateToHclTerraform(struct!.tfstate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vars: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsToHclTerraform, false)(struct!.vars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsList",
    },
    vars_from: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromToHclTerraform, false)(struct!.varsFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromList",
    },
    webhooks: {
      value: cdktf.listMapperHcl(dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksToHclTerraform, false)(struct!.webhooks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksList",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_outputs_to_secret: {
      value: dataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretToHclTerraform(struct!.writeOutputsToSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._branchPlanner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchPlanner = this._branchPlanner?.internalValue;
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
    if (this._maxRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryInterval = this._maxRetryInterval;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._planOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.planOnly = this._planOnly;
    }
    if (this._readInputsFromSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readInputsFromSecrets = this._readInputsFromSecrets?.internalValue;
    }
    if (this._refreshBeforeApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshBeforeApply = this._refreshBeforeApply;
    }
    if (this._remediation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediation = this._remediation?.internalValue;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._retryStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy;
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
    if (this._tfVarsFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfVarsFiles = this._tfVarsFiles;
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

  public set internalValue(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysCleanupRunnerPod = undefined;
      this._approvePlan = undefined;
      this._backendConfig.internalValue = undefined;
      this._backendConfigsFrom.internalValue = undefined;
      this._branchPlanner.internalValue = undefined;
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
      this._maxRetryInterval = undefined;
      this._parallelism = undefined;
      this._path = undefined;
      this._planOnly = undefined;
      this._readInputsFromSecrets.internalValue = undefined;
      this._refreshBeforeApply = undefined;
      this._remediation.internalValue = undefined;
      this._retryInterval = undefined;
      this._retryStrategy = undefined;
      this._runnerPodTemplate.internalValue = undefined;
      this._runnerTerminationGracePeriodSeconds = undefined;
      this._serviceAccountName = undefined;
      this._sourceRef.internalValue = undefined;
      this._storeReadablePlan = undefined;
      this._suspend = undefined;
      this._targets = undefined;
      this._tfVarsFiles = undefined;
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
      this._branchPlanner.internalValue = value.branchPlanner;
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
      this._maxRetryInterval = value.maxRetryInterval;
      this._parallelism = value.parallelism;
      this._path = value.path;
      this._planOnly = value.planOnly;
      this._readInputsFromSecrets.internalValue = value.readInputsFromSecrets;
      this._refreshBeforeApply = value.refreshBeforeApply;
      this._remediation.internalValue = value.remediation;
      this._retryInterval = value.retryInterval;
      this._retryStrategy = value.retryStrategy;
      this._runnerPodTemplate.internalValue = value.runnerPodTemplate;
      this._runnerTerminationGracePeriodSeconds = value.runnerTerminationGracePeriodSeconds;
      this._serviceAccountName = value.serviceAccountName;
      this._sourceRef.internalValue = value.sourceRef;
      this._storeReadablePlan = value.storeReadablePlan;
      this._suspend = value.suspend;
      this._targets = value.targets;
      this._tfVarsFiles = value.tfVarsFiles;
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
  private _backendConfig = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfig) {
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
  private _backendConfigsFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFromList(this, "backend_configs_from", false);
  public get backendConfigsFrom() {
    return this._backendConfigsFrom;
  }
  public putBackendConfigsFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBackendConfigsFrom[] | cdktf.IResolvable) {
    this._backendConfigsFrom.internalValue = value;
  }
  public resetBackendConfigsFrom() {
    this._backendConfigsFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigsFromInput() {
    return this._backendConfigsFrom.internalValue;
  }

  // branch_planner - computed: false, optional: true, required: false
  private _branchPlanner = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlannerOutputReference(this, "branch_planner");
  public get branchPlanner() {
    return this._branchPlanner;
  }
  public putBranchPlanner(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecBranchPlanner) {
    this._branchPlanner.internalValue = value;
  }
  public resetBranchPlanner() {
    this._branchPlanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchPlannerInput() {
    return this._branchPlanner.internalValue;
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
  private _cliConfigSecretRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRefOutputReference(this, "cli_config_secret_ref");
  public get cliConfigSecretRef() {
    return this._cliConfigSecretRef;
  }
  public putCliConfigSecretRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCliConfigSecretRef) {
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
  private _cloud = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecCloud) {
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
  private _dependsOn = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecDependsOn[] | cdktf.IResolvable) {
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
  private _fileMappings = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappingsList(this, "file_mappings", false);
  public get fileMappings() {
    return this._fileMappings;
  }
  public putFileMappings(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecFileMappings[] | cdktf.IResolvable) {
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
  private _healthChecks = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecHealthChecks[] | cdktf.IResolvable) {
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

  // max_retry_interval - computed: false, optional: true, required: false
  private _maxRetryInterval?: string; 
  public get maxRetryInterval() {
    return this.getStringAttribute('max_retry_interval');
  }
  public set maxRetryInterval(value: string) {
    this._maxRetryInterval = value;
  }
  public resetMaxRetryInterval() {
    this._maxRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryIntervalInput() {
    return this._maxRetryInterval;
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

  // plan_only - computed: false, optional: true, required: false
  private _planOnly?: boolean | cdktf.IResolvable; 
  public get planOnly() {
    return this.getBooleanAttribute('plan_only');
  }
  public set planOnly(value: boolean | cdktf.IResolvable) {
    this._planOnly = value;
  }
  public resetPlanOnly() {
    this._planOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planOnlyInput() {
    return this._planOnly;
  }

  // read_inputs_from_secrets - computed: false, optional: true, required: false
  private _readInputsFromSecrets = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecretsList(this, "read_inputs_from_secrets", false);
  public get readInputsFromSecrets() {
    return this._readInputsFromSecrets;
  }
  public putReadInputsFromSecrets(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecReadInputsFromSecrets[] | cdktf.IResolvable) {
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

  // remediation - computed: false, optional: true, required: false
  private _remediation = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
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

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy?: string; 
  public get retryStrategy() {
    return this.getStringAttribute('retry_strategy');
  }
  public set retryStrategy(value: string) {
    this._retryStrategy = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy;
  }

  // runner_pod_template - computed: false, optional: true, required: false
  private _runnerPodTemplate = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplateOutputReference(this, "runner_pod_template");
  public get runnerPodTemplate() {
    return this._runnerPodTemplate;
  }
  public putRunnerPodTemplate(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecRunnerPodTemplate) {
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
  private _sourceRef = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecSourceRef) {
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

  // tf_vars_files - computed: false, optional: true, required: false
  private _tfVarsFiles?: string[]; 
  public get tfVarsFiles() {
    return this.getListAttribute('tf_vars_files');
  }
  public set tfVarsFiles(value: string[]) {
    this._tfVarsFiles = value;
  }
  public resetTfVarsFiles() {
    this._tfVarsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVarsFilesInput() {
    return this._tfVarsFiles;
  }

  // tfstate - computed: false, optional: true, required: false
  private _tfstate = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstateOutputReference(this, "tfstate");
  public get tfstate() {
    return this._tfstate;
  }
  public putTfstate(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecTfstate) {
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
  private _vars = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsList(this, "vars", false);
  public get vars() {
    return this._vars;
  }
  public putVars(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVars[] | cdktf.IResolvable) {
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
  private _varsFrom = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFromList(this, "vars_from", false);
  public get varsFrom() {
    return this._varsFrom;
  }
  public putVarsFrom(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecVarsFrom[] | cdktf.IResolvable) {
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
  private _webhooks = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWebhooks[] | cdktf.IResolvable) {
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
  private _writeOutputsToSecret = new DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecretOutputReference(this, "write_outputs_to_secret");
  public get writeOutputsToSecret() {
    return this._writeOutputsToSecret;
  }
  public putWriteOutputsToSecret(value: DataK8SInfraContribFluxcdIoTerraformV1Alpha2ManifestSpecWriteOutputsToSecret) {
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
