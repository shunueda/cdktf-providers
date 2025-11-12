// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterClientEnrichmentDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * entity_type header parameter. Client enrichment details can be fetched based on either User ID or Client MAC address. This parameter value must either be network_user_id/mac_address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details#entity_type DataDnacenterClientEnrichmentDetails#entity_type}
  */
  readonly entityType: string;
  /**
  * entity_value header parameter. Contains the actual value for the entity type that has been defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details#entity_value DataDnacenterClientEnrichmentDetails#entity_value}
  */
  readonly entityValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details#id DataDnacenterClientEnrichmentDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * issueCategory header parameter. The category of the DNA event based on which the underlying issues need to be fetched
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details#issue_category DataDnacenterClientEnrichmentDetails#issue_category}
  */
  readonly issueCategory: string;
}
export interface DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinks {
}

export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinks | undefined) {
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

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodes {
}

export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clients - computed: true, optional: false, required: false
  public get clients() {
    return this.getNumberAttribute('clients');
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
    return this.getStringAttribute('health_score');
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

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology {
}

export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetails {
}

export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetails | undefined) {
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

  // cisco360view - computed: true, optional: false, required: false
  public get cisco360View() {
    return this.getStringAttribute('cisco360view');
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
  private _neighborTopology = new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyList(this, "neighbor_topology", false);
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

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsConnectedDevice {
}

export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsConnectedDeviceToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsConnectedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsConnectedDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsConnectedDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_details - computed: true, optional: false, required: false
  private _deviceDetails = new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocation {
}

export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aps_impacted - computed: true, optional: false, required: false
  public get apsImpacted() {
    return this.getListAttribute('aps_impacted');
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // building - computed: true, optional: false, required: false
  public get building() {
    return this.getStringAttribute('building');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_type - computed: true, optional: false, required: false
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHosts {
}

export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connected_interface - computed: true, optional: false, required: false
  public get connectedInterface() {
    return this.getStringAttribute('connected_interface');
  }

  // failed_attempts - computed: true, optional: false, required: false
  public get failedAttempts() {
    return this.getNumberAttribute('failed_attempts');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_os - computed: true, optional: false, required: false
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActions {
}

export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getListAttribute('steps');
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssue {
}

export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impacted_hosts - computed: true, optional: false, required: false
  private _impactedHosts = new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueImpactedHostsList(this, "impacted_hosts", false);
  public get impactedHosts() {
    return this._impactedHosts;
  }

  // issue_category - computed: true, optional: false, required: false
  public get issueCategory() {
    return this.getStringAttribute('issue_category');
  }

  // issue_description - computed: true, optional: false, required: false
  public get issueDescription() {
    return this.getStringAttribute('issue_description');
  }

  // issue_entity - computed: true, optional: false, required: false
  public get issueEntity() {
    return this.getStringAttribute('issue_entity');
  }

  // issue_entity_value - computed: true, optional: false, required: false
  public get issueEntityValue() {
    return this.getStringAttribute('issue_entity_value');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }

  // issue_name - computed: true, optional: false, required: false
  public get issueName() {
    return this.getStringAttribute('issue_name');
  }

  // issue_priority - computed: true, optional: false, required: false
  public get issuePriority() {
    return this.getStringAttribute('issue_priority');
  }

  // issue_severity - computed: true, optional: false, required: false
  public get issueSeverity() {
    return this.getStringAttribute('issue_severity');
  }

  // issue_source - computed: true, optional: false, required: false
  public get issueSource() {
    return this.getStringAttribute('issue_source');
  }

  // issue_summary - computed: true, optional: false, required: false
  public get issueSummary() {
    return this.getStringAttribute('issue_summary');
  }

  // issue_timestamp - computed: true, optional: false, required: false
  public get issueTimestamp() {
    return this.getNumberAttribute('issue_timestamp');
  }

  // suggested_actions - computed: true, optional: false, required: false
  private _suggestedActions = new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueSuggestedActionsList(this, "suggested_actions", false);
  public get suggestedActions() {
    return this._suggestedActions;
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsIssueDetails {
}

export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsIssueDetailsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsIssueDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsIssueDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsIssueDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issue - computed: true, optional: false, required: false
  private _issue = new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsIssueList(this, "issue", false);
  public get issue() {
    return this._issue;
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsIssueDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsIssueDetailsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScore {
}

export function dataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_type - computed: true, optional: false, required: false
  public get healthType() {
    return this.getStringAttribute('health_type');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItemsUserDetails {
}

export function dataDnacenterClientEnrichmentDetailsItemsUserDetailsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsUserDetailsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItemsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItemsUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItemsUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // client_connection - computed: true, optional: false, required: false
  public get clientConnection() {
    return this.getStringAttribute('client_connection');
  }

  // connected_device - computed: true, optional: false, required: false
  public get connectedDevice() {
    return this.getListAttribute('connected_device');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // data_rate - computed: true, optional: false, required: false
  public get dataRate() {
    return this.getStringAttribute('data_rate');
  }

  // health_score - computed: true, optional: false, required: false
  private _healthScore = new DataDnacenterClientEnrichmentDetailsItemsUserDetailsHealthScoreList(this, "health_score", false);
  public get healthScore() {
    return this._healthScore;
  }

  // host_ip_v4 - computed: true, optional: false, required: false
  public get hostIpV4() {
    return this.getStringAttribute('host_ip_v4');
  }

  // host_ip_v6 - computed: true, optional: false, required: false
  public get hostIpV6() {
    return this.getListAttribute('host_ip_v6');
  }

  // host_mac - computed: true, optional: false, required: false
  public get hostMac() {
    return this.getStringAttribute('host_mac');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_os - computed: true, optional: false, required: false
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // host_version - computed: true, optional: false, required: false
  public get hostVersion() {
    return this.getStringAttribute('host_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_count - computed: true, optional: false, required: false
  public get issueCount() {
    return this.getNumberAttribute('issue_count');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // rssi - computed: true, optional: false, required: false
  public get rssi() {
    return this.getStringAttribute('rssi');
  }

  // snr - computed: true, optional: false, required: false
  public get snr() {
    return this.getStringAttribute('snr');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // sub_type - computed: true, optional: false, required: false
  public get subType() {
    return this.getStringAttribute('sub_type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsUserDetailsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterClientEnrichmentDetailsItems {
}

export function dataDnacenterClientEnrichmentDetailsItemsToTerraform(struct?: DataDnacenterClientEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterClientEnrichmentDetailsItemsToHclTerraform(struct?: DataDnacenterClientEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterClientEnrichmentDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterClientEnrichmentDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterClientEnrichmentDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connected_device - computed: true, optional: false, required: false
  private _connectedDevice = new DataDnacenterClientEnrichmentDetailsItemsConnectedDeviceList(this, "connected_device", false);
  public get connectedDevice() {
    return this._connectedDevice;
  }

  // issue_details - computed: true, optional: false, required: false
  private _issueDetails = new DataDnacenterClientEnrichmentDetailsItemsIssueDetailsList(this, "issue_details", false);
  public get issueDetails() {
    return this._issueDetails;
  }

  // user_details - computed: true, optional: false, required: false
  private _userDetails = new DataDnacenterClientEnrichmentDetailsItemsUserDetailsList(this, "user_details", false);
  public get userDetails() {
    return this._userDetails;
  }
}

export class DataDnacenterClientEnrichmentDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterClientEnrichmentDetailsItemsOutputReference {
    return new DataDnacenterClientEnrichmentDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details dnacenter_client_enrichment_details}
*/
export class DataDnacenterClientEnrichmentDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_client_enrichment_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterClientEnrichmentDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterClientEnrichmentDetails to import
  * @param importFromId The id of the existing DataDnacenterClientEnrichmentDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterClientEnrichmentDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_client_enrichment_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/client_enrichment_details dnacenter_client_enrichment_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterClientEnrichmentDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterClientEnrichmentDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_client_enrichment_details',
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
    this._issueCategory = config.issueCategory;
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

  // issue_category - computed: false, optional: false, required: true
  private _issueCategory?: string; 
  public get issueCategory() {
    return this.getStringAttribute('issue_category');
  }
  public set issueCategory(value: string) {
    this._issueCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueCategoryInput() {
    return this._issueCategory;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterClientEnrichmentDetailsItemsList(this, "items", false);
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
      issue_category: cdktf.stringToTerraform(this._issueCategory),
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
      issue_category: {
        value: cdktf.stringToHclTerraform(this._issueCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
