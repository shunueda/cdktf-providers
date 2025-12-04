// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Version of ClickHouse to run on the cluster. Available versions: <ul> <li>`25.3.8`</li> <li>`25.8.11`</li> <li>`24.8.14`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#clickhouse_version ClickhouseClusterV2#clickhouse_version}
  */
  readonly clickhouseVersion: string;
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#current_cluster_operation_status ClickhouseClusterV2#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#description ClickhouseClusterV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#name ClickhouseClusterV2#name}
  */
  readonly name: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#private_network_cluster ClickhouseClusterV2#private_network_cluster}
  */
  readonly privateNetworkCluster: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#sla_tier ClickhouseClusterV2#sla_tier}
  */
  readonly slaTier: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#data_centre ClickhouseClusterV2#data_centre}
  */
  readonly dataCentre: ClickhouseClusterV2DataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#resize_settings ClickhouseClusterV2#resize_settings}
  */
  readonly resizeSettings?: ClickhouseClusterV2ResizeSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#timeouts ClickhouseClusterV2#timeouts}
  */
  readonly timeouts?: ClickhouseClusterV2Timeouts;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#two_factor_delete ClickhouseClusterV2#two_factor_delete}
  */
  readonly twoFactorDelete?: ClickhouseClusterV2TwoFactorDelete[] | cdktf.IResolvable;
}
export interface ClickhouseClusterV2DataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#custom_virtual_network_id ClickhouseClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#ebs_encryption_key ClickhouseClusterV2#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function clickhouseClusterV2DataCentreAwsSettingsToTerraform(struct?: ClickhouseClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function clickhouseClusterV2DataCentreAwsSettingsToHclTerraform(struct?: ClickhouseClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreAwsSettingsOutputReference {
    return new ClickhouseClusterV2DataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#custom_virtual_network_id ClickhouseClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#resource_group ClickhouseClusterV2#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#storage_network ClickhouseClusterV2#storage_network}
  */
  readonly storageNetwork?: string;
}

export function clickhouseClusterV2DataCentreAzureSettingsToTerraform(struct?: ClickhouseClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
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


export function clickhouseClusterV2DataCentreAzureSettingsToHclTerraform(struct?: ClickhouseClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreAzureSettingsOutputReference {
    return new ClickhouseClusterV2DataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations {
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#created ClickhouseClusterV2#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#modified ClickhouseClusterV2#modified}
  */
  readonly modified?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_id ClickhouseClusterV2#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
}

export function clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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


export function clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations | cdktf.IResolvable | undefined) {
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

  // status - computed: false, optional: true, required: false
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

export class ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#cdc_id ClickhouseClusterV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#created ClickhouseClusterV2#created}
  */
  readonly created?: string;
  /**
  * Operation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of the last modification of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#modified ClickhouseClusterV2#modified}
  */
  readonly modified?: string;
  /**
  * Number of nodes set to delete in the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#number_of_nodes_to_delete ClickhouseClusterV2#number_of_nodes_to_delete}
  */
  readonly numberOfNodesToDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
  /**
  * delete_node_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#delete_node_operations ClickhouseClusterV2#delete_node_operations}
  */
  readonly deleteNodeOperations?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
    delete_node_operations: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToTerraform, true)(struct!.deleteNodeOperations),
  }
}


