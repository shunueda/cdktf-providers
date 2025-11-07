// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureK8SClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add a critical taint to the system agent pool. This prevents the scheduler from scheduling non-critical pods on the system agent pool. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#add_critical_taint_to_system_agent_pool AzureK8SCluster#add_critical_taint_to_system_agent_pool}
  */
  readonly addCriticalTaintToSystemAgentPool?: boolean | cdktf.IResolvable;
  /**
  * Disable the Run Command feature for the AKS cluster. This prevents the use of the Azure CLI to run commands directly on the nodes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#disable_run_command AzureK8SCluster#disable_run_command}
  */
  readonly disableRunCommand?: boolean | cdktf.IResolvable;
  /**
  * Enable the Azure Blob CSI driver for the AKS cluster. This allows Kubernetes workloads to use Azure Blob Storage as persistent storage. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#enable_blob_csi_driver AzureK8SCluster#enable_blob_csi_driver}
  */
  readonly enableBlobCsiDriver?: boolean | cdktf.IResolvable;
  /**
  * Enable the image cleaner for the AKS cluster. This helps to clean up unused container images in the cluster. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#enable_image_cleaner AzureK8SCluster#enable_image_cleaner}
  */
  readonly enableImageCleaner?: boolean | cdktf.IResolvable;
  /**
  * Enable Workload Identity for the AKS cluster. This allows Kubernetes workloads to access Azure resources using Azure AD identities. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#enable_workload_identity AzureK8SCluster#enable_workload_identity}
  */
  readonly enableWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#id AzureK8SCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval in days for the image cleaner to run. This determines how often the image cleaner will check for unused images. Valid values are between 1 and 90. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#image_cleaner_interval_in_days AzureK8SCluster#image_cleaner_interval_in_days}
  */
  readonly imageCleanerIntervalInDays?: number;
  /**
  * The name of the infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#infra_name AzureK8SCluster#infra_name}
  */
  readonly infraName: string;
  /**
  * Version of Kubernetes specified when creating the AKS managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#kubernetes_version AzureK8SCluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * The username for the Linux administrator of the AKS cluster. This user will have administrative access to the nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#linux_admin_username AzureK8SCluster#linux_admin_username}
  */
  readonly linuxAdminUsername?: string;
  /**
  * The SSH public key for the Linux administrator of the AKS cluster. This key will be used to access the nodes in the cluster via SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#linux_ssh_public_key AzureK8SCluster#linux_ssh_public_key}
  */
  readonly linuxSshPublicKey?: string;
  /**
  * The name of the aks. If not specified default name would be infra name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#name AzureK8SCluster#name}
  */
  readonly name?: string;
  /**
  * Network plugin to use for networking. Valid values are: `azure` and `kubenet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#network_plugin AzureK8SCluster#network_plugin}
  */
  readonly networkPlugin?: string;
  /**
  * The outbound (egress) routing method which should be used for this Kubernetes Cluster. Valid values are: `loadBalancer` and `userDefinedRouting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#outbound_type AzureK8SCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Pricing tier for the AKS cluster. Valid values are: `Free`, `Standard`, and `Premium`. This determines the level of support and features available for the AKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#pricing_tier AzureK8SCluster#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Should this Kubernetes Cluster have its API server only exposed on internal IP addresses? This provides a Private IP Address for the Kubernetes API on the Virtual Network where the Kubernetes Cluster is located. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#private_cluster_enabled AzureK8SCluster#private_cluster_enabled}
  */
  readonly privateClusterEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the aks resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#resource_group_name AzureK8SCluster#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * The size of the Virtual Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#vm_size AzureK8SCluster#vm_size}
  */
  readonly vmSize?: string;
  /**
  * active_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#active_directory_config AzureK8SCluster#active_directory_config}
  */
  readonly activeDirectoryConfig?: AzureK8SClusterActiveDirectoryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#timeouts AzureK8SCluster#timeouts}
  */
  readonly timeouts?: AzureK8SClusterTimeouts;
}
export interface AzureK8SClusterActiveDirectoryConfig {
  /**
  * The Azure Active Directory tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#ad_tenant_id AzureK8SCluster#ad_tenant_id}
  */
  readonly adTenantId: string;
  /**
  * List of Azure AD group object IDs that have admin access to the AKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#admin_group_object_ids AzureK8SCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * Enable Azure Active Directory integration. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#enable_ad AzureK8SCluster#enable_ad}
  */
  readonly enableAd?: boolean | cdktf.IResolvable;
  /**
  * Enable Azure RBAC for Kubernetes authorization. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#enable_rbac AzureK8SCluster#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
}

export function azureK8SClusterActiveDirectoryConfigToTerraform(struct?: AzureK8SClusterActiveDirectoryConfigOutputReference | AzureK8SClusterActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_tenant_id: cdktf.stringToTerraform(struct!.adTenantId),
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroupObjectIds),
    enable_ad: cdktf.booleanToTerraform(struct!.enableAd),
    enable_rbac: cdktf.booleanToTerraform(struct!.enableRbac),
  }
}


export function azureK8SClusterActiveDirectoryConfigToHclTerraform(struct?: AzureK8SClusterActiveDirectoryConfigOutputReference | AzureK8SClusterActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.adTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_group_object_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroupObjectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_ad: {
      value: cdktf.booleanToHclTerraform(struct!.enableAd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureK8SClusterActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureK8SClusterActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adTenantId = this._adTenantId;
    }
    if (this._adminGroupObjectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroupObjectIds = this._adminGroupObjectIds;
    }
    if (this._enableAd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAd = this._enableAd;
    }
    if (this._enableRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbac = this._enableRbac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureK8SClusterActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adTenantId = undefined;
      this._adminGroupObjectIds = undefined;
      this._enableAd = undefined;
      this._enableRbac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adTenantId = value.adTenantId;
      this._adminGroupObjectIds = value.adminGroupObjectIds;
      this._enableAd = value.enableAd;
      this._enableRbac = value.enableRbac;
    }
  }

  // ad_tenant_id - computed: false, optional: false, required: true
  private _adTenantId?: string; 
  public get adTenantId() {
    return this.getStringAttribute('ad_tenant_id');
  }
  public set adTenantId(value: string) {
    this._adTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adTenantIdInput() {
    return this._adTenantId;
  }

  // admin_group_object_ids - computed: true, optional: true, required: false
  private _adminGroupObjectIds?: string[]; 
  public get adminGroupObjectIds() {
    return this.getListAttribute('admin_group_object_ids');
  }
  public set adminGroupObjectIds(value: string[]) {
    this._adminGroupObjectIds = value;
  }
  public resetAdminGroupObjectIds() {
    this._adminGroupObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupObjectIdsInput() {
    return this._adminGroupObjectIds;
  }

  // enable_ad - computed: false, optional: true, required: false
  private _enableAd?: boolean | cdktf.IResolvable; 
  public get enableAd() {
    return this.getBooleanAttribute('enable_ad');
  }
  public set enableAd(value: boolean | cdktf.IResolvable) {
    this._enableAd = value;
  }
  public resetEnableAd() {
    this._enableAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdInput() {
    return this._enableAd;
  }

  // enable_rbac - computed: false, optional: true, required: false
  private _enableRbac?: boolean | cdktf.IResolvable; 
  public get enableRbac() {
    return this.getBooleanAttribute('enable_rbac');
  }
  public set enableRbac(value: boolean | cdktf.IResolvable) {
    this._enableRbac = value;
  }
  public resetEnableRbac() {
    this._enableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacInput() {
    return this._enableRbac;
  }
}
export interface AzureK8SClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#create AzureK8SCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#delete AzureK8SCluster#delete}
  */
  readonly delete?: string;
}

