// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrCassandraClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provision this cluster for [Bundled Use only](https://www.instaclustr.com/support/documentation/cadence/getting-started-with-cadence/bundled-use-only-cluster-deployments/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#bundled_use_only DataInstaclustrCassandraClusterV2Instance#bundled_use_only}
  */
  readonly bundledUseOnly?: boolean | cdktf.IResolvable;
  /**
  * Version of Cassandra to run on the cluster. Available versions: <ul> <li>`4.0.19`</li> <li>`4.0.17`</li> <li>`4.1.9`</li> <li>`5.0.3`</li> <li>`5.0.6`</li> <li>`5.0.5`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#cassandra_version DataInstaclustrCassandraClusterV2Instance#cassandra_version}
  */
  readonly cassandraVersion?: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#current_cluster_operation_status DataInstaclustrCassandraClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * Password of the default user created for the Cassandra cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#default_user_password DataInstaclustrCassandraClusterV2Instance#default_user_password}
  */
  readonly defaultUserPassword?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#description DataInstaclustrCassandraClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Adds Apache Lucene to the Cassandra cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#lucene_enabled DataInstaclustrCassandraClusterV2Instance#lucene_enabled}
  */
  readonly luceneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#name DataInstaclustrCassandraClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Enables Password Authentication and User Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#password_and_user_auth DataInstaclustrCassandraClusterV2Instance#password_and_user_auth}
  */
  readonly passwordAndUserAuth?: boolean | cdktf.IResolvable;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#pci_compliance_mode DataInstaclustrCassandraClusterV2Instance#pci_compliance_mode}
  */
  readonly pciComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_network_cluster DataInstaclustrCassandraClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#sla_tier DataInstaclustrCassandraClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#data_centre DataInstaclustrCassandraClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrCassandraClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#resize_settings DataInstaclustrCassandraClusterV2Instance#resize_settings}
  */
  readonly resizeSettings?: DataInstaclustrCassandraClusterV2InstanceResizeSettings[] | cdktf.IResolvable;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#spark DataInstaclustrCassandraClusterV2Instance#spark}
  */
  readonly spark?: DataInstaclustrCassandraClusterV2InstanceSpark[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#two_factor_delete DataInstaclustrCassandraClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#custom_virtual_network_id DataInstaclustrCassandraClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#ebs_encryption_key DataInstaclustrCassandraClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#custom_virtual_network_id DataInstaclustrCassandraClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#resource_group DataInstaclustrCassandraClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#storage_network DataInstaclustrCassandraClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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


export function dataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations {
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#created DataInstaclustrCassandraClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#modified DataInstaclustrCassandraClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_id DataInstaclustrCassandraClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    modified: cdktf.stringToTerraform(struct!.modified),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._id = undefined;
      this._modified = undefined;
      this._nodeId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._id = value.id;
      this._modified = value.modified;
      this._nodeId = value.nodeId;
      this._status = value.status;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#cdc_id DataInstaclustrCassandraClusterV2Instance#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#created DataInstaclustrCassandraClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#modified DataInstaclustrCassandraClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * Number of nodes set to delete in the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#number_of_nodes_to_delete DataInstaclustrCassandraClusterV2Instance#number_of_nodes_to_delete}
  */
  readonly numberOfNodesToDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * delete_node_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#delete_node_operations DataInstaclustrCassandraClusterV2Instance#delete_node_operations}
  */
  readonly deleteNodeOperations?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    modified: cdktf.stringToTerraform(struct!.modified),
    number_of_nodes_to_delete: cdktf.numberToTerraform(struct!.numberOfNodesToDelete),
    status: cdktf.stringToTerraform(struct!.status),
    delete_node_operations: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform, true)(struct!.deleteNodeOperations),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes_to_delete: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodesToDelete),
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
    delete_node_operations: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform, true)(struct!.deleteNodeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._numberOfNodesToDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodesToDelete = this._numberOfNodesToDelete;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._deleteNodeOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodeOperations = this._deleteNodeOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._created = undefined;
      this._id = undefined;
      this._modified = undefined;
      this._numberOfNodesToDelete = undefined;
      this._status = undefined;
      this._deleteNodeOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._created = value.created;
      this._id = value.id;
      this._modified = value.modified;
      this._numberOfNodesToDelete = value.numberOfNodesToDelete;
      this._status = value.status;
      this._deleteNodeOperations.internalValue = value.deleteNodeOperations;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // number_of_nodes_to_delete - computed: true, optional: true, required: false
  private _numberOfNodesToDelete?: number; 
  public get numberOfNodesToDelete() {
    return this.getNumberAttribute('number_of_nodes_to_delete');
  }
  public set numberOfNodesToDelete(value: number) {
    this._numberOfNodesToDelete = value;
  }
  public resetNumberOfNodesToDelete() {
    this._numberOfNodesToDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesToDeleteInput() {
    return this._numberOfNodesToDelete;
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

  // delete_node_operations - computed: false, optional: true, required: false
  private _deleteNodeOperations = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList(this, "delete_node_operations", false);
  public get deleteNodeOperations() {
    return this._deleteNodeOperations;
  }
  public putDeleteNodeOperations(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable) {
    this._deleteNodeOperations.internalValue = value;
  }
  public resetDeleteNodeOperations() {
    this._deleteNodeOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodeOperationsInput() {
    return this._deleteNodeOperations.internalValue;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations {
  /**
  * Timestamp of the creation of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#created DataInstaclustrCassandraClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the new node in the replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#new_node_id DataInstaclustrCassandraClusterV2Instance#new_node_id}
  */
  readonly newNodeId?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_id DataInstaclustrCassandraClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Status of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    new_node_id: cdktf.stringToTerraform(struct!.newNodeId),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    new_node_id: {
      value: cdktf.stringToHclTerraform(struct!.newNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._newNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNodeId = this._newNodeId;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._id = undefined;
      this._newNodeId = undefined;
      this._nodeId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._id = value.id;
      this._newNodeId = value.newNodeId;
      this._nodeId = value.nodeId;
      this._status = value.status;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // new_node_id - computed: true, optional: true, required: false
  private _newNodeId?: string; 
  public get newNodeId() {
    return this.getStringAttribute('new_node_id');
  }
  public set newNodeId(value: string) {
    this._newNodeId = value;
  }
  public resetNewNodeId() {
    this._newNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNodeIdInput() {
    return this._newNodeId;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations {
  /**
  * Timestamp of the completion of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#completed DataInstaclustrCassandraClusterV2Instance#completed}
  */
  readonly completed?: string;
  /**
  * Number of nodes that can be concurrently resized at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#concurrent_resizes DataInstaclustrCassandraClusterV2Instance#concurrent_resizes}
  */
  readonly concurrentResizes?: number;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#created DataInstaclustrCassandraClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of when Instaclustr Support has been alerted to the resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#instaclustr_support_alerted DataInstaclustrCassandraClusterV2Instance#instaclustr_support_alerted}
  */
  readonly instaclustrSupportAlerted?: string;
  /**
  * New size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#new_node_size DataInstaclustrCassandraClusterV2Instance#new_node_size}
  */
  readonly newNodeSize?: string;
  /**
  * Purpose of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_purpose DataInstaclustrCassandraClusterV2Instance#node_purpose}
  */
  readonly nodePurpose?: string;
  /**
  * Status of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * replace_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#replace_operations DataInstaclustrCassandraClusterV2Instance#replace_operations}
  */
  readonly replaceOperations?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed: cdktf.stringToTerraform(struct!.completed),
    concurrent_resizes: cdktf.numberToTerraform(struct!.concurrentResizes),
    created: cdktf.stringToTerraform(struct!.created),
    id: cdktf.stringToTerraform(struct!.id),
    instaclustr_support_alerted: cdktf.stringToTerraform(struct!.instaclustrSupportAlerted),
    new_node_size: cdktf.stringToTerraform(struct!.newNodeSize),
    node_purpose: cdktf.stringToTerraform(struct!.nodePurpose),
    status: cdktf.stringToTerraform(struct!.status),
    replace_operations: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform, true)(struct!.replaceOperations),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completed: {
      value: cdktf.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_resizes: {
      value: cdktf.numberToHclTerraform(struct!.concurrentResizes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    instaclustr_support_alerted: {
      value: cdktf.stringToHclTerraform(struct!.instaclustrSupportAlerted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_node_size: {
      value: cdktf.stringToHclTerraform(struct!.newNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_purpose: {
      value: cdktf.stringToHclTerraform(struct!.nodePurpose),
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
    replace_operations: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform, true)(struct!.replaceOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completed !== undefined) {
      hasAnyValues = true;
      internalValueResult.completed = this._completed;
    }
    if (this._concurrentResizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentResizes = this._concurrentResizes;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instaclustrSupportAlerted !== undefined) {
      hasAnyValues = true;
      internalValueResult.instaclustrSupportAlerted = this._instaclustrSupportAlerted;
    }
    if (this._newNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNodeSize = this._newNodeSize;
    }
    if (this._nodePurpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePurpose = this._nodePurpose;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._replaceOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceOperations = this._replaceOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completed = undefined;
      this._concurrentResizes = undefined;
      this._created = undefined;
      this._id = undefined;
      this._instaclustrSupportAlerted = undefined;
      this._newNodeSize = undefined;
      this._nodePurpose = undefined;
      this._status = undefined;
      this._replaceOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completed = value.completed;
      this._concurrentResizes = value.concurrentResizes;
      this._created = value.created;
      this._id = value.id;
      this._instaclustrSupportAlerted = value.instaclustrSupportAlerted;
      this._newNodeSize = value.newNodeSize;
      this._nodePurpose = value.nodePurpose;
      this._status = value.status;
      this._replaceOperations.internalValue = value.replaceOperations;
    }
  }

  // completed - computed: true, optional: true, required: false
  private _completed?: string; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed;
  }

  // concurrent_resizes - computed: true, optional: true, required: false
  private _concurrentResizes?: number; 
  public get concurrentResizes() {
    return this.getNumberAttribute('concurrent_resizes');
  }
  public set concurrentResizes(value: number) {
    this._concurrentResizes = value;
  }
  public resetConcurrentResizes() {
    this._concurrentResizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentResizesInput() {
    return this._concurrentResizes;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // instaclustr_support_alerted - computed: true, optional: true, required: false
  private _instaclustrSupportAlerted?: string; 
  public get instaclustrSupportAlerted() {
    return this.getStringAttribute('instaclustr_support_alerted');
  }
  public set instaclustrSupportAlerted(value: string) {
    this._instaclustrSupportAlerted = value;
  }
  public resetInstaclustrSupportAlerted() {
    this._instaclustrSupportAlerted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instaclustrSupportAlertedInput() {
    return this._instaclustrSupportAlerted;
  }

  // new_node_size - computed: true, optional: true, required: false
  private _newNodeSize?: string; 
  public get newNodeSize() {
    return this.getStringAttribute('new_node_size');
  }
  public set newNodeSize(value: string) {
    this._newNodeSize = value;
  }
  public resetNewNodeSize() {
    this._newNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNodeSizeInput() {
    return this._newNodeSize;
  }

  // node_purpose - computed: true, optional: true, required: false
  private _nodePurpose?: string; 
  public get nodePurpose() {
    return this.getStringAttribute('node_purpose');
  }
  public set nodePurpose(value: string) {
    this._nodePurpose = value;
  }
  public resetNodePurpose() {
    this._nodePurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePurposeInput() {
    return this._nodePurpose;
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

  // replace_operations - computed: false, optional: true, required: false
  private _replaceOperations = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList(this, "replace_operations", false);
  public get replaceOperations() {
    return this._replaceOperations;
  }
  public putReplaceOperations(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable) {
    this._replaceOperations.internalValue = value;
  }
  public resetReplaceOperations() {
    this._replaceOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceOperationsInput() {
    return this._replaceOperations.internalValue;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#operations DataInstaclustrCassandraClusterV2Instance#operations}
  */
  readonly operations?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform, true)(struct!.operations),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operations.internalValue = value.operations;
    }
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations {
  /**
  * delete_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#delete_nodes DataInstaclustrCassandraClusterV2Instance#delete_nodes}
  */
  readonly deleteNodes?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#resize DataInstaclustrCassandraClusterV2Instance#resize}
  */
  readonly resize?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform, true)(struct!.deleteNodes),
    resize: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform, true)(struct!.resize),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform, true)(struct!.deleteNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList",
    },
    resize: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteNodes = this._deleteNodes?.internalValue;
    }
    if (this._resize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteNodes.internalValue = undefined;
      this._resize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteNodes.internalValue = value.deleteNodes;
      this._resize.internalValue = value.resize;
    }
  }

  // delete_nodes - computed: false, optional: true, required: false
  private _deleteNodes = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList(this, "delete_nodes", false);
  public get deleteNodes() {
    return this._deleteNodes;
  }
  public putDeleteNodes(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable) {
    this._deleteNodes.internalValue = value;
  }
  public resetDeleteNodes() {
    this._deleteNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesInput() {
    return this._deleteNodes.internalValue;
  }

  // resize - computed: false, optional: true, required: false
  private _resize = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable) {
    this._resize.internalValue = value;
  }
  public resetResize() {
    this._resize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize.internalValue;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium {
  /**
  * Kafka Cluster Data Centre Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#kafka_cdc_id DataInstaclustrCassandraClusterV2Instance#kafka_cdc_id}
  */
  readonly kafkaCdcId?: string;
  /**
  * Kafka Topic Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#kafka_topic_prefix DataInstaclustrCassandraClusterV2Instance#kafka_topic_prefix}
  */
  readonly kafkaTopicPrefix?: string;
  /**
  * Kafka VPC Type with only VPC_PEERED supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#kafka_vpc_type DataInstaclustrCassandraClusterV2Instance#kafka_vpc_type}
  */
  readonly kafkaVpcType?: string;
  /**
  * Adds the specified version of Debezium Connector Cassandra to the Cassandra cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#version DataInstaclustrCassandraClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_cdc_id: cdktf.stringToTerraform(struct!.kafkaCdcId),
    kafka_topic_prefix: cdktf.stringToTerraform(struct!.kafkaTopicPrefix),
    kafka_vpc_type: cdktf.stringToTerraform(struct!.kafkaVpcType),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.kafkaCdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_topic_prefix: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopicPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.kafkaVpcType),
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaCdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaCdcId = this._kafkaCdcId;
    }
    if (this._kafkaTopicPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopicPrefix = this._kafkaTopicPrefix;
    }
    if (this._kafkaVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaVpcType = this._kafkaVpcType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kafkaCdcId = undefined;
      this._kafkaTopicPrefix = undefined;
      this._kafkaVpcType = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kafkaCdcId = value.kafkaCdcId;
      this._kafkaTopicPrefix = value.kafkaTopicPrefix;
      this._kafkaVpcType = value.kafkaVpcType;
      this._version = value.version;
    }
  }

  // kafka_cdc_id - computed: true, optional: true, required: false
  private _kafkaCdcId?: string; 
  public get kafkaCdcId() {
    return this.getStringAttribute('kafka_cdc_id');
  }
  public set kafkaCdcId(value: string) {
    this._kafkaCdcId = value;
  }
  public resetKafkaCdcId() {
    this._kafkaCdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaCdcIdInput() {
    return this._kafkaCdcId;
  }

  // kafka_topic_prefix - computed: true, optional: true, required: false
  private _kafkaTopicPrefix?: string; 
  public get kafkaTopicPrefix() {
    return this.getStringAttribute('kafka_topic_prefix');
  }
  public set kafkaTopicPrefix(value: string) {
    this._kafkaTopicPrefix = value;
  }
  public resetKafkaTopicPrefix() {
    this._kafkaTopicPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicPrefixInput() {
    return this._kafkaTopicPrefix;
  }

  // kafka_vpc_type - computed: true, optional: true, required: false
  private _kafkaVpcType?: string; 
  public get kafkaVpcType() {
    return this.getStringAttribute('kafka_vpc_type');
  }
  public set kafkaVpcType(value: string) {
    this._kafkaVpcType = value;
  }
  public resetKafkaVpcType() {
    this._kafkaVpcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVpcTypeInput() {
    return this._kafkaVpcType;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#deletion_time DataInstaclustrCassandraClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_roles DataInstaclustrCassandraClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_size DataInstaclustrCassandraClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_address DataInstaclustrCassandraClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#public_address DataInstaclustrCassandraClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#rack DataInstaclustrCassandraClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#start_time DataInstaclustrCassandraClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#custom_virtual_network_id DataInstaclustrCassandraClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#deletion_time DataInstaclustrCassandraClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_roles DataInstaclustrCassandraClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_size DataInstaclustrCassandraClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_address DataInstaclustrCassandraClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#public_address DataInstaclustrCassandraClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#rack DataInstaclustrCassandraClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#start_time DataInstaclustrCassandraClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrCassandraClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses {
  /**
  * The ip address of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#address DataInstaclustrCassandraClusterV2Instance#address}
  */
  readonly address?: string[];
  /**
  * The rack the endpoint is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#rack DataInstaclustrCassandraClusterV2Instance#rack}
  */
  readonly rack?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    rack: cdktf.stringToTerraform(struct!.rack),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rack = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rack = value.rack;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity {
  /**
  * endpoint_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#endpoint_addresses DataInstaclustrCassandraClusterV2Instance#endpoint_addresses}
  */
  readonly endpointAddresses?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_addresses: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesToTerraform, true)(struct!.endpointAddresses),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_addresses: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesToHclTerraform, true)(struct!.endpointAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointAddresses = this._endpointAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointAddresses.internalValue = value.endpointAddresses;
    }
  }

  // endpoint_addresses - computed: false, optional: true, required: false
  private _endpointAddresses = new DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddressesList(this, "endpoint_addresses", false);
  public get endpointAddresses() {
    return this._endpointAddresses;
  }
  public putEndpointAddresses(value: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityEndpointAddresses[] | cdktf.IResolvable) {
    this._endpointAddresses.internalValue = value;
  }
  public resetEndpointAddresses() {
    this._endpointAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAddressesInput() {
    return this._endpointAddresses.internalValue;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy {
  /**
  * Size of the nodes provisioned as Shotover Proxy nodes in a Privatelink Cassandra Cluster. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_size DataInstaclustrCassandraClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * The version of Shotover Proxy running on the Cluster.Available versions: <ul> <li>`0.6.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#version DataInstaclustrCassandraClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSize = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSize = value.nodeSize;
      this._version = value.version;
    }
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#key DataInstaclustrCassandraClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#value DataInstaclustrCassandraClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceDataCentre {
  /**
  * Enables Client ⇄ Node Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#client_to_cluster_encryption DataInstaclustrCassandraClusterV2Instance#client_to_cluster_encryption}
  */
  readonly clientToClusterEncryption?: boolean | cdktf.IResolvable;
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#cloud_provider DataInstaclustrCassandraClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Enables commitlog backups and increases the frequency of the default snapshot backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#continuous_backup DataInstaclustrCassandraClusterV2Instance#continuous_backup}
  */
  readonly continuousBackup?: boolean | cdktf.IResolvable;
  /**
  * List of Subject Alternate Names FQDNs as per RFC 1035.  Used by the applications with self signed certificates in keystores of nodes in the datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#custom_subject_alternative_names DataInstaclustrCassandraClusterV2Instance#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#id DataInstaclustrCassandraClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#name DataInstaclustrCassandraClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#network DataInstaclustrCassandraClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c7gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i3.4xlarge-3538 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.2xlarge-1746 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.4xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-i4g.xlarge-872 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-im4gn.2xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-is4gen.xlarge-3492 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-m7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r7g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.2xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.4xlarge-ebs-optimised-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.large-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-50 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.medium-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-r8g.xlarge-800 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.2xlarge-186 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.large-46 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c5d.xlarge-93 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.2xlarge-441 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.large-109 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.medium-54 </td> <td>General Availability</td> </tr> <tr> <td>CSO-PRD-c6gd.xlarge-220 </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge </td> <td>General Availability</td> </tr> <tr> <td>i3.2xlarge-v2 </td> <td>General Availability</td> </tr> <tr> <td>i3en.xlarge </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-c6gd.2xlarge-441 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-m6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.2xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.4xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.large-800 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-120 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-250 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.medium-80 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-1600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-2400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-3200 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-400 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-600 </td> <td>Deprecated</td> </tr> <tr> <td>CAS-PRD-r6g.xlarge-800 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-v2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.small-v2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-Standard_DS1_v2-32 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-Standard_DS2_v2-64 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-1500 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_D16s_v5-2000 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-Standard_L8s_v3-1788 </td> <td>General Availability</td> </tr> <tr> <td>D15_v2-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-1023-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS12_v2-512-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS13_v2-2046-an </td> <td>General Availability</td> </tr> <tr> <td>Standard_DS2_v2-256-an </td> <td>General Availability</td> </tr> <tr> <td>L8s_v2-an </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CAS-DEV-n1-standard-1-5 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>CAS-DEV-n1-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-16-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-2-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-3200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-4-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1200 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-1600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-2400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-highmem-8-800 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-400 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-n2-standard-2-600 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-120 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRD-t2d-standard-2-80 </td> <td>General Availability</td> </tr> <tr> <td>CAS-PRDn2-highmem-8-3200 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-16-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-4-3000 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-highmem-8-1500 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-375 </td> <td>General Availability</td> </tr> <tr> <td>cassandra-production-n2-standard-8-750 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#node_size DataInstaclustrCassandraClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of nodes in the Data Centre. Includes only Cassandra nodes, other node types in the cluster such as shotover nodes are excluded from this count. Must be a multiple of `replicationFactor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#number_of_nodes DataInstaclustrCassandraClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Enables broadcast of private IPs for auto-discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_ip_broadcast_for_discovery DataInstaclustrCassandraClusterV2Instance#private_ip_broadcast_for_discovery}
  */
  readonly privateIpBroadcastForDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Create a PrivateLink enabled cluster, see [PrivateLink](https://www.instaclustr.com/support/documentation/useful-information/privatelink/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_link DataInstaclustrCassandraClusterV2Instance#private_link}
  */
  readonly privateLink?: boolean | cdktf.IResolvable;
  /**
  * Create a Private Service Connect enabled cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_service_connect_v2 DataInstaclustrCassandraClusterV2Instance#private_service_connect_v2}
  */
  readonly privateServiceConnectV2?: boolean | cdktf.IResolvable;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#provider_account_name DataInstaclustrCassandraClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#region DataInstaclustrCassandraClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Number of racks to use when allocating nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#replication_factor DataInstaclustrCassandraClusterV2Instance#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#status DataInstaclustrCassandraClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#tag_management_enabled DataInstaclustrCassandraClusterV2Instance#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#zero_inbound_access DataInstaclustrCassandraClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#aws_settings DataInstaclustrCassandraClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#azure_settings DataInstaclustrCassandraClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * current_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#current_operations DataInstaclustrCassandraClusterV2Instance#current_operations}
  */
  readonly currentOperations?: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable;
  /**
  * debezium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#debezium DataInstaclustrCassandraClusterV2Instance#debezium}
  */
  readonly debezium?: DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#deleted_nodes DataInstaclustrCassandraClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#gcp_settings DataInstaclustrCassandraClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#nodes DataInstaclustrCassandraClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrCassandraClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#private_connectivity DataInstaclustrCassandraClusterV2Instance#private_connectivity}
  */
  readonly privateConnectivity?: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable;
  /**
  * shotover_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#shotover_proxy DataInstaclustrCassandraClusterV2Instance#shotover_proxy}
  */
  readonly shotoverProxy?: DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#tag DataInstaclustrCassandraClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrCassandraClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_to_cluster_encryption: cdktf.booleanToTerraform(struct!.clientToClusterEncryption),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    continuous_backup: cdktf.booleanToTerraform(struct!.continuousBackup),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    private_ip_broadcast_for_discovery: cdktf.booleanToTerraform(struct!.privateIpBroadcastForDiscovery),
    private_link: cdktf.booleanToTerraform(struct!.privateLink),
    private_service_connect_v2: cdktf.booleanToTerraform(struct!.privateServiceConnectV2),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    current_operations: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsToTerraform, true)(struct!.currentOperations),
    debezium: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumToTerraform, true)(struct!.debezium),
    deleted_nodes: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    private_connectivity: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityToTerraform, true)(struct!.privateConnectivity),
    shotover_proxy: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyToTerraform, true)(struct!.shotoverProxy),
    tag: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_to_cluster_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.clientToClusterEncryption),
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
    continuous_backup: {
      value: cdktf.booleanToHclTerraform(struct!.continuousBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSubjectAlternativeNames),
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
    private_ip_broadcast_for_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.privateIpBroadcastForDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_link: {
      value: cdktf.booleanToHclTerraform(struct!.privateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_service_connect_v2: {
      value: cdktf.booleanToHclTerraform(struct!.privateServiceConnectV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsList",
    },
    current_operations: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsToHclTerraform, true)(struct!.currentOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsList",
    },
    debezium: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumToHclTerraform, true)(struct!.debezium),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreNodesList",
    },
    private_connectivity: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityToHclTerraform, true)(struct!.privateConnectivity),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityList",
    },
    shotover_proxy: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyToHclTerraform, true)(struct!.shotoverProxy),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrCassandraClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientToClusterEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToClusterEncryption = this._clientToClusterEncryption;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._continuousBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousBackup = this._continuousBackup;
    }
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
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
    if (this._privateIpBroadcastForDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpBroadcastForDiscovery = this._privateIpBroadcastForDiscovery;
    }
    if (this._privateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink;
    }
    if (this._privateServiceConnectV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnectV2 = this._privateServiceConnectV2;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
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
    if (this._currentOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentOperations = this._currentOperations?.internalValue;
    }
    if (this._debezium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debezium = this._debezium?.internalValue;
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
    if (this._privateConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivity = this._privateConnectivity?.internalValue;
    }
    if (this._shotoverProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shotoverProxy = this._shotoverProxy?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientToClusterEncryption = undefined;
      this._cloudProvider = undefined;
      this._continuousBackup = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._privateIpBroadcastForDiscovery = undefined;
      this._privateLink = undefined;
      this._privateServiceConnectV2 = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._replicationFactor = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._currentOperations.internalValue = undefined;
      this._debezium.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateConnectivity.internalValue = undefined;
      this._shotoverProxy.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientToClusterEncryption = value.clientToClusterEncryption;
      this._cloudProvider = value.cloudProvider;
      this._continuousBackup = value.continuousBackup;
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._privateIpBroadcastForDiscovery = value.privateIpBroadcastForDiscovery;
      this._privateLink = value.privateLink;
      this._privateServiceConnectV2 = value.privateServiceConnectV2;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._replicationFactor = value.replicationFactor;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._currentOperations.internalValue = value.currentOperations;
      this._debezium.internalValue = value.debezium;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._privateConnectivity.internalValue = value.privateConnectivity;
      this._shotoverProxy.internalValue = value.shotoverProxy;
      this._tag.internalValue = value.tag;
    }
  }

  // client_to_cluster_encryption - computed: true, optional: true, required: false
  private _clientToClusterEncryption?: boolean | cdktf.IResolvable; 
  public get clientToClusterEncryption() {
    return this.getBooleanAttribute('client_to_cluster_encryption');
  }
  public set clientToClusterEncryption(value: boolean | cdktf.IResolvable) {
    this._clientToClusterEncryption = value;
  }
  public resetClientToClusterEncryption() {
    this._clientToClusterEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClusterEncryptionInput() {
    return this._clientToClusterEncryption;
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

  // continuous_backup - computed: true, optional: true, required: false
  private _continuousBackup?: boolean | cdktf.IResolvable; 
  public get continuousBackup() {
    return this.getBooleanAttribute('continuous_backup');
  }
  public set continuousBackup(value: boolean | cdktf.IResolvable) {
    this._continuousBackup = value;
  }
  public resetContinuousBackup() {
    this._continuousBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupInput() {
    return this._continuousBackup;
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

  // private_ip_broadcast_for_discovery - computed: true, optional: true, required: false
  private _privateIpBroadcastForDiscovery?: boolean | cdktf.IResolvable; 
  public get privateIpBroadcastForDiscovery() {
    return this.getBooleanAttribute('private_ip_broadcast_for_discovery');
  }
  public set privateIpBroadcastForDiscovery(value: boolean | cdktf.IResolvable) {
    this._privateIpBroadcastForDiscovery = value;
  }
  public resetPrivateIpBroadcastForDiscovery() {
    this._privateIpBroadcastForDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpBroadcastForDiscoveryInput() {
    return this._privateIpBroadcastForDiscovery;
  }

  // private_link - computed: true, optional: true, required: false
  private _privateLink?: boolean | cdktf.IResolvable; 
  public get privateLink() {
    return this.getBooleanAttribute('private_link');
  }
  public set privateLink(value: boolean | cdktf.IResolvable) {
    this._privateLink = value;
  }
  public resetPrivateLink() {
    this._privateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink;
  }

  // private_service_connect_v2 - computed: true, optional: true, required: false
  private _privateServiceConnectV2?: boolean | cdktf.IResolvable; 
  public get privateServiceConnectV2() {
    return this.getBooleanAttribute('private_service_connect_v2');
  }
  public set privateServiceConnectV2(value: boolean | cdktf.IResolvable) {
    this._privateServiceConnectV2 = value;
  }
  public resetPrivateServiceConnectV2() {
    this._privateServiceConnectV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectV2Input() {
    return this._privateServiceConnectV2;
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
  private _awsSettings = new DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrCassandraClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrCassandraClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // current_operations - computed: false, optional: true, required: false
  private _currentOperations = new DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperationsList(this, "current_operations", false);
  public get currentOperations() {
    return this._currentOperations;
  }
  public putCurrentOperations(value: DataInstaclustrCassandraClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable) {
    this._currentOperations.internalValue = value;
  }
  public resetCurrentOperations() {
    this._currentOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOperationsInput() {
    return this._currentOperations.internalValue;
  }

  // debezium - computed: false, optional: true, required: false
  private _debezium = new DataInstaclustrCassandraClusterV2InstanceDataCentreDebeziumList(this, "debezium", false);
  public get debezium() {
    return this._debezium;
  }
  public putDebezium(value: DataInstaclustrCassandraClusterV2InstanceDataCentreDebezium[] | cdktf.IResolvable) {
    this._debezium.internalValue = value;
  }
  public resetDebezium() {
    this._debezium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debeziumInput() {
    return this._debezium.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrCassandraClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrCassandraClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new DataInstaclustrCassandraClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrCassandraClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivityList(this, "private_connectivity", false);
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: DataInstaclustrCassandraClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // shotover_proxy - computed: false, optional: true, required: false
  private _shotoverProxy = new DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxyList(this, "shotover_proxy", false);
  public get shotoverProxy() {
    return this._shotoverProxy;
  }
  public putShotoverProxy(value: DataInstaclustrCassandraClusterV2InstanceDataCentreShotoverProxy[] | cdktf.IResolvable) {
    this._shotoverProxy.internalValue = value;
  }
  public resetShotoverProxy() {
    this._shotoverProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shotoverProxyInput() {
    return this._shotoverProxy.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataInstaclustrCassandraClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrCassandraClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
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

export class DataInstaclustrCassandraClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#concurrency DataInstaclustrCassandraClusterV2Instance#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#notify_support_contacts DataInstaclustrCassandraClusterV2Instance#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrCassandraClusterV2InstanceResizeSettingsToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceResizeSettingsToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined) {
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

  // concurrency - computed: true, optional: true, required: false
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

  // notify_support_contacts - computed: true, optional: true, required: false
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

export class DataInstaclustrCassandraClusterV2InstanceResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceResizeSettingsOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceSpark {
  /**
  * Adds the specified version of Apache Spark to the Cassandra cluster. Available versions: <ul> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#version DataInstaclustrCassandraClusterV2Instance#version}
  */
  readonly version?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceSparkToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceSpark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceSparkToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceSpark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataInstaclustrCassandraClusterV2InstanceSparkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceSpark | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceSpark | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataInstaclustrCassandraClusterV2InstanceSparkList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceSpark[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceSparkOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceSparkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#confirmation_email DataInstaclustrCassandraClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#confirmation_phone_number DataInstaclustrCassandraClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
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

export class DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance instaclustr_cassandra_cluster_v2_instance}
*/
export class DataInstaclustrCassandraClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cassandra_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrCassandraClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrCassandraClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrCassandraClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrCassandraClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cassandra_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.38/docs/data-sources/cassandra_cluster_v2_instance instaclustr_cassandra_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrCassandraClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrCassandraClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cassandra_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.38',
        providerVersionConstraint: '2.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundledUseOnly = config.bundledUseOnly;
    this._cassandraVersion = config.cassandraVersion;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._defaultUserPassword = config.defaultUserPassword;
    this._description = config.description;
    this._id = config.id;
    this._luceneEnabled = config.luceneEnabled;
    this._name = config.name;
    this._passwordAndUserAuth = config.passwordAndUserAuth;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._dataCentre.internalValue = config.dataCentre;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._spark.internalValue = config.spark;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundled_use_only - computed: true, optional: true, required: false
  private _bundledUseOnly?: boolean | cdktf.IResolvable; 
  public get bundledUseOnly() {
    return this.getBooleanAttribute('bundled_use_only');
  }
  public set bundledUseOnly(value: boolean | cdktf.IResolvable) {
    this._bundledUseOnly = value;
  }
  public resetBundledUseOnly() {
    this._bundledUseOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundledUseOnlyInput() {
    return this._bundledUseOnly;
  }

  // cassandra_version - computed: true, optional: true, required: false
  private _cassandraVersion?: string; 
  public get cassandraVersion() {
    return this.getStringAttribute('cassandra_version');
  }
  public set cassandraVersion(value: string) {
    this._cassandraVersion = value;
  }
  public resetCassandraVersion() {
    this._cassandraVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraVersionInput() {
    return this._cassandraVersion;
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

  // default_user_password - computed: true, optional: true, required: false
  private _defaultUserPassword?: string; 
  public get defaultUserPassword() {
    return this.getStringAttribute('default_user_password');
  }
  public set defaultUserPassword(value: string) {
    this._defaultUserPassword = value;
  }
  public resetDefaultUserPassword() {
    this._defaultUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserPasswordInput() {
    return this._defaultUserPassword;
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

  // lucene_enabled - computed: true, optional: true, required: false
  private _luceneEnabled?: boolean | cdktf.IResolvable; 
  public get luceneEnabled() {
    return this.getBooleanAttribute('lucene_enabled');
  }
  public set luceneEnabled(value: boolean | cdktf.IResolvable) {
    this._luceneEnabled = value;
  }
  public resetLuceneEnabled() {
    this._luceneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneEnabledInput() {
    return this._luceneEnabled;
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

  // password_and_user_auth - computed: true, optional: true, required: false
  private _passwordAndUserAuth?: boolean | cdktf.IResolvable; 
  public get passwordAndUserAuth() {
    return this.getBooleanAttribute('password_and_user_auth');
  }
  public set passwordAndUserAuth(value: boolean | cdktf.IResolvable) {
    this._passwordAndUserAuth = value;
  }
  public resetPasswordAndUserAuth() {
    this._passwordAndUserAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAndUserAuthInput() {
    return this._passwordAndUserAuth;
  }

  // pci_compliance_mode - computed: true, optional: true, required: false
  private _pciComplianceMode?: boolean | cdktf.IResolvable; 
  public get pciComplianceMode() {
    return this.getBooleanAttribute('pci_compliance_mode');
  }
  public set pciComplianceMode(value: boolean | cdktf.IResolvable) {
    this._pciComplianceMode = value;
  }
  public resetPciComplianceMode() {
    this._pciComplianceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciComplianceModeInput() {
    return this._pciComplianceMode;
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

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrCassandraClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrCassandraClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  public resetDataCentre() {
    this._dataCentre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new DataInstaclustrCassandraClusterV2InstanceResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: DataInstaclustrCassandraClusterV2InstanceResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new DataInstaclustrCassandraClusterV2InstanceSparkList(this, "spark", false);
  public get spark() {
    return this._spark;
  }
  public putSpark(value: DataInstaclustrCassandraClusterV2InstanceSpark[] | cdktf.IResolvable) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrCassandraClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
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
      bundled_use_only: cdktf.booleanToTerraform(this._bundledUseOnly),
      cassandra_version: cdktf.stringToTerraform(this._cassandraVersion),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      default_user_password: cdktf.stringToTerraform(this._defaultUserPassword),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lucene_enabled: cdktf.booleanToTerraform(this._luceneEnabled),
      name: cdktf.stringToTerraform(this._name),
      password_and_user_auth: cdktf.booleanToTerraform(this._passwordAndUserAuth),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      data_centre: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      spark: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceSparkToTerraform, true)(this._spark.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundled_use_only: {
        value: cdktf.booleanToHclTerraform(this._bundledUseOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cassandra_version: {
        value: cdktf.stringToHclTerraform(this._cassandraVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_user_password: {
        value: cdktf.stringToHclTerraform(this._defaultUserPassword),
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
      lucene_enabled: {
        value: cdktf.booleanToHclTerraform(this._luceneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrCassandraClusterV2InstanceDataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrCassandraClusterV2InstanceResizeSettingsList",
      },
      spark: {
        value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceSparkToHclTerraform, true)(this._spark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrCassandraClusterV2InstanceSparkList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrCassandraClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
