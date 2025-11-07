// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * associatedWlcIp query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#associated_wlc_ip DataDnacenterNetworkDeviceList#associated_wlc_ip}
  */
  readonly associatedWlcIp?: string[];
  /**
  * collectionInterval query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#collection_interval DataDnacenterNetworkDeviceList#collection_interval}
  */
  readonly collectionInterval?: string[];
  /**
  * collectionStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#collection_status DataDnacenterNetworkDeviceList#collection_status}
  */
  readonly collectionStatus?: string[];
  /**
  * deviceSupportLevel query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#device_support_level DataDnacenterNetworkDeviceList#device_support_level}
  */
  readonly deviceSupportLevel?: string;
  /**
  * errorCode query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#error_code DataDnacenterNetworkDeviceList#error_code}
  */
  readonly errorCode?: string[];
  /**
  * errorDescription query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#error_description DataDnacenterNetworkDeviceList#error_description}
  */
  readonly errorDescription?: string[];
  /**
  * family query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#family DataDnacenterNetworkDeviceList#family}
  */
  readonly family?: string[];
  /**
  * hostname query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#hostname DataDnacenterNetworkDeviceList#hostname}
  */
  readonly hostname?: string[];
  /**
  * id query parameter. Accepts comma separated ids and return list of network-devices for the given ids. If invalid or not-found ids are provided, null entry will be returned in the list.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#id DataDnacenterNetworkDeviceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * license.name query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#license_name DataDnacenterNetworkDeviceList#license_name}
  */
  readonly licenseName?: string[];
  /**
  * license.status query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#license_status DataDnacenterNetworkDeviceList#license_status}
  */
  readonly licenseStatus?: string[];
  /**
  * license.type query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#license_type DataDnacenterNetworkDeviceList#license_type}
  */
  readonly licenseType?: string[];
  /**
  * limit query parameter. 1 <= limit <= 500 [max. no. of devices to be returned in the result]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#limit DataDnacenterNetworkDeviceList#limit}
  */
  readonly limit?: number;
  /**
  * location query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#location DataDnacenterNetworkDeviceList#location}
  */
  readonly location?: string[];
  /**
  * locationName query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#location_name DataDnacenterNetworkDeviceList#location_name}
  */
  readonly locationName?: string[];
  /**
  * macAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#mac_address DataDnacenterNetworkDeviceList#mac_address}
  */
  readonly macAddress?: string[];
  /**
  * managementIpAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#management_ip_address DataDnacenterNetworkDeviceList#management_ip_address}
  */
  readonly managementIpAddress?: string[];
  /**
  * module+equpimenttype query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_equpimenttype DataDnacenterNetworkDeviceList#module_equpimenttype}
  */
  readonly moduleEqupimenttype?: string[];
  /**
  * module+name query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_name DataDnacenterNetworkDeviceList#module_name}
  */
  readonly moduleName?: string[];
  /**
  * module+operationstatecode query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_operationstatecode DataDnacenterNetworkDeviceList#module_operationstatecode}
  */
  readonly moduleOperationstatecode?: string[];
  /**
  * module+partnumber query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_partnumber DataDnacenterNetworkDeviceList#module_partnumber}
  */
  readonly modulePartnumber?: string[];
  /**
  * module+servicestate query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_servicestate DataDnacenterNetworkDeviceList#module_servicestate}
  */
  readonly moduleServicestate?: string[];
  /**
  * module+vendorequipmenttype query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#module_vendorequipmenttype DataDnacenterNetworkDeviceList#module_vendorequipmenttype}
  */
  readonly moduleVendorequipmenttype?: string[];
  /**
  * notSyncedForMinutes query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#not_synced_for_minutes DataDnacenterNetworkDeviceList#not_synced_for_minutes}
  */
  readonly notSyncedForMinutes?: string[];
  /**
  * offset query parameter. offset >= 1 [X gives results from Xth device onwards]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#offset DataDnacenterNetworkDeviceList#offset}
  */
  readonly offset?: number;
  /**
  * platformId query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#platform_id DataDnacenterNetworkDeviceList#platform_id}
  */
  readonly platformId?: string[];
  /**
  * reachabilityStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#reachability_status DataDnacenterNetworkDeviceList#reachability_status}
  */
  readonly reachabilityStatus?: string[];
  /**
  * role query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#role DataDnacenterNetworkDeviceList#role}
  */
  readonly role?: string[];
  /**
  * serialNumber query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#serial_number DataDnacenterNetworkDeviceList#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * series query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#series DataDnacenterNetworkDeviceList#series}
  */
  readonly series?: string[];
  /**
  * softwareType query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#software_type DataDnacenterNetworkDeviceList#software_type}
  */
  readonly softwareType?: string[];
  /**
  * softwareVersion query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#software_version DataDnacenterNetworkDeviceList#software_version}
  */
  readonly softwareVersion?: string[];
  /**
  * type query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#type DataDnacenterNetworkDeviceList#type}
  */
  readonly type?: string[];
  /**
  * upTime query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#up_time DataDnacenterNetworkDeviceList#up_time}
  */
  readonly upTime?: string[];
}
export interface DataDnacenterNetworkDeviceListItems {
}