export function clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsToHclTerraform, true)(struct!.deleteNodeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes | cdktf.IResolvable | undefined) {
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

  // number_of_nodes_to_delete - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
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
  private _deleteNodeOperations = new ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperationsList(this, "delete_node_operations", false);
  public get deleteNodeOperations() {
    return this._deleteNodeOperations;
  }
  public putDeleteNodeOperations(value: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesDeleteNodeOperations[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations {
  /**
  * Timestamp of the creation of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#created ClickhouseClusterV2#created}
  */
  readonly created?: string;
  /**
  * ID of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the new node in the replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#new_node_id ClickhouseClusterV2#new_node_id}
  */
  readonly newNodeId?: string;
  /**
  * ID of the node being replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_id ClickhouseClusterV2#node_id}
  */
  readonly nodeId?: string;
  /**
  * Status of the node replacement operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
}

export function clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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


export function clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations {
  /**
  * Timestamp of the completion of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#completed ClickhouseClusterV2#completed}
  */
  readonly completed?: string;
  /**
  * Number of nodes that can be concurrently resized at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#concurrent_resizes ClickhouseClusterV2#concurrent_resizes}
  */
  readonly concurrentResizes?: number;
  /**
  * Timestamp of the creation of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#created ClickhouseClusterV2#created}
  */
  readonly created?: string;
  /**
  * ID of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timestamp of when Instaclustr Support has been alerted to the resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#instaclustr_support_alerted ClickhouseClusterV2#instaclustr_support_alerted}
  */
  readonly instaclustrSupportAlerted?: string;
  /**
  * New size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#new_node_size ClickhouseClusterV2#new_node_size}
  */
  readonly newNodeSize?: string;
  /**
  * Purpose of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_purpose ClickhouseClusterV2#node_purpose}
  */
  readonly nodePurpose?: string;
  /**
  * Status of the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
  /**
  * replace_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#replace_operations ClickhouseClusterV2#replace_operations}
  */
  readonly replaceOperations?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
    replace_operations: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToTerraform, true)(struct!.replaceOperations),
  }
}


export function clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsToHclTerraform, true)(struct!.replaceOperations),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations | cdktf.IResolvable | undefined) {
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
  private _replaceOperations = new ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperationsList(this, "replace_operations", false);
  public get replaceOperations() {
    return this._replaceOperations;
  }
  public putReplaceOperations(value: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsReplaceOperations[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperationsResize {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#operations ClickhouseClusterV2#operations}
  */
  readonly operations?: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreCurrentOperationsResizeToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsToTerraform, true)(struct!.operations),
  }
}


export function clickhouseClusterV2DataCentreCurrentOperationsResizeToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsResizeOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperationsResize | cdktf.IResolvable | undefined) {
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
  private _operations = new ClickhouseClusterV2DataCentreCurrentOperationsResizeOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: ClickhouseClusterV2DataCentreCurrentOperationsResizeOperations[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsResizeList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsResizeOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreCurrentOperations {
  /**
  * delete_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#delete_nodes ClickhouseClusterV2#delete_nodes}
  */
  readonly deleteNodes?: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#resize ClickhouseClusterV2#resize}
  */
  readonly resize?: ClickhouseClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreCurrentOperationsToTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nodes: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesToTerraform, true)(struct!.deleteNodes),
    resize: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsResizeToTerraform, true)(struct!.resize),
  }
}


