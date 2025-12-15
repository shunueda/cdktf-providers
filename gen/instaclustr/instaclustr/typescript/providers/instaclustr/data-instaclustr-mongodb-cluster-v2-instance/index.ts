// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrMongodbClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection string to connect to MongoDB. It will include default user details if available. Password may be out of date if the user has changed this since cluster creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#connection_string DataInstaclustrMongodbClusterV2Instance#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#current_cluster_operation_status DataInstaclustrMongodbClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#description DataInstaclustrMongodbClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * List of command objects to run against the admin database on cluster creation. Equivalent to running db.adminCommand()
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#mongodb_init_commands DataInstaclustrMongodbClusterV2Instance#mongodb_init_commands}
  */
  readonly mongodbInitCommands?: string[];
  /**
  * Version of MongoDB to run on the cluster. Available versions: <ul> <li>`6.0.6`</li> <li>`6.0.8`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#mongodb_version DataInstaclustrMongodbClusterV2Instance#mongodb_version}
  */
  readonly mongodbVersion?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#name DataInstaclustrMongodbClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#pci_compliance_mode DataInstaclustrMongodbClusterV2Instance#pci_compliance_mode}
  */
  readonly pciComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#private_network_cluster DataInstaclustrMongodbClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#sla_tier DataInstaclustrMongodbClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#data_centre DataInstaclustrMongodbClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrMongodbClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * mongodb_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#mongodb_configuration DataInstaclustrMongodbClusterV2Instance#mongodb_configuration}
  */
  readonly mongodbConfiguration?: DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#resize_settings DataInstaclustrMongodbClusterV2Instance#resize_settings}
  */
  readonly resizeSettings?: DataInstaclustrMongodbClusterV2InstanceResizeSettings[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#two_factor_delete DataInstaclustrMongodbClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#custom_virtual_network_id DataInstaclustrMongodbClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#ebs_encryption_key DataInstaclustrMongodbClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#custom_virtual_network_id DataInstaclustrMongodbClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#resource_group DataInstaclustrMongodbClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#storage_network DataInstaclustrMongodbClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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


export function dataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations {
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#created DataInstaclustrMongodbClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#modified DataInstaclustrMongodbClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_id DataInstaclustrMongodbClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#cdc_id DataInstaclustrMongodbClusterV2Instance#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#created DataInstaclustrMongodbClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#modified DataInstaclustrMongodbClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * Number of nodes set to delete in the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#number_of_nodes_to_delete DataInstaclustrMongodbClusterV2Instance#number_of_nodes_to_delete}
  */
  readonly numberOfNodesToDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * delete_node_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#delete_node_operations DataInstaclustrMongodbClusterV2Instance#delete_node_operations}
  */
  readonly deleteNodeOperations?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
    delete_node_operations: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform, true)(struct!.deleteNodeOperations),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform, true)(struct!.deleteNodeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined) {
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
  private _deleteNodeOperations = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList(this, "delete_node_operations", false);
  public get deleteNodeOperations() {
    return this._deleteNodeOperations;
  }
  public putDeleteNodeOperations(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations {
  /**
  * Timestamp of the creation of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#created DataInstaclustrMongodbClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the new node in the replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#new_node_id DataInstaclustrMongodbClusterV2Instance#new_node_id}
  */
  readonly newNodeId?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_id DataInstaclustrMongodbClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Status of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations {
  /**
  * Timestamp of the completion of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#completed DataInstaclustrMongodbClusterV2Instance#completed}
  */
  readonly completed?: string;
  /**
  * Number of nodes that can be concurrently resized at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#concurrent_resizes DataInstaclustrMongodbClusterV2Instance#concurrent_resizes}
  */
  readonly concurrentResizes?: number;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#created DataInstaclustrMongodbClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of when Instaclustr Support has been alerted to the resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#instaclustr_support_alerted DataInstaclustrMongodbClusterV2Instance#instaclustr_support_alerted}
  */
  readonly instaclustrSupportAlerted?: string;
  /**
  * New size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#new_node_size DataInstaclustrMongodbClusterV2Instance#new_node_size}
  */
  readonly newNodeSize?: string;
  /**
  * Purpose of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_purpose DataInstaclustrMongodbClusterV2Instance#node_purpose}
  */
  readonly nodePurpose?: string;
  /**
  * Status of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * replace_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#replace_operations DataInstaclustrMongodbClusterV2Instance#replace_operations}
  */
  readonly replaceOperations?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
    replace_operations: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform, true)(struct!.replaceOperations),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform, true)(struct!.replaceOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined) {
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
  private _replaceOperations = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList(this, "replace_operations", false);
  public get replaceOperations() {
    return this._replaceOperations;
  }
  public putReplaceOperations(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#operations DataInstaclustrMongodbClusterV2Instance#operations}
  */
  readonly operations?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform, true)(struct!.operations),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined) {
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
  private _operations = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations {
  /**
  * delete_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#delete_nodes DataInstaclustrMongodbClusterV2Instance#delete_nodes}
  */
  readonly deleteNodes?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#resize DataInstaclustrMongodbClusterV2Instance#resize}
  */
  readonly resize?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform, true)(struct!.deleteNodes),
    resize: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform, true)(struct!.resize),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform, true)(struct!.deleteNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList",
    },
    resize: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined) {
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
  private _deleteNodes = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList(this, "delete_nodes", false);
  public get deleteNodes() {
    return this._deleteNodes;
  }
  public putDeleteNodes(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable) {
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
  private _resize = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#deletion_time DataInstaclustrMongodbClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_roles DataInstaclustrMongodbClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_size DataInstaclustrMongodbClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#private_address DataInstaclustrMongodbClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#public_address DataInstaclustrMongodbClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#rack DataInstaclustrMongodbClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#start_time DataInstaclustrMongodbClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#custom_virtual_network_id DataInstaclustrMongodbClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#deletion_time DataInstaclustrMongodbClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_roles DataInstaclustrMongodbClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_size DataInstaclustrMongodbClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#private_address DataInstaclustrMongodbClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#public_address DataInstaclustrMongodbClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#rack DataInstaclustrMongodbClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#start_time DataInstaclustrMongodbClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrMongodbClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#key DataInstaclustrMongodbClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#value DataInstaclustrMongodbClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceDataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#cloud_provider DataInstaclustrMongodbClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#id DataInstaclustrMongodbClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#name DataInstaclustrMongodbClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#network DataInstaclustrMongodbClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. --AVAILABLE_NODE_SIZES_MARKER_V2_MONGODB--
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#node_size DataInstaclustrMongodbClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of MongoDB nodes in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#number_of_nodes DataInstaclustrMongodbClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#provider_account_name DataInstaclustrMongodbClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#region DataInstaclustrMongodbClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#status DataInstaclustrMongodbClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#tag_management_enabled DataInstaclustrMongodbClusterV2Instance#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#zero_inbound_access DataInstaclustrMongodbClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#aws_settings DataInstaclustrMongodbClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#azure_settings DataInstaclustrMongodbClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * current_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#current_operations DataInstaclustrMongodbClusterV2Instance#current_operations}
  */
  readonly currentOperations?: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#deleted_nodes DataInstaclustrMongodbClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#gcp_settings DataInstaclustrMongodbClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#nodes DataInstaclustrMongodbClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrMongodbClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#tag DataInstaclustrMongodbClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrMongodbClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    current_operations: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsToTerraform, true)(struct!.currentOperations),
    deleted_nodes: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    tag: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceDataCentre | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsList",
    },
    current_operations: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsToHclTerraform, true)(struct!.currentOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreNodesList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrMongodbClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._currentOperations.internalValue = undefined;
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
      this._cloudProvider = value.cloudProvider;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._currentOperations.internalValue = value.currentOperations;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._tag.internalValue = value.tag;
    }
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
  private _awsSettings = new DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrMongodbClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrMongodbClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _currentOperations = new DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperationsList(this, "current_operations", false);
  public get currentOperations() {
    return this._currentOperations;
  }
  public putCurrentOperations(value: DataInstaclustrMongodbClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable) {
    this._currentOperations.internalValue = value;
  }
  public resetCurrentOperations() {
    this._currentOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOperationsInput() {
    return this._currentOperations.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrMongodbClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrMongodbClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new DataInstaclustrMongodbClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrMongodbClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
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
  private _tag = new DataInstaclustrMongodbClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrMongodbClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
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

export class DataInstaclustrMongodbClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#key DataInstaclustrMongodbClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#value DataInstaclustrMongodbClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceMongodbConfigurationToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceMongodbConfigurationToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#concurrency DataInstaclustrMongodbClusterV2Instance#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#notify_support_contacts DataInstaclustrMongodbClusterV2Instance#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrMongodbClusterV2InstanceResizeSettingsToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceResizeSettingsToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceResizeSettingsOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#confirmation_email DataInstaclustrMongodbClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#confirmation_phone_number DataInstaclustrMongodbClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
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

export class DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance instaclustr_mongodb_cluster_v2_instance}
*/
export class DataInstaclustrMongodbClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_mongodb_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrMongodbClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrMongodbClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrMongodbClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrMongodbClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_mongodb_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/data-sources/mongodb_cluster_v2_instance instaclustr_mongodb_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrMongodbClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrMongodbClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_mongodb_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.36',
        providerVersionConstraint: '2.1.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionString = config.connectionString;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._mongodbInitCommands = config.mongodbInitCommands;
    this._mongodbVersion = config.mongodbVersion;
    this._name = config.name;
    this._pciComplianceMode = config.pciComplianceMode;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._dataCentre.internalValue = config.dataCentre;
    this._mongodbConfiguration.internalValue = config.mongodbConfiguration;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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

  // mongodb_init_commands - computed: true, optional: true, required: false
  private _mongodbInitCommands?: string[]; 
  public get mongodbInitCommands() {
    return this.getListAttribute('mongodb_init_commands');
  }
  public set mongodbInitCommands(value: string[]) {
    this._mongodbInitCommands = value;
  }
  public resetMongodbInitCommands() {
    this._mongodbInitCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbInitCommandsInput() {
    return this._mongodbInitCommands;
  }

  // mongodb_version - computed: true, optional: true, required: false
  private _mongodbVersion?: string; 
  public get mongodbVersion() {
    return this.getStringAttribute('mongodb_version');
  }
  public set mongodbVersion(value: string) {
    this._mongodbVersion = value;
  }
  public resetMongodbVersion() {
    this._mongodbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbVersionInput() {
    return this._mongodbVersion;
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
  private _dataCentre = new DataInstaclustrMongodbClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrMongodbClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  public resetDataCentre() {
    this._dataCentre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // mongodb_configuration - computed: false, optional: true, required: false
  private _mongodbConfiguration = new DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationList(this, "mongodb_configuration", false);
  public get mongodbConfiguration() {
    return this._mongodbConfiguration;
  }
  public putMongodbConfiguration(value: DataInstaclustrMongodbClusterV2InstanceMongodbConfiguration[] | cdktf.IResolvable) {
    this._mongodbConfiguration.internalValue = value;
  }
  public resetMongodbConfiguration() {
    this._mongodbConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConfigurationInput() {
    return this._mongodbConfiguration.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new DataInstaclustrMongodbClusterV2InstanceResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: DataInstaclustrMongodbClusterV2InstanceResizeSettings[] | cdktf.IResolvable) {
    this._resizeSettings.internalValue = value;
  }
  public resetResizeSettings() {
    this._resizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeSettingsInput() {
    return this._resizeSettings.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrMongodbClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
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
      connection_string: cdktf.stringToTerraform(this._connectionString),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mongodb_init_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mongodbInitCommands),
      mongodb_version: cdktf.stringToTerraform(this._mongodbVersion),
      name: cdktf.stringToTerraform(this._name),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      data_centre: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      mongodb_configuration: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceMongodbConfigurationToTerraform, true)(this._mongodbConfiguration.internalValue),
      resize_settings: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
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
      mongodb_init_commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mongodbInitCommands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mongodb_version: {
        value: cdktf.stringToHclTerraform(this._mongodbVersion),
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
        value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrMongodbClusterV2InstanceDataCentreList",
      },
      mongodb_configuration: {
        value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceMongodbConfigurationToHclTerraform, true)(this._mongodbConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrMongodbClusterV2InstanceMongodbConfigurationList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrMongodbClusterV2InstanceResizeSettingsList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrMongodbClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
