// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureCloudClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#cloud_account_id AzureCloudCluster#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#cluster_config AzureCloudCluster#cluster_config}
  */
  readonly clusterConfig: AzureCloudClusterClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#timeouts AzureCloudCluster#timeouts}
  */
  readonly timeouts?: AzureCloudClusterTimeouts;
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#vm_config AzureCloudCluster#vm_config}
  */
  readonly vmConfig: AzureCloudClusterVmConfig;
}
export interface AzureCloudClusterClusterConfig {
  /**
  * Email address for the cluster admin user. Changing this value will have no effect on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#admin_email AzureCloudCluster#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Password for the cluster admin user. Changing this value will have no effect on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#admin_password AzureCloudCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Unique name to assign to the cloud cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#cluster_name AzureCloudCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * DNS name servers for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#dns_name_servers AzureCloudCluster#dns_name_servers}
  */
  readonly dnsNameServers: string[];
  /**
  * DNS search domains for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#dns_search_domains AzureCloudCluster#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * Whether to keep the cluster on failure (can be useful for troubleshooting). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#keep_cluster_on_failure AzureCloudCluster#keep_cluster_on_failure}
  */
  readonly keepClusterOnFailure: boolean | cdktf.IResolvable;
  /**
  * NTP servers for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#ntp_servers AzureCloudCluster#ntp_servers}
  */
  readonly ntpServers: string[];
  /**
  * Number of nodes in the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#num_nodes AzureCloudCluster#num_nodes}
  */
  readonly numNodes: number;
}

export function azureCloudClusterClusterConfigToTerraform(struct?: AzureCloudClusterClusterConfigOutputReference | AzureCloudClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    dns_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNameServers),
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearchDomains),
    keep_cluster_on_failure: cdktf.booleanToTerraform(struct!.keepClusterOnFailure),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
    num_nodes: cdktf.numberToTerraform(struct!.numNodes),
  }
}


