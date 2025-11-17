import * as cdktf from 'cdktf';
import { DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSource,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResources,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelector,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStore,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDisk,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFile,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfs,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinder,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMap,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsi,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApi,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDir,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinity,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImage,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbe,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbe,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResources,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerations,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsList,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMounts,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsList,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGateway,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvs,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsList,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfra,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcer,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistry,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryOutputReference } from './structs400'
import { DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDb,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommon,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabase,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcer,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerOutputReference,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDb,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbToTerraform,
dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbToHclTerraform,
DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbOutputReference } from './structs0'
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#access_modes DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#data_source DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#data_source_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resources DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#selector DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storage_class_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#metadata DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#spec DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_claim_template DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#lun DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#target_ww_ns DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#wwids DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc | cdktf.IResolvable): any {
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
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
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

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
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

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#driver DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#options DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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
  private _secretRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#dataset_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#dataset_uuid DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#partition DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#pd_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#directory DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#repository DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#revision DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#endpoints DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#chap_auth_discovery DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#chap_auth_session DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#initiator_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#iqn DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#iscsi_interface DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#lun DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#portals DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#target_portal DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi | cdktf.IResolvable): any {
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
    secret_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi | cdktf.IResolvable): any {
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
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiSecretRef) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#server DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#claim_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#pd_id DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_id DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#key DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#items DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#optional DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#api_version DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#field_path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#container_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#divisor DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resource DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#field_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resource_field_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#items DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#key DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#items DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#optional DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#audience DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#expiration_seconds DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources {
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#config_map DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#downward_api DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#service_account_token DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#default_mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#sources DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#group DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#registry DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#tenant DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#user DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#image DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#keyring DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#monitors DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#pool DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#user DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdSecretRef) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#gateway DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#protection_domain DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#ssl_enabled DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storage_mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storage_pool DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#system DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoSecretRef) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#key DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#default_mode DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#items DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#optional DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsList",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#read_only DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_namespace DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef",
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosSecretRef) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fs_type DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storage_policy_id DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storage_policy_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#aws_elastic_block_store DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#azure_disk DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#azure_file DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#cephfs DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#cinder DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#config_map DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#csi DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#downward_api DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#empty_dir DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#ephemeral DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#fc DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#flex_volume DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#flocker DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#gce_persistent_disk DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#git_repo DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#glusterfs DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#host_path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#iscsi DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#nfs DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#persistent_volume_claim DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#photon_persistent_disk DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#portworx_volume DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#projected DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#quobyte DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#rbd DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#scale_io DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#storageos DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#vsphere_volume DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfs",
    },
    cinder: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinder",
    },
    config_map: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMap",
    },
    csi: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsi",
    },
    downward_api: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral",
    },
    fc: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc",
    },
    flex_volume: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath",
    },
    iscsi: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected",
    },
    quobyte: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte",
    },
    rbd: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd",
    },
    scale_io: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo",
    },
    secret: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret",
    },
    storageos: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureDisk) {
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
  private _azureFile = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesAzureFile) {
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
  private _cephfs = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCephfs) {
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
  private _cinder = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCinder) {
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
  private _configMap = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesConfigMap) {
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
  private _csi = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesCsi) {
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
  private _downwardApi = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesEphemeral) {
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
  private _fc = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFc) {
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
  private _flexVolume = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlexVolume) {
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
  private _flocker = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGitRepo) {
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
  private _glusterfs = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesGlusterfs) {
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
  private _hostPath = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesHostPath) {
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
  private _iscsi = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesIscsi) {
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
  private _nfs = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesPortworxVolume) {
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
  private _projected = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesProjected) {
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
  private _quobyte = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesQuobyte) {
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
  private _rbd = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesRbd) {
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
  private _scaleIo = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesScaleIo) {
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
  private _secret = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesSecret) {
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
  private _storageos = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesVsphereVolume) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer {
  /**
  * Affinity is a group of affinity scheduling rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#affinity DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#image DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImage;
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#liveness_probe DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#node_selector DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#readiness_probe DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbe;
  /**
  * Number of instances to deploy for a specific aqua deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#replicas DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resources DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#service DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#tolerations DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volume_mounts DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#volumes DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes[] | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityToTerraform(struct!.affinity),
    image: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageToTerraform(struct!.image),
    liveness_probe: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeToTerraform(struct!.livenessProbe),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    readiness_probe: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesToTerraform(struct!.resources),
    service: cdktf.stringToTerraform(struct!.service),
    tolerations: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsToTerraform, false)(struct!.tolerations),
    volume_mounts: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinity",
    },
    image: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImage",
    },
    liveness_probe: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbe",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    readiness_probe: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResources",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._image.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._nodeSelector = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._service = undefined;
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
      this._image.internalValue = value.image;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._nodeSelector = value.nodeSelector;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._service = value.service;
      this._tolerations.internalValue = value.tolerations;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
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

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerTolerations[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumeMounts[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#key DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#optional DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#api_version DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#field_path DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#container_name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#divisor DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resource DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#key DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#optional DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#config_map_key_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#field_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#resource_field_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#secret_key_ref DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromSecretKeyRef) {
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
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#name DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#value DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#value_from DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs | cdktf.IResolvable | undefined) {
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsValueFrom) {
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

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsOutputReference {
    return new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#admin_password DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#audit_db DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#audit_db}
  */
  readonly auditDb?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#common DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#common}
  */
  readonly common?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommon;
  /**
  * AquaService Struct for deployment spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#database DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#database}
  */
  readonly database?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#enforcer DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#enforcer}
  */
  readonly enforcer?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#external_db DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#external_db}
  */
  readonly externalDb?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDb;
  /**
  * AquaService Struct for deployment spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#gateway DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#gateway}
  */
  readonly gateway: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#gateway_envs DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#gateway_envs}
  */
  readonly gatewayEnvs?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#infra DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#infra}
  */
  readonly infra?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfra;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#kube_enforcer DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#kube_enforcer}
  */
  readonly kubeEnforcer?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#license_token DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#license_token}
  */
  readonly licenseToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#mtls DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#mtls}
  */
  readonly mtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#registry DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#registry}
  */
  readonly registry?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#route DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#route}
  */
  readonly route?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#run_as_non_root DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * AquaService Struct for deployment spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#server DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#server}
  */
  readonly server: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#server_config_map_data DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#server_config_map_data}
  */
  readonly serverConfigMapData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#server_envs DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#server_envs}
  */
  readonly serverEnvs?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_aquasec_com_aqua_csp_v1alpha1_manifest#update_enforcer DataK8SOperatorAquasecComAquaCspV1Alpha1Manifest#update_enforcer}
  */
  readonly updateEnforcer?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    audit_db: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbToTerraform(struct!.auditDb),
    common: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonToTerraform(struct!.common),
    database: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseToTerraform(struct!.database),
    enforcer: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerToTerraform(struct!.enforcer),
    external_db: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbToTerraform(struct!.externalDb),
    gateway: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayToTerraform(struct!.gateway),
    gateway_envs: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsToTerraform, false)(struct!.gatewayEnvs),
    infra: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraToTerraform(struct!.infra),
    kube_enforcer: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerToTerraform(struct!.kubeEnforcer),
    license_token: cdktf.stringToTerraform(struct!.licenseToken),
    mtls: cdktf.booleanToTerraform(struct!.mtls),
    registry: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryToTerraform(struct!.registry),
    route: cdktf.booleanToTerraform(struct!.route),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    server: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerToTerraform(struct!.server),
    server_config_map_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serverConfigMapData),
    server_envs: cdktf.listMapper(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsToTerraform, false)(struct!.serverEnvs),
    update_enforcer: cdktf.booleanToTerraform(struct!.updateEnforcer),
  }
}


