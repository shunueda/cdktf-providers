// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrPostgresqlClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#current_cluster_operation_status DataInstaclustrPostgresqlClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * Password of the default user created for the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#default_user_password DataInstaclustrPostgresqlClusterV2Instance#default_user_password}
  */
  readonly defaultUserPassword?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#description DataInstaclustrPostgresqlClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * List of PostgreSQL extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#extensions DataInstaclustrPostgresqlClusterV2Instance#extensions}
  */
  readonly extensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#id DataInstaclustrPostgresqlClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#name DataInstaclustrPostgresqlClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates a PCI compliant cluster, see [PCI Compliance](https://www.instaclustr.com/support/documentation/useful-information/pci-compliance/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#pci_compliance_mode DataInstaclustrPostgresqlClusterV2Instance#pci_compliance_mode}
  */
  readonly pciComplianceMode?: boolean | cdktf.IResolvable;
  /**
  * Version of Postgresql to run on the cluster. Available versions: <ul> <li>`17.6.0`</li> <li>`18.0.0`</li> <li>`16.10.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#postgresql_version DataInstaclustrPostgresqlClusterV2Instance#postgresql_version}
  */
  readonly postgresqlVersion?: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#private_network_cluster DataInstaclustrPostgresqlClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#sla_tier DataInstaclustrPostgresqlClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#status DataInstaclustrPostgresqlClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * Create the PostgreSQL cluster with the selected replication mode, see [PostgreSQL replication mode] (https://www.instaclustr.com/support/documentation/postgresql/options/replication-mode/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#synchronous_mode_strict DataInstaclustrPostgresqlClusterV2Instance#synchronous_mode_strict}
  */
  readonly synchronousModeStrict?: boolean | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#data_centre DataInstaclustrPostgresqlClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrPostgresqlClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * resize_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#resize_settings DataInstaclustrPostgresqlClusterV2Instance#resize_settings}
  */
  readonly resizeSettings?: DataInstaclustrPostgresqlClusterV2InstanceResizeSettings[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#two_factor_delete DataInstaclustrPostgresqlClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#custom_virtual_network_id DataInstaclustrPostgresqlClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#ebs_encryption_key DataInstaclustrPostgresqlClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#custom_virtual_network_id DataInstaclustrPostgresqlClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#resource_group DataInstaclustrPostgresqlClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#storage_network DataInstaclustrPostgresqlClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#deletion_time DataInstaclustrPostgresqlClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#id DataInstaclustrPostgresqlClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#node_roles DataInstaclustrPostgresqlClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#node_size DataInstaclustrPostgresqlClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#private_address DataInstaclustrPostgresqlClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#public_address DataInstaclustrPostgresqlClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#rack DataInstaclustrPostgresqlClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#start_time DataInstaclustrPostgresqlClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#status DataInstaclustrPostgresqlClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#custom_virtual_network_id DataInstaclustrPostgresqlClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication {
  /**
  * Is this Data centre considered to be the primary (only required if multiple data centres defined).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#is_primary_data_centre DataInstaclustrPostgresqlClusterV2Instance#is_primary_data_centre}
  */
  readonly isPrimaryDataCentre?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_primary_data_centre: cdktf.booleanToTerraform(struct!.isPrimaryDataCentre),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_primary_data_centre: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimaryDataCentre),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPrimaryDataCentre !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimaryDataCentre = this._isPrimaryDataCentre;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isPrimaryDataCentre = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isPrimaryDataCentre = value.isPrimaryDataCentre;
    }
  }

  // is_primary_data_centre - computed: true, optional: true, required: false
  private _isPrimaryDataCentre?: boolean | cdktf.IResolvable; 
  public get isPrimaryDataCentre() {
    return this.getBooleanAttribute('is_primary_data_centre');
  }
  public set isPrimaryDataCentre(value: boolean | cdktf.IResolvable) {
    this._isPrimaryDataCentre = value;
  }
  public resetIsPrimaryDataCentre() {
    this._isPrimaryDataCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryDataCentreInput() {
    return this._isPrimaryDataCentre;
  }
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication {
  /**
  * Create the PostgreSQL cluster with the selected replication mode, see [PostgreSQL replication mode] (https://www.instaclustr.com/support/documentation/postgresql/options/replication-mode/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#replication_mode DataInstaclustrPostgresqlClusterV2Instance#replication_mode}
  */
  readonly replicationMode?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_mode: cdktf.stringToTerraform(struct!.replicationMode),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_mode: {
      value: cdktf.stringToHclTerraform(struct!.replicationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationMode = this._replicationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationMode = value.replicationMode;
    }
  }

  // replication_mode - computed: true, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#deletion_time DataInstaclustrPostgresqlClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#id DataInstaclustrPostgresqlClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#node_roles DataInstaclustrPostgresqlClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#node_size DataInstaclustrPostgresqlClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#private_address DataInstaclustrPostgresqlClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#public_address DataInstaclustrPostgresqlClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#rack DataInstaclustrPostgresqlClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#start_time DataInstaclustrPostgresqlClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#status DataInstaclustrPostgresqlClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer {
  /**
  * Version of Pg Bouncer to run on the cluster. Available versions: <ul> <li>`1.24.1`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#pg_bouncer_version DataInstaclustrPostgresqlClusterV2Instance#pg_bouncer_version}
  */
  readonly pgBouncerVersion?: string;
  /**
  * Creates PgBouncer with the selected mode, see [PgBouncer pool modes] (https://www.instaclustr.com/support/documentation/postgresql-add-ons/using-pgbouncer/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#pool_mode DataInstaclustrPostgresqlClusterV2Instance#pool_mode}
  */
  readonly poolMode?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg_bouncer_version: cdktf.stringToTerraform(struct!.pgBouncerVersion),
    pool_mode: cdktf.stringToTerraform(struct!.poolMode),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg_bouncer_version: {
      value: cdktf.stringToHclTerraform(struct!.pgBouncerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_mode: {
      value: cdktf.stringToHclTerraform(struct!.poolMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pgBouncerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgBouncerVersion = this._pgBouncerVersion;
    }
    if (this._poolMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolMode = this._poolMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pgBouncerVersion = undefined;
      this._poolMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pgBouncerVersion = value.pgBouncerVersion;
      this._poolMode = value.poolMode;
    }
  }

  // pg_bouncer_version - computed: true, optional: true, required: false
  private _pgBouncerVersion?: string; 
  public get pgBouncerVersion() {
    return this.getStringAttribute('pg_bouncer_version');
  }
  public set pgBouncerVersion(value: string) {
    this._pgBouncerVersion = value;
  }
  public resetPgBouncerVersion() {
    this._pgBouncerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgBouncerVersionInput() {
    return this._pgBouncerVersion;
  }

  // pool_mode - computed: true, optional: true, required: false
  private _poolMode?: string; 
  public get poolMode() {
    return this.getStringAttribute('pool_mode');
  }
  public set poolMode(value: string) {
    this._poolMode = value;
  }
  public resetPoolMode() {
    this._poolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolModeInput() {
    return this._poolMode;
  }
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink {
  /**
  * The endpoint service name for the private link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#endpoint_service_name DataInstaclustrPostgresqlClusterV2Instance#endpoint_service_name}
  */
  readonly endpointServiceName?: string;
  /**
  * Create a PrivateLink enabled cluster, see [PrivateLink](https://www.instaclustr.com/support/documentation/useful-information/privatelink/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#use_aws_private_link DataInstaclustrPostgresqlClusterV2Instance#use_aws_private_link}
  */
  readonly useAwsPrivateLink?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_service_name: cdktf.stringToTerraform(struct!.endpointServiceName),
    use_aws_private_link: cdktf.booleanToTerraform(struct!.useAwsPrivateLink),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink | cdktf.IResolvable | undefined) {
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

  // use_aws_private_link - computed: true, optional: true, required: false
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink {
  /**
  * The alias for the private link service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#alias DataInstaclustrPostgresqlClusterV2Instance#alias}
  */
  readonly alias?: string;
  /**
  * Flag to indicate that Azure Private Link is to be used for this cluster data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#use_azure_private_link DataInstaclustrPostgresqlClusterV2Instance#use_azure_private_link}
  */
  readonly useAzurePrivateLink?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    use_azure_private_link: cdktf.booleanToTerraform(struct!.useAzurePrivateLink),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_azure_private_link: {
      value: cdktf.booleanToHclTerraform(struct!.useAzurePrivateLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._useAzurePrivateLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAzurePrivateLink = this._useAzurePrivateLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._useAzurePrivateLink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._useAzurePrivateLink = value.useAzurePrivateLink;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // use_azure_private_link - computed: true, optional: true, required: false
  private _useAzurePrivateLink?: boolean | cdktf.IResolvable; 
  public get useAzurePrivateLink() {
    return this.getBooleanAttribute('use_azure_private_link');
  }
  public set useAzurePrivateLink(value: boolean | cdktf.IResolvable) {
    this._useAzurePrivateLink = value;
  }
  public resetUseAzurePrivateLink() {
    this._useAzurePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzurePrivateLinkInput() {
    return this._useAzurePrivateLink;
  }
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity {
  /**
  * aws_private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#aws_private_link DataInstaclustrPostgresqlClusterV2Instance#aws_private_link}
  */
  readonly awsPrivateLink?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable;
  /**
  * azure_private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#azure_private_link DataInstaclustrPostgresqlClusterV2Instance#azure_private_link}
  */
  readonly azurePrivateLink?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink[] | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_link: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkToTerraform, true)(struct!.awsPrivateLink),
    azure_private_link: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkToTerraform, true)(struct!.azurePrivateLink),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_link: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkToHclTerraform, true)(struct!.awsPrivateLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkList",
    },
    azure_private_link: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkToHclTerraform, true)(struct!.azurePrivateLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPrivateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateLink = this._awsPrivateLink?.internalValue;
    }
    if (this._azurePrivateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrivateLink = this._azurePrivateLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsPrivateLink.internalValue = undefined;
      this._azurePrivateLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsPrivateLink.internalValue = value.awsPrivateLink;
      this._azurePrivateLink.internalValue = value.azurePrivateLink;
    }
  }

  // aws_private_link - computed: false, optional: true, required: false
  private _awsPrivateLink = new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLinkList(this, "aws_private_link", false);
  public get awsPrivateLink() {
    return this._awsPrivateLink;
  }
  public putAwsPrivateLink(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAwsPrivateLink[] | cdktf.IResolvable) {
    this._awsPrivateLink.internalValue = value;
  }
  public resetAwsPrivateLink() {
    this._awsPrivateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInput() {
    return this._awsPrivateLink.internalValue;
  }

  // azure_private_link - computed: false, optional: true, required: false
  private _azurePrivateLink = new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLinkList(this, "azure_private_link", false);
  public get azurePrivateLink() {
    return this._azurePrivateLink;
  }
  public putAzurePrivateLink(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityAzurePrivateLink[] | cdktf.IResolvable) {
    this._azurePrivateLink.internalValue = value;
  }
  public resetAzurePrivateLink() {
    this._azurePrivateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrivateLinkInput() {
    return this._azurePrivateLink.internalValue;
  }
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#key DataInstaclustrPostgresqlClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#value DataInstaclustrPostgresqlClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceDataCentre {
  /**
  * Enable client to cluster Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#client_to_cluster_encryption DataInstaclustrPostgresqlClusterV2Instance#client_to_cluster_encryption}
  */
  readonly clientToClusterEncryption?: boolean | cdktf.IResolvable;
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#cloud_provider DataInstaclustrPostgresqlClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * List of Subject Alternative Names FQDNs as per RFC 1035.  Used by the applications with self signed certificates in keystores of nodes in the datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#custom_subject_alternative_names DataInstaclustrPostgresqlClusterV2Instance#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#id DataInstaclustrPostgresqlClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Load Balancer for PostgreSQL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#load_balancer DataInstaclustrPostgresqlClusterV2Instance#load_balancer}
  */
  readonly loadBalancer?: boolean | cdktf.IResolvable;
  /**
  * DNS name of the Network Load Balancer if a load balancer is enabled for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#load_balancer_endpoint DataInstaclustrPostgresqlClusterV2Instance#load_balancer_endpoint}
  */
  readonly loadBalancerEndpoint?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#name DataInstaclustrPostgresqlClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#network DataInstaclustrPostgresqlClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t4g.small-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.2xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-250-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.large-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m6g.xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.large-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-1000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-2000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-4000-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r6g.4xlarge-500-v2 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-2000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-4000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-r7g.4xlarge-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-t3.medium-30 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-DEV-t3.small-5 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.2xlarge-4000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-250 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.large-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-1000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-2000 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-r5.xlarge-500 </td> <td>Deprecated</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.2xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.4xlarge-2048-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.large-1024-FSX </td> <td>Public Preview</td> </tr> <tr> <td>PGS-PRD-m7g.xlarge-1024-FSX </td> <td>Public Preview</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-30-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-Standard_DS1_v2-5-an </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E16s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-256 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E2s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E32s_v4-ANF-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E4s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-1024 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-2048 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-512 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-Standard_E8s_v4-ANF-2048 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>PGS-DEV-n2-standard-2-30 </td> <td>General Availability</td> </tr> <tr> <td>PGS-DEV-n2-standard-2-5 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-2-250 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-1000 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-4-500 </td> <td>General Availability</td> </tr> <tr> <td>PGS-PRD-n2-standard-8-2000 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#node_size DataInstaclustrPostgresqlClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of nodes in the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#number_of_nodes DataInstaclustrPostgresqlClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#provider_account_name DataInstaclustrPostgresqlClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#region DataInstaclustrPostgresqlClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#status DataInstaclustrPostgresqlClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#tag_management_enabled DataInstaclustrPostgresqlClusterV2Instance#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#zero_inbound_access DataInstaclustrPostgresqlClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#aws_settings DataInstaclustrPostgresqlClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#azure_settings DataInstaclustrPostgresqlClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#deleted_nodes DataInstaclustrPostgresqlClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#gcp_settings DataInstaclustrPostgresqlClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * inter_data_centre_replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#inter_data_centre_replication DataInstaclustrPostgresqlClusterV2Instance#inter_data_centre_replication}
  */
  readonly interDataCentreReplication?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication[] | cdktf.IResolvable;
  /**
  * intra_data_centre_replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#intra_data_centre_replication DataInstaclustrPostgresqlClusterV2Instance#intra_data_centre_replication}
  */
  readonly intraDataCentreReplication?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#nodes DataInstaclustrPostgresqlClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * pg_bouncer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#pg_bouncer DataInstaclustrPostgresqlClusterV2Instance#pg_bouncer}
  */
  readonly pgBouncer?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer[] | cdktf.IResolvable;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#private_connectivity DataInstaclustrPostgresqlClusterV2Instance#private_connectivity}
  */
  readonly privateConnectivity?: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#tag DataInstaclustrPostgresqlClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_to_cluster_encryption: cdktf.booleanToTerraform(struct!.clientToClusterEncryption),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    id: cdktf.stringToTerraform(struct!.id),
    load_balancer: cdktf.booleanToTerraform(struct!.loadBalancer),
    load_balancer_endpoint: cdktf.stringToTerraform(struct!.loadBalancerEndpoint),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    inter_data_centre_replication: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationToTerraform, true)(struct!.interDataCentreReplication),
    intra_data_centre_replication: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationToTerraform, true)(struct!.intraDataCentreReplication),
    nodes: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    pg_bouncer: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerToTerraform, true)(struct!.pgBouncer),
    private_connectivity: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityToTerraform, true)(struct!.privateConnectivity),
    tag: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceDataCentre | cdktf.IResolvable): any {
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
    load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.loadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerEndpoint),
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
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsList",
    },
    inter_data_centre_replication: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationToHclTerraform, true)(struct!.interDataCentreReplication),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationList",
    },
    intra_data_centre_replication: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationToHclTerraform, true)(struct!.intraDataCentreReplication),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesList",
    },
    pg_bouncer: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerToHclTerraform, true)(struct!.pgBouncer),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerList",
    },
    private_connectivity: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityToHclTerraform, true)(struct!.privateConnectivity),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
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
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._loadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer;
    }
    if (this._loadBalancerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerEndpoint = this._loadBalancerEndpoint;
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
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._interDataCentreReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interDataCentreReplication = this._interDataCentreReplication?.internalValue;
    }
    if (this._intraDataCentreReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intraDataCentreReplication = this._intraDataCentreReplication?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._pgBouncer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgBouncer = this._pgBouncer?.internalValue;
    }
    if (this._privateConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivity = this._privateConnectivity?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientToClusterEncryption = undefined;
      this._cloudProvider = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._id = undefined;
      this._loadBalancer = undefined;
      this._loadBalancerEndpoint = undefined;
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
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._interDataCentreReplication.internalValue = undefined;
      this._intraDataCentreReplication.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._pgBouncer.internalValue = undefined;
      this._privateConnectivity.internalValue = undefined;
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
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._id = value.id;
      this._loadBalancer = value.loadBalancer;
      this._loadBalancerEndpoint = value.loadBalancerEndpoint;
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
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._interDataCentreReplication.internalValue = value.interDataCentreReplication;
      this._intraDataCentreReplication.internalValue = value.intraDataCentreReplication;
      this._nodes.internalValue = value.nodes;
      this._pgBouncer.internalValue = value.pgBouncer;
      this._privateConnectivity.internalValue = value.privateConnectivity;
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

  // load_balancer - computed: true, optional: true, required: false
  private _loadBalancer?: boolean | cdktf.IResolvable; 
  public get loadBalancer() {
    return this.getBooleanAttribute('load_balancer');
  }
  public set loadBalancer(value: boolean | cdktf.IResolvable) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // load_balancer_endpoint - computed: true, optional: true, required: false
  private _loadBalancerEndpoint?: string; 
  public get loadBalancerEndpoint() {
    return this.getStringAttribute('load_balancer_endpoint');
  }
  public set loadBalancerEndpoint(value: string) {
    this._loadBalancerEndpoint = value;
  }
  public resetLoadBalancerEndpoint() {
    this._loadBalancerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEndpointInput() {
    return this._loadBalancerEndpoint;
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
  private _awsSettings = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _deletedNodes = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // inter_data_centre_replication - computed: false, optional: true, required: false
  private _interDataCentreReplication = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplicationList(this, "inter_data_centre_replication", false);
  public get interDataCentreReplication() {
    return this._interDataCentreReplication;
  }
  public putInterDataCentreReplication(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreInterDataCentreReplication[] | cdktf.IResolvable) {
    this._interDataCentreReplication.internalValue = value;
  }
  public resetInterDataCentreReplication() {
    this._interDataCentreReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interDataCentreReplicationInput() {
    return this._interDataCentreReplication.internalValue;
  }

  // intra_data_centre_replication - computed: false, optional: true, required: false
  private _intraDataCentreReplication = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplicationList(this, "intra_data_centre_replication", false);
  public get intraDataCentreReplication() {
    return this._intraDataCentreReplication;
  }
  public putIntraDataCentreReplication(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreIntraDataCentreReplication[] | cdktf.IResolvable) {
    this._intraDataCentreReplication.internalValue = value;
  }
  public resetIntraDataCentreReplication() {
    this._intraDataCentreReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraDataCentreReplicationInput() {
    return this._intraDataCentreReplication.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // pg_bouncer - computed: false, optional: true, required: false
  private _pgBouncer = new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncerList(this, "pg_bouncer", false);
  public get pgBouncer() {
    return this._pgBouncer;
  }
  public putPgBouncer(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePgBouncer[] | cdktf.IResolvable) {
    this._pgBouncer.internalValue = value;
  }
  public resetPgBouncer() {
    this._pgBouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgBouncerInput() {
    return this._pgBouncer.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivityList(this, "private_connectivity", false);
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentrePrivateConnectivity[] | cdktf.IResolvable) {
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
  private _tag = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceResizeSettings {
  /**
  * Number of concurrent nodes to resize during a resize operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#concurrency DataInstaclustrPostgresqlClusterV2Instance#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Setting this property to `true` will notify the Instaclustr Account's designated support contacts on resize completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#notify_support_contacts DataInstaclustrPostgresqlClusterV2Instance#notify_support_contacts}
  */
  readonly notifySupportContacts?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrPostgresqlClusterV2InstanceResizeSettingsToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    notify_support_contacts: cdktf.booleanToTerraform(struct!.notifySupportContacts),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceResizeSettingsToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceResizeSettings | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceResizeSettings | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceResizeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#confirmation_email DataInstaclustrPostgresqlClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#confirmation_phone_number DataInstaclustrPostgresqlClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance instaclustr_postgresql_cluster_v2_instance}
*/
export class DataInstaclustrPostgresqlClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_postgresql_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrPostgresqlClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrPostgresqlClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrPostgresqlClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrPostgresqlClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_postgresql_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/postgresql_cluster_v2_instance instaclustr_postgresql_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrPostgresqlClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrPostgresqlClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_postgresql_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.35',
        providerVersionConstraint: '2.1.35'
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
    this._defaultUserPassword = config.defaultUserPassword;
    this._description = config.description;
    this._extensions = config.extensions;
    this._id = config.id;
    this._name = config.name;
    this._pciComplianceMode = config.pciComplianceMode;
    this._postgresqlVersion = config.postgresqlVersion;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._synchronousModeStrict = config.synchronousModeStrict;
    this._dataCentre.internalValue = config.dataCentre;
    this._resizeSettings.internalValue = config.resizeSettings;
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

  // extensions - computed: true, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return this.getListAttribute('extensions');
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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

  // postgresql_version - computed: true, optional: true, required: false
  private _postgresqlVersion?: string; 
  public get postgresqlVersion() {
    return this.getStringAttribute('postgresql_version');
  }
  public set postgresqlVersion(value: string) {
    this._postgresqlVersion = value;
  }
  public resetPostgresqlVersion() {
    this._postgresqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlVersionInput() {
    return this._postgresqlVersion;
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

  // synchronous_mode_strict - computed: true, optional: true, required: false
  private _synchronousModeStrict?: boolean | cdktf.IResolvable; 
  public get synchronousModeStrict() {
    return this.getBooleanAttribute('synchronous_mode_strict');
  }
  public set synchronousModeStrict(value: boolean | cdktf.IResolvable) {
    this._synchronousModeStrict = value;
  }
  public resetSynchronousModeStrict() {
    this._synchronousModeStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousModeStrictInput() {
    return this._synchronousModeStrict;
  }

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrPostgresqlClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrPostgresqlClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
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
  private _resizeSettings = new DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsList(this, "resize_settings", false);
  public get resizeSettings() {
    return this._resizeSettings;
  }
  public putResizeSettings(value: DataInstaclustrPostgresqlClusterV2InstanceResizeSettings[] | cdktf.IResolvable) {
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
  private _twoFactorDelete = new DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
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
      default_user_password: cdktf.stringToTerraform(this._defaultUserPassword),
      description: cdktf.stringToTerraform(this._description),
      extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pci_compliance_mode: cdktf.booleanToTerraform(this._pciComplianceMode),
      postgresql_version: cdktf.stringToTerraform(this._postgresqlVersion),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      synchronous_mode_strict: cdktf.booleanToTerraform(this._synchronousModeStrict),
      data_centre: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      resize_settings: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceResizeSettingsToTerraform, true)(this._resizeSettings.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
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
      extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      pci_compliance_mode: {
        value: cdktf.booleanToHclTerraform(this._pciComplianceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      postgresql_version: {
        value: cdktf.stringToHclTerraform(this._postgresqlVersion),
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
      synchronous_mode_strict: {
        value: cdktf.booleanToHclTerraform(this._synchronousModeStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceDataCentreList",
      },
      resize_settings: {
        value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceResizeSettingsToHclTerraform, true)(this._resizeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceResizeSettingsList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrPostgresqlClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
