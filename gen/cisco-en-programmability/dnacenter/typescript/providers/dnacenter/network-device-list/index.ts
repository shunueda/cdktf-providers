// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#id NetworkDeviceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#parameters NetworkDeviceList#parameters}
  */
  readonly parameters?: NetworkDeviceListParameters[] | cdktf.IResolvable;
}
export interface NetworkDeviceListItem {
}

export function networkDeviceListItemToTerraform(struct?: NetworkDeviceListItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkDeviceListItemToHclTerraform(struct?: NetworkDeviceListItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkDeviceListItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceListItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceListItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_ethernet_mac_address - computed: true, optional: false, required: false
  public get apEthernetMacAddress() {
    return this.getStringAttribute('ap_ethernet_mac_address');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_support_level - computed: true, optional: false, required: false
  public get deviceSupportLevel() {
    return this.getStringAttribute('device_support_level');
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

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
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

  // managed_atleast_once - computed: true, optional: false, required: false
  public get managedAtleastOnce() {
    return this.getStringAttribute('managed_atleast_once');
  }

  // management_ip_address - computed: true, optional: false, required: false
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }

  // management_state - computed: true, optional: false, required: false
  public get managementState() {
    return this.getStringAttribute('management_state');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getStringAttribute('memory_size');
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

  // software_type - computed: true, optional: false, required: false
  public get softwareType() {
    return this.getStringAttribute('software_type');
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

  // uptime_seconds - computed: true, optional: false, required: false
  public get uptimeSeconds() {
    return this.getNumberAttribute('uptime_seconds');
  }

  // waas_device_mode - computed: true, optional: false, required: false
  public get waasDeviceMode() {
    return this.getStringAttribute('waas_device_mode');
  }
}

export class NetworkDeviceListItemList extends cdktf.ComplexList {

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
  public get(index: number): NetworkDeviceListItemOutputReference {
    return new NetworkDeviceListItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceListParametersUpdateMgmtIpaddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#exist_mgmt_ip_address NetworkDeviceList#exist_mgmt_ip_address}
  */
  readonly existMgmtIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#new_mgmt_ip_address NetworkDeviceList#new_mgmt_ip_address}
  */
  readonly newMgmtIpAddress?: string;
}

export function networkDeviceListParametersUpdateMgmtIpaddressListStructToTerraform(struct?: NetworkDeviceListParametersUpdateMgmtIpaddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist_mgmt_ip_address: cdktf.stringToTerraform(struct!.existMgmtIpAddress),
    new_mgmt_ip_address: cdktf.stringToTerraform(struct!.newMgmtIpAddress),
  }
}


export function networkDeviceListParametersUpdateMgmtIpaddressListStructToHclTerraform(struct?: NetworkDeviceListParametersUpdateMgmtIpaddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist_mgmt_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.existMgmtIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_mgmt_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.newMgmtIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceListParametersUpdateMgmtIpaddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceListParametersUpdateMgmtIpaddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existMgmtIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.existMgmtIpAddress = this._existMgmtIpAddress;
    }
    if (this._newMgmtIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.newMgmtIpAddress = this._newMgmtIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceListParametersUpdateMgmtIpaddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existMgmtIpAddress = undefined;
      this._newMgmtIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existMgmtIpAddress = value.existMgmtIpAddress;
      this._newMgmtIpAddress = value.newMgmtIpAddress;
    }
  }

  // exist_mgmt_ip_address - computed: true, optional: true, required: false
  private _existMgmtIpAddress?: string; 
  public get existMgmtIpAddress() {
    return this.getStringAttribute('exist_mgmt_ip_address');
  }
  public set existMgmtIpAddress(value: string) {
    this._existMgmtIpAddress = value;
  }
  public resetExistMgmtIpAddress() {
    this._existMgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existMgmtIpAddressInput() {
    return this._existMgmtIpAddress;
  }

  // new_mgmt_ip_address - computed: true, optional: true, required: false
  private _newMgmtIpAddress?: string; 
  public get newMgmtIpAddress() {
    return this.getStringAttribute('new_mgmt_ip_address');
  }
  public set newMgmtIpAddress(value: string) {
    this._newMgmtIpAddress = value;
  }
  public resetNewMgmtIpAddress() {
    this._newMgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMgmtIpAddressInput() {
    return this._newMgmtIpAddress;
  }
}

export class NetworkDeviceListParametersUpdateMgmtIpaddressListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceListParametersUpdateMgmtIpaddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceListParametersUpdateMgmtIpaddressListStructOutputReference {
    return new NetworkDeviceListParametersUpdateMgmtIpaddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceListParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#cli_transport NetworkDeviceList#cli_transport}
  */
  readonly cliTransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#compute_device NetworkDeviceList#compute_device}
  */
  readonly computeDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#enable_password NetworkDeviceList#enable_password}
  */
  readonly enablePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#extended_discovery_info NetworkDeviceList#extended_discovery_info}
  */
  readonly extendedDiscoveryInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#http_password NetworkDeviceList#http_password}
  */
  readonly httpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#http_port NetworkDeviceList#http_port}
  */
  readonly httpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#http_secure NetworkDeviceList#http_secure}
  */
  readonly httpSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#http_user_name NetworkDeviceList#http_user_name}
  */
  readonly httpUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#ip_address NetworkDeviceList#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#meraki_org_id NetworkDeviceList#meraki_org_id}
  */
  readonly merakiOrgId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#netconf_port NetworkDeviceList#netconf_port}
  */
  readonly netconfPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#password NetworkDeviceList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#serial_number NetworkDeviceList#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_auth_passphrase NetworkDeviceList#snmp_auth_passphrase}
  */
  readonly snmpAuthPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_auth_protocol NetworkDeviceList#snmp_auth_protocol}
  */
  readonly snmpAuthProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_mode NetworkDeviceList#snmp_mode}
  */
  readonly snmpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_priv_passphrase NetworkDeviceList#snmp_priv_passphrase}
  */
  readonly snmpPrivPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_priv_protocol NetworkDeviceList#snmp_priv_protocol}
  */
  readonly snmpPrivProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_retry NetworkDeviceList#snmp_retry}
  */
  readonly snmpRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_ro_community NetworkDeviceList#snmp_ro_community}
  */
  readonly snmpRoCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_rw_community NetworkDeviceList#snmp_rw_community}
  */
  readonly snmpRwCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_timeout NetworkDeviceList#snmp_timeout}
  */
  readonly snmpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_user_name NetworkDeviceList#snmp_user_name}
  */
  readonly snmpUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#snmp_version NetworkDeviceList#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#type NetworkDeviceList#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#user_name NetworkDeviceList#user_name}
  */
  readonly userName?: string;
  /**
  * update_mgmt_ipaddress_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#update_mgmt_ipaddress_list NetworkDeviceList#update_mgmt_ipaddress_list}
  */
  readonly updateMgmtIpaddressList?: NetworkDeviceListParametersUpdateMgmtIpaddressListStruct[] | cdktf.IResolvable;
}

export function networkDeviceListParametersToTerraform(struct?: NetworkDeviceListParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_transport: cdktf.stringToTerraform(struct!.cliTransport),
    compute_device: cdktf.stringToTerraform(struct!.computeDevice),
    enable_password: cdktf.stringToTerraform(struct!.enablePassword),
    extended_discovery_info: cdktf.stringToTerraform(struct!.extendedDiscoveryInfo),
    http_password: cdktf.stringToTerraform(struct!.httpPassword),
    http_port: cdktf.stringToTerraform(struct!.httpPort),
    http_secure: cdktf.stringToTerraform(struct!.httpSecure),
    http_user_name: cdktf.stringToTerraform(struct!.httpUserName),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    meraki_org_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.merakiOrgId),
    netconf_port: cdktf.stringToTerraform(struct!.netconfPort),
    password: cdktf.stringToTerraform(struct!.password),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    snmp_auth_passphrase: cdktf.stringToTerraform(struct!.snmpAuthPassphrase),
    snmp_auth_protocol: cdktf.stringToTerraform(struct!.snmpAuthProtocol),
    snmp_mode: cdktf.stringToTerraform(struct!.snmpMode),
    snmp_priv_passphrase: cdktf.stringToTerraform(struct!.snmpPrivPassphrase),
    snmp_priv_protocol: cdktf.stringToTerraform(struct!.snmpPrivProtocol),
    snmp_retry: cdktf.numberToTerraform(struct!.snmpRetry),
    snmp_ro_community: cdktf.stringToTerraform(struct!.snmpRoCommunity),
    snmp_rw_community: cdktf.stringToTerraform(struct!.snmpRwCommunity),
    snmp_timeout: cdktf.numberToTerraform(struct!.snmpTimeout),
    snmp_user_name: cdktf.stringToTerraform(struct!.snmpUserName),
    snmp_version: cdktf.stringToTerraform(struct!.snmpVersion),
    type: cdktf.stringToTerraform(struct!.type),
    user_name: cdktf.stringToTerraform(struct!.userName),
    update_mgmt_ipaddress_list: cdktf.listMapper(networkDeviceListParametersUpdateMgmtIpaddressListStructToTerraform, true)(struct!.updateMgmtIpaddressList),
  }
}


export function networkDeviceListParametersToHclTerraform(struct?: NetworkDeviceListParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_transport: {
      value: cdktf.stringToHclTerraform(struct!.cliTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_device: {
      value: cdktf.stringToHclTerraform(struct!.computeDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_password: {
      value: cdktf.stringToHclTerraform(struct!.enablePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_discovery_info: {
      value: cdktf.stringToHclTerraform(struct!.extendedDiscoveryInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_password: {
      value: cdktf.stringToHclTerraform(struct!.httpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.stringToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_secure: {
      value: cdktf.stringToHclTerraform(struct!.httpSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_user_name: {
      value: cdktf.stringToHclTerraform(struct!.httpUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    meraki_org_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.merakiOrgId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    netconf_port: {
      value: cdktf.stringToHclTerraform(struct!.netconfPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_auth_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmpAuthPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.snmpAuthProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_mode: {
      value: cdktf.stringToHclTerraform(struct!.snmpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_priv_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmpPrivPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_priv_protocol: {
      value: cdktf.stringToHclTerraform(struct!.snmpPrivProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_retry: {
      value: cdktf.numberToHclTerraform(struct!.snmpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_ro_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpRoCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_rw_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpRwCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.snmpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_user_name: {
      value: cdktf.stringToHclTerraform(struct!.snmpUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_version: {
      value: cdktf.stringToHclTerraform(struct!.snmpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_mgmt_ipaddress_list: {
      value: cdktf.listMapperHcl(networkDeviceListParametersUpdateMgmtIpaddressListStructToHclTerraform, true)(struct!.updateMgmtIpaddressList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceListParametersUpdateMgmtIpaddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceListParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceListParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliTransport = this._cliTransport;
    }
    if (this._computeDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeDevice = this._computeDevice;
    }
    if (this._enablePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePassword = this._enablePassword;
    }
    if (this._extendedDiscoveryInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedDiscoveryInfo = this._extendedDiscoveryInfo;
    }
    if (this._httpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPassword = this._httpPassword;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSecure = this._httpSecure;
    }
    if (this._httpUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUserName = this._httpUserName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._merakiOrgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.merakiOrgId = this._merakiOrgId;
    }
    if (this._netconfPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.netconfPort = this._netconfPort;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._snmpAuthPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAuthPassphrase = this._snmpAuthPassphrase;
    }
    if (this._snmpAuthProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAuthProtocol = this._snmpAuthProtocol;
    }
    if (this._snmpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpMode = this._snmpMode;
    }
    if (this._snmpPrivPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpPrivPassphrase = this._snmpPrivPassphrase;
    }
    if (this._snmpPrivProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpPrivProtocol = this._snmpPrivProtocol;
    }
    if (this._snmpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRetry = this._snmpRetry;
    }
    if (this._snmpRoCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRoCommunity = this._snmpRoCommunity;
    }
    if (this._snmpRwCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpRwCommunity = this._snmpRwCommunity;
    }
    if (this._snmpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTimeout = this._snmpTimeout;
    }
    if (this._snmpUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpUserName = this._snmpUserName;
    }
    if (this._snmpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpVersion = this._snmpVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._updateMgmtIpaddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMgmtIpaddressList = this._updateMgmtIpaddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceListParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliTransport = undefined;
      this._computeDevice = undefined;
      this._enablePassword = undefined;
      this._extendedDiscoveryInfo = undefined;
      this._httpPassword = undefined;
      this._httpPort = undefined;
      this._httpSecure = undefined;
      this._httpUserName = undefined;
      this._ipAddress = undefined;
      this._merakiOrgId = undefined;
      this._netconfPort = undefined;
      this._password = undefined;
      this._serialNumber = undefined;
      this._snmpAuthPassphrase = undefined;
      this._snmpAuthProtocol = undefined;
      this._snmpMode = undefined;
      this._snmpPrivPassphrase = undefined;
      this._snmpPrivProtocol = undefined;
      this._snmpRetry = undefined;
      this._snmpRoCommunity = undefined;
      this._snmpRwCommunity = undefined;
      this._snmpTimeout = undefined;
      this._snmpUserName = undefined;
      this._snmpVersion = undefined;
      this._type = undefined;
      this._userName = undefined;
      this._updateMgmtIpaddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliTransport = value.cliTransport;
      this._computeDevice = value.computeDevice;
      this._enablePassword = value.enablePassword;
      this._extendedDiscoveryInfo = value.extendedDiscoveryInfo;
      this._httpPassword = value.httpPassword;
      this._httpPort = value.httpPort;
      this._httpSecure = value.httpSecure;
      this._httpUserName = value.httpUserName;
      this._ipAddress = value.ipAddress;
      this._merakiOrgId = value.merakiOrgId;
      this._netconfPort = value.netconfPort;
      this._password = value.password;
      this._serialNumber = value.serialNumber;
      this._snmpAuthPassphrase = value.snmpAuthPassphrase;
      this._snmpAuthProtocol = value.snmpAuthProtocol;
      this._snmpMode = value.snmpMode;
      this._snmpPrivPassphrase = value.snmpPrivPassphrase;
      this._snmpPrivProtocol = value.snmpPrivProtocol;
      this._snmpRetry = value.snmpRetry;
      this._snmpRoCommunity = value.snmpRoCommunity;
      this._snmpRwCommunity = value.snmpRwCommunity;
      this._snmpTimeout = value.snmpTimeout;
      this._snmpUserName = value.snmpUserName;
      this._snmpVersion = value.snmpVersion;
      this._type = value.type;
      this._userName = value.userName;
      this._updateMgmtIpaddressList.internalValue = value.updateMgmtIpaddressList;
    }
  }

  // cli_transport - computed: true, optional: true, required: false
  private _cliTransport?: string; 
  public get cliTransport() {
    return this.getStringAttribute('cli_transport');
  }
  public set cliTransport(value: string) {
    this._cliTransport = value;
  }
  public resetCliTransport() {
    this._cliTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliTransportInput() {
    return this._cliTransport;
  }

  // compute_device - computed: true, optional: true, required: false
  private _computeDevice?: string; 
  public get computeDevice() {
    return this.getStringAttribute('compute_device');
  }
  public set computeDevice(value: string) {
    this._computeDevice = value;
  }
  public resetComputeDevice() {
    this._computeDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeDeviceInput() {
    return this._computeDevice;
  }

  // enable_password - computed: true, optional: true, required: false
  private _enablePassword?: string; 
  public get enablePassword() {
    return this.getStringAttribute('enable_password');
  }
  public set enablePassword(value: string) {
    this._enablePassword = value;
  }
  public resetEnablePassword() {
    this._enablePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordInput() {
    return this._enablePassword;
  }

  // extended_discovery_info - computed: true, optional: true, required: false
  private _extendedDiscoveryInfo?: string; 
  public get extendedDiscoveryInfo() {
    return this.getStringAttribute('extended_discovery_info');
  }
  public set extendedDiscoveryInfo(value: string) {
    this._extendedDiscoveryInfo = value;
  }
  public resetExtendedDiscoveryInfo() {
    this._extendedDiscoveryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedDiscoveryInfoInput() {
    return this._extendedDiscoveryInfo;
  }

  // http_password - computed: true, optional: true, required: false
  private _httpPassword?: string; 
  public get httpPassword() {
    return this.getStringAttribute('http_password');
  }
  public set httpPassword(value: string) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: string; 
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }
  public set httpPort(value: string) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_secure - computed: true, optional: true, required: false
  private _httpSecure?: string; 
  public get httpSecure() {
    return this.getStringAttribute('http_secure');
  }
  public set httpSecure(value: string) {
    this._httpSecure = value;
  }
  public resetHttpSecure() {
    this._httpSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSecureInput() {
    return this._httpSecure;
  }

  // http_user_name - computed: true, optional: true, required: false
  private _httpUserName?: string; 
  public get httpUserName() {
    return this.getStringAttribute('http_user_name');
  }
  public set httpUserName(value: string) {
    this._httpUserName = value;
  }
  public resetHttpUserName() {
    this._httpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserNameInput() {
    return this._httpUserName;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // meraki_org_id - computed: true, optional: true, required: false
  private _merakiOrgId?: string[]; 
  public get merakiOrgId() {
    return this.getListAttribute('meraki_org_id');
  }
  public set merakiOrgId(value: string[]) {
    this._merakiOrgId = value;
  }
  public resetMerakiOrgId() {
    this._merakiOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get merakiOrgIdInput() {
    return this._merakiOrgId;
  }

  // netconf_port - computed: true, optional: true, required: false
  private _netconfPort?: string; 
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }
  public set netconfPort(value: string) {
    this._netconfPort = value;
  }
  public resetNetconfPort() {
    this._netconfPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfPortInput() {
    return this._netconfPort;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // snmp_auth_passphrase - computed: true, optional: true, required: false
  private _snmpAuthPassphrase?: string; 
  public get snmpAuthPassphrase() {
    return this.getStringAttribute('snmp_auth_passphrase');
  }
  public set snmpAuthPassphrase(value: string) {
    this._snmpAuthPassphrase = value;
  }
  public resetSnmpAuthPassphrase() {
    this._snmpAuthPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthPassphraseInput() {
    return this._snmpAuthPassphrase;
  }

  // snmp_auth_protocol - computed: true, optional: true, required: false
  private _snmpAuthProtocol?: string; 
  public get snmpAuthProtocol() {
    return this.getStringAttribute('snmp_auth_protocol');
  }
  public set snmpAuthProtocol(value: string) {
    this._snmpAuthProtocol = value;
  }
  public resetSnmpAuthProtocol() {
    this._snmpAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthProtocolInput() {
    return this._snmpAuthProtocol;
  }

  // snmp_mode - computed: true, optional: true, required: false
  private _snmpMode?: string; 
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }
  public set snmpMode(value: string) {
    this._snmpMode = value;
  }
  public resetSnmpMode() {
    this._snmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpModeInput() {
    return this._snmpMode;
  }

  // snmp_priv_passphrase - computed: true, optional: true, required: false
  private _snmpPrivPassphrase?: string; 
  public get snmpPrivPassphrase() {
    return this.getStringAttribute('snmp_priv_passphrase');
  }
  public set snmpPrivPassphrase(value: string) {
    this._snmpPrivPassphrase = value;
  }
  public resetSnmpPrivPassphrase() {
    this._snmpPrivPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivPassphraseInput() {
    return this._snmpPrivPassphrase;
  }

  // snmp_priv_protocol - computed: true, optional: true, required: false
  private _snmpPrivProtocol?: string; 
  public get snmpPrivProtocol() {
    return this.getStringAttribute('snmp_priv_protocol');
  }
  public set snmpPrivProtocol(value: string) {
    this._snmpPrivProtocol = value;
  }
  public resetSnmpPrivProtocol() {
    this._snmpPrivProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivProtocolInput() {
    return this._snmpPrivProtocol;
  }

  // snmp_retry - computed: true, optional: true, required: false
  private _snmpRetry?: number; 
  public get snmpRetry() {
    return this.getNumberAttribute('snmp_retry');
  }
  public set snmpRetry(value: number) {
    this._snmpRetry = value;
  }
  public resetSnmpRetry() {
    this._snmpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRetryInput() {
    return this._snmpRetry;
  }

  // snmp_ro_community - computed: true, optional: true, required: false
  private _snmpRoCommunity?: string; 
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }
  public set snmpRoCommunity(value: string) {
    this._snmpRoCommunity = value;
  }
  public resetSnmpRoCommunity() {
    this._snmpRoCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRoCommunityInput() {
    return this._snmpRoCommunity;
  }

  // snmp_rw_community - computed: true, optional: true, required: false
  private _snmpRwCommunity?: string; 
  public get snmpRwCommunity() {
    return this.getStringAttribute('snmp_rw_community');
  }
  public set snmpRwCommunity(value: string) {
    this._snmpRwCommunity = value;
  }
  public resetSnmpRwCommunity() {
    this._snmpRwCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRwCommunityInput() {
    return this._snmpRwCommunity;
  }

  // snmp_timeout - computed: true, optional: true, required: false
  private _snmpTimeout?: number; 
  public get snmpTimeout() {
    return this.getNumberAttribute('snmp_timeout');
  }
  public set snmpTimeout(value: number) {
    this._snmpTimeout = value;
  }
  public resetSnmpTimeout() {
    this._snmpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTimeoutInput() {
    return this._snmpTimeout;
  }

  // snmp_user_name - computed: true, optional: true, required: false
  private _snmpUserName?: string; 
  public get snmpUserName() {
    return this.getStringAttribute('snmp_user_name');
  }
  public set snmpUserName(value: string) {
    this._snmpUserName = value;
  }
  public resetSnmpUserName() {
    this._snmpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpUserNameInput() {
    return this._snmpUserName;
  }

  // snmp_version - computed: true, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // update_mgmt_ipaddress_list - computed: false, optional: true, required: false
  private _updateMgmtIpaddressList = new NetworkDeviceListParametersUpdateMgmtIpaddressListStructList(this, "update_mgmt_ipaddress_list", false);
  public get updateMgmtIpaddressList() {
    return this._updateMgmtIpaddressList;
  }
  public putUpdateMgmtIpaddressList(value: NetworkDeviceListParametersUpdateMgmtIpaddressListStruct[] | cdktf.IResolvable) {
    this._updateMgmtIpaddressList.internalValue = value;
  }
  public resetUpdateMgmtIpaddressList() {
    this._updateMgmtIpaddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMgmtIpaddressListInput() {
    return this._updateMgmtIpaddressList.internalValue;
  }
}

export class NetworkDeviceListParametersList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceListParameters[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceListParametersOutputReference {
    return new NetworkDeviceListParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list dnacenter_network_device_list}
*/
export class NetworkDeviceList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDeviceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDeviceList to import
  * @param importFromId The id of the existing NetworkDeviceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDeviceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_device_list dnacenter_network_device_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_list',
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
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new NetworkDeviceListItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new NetworkDeviceListParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NetworkDeviceListParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(networkDeviceListParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(networkDeviceListParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceListParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
