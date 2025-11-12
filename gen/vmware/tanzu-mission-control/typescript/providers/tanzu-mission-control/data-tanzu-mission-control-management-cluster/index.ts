// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlManagementClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#id DataTanzuMissionControlManagementCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#name DataTanzuMissionControlManagementCluster#name}
  */
  readonly name: string;
  /**
  * ID of Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#org_id DataTanzuMissionControlManagementCluster#org_id}
  */
  readonly orgId?: string;
  /**
  * Wait timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#ready_wait_timeout DataTanzuMissionControlManagementCluster#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#meta DataTanzuMissionControlManagementCluster#meta}
  */
  readonly meta?: DataTanzuMissionControlManagementClusterMeta;
  /**
  * register_management_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#register_management_cluster DataTanzuMissionControlManagementCluster#register_management_cluster}
  */
  readonly registerManagementCluster?: DataTanzuMissionControlManagementClusterRegisterManagementCluster;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#spec DataTanzuMissionControlManagementCluster#spec}
  */
  readonly spec?: DataTanzuMissionControlManagementClusterSpec;
}
export interface DataTanzuMissionControlManagementClusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#annotations DataTanzuMissionControlManagementCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#description DataTanzuMissionControlManagementCluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#labels DataTanzuMissionControlManagementCluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlManagementClusterMetaToTerraform(struct?: DataTanzuMissionControlManagementClusterMetaOutputReference | DataTanzuMissionControlManagementClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlManagementClusterMetaToHclTerraform(struct?: DataTanzuMissionControlManagementClusterMetaOutputReference | DataTanzuMissionControlManagementClusterMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataTanzuMissionControlManagementClusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlManagementClusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlManagementClusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlManagementClusterRegisterManagementCluster {
  /**
  * Register management cluster description for only TKGm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#tkgm_description DataTanzuMissionControlManagementCluster#tkgm_description}
  */
  readonly tkgmDescription?: string;
  /**
  * Register management cluster KUBECONFIG path for only TKGm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#tkgm_kubeconfig_file DataTanzuMissionControlManagementCluster#tkgm_kubeconfig_file}
  */
  readonly tkgmKubeconfigFile?: string;
  /**
  * Register management cluster KUBECONFIG for only TKGm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#tkgm_kubeconfig_raw DataTanzuMissionControlManagementCluster#tkgm_kubeconfig_raw}
  */
  readonly tkgmKubeconfigRaw?: string;
}

export function dataTanzuMissionControlManagementClusterRegisterManagementClusterToTerraform(struct?: DataTanzuMissionControlManagementClusterRegisterManagementClusterOutputReference | DataTanzuMissionControlManagementClusterRegisterManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tkgm_description: cdktf.stringToTerraform(struct!.tkgmDescription),
    tkgm_kubeconfig_file: cdktf.stringToTerraform(struct!.tkgmKubeconfigFile),
    tkgm_kubeconfig_raw: cdktf.stringToTerraform(struct!.tkgmKubeconfigRaw),
  }
}