export function azureK8SClusterTimeoutsToTerraform(struct?: AzureK8SClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureK8SClusterTimeoutsToHclTerraform(struct?: AzureK8SClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureK8SClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureK8SClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureK8SClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster duplocloud_azure_k8s_cluster}
*/
export class AzureK8SCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_k8s_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureK8SCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureK8SCluster to import
  * @param importFromId The id of the existing AzureK8SCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureK8SCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_k8s_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_k8s_cluster duplocloud_azure_k8s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureK8SClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AzureK8SClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_k8s_cluster',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addCriticalTaintToSystemAgentPool = config.addCriticalTaintToSystemAgentPool;
    this._disableRunCommand = config.disableRunCommand;
    this._enableBlobCsiDriver = config.enableBlobCsiDriver;
    this._enableImageCleaner = config.enableImageCleaner;
    this._enableWorkloadIdentity = config.enableWorkloadIdentity;
    this._id = config.id;
    this._imageCleanerIntervalInDays = config.imageCleanerIntervalInDays;
    this._infraName = config.infraName;
    this._kubernetesVersion = config.kubernetesVersion;
    this._linuxAdminUsername = config.linuxAdminUsername;
    this._linuxSshPublicKey = config.linuxSshPublicKey;
    this._name = config.name;
    this._networkPlugin = config.networkPlugin;
    this._outboundType = config.outboundType;
    this._pricingTier = config.pricingTier;
    this._privateClusterEnabled = config.privateClusterEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._vmSize = config.vmSize;
    this._activeDirectoryConfig.internalValue = config.activeDirectoryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_critical_taint_to_system_agent_pool - computed: false, optional: true, required: false
  private _addCriticalTaintToSystemAgentPool?: boolean | cdktf.IResolvable; 
  public get addCriticalTaintToSystemAgentPool() {
    return this.getBooleanAttribute('add_critical_taint_to_system_agent_pool');
  }
  public set addCriticalTaintToSystemAgentPool(value: boolean | cdktf.IResolvable) {
    this._addCriticalTaintToSystemAgentPool = value;
  }
  public resetAddCriticalTaintToSystemAgentPool() {
    this._addCriticalTaintToSystemAgentPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCriticalTaintToSystemAgentPoolInput() {
    return this._addCriticalTaintToSystemAgentPool;
  }

  // disable_run_command - computed: false, optional: true, required: false
  private _disableRunCommand?: boolean | cdktf.IResolvable; 
  public get disableRunCommand() {
    return this.getBooleanAttribute('disable_run_command');
  }
  public set disableRunCommand(value: boolean | cdktf.IResolvable) {
    this._disableRunCommand = value;
  }
  public resetDisableRunCommand() {
    this._disableRunCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRunCommandInput() {
    return this._disableRunCommand;
  }

  // enable_blob_csi_driver - computed: false, optional: true, required: false
  private _enableBlobCsiDriver?: boolean | cdktf.IResolvable; 
  public get enableBlobCsiDriver() {
    return this.getBooleanAttribute('enable_blob_csi_driver');
  }
  public set enableBlobCsiDriver(value: boolean | cdktf.IResolvable) {
    this._enableBlobCsiDriver = value;
  }
  public resetEnableBlobCsiDriver() {
    this._enableBlobCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlobCsiDriverInput() {
    return this._enableBlobCsiDriver;
  }

  // enable_image_cleaner - computed: false, optional: true, required: false
  private _enableImageCleaner?: boolean | cdktf.IResolvable; 
  public get enableImageCleaner() {
    return this.getBooleanAttribute('enable_image_cleaner');
  }
  public set enableImageCleaner(value: boolean | cdktf.IResolvable) {
    this._enableImageCleaner = value;
  }
  public resetEnableImageCleaner() {
    this._enableImageCleaner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImageCleanerInput() {
    return this._enableImageCleaner;
  }

  // enable_workload_identity - computed: false, optional: true, required: false
  private _enableWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get enableWorkloadIdentity() {
    return this.getBooleanAttribute('enable_workload_identity');
  }
  public set enableWorkloadIdentity(value: boolean | cdktf.IResolvable) {
    this._enableWorkloadIdentity = value;
  }
  public resetEnableWorkloadIdentity() {
    this._enableWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWorkloadIdentityInput() {
    return this._enableWorkloadIdentity;
  }

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

  // image_cleaner_interval_in_days - computed: false, optional: true, required: false
  private _imageCleanerIntervalInDays?: number; 
  public get imageCleanerIntervalInDays() {
    return this.getNumberAttribute('image_cleaner_interval_in_days');
  }
  public set imageCleanerIntervalInDays(value: number) {
    this._imageCleanerIntervalInDays = value;
  }
  public resetImageCleanerIntervalInDays() {
    this._imageCleanerIntervalInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCleanerIntervalInDaysInput() {
    return this._imageCleanerIntervalInDays;
  }

  // infra_name - computed: false, optional: false, required: true
  private _infraName?: string; 
  public get infraName() {
    return this.getStringAttribute('infra_name');
  }
  public set infraName(value: string) {
    this._infraName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraNameInput() {
    return this._infraName;
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // linux_admin_username - computed: true, optional: true, required: false
  private _linuxAdminUsername?: string; 
  public get linuxAdminUsername() {
    return this.getStringAttribute('linux_admin_username');
  }
  public set linuxAdminUsername(value: string) {
    this._linuxAdminUsername = value;
  }
  public resetLinuxAdminUsername() {
    this._linuxAdminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxAdminUsernameInput() {
    return this._linuxAdminUsername;
  }

  // linux_ssh_public_key - computed: true, optional: true, required: false
  private _linuxSshPublicKey?: string; 
  public get linuxSshPublicKey() {
    return this.getStringAttribute('linux_ssh_public_key');
  }
  public set linuxSshPublicKey(value: string) {
    this._linuxSshPublicKey = value;
  }
  public resetLinuxSshPublicKey() {
    this._linuxSshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxSshPublicKeyInput() {
    return this._linuxSshPublicKey;
  }

  // name - computed: true, optional: true, required: false
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

  // network_plugin - computed: true, optional: true, required: false
  private _networkPlugin?: string; 
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }
  public set networkPlugin(value: string) {
    this._networkPlugin = value;
  }
  public resetNetworkPlugin() {
    this._networkPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPluginInput() {
    return this._networkPlugin;
  }

  // outbound_type - computed: true, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // pricing_tier - computed: true, optional: true, required: false
  private _pricingTier?: string; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier;
  }

  // private_cluster_enabled - computed: false, optional: true, required: false
  private _privateClusterEnabled?: boolean | cdktf.IResolvable; 
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled');
  }
  public set privateClusterEnabled(value: boolean | cdktf.IResolvable) {
    this._privateClusterEnabled = value;
  }
  public resetPrivateClusterEnabled() {
    this._privateClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterEnabledInput() {
    return this._privateClusterEnabled;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // vm_size - computed: true, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // active_directory_config - computed: false, optional: true, required: false
  private _activeDirectoryConfig = new AzureK8SClusterActiveDirectoryConfigOutputReference(this, "active_directory_config");
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }
  public putActiveDirectoryConfig(value: AzureK8SClusterActiveDirectoryConfig) {
    this._activeDirectoryConfig.internalValue = value;
  }
  public resetActiveDirectoryConfig() {
    this._activeDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigInput() {
    return this._activeDirectoryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureK8SClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureK8SClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_critical_taint_to_system_agent_pool: cdktf.booleanToTerraform(this._addCriticalTaintToSystemAgentPool),
      disable_run_command: cdktf.booleanToTerraform(this._disableRunCommand),
      enable_blob_csi_driver: cdktf.booleanToTerraform(this._enableBlobCsiDriver),
      enable_image_cleaner: cdktf.booleanToTerraform(this._enableImageCleaner),
      enable_workload_identity: cdktf.booleanToTerraform(this._enableWorkloadIdentity),
      id: cdktf.stringToTerraform(this._id),
      image_cleaner_interval_in_days: cdktf.numberToTerraform(this._imageCleanerIntervalInDays),
      infra_name: cdktf.stringToTerraform(this._infraName),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      linux_admin_username: cdktf.stringToTerraform(this._linuxAdminUsername),
      linux_ssh_public_key: cdktf.stringToTerraform(this._linuxSshPublicKey),
      name: cdktf.stringToTerraform(this._name),
      network_plugin: cdktf.stringToTerraform(this._networkPlugin),
      outbound_type: cdktf.stringToTerraform(this._outboundType),
      pricing_tier: cdktf.stringToTerraform(this._pricingTier),
      private_cluster_enabled: cdktf.booleanToTerraform(this._privateClusterEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      active_directory_config: azureK8SClusterActiveDirectoryConfigToTerraform(this._activeDirectoryConfig.internalValue),
      timeouts: azureK8SClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_critical_taint_to_system_agent_pool: {
        value: cdktf.booleanToHclTerraform(this._addCriticalTaintToSystemAgentPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_run_command: {
        value: cdktf.booleanToHclTerraform(this._disableRunCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_blob_csi_driver: {
        value: cdktf.booleanToHclTerraform(this._enableBlobCsiDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_image_cleaner: {
        value: cdktf.booleanToHclTerraform(this._enableImageCleaner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_workload_identity: {
        value: cdktf.booleanToHclTerraform(this._enableWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_cleaner_interval_in_days: {
        value: cdktf.numberToHclTerraform(this._imageCleanerIntervalInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      infra_name: {
        value: cdktf.stringToHclTerraform(this._infraName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_admin_username: {
        value: cdktf.stringToHclTerraform(this._linuxAdminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._linuxSshPublicKey),
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
      network_plugin: {
        value: cdktf.stringToHclTerraform(this._networkPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_type: {
        value: cdktf.stringToHclTerraform(this._outboundType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_tier: {
        value: cdktf.stringToHclTerraform(this._pricingTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_cluster_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateClusterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_size: {
        value: cdktf.stringToHclTerraform(this._vmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_config: {
        value: azureK8SClusterActiveDirectoryConfigToHclTerraform(this._activeDirectoryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureK8SClusterActiveDirectoryConfigList",
      },
      timeouts: {
        value: azureK8SClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureK8SClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
