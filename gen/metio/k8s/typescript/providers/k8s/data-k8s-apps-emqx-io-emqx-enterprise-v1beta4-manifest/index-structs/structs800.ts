import * as cdktf from 'cdktf';
import { DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStore,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDisk,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFile,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfs,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinder,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMap,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsi,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApi,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDir,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeral,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFc,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolume,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlocker,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDisk,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepo,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfs,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPath,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsi,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfs,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaim,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDisk,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolume,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainers,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersList,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainers,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersList,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecrets,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsList,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainers,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersList,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContext,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerations,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsList } from './structs400'
import { DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinity,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainer,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadata,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdate,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicense,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistent,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentOutputReference,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplate,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateToTerraform,
dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateToHclTerraform,
DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateOutputReference } from './structs0'
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#items DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#items}
  */
  readonly items?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#optional DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#audience DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#expiration_seconds DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#path DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#cluster_trust_bundle DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#config_map DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#config_map}
  */
  readonly configMap?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#downward_api DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret}
  */
  readonly secret?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#service_account_token DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#default_mode DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#sources DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#sources}
  */
  readonly sources?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#group DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#read_only DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#registry DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#registry}
  */
  readonly registry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#tenant DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#user DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volume DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#fs_type DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#image DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#keyring DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#monitors DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#pool DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#read_only DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret_ref DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#user DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef",
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdSecretRef) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#fs_type DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#gateway DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#protection_domain DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#read_only DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret_ref DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret_ref}
  */
  readonly secretRef: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#ssl_enabled DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#storage_mode DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#storage_pool DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#system DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volume_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef",
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#key DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#mode DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#path DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#default_mode DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#items DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#items}
  */
  readonly items?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#optional DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsList",
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#fs_type DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#read_only DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret_ref DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volume_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volume_namespace DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef",
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosSecretRef) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#fs_type DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#storage_policy_id DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#storage_policy_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volume_path DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#aws_elastic_block_store DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#azure_disk DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#azure_file DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#azure_file}
  */
  readonly azureFile?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#cephfs DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#cephfs}
  */
  readonly cephfs?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#cinder DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#cinder}
  */
  readonly cinder?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#config_map DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#config_map}
  */
  readonly configMap?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#csi DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#csi}
  */
  readonly csi?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#downward_api DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#empty_dir DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#ephemeral DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#fc DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#fc}
  */
  readonly fc?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#flex_volume DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#flocker DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#flocker}
  */
  readonly flocker?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#gce_persistent_disk DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#git_repo DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#glusterfs DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#host_path DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#host_path}
  */
  readonly hostPath?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#iscsi DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#iscsi}
  */
  readonly iscsi?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#nfs DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#nfs}
  */
  readonly nfs?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#persistent_volume_claim DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#photon_persistent_disk DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#portworx_volume DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#projected DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#projected}
  */
  readonly projected?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#quobyte DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#quobyte}
  */
  readonly quobyte?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#rbd DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#rbd}
  */
  readonly rbd?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#scale_io DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#secret DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#secret}
  */
  readonly secret?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#storageos DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#storageos}
  */
  readonly storageos?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#vsphere_volume DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCephfs) {
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
  private _cinder = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCinder) {
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
  private _configMap = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesConfigMap) {
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
  private _csi = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesEphemeral) {
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
  private _fc = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFc) {
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
  private _flexVolume = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesHostPath) {
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
  private _iscsi = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesIscsi) {
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
  private _nfs = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesProjected) {
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
  private _quobyte = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesScaleIo) {
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
  private _secret = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesSecret) {
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
  private _storageos = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesVsphereVolume) {
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

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesOutputReference {
    return new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#affinity DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#affinity}
  */
  readonly affinity?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#emqx_container DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#emqx_container}
  */
  readonly emqxContainer?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#ephemeral_containers DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#extra_containers DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#extra_containers}
  */
  readonly extraContainers?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#image_pull_secrets DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#init_containers DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#init_containers}
  */
  readonly initContainers?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#node_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#node_selector DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#pod_security_context DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#reloader_image DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#reloader_image}
  */
  readonly reloaderImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#service_account_name DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#tolerations DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#tolerations}
  */
  readonly tolerations?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#volumes DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#volumes}
  */
  readonly volumes?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    emqx_container: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerToTerraform(struct!.emqxContainer),
    ephemeral_containers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    extra_containers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersToTerraform, false)(struct!.extraContainers),
    image_pull_secrets: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    reloader_image: cdktf.stringToTerraform(struct!.reloaderImage),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tolerations: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    volumes: cdktf.listMapper(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinity",
    },
    emqx_container: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerToHclTerraform(struct!.emqxContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainer",
    },
    ephemeral_containers: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersList",
    },
    extra_containers: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersToHclTerraform, false)(struct!.extraContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersList",
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
    pod_security_context: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContext",
    },
    reloader_image: {
      value: cdktf.stringToHclTerraform(struct!.reloaderImage),
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
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._emqxContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emqxContainer = this._emqxContainer?.internalValue;
    }
    if (this._ephemeralContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainers = this._ephemeralContainers?.internalValue;
    }
    if (this._extraContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraContainers = this._extraContainers?.internalValue;
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
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._reloaderImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloaderImage = this._reloaderImage;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._emqxContainer.internalValue = undefined;
      this._ephemeralContainers.internalValue = undefined;
      this._extraContainers.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._reloaderImage = undefined;
      this._serviceAccountName = undefined;
      this._tolerations.internalValue = undefined;
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
      this._emqxContainer.internalValue = value.emqxContainer;
      this._ephemeralContainers.internalValue = value.ephemeralContainers;
      this._extraContainers.internalValue = value.extraContainers;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._reloaderImage = value.reloaderImage;
      this._serviceAccountName = value.serviceAccountName;
      this._tolerations.internalValue = value.tolerations;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // emqx_container - computed: false, optional: true, required: false
  private _emqxContainer = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainerOutputReference(this, "emqx_container");
  public get emqxContainer() {
    return this._emqxContainer;
  }
  public putEmqxContainer(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEmqxContainer) {
    this._emqxContainer.internalValue = value;
  }
  public resetEmqxContainer() {
    this._emqxContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emqxContainerInput() {
    return this._emqxContainer.internalValue;
  }

  // ephemeral_containers - computed: false, optional: true, required: false
  private _ephemeralContainers = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable) {
    this._ephemeralContainers.internalValue = value;
  }
  public resetEphemeralContainers() {
    this._ephemeralContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainersInput() {
    return this._ephemeralContainers.internalValue;
  }

  // extra_containers - computed: false, optional: true, required: false
  private _extraContainers = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainersList(this, "extra_containers", false);
  public get extraContainers() {
    return this._extraContainers;
  }
  public putExtraContainers(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecExtraContainers[] | cdktf.IResolvable) {
    this._extraContainers.internalValue = value;
  }
  public resetExtraContainers() {
    this._extraContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraContainersInput() {
    return this._extraContainers.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // reloader_image - computed: false, optional: true, required: false
  private _reloaderImage?: string; 
  public get reloaderImage() {
    return this.getStringAttribute('reloader_image');
  }
  public set reloaderImage(value: string) {
    this._reloaderImage = value;
  }
  public resetReloaderImage() {
    this._reloaderImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloaderImageInput() {
    return this._reloaderImage;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#metadata DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#metadata}
  */
  readonly metadata?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#spec DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#spec}
  */
  readonly spec?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateMetadata) {
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
  private _spec = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateSpec) {
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
export interface DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#blue_green_update DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#blue_green_update}
  */
  readonly blueGreenUpdate?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#cluster_domain DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#license DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#license}
  */
  readonly license?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicense;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#persistent DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#persistent}
  */
  readonly persistent?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#replicas DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#service_template DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#service_template}
  */
  readonly serviceTemplate?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_enterprise_v1beta4_manifest#template DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4Manifest#template}
  */
  readonly template?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate;
}

export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecToTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blue_green_update: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateToTerraform(struct!.blueGreenUpdate),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    license: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseToTerraform(struct!.license),
    persistent: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentToTerraform(struct!.persistent),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    service_template: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateToTerraform(struct!.serviceTemplate),
    template: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blue_green_update: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateToHclTerraform(struct!.blueGreenUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdate",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicense",
    },
    persistent: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentToHclTerraform(struct!.persistent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistent",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_template: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateToHclTerraform(struct!.serviceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplate",
    },
    template: {
      value: dataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueGreenUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenUpdate = this._blueGreenUpdate?.internalValue;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._license?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license?.internalValue;
    }
    if (this._persistent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._serviceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplate = this._serviceTemplate?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueGreenUpdate.internalValue = undefined;
      this._clusterDomain = undefined;
      this._license.internalValue = undefined;
      this._persistent.internalValue = undefined;
      this._replicas = undefined;
      this._serviceTemplate.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueGreenUpdate.internalValue = value.blueGreenUpdate;
      this._clusterDomain = value.clusterDomain;
      this._license.internalValue = value.license;
      this._persistent.internalValue = value.persistent;
      this._replicas = value.replicas;
      this._serviceTemplate.internalValue = value.serviceTemplate;
      this._template.internalValue = value.template;
    }
  }

  // blue_green_update - computed: false, optional: true, required: false
  private _blueGreenUpdate = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdateOutputReference(this, "blue_green_update");
  public get blueGreenUpdate() {
    return this._blueGreenUpdate;
  }
  public putBlueGreenUpdate(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecBlueGreenUpdate) {
    this._blueGreenUpdate.internalValue = value;
  }
  public resetBlueGreenUpdate() {
    this._blueGreenUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdateInput() {
    return this._blueGreenUpdate.internalValue;
  }

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistentOutputReference(this, "persistent");
  public get persistent() {
    return this._persistent;
  }
  public putPersistent(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecPersistent) {
    this._persistent.internalValue = value;
  }
  public resetPersistent() {
    this._persistent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent.internalValue;
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

  // service_template - computed: false, optional: true, required: false
  private _serviceTemplate = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplateOutputReference(this, "service_template");
  public get serviceTemplate() {
    return this._serviceTemplate;
  }
  public putServiceTemplate(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecServiceTemplate) {
    this._serviceTemplate.internalValue = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SAppsEmqxIoEmqxEnterpriseV1Beta4ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
