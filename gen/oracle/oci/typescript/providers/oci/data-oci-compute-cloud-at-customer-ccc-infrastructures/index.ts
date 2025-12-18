// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciComputeCloudAtCustomerCccInfrastructuresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}
  */
  readonly cccInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}
  */
  readonly filter?: DataOciComputeCloudAtCustomerCccInfrastructuresFilter[] | cdktf.IResolvable;
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_storage_tray_count - computed: true, optional: false, required: false
  public get capacityStorageTrayCount() {
    return this.getNumberAttribute('capacity_storage_tray_count');
  }

  // compute_node_count - computed: true, optional: false, required: false
  public get computeNodeCount() {
    return this.getNumberAttribute('compute_node_count');
  }

  // management_node_count - computed: true, optional: false, required: false
  public get managementNodeCount() {
    return this.getNumberAttribute('management_node_count');
  }

  // performance_storage_tray_count - computed: true, optional: false, required: false
  public get performanceStorageTrayCount() {
    return this.getNumberAttribute('performance_storage_tray_count');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_topology - computed: true, optional: false, required: false
  public get bgpTopology() {
    return this.getStringAttribute('bgp_topology');
  }

  // oracle_asn - computed: true, optional: false, required: false
  public get oracleAsn() {
    return this.getNumberAttribute('oracle_asn');
  }

  // peer_information - computed: true, optional: false, required: false
  private _peerInformation = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(this, "peer_information", false);
  public get peerInformation() {
    return this._peerInformation;
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uplink_hsrp_group - computed: true, optional: false, required: false
  public get uplinkHsrpGroup() {
    return this.getNumberAttribute('uplink_hsrp_group');
  }

  // uplink_vlan - computed: true, optional: false, required: false
  public get uplinkVlan() {
    return this.getNumberAttribute('uplink_vlan');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_ips - computed: true, optional: false, required: false
  public get dnsIps() {
    return this.getListAttribute('dns_ips');
  }

  // infrastructure_routing_dynamic - computed: true, optional: false, required: false
  private _infrastructureRoutingDynamic = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(this, "infrastructure_routing_dynamic", false);
  public get infrastructureRoutingDynamic() {
    return this._infrastructureRoutingDynamic;
  }

  // infrastructure_routing_static - computed: true, optional: false, required: false
  private _infrastructureRoutingStatic = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(this, "infrastructure_routing_static", false);
  public get infrastructureRoutingStatic() {
    return this._infrastructureRoutingStatic;
  }

  // management_nodes - computed: true, optional: false, required: false
  private _managementNodes = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList(this, "management_nodes", false);
  public get managementNodes() {
    return this._managementNodes;
  }

  // mgmt_vip_hostname - computed: true, optional: false, required: false
  public get mgmtVipHostname() {
    return this.getStringAttribute('mgmt_vip_hostname');
  }

  // mgmt_vip_ip - computed: true, optional: false, required: false
  public get mgmtVipIp() {
    return this.getStringAttribute('mgmt_vip_ip');
  }

  // spine_ips - computed: true, optional: false, required: false
  public get spineIps() {
    return this.getListAttribute('spine_ips');
  }

  // spine_vip - computed: true, optional: false, required: false
  public get spineVip() {
    return this.getStringAttribute('spine_vip');
  }

  // uplink_domain - computed: true, optional: false, required: false
  public get uplinkDomain() {
    return this.getStringAttribute('uplink_domain');
  }

  // uplink_gateway_ip - computed: true, optional: false, required: false
  public get uplinkGatewayIp() {
    return this.getStringAttribute('uplink_gateway_ip');
  }

  // uplink_netmask - computed: true, optional: false, required: false
  public get uplinkNetmask() {
    return this.getStringAttribute('uplink_netmask');
  }

  // uplink_port_count - computed: true, optional: false, required: false
  public get uplinkPortCount() {
    return this.getNumberAttribute('uplink_port_count');
  }

  // uplink_port_forward_error_correction - computed: true, optional: false, required: false
  public get uplinkPortForwardErrorCorrection() {
    return this.getStringAttribute('uplink_port_forward_error_correction');
  }

  // uplink_port_speed_in_gbps - computed: true, optional: false, required: false
  public get uplinkPortSpeedInGbps() {
    return this.getNumberAttribute('uplink_port_speed_in_gbps');
  }

  // uplink_vlan_mtu - computed: true, optional: false, required: false
  public get uplinkVlanMtu() {
    return this.getNumberAttribute('uplink_vlan_mtu');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // scheduled_upgrade_duration - computed: true, optional: false, required: false
  public get scheduledUpgradeDuration() {
    return this.getStringAttribute('scheduled_upgrade_duration');
  }

  // time_of_scheduled_upgrade - computed: true, optional: false, required: false
  public get timeOfScheduledUpgrade() {
    return this.getStringAttribute('time_of_scheduled_upgrade');
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ccc_upgrade_schedule_id - computed: true, optional: false, required: false
  public get cccUpgradeScheduleId() {
    return this.getStringAttribute('ccc_upgrade_schedule_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_details - computed: true, optional: false, required: false
  public get connectionDetails() {
    return this.getStringAttribute('connection_details');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_inventory - computed: true, optional: false, required: false
  private _infrastructureInventory = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList(this, "infrastructure_inventory", false);
  public get infrastructureInventory() {
    return this._infrastructureInventory;
  }

  // infrastructure_network_configuration - computed: true, optional: false, required: false
  private _infrastructureNetworkConfiguration = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList(this, "infrastructure_network_configuration", false);
  public get infrastructureNetworkConfiguration() {
    return this._infrastructureNetworkConfiguration;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // provisioning_fingerprint - computed: true, optional: false, required: false
  public get provisioningFingerprint() {
    return this.getStringAttribute('provisioning_fingerprint');
  }

  // provisioning_pin - computed: true, optional: false, required: false
  public get provisioningPin() {
    return this.getStringAttribute('provisioning_pin');
  }

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_information - computed: true, optional: false, required: false
  private _upgradeInformation = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList(this, "upgrade_information", false);
  public get upgradeInformation() {
    return this._upgradeInformation;
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection {
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciComputeCloudAtCustomerCccInfrastructuresFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}
  */
  readonly values: string[];
}

export function dataOciComputeCloudAtCustomerCccInfrastructuresFilterToTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciComputeCloudAtCustomerCccInfrastructuresFilterToHclTerraform(struct?: DataOciComputeCloudAtCustomerCccInfrastructuresFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciComputeCloudAtCustomerCccInfrastructuresFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciComputeCloudAtCustomerCccInfrastructuresFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataOciComputeCloudAtCustomerCccInfrastructuresFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciComputeCloudAtCustomerCccInfrastructuresFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference {
    return new DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures}
*/
export class DataOciComputeCloudAtCustomerCccInfrastructures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_compute_cloud_at_customer_ccc_infrastructures";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructures to import
  * @param importFromId The id of the existing DataOciComputeCloudAtCustomerCccInfrastructures that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_compute_cloud_at_customer_ccc_infrastructures", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciComputeCloudAtCustomerCccInfrastructuresConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciComputeCloudAtCustomerCccInfrastructuresConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_compute_cloud_at_customer_ccc_infrastructures',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._cccInfrastructureId = config.cccInfrastructureId;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // ccc_infrastructure_collection - computed: true, optional: false, required: false
  private _cccInfrastructureCollection = new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList(this, "ccc_infrastructure_collection", false);
  public get cccInfrastructureCollection() {
    return this._cccInfrastructureCollection;
  }

  // ccc_infrastructure_id - computed: false, optional: true, required: false
  private _cccInfrastructureId?: string; 
  public get cccInfrastructureId() {
    return this.getStringAttribute('ccc_infrastructure_id');
  }
  public set cccInfrastructureId(value: string) {
    this._cccInfrastructureId = value;
  }
  public resetCccInfrastructureId() {
    this._cccInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cccInfrastructureIdInput() {
    return this._cccInfrastructureId;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciComputeCloudAtCustomerCccInfrastructuresFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciComputeCloudAtCustomerCccInfrastructuresFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      ccc_infrastructure_id: cdktf.stringToTerraform(this._cccInfrastructureId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciComputeCloudAtCustomerCccInfrastructuresFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ccc_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cccInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciComputeCloudAtCustomerCccInfrastructuresFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciComputeCloudAtCustomerCccInfrastructuresFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
