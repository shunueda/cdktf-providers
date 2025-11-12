// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDeviceEnrichmentDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * entity_type header parameter. Device enrichment details can be fetched based on either Device ID or Device MAC address or Device IP Address. This parameter value must either be device_id/mac_address/ip_address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details#entity_type DataDnacenterDeviceEnrichmentDetails#entity_type}
  */
  readonly entityType: string;
  /**
  * entity_value header parameter. Contains the actual value for the entity type that has been defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details#entity_value DataDnacenterDeviceEnrichmentDetails#entity_value}
  */
  readonly entityValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details#id DataDnacenterDeviceEnrichmentDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinks {
}

export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksToTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksToHclTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getListAttribute('label');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // port_utilization - computed: true, optional: false, required: false
  public get portUtilization() {
    return this.getStringAttribute('port_utilization');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksOutputReference {
    return new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodes {
}

export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesToTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesToHclTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clients - computed: true, optional: false, required: false
  public get clients() {
    return this.getStringAttribute('clients');
  }

  // connected_device - computed: true, optional: false, required: false
  public get connectedDevice() {
    return this.getStringAttribute('connected_device');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // fabric_group - computed: true, optional: false, required: false
  public get fabricGroup() {
    return this.getStringAttribute('fabric_group');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // health_score - computed: true, optional: false, required: false
  public get healthScore() {
    return this.getNumberAttribute('health_score');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // radio_frequency - computed: true, optional: false, required: false
  public get radioFrequency() {
    return this.getStringAttribute('radio_frequency');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesOutputReference {
    return new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopology {
}

export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyToTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyToHclTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyOutputReference {
    return new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetails {
}

export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsToTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsToHclTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_manager_interface_ip - computed: true, optional: false, required: false
  public get apManagerInterfaceIp() {
    return this.getStringAttribute('ap_manager_interface_ip');
  }

  // associated_wlc_ip - computed: true, optional: false, required: false
  public get associatedWlcIp() {
    return this.getStringAttribute('associated_wlc_ip');
  }

  // boot_date_time - computed: true, optional: false, required: false
  public get bootDateTime() {
    return this.getStringAttribute('boot_date_time');
  }

  // collection_interval - computed: true, optional: false, required: false
  public get collectionInterval() {
    return this.getStringAttribute('collection_interval');
  }

  // collection_status - computed: true, optional: false, required: false
  public get collectionStatus() {
    return this.getStringAttribute('collection_status');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_description - computed: true, optional: false, required: false
  public get errorDescription() {
    return this.getStringAttribute('error_description');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // interface_count - computed: true, optional: false, required: false
  public get interfaceCount() {
    return this.getStringAttribute('interface_count');
  }

  // inventory_status_detail - computed: true, optional: false, required: false
  public get inventoryStatusDetail() {
    return this.getStringAttribute('inventory_status_detail');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // line_card_count - computed: true, optional: false, required: false
  public get lineCardCount() {
    return this.getStringAttribute('line_card_count');
  }

  // line_card_id - computed: true, optional: false, required: false
  public get lineCardId() {
    return this.getStringAttribute('line_card_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // management_ip_address - computed: true, optional: false, required: false
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }

  // neighbor_topology - computed: true, optional: false, required: false
  private _neighborTopology = new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsNeighborTopologyList(this, "neighbor_topology", false);
  public get neighborTopology() {
    return this._neighborTopology;
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // reachability_failure_reason - computed: true, optional: false, required: false
  public get reachabilityFailureReason() {
    return this.getStringAttribute('reachability_failure_reason');
  }

  // reachability_status - computed: true, optional: false, required: false
  public get reachabilityStatus() {
    return this.getStringAttribute('reachability_status');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_source - computed: true, optional: false, required: false
  public get roleSource() {
    return this.getStringAttribute('role_source');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getStringAttribute('series');
  }

  // snmp_contact - computed: true, optional: false, required: false
  public get snmpContact() {
    return this.getStringAttribute('snmp_contact');
  }

  // snmp_location - computed: true, optional: false, required: false
  public get snmpLocation() {
    return this.getStringAttribute('snmp_location');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tag_count - computed: true, optional: false, required: false
  public get tagCount() {
    return this.getStringAttribute('tag_count');
  }

  // tunnel_udp_port - computed: true, optional: false, required: false
  public get tunnelUdpPort() {
    return this.getStringAttribute('tunnel_udp_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up_time - computed: true, optional: false, required: false
  public get upTime() {
    return this.getStringAttribute('up_time');
  }

  // waas_device_mode - computed: true, optional: false, required: false
  public get waasDeviceMode() {
    return this.getStringAttribute('waas_device_mode');
  }
}

export class DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsOutputReference {
    return new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceEnrichmentDetailsItems {
}

export function dataDnacenterDeviceEnrichmentDetailsItemsToTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceEnrichmentDetailsItemsToHclTerraform(struct?: DataDnacenterDeviceEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceEnrichmentDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceEnrichmentDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceEnrichmentDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_details - computed: true, optional: false, required: false
  private _deviceDetails = new DataDnacenterDeviceEnrichmentDetailsItemsDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }
}

export class DataDnacenterDeviceEnrichmentDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceEnrichmentDetailsItemsOutputReference {
    return new DataDnacenterDeviceEnrichmentDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details dnacenter_device_enrichment_details}
*/
export class DataDnacenterDeviceEnrichmentDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_enrichment_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDeviceEnrichmentDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDeviceEnrichmentDetails to import
  * @param importFromId The id of the existing DataDnacenterDeviceEnrichmentDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDeviceEnrichmentDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_enrichment_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_enrichment_details dnacenter_device_enrichment_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDeviceEnrichmentDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDeviceEnrichmentDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_enrichment_details',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityType = config.entityType;
    this._entityValue = config.entityValue;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // entity_value - computed: false, optional: false, required: true
  private _entityValue?: string; 
  public get entityValue() {
    return this.getStringAttribute('entity_value');
  }
  public set entityValue(value: string) {
    this._entityValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityValueInput() {
    return this._entityValue;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterDeviceEnrichmentDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_type: cdktf.stringToTerraform(this._entityType),
      entity_value: cdktf.stringToTerraform(this._entityValue),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_value: {
        value: cdktf.stringToHclTerraform(this._entityValue),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
