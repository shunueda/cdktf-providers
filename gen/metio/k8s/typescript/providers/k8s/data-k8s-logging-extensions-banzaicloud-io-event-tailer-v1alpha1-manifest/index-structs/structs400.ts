import * as cdktf from 'cdktf';
import { DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStore,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDisk,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFile,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfs,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinder,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMap,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsi,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApi,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDir,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeral,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFc,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolume,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlocker,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDisk,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepo,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfs,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinity,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainers,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersList,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecrets,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsList,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainers,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersList,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContext,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerations,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsList,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverrides,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImage,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolume,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeOutputReference,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverrides,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesToTerraform,
dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesToHclTerraform,
DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesOutputReference } from './structs0'
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#pull_policy DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#reference DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._reference = value.reference;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#chap_auth_discovery DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#chap_auth_session DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#initiator_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#iqn DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#iscsi_interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#lun DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#portals DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#target_portal DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
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

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
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
  private _secretRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#server DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#claim_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#pd_id DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume_id DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#key DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#operator DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#values DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#match_expressions DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#match_labels DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#label_selector DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#optional DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#signer_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#key DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#items DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#optional DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#api_version DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#field_path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#container_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#divisor DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#resource DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#field_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#resource_field_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#items DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#key DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#items DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#optional DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#audience DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#expiration_seconds DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#cluster_trust_bundle DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#config_map DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#downward_api DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#service_account_token DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#default_mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#sources DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#group DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#registry DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#tenant DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#user DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#image DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#keyring DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#monitors DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#pool DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#user DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdSecretRef) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#gateway DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#protection_domain DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#ssl_enabled DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#storage_mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#storage_pool DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#system DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoSecretRef) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#key DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#default_mode DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#items DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#optional DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsList",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#read_only DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret_ref DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume_namespace DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef",
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosSecretRef) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fs_type DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#storage_policy_id DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#storage_policy_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volume_path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#aws_elastic_block_store DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#azure_disk DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#azure_file DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#cephfs DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#cinder DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#config_map DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#csi DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#downward_api DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#empty_dir DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#ephemeral DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#fc DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#flex_volume DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#flocker DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#gce_persistent_disk DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#git_repo DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#glusterfs DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#host_path DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#image DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#iscsi DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#nfs DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#persistent_volume_claim DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#photon_persistent_disk DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#portworx_volume DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#projected DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#quobyte DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#rbd DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#scale_io DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#secret DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#storageos DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#vsphere_volume DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathToTerraform(struct!.hostPath),
    image: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageToTerraform(struct!.image),
    iscsi: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfs",
    },
    cinder: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinder",
    },
    config_map: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMap",
    },
    csi: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsi",
    },
    downward_api: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeral",
    },
    fc: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFc",
    },
    flex_volume: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath",
    },
    image: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage",
    },
    iscsi: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected",
    },
    quobyte: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte",
    },
    rbd: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd",
    },
    scale_io: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo",
    },
    secret: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret",
    },
    storageos: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureDisk) {
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
  private _azureFile = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesAzureFile) {
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
  private _cephfs = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCephfs) {
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
  private _cinder = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCinder) {
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
  private _configMap = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesConfigMap) {
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
  private _csi = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesCsi) {
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
  private _downwardApi = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesEphemeral) {
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
  private _fc = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFc) {
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
  private _flexVolume = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlexVolume) {
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
  private _flocker = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGitRepo) {
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
  private _glusterfs = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesGlusterfs) {
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
  private _hostPath = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesHostPath) {
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
  private _image = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesImage) {
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
  private _iscsi = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesIscsi) {
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
  private _nfs = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesPortworxVolume) {
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
  private _projected = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesProjected) {
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
  private _quobyte = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesQuobyte) {
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
  private _rbd = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesRbd) {
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
  private _scaleIo = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesScaleIo) {
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
  private _secret = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesSecret) {
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
  private _storageos = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesVsphereVolume) {
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

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesOutputReference {
    return new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#affinity DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#containers DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#image_pull_secrets DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#init_containers DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#node_selector DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#priority_class_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#security_context DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#service_account_name DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#tolerations DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#volumes DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes[] | cdktf.IResolvable;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityToTerraform(struct!.affinity),
    containers: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersToTerraform, false)(struct!.containers),
    image_pull_secrets: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersToTerraform, false)(struct!.initContainers),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    security_context: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextToTerraform(struct!.securityContext),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tolerations: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsToTerraform, false)(struct!.tolerations),
    volumes: cdktf.listMapper(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinity",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersList",
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
    security_context: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContext",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
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
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
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

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._containers.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeSelector = undefined;
      this._priorityClassName = undefined;
      this._securityContext.internalValue = undefined;
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
      this._containers.internalValue = value.containers;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._nodeSelector = value.nodeSelector;
      this._priorityClassName = value.priorityClassName;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccountName = value.serviceAccountName;
      this._tolerations.internalValue = value.tolerations;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesInitContainers[] | cdktf.IResolvable) {
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

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesSecurityContext) {
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesTolerations[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#container_overrides DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#container_overrides}
  */
  readonly containerOverrides?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#control_namespace DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#control_namespace}
  */
  readonly controlNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#image DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#position_volume DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#position_volume}
  */
  readonly positionVolume?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#workload_meta_overrides DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#workload_meta_overrides}
  */
  readonly workloadMetaOverrides?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/logging_extensions_banzaicloud_io_event_tailer_v1alpha1_manifest#workload_overrides DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1Manifest#workload_overrides}
  */
  readonly workloadOverrides?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides;
}

export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_overrides: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesToTerraform(struct!.containerOverrides),
    control_namespace: cdktf.stringToTerraform(struct!.controlNamespace),
    image: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    position_volume: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeToTerraform(struct!.positionVolume),
    workload_meta_overrides: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesToTerraform(struct!.workloadMetaOverrides),
    workload_overrides: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesToTerraform(struct!.workloadOverrides),
  }
}