export function dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_db: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbToHclTerraform(struct!.auditDb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDb",
    },
    common: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonToHclTerraform(struct!.common),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommon",
    },
    database: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabase",
    },
    enforcer: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerToHclTerraform(struct!.enforcer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcer",
    },
    external_db: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbToHclTerraform(struct!.externalDb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDb",
    },
    gateway: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGateway",
    },
    gateway_envs: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsToHclTerraform, false)(struct!.gatewayEnvs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsList",
    },
    infra: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraToHclTerraform(struct!.infra),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfra",
    },
    kube_enforcer: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerToHclTerraform(struct!.kubeEnforcer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcer",
    },
    license_token: {
      value: cdktf.stringToHclTerraform(struct!.licenseToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls: {
      value: cdktf.booleanToHclTerraform(struct!.mtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistry",
    },
    route: {
      value: cdktf.booleanToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer",
    },
    server_config_map_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serverConfigMapData),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server_envs: {
      value: cdktf.listMapperHcl(dataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsToHclTerraform, false)(struct!.serverEnvs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsList",
    },
    update_enforcer: {
      value: cdktf.booleanToHclTerraform(struct!.updateEnforcer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._auditDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditDb = this._auditDb?.internalValue;
    }
    if (this._common?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._enforcer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcer = this._enforcer?.internalValue;
    }
    if (this._externalDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDb = this._externalDb?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._gatewayEnvs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayEnvs = this._gatewayEnvs?.internalValue;
    }
    if (this._infra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infra = this._infra?.internalValue;
    }
    if (this._kubeEnforcer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeEnforcer = this._kubeEnforcer?.internalValue;
    }
    if (this._licenseToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseToken = this._licenseToken;
    }
    if (this._mtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtls = this._mtls;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._serverConfigMapData !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConfigMapData = this._serverConfigMapData;
    }
    if (this._serverEnvs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverEnvs = this._serverEnvs?.internalValue;
    }
    if (this._updateEnforcer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateEnforcer = this._updateEnforcer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._auditDb.internalValue = undefined;
      this._common.internalValue = undefined;
      this._database.internalValue = undefined;
      this._enforcer.internalValue = undefined;
      this._externalDb.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._gatewayEnvs.internalValue = undefined;
      this._infra.internalValue = undefined;
      this._kubeEnforcer.internalValue = undefined;
      this._licenseToken = undefined;
      this._mtls = undefined;
      this._registry.internalValue = undefined;
      this._route = undefined;
      this._runAsNonRoot = undefined;
      this._server.internalValue = undefined;
      this._serverConfigMapData = undefined;
      this._serverEnvs.internalValue = undefined;
      this._updateEnforcer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._auditDb.internalValue = value.auditDb;
      this._common.internalValue = value.common;
      this._database.internalValue = value.database;
      this._enforcer.internalValue = value.enforcer;
      this._externalDb.internalValue = value.externalDb;
      this._gateway.internalValue = value.gateway;
      this._gatewayEnvs.internalValue = value.gatewayEnvs;
      this._infra.internalValue = value.infra;
      this._kubeEnforcer.internalValue = value.kubeEnforcer;
      this._licenseToken = value.licenseToken;
      this._mtls = value.mtls;
      this._registry.internalValue = value.registry;
      this._route = value.route;
      this._runAsNonRoot = value.runAsNonRoot;
      this._server.internalValue = value.server;
      this._serverConfigMapData = value.serverConfigMapData;
      this._serverEnvs.internalValue = value.serverEnvs;
      this._updateEnforcer = value.updateEnforcer;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // audit_db - computed: false, optional: true, required: false
  private _auditDb = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDbOutputReference(this, "audit_db");
  public get auditDb() {
    return this._auditDb;
  }
  public putAuditDb(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecAuditDb) {
    this._auditDb.internalValue = value;
  }
  public resetAuditDb() {
    this._auditDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDbInput() {
    return this._auditDb.internalValue;
  }

  // common - computed: false, optional: true, required: false
  private _common = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommonOutputReference(this, "common");
  public get common() {
    return this._common;
  }
  public putCommon(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecCommon) {
    this._common.internalValue = value;
  }
  public resetCommon() {
    this._common.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // enforcer - computed: false, optional: true, required: false
  private _enforcer = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcerOutputReference(this, "enforcer");
  public get enforcer() {
    return this._enforcer;
  }
  public putEnforcer(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecEnforcer) {
    this._enforcer.internalValue = value;
  }
  public resetEnforcer() {
    this._enforcer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcerInput() {
    return this._enforcer.internalValue;
  }

  // external_db - computed: false, optional: true, required: false
  private _externalDb = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDbOutputReference(this, "external_db");
  public get externalDb() {
    return this._externalDb;
  }
  public putExternalDb(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecExternalDb) {
    this._externalDb.internalValue = value;
  }
  public resetExternalDb() {
    this._externalDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDbInput() {
    return this._externalDb.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // gateway_envs - computed: false, optional: true, required: false
  private _gatewayEnvs = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvsList(this, "gateway_envs", false);
  public get gatewayEnvs() {
    return this._gatewayEnvs;
  }
  public putGatewayEnvs(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecGatewayEnvs[] | cdktf.IResolvable) {
    this._gatewayEnvs.internalValue = value;
  }
  public resetGatewayEnvs() {
    this._gatewayEnvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayEnvsInput() {
    return this._gatewayEnvs.internalValue;
  }

  // infra - computed: false, optional: true, required: false
  private _infra = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfraOutputReference(this, "infra");
  public get infra() {
    return this._infra;
  }
  public putInfra(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecInfra) {
    this._infra.internalValue = value;
  }
  public resetInfra() {
    this._infra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraInput() {
    return this._infra.internalValue;
  }

  // kube_enforcer - computed: false, optional: true, required: false
  private _kubeEnforcer = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcerOutputReference(this, "kube_enforcer");
  public get kubeEnforcer() {
    return this._kubeEnforcer;
  }
  public putKubeEnforcer(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecKubeEnforcer) {
    this._kubeEnforcer.internalValue = value;
  }
  public resetKubeEnforcer() {
    this._kubeEnforcer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeEnforcerInput() {
    return this._kubeEnforcer.internalValue;
  }

  // license_token - computed: false, optional: true, required: false
  private _licenseToken?: string; 
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }
  public set licenseToken(value: string) {
    this._licenseToken = value;
  }
  public resetLicenseToken() {
    this._licenseToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTokenInput() {
    return this._licenseToken;
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls?: boolean | cdktf.IResolvable; 
  public get mtls() {
    return this.getBooleanAttribute('mtls');
  }
  public set mtls(value: boolean | cdktf.IResolvable) {
    this._mtls = value;
  }
  public resetMtls() {
    this._mtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route?: boolean | cdktf.IResolvable; 
  public get route() {
    return this.getBooleanAttribute('route');
  }
  public set route(value: boolean | cdktf.IResolvable) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // server - computed: false, optional: false, required: true
  private _server = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServer) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // server_config_map_data - computed: false, optional: true, required: false
  private _serverConfigMapData?: { [key: string]: string }; 
  public get serverConfigMapData() {
    return this.getStringMapAttribute('server_config_map_data');
  }
  public set serverConfigMapData(value: { [key: string]: string }) {
    this._serverConfigMapData = value;
  }
  public resetServerConfigMapData() {
    this._serverConfigMapData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigMapDataInput() {
    return this._serverConfigMapData;
  }

  // server_envs - computed: false, optional: true, required: false
  private _serverEnvs = new DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvsList(this, "server_envs", false);
  public get serverEnvs() {
    return this._serverEnvs;
  }
  public putServerEnvs(value: DataK8SOperatorAquasecComAquaCspV1Alpha1ManifestSpecServerEnvs[] | cdktf.IResolvable) {
    this._serverEnvs.internalValue = value;
  }
  public resetServerEnvs() {
    this._serverEnvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEnvsInput() {
    return this._serverEnvs.internalValue;
  }

  // update_enforcer - computed: false, optional: true, required: false
  private _updateEnforcer?: boolean | cdktf.IResolvable; 
  public get updateEnforcer() {
    return this.getBooleanAttribute('update_enforcer');
  }
  public set updateEnforcer(value: boolean | cdktf.IResolvable) {
    this._updateEnforcer = value;
  }
  public resetUpdateEnforcer() {
    this._updateEnforcer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateEnforcerInput() {
    return this._updateEnforcer;
  }
}