export function azureCloudClusterClusterConfigToHclTerraform(struct?: AzureCloudClusterClusterConfigOutputReference | AzureCloudClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNameServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearchDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keep_cluster_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.keepClusterOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    num_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCloudClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureCloudClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._dnsNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNameServers = this._dnsNameServers;
    }
    if (this._dnsSearchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
    }
    if (this._keepClusterOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepClusterOnFailure = this._keepClusterOnFailure;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    if (this._numNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNodes = this._numNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCloudClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._adminPassword = undefined;
      this._clusterName = undefined;
      this._dnsNameServers = undefined;
      this._dnsSearchDomains = undefined;
      this._keepClusterOnFailure = undefined;
      this._ntpServers = undefined;
      this._numNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._adminPassword = value.adminPassword;
      this._clusterName = value.clusterName;
      this._dnsNameServers = value.dnsNameServers;
      this._dnsSearchDomains = value.dnsSearchDomains;
      this._keepClusterOnFailure = value.keepClusterOnFailure;
      this._ntpServers = value.ntpServers;
      this._numNodes = value.numNodes;
    }
  }

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // dns_name_servers - computed: false, optional: false, required: true
  private _dnsNameServers?: string[]; 
  public get dnsNameServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_name_servers'));
  }
  public set dnsNameServers(value: string[]) {
    this._dnsNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // dns_search_domains - computed: false, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_search_domains'));
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // keep_cluster_on_failure - computed: false, optional: false, required: true
  private _keepClusterOnFailure?: boolean | cdktf.IResolvable; 
  public get keepClusterOnFailure() {
    return this.getBooleanAttribute('keep_cluster_on_failure');
  }
  public set keepClusterOnFailure(value: boolean | cdktf.IResolvable) {
    this._keepClusterOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepClusterOnFailureInput() {
    return this._keepClusterOnFailure;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntp_servers'));
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // num_nodes - computed: false, optional: false, required: true
  private _numNodes?: number; 
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodesInput() {
    return this._numNodes;
  }
}
export interface AzureCloudClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#create AzureCloudCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#default AzureCloudCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#read AzureCloudCluster#read}
  */
  readonly read?: string;
}

export function azureCloudClusterTimeoutsToTerraform(struct?: AzureCloudClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function azureCloudClusterTimeoutsToHclTerraform(struct?: AzureCloudClusterTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCloudClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureCloudClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCloudClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface AzureCloudClusterVmConfig {
  /**
  * CDM version to use. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#cdm_version AzureCloudCluster#cdm_version}
  */
  readonly cdmVersion: string;
  /**
  * Azure storage container name for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#container_name AzureCloudCluster#container_name}
  */
  readonly containerName: string;
  /**
  * Whether to enable immutability for the storage account. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#enable_immutability AzureCloudCluster#enable_immutability}
  */
  readonly enableImmutability: boolean | cdktf.IResolvable;
  /**
  * Azure instance type for the cluster nodes. Allowed values are `STANDARD_DS5_V2`, `STANDARD_D16S_V5`, `STANDARD_D8S_V5`, `STANDARD_D32S_V5`, `STANDARD_E16S_V5`, `STANDARD_D8AS_V5`, `STANDARD_D16AS_V5`, `STANDARD_D32AS_V5` and `STANDARD_E16AS_V5`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#instance_type AzureCloudCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Azure resource group name for network resources. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#network_resource_group AzureCloudCluster#network_resource_group}
  */
  readonly networkResourceGroup: string;
  /**
  * Azure network security group name. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#network_security_group AzureCloudCluster#network_security_group}
  */
  readonly networkSecurityGroup: string;
  /**
  * Azure resource group name for the network security group. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#network_security_resource_group AzureCloudCluster#network_security_resource_group}
  */
  readonly networkSecurityResourceGroup: string;
  /**
  * Azure region to deploy the cluster in. The format should be the native Azure format, e.g. `eastus`, `westus`, etc. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#region AzureCloudCluster#region}
  */
  readonly region: string;
  /**
  * Azure resource group name where the cluster will be deployed. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#resource_group_name AzureCloudCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Azure storage account name for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#storage_account_name AzureCloudCluster#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Azure subnet name for the cluster nodes. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#subnet AzureCloudCluster#subnet}
  */
  readonly subnet: string;
  /**
  * Name of the user-assigned managed identity. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#user_assigned_managed_identity_name AzureCloudCluster#user_assigned_managed_identity_name}
  */
  readonly userAssignedManagedIdentityName: string;
  /**
  * VM type for the cluster. Changing this forces a new resource to be created. Possible values are `STANDARD`, `DENSE` and `EXTRA_DENSE`. `EXTRA_DENSE` is recommended for CCES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#vm_type AzureCloudCluster#vm_type}
  */
  readonly vmType?: string;
  /**
  * Azure virtual network name. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#vnet AzureCloudCluster#vnet}
  */
  readonly vnet: string;
  /**
  * Azure resource group name for the virtual network. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#vnet_resource_group AzureCloudCluster#vnet_resource_group}
  */
  readonly vnetResourceGroup: string;
}

export function azureCloudClusterVmConfigToTerraform(struct?: AzureCloudClusterVmConfigOutputReference | AzureCloudClusterVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdm_version: cdktf.stringToTerraform(struct!.cdmVersion),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    enable_immutability: cdktf.booleanToTerraform(struct!.enableImmutability),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    network_resource_group: cdktf.stringToTerraform(struct!.networkResourceGroup),
    network_security_group: cdktf.stringToTerraform(struct!.networkSecurityGroup),
    network_security_resource_group: cdktf.stringToTerraform(struct!.networkSecurityResourceGroup),
    region: cdktf.stringToTerraform(struct!.region),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    user_assigned_managed_identity_name: cdktf.stringToTerraform(struct!.userAssignedManagedIdentityName),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
    vnet: cdktf.stringToTerraform(struct!.vnet),
    vnet_resource_group: cdktf.stringToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureCloudClusterVmConfigToHclTerraform(struct?: AzureCloudClusterVmConfigOutputReference | AzureCloudClusterVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdm_version: {
      value: cdktf.stringToHclTerraform(struct!.cdmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_immutability: {
      value: cdktf.booleanToHclTerraform(struct!.enableImmutability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_group: {
      value: cdktf.stringToHclTerraform(struct!.networkSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.networkSecurityResourceGroup),
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
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_managed_identity_name: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedManagedIdentityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet: {
      value: cdktf.stringToHclTerraform(struct!.vnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCloudClusterVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureCloudClusterVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdmVersion = this._cdmVersion;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._enableImmutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmutability = this._enableImmutability;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._networkResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroup = this._networkResourceGroup;
    }
    if (this._networkSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroup = this._networkSecurityGroup;
    }
    if (this._networkSecurityResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityResourceGroup = this._networkSecurityResourceGroup;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._userAssignedManagedIdentityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedManagedIdentityName = this._userAssignedManagedIdentityName;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    if (this._vnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCloudClusterVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdmVersion = undefined;
      this._containerName = undefined;
      this._enableImmutability = undefined;
      this._instanceType = undefined;
      this._networkResourceGroup = undefined;
      this._networkSecurityGroup = undefined;
      this._networkSecurityResourceGroup = undefined;
      this._region = undefined;
      this._resourceGroupName = undefined;
      this._storageAccountName = undefined;
      this._subnet = undefined;
      this._userAssignedManagedIdentityName = undefined;
      this._vmType = undefined;
      this._vnet = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdmVersion = value.cdmVersion;
      this._containerName = value.containerName;
      this._enableImmutability = value.enableImmutability;
      this._instanceType = value.instanceType;
      this._networkResourceGroup = value.networkResourceGroup;
      this._networkSecurityGroup = value.networkSecurityGroup;
      this._networkSecurityResourceGroup = value.networkSecurityResourceGroup;
      this._region = value.region;
      this._resourceGroupName = value.resourceGroupName;
      this._storageAccountName = value.storageAccountName;
      this._subnet = value.subnet;
      this._userAssignedManagedIdentityName = value.userAssignedManagedIdentityName;
      this._vmType = value.vmType;
      this._vnet = value.vnet;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // cdm_product - computed: true, optional: false, required: false
  public get cdmProduct() {
    return this.getStringAttribute('cdm_product');
  }

  // cdm_version - computed: false, optional: false, required: true
  private _cdmVersion?: string; 
  public get cdmVersion() {
    return this.getStringAttribute('cdm_version');
  }
  public set cdmVersion(value: string) {
    this._cdmVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmVersionInput() {
    return this._cdmVersion;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // enable_immutability - computed: false, optional: false, required: true
  private _enableImmutability?: boolean | cdktf.IResolvable; 
  public get enableImmutability() {
    return this.getBooleanAttribute('enable_immutability');
  }
  public set enableImmutability(value: boolean | cdktf.IResolvable) {
    this._enableImmutability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmutabilityInput() {
    return this._enableImmutability;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // network_resource_group - computed: false, optional: false, required: true
  private _networkResourceGroup?: string; 
  public get networkResourceGroup() {
    return this.getStringAttribute('network_resource_group');
  }
  public set networkResourceGroup(value: string) {
    this._networkResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupInput() {
    return this._networkResourceGroup;
  }

  // network_security_group - computed: false, optional: false, required: true
  private _networkSecurityGroup?: string; 
  public get networkSecurityGroup() {
    return this.getStringAttribute('network_security_group');
  }
  public set networkSecurityGroup(value: string) {
    this._networkSecurityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupInput() {
    return this._networkSecurityGroup;
  }

  // network_security_resource_group - computed: false, optional: false, required: true
  private _networkSecurityResourceGroup?: string; 
  public get networkSecurityResourceGroup() {
    return this.getStringAttribute('network_security_resource_group');
  }
  public set networkSecurityResourceGroup(value: string) {
    this._networkSecurityResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityResourceGroupInput() {
    return this._networkSecurityResourceGroup;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // user_assigned_managed_identity_name - computed: false, optional: false, required: true
  private _userAssignedManagedIdentityName?: string; 
  public get userAssignedManagedIdentityName() {
    return this.getStringAttribute('user_assigned_managed_identity_name');
  }
  public set userAssignedManagedIdentityName(value: string) {
    this._userAssignedManagedIdentityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedManagedIdentityNameInput() {
    return this._userAssignedManagedIdentityName;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // vnet - computed: false, optional: false, required: true
  private _vnet?: string; 
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
  public set vnet(value: string) {
    this._vnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }

  // vnet_resource_group - computed: false, optional: false, required: true
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster polaris_azure_cloud_cluster}
*/
export class AzureCloudCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_cloud_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureCloudCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureCloudCluster to import
  * @param importFromId The id of the existing AzureCloudCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureCloudCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_cloud_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/azure_cloud_cluster polaris_azure_cloud_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureCloudClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AzureCloudClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_cloud_cluster',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountId = config.cloudAccountId;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vmConfig.internalValue = config.vmConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new AzureCloudClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: AzureCloudClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureCloudClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureCloudClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vm_config - computed: false, optional: false, required: true
  private _vmConfig = new AzureCloudClusterVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: AzureCloudClusterVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      cluster_config: azureCloudClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: azureCloudClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vm_config: azureCloudClusterVmConfigToTerraform(this._vmConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config: {
        value: azureCloudClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCloudClusterClusterConfigList",
      },
      timeouts: {
        value: azureCloudClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureCloudClusterTimeouts",
      },
      vm_config: {
        value: azureCloudClusterVmConfigToHclTerraform(this._vmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCloudClusterVmConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
