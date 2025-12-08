import * as cdktf from 'cdktf';
import { DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMap,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApi,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecret,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStore,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDisk,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFile,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfs,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinder,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMap,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsi,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApi,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDir,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeral,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFc,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolume,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlocker,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDisk,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepo,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfs,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPath,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsi,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfs,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaim,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDisk,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolume,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuth,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishController,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFrom,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromList,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainers,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersList,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplates,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesList,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMounts,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsList,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinity,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackend,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoring,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudget,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecService,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceOutputReference,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerations,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsList,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategy,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyToTerraform,
dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyToHclTerraform,
DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyOutputReference } from './structs0'
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#audience DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#expiration_seconds DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#path DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources {
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#config_map DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#downward_api DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#service_account_token DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesOutputReference {
    return new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#default_mode DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#sources DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#group DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#read_only DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#registry DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#tenant DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#user DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#volume DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#fs_type DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#keyring DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#monitors DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#pool DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#read_only DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret_ref DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#user DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef",
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdSecretRef) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#fs_type DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#gateway DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#protection_domain DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#read_only DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret_ref DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#ssl_enabled DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#storage_mode DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#storage_pool DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#system DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#volume_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef",
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoSecretRef) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#key DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#mode DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#path DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsOutputReference {
    return new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#default_mode DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#items DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#optional DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsList",
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#fs_type DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#read_only DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret_ref DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#volume_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#volume_namespace DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef",
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosSecretRef) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#fs_type DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#storage_policy_id DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#storage_policy_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#volume_path DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#aws_elastic_block_store DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#azure_disk DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#azure_file DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#cephfs DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#cinder DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#config_map DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#csi DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#downward_api DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#empty_dir DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#ephemeral DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#fc DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#flex_volume DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#flocker DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#gce_persistent_disk DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#git_repo DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#glusterfs DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#host_path DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#iscsi DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#nfs DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#persistent_volume_claim DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#photon_persistent_disk DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#portworx_volume DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#projected DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#quobyte DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#rbd DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#scale_io DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#secret DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#storageos DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#vsphere_volume DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfs",
    },
    cinder: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinder",
    },
    config_map: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMap",
    },
    csi: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsi",
    },
    downward_api: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeral",
    },
    fc: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFc",
    },
    flex_volume: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPath",
    },
    iscsi: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected",
    },
    quobyte: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte",
    },
    rbd: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd",
    },
    scale_io: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo",
    },
    secret: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret",
    },
    storageos: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureDisk) {
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
  private _azureFile = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesAzureFile) {
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
  private _cephfs = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCephfs) {
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
  private _cinder = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCinder) {
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
  private _configMap = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesConfigMap) {
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
  private _csi = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesCsi) {
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
  private _downwardApi = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesEphemeral) {
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
  private _fc = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFc) {
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
  private _flexVolume = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlexVolume) {
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
  private _flocker = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGitRepo) {
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
  private _glusterfs = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesGlusterfs) {
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
  private _hostPath = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesHostPath) {
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
  private _iscsi = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesIscsi) {
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
  private _nfs = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesPortworxVolume) {
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
  private _projected = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesProjected) {
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
  private _quobyte = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesQuobyte) {
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
  private _rbd = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesRbd) {
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
  private _scaleIo = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesScaleIo) {
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
  private _secret = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesSecret) {
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
  private _storageos = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesVsphereVolume) {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesOutputReference {
    return new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#limits DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#requests DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image_pull_policy DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#resources DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    resources: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    resources: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._resources.internalValue = value.resources;
    }
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#limits DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#requests DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#adm_auth DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#adm_auth}
  */
  readonly admAuth?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#args DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#controller DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#controller}
  */
  readonly controller?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishController;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#env_from DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#extra_init_containers DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#extra_init_containers}
  */
  readonly extraInitContainers?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#extra_volume_claim_templates DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#extra_volume_claim_templates}
  */
  readonly extraVolumeClaimTemplates?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#extra_volume_mounts DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#extra_volume_mounts}
  */
  readonly extraVolumeMounts?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#extra_volumes DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#extra_volumes}
  */
  readonly extraVolumes?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image_pull_policy DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#image_pull_secret DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#metrics_exporter DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#metrics_exporter}
  */
  readonly metricsExporter?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#resources DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adm_auth: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthToTerraform(struct!.admAuth),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    controller: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerToTerraform(struct!.controller),
    env_from: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromToTerraform, false)(struct!.envFrom),
    extra_init_containers: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersToTerraform, false)(struct!.extraInitContainers),
    extra_volume_claim_templates: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesToTerraform, false)(struct!.extraVolumeClaimTemplates),
    extra_volume_mounts: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsToTerraform, false)(struct!.extraVolumeMounts),
    extra_volumes: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesToTerraform, false)(struct!.extraVolumes),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    metrics_exporter: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterToTerraform(struct!.metricsExporter),
    resources: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adm_auth: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthToHclTerraform(struct!.admAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuth",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    controller: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishController",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromList",
    },
    extra_init_containers: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersToHclTerraform, false)(struct!.extraInitContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersList",
    },
    extra_volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesToHclTerraform, false)(struct!.extraVolumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesList",
    },
    extra_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsToHclTerraform, false)(struct!.extraVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsList",
    },
    extra_volumes: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesToHclTerraform, false)(struct!.extraVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesList",
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
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_exporter: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterToHclTerraform(struct!.metricsExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter",
    },
    resources: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admAuth = this._admAuth?.internalValue;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._extraInitContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraInitContainers = this._extraInitContainers?.internalValue;
    }
    if (this._extraVolumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumeClaimTemplates = this._extraVolumeClaimTemplates?.internalValue;
    }
    if (this._extraVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumeMounts = this._extraVolumeMounts?.internalValue;
    }
    if (this._extraVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumes = this._extraVolumes?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._metricsExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsExporter = this._metricsExporter?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admAuth.internalValue = undefined;
      this._args = undefined;
      this._controller.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._extraInitContainers.internalValue = undefined;
      this._extraVolumeClaimTemplates.internalValue = undefined;
      this._extraVolumeMounts.internalValue = undefined;
      this._extraVolumes.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecret = undefined;
      this._metricsExporter.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admAuth.internalValue = value.admAuth;
      this._args = value.args;
      this._controller.internalValue = value.controller;
      this._envFrom.internalValue = value.envFrom;
      this._extraInitContainers.internalValue = value.extraInitContainers;
      this._extraVolumeClaimTemplates.internalValue = value.extraVolumeClaimTemplates;
      this._extraVolumeMounts.internalValue = value.extraVolumeMounts;
      this._extraVolumes.internalValue = value.extraVolumes;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecret = value.imagePullSecret;
      this._metricsExporter.internalValue = value.metricsExporter;
      this._resources.internalValue = value.resources;
    }
  }

  // adm_auth - computed: false, optional: true, required: false
  private _admAuth = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuthOutputReference(this, "adm_auth");
  public get admAuth() {
    return this._admAuth;
  }
  public putAdmAuth(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishAdmAuth) {
    this._admAuth.internalValue = value;
  }
  public resetAdmAuth() {
    this._admAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admAuthInput() {
    return this._admAuth.internalValue;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // extra_init_containers - computed: false, optional: true, required: false
  private _extraInitContainers = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainersList(this, "extra_init_containers", false);
  public get extraInitContainers() {
    return this._extraInitContainers;
  }
  public putExtraInitContainers(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraInitContainers[] | cdktf.IResolvable) {
    this._extraInitContainers.internalValue = value;
  }
  public resetExtraInitContainers() {
    this._extraInitContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInitContainersInput() {
    return this._extraInitContainers.internalValue;
  }

  // extra_volume_claim_templates - computed: false, optional: true, required: false
  private _extraVolumeClaimTemplates = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplatesList(this, "extra_volume_claim_templates", false);
  public get extraVolumeClaimTemplates() {
    return this._extraVolumeClaimTemplates;
  }
  public putExtraVolumeClaimTemplates(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._extraVolumeClaimTemplates.internalValue = value;
  }
  public resetExtraVolumeClaimTemplates() {
    this._extraVolumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumeClaimTemplatesInput() {
    return this._extraVolumeClaimTemplates.internalValue;
  }

  // extra_volume_mounts - computed: false, optional: true, required: false
  private _extraVolumeMounts = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMountsList(this, "extra_volume_mounts", false);
  public get extraVolumeMounts() {
    return this._extraVolumeMounts;
  }
  public putExtraVolumeMounts(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumeMounts[] | cdktf.IResolvable) {
    this._extraVolumeMounts.internalValue = value;
  }
  public resetExtraVolumeMounts() {
    this._extraVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumeMountsInput() {
    return this._extraVolumeMounts.internalValue;
  }

  // extra_volumes - computed: false, optional: true, required: false
  private _extraVolumes = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumesList(this, "extra_volumes", false);
  public get extraVolumes() {
    return this._extraVolumes;
  }
  public putExtraVolumes(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishExtraVolumes[] | cdktf.IResolvable) {
    this._extraVolumes.internalValue = value;
  }
  public resetExtraVolumes() {
    this._extraVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumesInput() {
    return this._extraVolumes.internalValue;
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

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // metrics_exporter - computed: false, optional: true, required: false
  private _metricsExporter = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporterOutputReference(this, "metrics_exporter");
  public get metricsExporter() {
    return this._metricsExporter;
  }
  public putMetricsExporter(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishMetricsExporter) {
    this._metricsExporter.internalValue = value;
  }
  public resetMetricsExporter() {
    this._metricsExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsExporterInput() {
    return this._metricsExporter.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#config_map_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#entrypoint_file_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#entrypoint_file_name}
  */
  readonly entrypointFileName: string;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    entrypoint_file_name: cdktf.stringToTerraform(struct!.entrypointFileName),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint_file_name: {
      value: cdktf.stringToHclTerraform(struct!.entrypointFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._entrypointFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointFileName = this._entrypointFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapName = undefined;
      this._entrypointFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapName = value.configMapName;
      this._entrypointFileName = value.entrypointFileName;
    }
  }

  // config_map_name - computed: false, optional: false, required: true
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }

  // entrypoint_file_name - computed: false, optional: false, required: true
  private _entrypointFileName?: string; 
  public get entrypointFileName() {
    return this.getStringAttribute('entrypoint_file_name');
  }
  public set entrypointFileName(value: string) {
    this._entrypointFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointFileNameInput() {
    return this._entrypointFileName;
  }
}
export interface DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpec {
  /**
  * Affinity is a group of affinity scheduling rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#affinity DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#backend DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#backend}
  */
  readonly backend: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#log_format DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#log_level DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#monitoring DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#node_selector DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#priority_class_name DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#replicas DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#service DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#service}
  */
  readonly service: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#tolerations DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#update_strategy DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#varnish DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#varnish}
  */
  readonly varnish?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/caching_ibm_com_varnish_cluster_v1alpha1_manifest#vcl DataK8SCachingIbmComVarnishClusterV1Alpha1Manifest#vcl}
  */
  readonly vcl: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl;
}

export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityToTerraform(struct!.affinity),
    backend: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendToTerraform(struct!.backend),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    monitoring: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_disruption_budget: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    service: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceToTerraform(struct!.service),
    tolerations: cdktf.listMapper(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    update_strategy: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
    varnish: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishToTerraform(struct!.varnish),
    vcl: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclToTerraform(struct!.vcl),
  }
}


export function dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinity",
    },
    backend: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackend",
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
    monitoring: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoring",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_disruption_budget: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudget",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
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
    service: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecService",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsList",
    },
    update_strategy: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategy",
    },
    varnish: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishToHclTerraform(struct!.varnish),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish",
    },
    vcl: {
      value: dataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclToHclTerraform(struct!.vcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    if (this._varnish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varnish = this._varnish?.internalValue;
    }
    if (this._vcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcl = this._vcl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._backend.internalValue = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._monitoring.internalValue = undefined;
      this._nodeSelector = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._priorityClassName = undefined;
      this._replicas = undefined;
      this._service.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
      this._varnish.internalValue = undefined;
      this._vcl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._backend.internalValue = value.backend;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._monitoring.internalValue = value.monitoring;
      this._nodeSelector = value.nodeSelector;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._priorityClassName = value.priorityClassName;
      this._replicas = value.replicas;
      this._service.internalValue = value.service;
      this._tolerations.internalValue = value.tolerations;
      this._updateStrategy.internalValue = value.updateStrategy;
      this._varnish.internalValue = value.varnish;
      this._vcl.internalValue = value.vcl;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
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

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
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

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
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

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }

  // varnish - computed: false, optional: true, required: false
  private _varnish = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnishOutputReference(this, "varnish");
  public get varnish() {
    return this._varnish;
  }
  public putVarnish(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVarnish) {
    this._varnish.internalValue = value;
  }
  public resetVarnish() {
    this._varnish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varnishInput() {
    return this._varnish.internalValue;
  }

  // vcl - computed: false, optional: false, required: true
  private _vcl = new DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVclOutputReference(this, "vcl");
  public get vcl() {
    return this._vcl;
  }
  public putVcl(value: DataK8SCachingIbmComVarnishClusterV1Alpha1ManifestSpecVcl) {
    this._vcl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vclInput() {
    return this._vcl.internalValue;
  }
}
