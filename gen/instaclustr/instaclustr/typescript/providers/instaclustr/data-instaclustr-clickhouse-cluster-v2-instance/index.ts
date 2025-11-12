// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClickhouseClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Version of ClickHouse to run on the cluster. Available versions: <ul> <li>`25.3.6`</li> <li>`23.8.16`</li> <li>`24.3.18`</li> <li>`24.8.14`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#clickhouse_version DataInstaclustrClickhouseClusterV2Instance#clickhouse_version}
  */
  readonly clickhouseVersion?: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#current_cluster_operation_status DataInstaclustrClickhouseClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#description DataInstaclustrClickhouseClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#name DataInstaclustrClickhouseClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#private_network_cluster DataInstaclustrClickhouseClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#sla_tier DataInstaclustrClickhouseClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#data_centre DataInstaclustrClickhouseClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrClickhouseClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#resize_settings DataInstaclustrClickhouseClusterV2Instance#resize_settings}
  */
  readonly resizeSettings?: DataInstaclustrClickhouseClusterV2InstanceResizeSettings[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#two_factor_delete DataInstaclustrClickhouseClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#custom_virtual_network_id DataInstaclustrClickhouseClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#ebs_encryption_key DataInstaclustrClickhouseClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#custom_virtual_network_id DataInstaclustrClickhouseClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#resource_group DataInstaclustrClickhouseClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#storage_network DataInstaclustrClickhouseClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations {
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#created DataInstaclustrClickhouseClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#modified DataInstaclustrClickhouseClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_id DataInstaclustrClickhouseClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#cdc_id DataInstaclustrClickhouseClusterV2Instance#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#created DataInstaclustrClickhouseClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#modified DataInstaclustrClickhouseClusterV2Instance#modified}
  */
  readonly modified?: string;
  /**
  * Number of nodes set to delete in the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#number_of_nodes_to_delete DataInstaclustrClickhouseClusterV2Instance#number_of_nodes_to_delete}
  */
  readonly numberOfNodesToDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * delete_node_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#delete_node_operations DataInstaclustrClickhouseClusterV2Instance#delete_node_operations}
  */
  readonly deleteNodeOperations?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
    delete_node_operations: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform, true)(struct!.deleteNodeOperations),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform, true)(struct!.deleteNodeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined) {
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
  private _deleteNodeOperations = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList(this, "delete_node_operations", false);
  public get deleteNodeOperations() {
    return this._deleteNodeOperations;
  }
  public putDeleteNodeOperations(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations {
  /**
  * Timestamp of the creation of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#created DataInstaclustrClickhouseClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the new node in the replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#new_node_id DataInstaclustrClickhouseClusterV2Instance#new_node_id}
  */
  readonly newNodeId?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_id DataInstaclustrClickhouseClusterV2Instance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Status of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations {
  /**
  * Timestamp of the completion of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#completed DataInstaclustrClickhouseClusterV2Instance#completed}
  */
  readonly completed?: string;
  /**
  * Number of nodes that can be concurrently resized at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#concurrent_resizes DataInstaclustrClickhouseClusterV2Instance#concurrent_resizes}
  */
  readonly concurrentResizes?: number;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#created DataInstaclustrClickhouseClusterV2Instance#created}
  */
  readonly created?: string;
  /**
  * ID of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of when Instaclustr Support has been alerted to the resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#instaclustr_support_alerted DataInstaclustrClickhouseClusterV2Instance#instaclustr_support_alerted}
  */
  readonly instaclustrSupportAlerted?: string;
  /**
  * New size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#new_node_size DataInstaclustrClickhouseClusterV2Instance#new_node_size}
  */
  readonly newNodeSize?: string;
  /**
  * Purpose of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_purpose DataInstaclustrClickhouseClusterV2Instance#node_purpose}
  */
  readonly nodePurpose?: string;
  /**
  * Status of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * replace_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#replace_operations DataInstaclustrClickhouseClusterV2Instance#replace_operations}
  */
  readonly replaceOperations?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
    replace_operations: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform, true)(struct!.replaceOperations),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform, true)(struct!.replaceOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined) {
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
  private _replaceOperations = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperationsList(this, "replace_operations", false);
  public get replaceOperations() {
    return this._replaceOperations;
  }
  public putReplaceOperations(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#operations DataInstaclustrClickhouseClusterV2Instance#operations}
  */
  readonly operations?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToTerraform, true)(struct!.operations),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize | cdktf.IResolvable | undefined) {
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
  private _operations = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations {
  /**
  * delete_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#delete_nodes DataInstaclustrClickhouseClusterV2Instance#delete_nodes}
  */
  readonly deleteNodes?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#resize DataInstaclustrClickhouseClusterV2Instance#resize}
  */
  readonly resize?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToTerraform, true)(struct!.deleteNodes),
    resize: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeToTerraform, true)(struct!.resize),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesToHclTerraform, true)(struct!.deleteNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList",
    },
    resize: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations | cdktf.IResolvable | undefined) {
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
  private _deleteNodes = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodesList(this, "delete_nodes", false);
  public get deleteNodes() {
    return this._deleteNodes;
  }
  public putDeleteNodes(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable) {
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
  private _resize = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsResize[] | cdktf.IResolvable) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper {
  /**
  * Dedicated ClickHouse Keeper node count, it must be 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_count DataInstaclustrClickhouseClusterV2Instance#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Size of the nodes provisioned as dedicated ClickHouse Keeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_size DataInstaclustrClickhouseClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSize = value.nodeSize;
    }
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
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
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#deletion_time DataInstaclustrClickhouseClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_roles DataInstaclustrClickhouseClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_size DataInstaclustrClickhouseClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#private_address DataInstaclustrClickhouseClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#public_address DataInstaclustrClickhouseClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#rack DataInstaclustrClickhouseClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#start_time DataInstaclustrClickhouseClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#custom_virtual_network_id DataInstaclustrClickhouseClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#deletion_time DataInstaclustrClickhouseClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_roles DataInstaclustrClickhouseClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_size DataInstaclustrClickhouseClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#private_address DataInstaclustrClickhouseClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#public_address DataInstaclustrClickhouseClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#rack DataInstaclustrClickhouseClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#start_time DataInstaclustrClickhouseClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreTag {
  /**
  * Key of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#key DataInstaclustrClickhouseClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#value DataInstaclustrClickhouseClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings {
  /**
  * Blob storage container name for ClickHouse remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#container_name DataInstaclustrClickhouseClusterV2Instance#container_name}
  */
  readonly containerName?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
    }
  }

  // container_name - computed: true, optional: true, required: false
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
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings {
  /**
  * By default data in the S3 bucket will be stored in a folder named after the cluster's ID. If a prefix is provided, data will be stored in `<prefix>/<cluster_id>` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#prefix DataInstaclustrClickhouseClusterV2Instance#prefix}
  */
  readonly prefix?: string;
  /**
  * S3 bucket name for ClickHouse remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#s3_bucket_name DataInstaclustrClickhouseClusterV2Instance#s3_bucket_name}
  */
  readonly s3BucketName?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._s3BucketName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._s3BucketName = value.s3BucketName;
    }
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage {
  /**
  * azure_blob_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#azure_blob_storage_settings DataInstaclustrClickhouseClusterV2Instance#azure_blob_storage_settings}
  */
  readonly azureBlobStorageSettings?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable;
  /**
  * s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#s3_settings DataInstaclustrClickhouseClusterV2Instance#s3_settings}
  */
  readonly s3Settings?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsToTerraform, true)(struct!.azureBlobStorageSettings),
    s3_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsToTerraform, true)(struct!.s3Settings),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_blob_storage_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsToHclTerraform, true)(struct!.azureBlobStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsList",
    },
    s3_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsToHclTerraform, true)(struct!.s3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureBlobStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageSettings = this._azureBlobStorageSettings?.internalValue;
    }
    if (this._s3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Settings = this._s3Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureBlobStorageSettings.internalValue = undefined;
      this._s3Settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureBlobStorageSettings.internalValue = value.azureBlobStorageSettings;
      this._s3Settings.internalValue = value.s3Settings;
    }
  }

  // azure_blob_storage_settings - computed: false, optional: true, required: false
  private _azureBlobStorageSettings = new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettingsList(this, "azure_blob_storage_settings", false);
  public get azureBlobStorageSettings() {
    return this._azureBlobStorageSettings;
  }
  public putAzureBlobStorageSettings(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable) {
    this._azureBlobStorageSettings.internalValue = value;
  }
  public resetAzureBlobStorageSettings() {
    this._azureBlobStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageSettingsInput() {
    return this._azureBlobStorageSettings.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3SettingsList(this, "s3_settings", false);
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageS3Settings[] | cdktf.IResolvable) {
    this._s3Settings.internalValue = value;
  }
  public resetS3Settings() {
    this._s3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SettingsInput() {
    return this._s3Settings.internalValue;
  }
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceDataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#cloud_provider DataInstaclustrClickhouseClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#id DataInstaclustrClickhouseClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Domain of the Network Load Balancer if enabled. Balances requests against nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#load_balancer_domain DataInstaclustrClickhouseClusterV2Instance#load_balancer_domain}
  */
  readonly loadBalancerDomain?: string;
  /**
  * Enable Load Balancer for ClickHouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#load_balancer_enabled DataInstaclustrClickhouseClusterV2Instance#load_balancer_enabled}
  */
  readonly loadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#name DataInstaclustrClickhouseClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#network DataInstaclustrClickhouseClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#node_size DataInstaclustrClickhouseClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#provider_account_name DataInstaclustrClickhouseClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#region DataInstaclustrClickhouseClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Total number of replicas of data in the Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#replicas DataInstaclustrClickhouseClusterV2Instance#replicas}
  */
  readonly replicas?: number;
  /**
  * Total number of shards in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#shards DataInstaclustrClickhouseClusterV2Instance#shards}
  */
  readonly shards?: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#status DataInstaclustrClickhouseClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#zero_inbound_access DataInstaclustrClickhouseClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#aws_settings DataInstaclustrClickhouseClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#azure_settings DataInstaclustrClickhouseClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * current_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#current_operations DataInstaclustrClickhouseClusterV2Instance#current_operations}
  */
  readonly currentOperations?: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable;
  /**
  * dedicated_click_house_keeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#dedicated_click_house_keeper DataInstaclustrClickhouseClusterV2Instance#dedicated_click_house_keeper}
  */
  readonly dedicatedClickHouseKeeper?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#deleted_nodes DataInstaclustrClickhouseClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#gcp_settings DataInstaclustrClickhouseClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#nodes DataInstaclustrClickhouseClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#tag DataInstaclustrClickhouseClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
  /**
  * tiered_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#tiered_storage DataInstaclustrClickhouseClusterV2Instance#tiered_storage}
  */
  readonly tieredStorage?: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage[] | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    id: cdktf.stringToTerraform(struct!.id),
    load_balancer_domain: cdktf.stringToTerraform(struct!.loadBalancerDomain),
    load_balancer_enabled: cdktf.booleanToTerraform(struct!.loadBalancerEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    shards: cdktf.numberToTerraform(struct!.shards),
    status: cdktf.stringToTerraform(struct!.status),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    current_operations: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsToTerraform, true)(struct!.currentOperations),
    dedicated_click_house_keeper: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperToTerraform, true)(struct!.dedicatedClickHouseKeeper),
    deleted_nodes: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    tag: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
    tiered_storage: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageToTerraform, true)(struct!.tieredStorage),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceDataCentre | cdktf.IResolvable): any {
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
    load_balancer_domain: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.loadBalancerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shards: {
      value: cdktf.numberToHclTerraform(struct!.shards),
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
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsList",
    },
    current_operations: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsToHclTerraform, true)(struct!.currentOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsList",
    },
    dedicated_click_house_keeper: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperToHclTerraform, true)(struct!.dedicatedClickHouseKeeper),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreTagList",
    },
    tiered_storage: {
      value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageToHclTerraform, true)(struct!.tieredStorage),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
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
    if (this._loadBalancerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerDomain = this._loadBalancerDomain;
    }
    if (this._loadBalancerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerEnabled = this._loadBalancerEnabled;
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
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._shards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards;
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
    if (this._currentOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentOperations = this._currentOperations?.internalValue;
    }
    if (this._dedicatedClickHouseKeeper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedClickHouseKeeper = this._dedicatedClickHouseKeeper?.internalValue;
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
    if (this._tieredStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredStorage = this._tieredStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._id = undefined;
      this._loadBalancerDomain = undefined;
      this._loadBalancerEnabled = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._replicas = undefined;
      this._shards = undefined;
      this._status = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._currentOperations.internalValue = undefined;
      this._dedicatedClickHouseKeeper.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._tieredStorage.internalValue = undefined;
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
      this._loadBalancerDomain = value.loadBalancerDomain;
      this._loadBalancerEnabled = value.loadBalancerEnabled;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._replicas = value.replicas;
      this._shards = value.shards;
      this._status = value.status;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._currentOperations.internalValue = value.currentOperations;
      this._dedicatedClickHouseKeeper.internalValue = value.dedicatedClickHouseKeeper;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._tag.internalValue = value.tag;
      this._tieredStorage.internalValue = value.tieredStorage;
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

  // load_balancer_domain - computed: true, optional: true, required: false
  private _loadBalancerDomain?: string; 
  public get loadBalancerDomain() {
    return this.getStringAttribute('load_balancer_domain');
  }
  public set loadBalancerDomain(value: string) {
    this._loadBalancerDomain = value;
  }
  public resetLoadBalancerDomain() {
    this._loadBalancerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerDomainInput() {
    return this._loadBalancerDomain;
  }

  // load_balancer_enabled - computed: true, optional: true, required: false
  private _loadBalancerEnabled?: boolean | cdktf.IResolvable; 
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled');
  }
  public set loadBalancerEnabled(value: boolean | cdktf.IResolvable) {
    this._loadBalancerEnabled = value;
  }
  public resetLoadBalancerEnabled() {
    this._loadBalancerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEnabledInput() {
    return this._loadBalancerEnabled;
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

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // shards - computed: true, optional: true, required: false
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  public resetShards() {
    this._shards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
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
  private _awsSettings = new DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _currentOperations = new DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperationsList(this, "current_operations", false);
  public get currentOperations() {
    return this._currentOperations;
  }
  public putCurrentOperations(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreCurrentOperations[] | cdktf.IResolvable) {
    this._currentOperations.internalValue = value;
  }
  public resetCurrentOperations() {
    this._currentOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOperationsInput() {
    return this._currentOperations.internalValue;
  }

  // dedicated_click_house_keeper - computed: false, optional: true, required: false
  private _dedicatedClickHouseKeeper = new DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeperList(this, "dedicated_click_house_keeper", false);
  public get dedicatedClickHouseKeeper() {
    return this._dedicatedClickHouseKeeper;
  }
  public putDedicatedClickHouseKeeper(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable) {
    this._dedicatedClickHouseKeeper.internalValue = value;
  }
  public resetDedicatedClickHouseKeeper() {
    this._dedicatedClickHouseKeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClickHouseKeeperInput() {
    return this._dedicatedClickHouseKeeper.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new DataInstaclustrClickhouseClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
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
  private _tag = new DataInstaclustrClickhouseClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tiered_storage - computed: false, optional: true, required: false
  private _tieredStorage = new DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: DataInstaclustrClickhouseClusterV2InstanceDataCentreTieredStorage[] | cdktf.IResolvable) {
    this._tieredStorage.internalValue = value;
  }
  public resetTieredStorage() {
    this._tieredStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStorageInput() {
    return this._tieredStorage.internalValue;
  }
}

export class DataInstaclustrClickhouseClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#concurrency DataInstaclustrClickhouseClusterV2Instance#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#notify_support_contacts DataInstaclustrClickhouseClusterV2Instance#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseClusterV2InstanceResizeSettingsToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceResizeSettingsToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceResizeSettingsOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#confirmation_email DataInstaclustrClickhouseClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#confirmation_phone_number DataInstaclustrClickhouseClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
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

export class DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance instaclustr_clickhouse_cluster_v2_instance}
*/
export class DataInstaclustrClickhouseClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClickhouseClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClickhouseClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClickhouseClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClickhouseClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.26/docs/data-sources/clickhouse_cluster_v2_instance instaclustr_clickhouse_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClickhouseClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClickhouseClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.26',
        providerVersionConstraint: '2.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clickhouseVersion = config.clickhouseVersion;
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._dataCentre.internalValue = config.dataCentre;
    this._resizeSettings.internalValue = config.resizeSettings;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clickhouse_version - computed: true, optional: true, required: false
  private _clickhouseVersion?: string; 
  public get clickhouseVersion() {
    return this.getStringAttribute('clickhouse_version');
  }
  public set clickhouseVersion(value: string) {
    this._clickhouseVersion = value;
  }
  public resetClickhouseVersion() {
    this._clickhouseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseVersionInput() {
    return this._clickhouseVersion;
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

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrClickhouseClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrClickhouseClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
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
  private _resizeSettings = new DataInstaclustrClickhouseClusterV2InstanceResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: DataInstaclustrClickhouseClusterV2InstanceResizeSettings[] | cdktf.IResolvable) {
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
  private _twoFactorDelete = new DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrClickhouseClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
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
      clickhouse_version: cdktf.stringToTerraform(this._clickhouseVersion),
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      data_centre: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clickhouse_version: {
        value: cdktf.stringToHclTerraform(this._clickhouseVersion),
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
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseClusterV2InstanceDataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseClusterV2InstanceResizeSettingsList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
