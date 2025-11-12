// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Denotes how the machines in the catalog are allocated to a user. Choose between `Static` and `Random`. Allocation type should be `Random` when `session_support = MultiSession`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#allocation_type MachineCatalog#allocation_type}
  */
  readonly allocationType: string;
  /**
  * String that indicates the action on machine accounts to be performed on `terraform destroy` action. Available values are `Delete`, `Disable`, and `None`. Defaults to `None`.
  * 
  * ~> **Please Note** The action is only performed when the `destroy` action is taken, not when setting the value of this parameter. Once this parameter is set, there must be a successful `terraform apply` run before a `destroy` to update this value in the resource state. Without a successful `terraform apply` after this parameter is set, this parameter will have no effect. If setting this field in the same operation that would require replacing the machine catalog or destroying the machine catalog, this parameter will not work. Additionally when importing a machine catalog, a successful `terraform apply` is required to set the intended value in state before it will take effect on a destroy operation. If `terraform apply` after an import requires the resource to be destroyed, the default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#delete_machine_accounts MachineCatalog#delete_machine_accounts}
  */
  readonly deleteMachineAccounts?: string;
  /**
  * Boolean that indicates the machines within the machine catalog should be deleted on `terraform destroy` action. Defaults to `true` for MCS/PVS catalogs. For `Manual` catalogs, this parameter can either be unset or set to `false`. The virtual machines will not be deleted for `Manual` catalogs.
  * 
  * ~> **Please Note** The deletion only happens when the `destroy` action is performed, not when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `terraform apply` run before a `destroy` to update this value in the resource state. Without a successful `terraform apply` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the machine catalog or destroying the machine catalog, this flag will not work. Additionally when importing a machine catalog, a successful `terraform apply` is required to set this value in state before it will take effect on a destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#delete_virtual_machines MachineCatalog#delete_virtual_machines}
  */
  readonly deleteVirtualMachines?: boolean | cdktf.IResolvable;
  /**
  * Description of the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#description MachineCatalog#description}
  */
  readonly description?: string;
  /**
  * Specify if the machines in the machine catalog will be power managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#is_power_managed MachineCatalog#is_power_managed}
  */
  readonly isPowerManaged?: boolean | cdktf.IResolvable;
  /**
  * Specify if this catalog is for Remote PC access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#is_remote_pc MachineCatalog#is_remote_pc}
  */
  readonly isRemotePc?: boolean | cdktf.IResolvable;
  /**
  * Machine accounts to add to the catalog. Only to be used when using `provisioning_type = MANUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_accounts MachineCatalog#machine_accounts}
  */
  readonly machineAccounts?: MachineCatalogMachineAccounts[] | cdktf.IResolvable;
  /**
  * The path to the folder in which the machine catalog is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_catalog_folder_path MachineCatalog#machine_catalog_folder_path}
  */
  readonly machineCatalogFolderPath?: string;
  /**
  * Metadata for the Machine Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#metadata MachineCatalog#metadata}
  */
  readonly metadata?: MachineCatalogMetadata[] | cdktf.IResolvable;
  /**
  * Specifies the minimum functional level for the VDA machines in the catalog. Defaults to `L7_20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#minimum_functional_level MachineCatalog#minimum_functional_level}
  */
  readonly minimumFunctionalLevel?: string;
  /**
  * Name of the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#name MachineCatalog#name}
  */
  readonly name: string;
  /**
  * Specify if user changes are persisted on the machines in the machine catalog. Choose between `Discard` and `OnLocal`. Defaults to OnLocal for manual or non-PVS single session static catalogs, Discard otherwise. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_user_changes MachineCatalog#persist_user_changes}
  */
  readonly persistUserChanges?: string;
  /**
  * Machine catalog provisioning scheme. Required when `provisioning_type = MCS` or `provisioning_type = PVS_STREAMING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#provisioning_scheme MachineCatalog#provisioning_scheme}
  */
  readonly provisioningScheme?: MachineCatalogProvisioningScheme;
  /**
  * Specifies how the machines are provisioned in the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#provisioning_type MachineCatalog#provisioning_type}
  */
  readonly provisioningType: string;
  /**
  * Organizational Units to be included in the Remote PC machine catalog. Only to be used when `is_remote_pc = true`. For adding machines, use `machine_accounts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#remote_pc_ous MachineCatalog#remote_pc_ous}
  */
  readonly remotePcOus?: MachineCatalogRemotePcOus[] | cdktf.IResolvable;
  /**
  * The Id of the remote PC Wake on LAN hypervisor connection. Required only if `is_power_managed = true` and `is_remote_pc = true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#remote_pc_power_management_hypervisor MachineCatalog#remote_pc_power_management_hypervisor}
  */
  readonly remotePcPowerManagementHypervisor?: string;
  /**
  * The IDs of the scopes for the machine catalog to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#scopes MachineCatalog#scopes}
  */
  readonly scopes?: string[];
  /**
  * Session support type. Choose between `SingleSession` and `MultiSession`. Session support should be SingleSession when `is_remote_pc = true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#session_support MachineCatalog#session_support}
  */
  readonly sessionSupport: string;
  /**
  * A set of identifiers of tags to associate with the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#tags MachineCatalog#tags}
  */
  readonly tags?: string[];
  /**
  * Timeout in minutes for the long-running jobs in machine catalog resource's create, update, delete operation(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#timeout MachineCatalog#timeout}
  */
  readonly timeout?: MachineCatalogTimeout;
  /**
  * Type of Vda Upgrade. Choose between LTSR and CR. When omitted, Vda Upgrade is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vda_upgrade_type MachineCatalog#vda_upgrade_type}
  */
  readonly vdaUpgradeType?: string;
  /**
  * Id of the zone the machine catalog is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#zone MachineCatalog#zone}
  */
  readonly zone: string;
}
export interface MachineCatalogMachineAccountsMachines {
  /**
  * **[AWS: Required]** The availability zone in which the machine resides. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#availability_zone MachineCatalog#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * **[vSphere: Optional]** The cluster in which the machine resides. To be used only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cluster MachineCatalog#cluster}
  */
  readonly cluster?: string;
  /**
  * **[HPE Moonshot: Optional, vSphere: Optional]** The folder path in which the cluster resides. If there are multiple folders in the path, they should be separated by `\` in between each of them. To be used only if `is_power_managed = true`
  * 
  * ~> **Please Note** Folder path should only be specified for cluster folders. For VM folders, they can be ignored and the folder path should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cluster_folder_path MachineCatalog#cluster_folder_path}
  */
  readonly clusterFolderPath?: string;
  /**
  * **[vSphere: Required]** The datacenter in which the machine resides. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#datacenter MachineCatalog#datacenter}
  */
  readonly datacenter?: string;
  /**
  * **[SCVMM: Required, vSphere: Optional]** For vSphere, this is the IP address or FQDN of the host in which the machine resides. For SCVMM, this is the name of the host in which the machine resides. Required for SCVMM only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#host MachineCatalog#host}
  */
  readonly host?: string;
  /**
  * For domain-joined machines, the Active Directory (AD) account must be in the format <domain>\<machine>, all in lowercase. For non-domain-joined the computer name, all in lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_account MachineCatalog#machine_account}
  */
  readonly machineAccount: string;
  /**
  * The name of the machine. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_name MachineCatalog#machine_name}
  */
  readonly machineName?: string;
  /**
  * **[GCP: Required]** The project name in which the machine resides. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#project_name MachineCatalog#project_name}
  */
  readonly projectName?: string;
  /**
  * **[Azure, GCP: Required]** The region in which the machine resides. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#region MachineCatalog#region}
  */
  readonly region?: string;
  /**
  * **[Azure: Required]** The resource group in which the machine resides. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#resource_group_name MachineCatalog#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function machineCatalogMachineAccountsMachinesToTerraform(struct?: MachineCatalogMachineAccountsMachines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    cluster_folder_path: cdktf.stringToTerraform(struct!.clusterFolderPath),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    host: cdktf.stringToTerraform(struct!.host),
    machine_account: cdktf.stringToTerraform(struct!.machineAccount),
    machine_name: cdktf.stringToTerraform(struct!.machineName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    region: cdktf.stringToTerraform(struct!.region),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function machineCatalogMachineAccountsMachinesToHclTerraform(struct?: MachineCatalogMachineAccountsMachines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_folder_path: {
      value: cdktf.stringToHclTerraform(struct!.clusterFolderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_account: {
      value: cdktf.stringToHclTerraform(struct!.machineAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_name: {
      value: cdktf.stringToHclTerraform(struct!.machineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogMachineAccountsMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogMachineAccountsMachines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusterFolderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFolderPath = this._clusterFolderPath;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._machineAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineAccount = this._machineAccount;
    }
    if (this._machineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineName = this._machineName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogMachineAccountsMachines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._cluster = undefined;
      this._clusterFolderPath = undefined;
      this._datacenter = undefined;
      this._host = undefined;
      this._machineAccount = undefined;
      this._machineName = undefined;
      this._projectName = undefined;
      this._region = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._cluster = value.cluster;
      this._clusterFolderPath = value.clusterFolderPath;
      this._datacenter = value.datacenter;
      this._host = value.host;
      this._machineAccount = value.machineAccount;
      this._machineName = value.machineName;
      this._projectName = value.projectName;
      this._region = value.region;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cluster_folder_path - computed: false, optional: true, required: false
  private _clusterFolderPath?: string; 
  public get clusterFolderPath() {
    return this.getStringAttribute('cluster_folder_path');
  }
  public set clusterFolderPath(value: string) {
    this._clusterFolderPath = value;
  }
  public resetClusterFolderPath() {
    this._clusterFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFolderPathInput() {
    return this._clusterFolderPath;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // machine_account - computed: false, optional: false, required: true
  private _machineAccount?: string; 
  public get machineAccount() {
    return this.getStringAttribute('machine_account');
  }
  public set machineAccount(value: string) {
    this._machineAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAccountInput() {
    return this._machineAccount;
  }

  // machine_name - computed: false, optional: true, required: false
  private _machineName?: string; 
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }
  public set machineName(value: string) {
    this._machineName = value;
  }
  public resetMachineName() {
    this._machineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNameInput() {
    return this._machineName;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: true, required: false
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
}

export class MachineCatalogMachineAccountsMachinesList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogMachineAccountsMachines[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogMachineAccountsMachinesOutputReference {
    return new MachineCatalogMachineAccountsMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogMachineAccounts {
  /**
  * The Id of the hypervisor in which the machines reside. Required only if `is_power_managed = true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#hypervisor MachineCatalog#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Machines to add to the catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machines MachineCatalog#machines}
  */
  readonly machines: MachineCatalogMachineAccountsMachines[] | cdktf.IResolvable;
}

export function machineCatalogMachineAccountsToTerraform(struct?: MachineCatalogMachineAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hypervisor: cdktf.stringToTerraform(struct!.hypervisor),
    machines: cdktf.listMapper(machineCatalogMachineAccountsMachinesToTerraform, false)(struct!.machines),
  }
}


export function machineCatalogMachineAccountsToHclTerraform(struct?: MachineCatalogMachineAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.hypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machines: {
      value: cdktf.listMapperHcl(machineCatalogMachineAccountsMachinesToHclTerraform, false)(struct!.machines),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogMachineAccountsMachinesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogMachineAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogMachineAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor;
    }
    if (this._machines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machines = this._machines?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogMachineAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hypervisor = undefined;
      this._machines.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hypervisor = value.hypervisor;
      this._machines.internalValue = value.machines;
    }
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // machines - computed: false, optional: false, required: true
  private _machines = new MachineCatalogMachineAccountsMachinesList(this, "machines", false);
  public get machines() {
    return this._machines;
  }
  public putMachines(value: MachineCatalogMachineAccountsMachines[] | cdktf.IResolvable) {
    this._machines.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinesInput() {
    return this._machines.internalValue;
  }
}

export class MachineCatalogMachineAccountsList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogMachineAccounts[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogMachineAccountsOutputReference {
    return new MachineCatalogMachineAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#name MachineCatalog#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#value MachineCatalog#value}
  */
  readonly value: string;
}

export function machineCatalogMetadataToTerraform(struct?: MachineCatalogMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function machineCatalogMetadataToHclTerraform(struct?: MachineCatalogMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MachineCatalogMetadataList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogMetadata[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogMetadataOutputReference {
    return new MachineCatalogMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile {
  /**
  * The launch template ID of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_id MachineCatalog#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The launch template name of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_name MachineCatalog#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The launch template version of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_version MachineCatalog#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * The instance ID of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_id MachineCatalog#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_name MachineCatalog#vm_name}
  */
  readonly vmName?: string;
  /**
  * The region and availability zone of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_region_az MachineCatalog#vm_region_az}
  */
  readonly vmRegionAz?: string;
}

export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileToTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktf.stringToTerraform(struct!.launchTemplateVersion),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_region_az: cdktf.stringToTerraform(struct!.vmRegionAz),
  }
}


export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileToHclTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_version: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_region_az: {
      value: cdktf.stringToHclTerraform(struct!.vmRegionAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmRegionAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRegionAz = this._vmRegionAz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
      this._vmId = undefined;
      this._vmName = undefined;
      this._vmRegionAz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
      this._vmId = value.vmId;
      this._vmName = value.vmName;
      this._vmRegionAz = value.vmRegionAz;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_region_az - computed: false, optional: true, required: false
  private _vmRegionAz?: string; 
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
  public set vmRegionAz(value: string) {
    this._vmRegionAz = value;
  }
  public resetVmRegionAz() {
    this._vmRegionAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRegionAzInput() {
    return this._vmRegionAz;
  }
}
export interface MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage {
  /**
  * ID of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_definition MachineCatalog#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * ID of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_version MachineCatalog#image_version}
  */
  readonly imageVersion: string;
}

export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageToTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_definition: cdktf.stringToTerraform(struct!.imageDefinition),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
  }
}


export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_definition: {
      value: cdktf.stringToHclTerraform(struct!.imageDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageDefinition = undefined;
      this._imageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageDefinition = value.imageDefinition;
      this._imageVersion = value.imageVersion;
    }
  }

  // image_definition - computed: false, optional: false, required: true
  private _imageDefinition?: string; 
  public get imageDefinition() {
    return this.getStringAttribute('image_definition');
  }
  public set imageDefinition(value: string) {
    this._imageDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition;
  }

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }
}
export interface MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig {
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />While providing machine profile, specify either `vm_name + vm_region_az + vm_id` or `launch_template_name + launch_template_version + launch_template_id`, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile;
  /**
  * The note for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * Specifying the prepared master image to be used for machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#prepared_image MachineCatalog#prepared_image}
  */
  readonly preparedImage?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage;
  /**
  * The AWS VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_offering MachineCatalog#service_offering}
  */
  readonly serviceOffering: string;
  /**
  * Tenancy type of the machine. Choose between `Shared`, `Instance` and `Host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#tenancy_type MachineCatalog#tenancy_type}
  */
  readonly tenancyType: string;
}

export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_update_reboot_options: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    machine_profile: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileToTerraform(struct!.machineProfile),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    prepared_image: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageToTerraform(struct!.preparedImage),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
    tenancy_type: cdktf.stringToTerraform(struct!.tenancyType),
  }
}


