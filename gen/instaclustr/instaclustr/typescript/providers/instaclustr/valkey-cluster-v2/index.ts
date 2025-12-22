// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ValkeyClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Enables Client ⇄ Node Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#client_to_node_encryption ValkeyClusterV2#client_to_node_encryption}
  */
  readonly clientToNodeEncryption: boolean | cdktf.IResolvable;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#current_cluster_operation_status ValkeyClusterV2#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#description ValkeyClusterV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#id ValkeyClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#name ValkeyClusterV2#name}
  */
  readonly name: string;
  /**
  * Enables Password Authentication and User Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#password_and_user_auth ValkeyClusterV2#password_and_user_auth}
  */
  readonly passwordAndUserAuth: boolean | cdktf.IResolvable;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#pci_compliance_mode ValkeyClusterV2#pci_compliance_mode}
  */
  readonly pciComplianceMode: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#private_network_cluster ValkeyClusterV2#private_network_cluster}
  */
  readonly privateNetworkCluster: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#sla_tier ValkeyClusterV2#sla_tier}
  */
  readonly slaTier: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#status ValkeyClusterV2#status}
  */
  readonly status?: string;
  /**
  * Version of Valkey to run on the cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#valkey_version ValkeyClusterV2#valkey_version}
  */
  readonly valkeyVersion: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#data_centre ValkeyClusterV2#data_centre}
  */
  readonly dataCentre: ValkeyClusterV2DataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#resize_settings ValkeyClusterV2#resize_settings}
  */
  readonly resizeSettings?: ValkeyClusterV2ResizeSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#timeouts ValkeyClusterV2#timeouts}
  */
  readonly timeouts?: ValkeyClusterV2Timeouts;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#two_factor_delete ValkeyClusterV2#two_factor_delete}
  */
  readonly twoFactorDelete?: ValkeyClusterV2TwoFactorDelete[] | cdktf.IResolvable;
}
export interface ValkeyClusterV2DataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#custom_virtual_network_id ValkeyClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#ebs_encryption_key ValkeyClusterV2#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function valkeyClusterV2DataCentreAwsSettingsToTerraform(struct?: ValkeyClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function valkeyClusterV2DataCentreAwsSettingsToHclTerraform(struct?: ValkeyClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.ebsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._ebsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryptionKey = this._ebsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._ebsEncryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._ebsEncryptionKey = value.ebsEncryptionKey;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // ebs_encryption_key - computed: false, optional: true, required: false
  private _ebsEncryptionKey?: string; 
  public get ebsEncryptionKey() {
    return this.getStringAttribute('ebs_encryption_key');
  }
  public set ebsEncryptionKey(value: string) {
    this._ebsEncryptionKey = value;
  }
  public resetEbsEncryptionKey() {
    this._ebsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyInput() {
    return this._ebsEncryptionKey;
  }
}

export class ValkeyClusterV2DataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreAwsSettingsOutputReference {
    return new ValkeyClusterV2DataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#custom_virtual_network_id ValkeyClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#resource_group ValkeyClusterV2#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#storage_network ValkeyClusterV2#storage_network}
  */
  readonly storageNetwork?: string;
}

export function valkeyClusterV2DataCentreAzureSettingsToTerraform(struct?: ValkeyClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_network: cdktf.stringToTerraform(struct!.storageNetwork),
  }
}


export function valkeyClusterV2DataCentreAzureSettingsToHclTerraform(struct?: ValkeyClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
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
    storage_network: {
      value: cdktf.stringToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._resourceGroup = undefined;
      this._storageNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._resourceGroup = value.resourceGroup;
      this._storageNetwork = value.storageNetwork;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_network - computed: false, optional: true, required: false
  private _storageNetwork?: string; 
  public get storageNetwork() {
    return this.getStringAttribute('storage_network');
  }
  public set storageNetwork(value: string) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }
}

export class ValkeyClusterV2DataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreAzureSettingsOutputReference {
    return new ValkeyClusterV2DataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#deletion_time ValkeyClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#id ValkeyClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#node_roles ValkeyClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#node_size ValkeyClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#private_address ValkeyClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#public_address ValkeyClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#rack ValkeyClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#start_time ValkeyClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#status ValkeyClusterV2#status}
  */
  readonly status?: string;
}