export function dataTanzuMissionControlManagementClusterRegisterManagementClusterToHclTerraform(struct?: DataTanzuMissionControlManagementClusterRegisterManagementClusterOutputReference | DataTanzuMissionControlManagementClusterRegisterManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tkgm_description: {
      value: cdktf.stringToHclTerraform(struct!.tkgmDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkgm_kubeconfig_file: {
      value: cdktf.stringToHclTerraform(struct!.tkgmKubeconfigFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkgm_kubeconfig_raw: {
      value: cdktf.stringToHclTerraform(struct!.tkgmKubeconfigRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlManagementClusterRegisterManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlManagementClusterRegisterManagementCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tkgmDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgmDescription = this._tkgmDescription;
    }
    if (this._tkgmKubeconfigFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgmKubeconfigFile = this._tkgmKubeconfigFile;
    }
    if (this._tkgmKubeconfigRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgmKubeconfigRaw = this._tkgmKubeconfigRaw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlManagementClusterRegisterManagementCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tkgmDescription = undefined;
      this._tkgmKubeconfigFile = undefined;
      this._tkgmKubeconfigRaw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tkgmDescription = value.tkgmDescription;
      this._tkgmKubeconfigFile = value.tkgmKubeconfigFile;
      this._tkgmKubeconfigRaw = value.tkgmKubeconfigRaw;
    }
  }

  // tkgm_description - computed: false, optional: true, required: false
  private _tkgmDescription?: string; 
  public get tkgmDescription() {
    return this.getStringAttribute('tkgm_description');
  }
  public set tkgmDescription(value: string) {
    this._tkgmDescription = value;
  }
  public resetTkgmDescription() {
    this._tkgmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgmDescriptionInput() {
    return this._tkgmDescription;
  }

  // tkgm_kubeconfig_file - computed: false, optional: true, required: false
  private _tkgmKubeconfigFile?: string; 
  public get tkgmKubeconfigFile() {
    return this.getStringAttribute('tkgm_kubeconfig_file');
  }
  public set tkgmKubeconfigFile(value: string) {
    this._tkgmKubeconfigFile = value;
  }
  public resetTkgmKubeconfigFile() {
    this._tkgmKubeconfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgmKubeconfigFileInput() {
    return this._tkgmKubeconfigFile;
  }

  // tkgm_kubeconfig_raw - computed: false, optional: true, required: false
  private _tkgmKubeconfigRaw?: string; 
  public get tkgmKubeconfigRaw() {
    return this.getStringAttribute('tkgm_kubeconfig_raw');
  }
  public set tkgmKubeconfigRaw(value: string) {
    this._tkgmKubeconfigRaw = value;
  }
  public resetTkgmKubeconfigRaw() {
    this._tkgmKubeconfigRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgmKubeconfigRawInput() {
    return this._tkgmKubeconfigRaw;
  }
}
export interface DataTanzuMissionControlManagementClusterSpec {
  /**
  * Cluster group name to be used by default for workload clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#cluster_group DataTanzuMissionControlManagementCluster#cluster_group}
  */
  readonly clusterGroup: string;
  /**
  * Image registry which is only allowed for TKGm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#image_registry DataTanzuMissionControlManagementCluster#image_registry}
  */
  readonly imageRegistry?: string;
  /**
  * Kubernetes provider type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#kubernetes_provider_type DataTanzuMissionControlManagementCluster#kubernetes_provider_type}
  */
  readonly kubernetesProviderType: string;
  /**
  * Managed workload cluster image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#managed_workload_cluster_image_registry DataTanzuMissionControlManagementCluster#managed_workload_cluster_image_registry}
  */
  readonly managedWorkloadClusterImageRegistry?: string;
  /**
  * Managed workload cluster proxy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#managed_workload_cluster_proxy_name DataTanzuMissionControlManagementCluster#managed_workload_cluster_proxy_name}
  */
  readonly managedWorkloadClusterProxyName?: string;
  /**
  * Management cluster proxy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#management_proxy_name DataTanzuMissionControlManagementCluster#management_proxy_name}
  */
  readonly managementProxyName?: string;
}

export function dataTanzuMissionControlManagementClusterSpecToTerraform(struct?: DataTanzuMissionControlManagementClusterSpecOutputReference | DataTanzuMissionControlManagementClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
    image_registry: cdktf.stringToTerraform(struct!.imageRegistry),
    kubernetes_provider_type: cdktf.stringToTerraform(struct!.kubernetesProviderType),
    managed_workload_cluster_image_registry: cdktf.stringToTerraform(struct!.managedWorkloadClusterImageRegistry),
    managed_workload_cluster_proxy_name: cdktf.stringToTerraform(struct!.managedWorkloadClusterProxyName),
    management_proxy_name: cdktf.stringToTerraform(struct!.managementProxyName),
  }
}


export function dataTanzuMissionControlManagementClusterSpecToHclTerraform(struct?: DataTanzuMissionControlManagementClusterSpecOutputReference | DataTanzuMissionControlManagementClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_registry: {
      value: cdktf.stringToHclTerraform(struct!.imageRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_provider_type: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_workload_cluster_image_registry: {
      value: cdktf.stringToHclTerraform(struct!.managedWorkloadClusterImageRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_workload_cluster_proxy_name: {
      value: cdktf.stringToHclTerraform(struct!.managedWorkloadClusterProxyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_proxy_name: {
      value: cdktf.stringToHclTerraform(struct!.managementProxyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlManagementClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlManagementClusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    if (this._imageRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistry = this._imageRegistry;
    }
    if (this._kubernetesProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesProviderType = this._kubernetesProviderType;
    }
    if (this._managedWorkloadClusterImageRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWorkloadClusterImageRegistry = this._managedWorkloadClusterImageRegistry;
    }
    if (this._managedWorkloadClusterProxyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWorkloadClusterProxyName = this._managedWorkloadClusterProxyName;
    }
    if (this._managementProxyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementProxyName = this._managementProxyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlManagementClusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroup = undefined;
      this._imageRegistry = undefined;
      this._kubernetesProviderType = undefined;
      this._managedWorkloadClusterImageRegistry = undefined;
      this._managedWorkloadClusterProxyName = undefined;
      this._managementProxyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroup = value.clusterGroup;
      this._imageRegistry = value.imageRegistry;
      this._kubernetesProviderType = value.kubernetesProviderType;
      this._managedWorkloadClusterImageRegistry = value.managedWorkloadClusterImageRegistry;
      this._managedWorkloadClusterProxyName = value.managedWorkloadClusterProxyName;
      this._managementProxyName = value.managementProxyName;
    }
  }

  // cluster_group - computed: false, optional: false, required: true
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry?: string; 
  public get imageRegistry() {
    return this.getStringAttribute('image_registry');
  }
  public set imageRegistry(value: string) {
    this._imageRegistry = value;
  }
  public resetImageRegistry() {
    this._imageRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry;
  }

  // kubernetes_provider_type - computed: false, optional: false, required: true
  private _kubernetesProviderType?: string; 
  public get kubernetesProviderType() {
    return this.getStringAttribute('kubernetes_provider_type');
  }
  public set kubernetesProviderType(value: string) {
    this._kubernetesProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesProviderTypeInput() {
    return this._kubernetesProviderType;
  }

  // managed_workload_cluster_image_registry - computed: false, optional: true, required: false
  private _managedWorkloadClusterImageRegistry?: string; 
  public get managedWorkloadClusterImageRegistry() {
    return this.getStringAttribute('managed_workload_cluster_image_registry');
  }
  public set managedWorkloadClusterImageRegistry(value: string) {
    this._managedWorkloadClusterImageRegistry = value;
  }
  public resetManagedWorkloadClusterImageRegistry() {
    this._managedWorkloadClusterImageRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWorkloadClusterImageRegistryInput() {
    return this._managedWorkloadClusterImageRegistry;
  }

  // managed_workload_cluster_proxy_name - computed: false, optional: true, required: false
  private _managedWorkloadClusterProxyName?: string; 
  public get managedWorkloadClusterProxyName() {
    return this.getStringAttribute('managed_workload_cluster_proxy_name');
  }
  public set managedWorkloadClusterProxyName(value: string) {
    this._managedWorkloadClusterProxyName = value;
  }
  public resetManagedWorkloadClusterProxyName() {
    this._managedWorkloadClusterProxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWorkloadClusterProxyNameInput() {
    return this._managedWorkloadClusterProxyName;
  }

  // management_proxy_name - computed: false, optional: true, required: false
  private _managementProxyName?: string; 
  public get managementProxyName() {
    return this.getStringAttribute('management_proxy_name');
  }
  public set managementProxyName(value: string) {
    this._managementProxyName = value;
  }
  public resetManagementProxyName() {
    this._managementProxyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProxyNameInput() {
    return this._managementProxyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster tanzu-mission-control_management_cluster}
*/
export class DataTanzuMissionControlManagementCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_management_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlManagementCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlManagementCluster to import
  * @param importFromId The id of the existing DataTanzuMissionControlManagementCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlManagementCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_management_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/management_cluster tanzu-mission-control_management_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlManagementClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlManagementClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_management_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._meta.internalValue = config.meta;
    this._registerManagementCluster.internalValue = config.registerManagementCluster;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlManagementClusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlManagementClusterMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // register_management_cluster - computed: false, optional: true, required: false
  private _registerManagementCluster = new DataTanzuMissionControlManagementClusterRegisterManagementClusterOutputReference(this, "register_management_cluster");
  public get registerManagementCluster() {
    return this._registerManagementCluster;
  }
  public putRegisterManagementCluster(value: DataTanzuMissionControlManagementClusterRegisterManagementCluster) {
    this._registerManagementCluster.internalValue = value;
  }
  public resetRegisterManagementCluster() {
    this._registerManagementCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerManagementClusterInput() {
    return this._registerManagementCluster.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlManagementClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlManagementClusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      meta: dataTanzuMissionControlManagementClusterMetaToTerraform(this._meta.internalValue),
      register_management_cluster: dataTanzuMissionControlManagementClusterRegisterManagementClusterToTerraform(this._registerManagementCluster.internalValue),
      spec: dataTanzuMissionControlManagementClusterSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: dataTanzuMissionControlManagementClusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlManagementClusterMetaList",
      },
      register_management_cluster: {
        value: dataTanzuMissionControlManagementClusterRegisterManagementClusterToHclTerraform(this._registerManagementCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlManagementClusterRegisterManagementClusterList",
      },
      spec: {
        value: dataTanzuMissionControlManagementClusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlManagementClusterSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
