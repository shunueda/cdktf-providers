import * as cdktf from 'cdktf';
import { DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackup,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpec,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustom,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExpose,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeList,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScaling,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingList,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFrom,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromList,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigure,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigures,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresList,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestart,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartList,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestore,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpec,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecOutputReference,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchover,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverToTerraform,
dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverToHclTerraform,
DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverList } from './structs0'
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents {
  /**
  * Specifies the name of the ComponentDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#component_definition_name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#component_definition_name}
  */
  readonly componentDefinitionName?: string;
  /**
  * Specifies the name of the Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#component_name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#component_name}
  */
  readonly componentName: string;
  /**
  * Specifies the version of the Service expected to be provisioned by this Component. Referring to the ServiceVersion defined by the ComponentDefinition and ComponentVersion. And ServiceVersion in ClusterComponentSpec is optional, when no version is specified, use the latest available version in ComponentVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#service_version DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#service_version}
  */
  readonly serviceVersion?: string;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_definition_name: cdktf.stringToTerraform(struct!.componentDefinitionName),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    service_version: cdktf.stringToTerraform(struct!.serviceVersion),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_definition_name: {
      value: cdktf.stringToHclTerraform(struct!.componentDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_version: {
      value: cdktf.stringToHclTerraform(struct!.serviceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefinitionName = this._componentDefinitionName;
    }
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._serviceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVersion = this._serviceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentDefinitionName = undefined;
      this._componentName = undefined;
      this._serviceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentDefinitionName = value.componentDefinitionName;
      this._componentName = value.componentName;
      this._serviceVersion = value.serviceVersion;
    }
  }

  // component_definition_name - computed: false, optional: true, required: false
  private _componentDefinitionName?: string; 
  public get componentDefinitionName() {
    return this.getStringAttribute('component_definition_name');
  }
  public set componentDefinitionName(value: string) {
    this._componentDefinitionName = value;
  }
  public resetComponentDefinitionName() {
    this._componentDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefinitionNameInput() {
    return this._componentDefinitionName;
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // service_version - computed: false, optional: true, required: false
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  public resetServiceVersion() {
    this._serviceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsOutputReference {
    return new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade {
  /**
  * Deprecated: since v0.9 because ClusterVersion is deprecated. Specifies the name of the target ClusterVersion for the upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#cluster_version_ref DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#cluster_version_ref}
  */
  readonly clusterVersionRef?: string;
  /**
  * Lists components to be upgrade based on desired ComponentDefinition and ServiceVersion. From the perspective of cluster API, the reasonable combinations should be: 1. (comp-def, service-ver) - upgrade to the specified service version and component definition, the user takes the responsibility to ensure that they are compatible. 2. ('', service-ver) - upgrade to the specified service version, let the operator choose the latest compatible component definition. 3. (comp-def, '') - upgrade to the specified component definition, let the operator choose the latest compatible service version. 4. ('', '') - upgrade to the latest service version and component definition, the operator will ensure the compatibility between the selected versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#components DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#components}
  */
  readonly components?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version_ref: cdktf.stringToTerraform(struct!.clusterVersionRef),
    components: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsToTerraform, false)(struct!.components),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_version_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterVersionRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersionRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersionRef = this._clusterVersionRef;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterVersionRef = undefined;
      this._components.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterVersionRef = value.clusterVersionRef;
      this._components.internalValue = value.components;
    }
  }

  // cluster_version_ref - computed: false, optional: true, required: false
  private _clusterVersionRef?: string; 
  public get clusterVersionRef() {
    return this.getStringAttribute('cluster_version_ref');
  }
  public set clusterVersionRef(value: string) {
    this._clusterVersionRef = value;
  }
  public resetClusterVersionRef() {
    this._clusterVersionRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionRefInput() {
    return this._clusterVersionRef;
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates {
  /**
  * Specify the name of the volumeClaimTemplate in the Component. The specified name must match one of the volumeClaimTemplates defined in the 'clusterComponentSpec.volumeClaimTemplates' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the desired storage size for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#storage DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#storage}
  */
  readonly storage: string;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates | cdktf.IResolvable): any {
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
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._storage = value.storage;
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

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesOutputReference {
    return new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances {
  /**
  * Refer to the instance template name of the component or sharding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * volumeClaimTemplates specifies the storage size and volumeClaimTemplate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#volume_claim_templates DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    volume_claim_templates: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances | cdktf.IResolvable): any {
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
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
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

  // volume_claim_templates - computed: false, optional: false, required: true
  private _volumeClaimTemplates = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesOutputReference {
    return new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates {
  /**
  * Specify the name of the volumeClaimTemplate in the Component. The specified name must match one of the volumeClaimTemplates defined in the 'clusterComponentSpec.volumeClaimTemplates' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the desired storage size for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#storage DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#storage}
  */
  readonly storage: string;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates | cdktf.IResolvable): any {
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
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._storage = value.storage;
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

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesOutputReference {
    return new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion {
  /**
  * Specifies the name of the Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#component_name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#component_name}
  */
  readonly componentName: string;
  /**
  * Specifies the desired storage size of the instance template that need to volume expand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#instances DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#instances}
  */
  readonly instances?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances[] | cdktf.IResolvable;
  /**
  * Specifies a list of OpsRequestVolumeClaimTemplate objects, defining the volumeClaimTemplates that are used to expand the storage and the desired storage size for each one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#volume_claim_templates DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    instances: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesToTerraform, false)(struct!.instances),
    volume_claim_templates: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesToHclTerraform, false)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesList",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentName = undefined;
      this._instances.internalValue = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentName = value.componentName;
      this._instances.internalValue = value.instances;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
    }
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // volume_claim_templates - computed: false, optional: false, required: true
  private _volumeClaimTemplates = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionOutputReference {
    return new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpec {
  /**
  * Specifies the parameters to backup a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#backup DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#backup}
  */
  readonly backup?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackup;
  /**
  * Deprecated: since v0.9, use backup instead. Specifies the parameters to backup a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#backup_spec DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#backup_spec}
  */
  readonly backupSpec?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpec;
  /**
  * Indicates whether the current operation should be canceled and terminated gracefully if it's in the 'Pending', 'Creating', or 'Running' state. This field applies only to 'VerticalScaling' and 'HorizontalScaling' opsRequests. Note: Setting 'cancel' to true is irreversible; further modifications to this field are ineffective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#cancel DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#cancel}
  */
  readonly cancel?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the Cluster resource that this operation is targeting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#cluster_name DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Deprecated: since v0.9, use clusterName instead. Specifies the name of the Cluster resource that this operation is targeting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#cluster_ref DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef?: string;
  /**
  * Specifies a custom operation defined by OpsDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#custom DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustom;
  /**
  * Indicates whether opsRequest should continue to queue when 'force' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#enqueue_on_force DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#enqueue_on_force}
  */
  readonly enqueueOnForce?: boolean | cdktf.IResolvable;
  /**
  * Lists Expose objects, each specifying a Component and its services to be exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#expose DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#expose}
  */
  readonly expose?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExpose[] | cdktf.IResolvable;
  /**
  * Instructs the system to bypass pre-checks (including cluster state checks and customized pre-conditions hooks) and immediately execute the opsRequest, except for the opsRequest of 'Start' type, which will still undergo pre-checks even if 'force' is true. This is useful for concurrent execution of 'VerticalScaling' and 'HorizontalScaling' opsRequests. By setting 'force' to true, you can bypass the default checks and demand these opsRequests to run simultaneously. Note: Once set, the 'force' field is immutable and cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#force DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Lists HorizontalScaling objects, each specifying scaling requirements for a Component, including desired replica changes, configurations for new instances, modifications for existing instances, and take offline/online the specified instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#horizontal_scaling DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#horizontal_scaling}
  */
  readonly horizontalScaling?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScaling[] | cdktf.IResolvable;
  /**
  * Specifies the maximum time in seconds that the OpsRequest will wait for its pre-conditions to be met before it aborts the operation. If set to 0 (default), pre-conditions must be satisfied immediately for the OpsRequest to proceed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#pre_condition_deadline_seconds DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#pre_condition_deadline_seconds}
  */
  readonly preConditionDeadlineSeconds?: number;
  /**
  * Specifies the parameters to rebuild some instances. Rebuilding an instance involves restoring its data from a backup or another database replica. The instances being rebuilt usually serve as standby in the cluster. Hence rebuilding instances is often also referred to as 'standby reconstruction'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#rebuild_from DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#rebuild_from}
  */
  readonly rebuildFrom?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFrom[] | cdktf.IResolvable;
  /**
  * Specifies a component and its configuration updates. This field is deprecated and replaced by 'reconfigures'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#reconfigure DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#reconfigure}
  */
  readonly reconfigure?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigure;
  /**
  * Lists Reconfigure objects, each specifying a Component and its configuration updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#reconfigures DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#reconfigures}
  */
  readonly reconfigures?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigures[] | cdktf.IResolvable;
  /**
  * Lists Components to be restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#restart DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#restart}
  */
  readonly restart?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestart[] | cdktf.IResolvable;
  /**
  * Specifies the parameters to restore a Cluster. Note that this restore operation will roll back cluster services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#restore DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#restore}
  */
  readonly restore?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestore;
  /**
  * Deprecated: since v0.9, use restore instead. Specifies the parameters to restore a Cluster. Note that this restore operation will roll back cluster services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#restore_spec DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#restore_spec}
  */
  readonly restoreSpec?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpec;
  /**
  * Lists Switchover objects, each specifying a Component to perform the switchover operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#switchover DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#switchover}
  */
  readonly switchover?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchover[] | cdktf.IResolvable;
  /**
  * Specifies the maximum duration (in seconds) that an opsRequest is allowed to run. If the opsRequest runs longer than this duration, its phase will be marked as Aborted. If this value is not set or set to 0, the timeout will be ignored and the opsRequest will run indefinitely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#timeout_seconds DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specifies the duration in seconds that an OpsRequest will remain in the system after successfully completing (when 'opsRequest.status.phase' is 'Succeed') before automatic deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#ttl_seconds_after_succeed DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#ttl_seconds_after_succeed}
  */
  readonly ttlSecondsAfterSucceed?: number;
  /**
  * Specifies the duration in seconds that an OpsRequest will remain in the system after completion for any phase other than 'Succeed' (e.g., 'Failed', 'Cancelled', 'Aborted') before automatic deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#ttl_seconds_after_unsuccessful_completion DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#ttl_seconds_after_unsuccessful_completion}
  */
  readonly ttlSecondsAfterUnsuccessfulCompletion?: number;
  /**
  * Specifies the type of this operation. Supported types include 'Start', 'Stop', 'Restart', 'Switchover', 'VerticalScaling', 'HorizontalScaling', 'VolumeExpansion', 'Reconfiguring', 'Upgrade', 'Backup', 'Restore', 'Expose', 'RebuildInstance', 'Custom'. Note: This field is immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#type DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specifies the desired new version of the Cluster. Note: This field is immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#upgrade DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#upgrade}
  */
  readonly upgrade?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade;
  /**
  * Lists VerticalScaling objects, each specifying a component and its desired compute resources for vertical scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#vertical_scaling DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#vertical_scaling}
  */
  readonly verticalScaling?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Lists VolumeExpansion objects, each specifying a component and its corresponding volumeClaimTemplates that requires storage expansion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_ops_request_v1alpha1_manifest#volume_expansion DataK8SAppsKubeblocksIoOpsRequestV1Alpha1Manifest#volume_expansion}
  */
  readonly volumeExpansion?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupToTerraform(struct!.backup),
    backup_spec: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecToTerraform(struct!.backupSpec),
    cancel: cdktf.booleanToTerraform(struct!.cancel),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_ref: cdktf.stringToTerraform(struct!.clusterRef),
    custom: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomToTerraform(struct!.custom),
    enqueue_on_force: cdktf.booleanToTerraform(struct!.enqueueOnForce),
    expose: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeToTerraform, false)(struct!.expose),
    force: cdktf.booleanToTerraform(struct!.force),
    horizontal_scaling: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingToTerraform, false)(struct!.horizontalScaling),
    pre_condition_deadline_seconds: cdktf.numberToTerraform(struct!.preConditionDeadlineSeconds),
    rebuild_from: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromToTerraform, false)(struct!.rebuildFrom),
    reconfigure: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureToTerraform(struct!.reconfigure),
    reconfigures: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresToTerraform, false)(struct!.reconfigures),
    restart: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartToTerraform, false)(struct!.restart),
    restore: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreToTerraform(struct!.restore),
    restore_spec: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecToTerraform(struct!.restoreSpec),
    switchover: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverToTerraform, false)(struct!.switchover),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    ttl_seconds_after_succeed: cdktf.numberToTerraform(struct!.ttlSecondsAfterSucceed),
    ttl_seconds_after_unsuccessful_completion: cdktf.numberToTerraform(struct!.ttlSecondsAfterUnsuccessfulCompletion),
    type: cdktf.stringToTerraform(struct!.type),
    upgrade: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeToTerraform(struct!.upgrade),
    vertical_scaling: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.verticalScaling),
    volume_expansion: cdktf.listMapper(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionToTerraform, false)(struct!.volumeExpansion),
  }
}


export function dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackup",
    },
    backup_spec: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecToHclTerraform(struct!.backupSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpec",
    },
    cancel: {
      value: cdktf.booleanToHclTerraform(struct!.cancel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustom",
    },
    enqueue_on_force: {
      value: cdktf.booleanToHclTerraform(struct!.enqueueOnForce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeToHclTerraform, false)(struct!.expose),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeList",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    horizontal_scaling: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingToHclTerraform, false)(struct!.horizontalScaling),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingList",
    },
    pre_condition_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.preConditionDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rebuild_from: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromToHclTerraform, false)(struct!.rebuildFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromList",
    },
    reconfigure: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureToHclTerraform(struct!.reconfigure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigure",
    },
    reconfigures: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresToHclTerraform, false)(struct!.reconfigures),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresList",
    },
    restart: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartToHclTerraform, false)(struct!.restart),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartList",
    },
    restore: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestore",
    },
    restore_spec: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecToHclTerraform(struct!.restoreSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpec",
    },
    switchover: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverToHclTerraform, false)(struct!.switchover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverList",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_seconds_after_succeed: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterSucceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_seconds_after_unsuccessful_completion: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterUnsuccessfulCompletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade: {
      value: dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeToHclTerraform(struct!.upgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade",
    },
    vertical_scaling: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.verticalScaling),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    volume_expansion: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionToHclTerraform, false)(struct!.volumeExpansion),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._backupSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSpec = this._backupSpec?.internalValue;
    }
    if (this._cancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancel = this._cancel;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._enqueueOnForce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueOnForce = this._enqueueOnForce;
    }
    if (this._expose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose?.internalValue;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._horizontalScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalScaling = this._horizontalScaling?.internalValue;
    }
    if (this._preConditionDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.preConditionDeadlineSeconds = this._preConditionDeadlineSeconds;
    }
    if (this._rebuildFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildFrom = this._rebuildFrom?.internalValue;
    }
    if (this._reconfigure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconfigure = this._reconfigure?.internalValue;
    }
    if (this._reconfigures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconfigures = this._reconfigures?.internalValue;
    }
    if (this._restart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart?.internalValue;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    if (this._restoreSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreSpec = this._restoreSpec?.internalValue;
    }
    if (this._switchover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchover = this._switchover?.internalValue;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._ttlSecondsAfterSucceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterSucceed = this._ttlSecondsAfterSucceed;
    }
    if (this._ttlSecondsAfterUnsuccessfulCompletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterUnsuccessfulCompletion = this._ttlSecondsAfterUnsuccessfulCompletion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._upgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade?.internalValue;
    }
    if (this._verticalScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalScaling = this._verticalScaling;
    }
    if (this._volumeExpansion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeExpansion = this._volumeExpansion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup.internalValue = undefined;
      this._backupSpec.internalValue = undefined;
      this._cancel = undefined;
      this._clusterName = undefined;
      this._clusterRef = undefined;
      this._custom.internalValue = undefined;
      this._enqueueOnForce = undefined;
      this._expose.internalValue = undefined;
      this._force = undefined;
      this._horizontalScaling.internalValue = undefined;
      this._preConditionDeadlineSeconds = undefined;
      this._rebuildFrom.internalValue = undefined;
      this._reconfigure.internalValue = undefined;
      this._reconfigures.internalValue = undefined;
      this._restart.internalValue = undefined;
      this._restore.internalValue = undefined;
      this._restoreSpec.internalValue = undefined;
      this._switchover.internalValue = undefined;
      this._timeoutSeconds = undefined;
      this._ttlSecondsAfterSucceed = undefined;
      this._ttlSecondsAfterUnsuccessfulCompletion = undefined;
      this._type = undefined;
      this._upgrade.internalValue = undefined;
      this._verticalScaling = undefined;
      this._volumeExpansion.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup.internalValue = value.backup;
      this._backupSpec.internalValue = value.backupSpec;
      this._cancel = value.cancel;
      this._clusterName = value.clusterName;
      this._clusterRef = value.clusterRef;
      this._custom.internalValue = value.custom;
      this._enqueueOnForce = value.enqueueOnForce;
      this._expose.internalValue = value.expose;
      this._force = value.force;
      this._horizontalScaling.internalValue = value.horizontalScaling;
      this._preConditionDeadlineSeconds = value.preConditionDeadlineSeconds;
      this._rebuildFrom.internalValue = value.rebuildFrom;
      this._reconfigure.internalValue = value.reconfigure;
      this._reconfigures.internalValue = value.reconfigures;
      this._restart.internalValue = value.restart;
      this._restore.internalValue = value.restore;
      this._restoreSpec.internalValue = value.restoreSpec;
      this._switchover.internalValue = value.switchover;
      this._timeoutSeconds = value.timeoutSeconds;
      this._ttlSecondsAfterSucceed = value.ttlSecondsAfterSucceed;
      this._ttlSecondsAfterUnsuccessfulCompletion = value.ttlSecondsAfterUnsuccessfulCompletion;
      this._type = value.type;
      this._upgrade.internalValue = value.upgrade;
      this._verticalScaling = value.verticalScaling;
      this._volumeExpansion.internalValue = value.volumeExpansion;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // backup_spec - computed: false, optional: true, required: false
  private _backupSpec = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpecOutputReference(this, "backup_spec");
  public get backupSpec() {
    return this._backupSpec;
  }
  public putBackupSpec(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecBackupSpec) {
    this._backupSpec.internalValue = value;
  }
  public resetBackupSpec() {
    this._backupSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSpecInput() {
    return this._backupSpec.internalValue;
  }

  // cancel - computed: false, optional: true, required: false
  private _cancel?: boolean | cdktf.IResolvable; 
  public get cancel() {
    return this.getBooleanAttribute('cancel');
  }
  public set cancel(value: boolean | cdktf.IResolvable) {
    this._cancel = value;
  }
  public resetCancel() {
    this._cancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelInput() {
    return this._cancel;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_ref - computed: false, optional: true, required: false
  private _clusterRef?: string; 
  public get clusterRef() {
    return this.getStringAttribute('cluster_ref');
  }
  public set clusterRef(value: string) {
    this._clusterRef = value;
  }
  public resetClusterRef() {
    this._clusterRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // enqueue_on_force - computed: false, optional: true, required: false
  private _enqueueOnForce?: boolean | cdktf.IResolvable; 
  public get enqueueOnForce() {
    return this.getBooleanAttribute('enqueue_on_force');
  }
  public set enqueueOnForce(value: boolean | cdktf.IResolvable) {
    this._enqueueOnForce = value;
  }
  public resetEnqueueOnForce() {
    this._enqueueOnForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueOnForceInput() {
    return this._enqueueOnForce;
  }

  // expose - computed: false, optional: true, required: false
  private _expose = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExposeList(this, "expose", false);
  public get expose() {
    return this._expose;
  }
  public putExpose(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecExpose[] | cdktf.IResolvable) {
    this._expose.internalValue = value;
  }
  public resetExpose() {
    this._expose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
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

  // horizontal_scaling - computed: false, optional: true, required: false
  private _horizontalScaling = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScalingList(this, "horizontal_scaling", false);
  public get horizontalScaling() {
    return this._horizontalScaling;
  }
  public putHorizontalScaling(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecHorizontalScaling[] | cdktf.IResolvable) {
    this._horizontalScaling.internalValue = value;
  }
  public resetHorizontalScaling() {
    this._horizontalScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalScalingInput() {
    return this._horizontalScaling.internalValue;
  }

  // pre_condition_deadline_seconds - computed: false, optional: true, required: false
  private _preConditionDeadlineSeconds?: number; 
  public get preConditionDeadlineSeconds() {
    return this.getNumberAttribute('pre_condition_deadline_seconds');
  }
  public set preConditionDeadlineSeconds(value: number) {
    this._preConditionDeadlineSeconds = value;
  }
  public resetPreConditionDeadlineSeconds() {
    this._preConditionDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preConditionDeadlineSecondsInput() {
    return this._preConditionDeadlineSeconds;
  }

  // rebuild_from - computed: false, optional: true, required: false
  private _rebuildFrom = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFromList(this, "rebuild_from", false);
  public get rebuildFrom() {
    return this._rebuildFrom;
  }
  public putRebuildFrom(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRebuildFrom[] | cdktf.IResolvable) {
    this._rebuildFrom.internalValue = value;
  }
  public resetRebuildFrom() {
    this._rebuildFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildFromInput() {
    return this._rebuildFrom.internalValue;
  }

  // reconfigure - computed: false, optional: true, required: false
  private _reconfigure = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigureOutputReference(this, "reconfigure");
  public get reconfigure() {
    return this._reconfigure;
  }
  public putReconfigure(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigure) {
    this._reconfigure.internalValue = value;
  }
  public resetReconfigure() {
    this._reconfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconfigureInput() {
    return this._reconfigure.internalValue;
  }

  // reconfigures - computed: false, optional: true, required: false
  private _reconfigures = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfiguresList(this, "reconfigures", false);
  public get reconfigures() {
    return this._reconfigures;
  }
  public putReconfigures(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecReconfigures[] | cdktf.IResolvable) {
    this._reconfigures.internalValue = value;
  }
  public resetReconfigures() {
    this._reconfigures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconfiguresInput() {
    return this._reconfigures.internalValue;
  }

  // restart - computed: false, optional: true, required: false
  private _restart = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestartList(this, "restart", false);
  public get restart() {
    return this._restart;
  }
  public putRestart(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestart[] | cdktf.IResolvable) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // restore_spec - computed: false, optional: true, required: false
  private _restoreSpec = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpecOutputReference(this, "restore_spec");
  public get restoreSpec() {
    return this._restoreSpec;
  }
  public putRestoreSpec(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecRestoreSpec) {
    this._restoreSpec.internalValue = value;
  }
  public resetRestoreSpec() {
    this._restoreSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSpecInput() {
    return this._restoreSpec.internalValue;
  }

  // switchover - computed: false, optional: true, required: false
  private _switchover = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchoverList(this, "switchover", false);
  public get switchover() {
    return this._switchover;
  }
  public putSwitchover(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecSwitchover[] | cdktf.IResolvable) {
    this._switchover.internalValue = value;
  }
  public resetSwitchover() {
    this._switchover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverInput() {
    return this._switchover.internalValue;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // ttl_seconds_after_succeed - computed: false, optional: true, required: false
  private _ttlSecondsAfterSucceed?: number; 
  public get ttlSecondsAfterSucceed() {
    return this.getNumberAttribute('ttl_seconds_after_succeed');
  }
  public set ttlSecondsAfterSucceed(value: number) {
    this._ttlSecondsAfterSucceed = value;
  }
  public resetTtlSecondsAfterSucceed() {
    this._ttlSecondsAfterSucceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterSucceedInput() {
    return this._ttlSecondsAfterSucceed;
  }

  // ttl_seconds_after_unsuccessful_completion - computed: false, optional: true, required: false
  private _ttlSecondsAfterUnsuccessfulCompletion?: number; 
  public get ttlSecondsAfterUnsuccessfulCompletion() {
    return this.getNumberAttribute('ttl_seconds_after_unsuccessful_completion');
  }
  public set ttlSecondsAfterUnsuccessfulCompletion(value: number) {
    this._ttlSecondsAfterUnsuccessfulCompletion = value;
  }
  public resetTtlSecondsAfterUnsuccessfulCompletion() {
    this._ttlSecondsAfterUnsuccessfulCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterUnsuccessfulCompletionInput() {
    return this._ttlSecondsAfterUnsuccessfulCompletion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upgrade - computed: false, optional: true, required: false
  private _upgrade = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecUpgrade) {
    this._upgrade.internalValue = value;
  }
  public resetUpgrade() {
    this._upgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }

  // vertical_scaling - computed: false, optional: true, required: false
  private _verticalScaling?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get verticalScaling() {
    return this.interpolationForAttribute('vertical_scaling');
  }
  public set verticalScaling(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._verticalScaling = value;
  }
  public resetVerticalScaling() {
    this._verticalScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalScalingInput() {
    return this._verticalScaling;
  }

  // volume_expansion - computed: false, optional: true, required: false
  private _volumeExpansion = new DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansionList(this, "volume_expansion", false);
  public get volumeExpansion() {
    return this._volumeExpansion;
  }
  public putVolumeExpansion(value: DataK8SAppsKubeblocksIoOpsRequestV1Alpha1ManifestSpecVolumeExpansion[] | cdktf.IResolvable) {
    this._volumeExpansion.internalValue = value;
  }
  public resetVolumeExpansion() {
    this._volumeExpansion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeExpansionInput() {
    return this._volumeExpansion.internalValue;
  }
}