export function clickhouseClusterV2DataCentreCurrentOperationsToHclTerraform(struct?: ClickhouseClusterV2DataCentreCurrentOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nodes: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsDeleteNodesToHclTerraform, true)(struct!.deleteNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesList",
    },
    resize: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsResizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreCurrentOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreCurrentOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreCurrentOperations | cdktf.IResolvable | undefined) {
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
  private _deleteNodes = new ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodesList(this, "delete_nodes", false);
  public get deleteNodes() {
    return this._deleteNodes;
  }
  public putDeleteNodes(value: ClickhouseClusterV2DataCentreCurrentOperationsDeleteNodes[] | cdktf.IResolvable) {
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
  private _resize = new ClickhouseClusterV2DataCentreCurrentOperationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: ClickhouseClusterV2DataCentreCurrentOperationsResize[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreCurrentOperationsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreCurrentOperationsOutputReference {
    return new ClickhouseClusterV2DataCentreCurrentOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper {
  /**
  * Dedicated ClickHouse Keeper node count, it must be 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_count ClickhouseClusterV2#node_count}
  */
  readonly nodeCount: number;
  /**
  * Size of the nodes provisioned as dedicated ClickHouse Keeper nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_size ClickhouseClusterV2#node_size}
  */
  readonly nodeSize: string;
}

export function clickhouseClusterV2DataCentreDedicatedClickHouseKeeperToTerraform(struct?: ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
  }
}


export function clickhouseClusterV2DataCentreDedicatedClickHouseKeeperToHclTerraform(struct?: ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper | cdktf.IResolvable | undefined) {
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
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
}

export class ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperOutputReference {
    return new ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#deletion_time ClickhouseClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_roles ClickhouseClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_size ClickhouseClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#private_address ClickhouseClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#public_address ClickhouseClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#rack ClickhouseClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#start_time ClickhouseClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
}

export function clickhouseClusterV2DataCentreDeletedNodesToTerraform(struct?: ClickhouseClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function clickhouseClusterV2DataCentreDeletedNodesToHclTerraform(struct?: ClickhouseClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreDeletedNodesOutputReference {
    return new ClickhouseClusterV2DataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#custom_virtual_network_id ClickhouseClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function clickhouseClusterV2DataCentreGcpSettingsToTerraform(struct?: ClickhouseClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function clickhouseClusterV2DataCentreGcpSettingsToHclTerraform(struct?: ClickhouseClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreGcpSettingsOutputReference {
    return new ClickhouseClusterV2DataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#deletion_time ClickhouseClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_roles ClickhouseClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_size ClickhouseClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#private_address ClickhouseClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#public_address ClickhouseClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#rack ClickhouseClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#start_time ClickhouseClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
}

export function clickhouseClusterV2DataCentreNodesToTerraform(struct?: ClickhouseClusterV2DataCentreNodes | cdktf.IResolvable): any {
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


export function clickhouseClusterV2DataCentreNodesToHclTerraform(struct?: ClickhouseClusterV2DataCentreNodes | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreNodes | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreNodesOutputReference {
    return new ClickhouseClusterV2DataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink {
  /**
  * The endpoint service name for the PrivateLink connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#endpoint_service_name ClickhouseClusterV2#endpoint_service_name}
  */
  readonly endpointServiceName?: string;
  /**
  * Enable PrivateLink on the cluster, see [PrivateLink](https://www.instaclustr.com/support/documentation/useful-information/privatelink/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#use_aws_private_link ClickhouseClusterV2#use_aws_private_link}
  */
  readonly useAwsPrivateLink?: boolean | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkToTerraform(struct?: ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_service_name: cdktf.stringToTerraform(struct!.endpointServiceName),
    use_aws_private_link: cdktf.booleanToTerraform(struct!.useAwsPrivateLink),
  }
}


export function clickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkToHclTerraform(struct?: ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aws_private_link: {
      value: cdktf.booleanToHclTerraform(struct!.useAwsPrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointServiceName = this._endpointServiceName;
    }
    if (this._useAwsPrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAwsPrivateLink = this._useAwsPrivateLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointServiceName = undefined;
      this._useAwsPrivateLink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointServiceName = value.endpointServiceName;
      this._useAwsPrivateLink = value.useAwsPrivateLink;
    }
  }

  // endpoint_service_name - computed: true, optional: true, required: false
  private _endpointServiceName?: string; 
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }
  public set endpointServiceName(value: string) {
    this._endpointServiceName = value;
  }
  public resetEndpointServiceName() {
    this._endpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceNameInput() {
    return this._endpointServiceName;
  }

  // use_aws_private_link - computed: false, optional: true, required: false
  private _useAwsPrivateLink?: boolean | cdktf.IResolvable; 
  public get useAwsPrivateLink() {
    return this.getBooleanAttribute('use_aws_private_link');
  }
  public set useAwsPrivateLink(value: boolean | cdktf.IResolvable) {
    this._useAwsPrivateLink = value;
  }
  public resetUseAwsPrivateLink() {
    this._useAwsPrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsPrivateLinkInput() {
    return this._useAwsPrivateLink;
  }
}

export class ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkOutputReference {
    return new ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentrePrivateConnectivity {
  /**
  * aws_private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#aws_private_link ClickhouseClusterV2#aws_private_link}
  */
  readonly awsPrivateLink?: ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentrePrivateConnectivityToTerraform(struct?: ClickhouseClusterV2DataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_link: cdktf.listMapper(clickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkToTerraform, true)(struct!.awsPrivateLink),
  }
}


export function clickhouseClusterV2DataCentrePrivateConnectivityToHclTerraform(struct?: ClickhouseClusterV2DataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_link: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkToHclTerraform, true)(struct!.awsPrivateLink),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentrePrivateConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentrePrivateConnectivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPrivateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateLink = this._awsPrivateLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClusterV2DataCentrePrivateConnectivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsPrivateLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsPrivateLink.internalValue = value.awsPrivateLink;
    }
  }

  // aws_private_link - computed: false, optional: true, required: false
  private _awsPrivateLink = new ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLinkList(this, "aws_private_link", false);
  public get awsPrivateLink() {
    return this._awsPrivateLink;
  }
  public putAwsPrivateLink(value: ClickhouseClusterV2DataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable) {
    this._awsPrivateLink.internalValue = value;
  }
  public resetAwsPrivateLink() {
    this._awsPrivateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInput() {
    return this._awsPrivateLink.internalValue;
  }
}

export class ClickhouseClusterV2DataCentrePrivateConnectivityList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentrePrivateConnectivity[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentrePrivateConnectivityOutputReference {
    return new ClickhouseClusterV2DataCentrePrivateConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreTag {
  /**
  * Key of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#key ClickhouseClusterV2#key}
  */
  readonly key: string;
  /**
  * Value of the tag for the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#value ClickhouseClusterV2#value}
  */
  readonly value?: string;
}

export function clickhouseClusterV2DataCentreTagToTerraform(struct?: ClickhouseClusterV2DataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clickhouseClusterV2DataCentreTagToHclTerraform(struct?: ClickhouseClusterV2DataCentreTag | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreTag | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2DataCentreTagList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreTagOutputReference {
    return new ClickhouseClusterV2DataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings {
  /**
  * Blob storage container name for ClickHouse remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#container_name ClickhouseClusterV2#container_name}
  */
  readonly containerName: string;
}

export function clickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsToTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
  }
}


export function clickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsToHclTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings | cdktf.IResolvable | undefined) {
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
}

export class ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsOutputReference {
    return new ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreTieredStorageS3Settings {
  /**
  * By default data in the S3 bucket will be stored in a folder named after the cluster's ID. If a prefix is provided, data will be stored in `<prefix>/<cluster_id>` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#prefix ClickhouseClusterV2#prefix}
  */
  readonly prefix?: string;
  /**
  * S3 bucket name for ClickHouse remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#s3_bucket_name ClickhouseClusterV2#s3_bucket_name}
  */
  readonly s3BucketName: string;
}

export function clickhouseClusterV2DataCentreTieredStorageS3SettingsToTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorageS3Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
  }
}


export function clickhouseClusterV2DataCentreTieredStorageS3SettingsToHclTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorageS3Settings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2DataCentreTieredStorageS3SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreTieredStorageS3Settings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreTieredStorageS3Settings | cdktf.IResolvable | undefined) {
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

  // prefix - computed: false, optional: true, required: false
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

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }
}

export class ClickhouseClusterV2DataCentreTieredStorageS3SettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreTieredStorageS3Settings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreTieredStorageS3SettingsOutputReference {
    return new ClickhouseClusterV2DataCentreTieredStorageS3SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentreTieredStorage {
  /**
  * azure_blob_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#azure_blob_storage_settings ClickhouseClusterV2#azure_blob_storage_settings}
  */
  readonly azureBlobStorageSettings?: ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable;
  /**
  * s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#s3_settings ClickhouseClusterV2#s3_settings}
  */
  readonly s3Settings?: ClickhouseClusterV2DataCentreTieredStorageS3Settings[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreTieredStorageToTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage_settings: cdktf.listMapper(clickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsToTerraform, true)(struct!.azureBlobStorageSettings),
    s3_settings: cdktf.listMapper(clickhouseClusterV2DataCentreTieredStorageS3SettingsToTerraform, true)(struct!.s3Settings),
  }
}


export function clickhouseClusterV2DataCentreTieredStorageToHclTerraform(struct?: ClickhouseClusterV2DataCentreTieredStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_blob_storage_settings: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsToHclTerraform, true)(struct!.azureBlobStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsList",
    },
    s3_settings: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreTieredStorageS3SettingsToHclTerraform, true)(struct!.s3Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreTieredStorageS3SettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreTieredStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentreTieredStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2DataCentreTieredStorage | cdktf.IResolvable | undefined) {
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
  private _azureBlobStorageSettings = new ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettingsList(this, "azure_blob_storage_settings", false);
  public get azureBlobStorageSettings() {
    return this._azureBlobStorageSettings;
  }
  public putAzureBlobStorageSettings(value: ClickhouseClusterV2DataCentreTieredStorageAzureBlobStorageSettings[] | cdktf.IResolvable) {
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
  private _s3Settings = new ClickhouseClusterV2DataCentreTieredStorageS3SettingsList(this, "s3_settings", false);
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: ClickhouseClusterV2DataCentreTieredStorageS3Settings[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreTieredStorageList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentreTieredStorage[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreTieredStorageOutputReference {
    return new ClickhouseClusterV2DataCentreTieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2DataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#cloud_provider ClickhouseClusterV2#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#id ClickhouseClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Domain of the Network Load Balancer if enabled. Balances requests against nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#load_balancer_domain ClickhouseClusterV2#load_balancer_domain}
  */
  readonly loadBalancerDomain?: string;
  /**
  * Enable Load Balancer for ClickHouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#load_balancer_enabled ClickhouseClusterV2#load_balancer_enabled}
  */
  readonly loadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#name ClickhouseClusterV2#name}
  */
  readonly name: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#network ClickhouseClusterV2#network}
  */
  readonly network: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-t3.small-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-m7i.large-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.2xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.4xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.8xlarge-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-m7i.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-r7i.large-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DEV-Standard_D2s_v5-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-DEV-Standard_B2ls_v2-30 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-100 </td> <td>General Availability</td> </tr> <tr> <td>CLK-DK-PRD-Standard_B2s_v2-50 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D16s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-1000 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D32s_v5-750 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D4s_v5-500 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-250 </td> <td>General Availability</td> </tr> <tr> <td>CLK-PRD-Standard_D8s_v5-500 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#node_size ClickhouseClusterV2#node_size}
  */
  readonly nodeSize: string;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#provider_account_name ClickhouseClusterV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#region ClickhouseClusterV2#region}
  */
  readonly region: string;
  /**
  * Total number of replicas of data in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#replicas ClickhouseClusterV2#replicas}
  */
  readonly replicas: number;
  /**
  * Total number of shards in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#shards ClickhouseClusterV2#shards}
  */
  readonly shards: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#status ClickhouseClusterV2#status}
  */
  readonly status?: string;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#zero_inbound_access ClickhouseClusterV2#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#aws_settings ClickhouseClusterV2#aws_settings}
  */
  readonly awsSettings?: ClickhouseClusterV2DataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#azure_settings ClickhouseClusterV2#azure_settings}
  */
  readonly azureSettings?: ClickhouseClusterV2DataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * current_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#current_operations ClickhouseClusterV2#current_operations}
  */
  readonly currentOperations?: ClickhouseClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable;
  /**
  * dedicated_click_house_keeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#dedicated_click_house_keeper ClickhouseClusterV2#dedicated_click_house_keeper}
  */
  readonly dedicatedClickHouseKeeper?: ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#deleted_nodes ClickhouseClusterV2#deleted_nodes}
  */
  readonly deletedNodes?: ClickhouseClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#gcp_settings ClickhouseClusterV2#gcp_settings}
  */
  readonly gcpSettings?: ClickhouseClusterV2DataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#nodes ClickhouseClusterV2#nodes}
  */
  readonly nodes?: ClickhouseClusterV2DataCentreNodes[] | cdktf.IResolvable;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#private_connectivity ClickhouseClusterV2#private_connectivity}
  */
  readonly privateConnectivity?: ClickhouseClusterV2DataCentrePrivateConnectivity[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#tag ClickhouseClusterV2#tag}
  */
  readonly tag?: ClickhouseClusterV2DataCentreTag[] | cdktf.IResolvable;
  /**
  * tiered_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#tiered_storage ClickhouseClusterV2#tiered_storage}
  */
  readonly tieredStorage?: ClickhouseClusterV2DataCentreTieredStorage[] | cdktf.IResolvable;
}

export function clickhouseClusterV2DataCentreToTerraform(struct?: ClickhouseClusterV2DataCentre | cdktf.IResolvable): any {
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
    aws_settings: cdktf.listMapper(clickhouseClusterV2DataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(clickhouseClusterV2DataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    current_operations: cdktf.listMapper(clickhouseClusterV2DataCentreCurrentOperationsToTerraform, true)(struct!.currentOperations),
    dedicated_click_house_keeper: cdktf.listMapper(clickhouseClusterV2DataCentreDedicatedClickHouseKeeperToTerraform, true)(struct!.dedicatedClickHouseKeeper),
    deleted_nodes: cdktf.listMapper(clickhouseClusterV2DataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(clickhouseClusterV2DataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(clickhouseClusterV2DataCentreNodesToTerraform, true)(struct!.nodes),
    private_connectivity: cdktf.listMapper(clickhouseClusterV2DataCentrePrivateConnectivityToTerraform, true)(struct!.privateConnectivity),
    tag: cdktf.listMapper(clickhouseClusterV2DataCentreTagToTerraform, true)(struct!.tag),
    tiered_storage: cdktf.listMapper(clickhouseClusterV2DataCentreTieredStorageToTerraform, true)(struct!.tieredStorage),
  }
}


export function clickhouseClusterV2DataCentreToHclTerraform(struct?: ClickhouseClusterV2DataCentre | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreAzureSettingsList",
    },
    current_operations: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreCurrentOperationsToHclTerraform, true)(struct!.currentOperations),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreCurrentOperationsList",
    },
    dedicated_click_house_keeper: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreDedicatedClickHouseKeeperToHclTerraform, true)(struct!.dedicatedClickHouseKeeper),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreNodesList",
    },
    private_connectivity: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentrePrivateConnectivityToHclTerraform, true)(struct!.privateConnectivity),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentrePrivateConnectivityList",
    },
    tag: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreTagList",
    },
    tiered_storage: {
      value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreTieredStorageToHclTerraform, true)(struct!.tieredStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClusterV2DataCentreTieredStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClusterV2DataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2DataCentre | cdktf.IResolvable | undefined {
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
    if (this._privateConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivity = this._privateConnectivity?.internalValue;
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

  public set internalValue(value: ClickhouseClusterV2DataCentre | cdktf.IResolvable | undefined) {
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
      this._privateConnectivity.internalValue = undefined;
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
      this._privateConnectivity.internalValue = value.privateConnectivity;
      this._tag.internalValue = value.tag;
      this._tieredStorage.internalValue = value.tieredStorage;
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

  // load_balancer_enabled - computed: false, optional: true, required: false
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

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // shards - computed: false, optional: false, required: true
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
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
  private _awsSettings = new ClickhouseClusterV2DataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: ClickhouseClusterV2DataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new ClickhouseClusterV2DataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: ClickhouseClusterV2DataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _currentOperations = new ClickhouseClusterV2DataCentreCurrentOperationsList(this, "current_operations", false);
  public get currentOperations() {
    return this._currentOperations;
  }
  public putCurrentOperations(value: ClickhouseClusterV2DataCentreCurrentOperations[] | cdktf.IResolvable) {
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
  private _dedicatedClickHouseKeeper = new ClickhouseClusterV2DataCentreDedicatedClickHouseKeeperList(this, "dedicated_click_house_keeper", false);
  public get dedicatedClickHouseKeeper() {
    return this._dedicatedClickHouseKeeper;
  }
  public putDedicatedClickHouseKeeper(value: ClickhouseClusterV2DataCentreDedicatedClickHouseKeeper[] | cdktf.IResolvable) {
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
  private _deletedNodes = new ClickhouseClusterV2DataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: ClickhouseClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new ClickhouseClusterV2DataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: ClickhouseClusterV2DataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new ClickhouseClusterV2DataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ClickhouseClusterV2DataCentreNodes[] | cdktf.IResolvable) {
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
  private _privateConnectivity = new ClickhouseClusterV2DataCentrePrivateConnectivityList(this, "private_connectivity", false);
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: ClickhouseClusterV2DataCentrePrivateConnectivity[] | cdktf.IResolvable) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ClickhouseClusterV2DataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ClickhouseClusterV2DataCentreTag[] | cdktf.IResolvable) {
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
  private _tieredStorage = new ClickhouseClusterV2DataCentreTieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
  public putTieredStorage(value: ClickhouseClusterV2DataCentreTieredStorage[] | cdktf.IResolvable) {
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

export class ClickhouseClusterV2DataCentreList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2DataCentre[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2DataCentreOutputReference {
    return new ClickhouseClusterV2DataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2ResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#concurrency ClickhouseClusterV2#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#notify_support_contacts ClickhouseClusterV2#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function clickhouseClusterV2ResizeSettingsToTerraform(struct?: ClickhouseClusterV2ResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function clickhouseClusterV2ResizeSettingsToHclTerraform(struct?: ClickhouseClusterV2ResizeSettings | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2ResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2ResizeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2ResizeSettings | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2ResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2ResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2ResizeSettingsOutputReference {
    return new ClickhouseClusterV2ResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#create ClickhouseClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#default ClickhouseClusterV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#update ClickhouseClusterV2#update}
  */
  readonly update?: string;
}

export function clickhouseClusterV2TimeoutsToTerraform(struct?: ClickhouseClusterV2Timeouts | cdktf.IResolvable): any {
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


export function clickhouseClusterV2TimeoutsToHclTerraform(struct?: ClickhouseClusterV2Timeouts | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseClusterV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2Timeouts | cdktf.IResolvable | undefined) {
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
export interface ClickhouseClusterV2TwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#confirmation_email ClickhouseClusterV2#confirmation_email}
  */
  readonly confirmationEmail: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#confirmation_phone_number ClickhouseClusterV2#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function clickhouseClusterV2TwoFactorDeleteToTerraform(struct?: ClickhouseClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function clickhouseClusterV2TwoFactorDeleteToHclTerraform(struct?: ClickhouseClusterV2TwoFactorDelete | cdktf.IResolvable): any {
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

export class ClickhouseClusterV2TwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClusterV2TwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClusterV2TwoFactorDelete | cdktf.IResolvable | undefined) {
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

export class ClickhouseClusterV2TwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClusterV2TwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClusterV2TwoFactorDeleteOutputReference {
    return new ClickhouseClusterV2TwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2 instaclustr_clickhouse_cluster_v2}
*/
export class ClickhouseClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseClusterV2 to import
  * @param importFromId The id of the existing ClickhouseClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/resources/clickhouse_cluster_v2 instaclustr_clickhouse_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ClickhouseClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
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
    this._timeouts.internalValue = config.timeouts;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clickhouse_version - computed: false, optional: false, required: true
  private _clickhouseVersion?: string; 
  public get clickhouseVersion() {
    return this.getStringAttribute('clickhouse_version');
  }
  public set clickhouseVersion(value: string) {
    this._clickhouseVersion = value;
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

  // data_centre - computed: false, optional: false, required: true
  private _dataCentre = new ClickhouseClusterV2DataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: ClickhouseClusterV2DataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // resize_settings - computed: false, optional: true, required: false
  private _resizeSettings = new ClickhouseClusterV2ResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: ClickhouseClusterV2ResizeSettings[] | cdktf.IResolvable) {
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
  private _timeouts = new ClickhouseClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickhouseClusterV2Timeouts) {
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
  private _twoFactorDelete = new ClickhouseClusterV2TwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: ClickhouseClusterV2TwoFactorDelete[] | cdktf.IResolvable) {
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
      data_centre: cdktf.listMapper(clickhouseClusterV2DataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(clickhouseClusterV2ResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      timeouts: clickhouseClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      two_factor_delete: cdktf.listMapper(clickhouseClusterV2TwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
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
        value: cdktf.listMapperHcl(clickhouseClusterV2DataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseClusterV2DataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(clickhouseClusterV2ResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseClusterV2ResizeSettingsList",
      },
      timeouts: {
        value: clickhouseClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseClusterV2Timeouts",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(clickhouseClusterV2TwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseClusterV2TwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
