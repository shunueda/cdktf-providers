import * as cdktf from 'cdktf';
import { DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItems,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsList,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundle,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStore,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDisk,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFile,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfs,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinder,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMap,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsi,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApi,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDir,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeral,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFc,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolume,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlocker,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDisk,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepo,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfs,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPath,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImage,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsi,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfs,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaim,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDisk,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolume,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainers,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersList,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainers,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersList,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadata,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMounts,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsOutputReference,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddons,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsToTerraform,
dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsToHclTerraform,
DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsOutputReference } from './structs0'
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#items DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#optional DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#api_version DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#field_path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#container_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#divisor DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#resource DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#field_ref DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#resource_field_ref DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#items DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#items DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#optional DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#audience DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#expiration_seconds DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#cluster_trust_bundle DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#config_map DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#downward_api DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#service_account_token DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#default_mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections. Each entry in this list handles one source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#sources DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#group DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#read_only DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#registry DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#tenant DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#user DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#volume DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#fs_type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#image DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#keyring DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#monitors DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pool DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#read_only DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret_ref DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#user DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdSecretRef) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#fs_type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#gateway DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#protection_domain DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#read_only DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret_ref DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#ssl_enabled DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#storage_mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#storage_pool DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#system DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#volume_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoSecretRef) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#default_mode DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#items DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#optional DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#fs_type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#read_only DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret_ref DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#volume_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#volume_namespace DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosSecretRef) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#fs_type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#storage_policy_id DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#storage_policy_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#volume_path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#aws_elastic_block_store DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#azure_disk DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#azure_file DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#cephfs DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#cinder DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#config_map DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#csi DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#downward_api DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#empty_dir DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#ephemeral DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#fc DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#flex_volume DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#flocker DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#gce_persistent_disk DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#git_repo DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#glusterfs DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#host_path DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPath;
  /**
  * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided: - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#image DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImage;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#iscsi DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#nfs DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#persistent_volume_claim DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#photon_persistent_disk DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#portworx_volume DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#projected DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#quobyte DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#rbd DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#scale_io DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#secret DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#storageos DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#vsphere_volume DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathToTerraform(struct!.hostPath),
    image: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageToTerraform(struct!.image),
    iscsi: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfs",
    },
    cinder: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinder",
    },
    config_map: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMap",
    },
    csi: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsi",
    },
    downward_api: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeral",
    },
    fc: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFc",
    },
    flex_volume: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPath",
    },
    image: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImage",
    },
    iscsi: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected",
    },
    quobyte: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte",
    },
    rbd: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd",
    },
    scale_io: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo",
    },
    secret: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret",
    },
    storageos: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureDisk) {
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
  private _azureFile = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesAzureFile) {
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
  private _cephfs = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCephfs) {
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
  private _cinder = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCinder) {
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
  private _configMap = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesConfigMap) {
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
  private _csi = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesCsi) {
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
  private _downwardApi = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesEphemeral) {
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
  private _fc = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFc) {
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
  private _flexVolume = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlexVolume) {
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
  private _flocker = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGitRepo) {
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
  private _glusterfs = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesGlusterfs) {
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
  private _hostPath = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesHostPath) {
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
  private _image = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesImage) {
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
  private _iscsi = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesIscsi) {
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
  private _nfs = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesPortworxVolume) {
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
  private _projected = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesProjected) {
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
  private _quobyte = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesQuobyte) {
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
  private _rbd = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesRbd) {
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
  private _scaleIo = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesScaleIo) {
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
  private _secret = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesSecret) {
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
  private _storageos = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesVsphereVolume) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_fields DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#preference DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#weight DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_fields DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#node_selector_terms DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#label_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mismatch_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespace_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespaces DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_affinity_term DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#weight DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#label_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mismatch_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespace_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespaces DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#label_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mismatch_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespace_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespaces DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_affinity_term DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#weight DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#label_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#mismatch_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespace_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#namespaces DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#node_affinity DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_affinity DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_anti_affinity DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#api_server DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#api_server}
  */
  readonly apiServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#controller_manager DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#controller_manager}
  */
  readonly controllerManager?: string[];
  /**
  * Available only if Kamaji is running using Kine as backing storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#kine DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#kine}
  */
  readonly kine?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#scheduler DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#scheduler}
  */
  readonly scheduler?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiServer),
    controller_manager: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controllerManager),
    kine: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kine),
    scheduler: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduler),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    controller_manager: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controllerManager),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kine: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kine),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scheduler: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheduler),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._controllerManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerManager = this._controllerManager;
    }
    if (this._kine !== undefined) {
      hasAnyValues = true;
      internalValueResult.kine = this._kine;
    }
    if (this._scheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServer = undefined;
      this._controllerManager = undefined;
      this._kine = undefined;
      this._scheduler = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServer = value.apiServer;
      this._controllerManager = value.controllerManager;
      this._kine = value.kine;
      this._scheduler = value.scheduler;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: string[]; 
  public get apiServer() {
    return this.getListAttribute('api_server');
  }
  public set apiServer(value: string[]) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // controller_manager - computed: false, optional: true, required: false
  private _controllerManager?: string[]; 
  public get controllerManager() {
    return this.getListAttribute('controller_manager');
  }
  public set controllerManager(value: string[]) {
    this._controllerManager = value;
  }
  public resetControllerManager() {
    this._controllerManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerManagerInput() {
    return this._controllerManager;
  }

  // kine - computed: false, optional: true, required: false
  private _kine?: string[]; 
  public get kine() {
    return this.getListAttribute('kine');
  }
  public set kine(value: string[]) {
    this._kine = value;
  }
  public resetKine() {
    this._kine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kineInput() {
    return this._kine;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string[]; 
  public get scheduler() {
    return this.getListAttribute('scheduler');
  }
  public set scheduler(value: string[]) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#annotations DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#api_server_image DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#api_server_image}
  */
  readonly apiServerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#controller_manager_image DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#controller_manager_image}
  */
  readonly controllerManagerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#registry DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#scheduler_image DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#scheduler_image}
  */
  readonly schedulerImage?: string;
  /**
  * The tag to append to all the Control Plane container images. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#tag_suffix DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#tag_suffix}
  */
  readonly tagSuffix?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_image: cdktf.stringToTerraform(struct!.apiServerImage),
    controller_manager_image: cdktf.stringToTerraform(struct!.controllerManagerImage),
    registry: cdktf.stringToTerraform(struct!.registry),
    scheduler_image: cdktf.stringToTerraform(struct!.schedulerImage),
    tag_suffix: cdktf.stringToTerraform(struct!.tagSuffix),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_image: {
      value: cdktf.stringToHclTerraform(struct!.apiServerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_manager_image: {
      value: cdktf.stringToHclTerraform(struct!.controllerManagerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_image: {
      value: cdktf.stringToHclTerraform(struct!.schedulerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_suffix: {
      value: cdktf.stringToHclTerraform(struct!.tagSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerImage = this._apiServerImage;
    }
    if (this._controllerManagerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerManagerImage = this._controllerManagerImage;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._schedulerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerImage = this._schedulerImage;
    }
    if (this._tagSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSuffix = this._tagSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServerImage = undefined;
      this._controllerManagerImage = undefined;
      this._registry = undefined;
      this._schedulerImage = undefined;
      this._tagSuffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServerImage = value.apiServerImage;
      this._controllerManagerImage = value.controllerManagerImage;
      this._registry = value.registry;
      this._schedulerImage = value.schedulerImage;
      this._tagSuffix = value.tagSuffix;
    }
  }

  // api_server_image - computed: false, optional: true, required: false
  private _apiServerImage?: string; 
  public get apiServerImage() {
    return this.getStringAttribute('api_server_image');
  }
  public set apiServerImage(value: string) {
    this._apiServerImage = value;
  }
  public resetApiServerImage() {
    this._apiServerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerImageInput() {
    return this._apiServerImage;
  }

  // controller_manager_image - computed: false, optional: true, required: false
  private _controllerManagerImage?: string; 
  public get controllerManagerImage() {
    return this.getStringAttribute('controller_manager_image');
  }
  public set controllerManagerImage(value: string) {
    this._controllerManagerImage = value;
  }
  public resetControllerManagerImage() {
    this._controllerManagerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerManagerImageInput() {
    return this._controllerManagerImage;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // scheduler_image - computed: false, optional: true, required: false
  private _schedulerImage?: string; 
  public get schedulerImage() {
    return this.getStringAttribute('scheduler_image');
  }
  public set schedulerImage(value: string) {
    this._schedulerImage = value;
  }
  public resetSchedulerImage() {
    this._schedulerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerImageInput() {
    return this._schedulerImage;
  }

  // tag_suffix - computed: false, optional: true, required: false
  private _tagSuffix?: string; 
  public get tagSuffix() {
    return this.getStringAttribute('tag_suffix');
  }
  public set tagSuffix(value: string) {
    this._tagSuffix = value;
  }
  public resetTagSuffix() {
    this._tagSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSuffixInput() {
    return this._tagSuffix;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#request DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#claims DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#limits DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#requests DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#request DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#claims DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#limits DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#requests DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#request DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#claims DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#limits DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#requests DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#request DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#claims DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#limits DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#requests DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources {
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#api_server DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#api_server}
  */
  readonly apiServer?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#controller_manager DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#controller_manager}
  */
  readonly controllerManager?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager;
  /**
  * Define the kine container resources. Available only if Kamaji is running using Kine as backing storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#kine DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#kine}
  */
  readonly kine?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#scheduler DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#scheduler}
  */
  readonly scheduler?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerToTerraform(struct!.apiServer),
    controller_manager: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerToTerraform(struct!.controllerManager),
    kine: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineToTerraform(struct!.kine),
    scheduler: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerToTerraform(struct!.scheduler),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerToHclTerraform(struct!.apiServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer",
    },
    controller_manager: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerToHclTerraform(struct!.controllerManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager",
    },
    kine: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineToHclTerraform(struct!.kine),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine",
    },
    scheduler: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerToHclTerraform(struct!.scheduler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer?.internalValue;
    }
    if (this._controllerManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerManager = this._controllerManager?.internalValue;
    }
    if (this._kine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kine = this._kine?.internalValue;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServer.internalValue = undefined;
      this._controllerManager.internalValue = undefined;
      this._kine.internalValue = undefined;
      this._scheduler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServer.internalValue = value.apiServer;
      this._controllerManager.internalValue = value.controllerManager;
      this._kine.internalValue = value.kine;
      this._scheduler.internalValue = value.scheduler;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServerOutputReference(this, "api_server");
  public get apiServer() {
    return this._apiServer;
  }
  public putApiServer(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesApiServer) {
    this._apiServer.internalValue = value;
  }
  public resetApiServer() {
    this._apiServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer.internalValue;
  }

  // controller_manager - computed: false, optional: true, required: false
  private _controllerManager = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManagerOutputReference(this, "controller_manager");
  public get controllerManager() {
    return this._controllerManager;
  }
  public putControllerManager(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesControllerManager) {
    this._controllerManager.internalValue = value;
  }
  public resetControllerManager() {
    this._controllerManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerManagerInput() {
    return this._controllerManager.internalValue;
  }

  // kine - computed: false, optional: true, required: false
  private _kine = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKineOutputReference(this, "kine");
  public get kine() {
    return this._kine;
  }
  public putKine(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesKine) {
    this._kine.internalValue = value;
  }
  public resetKine() {
    this._kine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kineInput() {
    return this._kine.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#max_surge DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#max_unavailable DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy {
  /**
  * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#rolling_update DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate;
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#effect DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#toleration_seconds DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#value DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#operator DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#values DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_expressions DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#label_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#match_label_keys DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#max_skew DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#min_domains DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#node_affinity_policy DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#node_taints_policy DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_key DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#when_unsatisfiable DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsOutputReference {
    return new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment {
  /**
  * AdditionalContainers allows adding additional containers to the Control Plane deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_containers DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_containers}
  */
  readonly additionalContainers?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainers[] | cdktf.IResolvable;
  /**
  * AdditionalInitContainers allows adding additional init containers to the Control Plane deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_init_containers DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_init_containers}
  */
  readonly additionalInitContainers?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainers[] | cdktf.IResolvable;
  /**
  * AdditionalMetadata defines which additional metadata, such as labels and annotations, must be attached to the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_metadata DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadata;
  /**
  * AdditionalVolumeMounts allows to mount an additional volume into each component of the Control Plane (kube-apiserver, controller-manager, and scheduler).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_volume_mounts DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_volume_mounts}
  */
  readonly additionalVolumeMounts?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMounts;
  /**
  * AdditionalVolumes allows to add additional volumes to the Control Plane deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_volumes DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_volumes}
  */
  readonly additionalVolumes?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes[] | cdktf.IResolvable;
  /**
  * If specified, the Tenant Control Plane pod's scheduling constraints. More info: https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes-using-node-affinity/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#affinity DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity;
  /**
  * ExtraArgs allows adding additional arguments to the Control Plane components, such as kube-apiserver, controller-manager, and scheduler. WARNING - This option can override existing parameters and cause components to misbehave in unxpected ways. Only modify if you know what you are doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#extra_args DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#extra_args}
  */
  readonly extraArgs?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#node_selector DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * AdditionalMetadata defines which additional metadata, such as labels and annotations, must be attached to the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_additional_metadata DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_additional_metadata}
  */
  readonly podAdditionalMetadata?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata;
  /**
  * RegistrySettings allows to override the default images for the given Tenant Control Plane instance. It could be used to point to a different container registry rather than the public one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#registry_settings DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#registry_settings}
  */
  readonly registrySettings?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#replicas DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources defines the amount of memory and CPU to allocate to each component of the Control Plane (kube-apiserver, controller-manager, and scheduler).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#resources DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources;
  /**
  * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run the Tenant Control Plane pod. If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the 'legacy' RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#runtime_class_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * ServiceAccountName allows to specify the service account to be mounted to the pods of the Control plane deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#service_account_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Strategy describes how to replace existing pods with new ones for the given Tenant Control Plane. Default value is set to Rolling Update, with a blue/green strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#strategy DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#strategy}
  */
  readonly strategy?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy;
  /**
  * If specified, the Tenant Control Plane pod's tolerations. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#tolerations DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints describes how the Tenant Control Plane pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. In case of nil underlying LabelSelector, the Kamaji one for the given Tenant Control Plane will be used. All topologySpreadConstraints are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#topology_spread_constraints DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_containers: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersToTerraform, false)(struct!.additionalContainers),
    additional_init_containers: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersToTerraform, false)(struct!.additionalInitContainers),
    additional_metadata: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataToTerraform(struct!.additionalMetadata),
    additional_volume_mounts: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsToTerraform(struct!.additionalVolumeMounts),
    additional_volumes: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesToTerraform, false)(struct!.additionalVolumes),
    affinity: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityToTerraform(struct!.affinity),
    extra_args: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsToTerraform(struct!.extraArgs),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_additional_metadata: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataToTerraform(struct!.podAdditionalMetadata),
    registry_settings: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsToTerraform(struct!.registrySettings),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesToTerraform(struct!.resources),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    strategy: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyToTerraform(struct!.strategy),
    tolerations: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_containers: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersToHclTerraform, false)(struct!.additionalContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersList",
    },
    additional_init_containers: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersToHclTerraform, false)(struct!.additionalInitContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersList",
    },
    additional_metadata: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadata",
    },
    additional_volume_mounts: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsToHclTerraform(struct!.additionalVolumeMounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMounts",
    },
    additional_volumes: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesToHclTerraform, false)(struct!.additionalVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesList",
    },
    affinity: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity",
    },
    extra_args: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsToHclTerraform(struct!.extraArgs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_additional_metadata: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataToHclTerraform(struct!.podAdditionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata",
    },
    registry_settings: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsToHclTerraform(struct!.registrySettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
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
    strategy: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalContainers = this._additionalContainers?.internalValue;
    }
    if (this._additionalInitContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInitContainers = this._additionalInitContainers?.internalValue;
    }
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._additionalVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVolumeMounts = this._additionalVolumeMounts?.internalValue;
    }
    if (this._additionalVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVolumes = this._additionalVolumes?.internalValue;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._extraArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAdditionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAdditionalMetadata = this._podAdditionalMetadata?.internalValue;
    }
    if (this._registrySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrySettings = this._registrySettings?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalContainers.internalValue = undefined;
      this._additionalInitContainers.internalValue = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._additionalVolumeMounts.internalValue = undefined;
      this._additionalVolumes.internalValue = undefined;
      this._affinity.internalValue = undefined;
      this._extraArgs.internalValue = undefined;
      this._nodeSelector = undefined;
      this._podAdditionalMetadata.internalValue = undefined;
      this._registrySettings.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._runtimeClassName = undefined;
      this._serviceAccountName = undefined;
      this._strategy.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalContainers.internalValue = value.additionalContainers;
      this._additionalInitContainers.internalValue = value.additionalInitContainers;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._additionalVolumeMounts.internalValue = value.additionalVolumeMounts;
      this._additionalVolumes.internalValue = value.additionalVolumes;
      this._affinity.internalValue = value.affinity;
      this._extraArgs.internalValue = value.extraArgs;
      this._nodeSelector = value.nodeSelector;
      this._podAdditionalMetadata.internalValue = value.podAdditionalMetadata;
      this._registrySettings.internalValue = value.registrySettings;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._runtimeClassName = value.runtimeClassName;
      this._serviceAccountName = value.serviceAccountName;
      this._strategy.internalValue = value.strategy;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // additional_containers - computed: false, optional: true, required: false
  private _additionalContainers = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainersList(this, "additional_containers", false);
  public get additionalContainers() {
    return this._additionalContainers;
  }
  public putAdditionalContainers(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalContainers[] | cdktf.IResolvable) {
    this._additionalContainers.internalValue = value;
  }
  public resetAdditionalContainers() {
    this._additionalContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalContainersInput() {
    return this._additionalContainers.internalValue;
  }

  // additional_init_containers - computed: false, optional: true, required: false
  private _additionalInitContainers = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainersList(this, "additional_init_containers", false);
  public get additionalInitContainers() {
    return this._additionalInitContainers;
  }
  public putAdditionalInitContainers(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalInitContainers[] | cdktf.IResolvable) {
    this._additionalInitContainers.internalValue = value;
  }
  public resetAdditionalInitContainers() {
    this._additionalInitContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInitContainersInput() {
    return this._additionalInitContainers.internalValue;
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // additional_volume_mounts - computed: false, optional: true, required: false
  private _additionalVolumeMounts = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMountsOutputReference(this, "additional_volume_mounts");
  public get additionalVolumeMounts() {
    return this._additionalVolumeMounts;
  }
  public putAdditionalVolumeMounts(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumeMounts) {
    this._additionalVolumeMounts.internalValue = value;
  }
  public resetAdditionalVolumeMounts() {
    this._additionalVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumeMountsInput() {
    return this._additionalVolumeMounts.internalValue;
  }

  // additional_volumes - computed: false, optional: true, required: false
  private _additionalVolumes = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumesList(this, "additional_volumes", false);
  public get additionalVolumes() {
    return this._additionalVolumes;
  }
  public putAdditionalVolumes(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAdditionalVolumes[] | cdktf.IResolvable) {
    this._additionalVolumes.internalValue = value;
  }
  public resetAdditionalVolumes() {
    this._additionalVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumesInput() {
    return this._additionalVolumes.internalValue;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgsOutputReference(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }
  public putExtraArgs(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentExtraArgs) {
    this._extraArgs.internalValue = value;
  }
  public resetExtraArgs() {
    this._extraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs.internalValue;
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

  // pod_additional_metadata - computed: false, optional: true, required: false
  private _podAdditionalMetadata = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadataOutputReference(this, "pod_additional_metadata");
  public get podAdditionalMetadata() {
    return this._podAdditionalMetadata;
  }
  public putPodAdditionalMetadata(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentPodAdditionalMetadata) {
    this._podAdditionalMetadata.internalValue = value;
  }
  public resetPodAdditionalMetadata() {
    this._podAdditionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAdditionalMetadataInput() {
    return this._podAdditionalMetadata.internalValue;
  }

  // registry_settings - computed: false, optional: true, required: false
  private _registrySettings = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettingsOutputReference(this, "registry_settings");
  public get registrySettings() {
    return this._registrySettings;
  }
  public putRegistrySettings(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentRegistrySettings) {
    this._registrySettings.internalValue = value;
  }
  public resetRegistrySettings() {
    this._registrySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrySettingsInput() {
    return this._registrySettings.internalValue;
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
  private _resources = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentResources) {
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

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#annotations DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress {
  /**
  * AdditionalMetadata defines which additional metadata, such as labels and annotations, must be attached to the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_metadata DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata;
  /**
  * Hostname is an optional field which will be used as Ingress's Host. If it is not defined, Ingress's host will be '<tenant>.<namespace>.<domain>', where domain is specified under NetworkProfileSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#hostname DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#ingress_class_name DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataToTerraform(struct!.additionalMetadata),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._hostname = undefined;
      this._ingressClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._hostname = value.hostname;
      this._ingressClassName = value.ingressClassName;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
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

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#annotations DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#labels DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService {
  /**
  * AdditionalMetadata defines which additional metadata, such as labels and annotations, must be attached to the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#additional_metadata DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#additional_metadata}
  */
  readonly additionalMetadata?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata;
  /**
  * ServiceType allows specifying how to expose the Tenant Control Plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#service_type DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#service_type}
  */
  readonly serviceType: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_metadata: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataToTerraform(struct!.additionalMetadata),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_metadata: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataToHclTerraform(struct!.additionalMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMetadata = this._additionalMetadata?.internalValue;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalMetadata.internalValue = value.additionalMetadata;
      this._serviceType = value.serviceType;
    }
  }

  // additional_metadata - computed: false, optional: true, required: false
  private _additionalMetadata = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadataOutputReference(this, "additional_metadata");
  public get additionalMetadata() {
    return this._additionalMetadata;
  }
  public putAdditionalMetadata(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceAdditionalMetadata) {
    this._additionalMetadata.internalValue = value;
  }
  public resetAdditionalMetadata() {
    this._additionalMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetadataInput() {
    return this._additionalMetadata.internalValue;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane {
  /**
  * Defining the options for the deployed Tenant Control Plane as Deployment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#deployment DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#deployment}
  */
  readonly deployment?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment;
  /**
  * Defining the options for an Optional Ingress which will expose API Server of the Tenant Control Plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#ingress DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress;
  /**
  * Defining the options for the Tenant Control Plane Service resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#service DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#service}
  */
  readonly service: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentToTerraform(struct!.deployment),
    ingress: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressToTerraform(struct!.ingress),
    service: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceToTerraform(struct!.service),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment",
    },
    ingress: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress",
    },
    service: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._ingress.internalValue = value.ingress;
      this._service.internalValue = value.service;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet {
  /**
  * CGroupFS defines the cgroup driver for Kubelet https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#cgroupfs DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#cgroupfs}
  */
  readonly cgroupfs?: string;
  /**
  * Ordered list of the preferred NodeAddressTypes to use for kubelet connections. Default to Hostname, InternalIP, ExternalIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#preferred_address_types DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#preferred_address_types}
  */
  readonly preferredAddressTypes?: string[];
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroupfs: cdktf.stringToTerraform(struct!.cgroupfs),
    preferred_address_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredAddressTypes),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroupfs: {
      value: cdktf.stringToHclTerraform(struct!.cgroupfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_address_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredAddressTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupfs = this._cgroupfs;
    }
    if (this._preferredAddressTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAddressTypes = this._preferredAddressTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cgroupfs = undefined;
      this._preferredAddressTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cgroupfs = value.cgroupfs;
      this._preferredAddressTypes = value.preferredAddressTypes;
    }
  }

  // cgroupfs - computed: false, optional: true, required: false
  private _cgroupfs?: string; 
  public get cgroupfs() {
    return this.getStringAttribute('cgroupfs');
  }
  public set cgroupfs(value: string) {
    this._cgroupfs = value;
  }
  public resetCgroupfs() {
    this._cgroupfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupfsInput() {
    return this._cgroupfs;
  }

  // preferred_address_types - computed: false, optional: true, required: false
  private _preferredAddressTypes?: string[]; 
  public get preferredAddressTypes() {
    return this.getListAttribute('preferred_address_types');
  }
  public set preferredAddressTypes(value: string[]) {
    this._preferredAddressTypes = value;
  }
  public resetPreferredAddressTypes() {
    this._preferredAddressTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAddressTypesInput() {
    return this._preferredAddressTypes;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes {
  /**
  * List of enabled Admission Controllers for the Tenant cluster. Full reference available here: https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#admission_controllers DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#admission_controllers}
  */
  readonly admissionControllers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#kubelet DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#kubelet}
  */
  readonly kubelet: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet;
  /**
  * Kubernetes Version for the tenant control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#version DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.admissionControllers),
    kubelet: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletToTerraform(struct!.kubelet),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_controllers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.admissionControllers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubelet: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletToHclTerraform(struct!.kubelet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionControllers = this._admissionControllers;
    }
    if (this._kubelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionControllers = undefined;
      this._kubelet.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionControllers = value.admissionControllers;
      this._kubelet.internalValue = value.kubelet;
      this._version = value.version;
    }
  }

  // admission_controllers - computed: false, optional: true, required: false
  private _admissionControllers?: string[]; 
  public get admissionControllers() {
    return this.getListAttribute('admission_controllers');
  }
  public set admissionControllers(value: string[]) {
    this._admissionControllers = value;
  }
  public resetAdmissionControllers() {
    this._admissionControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionControllersInput() {
    return this._admissionControllers;
  }

  // kubelet - computed: false, optional: false, required: true
  private _kubelet = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesKubelet) {
    this._kubelet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile {
  /**
  * Address where API server of will be exposed. In case of LoadBalancer Service, this can be empty in order to use the exposed IP provided by the cloud controller manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#address DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * AllowAddressAsExternalIP will include tenantControlPlane.Spec.NetworkProfile.Address in the section of ExternalIPs of the Kubernetes Service (only ClusterIP or NodePort)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#allow_address_as_external_ip DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#allow_address_as_external_ip}
  */
  readonly allowAddressAsExternalIp?: boolean | cdktf.IResolvable;
  /**
  * CertSANs sets extra Subject Alternative Names (SANs) for the API Server signing certificate. Use this field to add additional hostnames when exposing the Tenant Control Plane with third solutions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#cert_sa_ns DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#cert_sa_ns}
  */
  readonly certSaNs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#dns_service_i_ps DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#dns_service_i_ps}
  */
  readonly dnsServiceIPs?: string[];
  /**
  * CIDR for Kubernetes Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#pod_cidr DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Port where API server of will be exposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#port DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Kubernetes Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#service_cidr DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#service_cidr}
  */
  readonly serviceCidr?: string;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    allow_address_as_external_ip: cdktf.booleanToTerraform(struct!.allowAddressAsExternalIp),
    cert_sa_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certSaNs),
    dns_service_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServiceIPs),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    port: cdktf.numberToTerraform(struct!.port),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_address_as_external_ip: {
      value: cdktf.booleanToHclTerraform(struct!.allowAddressAsExternalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_sa_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certSaNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_service_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServiceIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._allowAddressAsExternalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAddressAsExternalIp = this._allowAddressAsExternalIp;
    }
    if (this._certSaNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSaNs = this._certSaNs;
    }
    if (this._dnsServiceIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServiceIPs = this._dnsServiceIPs;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._allowAddressAsExternalIp = undefined;
      this._certSaNs = undefined;
      this._dnsServiceIPs = undefined;
      this._podCidr = undefined;
      this._port = undefined;
      this._serviceCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._allowAddressAsExternalIp = value.allowAddressAsExternalIp;
      this._certSaNs = value.certSaNs;
      this._dnsServiceIPs = value.dnsServiceIPs;
      this._podCidr = value.podCidr;
      this._port = value.port;
      this._serviceCidr = value.serviceCidr;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // allow_address_as_external_ip - computed: false, optional: true, required: false
  private _allowAddressAsExternalIp?: boolean | cdktf.IResolvable; 
  public get allowAddressAsExternalIp() {
    return this.getBooleanAttribute('allow_address_as_external_ip');
  }
  public set allowAddressAsExternalIp(value: boolean | cdktf.IResolvable) {
    this._allowAddressAsExternalIp = value;
  }
  public resetAllowAddressAsExternalIp() {
    this._allowAddressAsExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAddressAsExternalIpInput() {
    return this._allowAddressAsExternalIp;
  }

  // cert_sa_ns - computed: false, optional: true, required: false
  private _certSaNs?: string[]; 
  public get certSaNs() {
    return this.getListAttribute('cert_sa_ns');
  }
  public set certSaNs(value: string[]) {
    this._certSaNs = value;
  }
  public resetCertSaNs() {
    this._certSaNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSaNsInput() {
    return this._certSaNs;
  }

  // dns_service_i_ps - computed: false, optional: true, required: false
  private _dnsServiceIPs?: string[]; 
  public get dnsServiceIPs() {
    return this.getListAttribute('dns_service_i_ps');
  }
  public set dnsServiceIPs(value: string[]) {
    this._dnsServiceIPs = value;
  }
  public resetDnsServiceIPs() {
    this._dnsServiceIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIPsInput() {
    return this._dnsServiceIPs;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }
}
export interface DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpec {
  /**
  * Addons contain which addons are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#addons DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#addons}
  */
  readonly addons?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddons;
  /**
  * ControlPlane defines how the Tenant Control Plane Kubernetes resources must be created in the Admin Cluster, such as the number of Pod replicas, the Service resource, or the Ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#control_plane DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#control_plane}
  */
  readonly controlPlane: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane;
  /**
  * DataStore allows to specify a DataStore that should be used to store the Kubernetes data for the given Tenant Control Plane. This parameter is optional and acts as an override over the default one which is used by the Kamaji Operator. Migration from a different DataStore to another one is not yet supported and the reconciliation will be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#data_store DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#data_store}
  */
  readonly dataStore?: string;
  /**
  * Kubernetes specification for tenant control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#kubernetes DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#kubernetes}
  */
  readonly kubernetes: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes;
  /**
  * NetworkProfile specifies how the network is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/kamaji_clastix_io_tenant_control_plane_v1alpha1_manifest#network_profile DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1Manifest#network_profile}
  */
  readonly networkProfile?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile;
}

export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsToTerraform(struct!.addons),
    control_plane: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneToTerraform(struct!.controlPlane),
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    kubernetes: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    network_profile: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileToTerraform(struct!.networkProfile),
  }
}


export function dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsToHclTerraform(struct!.addons),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddons",
    },
    control_plane: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane",
    },
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes",
    },
    network_profile: {
      value: dataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileToHclTerraform(struct!.networkProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons?.internalValue;
    }
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._networkProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProfile = this._networkProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons.internalValue = undefined;
      this._controlPlane.internalValue = undefined;
      this._dataStore = undefined;
      this._kubernetes.internalValue = undefined;
      this._networkProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons.internalValue = value.addons;
      this._controlPlane.internalValue = value.controlPlane;
      this._dataStore = value.dataStore;
      this._kubernetes.internalValue = value.kubernetes;
      this._networkProfile.internalValue = value.networkProfile;
    }
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddonsOutputReference(this, "addons");
  public get addons() {
    return this._addons;
  }
  public putAddons(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecAddons) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // kubernetes - computed: false, optional: false, required: true
  private _kubernetes = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: DataK8SKamajiClastixIoTenantControlPlaneV1Alpha1ManifestSpecNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }
}