export function dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_overrides: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesToHclTerraform(struct!.containerOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverrides",
    },
    control_namespace: {
      value: cdktf.stringToHclTerraform(struct!.controlNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImage",
    },
    position_volume: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeToHclTerraform(struct!.positionVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolume",
    },
    workload_meta_overrides: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesToHclTerraform(struct!.workloadMetaOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverrides",
    },
    workload_overrides: {
      value: dataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesToHclTerraform(struct!.workloadOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
    }
    if (this._controlNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlNamespace = this._controlNamespace;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._positionVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionVolume = this._positionVolume?.internalValue;
    }
    if (this._workloadMetaOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetaOverrides = this._workloadMetaOverrides?.internalValue;
    }
    if (this._workloadOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadOverrides = this._workloadOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerOverrides.internalValue = undefined;
      this._controlNamespace = undefined;
      this._image.internalValue = undefined;
      this._positionVolume.internalValue = undefined;
      this._workloadMetaOverrides.internalValue = undefined;
      this._workloadOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerOverrides.internalValue = value.containerOverrides;
      this._controlNamespace = value.controlNamespace;
      this._image.internalValue = value.image;
      this._positionVolume.internalValue = value.positionVolume;
      this._workloadMetaOverrides.internalValue = value.workloadMetaOverrides;
      this._workloadOverrides.internalValue = value.workloadOverrides;
    }
  }

  // container_overrides - computed: false, optional: true, required: false
  private _containerOverrides = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverridesOutputReference(this, "container_overrides");
  public get containerOverrides() {
    return this._containerOverrides;
  }
  public putContainerOverrides(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecContainerOverrides) {
    this._containerOverrides.internalValue = value;
  }
  public resetContainerOverrides() {
    this._containerOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOverridesInput() {
    return this._containerOverrides.internalValue;
  }

  // control_namespace - computed: false, optional: false, required: true
  private _controlNamespace?: string; 
  public get controlNamespace() {
    return this.getStringAttribute('control_namespace');
  }
  public set controlNamespace(value: string) {
    this._controlNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNamespaceInput() {
    return this._controlNamespace;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // position_volume - computed: false, optional: true, required: false
  private _positionVolume = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolumeOutputReference(this, "position_volume");
  public get positionVolume() {
    return this._positionVolume;
  }
  public putPositionVolume(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecPositionVolume) {
    this._positionVolume.internalValue = value;
  }
  public resetPositionVolume() {
    this._positionVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionVolumeInput() {
    return this._positionVolume.internalValue;
  }

  // workload_meta_overrides - computed: false, optional: true, required: false
  private _workloadMetaOverrides = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverridesOutputReference(this, "workload_meta_overrides");
  public get workloadMetaOverrides() {
    return this._workloadMetaOverrides;
  }
  public putWorkloadMetaOverrides(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadMetaOverrides) {
    this._workloadMetaOverrides.internalValue = value;
  }
  public resetWorkloadMetaOverrides() {
    this._workloadMetaOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetaOverridesInput() {
    return this._workloadMetaOverrides.internalValue;
  }

  // workload_overrides - computed: false, optional: true, required: false
  private _workloadOverrides = new DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverridesOutputReference(this, "workload_overrides");
  public get workloadOverrides() {
    return this._workloadOverrides;
  }
  public putWorkloadOverrides(value: DataK8SLoggingExtensionsBanzaicloudIoEventTailerV1Alpha1ManifestSpecWorkloadOverrides) {
    this._workloadOverrides.internalValue = value;
  }
  public resetWorkloadOverrides() {
    this._workloadOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadOverridesInput() {
    return this._workloadOverrides.internalValue;
  }
}
