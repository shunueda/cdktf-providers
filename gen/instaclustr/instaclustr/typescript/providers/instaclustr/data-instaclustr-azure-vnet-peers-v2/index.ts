// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAzureVnetPeersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Instaclustr Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#account_id DataInstaclustrAzureVnetPeersV2#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#id DataInstaclustrAzureVnetPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#filter DataInstaclustrAzureVnetPeersV2#filter}
  */
  readonly filter?: DataInstaclustrAzureVnetPeersV2Filter[] | cdktf.IResolvable;
  /**
  * peering_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peering_requests DataInstaclustrAzureVnetPeersV2#peering_requests}
  */
  readonly peeringRequests?: DataInstaclustrAzureVnetPeersV2PeeringRequests[] | cdktf.IResolvable;
}
export interface DataInstaclustrAzureVnetPeersV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#name DataInstaclustrAzureVnetPeersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#values DataInstaclustrAzureVnetPeersV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrAzureVnetPeersV2FilterToTerraform(struct?: DataInstaclustrAzureVnetPeersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrAzureVnetPeersV2FilterToHclTerraform(struct?: DataInstaclustrAzureVnetPeersV2Filter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAzureVnetPeersV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAzureVnetPeersV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAzureVnetPeersV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrAzureVnetPeersV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAzureVnetPeersV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAzureVnetPeersV2FilterOutputReference {
    return new DataInstaclustrAzureVnetPeersV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrAzureVnetPeersV2PeeringRequests {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#cdc_id DataInstaclustrAzureVnetPeersV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Resource Group Name of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#data_centre_resource_group DataInstaclustrAzureVnetPeersV2#data_centre_resource_group}
  */
  readonly dataCentreResourceGroup?: string;
  /**
  * Subscription ID of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#data_centre_subscription_id DataInstaclustrAzureVnetPeersV2#data_centre_subscription_id}
  */
  readonly dataCentreSubscriptionId?: string;
  /**
  * The name of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#data_centre_virtual_network_name DataInstaclustrAzureVnetPeersV2#data_centre_virtual_network_name}
  */
  readonly dataCentreVirtualNetworkName?: string;
  /**
  * ID of the VPC peering connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#id DataInstaclustrAzureVnetPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Vpc Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#name DataInstaclustrAzureVnetPeersV2#name}
  */
  readonly name?: string;
  /**
  * ID of the Active Directory Object to give peering permissions to, required for cross subscription peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peer_ad_object_id DataInstaclustrAzureVnetPeersV2#peer_ad_object_id}
  */
  readonly peerAdObjectId?: string;
  /**
  * Resource Group Name of the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peer_resource_group DataInstaclustrAzureVnetPeersV2#peer_resource_group}
  */
  readonly peerResourceGroup?: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peer_subnets DataInstaclustrAzureVnetPeersV2#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * Subscription ID of the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peer_subscription_id DataInstaclustrAzureVnetPeersV2#peer_subscription_id}
  */
  readonly peerSubscriptionId?: string;
  /**
  * The name of the VPC Network you wish to peer to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#peer_virtual_network_name DataInstaclustrAzureVnetPeersV2#peer_virtual_network_name}
  */
  readonly peerVirtualNetworkName?: string;
}

export function dataInstaclustrAzureVnetPeersV2PeeringRequestsToTerraform(struct?: DataInstaclustrAzureVnetPeersV2PeeringRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    data_centre_resource_group: cdktf.stringToTerraform(struct!.dataCentreResourceGroup),
    data_centre_subscription_id: cdktf.stringToTerraform(struct!.dataCentreSubscriptionId),
    data_centre_virtual_network_name: cdktf.stringToTerraform(struct!.dataCentreVirtualNetworkName),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    peer_ad_object_id: cdktf.stringToTerraform(struct!.peerAdObjectId),
    peer_resource_group: cdktf.stringToTerraform(struct!.peerResourceGroup),
    peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerSubnets),
    peer_subscription_id: cdktf.stringToTerraform(struct!.peerSubscriptionId),
    peer_virtual_network_name: cdktf.stringToTerraform(struct!.peerVirtualNetworkName),
  }
}


