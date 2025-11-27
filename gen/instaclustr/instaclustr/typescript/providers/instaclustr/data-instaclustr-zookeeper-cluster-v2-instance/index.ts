// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrZookeeperClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#current_cluster_operation_status DataInstaclustrZookeeperClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#description DataInstaclustrZookeeperClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#id DataInstaclustrZookeeperClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#name DataInstaclustrZookeeperClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#private_network_cluster DataInstaclustrZookeeperClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#sla_tier DataInstaclustrZookeeperClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#status DataInstaclustrZookeeperClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * Version of Apache Zookeeper to run on the cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#zookeeper_version DataInstaclustrZookeeperClusterV2Instance#zookeeper_version}
  */
  readonly zookeeperVersion?: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#data_centre DataInstaclustrZookeeperClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrZookeeperClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#two_factor_delete DataInstaclustrZookeeperClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#custom_virtual_network_id DataInstaclustrZookeeperClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#ebs_encryption_key DataInstaclustrZookeeperClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

  // ebs_encryption_key - computed: true, optional: true, required: false
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#custom_virtual_network_id DataInstaclustrZookeeperClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#resource_group DataInstaclustrZookeeperClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#storage_network DataInstaclustrZookeeperClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

  // resource_group - computed: true, optional: true, required: false
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

  // storage_network - computed: true, optional: true, required: false
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#deletion_time DataInstaclustrZookeeperClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#id DataInstaclustrZookeeperClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#node_roles DataInstaclustrZookeeperClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#node_size DataInstaclustrZookeeperClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#private_address DataInstaclustrZookeeperClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#public_address DataInstaclustrZookeeperClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#rack DataInstaclustrZookeeperClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#start_time DataInstaclustrZookeeperClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#status DataInstaclustrZookeeperClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#custom_virtual_network_id DataInstaclustrZookeeperClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
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
}

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#deletion_time DataInstaclustrZookeeperClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#id DataInstaclustrZookeeperClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#node_roles DataInstaclustrZookeeperClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#node_size DataInstaclustrZookeeperClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#private_address DataInstaclustrZookeeperClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#public_address DataInstaclustrZookeeperClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#rack DataInstaclustrZookeeperClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#start_time DataInstaclustrZookeeperClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#status DataInstaclustrZookeeperClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentreTag {
  /**
  * Key of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#key DataInstaclustrZookeeperClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#value DataInstaclustrZookeeperClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceDataCentre {
  /**
  * Enables Client ⇄ Node Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#client_to_server_encryption DataInstaclustrZookeeperClusterV2Instance#client_to_server_encryption}
  */
  readonly clientToServerEncryption?: boolean | cdktf.IResolvable;
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#cloud_provider DataInstaclustrZookeeperClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * List of Subject Alternative Names FQDNs as per RFC 1035.  Used by the applications with self signed certificates in keystores of nodes in the datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#custom_subject_alternative_names DataInstaclustrZookeeperClusterV2Instance#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * Enables Enforced SASL Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#enforce_auth_enabled DataInstaclustrZookeeperClusterV2Instance#enforce_auth_enabled}
  */
  readonly enforceAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of authentication schemes to enforce when enforce.auth.enabled=true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#enforce_auth_schemes DataInstaclustrZookeeperClusterV2Instance#enforce_auth_schemes}
  */
  readonly enforceAuthSchemes?: string[];
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#id DataInstaclustrZookeeperClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#name DataInstaclustrZookeeperClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#network DataInstaclustrZookeeperClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>MZK-DEV-t4g.small-20 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m7gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.large-60 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8g.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.large-75 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m8gd.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.large-75 </td> <td>General Availability</td> </tr> <tr> <td>ZKR-PRD-m5d.xlarge-150 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-developer-t3.small-20 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.large-60 </td> <td>General Availability</td> </tr> <tr> <td>zookeeper-production-m5.xlarge-120 </td> <td>General Availability</td> </tr> <tr> <td>MZK-PRD-m6g.large-60 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6g.xlarge-120 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.large-75 </td> <td>Deprecated</td> </tr> <tr> <td>MZK-PRD-m6gd.xlarge-150 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#node_size DataInstaclustrZookeeperClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of Zookeeper nodes in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#number_of_nodes DataInstaclustrZookeeperClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#provider_account_name DataInstaclustrZookeeperClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#region DataInstaclustrZookeeperClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#status DataInstaclustrZookeeperClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#zero_inbound_access DataInstaclustrZookeeperClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#aws_settings DataInstaclustrZookeeperClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#azure_settings DataInstaclustrZookeeperClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#deleted_nodes DataInstaclustrZookeeperClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#gcp_settings DataInstaclustrZookeeperClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#nodes DataInstaclustrZookeeperClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#tag DataInstaclustrZookeeperClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrZookeeperClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrZookeeperClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_to_server_encryption: cdktf.booleanToTerraform(struct!.clientToServerEncryption),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    enforce_auth_enabled: cdktf.booleanToTerraform(struct!.enforceAuthEnabled),
    enforce_auth_schemes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enforceAuthSchemes),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    tag: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrZookeeperClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_to_server_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.clientToServerEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSubjectAlternativeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enforce_auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enforceAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_auth_schemes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enforceAuthSchemes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientToServerEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToServerEncryption = this._clientToServerEncryption;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
    }
    if (this._enforceAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceAuthEnabled = this._enforceAuthEnabled;
    }
    if (this._enforceAuthSchemes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceAuthSchemes = this._enforceAuthSchemes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientToServerEncryption = undefined;
      this._cloudProvider = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._enforceAuthEnabled = undefined;
      this._enforceAuthSchemes = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._status = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientToServerEncryption = value.clientToServerEncryption;
      this._cloudProvider = value.cloudProvider;
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._enforceAuthEnabled = value.enforceAuthEnabled;
      this._enforceAuthSchemes = value.enforceAuthSchemes;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._status = value.status;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._tag.internalValue = value.tag;
    }
  }

  // client_to_server_encryption - computed: true, optional: true, required: false
  private _clientToServerEncryption?: boolean | cdktf.IResolvable; 
  public get clientToServerEncryption() {
    return this.getBooleanAttribute('client_to_server_encryption');
  }
  public set clientToServerEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToServerEncryption = value;
  }
  public resetClientToServerEncryption() {
    this._clientToServerEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToServerEncryptionInput() {
    return this._clientToServerEncryption;
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // custom_subject_alternative_names - computed: true, optional: true, required: false
  private _customSubjectAlternativeNames?: string[]; 
  public get customSubjectAlternativeNames() {
    return this.getListAttribute('custom_subject_alternative_names');
  }
  public set customSubjectAlternativeNames(value: string[]) {
    this._customSubjectAlternativeNames = value;
  }
  public resetCustomSubjectAlternativeNames() {
    this._customSubjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectAlternativeNamesInput() {
    return this._customSubjectAlternativeNames;
  }

  // enforce_auth_enabled - computed: true, optional: true, required: false
  private _enforceAuthEnabled?: boolean | cdktf.IResolvable; 
  public get enforceAuthEnabled() {
    return this.getBooleanAttribute('enforce_auth_enabled');
  }
  public set enforceAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._enforceAuthEnabled = value;
  }
  public resetEnforceAuthEnabled() {
    this._enforceAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAuthEnabledInput() {
    return this._enforceAuthEnabled;
  }

  // enforce_auth_schemes - computed: true, optional: true, required: false
  private _enforceAuthSchemes?: string[]; 
  public get enforceAuthSchemes() {
    return this.getListAttribute('enforce_auth_schemes');
  }
  public set enforceAuthSchemes(value: string[]) {
    this._enforceAuthSchemes = value;
  }
  public resetEnforceAuthSchemes() {
    this._enforceAuthSchemes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAuthSchemesInput() {
    return this._enforceAuthSchemes;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // number_of_nodes - computed: true, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
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

  // region - computed: true, optional: true, required: false
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

  // zero_inbound_access - computed: true, optional: true, required: false
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
  private _awsSettings = new DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _deletedNodes = new DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new DataInstaclustrZookeeperClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataInstaclustrZookeeperClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrZookeeperClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
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

export class DataInstaclustrZookeeperClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#confirmation_email DataInstaclustrZookeeperClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#confirmation_phone_number DataInstaclustrZookeeperClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
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

export class DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
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

  // confirmation_email - computed: true, optional: true, required: false
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  public resetConfirmationEmail() {
    this._confirmationEmail = undefined;
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

export class DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance instaclustr_zookeeper_cluster_v2_instance}
*/
export class DataInstaclustrZookeeperClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_zookeeper_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrZookeeperClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrZookeeperClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrZookeeperClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrZookeeperClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_zookeeper_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/zookeeper_cluster_v2_instance instaclustr_zookeeper_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrZookeeperClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrZookeeperClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_zookeeper_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.31',
        providerVersionConstraint: '2.1.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._zookeeperVersion = config.zookeeperVersion;
    this._dataCentre.internalValue = config.dataCentre;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // private_network_cluster - computed: true, optional: true, required: false
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  public resetPrivateNetworkCluster() {
    this._privateNetworkCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: true, optional: true, required: false
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  public resetSlaTier() {
    this._slaTier = undefined;
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

  // zookeeper_version - computed: true, optional: true, required: false
  private _zookeeperVersion?: string; 
  public get zookeeperVersion() {
    return this.getStringAttribute('zookeeper_version');
  }
  public set zookeeperVersion(value: string) {
    this._zookeeperVersion = value;
  }
  public resetZookeeperVersion() {
    this._zookeeperVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperVersionInput() {
    return this._zookeeperVersion;
  }

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrZookeeperClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrZookeeperClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  public resetDataCentre() {
    this._dataCentre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrZookeeperClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
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
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      zookeeper_version: cdktf.stringToTerraform(this._zookeeperVersion),
      data_centre: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      zookeeper_version: {
        value: cdktf.stringToHclTerraform(this._zookeeperVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrZookeeperClusterV2InstanceDataCentreList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrZookeeperClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