export function valkeyClusterV2DataCentreDeletedNodesToTerraform(struct?: ValkeyClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function valkeyClusterV2DataCentreDeletedNodesToHclTerraform(struct?: ValkeyClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ValkeyClusterV2DataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreDeletedNodesOutputReference {
    return new ValkeyClusterV2DataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentreGcpSettings {
  /**
  * Network name or a relative Network or Subnetwork URI.
  * The Data Centre's network allocation must match the IPv4 CIDR block of the specified subnet.
  * 
  * Examples:
  * - Network URI: <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Network name: <code>{network-name}</code>, equivalent to <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Same-project subnetwork URI: <code>projects/{riyoa-gcp-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * - Shared VPC subnetwork URI: <code>projects/{riyoa-gcp-host-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#custom_virtual_network_id ValkeyClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function valkeyClusterV2DataCentreGcpSettingsToTerraform(struct?: ValkeyClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function valkeyClusterV2DataCentreGcpSettingsToHclTerraform(struct?: ValkeyClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
    }
  }

  // custom_virtual_network_id - computed: false, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }
}

export class ValkeyClusterV2DataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreGcpSettingsOutputReference {
    return new ValkeyClusterV2DataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#deletion_time ValkeyClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#id ValkeyClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#node_roles ValkeyClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#node_size ValkeyClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#private_address ValkeyClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#public_address ValkeyClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#rack ValkeyClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#start_time ValkeyClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#status ValkeyClusterV2#status}
  */
  readonly status?: string;
}

export function valkeyClusterV2DataCentreNodesToTerraform(struct?: ValkeyClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function valkeyClusterV2DataCentreNodesToHclTerraform(struct?: ValkeyClusterV2DataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ValkeyClusterV2DataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreNodesOutputReference {
    return new ValkeyClusterV2DataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentrePrivateLink {
  /**
  * The hostname to be used to connect to the PrivateLink cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#advertised_hostname ValkeyClusterV2#advertised_hostname}
  */
  readonly advertisedHostname: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#end_point_service_id ValkeyClusterV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * Name of the created endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#end_point_service_name ValkeyClusterV2#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function valkeyClusterV2DataCentrePrivateLinkToTerraform(struct?: ValkeyClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_hostname: cdktf.stringToTerraform(struct!.advertisedHostname),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function valkeyClusterV2DataCentrePrivateLinkToHclTerraform(struct?: ValkeyClusterV2DataCentrePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_hostname: {
      value: cdktf.stringToHclTerraform(struct!.advertisedHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentrePrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedHostname = this._advertisedHostname;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentrePrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedHostname = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedHostname = value.advertisedHostname;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // advertised_hostname - computed: false, optional: false, required: true
  private _advertisedHostname?: string; 
  public get advertisedHostname() {
    return this.getStringAttribute('advertised_hostname');
  }
  public set advertisedHostname(value: string) {
    this._advertisedHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedHostnameInput() {
    return this._advertisedHostname;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class ValkeyClusterV2DataCentrePrivateLinkList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentrePrivateLink[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentrePrivateLinkOutputReference {
    return new ValkeyClusterV2DataCentrePrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#key ValkeyClusterV2#key}
  */
  readonly key: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#value ValkeyClusterV2#value}
  */
  readonly value?: string;
}

export function valkeyClusterV2DataCentreTagToTerraform(struct?: ValkeyClusterV2DataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function valkeyClusterV2DataCentreTagToHclTerraform(struct?: ValkeyClusterV2DataCentreTag | cdktf.IResolvable): any {
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

export class ValkeyClusterV2DataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentreTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentreTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class ValkeyClusterV2DataCentreTagList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreTagOutputReference {
    return new ValkeyClusterV2DataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2DataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#cloud_provider ValkeyClusterV2#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#id ValkeyClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total number of master nodes in the Data Centre. In order to maintain quorum on the cluster, you must specify an odd number of master nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#master_nodes ValkeyClusterV2#master_nodes}
  */
  readonly masterNodes: number;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#name ValkeyClusterV2#name}
  */
  readonly name: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#network ValkeyClusterV2#network}
  */
  readonly network: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>VAL-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.2xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.4xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.large-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-r6g.xlarge-200 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-Standard_D2s_v5-64 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E16s_v3-1024 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E2s_v3-128 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E4s_v3-256 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-standard_E8s_v3-512 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>VAL-DEV-n1-standard-1-30 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-16-600 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-2-100 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-4-200 </td> <td>General Availability</td> </tr> <tr> <td>VAL-PRD-n1-highmem-8-400 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#node_size ValkeyClusterV2#node_size}
  */
  readonly nodeSize: string;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#provider_account_name ValkeyClusterV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#region ValkeyClusterV2#region}
  */
  readonly region: string;
  /**
  * Total number of replica nodes in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#replica_nodes ValkeyClusterV2#replica_nodes}
  */
  readonly replicaNodes?: number;
  /**
  * The number of replica nodes that should be assigned for each master node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#replication_factor ValkeyClusterV2#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#status ValkeyClusterV2#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#tag_management_enabled ValkeyClusterV2#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#zero_inbound_access ValkeyClusterV2#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#aws_settings ValkeyClusterV2#aws_settings}
  */
  readonly awsSettings?: ValkeyClusterV2DataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#azure_settings ValkeyClusterV2#azure_settings}
  */
  readonly azureSettings?: ValkeyClusterV2DataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#deleted_nodes ValkeyClusterV2#deleted_nodes}
  */
  readonly deletedNodes?: ValkeyClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#gcp_settings ValkeyClusterV2#gcp_settings}
  */
  readonly gcpSettings?: ValkeyClusterV2DataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#nodes ValkeyClusterV2#nodes}
  */
  readonly nodes?: ValkeyClusterV2DataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#private_link ValkeyClusterV2#private_link}
  */
  readonly privateLink?: ValkeyClusterV2DataCentrePrivateLink[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#tag ValkeyClusterV2#tag}
  */
  readonly tag?: ValkeyClusterV2DataCentreTag[] | cdktf.IResolvable;
}

export function valkeyClusterV2DataCentreToTerraform(struct?: ValkeyClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    id: cdktf.stringToTerraform(struct!.id),
    master_nodes: cdktf.numberToTerraform(struct!.masterNodes),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    replica_nodes: cdktf.numberToTerraform(struct!.replicaNodes),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(valkeyClusterV2DataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(valkeyClusterV2DataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(valkeyClusterV2DataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(valkeyClusterV2DataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(valkeyClusterV2DataCentreNodesToTerraform, true)(struct!.nodes),
    private_link: cdktf.listMapper(valkeyClusterV2DataCentrePrivateLinkToTerraform, true)(struct!.privateLink),
    tag: cdktf.listMapper(valkeyClusterV2DataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function valkeyClusterV2DataCentreToHclTerraform(struct?: ValkeyClusterV2DataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_nodes: {
      value: cdktf.numberToHclTerraform(struct!.masterNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
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
    replica_nodes: {
      value: cdktf.numberToHclTerraform(struct!.replicaNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_management_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tagManagementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreNodesList",
    },
    private_link: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentrePrivateLinkToHclTerraform, true)(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentrePrivateLinkList",
    },
    tag: {
      value: cdktf.listMapperHcl(valkeyClusterV2DataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ValkeyClusterV2DataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2DataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2DataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._masterNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterNodes = this._masterNodes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicaNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaNodes = this._replicaNodes;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagManagementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagManagementEnabled = this._tagManagementEnabled;
    }
    if (this._zeroInboundAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInboundAccess = this._zeroInboundAccess;
    }
    if (this._awsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSettings = this._awsSettings?.internalValue;
    }
    if (this._azureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSettings = this._azureSettings?.internalValue;
    }
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2DataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._id = undefined;
      this._masterNodes = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._replicaNodes = undefined;
      this._replicationFactor = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateLink.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._id = value.id;
      this._masterNodes = value.masterNodes;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._replicaNodes = value.replicaNodes;
      this._replicationFactor = value.replicationFactor;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._privateLink.internalValue = value.privateLink;
      this._tag.internalValue = value.tag;
    }
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // master_nodes - computed: false, optional: false, required: true
  private _masterNodes?: number; 
  public get masterNodes() {
    return this.getNumberAttribute('master_nodes');
  }
  public set masterNodes(value: number) {
    this._masterNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes;
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

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
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

  // replica_nodes - computed: true, optional: true, required: false
  private _replicaNodes?: number; 
  public get replicaNodes() {
    return this.getNumberAttribute('replica_nodes');
  }
  public set replicaNodes(value: number) {
    this._replicaNodes = value;
  }
  public resetReplicaNodes() {
    this._replicaNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaNodesInput() {
    return this._replicaNodes;
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_management_enabled - computed: true, optional: true, required: false
  private _tagManagementEnabled?: boolean | cdktf.IResolvable; 
  public get tagManagementEnabled() {
    return this.getBooleanAttribute('tag_management_enabled');
  }
  public set tagManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._tagManagementEnabled = value;
  }
  public resetTagManagementEnabled() {
    this._tagManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagManagementEnabledInput() {
    return this._tagManagementEnabled;
  }

  // zero_inbound_access - computed: false, optional: true, required: false
  private _zeroInboundAccess?: boolean | cdktf.IResolvable; 
  public get zeroInboundAccess() {
    return this.getBooleanAttribute('zero_inbound_access');
  }
  public set zeroInboundAccess(value: boolean | cdktf.IResolvable) {
    this._zeroInboundAccess = value;
  }
  public resetZeroInboundAccess() {
    this._zeroInboundAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInboundAccessInput() {
    return this._zeroInboundAccess;
  }

  // aws_settings - computed: false, optional: true, required: false
  private _awsSettings = new ValkeyClusterV2DataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: ValkeyClusterV2DataCentreAwsSettings[] | cdktf.IResolvable) {
    this._awsSettings.internalValue = value;
  }
  public resetAwsSettings() {
    this._awsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSettingsInput() {
    return this._awsSettings.internalValue;
  }

  // azure_settings - computed: false, optional: true, required: false
  private _azureSettings = new ValkeyClusterV2DataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: ValkeyClusterV2DataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new ValkeyClusterV2DataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: ValkeyClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable) {
    this._deletedNodes.internalValue = value;
  }
  public resetDeletedNodes() {
    this._deletedNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedNodesInput() {
    return this._deletedNodes.internalValue;
  }

  // gcp_settings - computed: false, optional: true, required: false
  private _gcpSettings = new ValkeyClusterV2DataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: ValkeyClusterV2DataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new ValkeyClusterV2DataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ValkeyClusterV2DataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new ValkeyClusterV2DataCentrePrivateLinkList(this, "private_link", false);
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: ValkeyClusterV2DataCentrePrivateLink[] | cdktf.IResolvable) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ValkeyClusterV2DataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ValkeyClusterV2DataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class ValkeyClusterV2DataCentreList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2DataCentre[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2DataCentreOutputReference {
    return new ValkeyClusterV2DataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2ResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#concurrency ValkeyClusterV2#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#notify_support_contacts ValkeyClusterV2#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function valkeyClusterV2ResizeSettingsToTerraform(struct?: ValkeyClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function valkeyClusterV2ResizeSettingsToHclTerraform(struct?: ValkeyClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_support_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.notifySupportContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2ResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2ResizeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._notifySupportContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySupportContacts = this._notifySupportContacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2ResizeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._notifySupportContacts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._notifySupportContacts = value.notifySupportContacts;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // notify_support_contacts - computed: false, optional: true, required: false
  private _notifySupportContacts?: boolean | cdktf.IResolvable; 
  public get notifySupportContacts() {
    return this.getBooleanAttribute('notify_support_contacts');
  }
  public set notifySupportContacts(value: boolean | cdktf.IResolvable) {
    this._notifySupportContacts = value;
  }
  public resetNotifySupportContacts() {
    this._notifySupportContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySupportContactsInput() {
    return this._notifySupportContacts;
  }
}

export class ValkeyClusterV2ResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2ResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2ResizeSettingsOutputReference {
    return new ValkeyClusterV2ResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValkeyClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#create ValkeyClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#default ValkeyClusterV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#update ValkeyClusterV2#update}
  */
  readonly update?: string;
}

export function valkeyClusterV2TimeoutsToTerraform(struct?: ValkeyClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function valkeyClusterV2TimeoutsToHclTerraform(struct?: ValkeyClusterV2Timeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ValkeyClusterV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
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
export interface ValkeyClusterV2TwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#confirmation_email ValkeyClusterV2#confirmation_email}
  */
  readonly confirmationEmail: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#confirmation_phone_number ValkeyClusterV2#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function valkeyClusterV2TwoFactorDeleteToTerraform(struct?: ValkeyClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function valkeyClusterV2TwoFactorDeleteToHclTerraform(struct?: ValkeyClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_email: {
      value: cdktf.stringToHclTerraform(struct!.confirmationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.confirmationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ValkeyClusterV2TwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ValkeyClusterV2TwoFactorDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationEmail = this._confirmationEmail;
    }
    if (this._confirmationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationPhoneNumber = this._confirmationPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValkeyClusterV2TwoFactorDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationEmail = undefined;
      this._confirmationPhoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationEmail = value.confirmationEmail;
      this._confirmationPhoneNumber = value.confirmationPhoneNumber;
    }
  }

  // confirmation_email - computed: false, optional: false, required: true
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationEmailInput() {
    return this._confirmationEmail;
  }

  // confirmation_phone_number - computed: true, optional: true, required: false
  private _confirmationPhoneNumber?: string; 
  public get confirmationPhoneNumber() {
    return this.getStringAttribute('confirmation_phone_number');
  }
  public set confirmationPhoneNumber(value: string) {
    this._confirmationPhoneNumber = value;
  }
  public resetConfirmationPhoneNumber() {
    this._confirmationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPhoneNumberInput() {
    return this._confirmationPhoneNumber;
  }
}

export class ValkeyClusterV2TwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : ValkeyClusterV2TwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): ValkeyClusterV2TwoFactorDeleteOutputReference {
    return new ValkeyClusterV2TwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2 instaclustr_valkey_cluster_v2}
*/
export class ValkeyClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_valkey_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ValkeyClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ValkeyClusterV2 to import
  * @param importFromId The id of the existing ValkeyClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ValkeyClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_valkey_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/valkey_cluster_v2 instaclustr_valkey_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ValkeyClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ValkeyClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_valkey_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientToNodeEncryption = config.clientToNodeEncryption;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._passwordAndUserAuth = config.passwordAndUserAuth;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._valkeyVersion = config.valkeyVersion;
    this._dataCentre.internalValue = config.dataCentre;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._timeouts.internalValue = config.timeouts;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_to_node_encryption - computed: false, optional: false, required: true
  private _clientToNodeEncryption?: boolean | cdktf.IResolvable; 
  public get clientToNodeEncryption() {
    return this.getBooleanAttribute('client_to_node_encryption');
  }
  public set clientToNodeEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToNodeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToNodeEncryptionInput() {
    return this._clientToNodeEncryption;
  }

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
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

  // password_and_user_auth - computed: false, optional: false, required: true
  private _passwordAndUserAuth?: boolean | cdktf.IResolvable; 
  public get passwordAndUserAuth() {
    return this.getBooleanAttribute('password_and_user_auth');
  }
  public set passwordAndUserAuth(value: boolean | cdktf.IResolvable) {
    this._passwordAndUserAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAndUserAuthInput() {
    return this._passwordAndUserAuth;
  }

  // pci_compliance_mode - computed: false, optional: false, required: true
  private _pciComplianceMode?: boolean | cdktf.IResolvable; 
  public get pciComplianceMode() {
    return this.getBooleanAttribute('pci_compliance_mode');
  }
  public set pciComplianceMode(value: boolean | cdktf.IResolvable) {
    this._pciComplianceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pciComplianceModeInput() {
    return this._pciComplianceMode;
  }

  // private_network_cluster - computed: false, optional: false, required: true
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: false, optional: false, required: true
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTierInput() {
    return this._slaTier;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // valkey_version - computed: false, optional: false, required: true
  private _valkeyVersion?: string; 
  public get valkeyVersion() {
    return this.getStringAttribute('valkey_version');
  }
  public set valkeyVersion(value: string) {
    this._valkeyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyVersionInput() {
    return this._valkeyVersion;
  }

  // data_centre - computed: false, optional: false, required: true
  private _dataCentre = new ValkeyClusterV2DataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: ValkeyClusterV2DataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new ValkeyClusterV2ResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: ValkeyClusterV2ResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ValkeyClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ValkeyClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new ValkeyClusterV2TwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: ValkeyClusterV2TwoFactorDelete[] | cdktf.IResolvable) {
    this._twoFactorDelete.internalValue = value;
  }
  public resetTwoFactorDelete() {
    this._twoFactorDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDeleteInput() {
    return this._twoFactorDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_to_node_encryption: cdktf.booleanToTerraform(this._clientToNodeEncryption),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password_and_user_auth: cdktf.booleanToTerraform(this._passwordAndUserAuth),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      valkey_version: cdktf.stringToTerraform(this._valkeyVersion),
      data_centre: cdktf.listMapper(valkeyClusterV2DataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(valkeyClusterV2ResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      timeouts: valkeyClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      two_factor_delete: cdktf.listMapper(valkeyClusterV2TwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_to_node_encryption: {
        value: cdktf.booleanToHclTerraform(this._clientToNodeEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      password_and_user_auth: {
        value: cdktf.booleanToHclTerraform(this._passwordAndUserAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pci_compliance_mode: {
        value: cdktf.booleanToHclTerraform(this._pciComplianceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_network_cluster: {
        value: cdktf.booleanToHclTerraform(this._privateNetworkCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_tier: {
        value: cdktf.stringToHclTerraform(this._slaTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valkey_version: {
        value: cdktf.stringToHclTerraform(this._valkeyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre: {
        value: cdktf.listMapperHcl(valkeyClusterV2DataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ValkeyClusterV2DataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(valkeyClusterV2ResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ValkeyClusterV2ResizeSettingsList",
      },
      timeouts: {
        value: valkeyClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ValkeyClusterV2Timeouts",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(valkeyClusterV2TwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ValkeyClusterV2TwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
