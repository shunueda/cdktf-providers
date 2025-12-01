import * as cdktf from 'cdktf';
import { DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStore,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDisk,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFile,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfs,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinder,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMap,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsi,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApi,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDir,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeral,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFc,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolume,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainers,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycle,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbe,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservability,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudget,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContext,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPorts,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResources,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContext,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocator,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerations,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraints,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategy,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplates,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMounts,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsList } from './structs400'
import { DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainers,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinity,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscaler,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmaps,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategy,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyOutputReference,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnv,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFrom,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromList,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngress,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressToTerraform,
dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressToHclTerraform,
DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressOutputReference } from './structs0'
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#dataset_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#dataset_uuid DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#partition DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pd_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk | cdktf.IResolvable): any {
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
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#directory DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#repository DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#revision DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
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
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#endpoints DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
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
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pull_policy DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#reference DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#chap_auth_discovery DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#chap_auth_session DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#initiator_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#iqn DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#iscsi_interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#lun DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#portals DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#target_portal DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi | cdktf.IResolvable): any {
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
    secret_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi | cdktf.IResolvable): any {
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
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiSecretRef) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#server DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#claim_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pd_id DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_id DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#key DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#operator DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#values DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#match_expressions DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#match_labels DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#label_selector DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#optional DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#signer_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#key DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#items DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#optional DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#api_version DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#field_path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#container_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#divisor DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#resource DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#field_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#resource_field_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#items DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#key DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#items DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#optional DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#audience DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#expiration_seconds DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#cluster_trust_bundle DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#config_map DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#downward_api DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#service_account_token DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#default_mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#sources DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#group DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#registry DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#tenant DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#user DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#image DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#keyring DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#monitors DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pool DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#user DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdSecretRef) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#gateway DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#protection_domain DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#ssl_enabled DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#storage_mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#storage_pool DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#system DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoSecretRef) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#key DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#default_mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#items DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#optional DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsList",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#read_only DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret_ref DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_namespace DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef",
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosSecretRef) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fs_type DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#storage_policy_id DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#storage_policy_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#aws_elastic_block_store DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#azure_disk DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#azure_file DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#cephfs DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#cinder DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#config_map DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#csi DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#downward_api DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#empty_dir DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#ephemeral DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeral;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#fc DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#flex_volume DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#flocker DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#gce_persistent_disk DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#git_repo DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#glusterfs DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#host_path DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#image DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#iscsi DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#nfs DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#persistent_volume_claim DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#photon_persistent_disk DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#portworx_volume DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#projected DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#quobyte DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#rbd DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#scale_io DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#secret DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#storageos DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#vsphere_volume DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathToTerraform(struct!.hostPath),
    image: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageToTerraform(struct!.image),
    iscsi: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath",
    },
    image: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage",
    },
    iscsi: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureDisk) {
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
  private _azureFile = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesAzureFile) {
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
  private _cephfs = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCephfs) {
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
  private _cinder = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCinder) {
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
  private _configMap = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesConfigMap) {
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
  private _csi = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesCsi) {
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
  private _downwardApi = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesEphemeral) {
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
  private _fc = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFc) {
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
  private _flexVolume = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlexVolume) {
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
  private _flocker = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGitRepo) {
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
  private _glusterfs = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesGlusterfs) {
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
  private _hostPath = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesHostPath) {
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
  private _image = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesImage) {
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
  private _iscsi = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesIscsi) {
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
  private _nfs = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesPortworxVolume) {
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
  private _projected = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesProjected) {
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
  private _quobyte = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesQuobyte) {
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
  private _rbd = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesRbd) {
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
  private _scaleIo = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesScaleIo) {
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
  private _secret = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesSecret) {
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
  private _storageos = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesVsphereVolume) {
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

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesOutputReference {
    return new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#additional_containers DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#additional_containers}
  */
  readonly additionalContainers?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#affinity DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#args DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#autoscaler DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#autoscaler}
  */
  readonly autoscaler?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscaler;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#config DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#configmaps DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#configmaps}
  */
  readonly configmaps?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmaps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#deployment_update_strategy DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#deployment_update_strategy}
  */
  readonly deploymentUpdateStrategy?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#env DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#env_from DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#host_network DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#image DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#image_pull_policy DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#ingress DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#init_containers DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#lifecycle DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#liveness_probe DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#management_state DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#management_state}
  */
  readonly managementState: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#max_replicas DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#min_replicas DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#mode DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#node_selector DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#observability DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#observability}
  */
  readonly observability?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservability;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pod_annotations DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pod_annotations}
  */
  readonly podAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pod_disruption_budget DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#pod_security_context DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#ports DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#priority_class_name DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#replicas DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#resources DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#security_context DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#service_account DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#share_process_namespace DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#target_allocator DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#target_allocator}
  */
  readonly targetAllocator?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#termination_grace_period_seconds DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#tolerations DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#topology_spread_constraints DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#update_strategy DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#upgrade_strategy DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#upgrade_strategy}
  */
  readonly upgradeStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_claim_templates DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volume_mounts DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/opentelemetry_io_open_telemetry_collector_v1alpha1_manifest#volumes DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_containers: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersToTerraform, false)(struct!.additionalContainers),
    affinity: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityToTerraform(struct!.affinity),
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    autoscaler: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerToTerraform(struct!.autoscaler),
    config: cdktf.stringToTerraform(struct!.config),
    configmaps: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsToTerraform, false)(struct!.configmaps),
    deployment_update_strategy: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyToTerraform(struct!.deploymentUpdateStrategy),
    env: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromToTerraform, false)(struct!.envFrom),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    ingress: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressToTerraform(struct!.ingress),
    init_containers: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersToTerraform, false)(struct!.initContainers),
    lifecycle: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeToTerraform(struct!.livenessProbe),
    management_state: cdktf.stringToTerraform(struct!.managementState),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    observability: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityToTerraform(struct!.observability),
    pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAnnotations),
    pod_disruption_budget: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_security_context: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    ports: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsToTerraform, false)(struct!.ports),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    security_context: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    target_allocator: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorToTerraform(struct!.targetAllocator),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    update_strategy: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
    upgrade_strategy: cdktf.stringToTerraform(struct!.upgradeStrategy),
    volume_claim_templates: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
    volume_mounts: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_containers: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersToHclTerraform, false)(struct!.additionalContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersList",
    },
    affinity: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinity",
    },
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    autoscaler: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerToHclTerraform(struct!.autoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscaler",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configmaps: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsToHclTerraform, false)(struct!.configmaps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsList",
    },
    deployment_update_strategy: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyToHclTerraform(struct!.deploymentUpdateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategy",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
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
    ingress: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngress",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersList",
    },
    lifecycle: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycle",
    },
    liveness_probe: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbe",
    },
    management_state: {
      value: cdktf.stringToHclTerraform(struct!.managementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
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
    observability: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservability",
    },
    pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_disruption_budget: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudget",
    },
    pod_security_context: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContext",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsList",
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
    resources: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResources",
    },
    security_context: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContext",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_process_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_allocator: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorToHclTerraform(struct!.targetAllocator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocator",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsList",
    },
    update_strategy: {
      value: dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategy",
    },
    upgrade_strategy: {
      value: cdktf.stringToHclTerraform(struct!.upgradeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalContainers = this._additionalContainers?.internalValue;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._configmaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmaps = this._configmaps?.internalValue;
    }
    if (this._deploymentUpdateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentUpdateStrategy = this._deploymentUpdateStrategy?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
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
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._managementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementState = this._managementState;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    if (this._podAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAnnotations = this._podAnnotations;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._targetAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAllocator = this._targetAllocator?.internalValue;
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
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    if (this._upgradeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeStrategy = this._upgradeStrategy;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
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

  public set internalValue(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalContainers.internalValue = undefined;
      this._affinity.internalValue = undefined;
      this._args = undefined;
      this._autoscaler.internalValue = undefined;
      this._config = undefined;
      this._configmaps.internalValue = undefined;
      this._deploymentUpdateStrategy.internalValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._ingress.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._managementState = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._mode = undefined;
      this._nodeSelector = undefined;
      this._observability.internalValue = undefined;
      this._podAnnotations = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._priorityClassName = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccount = undefined;
      this._shareProcessNamespace = undefined;
      this._targetAllocator.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
      this._upgradeStrategy = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
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
      this._additionalContainers.internalValue = value.additionalContainers;
      this._affinity.internalValue = value.affinity;
      this._args = value.args;
      this._autoscaler.internalValue = value.autoscaler;
      this._config = value.config;
      this._configmaps.internalValue = value.configmaps;
      this._deploymentUpdateStrategy.internalValue = value.deploymentUpdateStrategy;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._hostNetwork = value.hostNetwork;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._ingress.internalValue = value.ingress;
      this._initContainers.internalValue = value.initContainers;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._managementState = value.managementState;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._mode = value.mode;
      this._nodeSelector = value.nodeSelector;
      this._observability.internalValue = value.observability;
      this._podAnnotations = value.podAnnotations;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._ports.internalValue = value.ports;
      this._priorityClassName = value.priorityClassName;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccount = value.serviceAccount;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._targetAllocator.internalValue = value.targetAllocator;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._updateStrategy.internalValue = value.updateStrategy;
      this._upgradeStrategy = value.upgradeStrategy;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // additional_containers - computed: false, optional: true, required: false
  private _additionalContainers = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainersList(this, "additional_containers", false);
  public get additionalContainers() {
    return this._additionalContainers;
  }
  public putAdditionalContainers(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAdditionalContainers[] | cdktf.IResolvable) {
    this._additionalContainers.internalValue = value;
  }
  public resetAdditionalContainers() {
    this._additionalContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalContainersInput() {
    return this._additionalContainers.internalValue;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // configmaps - computed: false, optional: true, required: false
  private _configmaps = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmapsList(this, "configmaps", false);
  public get configmaps() {
    return this._configmaps;
  }
  public putConfigmaps(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecConfigmaps[] | cdktf.IResolvable) {
    this._configmaps.internalValue = value;
  }
  public resetConfigmaps() {
    this._configmaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapsInput() {
    return this._configmaps.internalValue;
  }

  // deployment_update_strategy - computed: false, optional: true, required: false
  private _deploymentUpdateStrategy = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategyOutputReference(this, "deployment_update_strategy");
  public get deploymentUpdateStrategy() {
    return this._deploymentUpdateStrategy;
  }
  public putDeploymentUpdateStrategy(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecDeploymentUpdateStrategy) {
    this._deploymentUpdateStrategy.internalValue = value;
  }
  public resetDeploymentUpdateStrategy() {
    this._deploymentUpdateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentUpdateStrategyInput() {
    return this._deploymentUpdateStrategy.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
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
  private _ingress = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // management_state - computed: false, optional: false, required: true
  private _managementState?: string; 
  public get managementState() {
    return this.getStringAttribute('management_state');
  }
  public set managementState(value: string) {
    this._managementState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStateInput() {
    return this._managementState;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
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

  // observability - computed: false, optional: true, required: false
  private _observability = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // pod_annotations - computed: false, optional: true, required: false
  private _podAnnotations?: { [key: string]: string }; 
  public get podAnnotations() {
    return this.getStringMapAttribute('pod_annotations');
  }
  public set podAnnotations(value: { [key: string]: string }) {
    this._podAnnotations = value;
  }
  public resetPodAnnotations() {
    this._podAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAnnotationsInput() {
    return this._podAnnotations;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecResources) {
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
  private _securityContext = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecSecurityContext) {
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

  // target_allocator - computed: false, optional: true, required: false
  private _targetAllocator = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocatorOutputReference(this, "target_allocator");
  public get targetAllocator() {
    return this._targetAllocator;
  }
  public putTargetAllocator(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTargetAllocator) {
    this._targetAllocator.internalValue = value;
  }
  public resetTargetAllocator() {
    this._targetAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAllocatorInput() {
    return this._targetAllocator.internalValue;
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
  private _tolerations = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy?: string; 
  public get upgradeStrategy() {
    return this.getStringAttribute('upgrade_strategy');
  }
  public set upgradeStrategy(value: string) {
    this._upgradeStrategy = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy;
  }

  // volume_claim_templates - computed: false, optional: true, required: false
  private _volumeClaimTemplates = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  public resetVolumeClaimTemplates() {
    this._volumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SOpentelemetryIoOpenTelemetryCollectorV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable) {
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