export function machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions",
    },
    machine_profile: {
      value: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepared_image: {
      value: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageToHclTerraform(struct!.preparedImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_type: {
      value: cdktf.stringToHclTerraform(struct!.tenancyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._preparedImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparedImage = this._preparedImage?.internalValue;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    if (this._tenancyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyType = this._tenancyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._machineProfile.internalValue = undefined;
      this._masterImageNote = undefined;
      this._preparedImage.internalValue = undefined;
      this._serviceOffering = undefined;
      this._tenancyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._machineProfile.internalValue = value.machineProfile;
      this._masterImageNote = value.masterImageNote;
      this._preparedImage.internalValue = value.preparedImage;
      this._serviceOffering = value.serviceOffering;
      this._tenancyType = value.tenancyType;
    }
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // machine_profile - computed: false, optional: false, required: true
  private _machineProfile = new MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // prepared_image - computed: false, optional: true, required: false
  private _preparedImage = new MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImageOutputReference(this, "prepared_image");
  public get preparedImage() {
    return this._preparedImage;
  }
  public putPreparedImage(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigPreparedImage) {
    this._preparedImage.internalValue = value;
  }
  public resetPreparedImage() {
    this._preparedImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparedImageInput() {
    return this._preparedImage.internalValue;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }

  // tenancy_type - computed: false, optional: false, required: true
  private _tenancyType?: string; 
  public get tenancyType() {
    return this.getStringAttribute('tenancy_type');
  }
  public set tenancyType(value: string) {
    this._tenancyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyTypeInput() {
    return this._tenancyType;
  }
}
export interface MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile {
  /**
  * The launch template ID of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_id MachineCatalog#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The launch template name of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_name MachineCatalog#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The launch template version of the machine profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#launch_template_version MachineCatalog#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * The instance ID of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_id MachineCatalog#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_name MachineCatalog#vm_name}
  */
  readonly vmName?: string;
  /**
  * The region and availability zone of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_region_az MachineCatalog#vm_region_az}
  */
  readonly vmRegionAz?: string;
}

export function machineCatalogProvisioningSchemeAwsMachineConfigMachineProfileToTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktf.stringToTerraform(struct!.launchTemplateVersion),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_region_az: cdktf.stringToTerraform(struct!.vmRegionAz),
  }
}


export function machineCatalogProvisioningSchemeAwsMachineConfigMachineProfileToHclTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_version: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_region_az: {
      value: cdktf.stringToHclTerraform(struct!.vmRegionAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmRegionAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRegionAz = this._vmRegionAz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
      this._vmId = undefined;
      this._vmName = undefined;
      this._vmRegionAz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
      this._vmId = value.vmId;
      this._vmName = value.vmName;
      this._vmRegionAz = value.vmRegionAz;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_region_az - computed: false, optional: true, required: false
  private _vmRegionAz?: string; 
  public get vmRegionAz() {
    return this.getStringAttribute('vm_region_az');
  }
  public set vmRegionAz(value: string) {
    this._vmRegionAz = value;
  }
  public resetVmRegionAz() {
    this._vmRegionAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRegionAzInput() {
    return this._vmRegionAz;
  }
}
export interface MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage {
  /**
  * ID of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_definition MachineCatalog#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * ID of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_version MachineCatalog#image_version}
  */
  readonly imageVersion: string;
}

export function machineCatalogProvisioningSchemeAwsMachineConfigPreparedImageToTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_definition: cdktf.stringToTerraform(struct!.imageDefinition),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
  }
}


export function machineCatalogProvisioningSchemeAwsMachineConfigPreparedImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_definition: {
      value: cdktf.stringToHclTerraform(struct!.imageDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageDefinition = undefined;
      this._imageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageDefinition = value.imageDefinition;
      this._imageVersion = value.imageVersion;
    }
  }

  // image_definition - computed: false, optional: false, required: true
  private _imageDefinition?: string; 
  public get imageDefinition() {
    return this.getStringAttribute('image_definition');
  }
  public set imageDefinition(value: string) {
    this._imageDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition;
  }

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }
}
export interface MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes {
  /**
  * The cloud provider supports two types of VMs: regular and spot. Regular VMs are standard VMs with pay-as-you-go prices. Spot is offered at a discounted rate, utilizing unused cloud provider capacity. Set this to `true` to use spot pricing if it's available for the specified VM SKU. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_spot_pricing_if_available MachineCatalog#use_spot_pricing_if_available}
  */
  readonly useSpotPricingIfAvailable?: boolean | cdktf.IResolvable;
  /**
  * The name of the VM SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_size MachineCatalog#vm_size}
  */
  readonly vmSize: string;
}

export function machineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesToTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_spot_pricing_if_available: cdktf.booleanToTerraform(struct!.useSpotPricingIfAvailable),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function machineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesToHclTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_spot_pricing_if_available: {
      value: cdktf.booleanToHclTerraform(struct!.useSpotPricingIfAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSpotPricingIfAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSpotPricingIfAvailable = this._useSpotPricingIfAvailable;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useSpotPricingIfAvailable = undefined;
      this._vmSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useSpotPricingIfAvailable = value.useSpotPricingIfAvailable;
      this._vmSize = value.vmSize;
    }
  }

  // use_spot_pricing_if_available - computed: true, optional: true, required: false
  private _useSpotPricingIfAvailable?: boolean | cdktf.IResolvable; 
  public get useSpotPricingIfAvailable() {
    return this.getBooleanAttribute('use_spot_pricing_if_available');
  }
  public set useSpotPricingIfAvailable(value: boolean | cdktf.IResolvable) {
    this._useSpotPricingIfAvailable = value;
  }
  public resetUseSpotPricingIfAvailable() {
    this._useSpotPricingIfAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotPricingIfAvailableInput() {
    return this._useSpotPricingIfAvailable;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesOutputReference {
    return new MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeAwsMachineConfig {
  /**
  * AMI of the AWS image to be used as the template image for the machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_ami MachineCatalog#image_ami}
  */
  readonly imageAmi?: string;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />While providing machine profile, specify either `vm_name + vm_region_az + vm_id` or `launch_template_name + launch_template_version + launch_template_id`, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile?: MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile;
  /**
  * The name of the virtual machine image that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image MachineCatalog#master_image}
  */
  readonly masterImage?: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * Specifying the prepared master image to be used for machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#prepared_image MachineCatalog#prepared_image}
  */
  readonly preparedImage?: MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage;
  /**
  * Secondary VM sizes to be used when the primary machine size (service_offering) reaches full capacity. A maximum of 10 VM sizes can be specified. The priority of the VM sizes is determined by the order in which they are specified with the first VM size having the highest priority.
  * 
  * ~> **Please Note** The `secondary_vm_sizes` cannot contain the value of `service_offering`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#secondary_vm_sizes MachineCatalog#secondary_vm_sizes}
  */
  readonly secondaryVmSizes?: MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes[] | cdktf.IResolvable;
  /**
  * Security groups to associate with the machine. If omitted, the VPC's default security group is used.<br />Do not specify this value if a machine_profile is provided, as the security groups will be derived from the machine profile instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#security_groups MachineCatalog#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The AWS VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_offering MachineCatalog#service_offering}
  */
  readonly serviceOffering: string;
  /**
  * Tenancy type of the machine. Choose between `Shared`, `Instance` and `Host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#tenancy_type MachineCatalog#tenancy_type}
  */
  readonly tenancyType: string;
}

export function machineCatalogProvisioningSchemeAwsMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ami: cdktf.stringToTerraform(struct!.imageAmi),
    image_update_reboot_options: machineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    machine_profile: machineCatalogProvisioningSchemeAwsMachineConfigMachineProfileToTerraform(struct!.machineProfile),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    prepared_image: machineCatalogProvisioningSchemeAwsMachineConfigPreparedImageToTerraform(struct!.preparedImage),
    secondary_vm_sizes: cdktf.listMapper(machineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesToTerraform, false)(struct!.secondaryVmSizes),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
    tenancy_type: cdktf.stringToTerraform(struct!.tenancyType),
  }
}


export function machineCatalogProvisioningSchemeAwsMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeAwsMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ami: {
      value: cdktf.stringToHclTerraform(struct!.imageAmi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions",
    },
    machine_profile: {
      value: machineCatalogProvisioningSchemeAwsMachineConfigMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepared_image: {
      value: machineCatalogProvisioningSchemeAwsMachineConfigPreparedImageToHclTerraform(struct!.preparedImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage",
    },
    secondary_vm_sizes: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesToHclTerraform, false)(struct!.secondaryVmSizes),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_type: {
      value: cdktf.stringToHclTerraform(struct!.tenancyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAwsMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAwsMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageAmi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageAmi = this._imageAmi;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._preparedImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparedImage = this._preparedImage?.internalValue;
    }
    if (this._secondaryVmSizes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVmSizes = this._secondaryVmSizes?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    if (this._tenancyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyType = this._tenancyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAwsMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageAmi = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._machineProfile.internalValue = undefined;
      this._masterImage = undefined;
      this._masterImageNote = undefined;
      this._preparedImage.internalValue = undefined;
      this._secondaryVmSizes.internalValue = undefined;
      this._securityGroups = undefined;
      this._serviceOffering = undefined;
      this._tenancyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageAmi = value.imageAmi;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._machineProfile.internalValue = value.machineProfile;
      this._masterImage = value.masterImage;
      this._masterImageNote = value.masterImageNote;
      this._preparedImage.internalValue = value.preparedImage;
      this._secondaryVmSizes.internalValue = value.secondaryVmSizes;
      this._securityGroups = value.securityGroups;
      this._serviceOffering = value.serviceOffering;
      this._tenancyType = value.tenancyType;
    }
  }

  // image_ami - computed: false, optional: true, required: false
  private _imageAmi?: string; 
  public get imageAmi() {
    return this.getStringAttribute('image_ami');
  }
  public set imageAmi(value: string) {
    this._imageAmi = value;
  }
  public resetImageAmi() {
    this._imageAmi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAmiInput() {
    return this._imageAmi;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeAwsMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile = new MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: MachineCatalogProvisioningSchemeAwsMachineConfigMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  public resetMachineProfile() {
    this._machineProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // master_image - computed: false, optional: true, required: false
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  public resetMasterImage() {
    this._masterImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // prepared_image - computed: false, optional: true, required: false
  private _preparedImage = new MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImageOutputReference(this, "prepared_image");
  public get preparedImage() {
    return this._preparedImage;
  }
  public putPreparedImage(value: MachineCatalogProvisioningSchemeAwsMachineConfigPreparedImage) {
    this._preparedImage.internalValue = value;
  }
  public resetPreparedImage() {
    this._preparedImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparedImageInput() {
    return this._preparedImage.internalValue;
  }

  // secondary_vm_sizes - computed: false, optional: true, required: false
  private _secondaryVmSizes = new MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizesList(this, "secondary_vm_sizes", false);
  public get secondaryVmSizes() {
    return this._secondaryVmSizes;
  }
  public putSecondaryVmSizes(value: MachineCatalogProvisioningSchemeAwsMachineConfigSecondaryVmSizes[] | cdktf.IResolvable) {
    this._secondaryVmSizes.internalValue = value;
  }
  public resetSecondaryVmSizes() {
    this._secondaryVmSizes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVmSizesInput() {
    return this._secondaryVmSizes.internalValue;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }

  // tenancy_type - computed: false, optional: false, required: true
  private _tenancyType?: string; 
  public get tenancyType() {
    return this.getStringAttribute('tenancy_type');
  }
  public set tenancyType(value: string) {
    this._tenancyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyTypeInput() {
    return this._tenancyType;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage {
  /**
  * The image definition for the image to be used in the Azure Image Gallery. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#definition MachineCatalog#definition}
  */
  readonly definition: string;
  /**
  * The Azure Image Gallery where the image for creating machines is located. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#gallery MachineCatalog#gallery}
  */
  readonly gallery: string;
  /**
  * The image version for the image to be used in the Azure Image Gallery. Only applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#version MachineCatalog#version}
  */
  readonly version: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    gallery: cdktf.stringToTerraform(struct!.gallery),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gallery: {
      value: cdktf.stringToHclTerraform(struct!.gallery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._gallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gallery = this._gallery;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._gallery = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._gallery = value.gallery;
      this._version = value.version;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // gallery - computed: false, optional: false, required: true
  private _gallery?: string; 
  public get gallery() {
    return this.getStringAttribute('gallery');
  }
  public set gallery(value: string) {
    this._gallery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryInput() {
    return this._gallery;
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
export interface MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage {
  /**
  * The Azure Storage Account Container where the image VHD for creating machines is located. Only applicable to Azure VHD image blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#container MachineCatalog#container}
  */
  readonly container?: string;
  /**
  * Details of the Azure Image Gallery image to use for creating machines. Only Applicable to Azure Image Gallery image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#gallery_image MachineCatalog#gallery_image}
  */
  readonly galleryImage?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage;
  /**
  * The name of the virtual machine snapshot or VM template that will be used. This identifies the hard disk to be used and the default values for the memory and processors. Omit this field if you want to use gallery_image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image MachineCatalog#master_image}
  */
  readonly masterImage?: string;
  /**
  * The Azure Resource Group where the image VHD / managed disk / snapshot for creating machines is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#resource_group MachineCatalog#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The Azure Subscription ID where the image VHD / managed disk / snapshot for creating machines is located. Only required if the image is not in the same subscription of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#shared_subscription MachineCatalog#shared_subscription}
  */
  readonly sharedSubscription?: string;
  /**
  * The Azure Storage Account where the image VHD for creating machines is located. Only applicable to Azure VHD image blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#storage_account MachineCatalog#storage_account}
  */
  readonly storageAccount?: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    gallery_image: machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageToTerraform(struct!.galleryImage),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    shared_subscription: cdktf.stringToTerraform(struct!.sharedSubscription),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gallery_image: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageToHclTerraform(struct!.galleryImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_subscription: {
      value: cdktf.stringToHclTerraform(struct!.sharedSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._galleryImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryImage = this._galleryImage?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sharedSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSubscription = this._sharedSubscription;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._galleryImage.internalValue = undefined;
      this._masterImage = undefined;
      this._resourceGroup = undefined;
      this._sharedSubscription = undefined;
      this._storageAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._galleryImage.internalValue = value.galleryImage;
      this._masterImage = value.masterImage;
      this._resourceGroup = value.resourceGroup;
      this._sharedSubscription = value.sharedSubscription;
      this._storageAccount = value.storageAccount;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // gallery_image - computed: false, optional: true, required: false
  private _galleryImage = new MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImageOutputReference(this, "gallery_image");
  public get galleryImage() {
    return this._galleryImage;
  }
  public putGalleryImage(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageGalleryImage) {
    this._galleryImage.internalValue = value;
  }
  public resetGalleryImage() {
    this._galleryImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageInput() {
    return this._galleryImage.internalValue;
  }

  // master_image - computed: false, optional: true, required: false
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  public resetMasterImage() {
    this._masterImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // shared_subscription - computed: false, optional: true, required: false
  private _sharedSubscription?: string; 
  public get sharedSubscription() {
    return this.getStringAttribute('shared_subscription');
  }
  public set sharedSubscription(value: string) {
    this._sharedSubscription = value;
  }
  public resetSharedSubscription() {
    this._sharedSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSubscriptionInput() {
    return this._sharedSubscription;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig {
  /**
  * The id of the PVS site to use for creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#pvs_site_id MachineCatalog#pvs_site_id}
  */
  readonly pvsSiteId: string;
  /**
  * The id of the PVS vDisk to use for creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#pvs_vdisk_id MachineCatalog#pvs_vdisk_id}
  */
  readonly pvsVdiskId: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pvs_site_id: cdktf.stringToTerraform(struct!.pvsSiteId),
    pvs_vdisk_id: cdktf.stringToTerraform(struct!.pvsVdiskId),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pvs_site_id: {
      value: cdktf.stringToHclTerraform(struct!.pvsSiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvs_vdisk_id: {
      value: cdktf.stringToHclTerraform(struct!.pvsVdiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pvsSiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvsSiteId = this._pvsSiteId;
    }
    if (this._pvsVdiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvsVdiskId = this._pvsVdiskId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pvsSiteId = undefined;
      this._pvsVdiskId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pvsSiteId = value.pvsSiteId;
      this._pvsVdiskId = value.pvsVdiskId;
    }
  }

  // pvs_site_id - computed: false, optional: false, required: true
  private _pvsSiteId?: string; 
  public get pvsSiteId() {
    return this.getStringAttribute('pvs_site_id');
  }
  public set pvsSiteId(value: string) {
    this._pvsSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsSiteIdInput() {
    return this._pvsSiteId;
  }

  // pvs_vdisk_id - computed: false, optional: false, required: true
  private _pvsVdiskId?: string; 
  public get pvsVdiskId() {
    return this.getStringAttribute('pvs_vdisk_id');
  }
  public set pvsVdiskId(value: string) {
    this._pvsVdiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvsVdiskIdInput() {
    return this._pvsVdiskId;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet {
  /**
  * The name of the disk encryption set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#disk_encryption_set_name MachineCatalog#disk_encryption_set_name}
  */
  readonly diskEncryptionSetName: string;
  /**
  * The name of the resource group in which the disk encryption set resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#disk_encryption_set_resource_group MachineCatalog#disk_encryption_set_resource_group}
  */
  readonly diskEncryptionSetResourceGroup: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set_name: cdktf.stringToTerraform(struct!.diskEncryptionSetName),
    disk_encryption_set_resource_group: cdktf.stringToTerraform(struct!.diskEncryptionSetResourceGroup),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set_name: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_set_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetName = this._diskEncryptionSetName;
    }
    if (this._diskEncryptionSetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetResourceGroup = this._diskEncryptionSetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSetName = undefined;
      this._diskEncryptionSetResourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSetName = value.diskEncryptionSetName;
      this._diskEncryptionSetResourceGroup = value.diskEncryptionSetResourceGroup;
    }
  }

  // disk_encryption_set_name - computed: false, optional: false, required: true
  private _diskEncryptionSetName?: string; 
  public get diskEncryptionSetName() {
    return this.getStringAttribute('disk_encryption_set_name');
  }
  public set diskEncryptionSetName(value: string) {
    this._diskEncryptionSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetNameInput() {
    return this._diskEncryptionSetName;
  }

  // disk_encryption_set_resource_group - computed: false, optional: false, required: true
  private _diskEncryptionSetResourceGroup?: string; 
  public get diskEncryptionSetResourceGroup() {
    return this.getStringAttribute('disk_encryption_set_resource_group');
  }
  public set diskEncryptionSetResourceGroup(value: string) {
    this._diskEncryptionSetResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetResourceGroupInput() {
    return this._diskEncryptionSetResourceGroup;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile {
  /**
  * The name of the resource group where the machine profile VM or template spec is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile_resource_group MachineCatalog#machine_profile_resource_group}
  */
  readonly machineProfileResourceGroup: string;
  /**
  * The name of the machine profile template spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile_template_spec_name MachineCatalog#machine_profile_template_spec_name}
  */
  readonly machineProfileTemplateSpecName?: string;
  /**
  * The version of the machine profile template spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile_template_spec_version MachineCatalog#machine_profile_template_spec_version}
  */
  readonly machineProfileTemplateSpecVersion?: string;
  /**
  * The name of the machine profile virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile_vm_name MachineCatalog#machine_profile_vm_name}
  */
  readonly machineProfileVmName?: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigMachineProfileToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_profile_resource_group: cdktf.stringToTerraform(struct!.machineProfileResourceGroup),
    machine_profile_template_spec_name: cdktf.stringToTerraform(struct!.machineProfileTemplateSpecName),
    machine_profile_template_spec_version: cdktf.stringToTerraform(struct!.machineProfileTemplateSpecVersion),
    machine_profile_vm_name: cdktf.stringToTerraform(struct!.machineProfileVmName),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigMachineProfileToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_profile_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_template_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileTemplateSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_template_spec_version: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileTemplateSpecVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile_vm_name: {
      value: cdktf.stringToHclTerraform(struct!.machineProfileVmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineProfileResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileResourceGroup = this._machineProfileResourceGroup;
    }
    if (this._machineProfileTemplateSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileTemplateSpecName = this._machineProfileTemplateSpecName;
    }
    if (this._machineProfileTemplateSpecVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileTemplateSpecVersion = this._machineProfileTemplateSpecVersion;
    }
    if (this._machineProfileVmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfileVmName = this._machineProfileVmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineProfileResourceGroup = undefined;
      this._machineProfileTemplateSpecName = undefined;
      this._machineProfileTemplateSpecVersion = undefined;
      this._machineProfileVmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineProfileResourceGroup = value.machineProfileResourceGroup;
      this._machineProfileTemplateSpecName = value.machineProfileTemplateSpecName;
      this._machineProfileTemplateSpecVersion = value.machineProfileTemplateSpecVersion;
      this._machineProfileVmName = value.machineProfileVmName;
    }
  }

  // machine_profile_resource_group - computed: false, optional: false, required: true
  private _machineProfileResourceGroup?: string; 
  public get machineProfileResourceGroup() {
    return this.getStringAttribute('machine_profile_resource_group');
  }
  public set machineProfileResourceGroup(value: string) {
    this._machineProfileResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileResourceGroupInput() {
    return this._machineProfileResourceGroup;
  }

  // machine_profile_template_spec_name - computed: false, optional: true, required: false
  private _machineProfileTemplateSpecName?: string; 
  public get machineProfileTemplateSpecName() {
    return this.getStringAttribute('machine_profile_template_spec_name');
  }
  public set machineProfileTemplateSpecName(value: string) {
    this._machineProfileTemplateSpecName = value;
  }
  public resetMachineProfileTemplateSpecName() {
    this._machineProfileTemplateSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileTemplateSpecNameInput() {
    return this._machineProfileTemplateSpecName;
  }

  // machine_profile_template_spec_version - computed: false, optional: true, required: false
  private _machineProfileTemplateSpecVersion?: string; 
  public get machineProfileTemplateSpecVersion() {
    return this.getStringAttribute('machine_profile_template_spec_version');
  }
  public set machineProfileTemplateSpecVersion(value: string) {
    this._machineProfileTemplateSpecVersion = value;
  }
  public resetMachineProfileTemplateSpecVersion() {
    this._machineProfileTemplateSpecVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileTemplateSpecVersionInput() {
    return this._machineProfileTemplateSpecVersion;
  }

  // machine_profile_vm_name - computed: false, optional: true, required: false
  private _machineProfileVmName?: string; 
  public get machineProfileVmName() {
    return this.getStringAttribute('machine_profile_vm_name');
  }
  public set machineProfileVmName(value: string) {
    this._machineProfileVmName = value;
  }
  public resetMachineProfileVmName() {
    this._machineProfileVmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileVmNameInput() {
    return this._machineProfileVmName;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage {
  /**
  * ID of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_definition MachineCatalog#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * ID of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_version MachineCatalog#image_version}
  */
  readonly imageVersion: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigPreparedImageToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_definition: cdktf.stringToTerraform(struct!.imageDefinition),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigPreparedImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_definition: {
      value: cdktf.stringToHclTerraform(struct!.imageDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageDefinition = undefined;
      this._imageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageDefinition = value.imageDefinition;
      this._imageVersion = value.imageVersion;
    }
  }

  // image_definition - computed: false, optional: false, required: true
  private _imageDefinition?: string; 
  public get imageDefinition() {
    return this.getStringAttribute('image_definition');
  }
  public set imageDefinition(value: string) {
    this._imageDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition;
  }

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes {
  /**
  * The cloud provider supports two types of VMs: regular and spot. Regular VMs are standard VMs with pay-as-you-go prices. Spot is offered at a discounted rate, utilizing unused cloud provider capacity. Set this to `true` to use spot pricing if it's available for the specified VM SKU. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_spot_pricing_if_available MachineCatalog#use_spot_pricing_if_available}
  */
  readonly useSpotPricingIfAvailable?: boolean | cdktf.IResolvable;
  /**
  * The name of the VM SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vm_size MachineCatalog#vm_size}
  */
  readonly vmSize: string;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_spot_pricing_if_available: cdktf.booleanToTerraform(struct!.useSpotPricingIfAvailable),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_spot_pricing_if_available: {
      value: cdktf.booleanToHclTerraform(struct!.useSpotPricingIfAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSpotPricingIfAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSpotPricingIfAvailable = this._useSpotPricingIfAvailable;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useSpotPricingIfAvailable = undefined;
      this._vmSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useSpotPricingIfAvailable = value.useSpotPricingIfAvailable;
      this._vmSize = value.vmSize;
    }
  }

  // use_spot_pricing_if_available - computed: true, optional: true, required: false
  private _useSpotPricingIfAvailable?: boolean | cdktf.IResolvable; 
  public get useSpotPricingIfAvailable() {
    return this.getBooleanAttribute('use_spot_pricing_if_available');
  }
  public set useSpotPricingIfAvailable(value: boolean | cdktf.IResolvable) {
    this._useSpotPricingIfAvailable = value;
  }
  public resetUseSpotPricingIfAvailable() {
    this._useSpotPricingIfAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotPricingIfAvailableInput() {
    return this._useSpotPricingIfAvailable;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesOutputReference {
    return new MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery {
  /**
  * The maximum number of image replicas that you want Azure to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#replica_maximum MachineCatalog#replica_maximum}
  */
  readonly replicaMaximum: number;
  /**
  * The ratio of virtual machines to image replicas that you want Azure to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#replica_ratio MachineCatalog#replica_ratio}
  */
  readonly replicaRatio: number;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_maximum: cdktf.numberToTerraform(struct!.replicaMaximum),
    replica_ratio: cdktf.numberToTerraform(struct!.replicaRatio),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_maximum: {
      value: cdktf.numberToHclTerraform(struct!.replicaMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_ratio: {
      value: cdktf.numberToHclTerraform(struct!.replicaRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaMaximum = this._replicaMaximum;
    }
    if (this._replicaRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaRatio = this._replicaRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaMaximum = undefined;
      this._replicaRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaMaximum = value.replicaMaximum;
      this._replicaRatio = value.replicaRatio;
    }
  }

  // replica_maximum - computed: false, optional: false, required: true
  private _replicaMaximum?: number; 
  public get replicaMaximum() {
    return this.getNumberAttribute('replica_maximum');
  }
  public set replicaMaximum(value: number) {
    this._replicaMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaMaximumInput() {
    return this._replicaMaximum;
  }

  // replica_ratio - computed: false, optional: false, required: true
  private _replicaRatio?: number; 
  public get replicaRatio() {
    return this.getNumberAttribute('replica_ratio');
  }
  public set replicaRatio(value: number) {
    this._replicaRatio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRatioInput() {
    return this._replicaRatio;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache {
  /**
  * Persist the OS disk when power cycling the non-persistent provisioned virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_os_disk MachineCatalog#persist_os_disk}
  */
  readonly persistOsDisk: boolean | cdktf.IResolvable;
  /**
  * Persist the non-persistent provisioned virtual machine in Azure environments when power cycling. This property only applies when the PersistOsDisk property is set to True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_vm MachineCatalog#persist_vm}
  */
  readonly persistVm: boolean | cdktf.IResolvable;
  /**
  * Persist Write-back Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_wbc MachineCatalog#persist_wbc}
  */
  readonly persistWbc?: boolean | cdktf.IResolvable;
  /**
  * Save storage cost by downgrading the storage type of the disk to Standard HDD when VM shut down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#storage_cost_saving MachineCatalog#storage_cost_saving}
  */
  readonly storageCostSaving?: boolean | cdktf.IResolvable;
  /**
  * Type of the storage for Write-back Cache disk. Choose between `Standard_LRS`, `StandardSSD_LRS`, and `Premium_LRS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#wbc_disk_storage_type MachineCatalog#wbc_disk_storage_type}
  */
  readonly wbcDiskStorageType: string;
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The drive letter for the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_drive_letter MachineCatalog#writeback_cache_drive_letter}
  */
  readonly writebackCacheDriveLetter?: string;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb?: number;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_os_disk: cdktf.booleanToTerraform(struct!.persistOsDisk),
    persist_vm: cdktf.booleanToTerraform(struct!.persistVm),
    persist_wbc: cdktf.booleanToTerraform(struct!.persistWbc),
    storage_cost_saving: cdktf.booleanToTerraform(struct!.storageCostSaving),
    wbc_disk_storage_type: cdktf.stringToTerraform(struct!.wbcDiskStorageType),
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_drive_letter: cdktf.stringToTerraform(struct!.writebackCacheDriveLetter),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_os_disk: {
      value: cdktf.booleanToHclTerraform(struct!.persistOsDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_vm: {
      value: cdktf.booleanToHclTerraform(struct!.persistVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_wbc: {
      value: cdktf.booleanToHclTerraform(struct!.persistWbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_cost_saving: {
      value: cdktf.booleanToHclTerraform(struct!.storageCostSaving),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wbc_disk_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.wbcDiskStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_drive_letter: {
      value: cdktf.stringToHclTerraform(struct!.writebackCacheDriveLetter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistOsDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistOsDisk = this._persistOsDisk;
    }
    if (this._persistVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistVm = this._persistVm;
    }
    if (this._persistWbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistWbc = this._persistWbc;
    }
    if (this._storageCostSaving !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCostSaving = this._storageCostSaving;
    }
    if (this._wbcDiskStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbcDiskStorageType = this._wbcDiskStorageType;
    }
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheDriveLetter !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDriveLetter = this._writebackCacheDriveLetter;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistOsDisk = undefined;
      this._persistVm = undefined;
      this._persistWbc = undefined;
      this._storageCostSaving = undefined;
      this._wbcDiskStorageType = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheDriveLetter = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistOsDisk = value.persistOsDisk;
      this._persistVm = value.persistVm;
      this._persistWbc = value.persistWbc;
      this._storageCostSaving = value.storageCostSaving;
      this._wbcDiskStorageType = value.wbcDiskStorageType;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheDriveLetter = value.writebackCacheDriveLetter;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // persist_os_disk - computed: false, optional: false, required: true
  private _persistOsDisk?: boolean | cdktf.IResolvable; 
  public get persistOsDisk() {
    return this.getBooleanAttribute('persist_os_disk');
  }
  public set persistOsDisk(value: boolean | cdktf.IResolvable) {
    this._persistOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistOsDiskInput() {
    return this._persistOsDisk;
  }

  // persist_vm - computed: false, optional: false, required: true
  private _persistVm?: boolean | cdktf.IResolvable; 
  public get persistVm() {
    return this.getBooleanAttribute('persist_vm');
  }
  public set persistVm(value: boolean | cdktf.IResolvable) {
    this._persistVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistVmInput() {
    return this._persistVm;
  }

  // persist_wbc - computed: false, optional: true, required: false
  private _persistWbc?: boolean | cdktf.IResolvable; 
  public get persistWbc() {
    return this.getBooleanAttribute('persist_wbc');
  }
  public set persistWbc(value: boolean | cdktf.IResolvable) {
    this._persistWbc = value;
  }
  public resetPersistWbc() {
    this._persistWbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistWbcInput() {
    return this._persistWbc;
  }

  // storage_cost_saving - computed: false, optional: true, required: false
  private _storageCostSaving?: boolean | cdktf.IResolvable; 
  public get storageCostSaving() {
    return this.getBooleanAttribute('storage_cost_saving');
  }
  public set storageCostSaving(value: boolean | cdktf.IResolvable) {
    this._storageCostSaving = value;
  }
  public resetStorageCostSaving() {
    this._storageCostSaving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCostSavingInput() {
    return this._storageCostSaving;
  }

  // wbc_disk_storage_type - computed: false, optional: false, required: true
  private _wbcDiskStorageType?: string; 
  public get wbcDiskStorageType() {
    return this.getStringAttribute('wbc_disk_storage_type');
  }
  public set wbcDiskStorageType(value: string) {
    this._wbcDiskStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wbcDiskStorageTypeInput() {
    return this._wbcDiskStorageType;
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_drive_letter - computed: false, optional: true, required: false
  private _writebackCacheDriveLetter?: string; 
  public get writebackCacheDriveLetter() {
    return this.getStringAttribute('writeback_cache_drive_letter');
  }
  public set writebackCacheDriveLetter(value: string) {
    this._writebackCacheDriveLetter = value;
  }
  public resetWritebackCacheDriveLetter() {
    this._writebackCacheDriveLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDriveLetterInput() {
    return this._writebackCacheDriveLetter;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: true, required: false
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  public resetWritebackCacheMemorySizeMb() {
    this._writebackCacheMemorySizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeAzureMachineConfig {
  /**
  * Details of the Azure Image to use for creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#azure_master_image MachineCatalog#azure_master_image}
  */
  readonly azureMasterImage?: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage;
  /**
  * PVS Configuration to create machine catalog using PVSStreaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#azure_pvs_config MachineCatalog#azure_pvs_config}
  */
  readonly azurePvsConfig?: MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig;
  /**
  * The configuration for Disk Encryption Set (DES). The DES must be in the same subscription and region as your resources. If your master image is encrypted with a DES, use the same DES when creating this machine catalog. When using a DES, if you later disable the key with which the corresponding DES is associated in Azure, you can no longer power on the machines in this catalog or add machines to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#disk_encryption_set MachineCatalog#disk_encryption_set}
  */
  readonly diskEncryptionSet?: MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet;
  /**
  * Specify whether to enroll machines in Microsoft Intune. Use this property only when `identity_type` is set to `AzureAD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#enroll_in_intune MachineCatalog#enroll_in_intune}
  */
  readonly enrollInIntune?: boolean | cdktf.IResolvable;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions;
  /**
  * Windows license type used to provision virtual machines in Azure at the base compute rate. License types include: `Windows_Client` and `Windows_Server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#license_type MachineCatalog#license_type}
  */
  readonly licenseType?: string;
  /**
  * The name of the virtual machine or template spec that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone.<br />Required when provisioning_type is set to PVSStreaming or when identity_type is set to `AzureAD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile?: MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * Specifying the prepared master image to be used for machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#prepared_image MachineCatalog#prepared_image}
  */
  readonly preparedImage?: MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage;
  /**
  * Secondary VM sizes to be used when the primary machine size (service_offering) reaches full capacity. A maximum of 10 VM sizes can be specified. The priority of the VM sizes is determined by the order in which they are specified with the first VM size having the highest priority.
  * 
  * ~> **Please Note** This field can only be used when `machine_profile` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#secondary_vm_sizes MachineCatalog#secondary_vm_sizes}
  */
  readonly secondaryVmSizes?: MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes[] | cdktf.IResolvable;
  /**
  * The Azure VM Sku to use when creating machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_offering MachineCatalog#service_offering}
  */
  readonly serviceOffering: string;
  /**
  * Storage account type used for provisioned virtual machine disks on Azure. Storage types include: `Standard_LRS`, `StandardSSD_LRS` and `Premium_LRS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#storage_type MachineCatalog#storage_type}
  */
  readonly storageType: string;
  /**
  * Use this to place prepared image in Azure Compute Gallery. Required when `storage_type = Azure_Ephemeral_OS_Disk`.
  * 
  * ~> **Please Note** `use_azure_compute_gallery` cannot be specified when the prepared image is using a shared image gallery. The machine catalog will inherit the azure compute gallery settings of the prepared image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_azure_compute_gallery MachineCatalog#use_azure_compute_gallery}
  */
  readonly useAzureComputeGallery?: MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery;
  /**
  * Indicate whether to use Azure managed disks for the provisioned virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_managed_disks MachineCatalog#use_managed_disks}
  */
  readonly useManagedDisks?: boolean | cdktf.IResolvable;
  /**
  * Designated resource group where the VDA VMs will be located on Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vda_resource_group MachineCatalog#vda_resource_group}
  */
  readonly vdaResourceGroup?: string;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache. Write-back Cache requires Machine image with Write-back Cache plugin installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeAzureMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_master_image: machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageToTerraform(struct!.azureMasterImage),
    azure_pvs_config: machineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigToTerraform(struct!.azurePvsConfig),
    disk_encryption_set: machineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetToTerraform(struct!.diskEncryptionSet),
    enroll_in_intune: cdktf.booleanToTerraform(struct!.enrollInIntune),
    image_update_reboot_options: machineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    machine_profile: machineCatalogProvisioningSchemeAzureMachineConfigMachineProfileToTerraform(struct!.machineProfile),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    prepared_image: machineCatalogProvisioningSchemeAzureMachineConfigPreparedImageToTerraform(struct!.preparedImage),
    secondary_vm_sizes: cdktf.listMapper(machineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesToTerraform, false)(struct!.secondaryVmSizes),
    service_offering: cdktf.stringToTerraform(struct!.serviceOffering),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    use_azure_compute_gallery: machineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryToTerraform(struct!.useAzureComputeGallery),
    use_managed_disks: cdktf.booleanToTerraform(struct!.useManagedDisks),
    vda_resource_group: cdktf.stringToTerraform(struct!.vdaResourceGroup),
    writeback_cache: machineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeAzureMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeAzureMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_master_image: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageToHclTerraform(struct!.azureMasterImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage",
    },
    azure_pvs_config: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigToHclTerraform(struct!.azurePvsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig",
    },
    disk_encryption_set: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetToHclTerraform(struct!.diskEncryptionSet),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet",
    },
    enroll_in_intune: {
      value: cdktf.booleanToHclTerraform(struct!.enrollInIntune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_profile: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigMachineProfileToHclTerraform(struct!.machineProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepared_image: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigPreparedImageToHclTerraform(struct!.preparedImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage",
    },
    secondary_vm_sizes: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesToHclTerraform, false)(struct!.secondaryVmSizes),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesList",
    },
    service_offering: {
      value: cdktf.stringToHclTerraform(struct!.serviceOffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_azure_compute_gallery: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryToHclTerraform(struct!.useAzureComputeGallery),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery",
    },
    use_managed_disks: {
      value: cdktf.booleanToHclTerraform(struct!.useManagedDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vda_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vdaResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeAzureMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeAzureMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureMasterImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMasterImage = this._azureMasterImage?.internalValue;
    }
    if (this._azurePvsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePvsConfig = this._azurePvsConfig?.internalValue;
    }
    if (this._diskEncryptionSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet?.internalValue;
    }
    if (this._enrollInIntune !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollInIntune = this._enrollInIntune;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._machineProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile?.internalValue;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._preparedImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparedImage = this._preparedImage?.internalValue;
    }
    if (this._secondaryVmSizes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVmSizes = this._secondaryVmSizes?.internalValue;
    }
    if (this._serviceOffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOffering = this._serviceOffering;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._useAzureComputeGallery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAzureComputeGallery = this._useAzureComputeGallery?.internalValue;
    }
    if (this._useManagedDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagedDisks = this._useManagedDisks;
    }
    if (this._vdaResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdaResourceGroup = this._vdaResourceGroup;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeAzureMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureMasterImage.internalValue = undefined;
      this._azurePvsConfig.internalValue = undefined;
      this._diskEncryptionSet.internalValue = undefined;
      this._enrollInIntune = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._licenseType = undefined;
      this._machineProfile.internalValue = undefined;
      this._masterImageNote = undefined;
      this._preparedImage.internalValue = undefined;
      this._secondaryVmSizes.internalValue = undefined;
      this._serviceOffering = undefined;
      this._storageType = undefined;
      this._useAzureComputeGallery.internalValue = undefined;
      this._useManagedDisks = undefined;
      this._vdaResourceGroup = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureMasterImage.internalValue = value.azureMasterImage;
      this._azurePvsConfig.internalValue = value.azurePvsConfig;
      this._diskEncryptionSet.internalValue = value.diskEncryptionSet;
      this._enrollInIntune = value.enrollInIntune;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._licenseType = value.licenseType;
      this._machineProfile.internalValue = value.machineProfile;
      this._masterImageNote = value.masterImageNote;
      this._preparedImage.internalValue = value.preparedImage;
      this._secondaryVmSizes.internalValue = value.secondaryVmSizes;
      this._serviceOffering = value.serviceOffering;
      this._storageType = value.storageType;
      this._useAzureComputeGallery.internalValue = value.useAzureComputeGallery;
      this._useManagedDisks = value.useManagedDisks;
      this._vdaResourceGroup = value.vdaResourceGroup;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // azure_master_image - computed: false, optional: true, required: false
  private _azureMasterImage = new MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImageOutputReference(this, "azure_master_image");
  public get azureMasterImage() {
    return this._azureMasterImage;
  }
  public putAzureMasterImage(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzureMasterImage) {
    this._azureMasterImage.internalValue = value;
  }
  public resetAzureMasterImage() {
    this._azureMasterImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMasterImageInput() {
    return this._azureMasterImage.internalValue;
  }

  // azure_pvs_config - computed: false, optional: true, required: false
  private _azurePvsConfig = new MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfigOutputReference(this, "azure_pvs_config");
  public get azurePvsConfig() {
    return this._azurePvsConfig;
  }
  public putAzurePvsConfig(value: MachineCatalogProvisioningSchemeAzureMachineConfigAzurePvsConfig) {
    this._azurePvsConfig.internalValue = value;
  }
  public resetAzurePvsConfig() {
    this._azurePvsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePvsConfigInput() {
    return this._azurePvsConfig.internalValue;
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet = new MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSetOutputReference(this, "disk_encryption_set");
  public get diskEncryptionSet() {
    return this._diskEncryptionSet;
  }
  public putDiskEncryptionSet(value: MachineCatalogProvisioningSchemeAzureMachineConfigDiskEncryptionSet) {
    this._diskEncryptionSet.internalValue = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet.internalValue;
  }

  // enroll_in_intune - computed: false, optional: true, required: false
  private _enrollInIntune?: boolean | cdktf.IResolvable; 
  public get enrollInIntune() {
    return this.getBooleanAttribute('enroll_in_intune');
  }
  public set enrollInIntune(value: boolean | cdktf.IResolvable) {
    this._enrollInIntune = value;
  }
  public resetEnrollInIntune() {
    this._enrollInIntune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollInIntuneInput() {
    return this._enrollInIntune;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeAzureMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile = new MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfileOutputReference(this, "machine_profile");
  public get machineProfile() {
    return this._machineProfile;
  }
  public putMachineProfile(value: MachineCatalogProvisioningSchemeAzureMachineConfigMachineProfile) {
    this._machineProfile.internalValue = value;
  }
  public resetMachineProfile() {
    this._machineProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile.internalValue;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // prepared_image - computed: false, optional: true, required: false
  private _preparedImage = new MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImageOutputReference(this, "prepared_image");
  public get preparedImage() {
    return this._preparedImage;
  }
  public putPreparedImage(value: MachineCatalogProvisioningSchemeAzureMachineConfigPreparedImage) {
    this._preparedImage.internalValue = value;
  }
  public resetPreparedImage() {
    this._preparedImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparedImageInput() {
    return this._preparedImage.internalValue;
  }

  // secondary_vm_sizes - computed: false, optional: true, required: false
  private _secondaryVmSizes = new MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizesList(this, "secondary_vm_sizes", false);
  public get secondaryVmSizes() {
    return this._secondaryVmSizes;
  }
  public putSecondaryVmSizes(value: MachineCatalogProvisioningSchemeAzureMachineConfigSecondaryVmSizes[] | cdktf.IResolvable) {
    this._secondaryVmSizes.internalValue = value;
  }
  public resetSecondaryVmSizes() {
    this._secondaryVmSizes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVmSizesInput() {
    return this._secondaryVmSizes.internalValue;
  }

  // service_offering - computed: false, optional: false, required: true
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // use_azure_compute_gallery - computed: false, optional: true, required: false
  private _useAzureComputeGallery = new MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGalleryOutputReference(this, "use_azure_compute_gallery");
  public get useAzureComputeGallery() {
    return this._useAzureComputeGallery;
  }
  public putUseAzureComputeGallery(value: MachineCatalogProvisioningSchemeAzureMachineConfigUseAzureComputeGallery) {
    this._useAzureComputeGallery.internalValue = value;
  }
  public resetUseAzureComputeGallery() {
    this._useAzureComputeGallery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzureComputeGalleryInput() {
    return this._useAzureComputeGallery.internalValue;
  }

  // use_managed_disks - computed: false, optional: true, required: false
  private _useManagedDisks?: boolean | cdktf.IResolvable; 
  public get useManagedDisks() {
    return this.getBooleanAttribute('use_managed_disks');
  }
  public set useManagedDisks(value: boolean | cdktf.IResolvable) {
    this._useManagedDisks = value;
  }
  public resetUseManagedDisks() {
    this._useManagedDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedDisksInput() {
    return this._useManagedDisks;
  }

  // vda_resource_group - computed: false, optional: true, required: false
  private _vdaResourceGroup?: string; 
  public get vdaResourceGroup() {
    return this.getStringAttribute('vda_resource_group');
  }
  public set vdaResourceGroup(value: string) {
    this._vdaResourceGroup = value;
  }
  public resetVdaResourceGroup() {
    this._vdaResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdaResourceGroupInput() {
    return this._vdaResourceGroup;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeAzureMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningSchemeCustomProperties {
  /**
  * Name of the custom property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#name MachineCatalog#name}
  */
  readonly name: string;
  /**
  * Value of the custom property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#value MachineCatalog#value}
  */
  readonly value: string;
}

export function machineCatalogProvisioningSchemeCustomPropertiesToTerraform(struct?: MachineCatalogProvisioningSchemeCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function machineCatalogProvisioningSchemeCustomPropertiesToHclTerraform(struct?: MachineCatalogProvisioningSchemeCustomProperties | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeCustomProperties | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MachineCatalogProvisioningSchemeCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeCustomPropertiesOutputReference {
    return new MachineCatalogProvisioningSchemeCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache {
  /**
  * Persist the OS disk when power cycling the non-persistent provisioned virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_os_disk MachineCatalog#persist_os_disk}
  */
  readonly persistOsDisk: boolean | cdktf.IResolvable;
  /**
  * Persist Write-back Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#persist_wbc MachineCatalog#persist_wbc}
  */
  readonly persistWbc: boolean | cdktf.IResolvable;
  /**
  * Type of naming scheme. Choose between Numeric and Alphabetic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#wbc_disk_storage_type MachineCatalog#wbc_disk_storage_type}
  */
  readonly wbcDiskStorageType: string;
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb: number;
}

export function machineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_os_disk: cdktf.booleanToTerraform(struct!.persistOsDisk),
    persist_wbc: cdktf.booleanToTerraform(struct!.persistWbc),
    wbc_disk_storage_type: cdktf.stringToTerraform(struct!.wbcDiskStorageType),
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_os_disk: {
      value: cdktf.booleanToHclTerraform(struct!.persistOsDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_wbc: {
      value: cdktf.booleanToHclTerraform(struct!.persistWbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wbc_disk_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.wbcDiskStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistOsDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistOsDisk = this._persistOsDisk;
    }
    if (this._persistWbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistWbc = this._persistWbc;
    }
    if (this._wbcDiskStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbcDiskStorageType = this._wbcDiskStorageType;
    }
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistOsDisk = undefined;
      this._persistWbc = undefined;
      this._wbcDiskStorageType = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistOsDisk = value.persistOsDisk;
      this._persistWbc = value.persistWbc;
      this._wbcDiskStorageType = value.wbcDiskStorageType;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // persist_os_disk - computed: false, optional: false, required: true
  private _persistOsDisk?: boolean | cdktf.IResolvable; 
  public get persistOsDisk() {
    return this.getBooleanAttribute('persist_os_disk');
  }
  public set persistOsDisk(value: boolean | cdktf.IResolvable) {
    this._persistOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistOsDiskInput() {
    return this._persistOsDisk;
  }

  // persist_wbc - computed: false, optional: false, required: true
  private _persistWbc?: boolean | cdktf.IResolvable; 
  public get persistWbc() {
    return this.getBooleanAttribute('persist_wbc');
  }
  public set persistWbc(value: boolean | cdktf.IResolvable) {
    this._persistWbc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistWbcInput() {
    return this._persistWbc;
  }

  // wbc_disk_storage_type - computed: false, optional: false, required: true
  private _wbcDiskStorageType?: string; 
  public get wbcDiskStorageType() {
    return this.getStringAttribute('wbc_disk_storage_type');
  }
  public set wbcDiskStorageType(value: string) {
    this._wbcDiskStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wbcDiskStorageTypeInput() {
    return this._wbcDiskStorageType;
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: false, required: true
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeGcpMachineConfig {
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine template that will be used to identify the default value for the tags, virtual machine size, boot diagnostics, host cache property of OS disk, accelerated networking and availability zone. If not specified, the VM specified in master_image will be used as template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile?: string;
  /**
  * The name of the virtual machine snapshot of a GCP VM that will be used as master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_snapshot MachineCatalog#machine_snapshot}
  */
  readonly machineSnapshot?: string;
  /**
  * The name of the virtual machine snapshot or VM template that will be used. This identifies the hard disk to be used and the default values for the memory and processors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image MachineCatalog#master_image}
  */
  readonly masterImage: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * Storage type used for provisioned virtual machine disks on GCP. Storage types include: `pd-standar`, `pd-balanced`, `pd-ssd` and `pd-extreme`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#storage_type MachineCatalog#storage_type}
  */
  readonly storageType: string;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeGcpMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_update_reboot_options: machineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    machine_profile: cdktf.stringToTerraform(struct!.machineProfile),
    machine_snapshot: cdktf.stringToTerraform(struct!.machineSnapshot),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    writeback_cache: machineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeGcpMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeGcpMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions",
    },
    machine_profile: {
      value: cdktf.stringToHclTerraform(struct!.machineProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.machineSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeGcpMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeGcpMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._machineProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile;
    }
    if (this._machineSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSnapshot = this._machineSnapshot;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeGcpMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._machineProfile = undefined;
      this._machineSnapshot = undefined;
      this._masterImage = undefined;
      this._masterImageNote = undefined;
      this._storageType = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._machineProfile = value.machineProfile;
      this._machineSnapshot = value.machineSnapshot;
      this._masterImage = value.masterImage;
      this._masterImageNote = value.masterImageNote;
      this._storageType = value.storageType;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeGcpMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile?: string; 
  public get machineProfile() {
    return this.getStringAttribute('machine_profile');
  }
  public set machineProfile(value: string) {
    this._machineProfile = value;
  }
  public resetMachineProfile() {
    this._machineProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile;
  }

  // machine_snapshot - computed: false, optional: true, required: false
  private _machineSnapshot?: string; 
  public get machineSnapshot() {
    return this.getStringAttribute('machine_snapshot');
  }
  public set machineSnapshot(value: string) {
    this._machineSnapshot = value;
  }
  public resetMachineSnapshot() {
    this._machineSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSnapshotInput() {
    return this._machineSnapshot;
  }

  // master_image - computed: false, optional: false, required: true
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeGcpMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningSchemeMachineAccountCreationRules {
  /**
  * Defines the template name for AD accounts created in the identity pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#naming_scheme MachineCatalog#naming_scheme}
  */
  readonly namingScheme: string;
  /**
  * Type of naming scheme. This defines the format of the variable part of the AD account names that will be created. Choose between `Numeric` and `Alphabetic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#naming_scheme_type MachineCatalog#naming_scheme_type}
  */
  readonly namingSchemeType: string;
  /**
  * Specify numbers or letters, depending on the naming scheme type, for the account names to start with.
  * 
  * -> **Note** Letters should be in Uppercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#starts_with MachineCatalog#starts_with}
  */
  readonly startsWith?: string;
}

export function machineCatalogProvisioningSchemeMachineAccountCreationRulesToTerraform(struct?: MachineCatalogProvisioningSchemeMachineAccountCreationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    naming_scheme: cdktf.stringToTerraform(struct!.namingScheme),
    naming_scheme_type: cdktf.stringToTerraform(struct!.namingSchemeType),
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
  }
}


export function machineCatalogProvisioningSchemeMachineAccountCreationRulesToHclTerraform(struct?: MachineCatalogProvisioningSchemeMachineAccountCreationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    naming_scheme: {
      value: cdktf.stringToHclTerraform(struct!.namingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naming_scheme_type: {
      value: cdktf.stringToHclTerraform(struct!.namingSchemeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeMachineAccountCreationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeMachineAccountCreationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingScheme = this._namingScheme;
    }
    if (this._namingSchemeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingSchemeType = this._namingSchemeType;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeMachineAccountCreationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namingScheme = undefined;
      this._namingSchemeType = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namingScheme = value.namingScheme;
      this._namingSchemeType = value.namingSchemeType;
      this._startsWith = value.startsWith;
    }
  }

  // naming_scheme - computed: false, optional: false, required: true
  private _namingScheme?: string; 
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }
  public set namingScheme(value: string) {
    this._namingScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeInput() {
    return this._namingScheme;
  }

  // naming_scheme_type - computed: false, optional: false, required: true
  private _namingSchemeType?: string; 
  public get namingSchemeType() {
    return this.getStringAttribute('naming_scheme_type');
  }
  public set namingSchemeType(value: string) {
    this._namingSchemeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeTypeInput() {
    return this._namingSchemeType;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}
export interface MachineCatalogProvisioningSchemeMachineAdAccounts {
  /**
  * The computer account name in the Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#ad_account_name MachineCatalog#ad_account_name}
  */
  readonly adAccountName: string;
  /**
  * Password of the machine account. This value will be applied only if `reset_password = false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#password MachineCatalog#password}
  */
  readonly password?: string;
  /**
  * Password format to be used for machine account. Choose between `PlainText` and `Base64`. Defaults to `PlainText`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#password_format MachineCatalog#password_format}
  */
  readonly passwordFormat?: string;
  /**
  * Specify if the password for the machine account should be reset. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reset_password MachineCatalog#reset_password}
  */
  readonly resetPassword?: boolean | cdktf.IResolvable;
}

export function machineCatalogProvisioningSchemeMachineAdAccountsToTerraform(struct?: MachineCatalogProvisioningSchemeMachineAdAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_account_name: cdktf.stringToTerraform(struct!.adAccountName),
    password: cdktf.stringToTerraform(struct!.password),
    password_format: cdktf.stringToTerraform(struct!.passwordFormat),
    reset_password: cdktf.booleanToTerraform(struct!.resetPassword),
  }
}


export function machineCatalogProvisioningSchemeMachineAdAccountsToHclTerraform(struct?: MachineCatalogProvisioningSchemeMachineAdAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_account_name: {
      value: cdktf.stringToHclTerraform(struct!.adAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_format: {
      value: cdktf.stringToHclTerraform(struct!.passwordFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_password: {
      value: cdktf.booleanToHclTerraform(struct!.resetPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeMachineAdAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeMachineAdAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adAccountName = this._adAccountName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFormat = this._passwordFormat;
    }
    if (this._resetPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetPassword = this._resetPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeMachineAdAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adAccountName = undefined;
      this._password = undefined;
      this._passwordFormat = undefined;
      this._resetPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adAccountName = value.adAccountName;
      this._password = value.password;
      this._passwordFormat = value.passwordFormat;
      this._resetPassword = value.resetPassword;
    }
  }

  // ad_account_name - computed: false, optional: false, required: true
  private _adAccountName?: string; 
  public get adAccountName() {
    return this.getStringAttribute('ad_account_name');
  }
  public set adAccountName(value: string) {
    this._adAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adAccountNameInput() {
    return this._adAccountName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetTfPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_format - computed: true, optional: true, required: false
  private _passwordFormat?: string; 
  public get passwordFormat() {
    return this.getStringAttribute('password_format');
  }
  public set passwordFormat(value: string) {
    this._passwordFormat = value;
  }
  public resetPasswordFormat() {
    this._passwordFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFormatInput() {
    return this._passwordFormat;
  }

  // reset_password - computed: true, optional: true, required: false
  private _resetPassword?: boolean | cdktf.IResolvable; 
  public get resetPassword() {
    return this.getBooleanAttribute('reset_password');
  }
  public set resetPassword(value: boolean | cdktf.IResolvable) {
    this._resetPassword = value;
  }
  public resetResetPassword() {
    this._resetPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordInput() {
    return this._resetPassword;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class MachineCatalogProvisioningSchemeMachineAdAccountsList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeMachineAdAccounts[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeMachineAdAccountsOutputReference {
    return new MachineCatalogProvisioningSchemeMachineAdAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeMachineDomainIdentity {
  /**
  * The AD domain where machine accounts will be created. Specify this in FQDN format; for example, MyDomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#domain MachineCatalog#domain}
  */
  readonly domain?: string;
  /**
  * The organization unit that computer accounts will be created into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#domain_ou MachineCatalog#domain_ou}
  */
  readonly domainOu?: string;
  /**
  * Service account for the domain. Only the username is required; do not include the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_account MachineCatalog#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The domain name of the service account. Specify this in FQDN format; for example, MyServiceDomain.com.
  * 
  * ~> **Please Note** Use this property if domain of the service account which is used to create the machine accounts resides in a domain different from what's specified in property `domain` where the machine accounts are created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_account_domain MachineCatalog#service_account_domain}
  */
  readonly serviceAccountDomain?: string;
  /**
  * The service account Id to be used for managing the machine accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_account_id MachineCatalog#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Service account password for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#service_account_password MachineCatalog#service_account_password}
  */
  readonly serviceAccountPassword?: string;
}

export function machineCatalogProvisioningSchemeMachineDomainIdentityToTerraform(struct?: MachineCatalogProvisioningSchemeMachineDomainIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_ou: cdktf.stringToTerraform(struct!.domainOu),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_domain: cdktf.stringToTerraform(struct!.serviceAccountDomain),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    service_account_password: cdktf.stringToTerraform(struct!.serviceAccountPassword),
  }
}


export function machineCatalogProvisioningSchemeMachineDomainIdentityToHclTerraform(struct?: MachineCatalogProvisioningSchemeMachineDomainIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_ou: {
      value: cdktf.stringToHclTerraform(struct!.domainOu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_domain: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeMachineDomainIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeMachineDomainIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainOu = this._domainOu;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountDomain = this._serviceAccountDomain;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeMachineDomainIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._domainOu = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountDomain = undefined;
      this._serviceAccountId = undefined;
      this._serviceAccountPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._domainOu = value.domainOu;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountDomain = value.serviceAccountDomain;
      this._serviceAccountId = value.serviceAccountId;
      this._serviceAccountPassword = value.serviceAccountPassword;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_ou - computed: false, optional: true, required: false
  private _domainOu?: string; 
  public get domainOu() {
    return this.getStringAttribute('domain_ou');
  }
  public set domainOu(value: string) {
    this._domainOu = value;
  }
  public resetDomainOu() {
    this._domainOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOuInput() {
    return this._domainOu;
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

  // service_account_domain - computed: false, optional: true, required: false
  private _serviceAccountDomain?: string; 
  public get serviceAccountDomain() {
    return this.getStringAttribute('service_account_domain');
  }
  public set serviceAccountDomain(value: string) {
    this._serviceAccountDomain = value;
  }
  public resetServiceAccountDomain() {
    this._serviceAccountDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDomainInput() {
    return this._serviceAccountDomain;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_account_password - computed: false, optional: true, required: false
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  public resetServiceAccountPassword() {
    this._serviceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }
}
export interface MachineCatalogProvisioningSchemeMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#name MachineCatalog#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#value MachineCatalog#value}
  */
  readonly value: string;
}

export function machineCatalogProvisioningSchemeMetadataToTerraform(struct?: MachineCatalogProvisioningSchemeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function machineCatalogProvisioningSchemeMetadataToHclTerraform(struct?: MachineCatalogProvisioningSchemeMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MachineCatalogProvisioningSchemeMetadataList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeMetadata[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeMetadataOutputReference {
    return new MachineCatalogProvisioningSchemeMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeNetworkMapping {
  /**
  * The name of the virtual network that the device should be attached to. This must be a subnet within a Virtual Private Cloud item in the resource pool to which the Machine Catalog is associated.<br />For AWS, please specify the network mask of the network you want to use within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#network MachineCatalog#network}
  */
  readonly network: string;
  /**
  * Name or Id of the network device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#network_device MachineCatalog#network_device}
  */
  readonly networkDevice: string;
}

export function machineCatalogProvisioningSchemeNetworkMappingToTerraform(struct?: MachineCatalogProvisioningSchemeNetworkMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_device: cdktf.stringToTerraform(struct!.networkDevice),
  }
}


export function machineCatalogProvisioningSchemeNetworkMappingToHclTerraform(struct?: MachineCatalogProvisioningSchemeNetworkMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device: {
      value: cdktf.stringToHclTerraform(struct!.networkDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeNetworkMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogProvisioningSchemeNetworkMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDevice = this._networkDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeNetworkMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._networkDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._networkDevice = value.networkDevice;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_device - computed: false, optional: false, required: true
  private _networkDevice?: string; 
  public get networkDevice() {
    return this.getStringAttribute('network_device');
  }
  public set networkDevice(value: string) {
    this._networkDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceInput() {
    return this._networkDevice;
  }
}

export class MachineCatalogProvisioningSchemeNetworkMappingList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogProvisioningSchemeNetworkMapping[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogProvisioningSchemeNetworkMappingOutputReference {
    return new MachineCatalogProvisioningSchemeNetworkMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeNutanixMachineConfig {
  /**
  * The name of the container where the virtual machines' identity disks will be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#container MachineCatalog#container}
  */
  readonly container: string;
  /**
  * The number of cores per processor that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cores_per_cpu_count MachineCatalog#cores_per_cpu_count}
  */
  readonly coresPerCpuCount: number;
  /**
  * The number of processors that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cpu_count MachineCatalog#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the master image that will be the template for all virtual machines in this catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image MachineCatalog#master_image}
  */
  readonly masterImage: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * The maximum amount of memory that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#memory_mb MachineCatalog#memory_mb}
  */
  readonly memoryMb: number;
}

export function machineCatalogProvisioningSchemeNutanixMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeNutanixMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    cores_per_cpu_count: cdktf.numberToTerraform(struct!.coresPerCpuCount),
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_update_reboot_options: machineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
  }
}


export function machineCatalogProvisioningSchemeNutanixMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeNutanixMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cores_per_cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.coresPerCpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeNutanixMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeNutanixMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._coresPerCpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresPerCpuCount = this._coresPerCpuCount;
    }
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeNutanixMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._coresPerCpuCount = undefined;
      this._cpuCount = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._masterImage = undefined;
      this._masterImageNote = undefined;
      this._memoryMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._coresPerCpuCount = value.coresPerCpuCount;
      this._cpuCount = value.cpuCount;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._masterImage = value.masterImage;
      this._masterImageNote = value.masterImageNote;
      this._memoryMb = value.memoryMb;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // cores_per_cpu_count - computed: false, optional: false, required: true
  private _coresPerCpuCount?: number; 
  public get coresPerCpuCount() {
    return this.getNumberAttribute('cores_per_cpu_count');
  }
  public set coresPerCpuCount(value: number) {
    this._coresPerCpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerCpuCountInput() {
    return this._coresPerCpuCount;
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeNutanixMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // master_image - computed: false, optional: false, required: true
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }
}
export interface MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache {
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb: number;
}

export function machineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: false, required: true
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeOpenshiftMachineConfig {
  /**
  * Number of CPU cores for the VDA VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cpu_count MachineCatalog#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine that will be used to identify the default value for the tags, virtual machine size, boot diagnostics and host cache property of OS disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile?: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * The name of the virtual machine that will be used as master image. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_vm MachineCatalog#master_image_vm}
  */
  readonly masterImageVm: string;
  /**
  * Size of the memory in MB for the VDA VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#memory_mb MachineCatalog#memory_mb}
  */
  readonly memoryMb: number;
  /**
  * Specify if virtual machines created from the provisioning scheme should be created using the dedicated full disk clone feature. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_full_disk_clone_provisioning MachineCatalog#use_full_disk_clone_provisioning}
  */
  readonly useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeOpenshiftMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_update_reboot_options: machineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    machine_profile: cdktf.stringToTerraform(struct!.machineProfile),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    master_image_vm: cdktf.stringToTerraform(struct!.masterImageVm),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    use_full_disk_clone_provisioning: cdktf.booleanToTerraform(struct!.useFullDiskCloneProvisioning),
    writeback_cache: machineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeOpenshiftMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeOpenshiftMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions",
    },
    machine_profile: {
      value: cdktf.stringToHclTerraform(struct!.machineProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_vm: {
      value: cdktf.stringToHclTerraform(struct!.masterImageVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_full_disk_clone_provisioning: {
      value: cdktf.booleanToHclTerraform(struct!.useFullDiskCloneProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeOpenshiftMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeOpenshiftMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._machineProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._masterImageVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageVm = this._masterImageVm;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._useFullDiskCloneProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFullDiskCloneProvisioning = this._useFullDiskCloneProvisioning;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._machineProfile = undefined;
      this._masterImageNote = undefined;
      this._masterImageVm = undefined;
      this._memoryMb = undefined;
      this._useFullDiskCloneProvisioning = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._machineProfile = value.machineProfile;
      this._masterImageNote = value.masterImageNote;
      this._masterImageVm = value.masterImageVm;
      this._memoryMb = value.memoryMb;
      this._useFullDiskCloneProvisioning = value.useFullDiskCloneProvisioning;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile?: string; 
  public get machineProfile() {
    return this.getStringAttribute('machine_profile');
  }
  public set machineProfile(value: string) {
    this._machineProfile = value;
  }
  public resetMachineProfile() {
    this._machineProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // master_image_vm - computed: false, optional: false, required: true
  private _masterImageVm?: string; 
  public get masterImageVm() {
    return this.getStringAttribute('master_image_vm');
  }
  public set masterImageVm(value: string) {
    this._masterImageVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageVmInput() {
    return this._masterImageVm;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // use_full_disk_clone_provisioning - computed: true, optional: true, required: false
  private _useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable; 
  public get useFullDiskCloneProvisioning() {
    return this.getBooleanAttribute('use_full_disk_clone_provisioning');
  }
  public set useFullDiskCloneProvisioning(value: boolean | cdktf.IResolvable) {
    this._useFullDiskCloneProvisioning = value;
  }
  public resetUseFullDiskCloneProvisioning() {
    this._useFullDiskCloneProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFullDiskCloneProvisioningInput() {
    return this._useFullDiskCloneProvisioning;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache {
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The drive letter assigned for write back cache disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_drive_letter MachineCatalog#writeback_cache_drive_letter}
  */
  readonly writebackCacheDriveLetter?: string;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb: number;
}

export function machineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_drive_letter: cdktf.stringToTerraform(struct!.writebackCacheDriveLetter),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_drive_letter: {
      value: cdktf.stringToHclTerraform(struct!.writebackCacheDriveLetter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheDriveLetter !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDriveLetter = this._writebackCacheDriveLetter;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheDriveLetter = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheDriveLetter = value.writebackCacheDriveLetter;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_drive_letter - computed: false, optional: true, required: false
  private _writebackCacheDriveLetter?: string; 
  public get writebackCacheDriveLetter() {
    return this.getStringAttribute('writeback_cache_drive_letter');
  }
  public set writebackCacheDriveLetter(value: string) {
    this._writebackCacheDriveLetter = value;
  }
  public resetWritebackCacheDriveLetter() {
    this._writebackCacheDriveLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDriveLetterInput() {
    return this._writebackCacheDriveLetter;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: false, required: true
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeScvmmMachineConfig {
  /**
  * The number of processors that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cpu_count MachineCatalog#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The Snapshot of the virtual machine specified in `master_image`. Specify the relative path of the snapshot. Eg: snaphost-1/snapshot-2/snapshot-3. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_snapshot MachineCatalog#image_snapshot}
  */
  readonly imageSnapshot?: string;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine that will be used as master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image MachineCatalog#master_image}
  */
  readonly masterImage: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * The maximum amount of memory that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#memory_mb MachineCatalog#memory_mb}
  */
  readonly memoryMb: number;
  /**
  * Specify if virtual machines created from the provisioning scheme should be created using the dedicated full disk clone feature. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_full_disk_clone_provisioning MachineCatalog#use_full_disk_clone_provisioning}
  */
  readonly useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeScvmmMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_snapshot: cdktf.stringToTerraform(struct!.imageSnapshot),
    image_update_reboot_options: machineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    master_image: cdktf.stringToTerraform(struct!.masterImage),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    use_full_disk_clone_provisioning: cdktf.booleanToTerraform(struct!.useFullDiskCloneProvisioning),
    writeback_cache: machineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeScvmmMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeScvmmMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.imageSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions",
    },
    master_image: {
      value: cdktf.stringToHclTerraform(struct!.masterImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_full_disk_clone_provisioning: {
      value: cdktf.booleanToHclTerraform(struct!.useFullDiskCloneProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeScvmmMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeScvmmMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSnapshot = this._imageSnapshot;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._masterImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImage = this._masterImage;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._useFullDiskCloneProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFullDiskCloneProvisioning = this._useFullDiskCloneProvisioning;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeScvmmMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._imageSnapshot = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._masterImage = undefined;
      this._masterImageNote = undefined;
      this._memoryMb = undefined;
      this._useFullDiskCloneProvisioning = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._imageSnapshot = value.imageSnapshot;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._masterImage = value.masterImage;
      this._masterImageNote = value.masterImageNote;
      this._memoryMb = value.memoryMb;
      this._useFullDiskCloneProvisioning = value.useFullDiskCloneProvisioning;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // image_snapshot - computed: true, optional: true, required: false
  private _imageSnapshot?: string; 
  public get imageSnapshot() {
    return this.getStringAttribute('image_snapshot');
  }
  public set imageSnapshot(value: string) {
    this._imageSnapshot = value;
  }
  public resetImageSnapshot() {
    this._imageSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSnapshotInput() {
    return this._imageSnapshot;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeScvmmMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // master_image - computed: false, optional: false, required: true
  private _masterImage?: string; 
  public get masterImage() {
    return this.getStringAttribute('master_image');
  }
  public set masterImage(value: string) {
    this._masterImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageInput() {
    return this._masterImage;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // use_full_disk_clone_provisioning - computed: true, optional: true, required: false
  private _useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable; 
  public get useFullDiskCloneProvisioning() {
    return this.getBooleanAttribute('use_full_disk_clone_provisioning');
  }
  public set useFullDiskCloneProvisioning(value: boolean | cdktf.IResolvable) {
    this._useFullDiskCloneProvisioning = value;
  }
  public resetUseFullDiskCloneProvisioning() {
    this._useFullDiskCloneProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFullDiskCloneProvisioningInput() {
    return this._useFullDiskCloneProvisioning;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeScvmmMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage {
  /**
  * ID of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_definition MachineCatalog#image_definition}
  */
  readonly imageDefinition: string;
  /**
  * ID of the image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_version MachineCatalog#image_version}
  */
  readonly imageVersion: string;
}

export function machineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageToTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_definition: cdktf.stringToTerraform(struct!.imageDefinition),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
  }
}


export function machineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageToHclTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_definition: {
      value: cdktf.stringToHclTerraform(struct!.imageDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageDefinition = undefined;
      this._imageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageDefinition = value.imageDefinition;
      this._imageVersion = value.imageVersion;
    }
  }

  // image_definition - computed: false, optional: false, required: true
  private _imageDefinition?: string; 
  public get imageDefinition() {
    return this.getStringAttribute('image_definition');
  }
  public set imageDefinition(value: string) {
    this._imageDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition;
  }

  // image_version - computed: false, optional: false, required: true
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }
}
export interface MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache {
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The drive letter assigned for write back cache disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_drive_letter MachineCatalog#writeback_cache_drive_letter}
  */
  readonly writebackCacheDriveLetter?: string;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb: number;
}

export function machineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_drive_letter: cdktf.stringToTerraform(struct!.writebackCacheDriveLetter),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_drive_letter: {
      value: cdktf.stringToHclTerraform(struct!.writebackCacheDriveLetter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheDriveLetter !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDriveLetter = this._writebackCacheDriveLetter;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheDriveLetter = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheDriveLetter = value.writebackCacheDriveLetter;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_drive_letter - computed: false, optional: true, required: false
  private _writebackCacheDriveLetter?: string; 
  public get writebackCacheDriveLetter() {
    return this.getStringAttribute('writeback_cache_drive_letter');
  }
  public set writebackCacheDriveLetter(value: string) {
    this._writebackCacheDriveLetter = value;
  }
  public resetWritebackCacheDriveLetter() {
    this._writebackCacheDriveLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDriveLetterInput() {
    return this._writebackCacheDriveLetter;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: false, required: true
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeVsphereMachineConfig {
  /**
  * The number of processors that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cpu_count MachineCatalog#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The Snapshot of the virtual machine specified in `master_image_vm`. Specify the relative path of the snapshot. Eg: snaphost-1/snapshot-2/snapshot-3. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_snapshot MachineCatalog#image_snapshot}
  */
  readonly imageSnapshot?: string;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions;
  /**
  * The name of the virtual machine template that will be used to identify the default value for the tags, virtual machine size, boot diagnostics and host cache property of OS disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_profile MachineCatalog#machine_profile}
  */
  readonly machineProfile?: string;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * The name of the virtual machine that will be used as master image. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_vm MachineCatalog#master_image_vm}
  */
  readonly masterImageVm?: string;
  /**
  * The maximum amount of memory that virtual machines created from the provisioning scheme should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#memory_mb MachineCatalog#memory_mb}
  */
  readonly memoryMb: number;
  /**
  * Specifying the prepared master image to be used for machine catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#prepared_image MachineCatalog#prepared_image}
  */
  readonly preparedImage?: MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage;
  /**
  * The Resource Pool path under which the `master_image_vm` is located. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#resource_pool_path MachineCatalog#resource_pool_path}
  */
  readonly resourcePoolPath?: string;
  /**
  * Specify if virtual machines created from the provisioning scheme should be created using the dedicated full disk clone feature. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_full_disk_clone_provisioning MachineCatalog#use_full_disk_clone_provisioning}
  */
  readonly useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeVsphereMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_snapshot: cdktf.stringToTerraform(struct!.imageSnapshot),
    image_update_reboot_options: machineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    machine_profile: cdktf.stringToTerraform(struct!.machineProfile),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    master_image_vm: cdktf.stringToTerraform(struct!.masterImageVm),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    prepared_image: machineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageToTerraform(struct!.preparedImage),
    resource_pool_path: cdktf.stringToTerraform(struct!.resourcePoolPath),
    use_full_disk_clone_provisioning: cdktf.booleanToTerraform(struct!.useFullDiskCloneProvisioning),
    writeback_cache: machineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeVsphereMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeVsphereMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.imageSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions",
    },
    machine_profile: {
      value: cdktf.stringToHclTerraform(struct!.machineProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_vm: {
      value: cdktf.stringToHclTerraform(struct!.masterImageVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prepared_image: {
      value: machineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageToHclTerraform(struct!.preparedImage),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage",
    },
    resource_pool_path: {
      value: cdktf.stringToHclTerraform(struct!.resourcePoolPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_full_disk_clone_provisioning: {
      value: cdktf.booleanToHclTerraform(struct!.useFullDiskCloneProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeVsphereMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeVsphereMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSnapshot = this._imageSnapshot;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._machineProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineProfile = this._machineProfile;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._masterImageVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageVm = this._masterImageVm;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._preparedImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparedImage = this._preparedImage?.internalValue;
    }
    if (this._resourcePoolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePoolPath = this._resourcePoolPath;
    }
    if (this._useFullDiskCloneProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFullDiskCloneProvisioning = this._useFullDiskCloneProvisioning;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeVsphereMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._imageSnapshot = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._machineProfile = undefined;
      this._masterImageNote = undefined;
      this._masterImageVm = undefined;
      this._memoryMb = undefined;
      this._preparedImage.internalValue = undefined;
      this._resourcePoolPath = undefined;
      this._useFullDiskCloneProvisioning = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._imageSnapshot = value.imageSnapshot;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._machineProfile = value.machineProfile;
      this._masterImageNote = value.masterImageNote;
      this._masterImageVm = value.masterImageVm;
      this._memoryMb = value.memoryMb;
      this._preparedImage.internalValue = value.preparedImage;
      this._resourcePoolPath = value.resourcePoolPath;
      this._useFullDiskCloneProvisioning = value.useFullDiskCloneProvisioning;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // image_snapshot - computed: true, optional: true, required: false
  private _imageSnapshot?: string; 
  public get imageSnapshot() {
    return this.getStringAttribute('image_snapshot');
  }
  public set imageSnapshot(value: string) {
    this._imageSnapshot = value;
  }
  public resetImageSnapshot() {
    this._imageSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSnapshotInput() {
    return this._imageSnapshot;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeVsphereMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // machine_profile - computed: false, optional: true, required: false
  private _machineProfile?: string; 
  public get machineProfile() {
    return this.getStringAttribute('machine_profile');
  }
  public set machineProfile(value: string) {
    this._machineProfile = value;
  }
  public resetMachineProfile() {
    this._machineProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineProfileInput() {
    return this._machineProfile;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // master_image_vm - computed: false, optional: true, required: false
  private _masterImageVm?: string; 
  public get masterImageVm() {
    return this.getStringAttribute('master_image_vm');
  }
  public set masterImageVm(value: string) {
    this._masterImageVm = value;
  }
  public resetMasterImageVm() {
    this._masterImageVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageVmInput() {
    return this._masterImageVm;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // prepared_image - computed: false, optional: true, required: false
  private _preparedImage = new MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImageOutputReference(this, "prepared_image");
  public get preparedImage() {
    return this._preparedImage;
  }
  public putPreparedImage(value: MachineCatalogProvisioningSchemeVsphereMachineConfigPreparedImage) {
    this._preparedImage.internalValue = value;
  }
  public resetPreparedImage() {
    this._preparedImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparedImageInput() {
    return this._preparedImage.internalValue;
  }

  // resource_pool_path - computed: true, optional: true, required: false
  private _resourcePoolPath?: string; 
  public get resourcePoolPath() {
    return this.getStringAttribute('resource_pool_path');
  }
  public set resourcePoolPath(value: string) {
    this._resourcePoolPath = value;
  }
  public resetResourcePoolPath() {
    this._resourcePoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolPathInput() {
    return this._resourcePoolPath;
  }

  // use_full_disk_clone_provisioning - computed: true, optional: true, required: false
  private _useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable; 
  public get useFullDiskCloneProvisioning() {
    return this.getBooleanAttribute('use_full_disk_clone_provisioning');
  }
  public set useFullDiskCloneProvisioning(value: boolean | cdktf.IResolvable) {
    this._useFullDiskCloneProvisioning = value;
  }
  public resetUseFullDiskCloneProvisioning() {
    this._useFullDiskCloneProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFullDiskCloneProvisioningInput() {
    return this._useFullDiskCloneProvisioning;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeVsphereMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions {
  /**
  * Approximate maximum duration over which the reboot cycle runs, in minutes. -> **Note** Set to `-1` to skip reboot, and perform image update on the VDAs on next shutdown. Set to `0` to reboot all machines immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#reboot_duration MachineCatalog#reboot_duration}
  */
  readonly rebootDuration: number;
  /**
  * Time in minutes prior to a machine reboot at which a warning message is displayed in all user sessions on that machine. When omitted, no warning about reboot will be displayed in user session.-> **Note** When `reboot_duration` is set to `-1`, if a warning message should be displayed, `warning_duration` has to be set to `-1` to show the warning message immediately.-> **Note** When `reboot_duration` is not set to `-1`, `warning_duration` cannot be set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_duration MachineCatalog#warning_duration}
  */
  readonly warningDuration?: number;
  /**
  * Warning message displayed in user sessions on a machine scheduled for a reboot. The optional pattern '%m%' is replaced by the number of minutes until the reboot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_message MachineCatalog#warning_message}
  */
  readonly warningMessage?: string;
  /**
  * Number of minutes to wait before showing the reboot warning message again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#warning_repeat_interval MachineCatalog#warning_repeat_interval}
  */
  readonly warningRepeatInterval?: number;
}

export function machineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsToTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot_duration: cdktf.numberToTerraform(struct!.rebootDuration),
    warning_duration: cdktf.numberToTerraform(struct!.warningDuration),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
    warning_repeat_interval: cdktf.numberToTerraform(struct!.warningRepeatInterval),
  }
}


export function machineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsToHclTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot_duration: {
      value: cdktf.numberToHclTerraform(struct!.rebootDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_duration: {
      value: cdktf.numberToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.warningRepeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rebootDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDuration = this._rebootDuration;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    if (this._warningRepeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRepeatInterval = this._warningRepeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rebootDuration = undefined;
      this._warningDuration = undefined;
      this._warningMessage = undefined;
      this._warningRepeatInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rebootDuration = value.rebootDuration;
      this._warningDuration = value.warningDuration;
      this._warningMessage = value.warningMessage;
      this._warningRepeatInterval = value.warningRepeatInterval;
    }
  }

  // reboot_duration - computed: false, optional: false, required: true
  private _rebootDuration?: number; 
  public get rebootDuration() {
    return this.getNumberAttribute('reboot_duration');
  }
  public set rebootDuration(value: number) {
    this._rebootDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDurationInput() {
    return this._rebootDuration;
  }

  // warning_duration - computed: false, optional: true, required: false
  private _warningDuration?: number; 
  public get warningDuration() {
    return this.getNumberAttribute('warning_duration');
  }
  public set warningDuration(value: number) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }

  // warning_repeat_interval - computed: false, optional: true, required: false
  private _warningRepeatInterval?: number; 
  public get warningRepeatInterval() {
    return this.getNumberAttribute('warning_repeat_interval');
  }
  public set warningRepeatInterval(value: number) {
    this._warningRepeatInterval = value;
  }
  public resetWarningRepeatInterval() {
    this._warningRepeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRepeatIntervalInput() {
    return this._warningRepeatInterval;
  }
}
export interface MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache {
  /**
  * The size in GB of any temporary storage disk used by the write back cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_disk_size_gb MachineCatalog#writeback_cache_disk_size_gb}
  */
  readonly writebackCacheDiskSizeGb: number;
  /**
  * The size of the in-memory write back cache in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache_memory_size_mb MachineCatalog#writeback_cache_memory_size_mb}
  */
  readonly writebackCacheMemorySizeMb: number;
}

export function machineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheToTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    writeback_cache_disk_size_gb: cdktf.numberToTerraform(struct!.writebackCacheDiskSizeGb),
    writeback_cache_memory_size_mb: cdktf.numberToTerraform(struct!.writebackCacheMemorySizeMb),
  }
}


export function machineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheToHclTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    writeback_cache_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writeback_cache_memory_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.writebackCacheMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writebackCacheDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheDiskSizeGb = this._writebackCacheDiskSizeGb;
    }
    if (this._writebackCacheMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCacheMemorySizeMb = this._writebackCacheMemorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = undefined;
      this._writebackCacheMemorySizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writebackCacheDiskSizeGb = value.writebackCacheDiskSizeGb;
      this._writebackCacheMemorySizeMb = value.writebackCacheMemorySizeMb;
    }
  }

  // writeback_cache_disk_size_gb - computed: false, optional: false, required: true
  private _writebackCacheDiskSizeGb?: number; 
  public get writebackCacheDiskSizeGb() {
    return this.getNumberAttribute('writeback_cache_disk_size_gb');
  }
  public set writebackCacheDiskSizeGb(value: number) {
    this._writebackCacheDiskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheDiskSizeGbInput() {
    return this._writebackCacheDiskSizeGb;
  }

  // writeback_cache_memory_size_mb - computed: false, optional: false, required: true
  private _writebackCacheMemorySizeMb?: number; 
  public get writebackCacheMemorySizeMb() {
    return this.getNumberAttribute('writeback_cache_memory_size_mb');
  }
  public set writebackCacheMemorySizeMb(value: number) {
    this._writebackCacheMemorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheMemorySizeMbInput() {
    return this._writebackCacheMemorySizeMb;
  }
}
export interface MachineCatalogProvisioningSchemeXenserverMachineConfig {
  /**
  * Number of CPU cores for the VDA VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#cpu_count MachineCatalog#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * The Snapshot of the virtual machine specified in `master_image_vm`. Specify the relative path of the snapshot. Eg: snaphost-1/snapshot-2/snapshot-3. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_snapshot MachineCatalog#image_snapshot}
  */
  readonly imageSnapshot?: string;
  /**
  * The options for how rebooting is performed for image update. When omitted, image update on the VDAs will be performed on next shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#image_update_reboot_options MachineCatalog#image_update_reboot_options}
  */
  readonly imageUpdateRebootOptions?: MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions;
  /**
  * The note for the master image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_note MachineCatalog#master_image_note}
  */
  readonly masterImageNote?: string;
  /**
  * The name of the virtual machine that will be used as master image. This property is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#master_image_vm MachineCatalog#master_image_vm}
  */
  readonly masterImageVm: string;
  /**
  * Size of the memory in MB for the VDA VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#memory_mb MachineCatalog#memory_mb}
  */
  readonly memoryMb: number;
  /**
  * Specify if virtual machines created from the provisioning scheme should be created using the dedicated full disk clone feature. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#use_full_disk_clone_provisioning MachineCatalog#use_full_disk_clone_provisioning}
  */
  readonly useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Write-back Cache config. Leave this empty to disable Write-back Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#writeback_cache MachineCatalog#writeback_cache}
  */
  readonly writebackCache?: MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache;
}

export function machineCatalogProvisioningSchemeXenserverMachineConfigToTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    image_snapshot: cdktf.stringToTerraform(struct!.imageSnapshot),
    image_update_reboot_options: machineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsToTerraform(struct!.imageUpdateRebootOptions),
    master_image_note: cdktf.stringToTerraform(struct!.masterImageNote),
    master_image_vm: cdktf.stringToTerraform(struct!.masterImageVm),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    use_full_disk_clone_provisioning: cdktf.booleanToTerraform(struct!.useFullDiskCloneProvisioning),
    writeback_cache: machineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheToTerraform(struct!.writebackCache),
  }
}


export function machineCatalogProvisioningSchemeXenserverMachineConfigToHclTerraform(struct?: MachineCatalogProvisioningSchemeXenserverMachineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.imageSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_update_reboot_options: {
      value: machineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsToHclTerraform(struct!.imageUpdateRebootOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions",
    },
    master_image_note: {
      value: cdktf.stringToHclTerraform(struct!.masterImageNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_image_vm: {
      value: cdktf.stringToHclTerraform(struct!.masterImageVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_full_disk_clone_provisioning: {
      value: cdktf.booleanToHclTerraform(struct!.useFullDiskCloneProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writeback_cache: {
      value: machineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheToHclTerraform(struct!.writebackCache),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeXenserverMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningSchemeXenserverMachineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imageSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSnapshot = this._imageSnapshot;
    }
    if (this._imageUpdateRebootOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUpdateRebootOptions = this._imageUpdateRebootOptions?.internalValue;
    }
    if (this._masterImageNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageNote = this._masterImageNote;
    }
    if (this._masterImageVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterImageVm = this._masterImageVm;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._useFullDiskCloneProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFullDiskCloneProvisioning = this._useFullDiskCloneProvisioning;
    }
    if (this._writebackCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackCache = this._writebackCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningSchemeXenserverMachineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCount = undefined;
      this._imageSnapshot = undefined;
      this._imageUpdateRebootOptions.internalValue = undefined;
      this._masterImageNote = undefined;
      this._masterImageVm = undefined;
      this._memoryMb = undefined;
      this._useFullDiskCloneProvisioning = undefined;
      this._writebackCache.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCount = value.cpuCount;
      this._imageSnapshot = value.imageSnapshot;
      this._imageUpdateRebootOptions.internalValue = value.imageUpdateRebootOptions;
      this._masterImageNote = value.masterImageNote;
      this._masterImageVm = value.masterImageVm;
      this._memoryMb = value.memoryMb;
      this._useFullDiskCloneProvisioning = value.useFullDiskCloneProvisioning;
      this._writebackCache.internalValue = value.writebackCache;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // image_snapshot - computed: true, optional: true, required: false
  private _imageSnapshot?: string; 
  public get imageSnapshot() {
    return this.getStringAttribute('image_snapshot');
  }
  public set imageSnapshot(value: string) {
    this._imageSnapshot = value;
  }
  public resetImageSnapshot() {
    this._imageSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSnapshotInput() {
    return this._imageSnapshot;
  }

  // image_update_reboot_options - computed: false, optional: true, required: false
  private _imageUpdateRebootOptions = new MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptionsOutputReference(this, "image_update_reboot_options");
  public get imageUpdateRebootOptions() {
    return this._imageUpdateRebootOptions;
  }
  public putImageUpdateRebootOptions(value: MachineCatalogProvisioningSchemeXenserverMachineConfigImageUpdateRebootOptions) {
    this._imageUpdateRebootOptions.internalValue = value;
  }
  public resetImageUpdateRebootOptions() {
    this._imageUpdateRebootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUpdateRebootOptionsInput() {
    return this._imageUpdateRebootOptions.internalValue;
  }

  // master_image_note - computed: true, optional: true, required: false
  private _masterImageNote?: string; 
  public get masterImageNote() {
    return this.getStringAttribute('master_image_note');
  }
  public set masterImageNote(value: string) {
    this._masterImageNote = value;
  }
  public resetMasterImageNote() {
    this._masterImageNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageNoteInput() {
    return this._masterImageNote;
  }

  // master_image_vm - computed: false, optional: false, required: true
  private _masterImageVm?: string; 
  public get masterImageVm() {
    return this.getStringAttribute('master_image_vm');
  }
  public set masterImageVm(value: string) {
    this._masterImageVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterImageVmInput() {
    return this._masterImageVm;
  }

  // memory_mb - computed: false, optional: false, required: true
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // use_full_disk_clone_provisioning - computed: true, optional: true, required: false
  private _useFullDiskCloneProvisioning?: boolean | cdktf.IResolvable; 
  public get useFullDiskCloneProvisioning() {
    return this.getBooleanAttribute('use_full_disk_clone_provisioning');
  }
  public set useFullDiskCloneProvisioning(value: boolean | cdktf.IResolvable) {
    this._useFullDiskCloneProvisioning = value;
  }
  public resetUseFullDiskCloneProvisioning() {
    this._useFullDiskCloneProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFullDiskCloneProvisioningInput() {
    return this._useFullDiskCloneProvisioning;
  }

  // writeback_cache - computed: false, optional: true, required: false
  private _writebackCache = new MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCacheOutputReference(this, "writeback_cache");
  public get writebackCache() {
    return this._writebackCache;
  }
  public putWritebackCache(value: MachineCatalogProvisioningSchemeXenserverMachineConfigWritebackCache) {
    this._writebackCache.internalValue = value;
  }
  public resetWritebackCache() {
    this._writebackCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackCacheInput() {
    return this._writebackCache.internalValue;
  }
}
export interface MachineCatalogProvisioningScheme {
  /**
  * Machine Configuration for Amazon Workspaces Core catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#amazon_workspaces_core_machine_config MachineCatalog#amazon_workspaces_core_machine_config}
  */
  readonly amazonWorkspacesCoreMachineConfig?: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig;
  /**
  * Synchronizes the properties of all existing virtual machines with the provisioning scheme and then reboots those machines. This also includes any changes made with Set-ProvScheme or Set-ProvVM.
  * 
  * ~> **Please Note** As long as this property is set to true, any update to the machine catalog (even outside of the provisioning scheme) will trigger an immediate reboot of all existing machines that are powered on and can disrupt any active sessions. It is safest to turn this property to `true`, run `apply` to update the existing machines, then turn it to `false`. Since the property is read from the resource plan, subsequent `apply` operations will not trigger an update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#apply_updates_to_existing_machines MachineCatalog#apply_updates_to_existing_machines}
  */
  readonly applyUpdatesToExistingMachines?: boolean | cdktf.IResolvable;
  /**
  * The Availability Zones for provisioning virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#availability_zones MachineCatalog#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Machine Configuration For AWS EC2 MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#aws_machine_config MachineCatalog#aws_machine_config}
  */
  readonly awsMachineConfig?: MachineCatalogProvisioningSchemeAwsMachineConfig;
  /**
  * Machine Configuration For Azure MCS and PVS Streaming catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#azure_machine_config MachineCatalog#azure_machine_config}
  */
  readonly azureMachineConfig?: MachineCatalogProvisioningSchemeAzureMachineConfig;
  /**
  * **This is an advanced feature. Use with caution.** Custom properties to be set for the machine catalog. For properties that are already supported as a terraform configuration field, please use terraform field instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#custom_properties MachineCatalog#custom_properties}
  */
  readonly customProperties?: MachineCatalogProvisioningSchemeCustomProperties[] | cdktf.IResolvable;
  /**
  * Machine Configuration For GCP MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#gcp_machine_config MachineCatalog#gcp_machine_config}
  */
  readonly gcpMachineConfig?: MachineCatalogProvisioningSchemeGcpMachineConfig;
  /**
  * Id of the hypervisor for creating the machines. Required only if using power managed machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#hypervisor MachineCatalog#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * Id of the hypervisor resource pool that will be used for provisioning operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#hypervisor_resource_pool MachineCatalog#hypervisor_resource_pool}
  */
  readonly hypervisorResourcePool: string;
  /**
  * The identity type of the machines to be created. Supported values are `ActiveDirectory`, `AzureAD`, and `HybridAzureAD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#identity_type MachineCatalog#identity_type}
  */
  readonly identityType: string;
  /**
  * Rules specifying how Active Directory machine accounts should be created when machines are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_account_creation_rules MachineCatalog#machine_account_creation_rules}
  */
  readonly machineAccountCreationRules?: MachineCatalogProvisioningSchemeMachineAccountCreationRules;
  /**
  * Existing machine account in the AD to be used. If specified for machine catalog creation, the number of machine AD accounts need to be greater or equals to the number of total machines. 
  * 
  * -> **Note** During machine catalog creation, if `machine_ad_accounts` is specified, the machine_account_creation_rules will not be applied. During update, machine accounts will be used first for new machines. If there is insufficient amount of machine accounts, then the machine account creation rules will be applied to create new machine accounts in the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_ad_accounts MachineCatalog#machine_ad_accounts}
  */
  readonly machineAdAccounts?: MachineCatalogProvisioningSchemeMachineAdAccounts[] | cdktf.IResolvable;
  /**
  * The domain identity for machines in the machine catalog.<br />Required when identity_type is set to `ActiveDirectory`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#machine_domain_identity MachineCatalog#machine_domain_identity}
  */
  readonly machineDomainIdentity?: MachineCatalogProvisioningSchemeMachineDomainIdentity;
  /**
  * Metadata for the Provisioning Scheme.
  * 
  *  **Please Note** In-Place update of metadata is only supported for Cloud environments and On-Premises DDC version 2505 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#metadata MachineCatalog#metadata}
  */
  readonly metadata?: MachineCatalogProvisioningSchemeMetadata[] | cdktf.IResolvable;
  /**
  * Specifies how the attached NICs are mapped to networks. If this parameter is omitted, provisioned VMs are created with a single NIC, which is mapped to the default network in the hypervisor resource pool. If this parameter is supplied, machines are created with the number of NICs specified in the map, and each NIC is attached to the specified network.<br />Required when `provisioning_scheme.identity_type` is `AzureAD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#network_mapping MachineCatalog#network_mapping}
  */
  readonly networkMapping?: MachineCatalogProvisioningSchemeNetworkMapping[] | cdktf.IResolvable;
  /**
  * Number of VDA machines allocated in the catalog.
  * 
  * ~> **Please Note** When deleting machines, ensure machines that need to be deleted have no active sessions. For machines with `Static` allocation type, also ensure there are no assigned users.<br /><br />If machines that qualify for deletion are more than the requested number of machines to delete, machines are chosen in the following sequence of priority.<br />1. Machines with no associated Delivery Groups.<br />2. Machines in Maintenance Mode.<br />3. Machines with no active sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#number_of_total_machines MachineCatalog#number_of_total_machines}
  */
  readonly numberOfTotalMachines: number;
  /**
  * Machine Configuration For Nutanix MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#nutanix_machine_config MachineCatalog#nutanix_machine_config}
  */
  readonly nutanixMachineConfig?: MachineCatalogProvisioningSchemeNutanixMachineConfig;
  /**
  * Machine Configuration For OpenShift MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#openshift_machine_config MachineCatalog#openshift_machine_config}
  */
  readonly openshiftMachineConfig?: MachineCatalogProvisioningSchemeOpenshiftMachineConfig;
  /**
  * Machine Configuration for SCVMM MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#scvmm_machine_config MachineCatalog#scvmm_machine_config}
  */
  readonly scvmmMachineConfig?: MachineCatalogProvisioningSchemeScvmmMachineConfig;
  /**
  * Machine Configuration for vSphere MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#vsphere_machine_config MachineCatalog#vsphere_machine_config}
  */
  readonly vsphereMachineConfig?: MachineCatalogProvisioningSchemeVsphereMachineConfig;
  /**
  * Machine Configuration For XenServer MCS catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#xenserver_machine_config MachineCatalog#xenserver_machine_config}
  */
  readonly xenserverMachineConfig?: MachineCatalogProvisioningSchemeXenserverMachineConfig;
}

export function machineCatalogProvisioningSchemeToTerraform(struct?: MachineCatalogProvisioningScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_workspaces_core_machine_config: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigToTerraform(struct!.amazonWorkspacesCoreMachineConfig),
    apply_updates_to_existing_machines: cdktf.booleanToTerraform(struct!.applyUpdatesToExistingMachines),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    aws_machine_config: machineCatalogProvisioningSchemeAwsMachineConfigToTerraform(struct!.awsMachineConfig),
    azure_machine_config: machineCatalogProvisioningSchemeAzureMachineConfigToTerraform(struct!.azureMachineConfig),
    custom_properties: cdktf.listMapper(machineCatalogProvisioningSchemeCustomPropertiesToTerraform, false)(struct!.customProperties),
    gcp_machine_config: machineCatalogProvisioningSchemeGcpMachineConfigToTerraform(struct!.gcpMachineConfig),
    hypervisor: cdktf.stringToTerraform(struct!.hypervisor),
    hypervisor_resource_pool: cdktf.stringToTerraform(struct!.hypervisorResourcePool),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    machine_account_creation_rules: machineCatalogProvisioningSchemeMachineAccountCreationRulesToTerraform(struct!.machineAccountCreationRules),
    machine_ad_accounts: cdktf.listMapper(machineCatalogProvisioningSchemeMachineAdAccountsToTerraform, false)(struct!.machineAdAccounts),
    machine_domain_identity: machineCatalogProvisioningSchemeMachineDomainIdentityToTerraform(struct!.machineDomainIdentity),
    metadata: cdktf.listMapper(machineCatalogProvisioningSchemeMetadataToTerraform, false)(struct!.metadata),
    network_mapping: cdktf.listMapper(machineCatalogProvisioningSchemeNetworkMappingToTerraform, false)(struct!.networkMapping),
    number_of_total_machines: cdktf.numberToTerraform(struct!.numberOfTotalMachines),
    nutanix_machine_config: machineCatalogProvisioningSchemeNutanixMachineConfigToTerraform(struct!.nutanixMachineConfig),
    openshift_machine_config: machineCatalogProvisioningSchemeOpenshiftMachineConfigToTerraform(struct!.openshiftMachineConfig),
    scvmm_machine_config: machineCatalogProvisioningSchemeScvmmMachineConfigToTerraform(struct!.scvmmMachineConfig),
    vsphere_machine_config: machineCatalogProvisioningSchemeVsphereMachineConfigToTerraform(struct!.vsphereMachineConfig),
    xenserver_machine_config: machineCatalogProvisioningSchemeXenserverMachineConfigToTerraform(struct!.xenserverMachineConfig),
  }
}


export function machineCatalogProvisioningSchemeToHclTerraform(struct?: MachineCatalogProvisioningScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_workspaces_core_machine_config: {
      value: machineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigToHclTerraform(struct!.amazonWorkspacesCoreMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig",
    },
    apply_updates_to_existing_machines: {
      value: cdktf.booleanToHclTerraform(struct!.applyUpdatesToExistingMachines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aws_machine_config: {
      value: machineCatalogProvisioningSchemeAwsMachineConfigToHclTerraform(struct!.awsMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAwsMachineConfig",
    },
    azure_machine_config: {
      value: machineCatalogProvisioningSchemeAzureMachineConfigToHclTerraform(struct!.azureMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeAzureMachineConfig",
    },
    custom_properties: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeCustomPropertiesToHclTerraform, false)(struct!.customProperties),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeCustomPropertiesList",
    },
    gcp_machine_config: {
      value: machineCatalogProvisioningSchemeGcpMachineConfigToHclTerraform(struct!.gcpMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeGcpMachineConfig",
    },
    hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.hypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorResourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_account_creation_rules: {
      value: machineCatalogProvisioningSchemeMachineAccountCreationRulesToHclTerraform(struct!.machineAccountCreationRules),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeMachineAccountCreationRules",
    },
    machine_ad_accounts: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeMachineAdAccountsToHclTerraform, false)(struct!.machineAdAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeMachineAdAccountsList",
    },
    machine_domain_identity: {
      value: machineCatalogProvisioningSchemeMachineDomainIdentityToHclTerraform(struct!.machineDomainIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeMachineDomainIdentity",
    },
    metadata: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeMetadataList",
    },
    network_mapping: {
      value: cdktf.listMapperHcl(machineCatalogProvisioningSchemeNetworkMappingToHclTerraform, false)(struct!.networkMapping),
      isBlock: true,
      type: "list",
      storageClassType: "MachineCatalogProvisioningSchemeNetworkMappingList",
    },
    number_of_total_machines: {
      value: cdktf.numberToHclTerraform(struct!.numberOfTotalMachines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nutanix_machine_config: {
      value: machineCatalogProvisioningSchemeNutanixMachineConfigToHclTerraform(struct!.nutanixMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeNutanixMachineConfig",
    },
    openshift_machine_config: {
      value: machineCatalogProvisioningSchemeOpenshiftMachineConfigToHclTerraform(struct!.openshiftMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeOpenshiftMachineConfig",
    },
    scvmm_machine_config: {
      value: machineCatalogProvisioningSchemeScvmmMachineConfigToHclTerraform(struct!.scvmmMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeScvmmMachineConfig",
    },
    vsphere_machine_config: {
      value: machineCatalogProvisioningSchemeVsphereMachineConfigToHclTerraform(struct!.vsphereMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeVsphereMachineConfig",
    },
    xenserver_machine_config: {
      value: machineCatalogProvisioningSchemeXenserverMachineConfigToHclTerraform(struct!.xenserverMachineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MachineCatalogProvisioningSchemeXenserverMachineConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogProvisioningSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogProvisioningScheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonWorkspacesCoreMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonWorkspacesCoreMachineConfig = this._amazonWorkspacesCoreMachineConfig?.internalValue;
    }
    if (this._applyUpdatesToExistingMachines !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyUpdatesToExistingMachines = this._applyUpdatesToExistingMachines;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._awsMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsMachineConfig = this._awsMachineConfig?.internalValue;
    }
    if (this._azureMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMachineConfig = this._azureMachineConfig?.internalValue;
    }
    if (this._customProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties?.internalValue;
    }
    if (this._gcpMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpMachineConfig = this._gcpMachineConfig?.internalValue;
    }
    if (this._hypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor;
    }
    if (this._hypervisorResourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorResourcePool = this._hypervisorResourcePool;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._machineAccountCreationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineAccountCreationRules = this._machineAccountCreationRules?.internalValue;
    }
    if (this._machineAdAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineAdAccounts = this._machineAdAccounts?.internalValue;
    }
    if (this._machineDomainIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDomainIdentity = this._machineDomainIdentity?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._networkMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMapping = this._networkMapping?.internalValue;
    }
    if (this._numberOfTotalMachines !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfTotalMachines = this._numberOfTotalMachines;
    }
    if (this._nutanixMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nutanixMachineConfig = this._nutanixMachineConfig?.internalValue;
    }
    if (this._openshiftMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshiftMachineConfig = this._openshiftMachineConfig?.internalValue;
    }
    if (this._scvmmMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scvmmMachineConfig = this._scvmmMachineConfig?.internalValue;
    }
    if (this._vsphereMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereMachineConfig = this._vsphereMachineConfig?.internalValue;
    }
    if (this._xenserverMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xenserverMachineConfig = this._xenserverMachineConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogProvisioningScheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonWorkspacesCoreMachineConfig.internalValue = undefined;
      this._applyUpdatesToExistingMachines = undefined;
      this._availabilityZones = undefined;
      this._awsMachineConfig.internalValue = undefined;
      this._azureMachineConfig.internalValue = undefined;
      this._customProperties.internalValue = undefined;
      this._gcpMachineConfig.internalValue = undefined;
      this._hypervisor = undefined;
      this._hypervisorResourcePool = undefined;
      this._identityType = undefined;
      this._machineAccountCreationRules.internalValue = undefined;
      this._machineAdAccounts.internalValue = undefined;
      this._machineDomainIdentity.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._networkMapping.internalValue = undefined;
      this._numberOfTotalMachines = undefined;
      this._nutanixMachineConfig.internalValue = undefined;
      this._openshiftMachineConfig.internalValue = undefined;
      this._scvmmMachineConfig.internalValue = undefined;
      this._vsphereMachineConfig.internalValue = undefined;
      this._xenserverMachineConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonWorkspacesCoreMachineConfig.internalValue = value.amazonWorkspacesCoreMachineConfig;
      this._applyUpdatesToExistingMachines = value.applyUpdatesToExistingMachines;
      this._availabilityZones = value.availabilityZones;
      this._awsMachineConfig.internalValue = value.awsMachineConfig;
      this._azureMachineConfig.internalValue = value.azureMachineConfig;
      this._customProperties.internalValue = value.customProperties;
      this._gcpMachineConfig.internalValue = value.gcpMachineConfig;
      this._hypervisor = value.hypervisor;
      this._hypervisorResourcePool = value.hypervisorResourcePool;
      this._identityType = value.identityType;
      this._machineAccountCreationRules.internalValue = value.machineAccountCreationRules;
      this._machineAdAccounts.internalValue = value.machineAdAccounts;
      this._machineDomainIdentity.internalValue = value.machineDomainIdentity;
      this._metadata.internalValue = value.metadata;
      this._networkMapping.internalValue = value.networkMapping;
      this._numberOfTotalMachines = value.numberOfTotalMachines;
      this._nutanixMachineConfig.internalValue = value.nutanixMachineConfig;
      this._openshiftMachineConfig.internalValue = value.openshiftMachineConfig;
      this._scvmmMachineConfig.internalValue = value.scvmmMachineConfig;
      this._vsphereMachineConfig.internalValue = value.vsphereMachineConfig;
      this._xenserverMachineConfig.internalValue = value.xenserverMachineConfig;
    }
  }

  // amazon_workspaces_core_machine_config - computed: false, optional: true, required: false
  private _amazonWorkspacesCoreMachineConfig = new MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfigOutputReference(this, "amazon_workspaces_core_machine_config");
  public get amazonWorkspacesCoreMachineConfig() {
    return this._amazonWorkspacesCoreMachineConfig;
  }
  public putAmazonWorkspacesCoreMachineConfig(value: MachineCatalogProvisioningSchemeAmazonWorkspacesCoreMachineConfig) {
    this._amazonWorkspacesCoreMachineConfig.internalValue = value;
  }
  public resetAmazonWorkspacesCoreMachineConfig() {
    this._amazonWorkspacesCoreMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonWorkspacesCoreMachineConfigInput() {
    return this._amazonWorkspacesCoreMachineConfig.internalValue;
  }

  // apply_updates_to_existing_machines - computed: false, optional: true, required: false
  private _applyUpdatesToExistingMachines?: boolean | cdktf.IResolvable; 
  public get applyUpdatesToExistingMachines() {
    return this.getBooleanAttribute('apply_updates_to_existing_machines');
  }
  public set applyUpdatesToExistingMachines(value: boolean | cdktf.IResolvable) {
    this._applyUpdatesToExistingMachines = value;
  }
  public resetApplyUpdatesToExistingMachines() {
    this._applyUpdatesToExistingMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyUpdatesToExistingMachinesInput() {
    return this._applyUpdatesToExistingMachines;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // aws_machine_config - computed: false, optional: true, required: false
  private _awsMachineConfig = new MachineCatalogProvisioningSchemeAwsMachineConfigOutputReference(this, "aws_machine_config");
  public get awsMachineConfig() {
    return this._awsMachineConfig;
  }
  public putAwsMachineConfig(value: MachineCatalogProvisioningSchemeAwsMachineConfig) {
    this._awsMachineConfig.internalValue = value;
  }
  public resetAwsMachineConfig() {
    this._awsMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMachineConfigInput() {
    return this._awsMachineConfig.internalValue;
  }

  // azure_machine_config - computed: false, optional: true, required: false
  private _azureMachineConfig = new MachineCatalogProvisioningSchemeAzureMachineConfigOutputReference(this, "azure_machine_config");
  public get azureMachineConfig() {
    return this._azureMachineConfig;
  }
  public putAzureMachineConfig(value: MachineCatalogProvisioningSchemeAzureMachineConfig) {
    this._azureMachineConfig.internalValue = value;
  }
  public resetAzureMachineConfig() {
    this._azureMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMachineConfigInput() {
    return this._azureMachineConfig.internalValue;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new MachineCatalogProvisioningSchemeCustomPropertiesList(this, "custom_properties", false);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: MachineCatalogProvisioningSchemeCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // gcp_machine_config - computed: false, optional: true, required: false
  private _gcpMachineConfig = new MachineCatalogProvisioningSchemeGcpMachineConfigOutputReference(this, "gcp_machine_config");
  public get gcpMachineConfig() {
    return this._gcpMachineConfig;
  }
  public putGcpMachineConfig(value: MachineCatalogProvisioningSchemeGcpMachineConfig) {
    this._gcpMachineConfig.internalValue = value;
  }
  public resetGcpMachineConfig() {
    this._gcpMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpMachineConfigInput() {
    return this._gcpMachineConfig.internalValue;
  }

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // hypervisor_resource_pool - computed: false, optional: false, required: true
  private _hypervisorResourcePool?: string; 
  public get hypervisorResourcePool() {
    return this.getStringAttribute('hypervisor_resource_pool');
  }
  public set hypervisorResourcePool(value: string) {
    this._hypervisorResourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorResourcePoolInput() {
    return this._hypervisorResourcePool;
  }

  // identity_type - computed: false, optional: false, required: true
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // machine_account_creation_rules - computed: false, optional: true, required: false
  private _machineAccountCreationRules = new MachineCatalogProvisioningSchemeMachineAccountCreationRulesOutputReference(this, "machine_account_creation_rules");
  public get machineAccountCreationRules() {
    return this._machineAccountCreationRules;
  }
  public putMachineAccountCreationRules(value: MachineCatalogProvisioningSchemeMachineAccountCreationRules) {
    this._machineAccountCreationRules.internalValue = value;
  }
  public resetMachineAccountCreationRules() {
    this._machineAccountCreationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAccountCreationRulesInput() {
    return this._machineAccountCreationRules.internalValue;
  }

  // machine_ad_accounts - computed: false, optional: true, required: false
  private _machineAdAccounts = new MachineCatalogProvisioningSchemeMachineAdAccountsList(this, "machine_ad_accounts", false);
  public get machineAdAccounts() {
    return this._machineAdAccounts;
  }
  public putMachineAdAccounts(value: MachineCatalogProvisioningSchemeMachineAdAccounts[] | cdktf.IResolvable) {
    this._machineAdAccounts.internalValue = value;
  }
  public resetMachineAdAccounts() {
    this._machineAdAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAdAccountsInput() {
    return this._machineAdAccounts.internalValue;
  }

  // machine_domain_identity - computed: false, optional: true, required: false
  private _machineDomainIdentity = new MachineCatalogProvisioningSchemeMachineDomainIdentityOutputReference(this, "machine_domain_identity");
  public get machineDomainIdentity() {
    return this._machineDomainIdentity;
  }
  public putMachineDomainIdentity(value: MachineCatalogProvisioningSchemeMachineDomainIdentity) {
    this._machineDomainIdentity.internalValue = value;
  }
  public resetMachineDomainIdentity() {
    this._machineDomainIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDomainIdentityInput() {
    return this._machineDomainIdentity.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MachineCatalogProvisioningSchemeMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MachineCatalogProvisioningSchemeMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // network_mapping - computed: false, optional: true, required: false
  private _networkMapping = new MachineCatalogProvisioningSchemeNetworkMappingList(this, "network_mapping", false);
  public get networkMapping() {
    return this._networkMapping;
  }
  public putNetworkMapping(value: MachineCatalogProvisioningSchemeNetworkMapping[] | cdktf.IResolvable) {
    this._networkMapping.internalValue = value;
  }
  public resetNetworkMapping() {
    this._networkMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMappingInput() {
    return this._networkMapping.internalValue;
  }

  // number_of_total_machines - computed: false, optional: false, required: true
  private _numberOfTotalMachines?: number; 
  public get numberOfTotalMachines() {
    return this.getNumberAttribute('number_of_total_machines');
  }
  public set numberOfTotalMachines(value: number) {
    this._numberOfTotalMachines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfTotalMachinesInput() {
    return this._numberOfTotalMachines;
  }

  // nutanix_machine_config - computed: false, optional: true, required: false
  private _nutanixMachineConfig = new MachineCatalogProvisioningSchemeNutanixMachineConfigOutputReference(this, "nutanix_machine_config");
  public get nutanixMachineConfig() {
    return this._nutanixMachineConfig;
  }
  public putNutanixMachineConfig(value: MachineCatalogProvisioningSchemeNutanixMachineConfig) {
    this._nutanixMachineConfig.internalValue = value;
  }
  public resetNutanixMachineConfig() {
    this._nutanixMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nutanixMachineConfigInput() {
    return this._nutanixMachineConfig.internalValue;
  }

  // openshift_machine_config - computed: false, optional: true, required: false
  private _openshiftMachineConfig = new MachineCatalogProvisioningSchemeOpenshiftMachineConfigOutputReference(this, "openshift_machine_config");
  public get openshiftMachineConfig() {
    return this._openshiftMachineConfig;
  }
  public putOpenshiftMachineConfig(value: MachineCatalogProvisioningSchemeOpenshiftMachineConfig) {
    this._openshiftMachineConfig.internalValue = value;
  }
  public resetOpenshiftMachineConfig() {
    this._openshiftMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftMachineConfigInput() {
    return this._openshiftMachineConfig.internalValue;
  }

  // scvmm_machine_config - computed: false, optional: true, required: false
  private _scvmmMachineConfig = new MachineCatalogProvisioningSchemeScvmmMachineConfigOutputReference(this, "scvmm_machine_config");
  public get scvmmMachineConfig() {
    return this._scvmmMachineConfig;
  }
  public putScvmmMachineConfig(value: MachineCatalogProvisioningSchemeScvmmMachineConfig) {
    this._scvmmMachineConfig.internalValue = value;
  }
  public resetScvmmMachineConfig() {
    this._scvmmMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scvmmMachineConfigInput() {
    return this._scvmmMachineConfig.internalValue;
  }

  // vsphere_machine_config - computed: false, optional: true, required: false
  private _vsphereMachineConfig = new MachineCatalogProvisioningSchemeVsphereMachineConfigOutputReference(this, "vsphere_machine_config");
  public get vsphereMachineConfig() {
    return this._vsphereMachineConfig;
  }
  public putVsphereMachineConfig(value: MachineCatalogProvisioningSchemeVsphereMachineConfig) {
    this._vsphereMachineConfig.internalValue = value;
  }
  public resetVsphereMachineConfig() {
    this._vsphereMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereMachineConfigInput() {
    return this._vsphereMachineConfig.internalValue;
  }

  // xenserver_machine_config - computed: false, optional: true, required: false
  private _xenserverMachineConfig = new MachineCatalogProvisioningSchemeXenserverMachineConfigOutputReference(this, "xenserver_machine_config");
  public get xenserverMachineConfig() {
    return this._xenserverMachineConfig;
  }
  public putXenserverMachineConfig(value: MachineCatalogProvisioningSchemeXenserverMachineConfig) {
    this._xenserverMachineConfig.internalValue = value;
  }
  public resetXenserverMachineConfig() {
    this._xenserverMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xenserverMachineConfigInput() {
    return this._xenserverMachineConfig.internalValue;
  }
}
export interface MachineCatalogRemotePcOus {
  /**
  * Specify if subfolders should be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#include_subfolders MachineCatalog#include_subfolders}
  */
  readonly includeSubfolders: boolean | cdktf.IResolvable;
  /**
  * Name of the OU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#ou_name MachineCatalog#ou_name}
  */
  readonly ouName: string;
}

export function machineCatalogRemotePcOusToTerraform(struct?: MachineCatalogRemotePcOus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subfolders: cdktf.booleanToTerraform(struct!.includeSubfolders),
    ou_name: cdktf.stringToTerraform(struct!.ouName),
  }
}


export function machineCatalogRemotePcOusToHclTerraform(struct?: MachineCatalogRemotePcOus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_subfolders: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubfolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ou_name: {
      value: cdktf.stringToHclTerraform(struct!.ouName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogRemotePcOusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineCatalogRemotePcOus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubfolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubfolders = this._includeSubfolders;
    }
    if (this._ouName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ouName = this._ouName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogRemotePcOus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSubfolders = undefined;
      this._ouName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeSubfolders = value.includeSubfolders;
      this._ouName = value.ouName;
    }
  }

  // include_subfolders - computed: false, optional: false, required: true
  private _includeSubfolders?: boolean | cdktf.IResolvable; 
  public get includeSubfolders() {
    return this.getBooleanAttribute('include_subfolders');
  }
  public set includeSubfolders(value: boolean | cdktf.IResolvable) {
    this._includeSubfolders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubfoldersInput() {
    return this._includeSubfolders;
  }

  // ou_name - computed: false, optional: false, required: true
  private _ouName?: string; 
  public get ouName() {
    return this.getStringAttribute('ou_name');
  }
  public set ouName(value: string) {
    this._ouName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouNameInput() {
    return this._ouName;
  }
}

export class MachineCatalogRemotePcOusList extends cdktf.ComplexList {
  public internalValue? : MachineCatalogRemotePcOus[] | cdktf.IResolvable

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
  public get(index: number): MachineCatalogRemotePcOusOutputReference {
    return new MachineCatalogRemotePcOusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineCatalogTimeout {
  /**
  * Timeout in minutes for the long-running jobs in create operation. Defaults to 120. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#create MachineCatalog#create}
  */
  readonly create?: number;
  /**
  * Timeout in minutes for the long-running jobs in delete operation. Defaults to 60. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#delete MachineCatalog#delete}
  */
  readonly delete?: number;
  /**
  * Timeout in minutes for the long-running jobs in update operation. Defaults to 60. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#update MachineCatalog#update}
  */
  readonly update?: number;
}

export function machineCatalogTimeoutToTerraform(struct?: MachineCatalogTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
    update: cdktf.numberToTerraform(struct!.update),
  }
}


export function machineCatalogTimeoutToHclTerraform(struct?: MachineCatalogTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.numberToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCatalogTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineCatalogTimeout | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCatalogTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
    }
  }

  // create - computed: true, optional: true, required: false
  private _create?: number; 
  public get create() {
    return this.getNumberAttribute('create');
  }
  public set create(value: number) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: true, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog citrix_machine_catalog}
*/
export class MachineCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_machine_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineCatalog to import
  * @param importFromId The id of the existing MachineCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_machine_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/machine_catalog citrix_machine_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: MachineCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_machine_catalog',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationType = config.allocationType;
    this._deleteMachineAccounts = config.deleteMachineAccounts;
    this._deleteVirtualMachines = config.deleteVirtualMachines;
    this._description = config.description;
    this._isPowerManaged = config.isPowerManaged;
    this._isRemotePc = config.isRemotePc;
    this._machineAccounts.internalValue = config.machineAccounts;
    this._machineCatalogFolderPath = config.machineCatalogFolderPath;
    this._metadata.internalValue = config.metadata;
    this._minimumFunctionalLevel = config.minimumFunctionalLevel;
    this._name = config.name;
    this._persistUserChanges = config.persistUserChanges;
    this._provisioningScheme.internalValue = config.provisioningScheme;
    this._provisioningType = config.provisioningType;
    this._remotePcOus.internalValue = config.remotePcOus;
    this._remotePcPowerManagementHypervisor = config.remotePcPowerManagementHypervisor;
    this._scopes = config.scopes;
    this._sessionSupport = config.sessionSupport;
    this._tags = config.tags;
    this._timeout.internalValue = config.timeout;
    this._vdaUpgradeType = config.vdaUpgradeType;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: false, optional: false, required: true
  private _allocationType?: string; 
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }
  public set allocationType(value: string) {
    this._allocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTypeInput() {
    return this._allocationType;
  }

  // built_in_scopes - computed: true, optional: false, required: false
  public get builtInScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('built_in_scopes'));
  }

  // delete_machine_accounts - computed: true, optional: true, required: false
  private _deleteMachineAccounts?: string; 
  public get deleteMachineAccounts() {
    return this.getStringAttribute('delete_machine_accounts');
  }
  public set deleteMachineAccounts(value: string) {
    this._deleteMachineAccounts = value;
  }
  public resetDeleteMachineAccounts() {
    this._deleteMachineAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMachineAccountsInput() {
    return this._deleteMachineAccounts;
  }

  // delete_virtual_machines - computed: false, optional: true, required: false
  private _deleteVirtualMachines?: boolean | cdktf.IResolvable; 
  public get deleteVirtualMachines() {
    return this.getBooleanAttribute('delete_virtual_machines');
  }
  public set deleteVirtualMachines(value: boolean | cdktf.IResolvable) {
    this._deleteVirtualMachines = value;
  }
  public resetDeleteVirtualMachines() {
    this._deleteVirtualMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVirtualMachinesInput() {
    return this._deleteVirtualMachines;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited_scopes - computed: true, optional: false, required: false
  public get inheritedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('inherited_scopes'));
  }

  // is_power_managed - computed: false, optional: true, required: false
  private _isPowerManaged?: boolean | cdktf.IResolvable; 
  public get isPowerManaged() {
    return this.getBooleanAttribute('is_power_managed');
  }
  public set isPowerManaged(value: boolean | cdktf.IResolvable) {
    this._isPowerManaged = value;
  }
  public resetIsPowerManaged() {
    this._isPowerManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPowerManagedInput() {
    return this._isPowerManaged;
  }

  // is_remote_pc - computed: false, optional: true, required: false
  private _isRemotePc?: boolean | cdktf.IResolvable; 
  public get isRemotePc() {
    return this.getBooleanAttribute('is_remote_pc');
  }
  public set isRemotePc(value: boolean | cdktf.IResolvable) {
    this._isRemotePc = value;
  }
  public resetIsRemotePc() {
    this._isRemotePc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRemotePcInput() {
    return this._isRemotePc;
  }

  // machine_accounts - computed: false, optional: true, required: false
  private _machineAccounts = new MachineCatalogMachineAccountsList(this, "machine_accounts", false);
  public get machineAccounts() {
    return this._machineAccounts;
  }
  public putMachineAccounts(value: MachineCatalogMachineAccounts[] | cdktf.IResolvable) {
    this._machineAccounts.internalValue = value;
  }
  public resetMachineAccounts() {
    this._machineAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAccountsInput() {
    return this._machineAccounts.internalValue;
  }

  // machine_catalog_folder_path - computed: false, optional: true, required: false
  private _machineCatalogFolderPath?: string; 
  public get machineCatalogFolderPath() {
    return this.getStringAttribute('machine_catalog_folder_path');
  }
  public set machineCatalogFolderPath(value: string) {
    this._machineCatalogFolderPath = value;
  }
  public resetMachineCatalogFolderPath() {
    this._machineCatalogFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCatalogFolderPathInput() {
    return this._machineCatalogFolderPath;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MachineCatalogMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MachineCatalogMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // minimum_functional_level - computed: true, optional: true, required: false
  private _minimumFunctionalLevel?: string; 
  public get minimumFunctionalLevel() {
    return this.getStringAttribute('minimum_functional_level');
  }
  public set minimumFunctionalLevel(value: string) {
    this._minimumFunctionalLevel = value;
  }
  public resetMinimumFunctionalLevel() {
    this._minimumFunctionalLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFunctionalLevelInput() {
    return this._minimumFunctionalLevel;
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

  // persist_user_changes - computed: true, optional: true, required: false
  private _persistUserChanges?: string; 
  public get persistUserChanges() {
    return this.getStringAttribute('persist_user_changes');
  }
  public set persistUserChanges(value: string) {
    this._persistUserChanges = value;
  }
  public resetPersistUserChanges() {
    this._persistUserChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistUserChangesInput() {
    return this._persistUserChanges;
  }

  // provisioning_scheme - computed: false, optional: true, required: false
  private _provisioningScheme = new MachineCatalogProvisioningSchemeOutputReference(this, "provisioning_scheme");
  public get provisioningScheme() {
    return this._provisioningScheme;
  }
  public putProvisioningScheme(value: MachineCatalogProvisioningScheme) {
    this._provisioningScheme.internalValue = value;
  }
  public resetProvisioningScheme() {
    this._provisioningScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningSchemeInput() {
    return this._provisioningScheme.internalValue;
  }

  // provisioning_type - computed: false, optional: false, required: true
  private _provisioningType?: string; 
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }
  public set provisioningType(value: string) {
    this._provisioningType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTypeInput() {
    return this._provisioningType;
  }

  // remote_pc_ous - computed: false, optional: true, required: false
  private _remotePcOus = new MachineCatalogRemotePcOusList(this, "remote_pc_ous", false);
  public get remotePcOus() {
    return this._remotePcOus;
  }
  public putRemotePcOus(value: MachineCatalogRemotePcOus[] | cdktf.IResolvable) {
    this._remotePcOus.internalValue = value;
  }
  public resetRemotePcOus() {
    this._remotePcOus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePcOusInput() {
    return this._remotePcOus.internalValue;
  }

  // remote_pc_power_management_hypervisor - computed: false, optional: true, required: false
  private _remotePcPowerManagementHypervisor?: string; 
  public get remotePcPowerManagementHypervisor() {
    return this.getStringAttribute('remote_pc_power_management_hypervisor');
  }
  public set remotePcPowerManagementHypervisor(value: string) {
    this._remotePcPowerManagementHypervisor = value;
  }
  public resetRemotePcPowerManagementHypervisor() {
    this._remotePcPowerManagementHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePcPowerManagementHypervisorInput() {
    return this._remotePcPowerManagementHypervisor;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // session_support - computed: false, optional: false, required: true
  private _sessionSupport?: string; 
  public get sessionSupport() {
    return this.getStringAttribute('session_support');
  }
  public set sessionSupport(value: string) {
    this._sessionSupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSupportInput() {
    return this._sessionSupport;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new MachineCatalogTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: MachineCatalogTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // vda_upgrade_type - computed: false, optional: true, required: false
  private _vdaUpgradeType?: string; 
  public get vdaUpgradeType() {
    return this.getStringAttribute('vda_upgrade_type');
  }
  public set vdaUpgradeType(value: string) {
    this._vdaUpgradeType = value;
  }
  public resetVdaUpgradeType() {
    this._vdaUpgradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdaUpgradeTypeInput() {
    return this._vdaUpgradeType;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_type: cdktf.stringToTerraform(this._allocationType),
      delete_machine_accounts: cdktf.stringToTerraform(this._deleteMachineAccounts),
      delete_virtual_machines: cdktf.booleanToTerraform(this._deleteVirtualMachines),
      description: cdktf.stringToTerraform(this._description),
      is_power_managed: cdktf.booleanToTerraform(this._isPowerManaged),
      is_remote_pc: cdktf.booleanToTerraform(this._isRemotePc),
      machine_accounts: cdktf.listMapper(machineCatalogMachineAccountsToTerraform, false)(this._machineAccounts.internalValue),
      machine_catalog_folder_path: cdktf.stringToTerraform(this._machineCatalogFolderPath),
      metadata: cdktf.listMapper(machineCatalogMetadataToTerraform, false)(this._metadata.internalValue),
      minimum_functional_level: cdktf.stringToTerraform(this._minimumFunctionalLevel),
      name: cdktf.stringToTerraform(this._name),
      persist_user_changes: cdktf.stringToTerraform(this._persistUserChanges),
      provisioning_scheme: machineCatalogProvisioningSchemeToTerraform(this._provisioningScheme.internalValue),
      provisioning_type: cdktf.stringToTerraform(this._provisioningType),
      remote_pc_ous: cdktf.listMapper(machineCatalogRemotePcOusToTerraform, false)(this._remotePcOus.internalValue),
      remote_pc_power_management_hypervisor: cdktf.stringToTerraform(this._remotePcPowerManagementHypervisor),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      session_support: cdktf.stringToTerraform(this._sessionSupport),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeout: machineCatalogTimeoutToTerraform(this._timeout.internalValue),
      vda_upgrade_type: cdktf.stringToTerraform(this._vdaUpgradeType),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_type: {
        value: cdktf.stringToHclTerraform(this._allocationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_machine_accounts: {
        value: cdktf.stringToHclTerraform(this._deleteMachineAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_virtual_machines: {
        value: cdktf.booleanToHclTerraform(this._deleteVirtualMachines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_power_managed: {
        value: cdktf.booleanToHclTerraform(this._isPowerManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_remote_pc: {
        value: cdktf.booleanToHclTerraform(this._isRemotePc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_accounts: {
        value: cdktf.listMapperHcl(machineCatalogMachineAccountsToHclTerraform, false)(this._machineAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineCatalogMachineAccountsList",
      },
      machine_catalog_folder_path: {
        value: cdktf.stringToHclTerraform(this._machineCatalogFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.listMapperHcl(machineCatalogMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineCatalogMetadataList",
      },
      minimum_functional_level: {
        value: cdktf.stringToHclTerraform(this._minimumFunctionalLevel),
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
      persist_user_changes: {
        value: cdktf.stringToHclTerraform(this._persistUserChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_scheme: {
        value: machineCatalogProvisioningSchemeToHclTerraform(this._provisioningScheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineCatalogProvisioningScheme",
      },
      provisioning_type: {
        value: cdktf.stringToHclTerraform(this._provisioningType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_pc_ous: {
        value: cdktf.listMapperHcl(machineCatalogRemotePcOusToHclTerraform, false)(this._remotePcOus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineCatalogRemotePcOusList",
      },
      remote_pc_power_management_hypervisor: {
        value: cdktf.stringToHclTerraform(this._remotePcPowerManagementHypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_support: {
        value: cdktf.stringToHclTerraform(this._sessionSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout: {
        value: machineCatalogTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineCatalogTimeout",
      },
      vda_upgrade_type: {
        value: cdktf.stringToHclTerraform(this._vdaUpgradeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