export function dataDnacenterNetworkDeviceListItemsToTerraform(struct?: DataDnacenterNetworkDeviceListItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceListItemsToHclTerraform(struct?: DataDnacenterNetworkDeviceListItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceListItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceListItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceListItems | undefined) {
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

export class DataDnacenterNetworkDeviceListItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceListItemsOutputReference {
    return new DataDnacenterNetworkDeviceListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list dnacenter_network_device_list}
*/
export class DataDnacenterNetworkDeviceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceList to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_list dnacenter_network_device_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_list',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedWlcIp = config.associatedWlcIp;
    this._collectionInterval = config.collectionInterval;
    this._collectionStatus = config.collectionStatus;
    this._deviceSupportLevel = config.deviceSupportLevel;
    this._errorCode = config.errorCode;
    this._errorDescription = config.errorDescription;
    this._family = config.family;
    this._hostname = config.hostname;
    this._id = config.id;
    this._licenseName = config.licenseName;
    this._licenseStatus = config.licenseStatus;
    this._licenseType = config.licenseType;
    this._limit = config.limit;
    this._location = config.location;
    this._locationName = config.locationName;
    this._macAddress = config.macAddress;
    this._managementIpAddress = config.managementIpAddress;
    this._moduleEqupimenttype = config.moduleEqupimenttype;
    this._moduleName = config.moduleName;
    this._moduleOperationstatecode = config.moduleOperationstatecode;
    this._modulePartnumber = config.modulePartnumber;
    this._moduleServicestate = config.moduleServicestate;
    this._moduleVendorequipmenttype = config.moduleVendorequipmenttype;
    this._notSyncedForMinutes = config.notSyncedForMinutes;
    this._offset = config.offset;
    this._platformId = config.platformId;
    this._reachabilityStatus = config.reachabilityStatus;
    this._role = config.role;
    this._serialNumber = config.serialNumber;
    this._series = config.series;
    this._softwareType = config.softwareType;
    this._softwareVersion = config.softwareVersion;
    this._type = config.type;
    this._upTime = config.upTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_wlc_ip - computed: false, optional: true, required: false
  private _associatedWlcIp?: string[]; 
  public get associatedWlcIp() {
    return this.getListAttribute('associated_wlc_ip');
  }
  public set associatedWlcIp(value: string[]) {
    this._associatedWlcIp = value;
  }
  public resetAssociatedWlcIp() {
    this._associatedWlcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedWlcIpInput() {
    return this._associatedWlcIp;
  }

  // collection_interval - computed: false, optional: true, required: false
  private _collectionInterval?: string[]; 
  public get collectionInterval() {
    return this.getListAttribute('collection_interval');
  }
  public set collectionInterval(value: string[]) {
    this._collectionInterval = value;
  }
  public resetCollectionInterval() {
    this._collectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIntervalInput() {
    return this._collectionInterval;
  }

  // collection_status - computed: false, optional: true, required: false
  private _collectionStatus?: string[]; 
  public get collectionStatus() {
    return this.getListAttribute('collection_status');
  }
  public set collectionStatus(value: string[]) {
    this._collectionStatus = value;
  }
  public resetCollectionStatus() {
    this._collectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionStatusInput() {
    return this._collectionStatus;
  }

  // device_support_level - computed: false, optional: true, required: false
  private _deviceSupportLevel?: string; 
  public get deviceSupportLevel() {
    return this.getStringAttribute('device_support_level');
  }
  public set deviceSupportLevel(value: string) {
    this._deviceSupportLevel = value;
  }
  public resetDeviceSupportLevel() {
    this._deviceSupportLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSupportLevelInput() {
    return this._deviceSupportLevel;
  }

  // error_code - computed: false, optional: true, required: false
  private _errorCode?: string[]; 
  public get errorCode() {
    return this.getListAttribute('error_code');
  }
  public set errorCode(value: string[]) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // error_description - computed: false, optional: true, required: false
  private _errorDescription?: string[]; 
  public get errorDescription() {
    return this.getListAttribute('error_description');
  }
  public set errorDescription(value: string[]) {
    this._errorDescription = value;
  }
  public resetErrorDescription() {
    this._errorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDescriptionInput() {
    return this._errorDescription;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string[]; 
  public get family() {
    return this.getListAttribute('family');
  }
  public set family(value: string[]) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string[]; 
  public get hostname() {
    return this.getListAttribute('hostname');
  }
  public set hostname(value: string[]) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
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
  private _items = new DataDnacenterNetworkDeviceListItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // license_name - computed: false, optional: true, required: false
  private _licenseName?: string[]; 
  public get licenseName() {
    return this.getListAttribute('license_name');
  }
  public set licenseName(value: string[]) {
    this._licenseName = value;
  }
  public resetLicenseName() {
    this._licenseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseNameInput() {
    return this._licenseName;
  }

  // license_status - computed: false, optional: true, required: false
  private _licenseStatus?: string[]; 
  public get licenseStatus() {
    return this.getListAttribute('license_status');
  }
  public set licenseStatus(value: string[]) {
    this._licenseStatus = value;
  }
  public resetLicenseStatus() {
    this._licenseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStatusInput() {
    return this._licenseStatus;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string[]; 
  public get licenseType() {
    return this.getListAttribute('license_type');
  }
  public set licenseType(value: string[]) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return this.getListAttribute('location');
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string[]; 
  public get locationName() {
    return this.getListAttribute('location_name');
  }
  public set locationName(value: string[]) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string[]; 
  public get macAddress() {
    return this.getListAttribute('mac_address');
  }
  public set macAddress(value: string[]) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // management_ip_address - computed: false, optional: true, required: false
  private _managementIpAddress?: string[]; 
  public get managementIpAddress() {
    return this.getListAttribute('management_ip_address');
  }
  public set managementIpAddress(value: string[]) {
    this._managementIpAddress = value;
  }
  public resetManagementIpAddress() {
    this._managementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpAddressInput() {
    return this._managementIpAddress;
  }

  // module_equpimenttype - computed: false, optional: true, required: false
  private _moduleEqupimenttype?: string[]; 
  public get moduleEqupimenttype() {
    return this.getListAttribute('module_equpimenttype');
  }
  public set moduleEqupimenttype(value: string[]) {
    this._moduleEqupimenttype = value;
  }
  public resetModuleEqupimenttype() {
    this._moduleEqupimenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleEqupimenttypeInput() {
    return this._moduleEqupimenttype;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string[]; 
  public get moduleName() {
    return this.getListAttribute('module_name');
  }
  public set moduleName(value: string[]) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // module_operationstatecode - computed: false, optional: true, required: false
  private _moduleOperationstatecode?: string[]; 
  public get moduleOperationstatecode() {
    return this.getListAttribute('module_operationstatecode');
  }
  public set moduleOperationstatecode(value: string[]) {
    this._moduleOperationstatecode = value;
  }
  public resetModuleOperationstatecode() {
    this._moduleOperationstatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleOperationstatecodeInput() {
    return this._moduleOperationstatecode;
  }

  // module_partnumber - computed: false, optional: true, required: false
  private _modulePartnumber?: string[]; 
  public get modulePartnumber() {
    return this.getListAttribute('module_partnumber');
  }
  public set modulePartnumber(value: string[]) {
    this._modulePartnumber = value;
  }
  public resetModulePartnumber() {
    this._modulePartnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePartnumberInput() {
    return this._modulePartnumber;
  }

  // module_servicestate - computed: false, optional: true, required: false
  private _moduleServicestate?: string[]; 
  public get moduleServicestate() {
    return this.getListAttribute('module_servicestate');
  }
  public set moduleServicestate(value: string[]) {
    this._moduleServicestate = value;
  }
  public resetModuleServicestate() {
    this._moduleServicestate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleServicestateInput() {
    return this._moduleServicestate;
  }

  // module_vendorequipmenttype - computed: false, optional: true, required: false
  private _moduleVendorequipmenttype?: string[]; 
  public get moduleVendorequipmenttype() {
    return this.getListAttribute('module_vendorequipmenttype');
  }
  public set moduleVendorequipmenttype(value: string[]) {
    this._moduleVendorequipmenttype = value;
  }
  public resetModuleVendorequipmenttype() {
    this._moduleVendorequipmenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleVendorequipmenttypeInput() {
    return this._moduleVendorequipmenttype;
  }

  // not_synced_for_minutes - computed: false, optional: true, required: false
  private _notSyncedForMinutes?: string[]; 
  public get notSyncedForMinutes() {
    return this.getListAttribute('not_synced_for_minutes');
  }
  public set notSyncedForMinutes(value: string[]) {
    this._notSyncedForMinutes = value;
  }
  public resetNotSyncedForMinutes() {
    this._notSyncedForMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSyncedForMinutesInput() {
    return this._notSyncedForMinutes;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: string[]; 
  public get platformId() {
    return this.getListAttribute('platform_id');
  }
  public set platformId(value: string[]) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // reachability_status - computed: false, optional: true, required: false
  private _reachabilityStatus?: string[]; 
  public get reachabilityStatus() {
    return this.getListAttribute('reachability_status');
  }
  public set reachabilityStatus(value: string[]) {
    this._reachabilityStatus = value;
  }
  public resetReachabilityStatus() {
    this._reachabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityStatusInput() {
    return this._reachabilityStatus;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string[]; 
  public get role() {
    return this.getListAttribute('role');
  }
  public set role(value: string[]) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return this.getListAttribute('serial_number');
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // series - computed: false, optional: true, required: false
  private _series?: string[]; 
  public get series() {
    return this.getListAttribute('series');
  }
  public set series(value: string[]) {
    this._series = value;
  }
  public resetSeries() {
    this._series = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series;
  }

  // software_type - computed: false, optional: true, required: false
  private _softwareType?: string[]; 
  public get softwareType() {
    return this.getListAttribute('software_type');
  }
  public set softwareType(value: string[]) {
    this._softwareType = value;
  }
  public resetSoftwareType() {
    this._softwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTypeInput() {
    return this._softwareType;
  }

  // software_version - computed: false, optional: true, required: false
  private _softwareVersion?: string[]; 
  public get softwareVersion() {
    return this.getListAttribute('software_version');
  }
  public set softwareVersion(value: string[]) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // up_time - computed: false, optional: true, required: false
  private _upTime?: string[]; 
  public get upTime() {
    return this.getListAttribute('up_time');
  }
  public set upTime(value: string[]) {
    this._upTime = value;
  }
  public resetUpTime() {
    this._upTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInput() {
    return this._upTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_wlc_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedWlcIp),
      collection_interval: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectionInterval),
      collection_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectionStatus),
      device_support_level: cdktf.stringToTerraform(this._deviceSupportLevel),
      error_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._errorCode),
      error_description: cdktf.listMapper(cdktf.stringToTerraform, false)(this._errorDescription),
      family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._family),
      hostname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      license_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseName),
      license_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseStatus),
      license_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseType),
      limit: cdktf.numberToTerraform(this._limit),
      location: cdktf.listMapper(cdktf.stringToTerraform, false)(this._location),
      location_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locationName),
      mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAddress),
      management_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementIpAddress),
      module_equpimenttype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleEqupimenttype),
      module_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleName),
      module_operationstatecode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleOperationstatecode),
      module_partnumber: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modulePartnumber),
      module_servicestate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleServicestate),
      module_vendorequipmenttype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleVendorequipmenttype),
      not_synced_for_minutes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notSyncedForMinutes),
      offset: cdktf.numberToTerraform(this._offset),
      platform_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformId),
      reachability_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reachabilityStatus),
      role: cdktf.listMapper(cdktf.stringToTerraform, false)(this._role),
      serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumber),
      series: cdktf.listMapper(cdktf.stringToTerraform, false)(this._series),
      software_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareType),
      software_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareVersion),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      up_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_wlc_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedWlcIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      collection_interval: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectionInterval),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      collection_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectionStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_support_level: {
        value: cdktf.stringToHclTerraform(this._deviceSupportLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._errorCode),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      error_description: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._errorDescription),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._family),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostname),
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
      license_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      license_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      license_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._location),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locationName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mac_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementIpAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_equpimenttype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleEqupimenttype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_operationstatecode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleOperationstatecode),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_partnumber: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modulePartnumber),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_servicestate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleServicestate),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_vendorequipmenttype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleVendorequipmenttype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      not_synced_for_minutes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notSyncedForMinutes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      platform_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platformId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reachability_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reachabilityStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      role: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._role),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serial_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumber),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      series: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._series),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwareType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwareVersion),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      up_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upTime),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