export function dataInstaclustrAzureVnetPeersV2PeeringRequestsToHclTerraform(struct?: DataInstaclustrAzureVnetPeersV2PeeringRequests | cdktf.IResolvable): any {
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
    data_centre_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_centre_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_centre_virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreVirtualNetworkName),
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
    peer_ad_object_id: {
      value: cdktf.stringToHclTerraform(struct!.peerAdObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.peerResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    peer_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.peerSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.peerVirtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAzureVnetPeersV2PeeringRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAzureVnetPeersV2PeeringRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._dataCentreResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreResourceGroup = this._dataCentreResourceGroup;
    }
    if (this._dataCentreSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreSubscriptionId = this._dataCentreSubscriptionId;
    }
    if (this._dataCentreVirtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreVirtualNetworkName = this._dataCentreVirtualNetworkName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerAdObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAdObjectId = this._peerAdObjectId;
    }
    if (this._peerResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerResourceGroup = this._peerResourceGroup;
    }
    if (this._peerSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnets = this._peerSubnets;
    }
    if (this._peerSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubscriptionId = this._peerSubscriptionId;
    }
    if (this._peerVirtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVirtualNetworkName = this._peerVirtualNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAzureVnetPeersV2PeeringRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._dataCentreResourceGroup = undefined;
      this._dataCentreSubscriptionId = undefined;
      this._dataCentreVirtualNetworkName = undefined;
      this._id = undefined;
      this._name = undefined;
      this._peerAdObjectId = undefined;
      this._peerResourceGroup = undefined;
      this._peerSubnets = undefined;
      this._peerSubscriptionId = undefined;
      this._peerVirtualNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._dataCentreResourceGroup = value.dataCentreResourceGroup;
      this._dataCentreSubscriptionId = value.dataCentreSubscriptionId;
      this._dataCentreVirtualNetworkName = value.dataCentreVirtualNetworkName;
      this._id = value.id;
      this._name = value.name;
      this._peerAdObjectId = value.peerAdObjectId;
      this._peerResourceGroup = value.peerResourceGroup;
      this._peerSubnets = value.peerSubnets;
      this._peerSubscriptionId = value.peerSubscriptionId;
      this._peerVirtualNetworkName = value.peerVirtualNetworkName;
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

  // data_centre_resource_group - computed: true, optional: true, required: false
  private _dataCentreResourceGroup?: string; 
  public get dataCentreResourceGroup() {
    return this.getStringAttribute('data_centre_resource_group');
  }
  public set dataCentreResourceGroup(value: string) {
    this._dataCentreResourceGroup = value;
  }
  public resetDataCentreResourceGroup() {
    this._dataCentreResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreResourceGroupInput() {
    return this._dataCentreResourceGroup;
  }

  // data_centre_subscription_id - computed: true, optional: true, required: false
  private _dataCentreSubscriptionId?: string; 
  public get dataCentreSubscriptionId() {
    return this.getStringAttribute('data_centre_subscription_id');
  }
  public set dataCentreSubscriptionId(value: string) {
    this._dataCentreSubscriptionId = value;
  }
  public resetDataCentreSubscriptionId() {
    this._dataCentreSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreSubscriptionIdInput() {
    return this._dataCentreSubscriptionId;
  }

  // data_centre_virtual_network_name - computed: true, optional: true, required: false
  private _dataCentreVirtualNetworkName?: string; 
  public get dataCentreVirtualNetworkName() {
    return this.getStringAttribute('data_centre_virtual_network_name');
  }
  public set dataCentreVirtualNetworkName(value: string) {
    this._dataCentreVirtualNetworkName = value;
  }
  public resetDataCentreVirtualNetworkName() {
    this._dataCentreVirtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreVirtualNetworkNameInput() {
    return this._dataCentreVirtualNetworkName;
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

  // peer_ad_object_id - computed: true, optional: true, required: false
  private _peerAdObjectId?: string; 
  public get peerAdObjectId() {
    return this.getStringAttribute('peer_ad_object_id');
  }
  public set peerAdObjectId(value: string) {
    this._peerAdObjectId = value;
  }
  public resetPeerAdObjectId() {
    this._peerAdObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAdObjectIdInput() {
    return this._peerAdObjectId;
  }

  // peer_resource_group - computed: true, optional: true, required: false
  private _peerResourceGroup?: string; 
  public get peerResourceGroup() {
    return this.getStringAttribute('peer_resource_group');
  }
  public set peerResourceGroup(value: string) {
    this._peerResourceGroup = value;
  }
  public resetPeerResourceGroup() {
    this._peerResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerResourceGroupInput() {
    return this._peerResourceGroup;
  }

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_subscription_id - computed: true, optional: true, required: false
  private _peerSubscriptionId?: string; 
  public get peerSubscriptionId() {
    return this.getStringAttribute('peer_subscription_id');
  }
  public set peerSubscriptionId(value: string) {
    this._peerSubscriptionId = value;
  }
  public resetPeerSubscriptionId() {
    this._peerSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubscriptionIdInput() {
    return this._peerSubscriptionId;
  }

  // peer_virtual_network_name - computed: true, optional: true, required: false
  private _peerVirtualNetworkName?: string; 
  public get peerVirtualNetworkName() {
    return this.getStringAttribute('peer_virtual_network_name');
  }
  public set peerVirtualNetworkName(value: string) {
    this._peerVirtualNetworkName = value;
  }
  public resetPeerVirtualNetworkName() {
    this._peerVirtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVirtualNetworkNameInput() {
    return this._peerVirtualNetworkName;
  }
}

export class DataInstaclustrAzureVnetPeersV2PeeringRequestsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAzureVnetPeersV2PeeringRequests[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAzureVnetPeersV2PeeringRequestsOutputReference {
    return new DataInstaclustrAzureVnetPeersV2PeeringRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2 instaclustr_azure_vnet_peers_v2}
*/
export class DataInstaclustrAzureVnetPeersV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_azure_vnet_peers_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAzureVnetPeersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAzureVnetPeersV2 to import
  * @param importFromId The id of the existing DataInstaclustrAzureVnetPeersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAzureVnetPeersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_azure_vnet_peers_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/azure_vnet_peers_v2 instaclustr_azure_vnet_peers_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAzureVnetPeersV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAzureVnetPeersV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_azure_vnet_peers_v2',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._peeringRequests.internalValue = config.peeringRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrAzureVnetPeersV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrAzureVnetPeersV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // peering_requests - computed: false, optional: true, required: false
  private _peeringRequests = new DataInstaclustrAzureVnetPeersV2PeeringRequestsList(this, "peering_requests", false);
  public get peeringRequests() {
    return this._peeringRequests;
  }
  public putPeeringRequests(value: DataInstaclustrAzureVnetPeersV2PeeringRequests[] | cdktf.IResolvable) {
    this._peeringRequests.internalValue = value;
  }
  public resetPeeringRequests() {
    this._peeringRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringRequestsInput() {
    return this._peeringRequests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrAzureVnetPeersV2FilterToTerraform, true)(this._filter.internalValue),
      peering_requests: cdktf.listMapper(dataInstaclustrAzureVnetPeersV2PeeringRequestsToTerraform, true)(this._peeringRequests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrAzureVnetPeersV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrAzureVnetPeersV2FilterList",
      },
      peering_requests: {
        value: cdktf.listMapperHcl(dataInstaclustrAzureVnetPeersV2PeeringRequestsToHclTerraform, true)(this._peeringRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAzureVnetPeersV2PeeringRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
