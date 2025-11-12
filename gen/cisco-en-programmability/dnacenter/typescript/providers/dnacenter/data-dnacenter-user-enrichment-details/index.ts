// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterUserEnrichmentDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * entity_type header parameter. User enrichment details can be fetched based on either User ID or Client MAC address. This parameter value must either be network_user_id/mac_address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details#entity_type DataDnacenterUserEnrichmentDetails#entity_type}
  */
  readonly entityType: string;
  /**
  * entity_value header parameter. Contains the actual value for the entity type that has been defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details#entity_value DataDnacenterUserEnrichmentDetails#entity_value}
  */
  readonly entityValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details#id DataDnacenterUserEnrichmentDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology {
}

export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetails {
}

export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetails | undefined) {
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
  private _neighborTopology = new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsNeighborTopologyList(this, "neighbor_topology", false);
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

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItemsConnectedDevice {
}

export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsConnectedDeviceToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsConnectedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsConnectedDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsConnectedDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_details - computed: true, optional: false, required: false
  private _deviceDetails = new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceDeviceDetailsList(this, "device_details", false);
  public get deviceDetails() {
    return this._deviceDetails;
  }
}

export class DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScore {
}

export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScore | undefined) {
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

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboarding {
}

export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_server_ip - computed: true, optional: false, required: false
  public get aaaServerIp() {
    return this.getStringAttribute('aaa_server_ip');
  }

  // average_assoc_duration - computed: true, optional: false, required: false
  public get averageAssocDuration() {
    return this.getStringAttribute('average_assoc_duration');
  }

  // average_auth_duration - computed: true, optional: false, required: false
  public get averageAuthDuration() {
    return this.getStringAttribute('average_auth_duration');
  }

  // average_dhcp_duration - computed: true, optional: false, required: false
  public get averageDhcpDuration() {
    return this.getStringAttribute('average_dhcp_duration');
  }

  // average_run_duration - computed: true, optional: false, required: false
  public get averageRunDuration() {
    return this.getStringAttribute('average_run_duration');
  }

  // dhcp_server_ip - computed: true, optional: false, required: false
  public get dhcpServerIp() {
    return this.getStringAttribute('dhcp_server_ip');
  }

  // max_assoc_duration - computed: true, optional: false, required: false
  public get maxAssocDuration() {
    return this.getStringAttribute('max_assoc_duration');
  }

  // max_auth_duration - computed: true, optional: false, required: false
  public get maxAuthDuration() {
    return this.getStringAttribute('max_auth_duration');
  }

  // max_dhcp_duration - computed: true, optional: false, required: false
  public get maxDhcpDuration() {
    return this.getStringAttribute('max_dhcp_duration');
  }

  // max_run_duration - computed: true, optional: false, required: false
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
}

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItemsUserDetails {
}

export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsUserDetailsToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItemsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItemsUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItemsUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_group - computed: true, optional: false, required: false
  public get apGroup() {
    return this.getStringAttribute('ap_group');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // avg_rssi - computed: true, optional: false, required: false
  public get avgRssi() {
    return this.getStringAttribute('avg_rssi');
  }

  // avg_snr - computed: true, optional: false, required: false
  public get avgSnr() {
    return this.getStringAttribute('avg_snr');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
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

  // dns_failure - computed: true, optional: false, required: false
  public get dnsFailure() {
    return this.getStringAttribute('dns_failure');
  }

  // dns_success - computed: true, optional: false, required: false
  public get dnsSuccess() {
    return this.getStringAttribute('dns_success');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // health_score - computed: true, optional: false, required: false
  private _healthScore = new DataDnacenterUserEnrichmentDetailsItemsUserDetailsHealthScoreList(this, "health_score", false);
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

  // onboarding - computed: true, optional: false, required: false
  private _onboarding = new DataDnacenterUserEnrichmentDetailsItemsUserDetailsOnboardingList(this, "onboarding", false);
  public get onboarding() {
    return this._onboarding;
  }

  // onboarding_time - computed: true, optional: false, required: false
  public get onboardingTime() {
    return this.getStringAttribute('onboarding_time');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // rssi - computed: true, optional: false, required: false
  public get rssi() {
    return this.getStringAttribute('rssi');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getStringAttribute('rx_bytes');
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

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getStringAttribute('tx_bytes');
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

export class DataDnacenterUserEnrichmentDetailsItemsUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsUserDetailsOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterUserEnrichmentDetailsItems {
}

export function dataDnacenterUserEnrichmentDetailsItemsToTerraform(struct?: DataDnacenterUserEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterUserEnrichmentDetailsItemsToHclTerraform(struct?: DataDnacenterUserEnrichmentDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterUserEnrichmentDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterUserEnrichmentDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterUserEnrichmentDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connected_device - computed: true, optional: false, required: false
  private _connectedDevice = new DataDnacenterUserEnrichmentDetailsItemsConnectedDeviceList(this, "connected_device", false);
  public get connectedDevice() {
    return this._connectedDevice;
  }

  // user_details - computed: true, optional: false, required: false
  private _userDetails = new DataDnacenterUserEnrichmentDetailsItemsUserDetailsList(this, "user_details", false);
  public get userDetails() {
    return this._userDetails;
  }
}

export class DataDnacenterUserEnrichmentDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterUserEnrichmentDetailsItemsOutputReference {
    return new DataDnacenterUserEnrichmentDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details dnacenter_user_enrichment_details}
*/
export class DataDnacenterUserEnrichmentDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_user_enrichment_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterUserEnrichmentDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterUserEnrichmentDetails to import
  * @param importFromId The id of the existing DataDnacenterUserEnrichmentDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterUserEnrichmentDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_user_enrichment_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/user_enrichment_details dnacenter_user_enrichment_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterUserEnrichmentDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterUserEnrichmentDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_user_enrichment_details',
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
  private _items = new DataDnacenterUserEnrichmentDetailsItemsList(this, "items", false);
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
