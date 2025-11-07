// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceLexicographicallySortedConfig extends cdktf.TerraformMetaArguments {
  /**
  * associatedWlcIp query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#associated_wlc_ip DataDnacenterNetworkDeviceLexicographicallySorted#associated_wlc_ip}
  */
  readonly associatedWlcIp?: string;
  /**
  * collectionInterval query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#collection_interval DataDnacenterNetworkDeviceLexicographicallySorted#collection_interval}
  */
  readonly collectionInterval?: string;
  /**
  * collectionStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#collection_status DataDnacenterNetworkDeviceLexicographicallySorted#collection_status}
  */
  readonly collectionStatus?: string;
  /**
  * errorCode query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#error_code DataDnacenterNetworkDeviceLexicographicallySorted#error_code}
  */
  readonly errorCode?: string;
  /**
  * family query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#family DataDnacenterNetworkDeviceLexicographicallySorted#family}
  */
  readonly family?: string;
  /**
  * hostname query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#hostname DataDnacenterNetworkDeviceLexicographicallySorted#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#id DataDnacenterNetworkDeviceLexicographicallySorted#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#limit DataDnacenterNetworkDeviceLexicographicallySorted#limit}
  */
  readonly limit?: number;
  /**
  * macAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#mac_address DataDnacenterNetworkDeviceLexicographicallySorted#mac_address}
  */
  readonly macAddress?: string;
  /**
  * managementIpAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#management_ip_address DataDnacenterNetworkDeviceLexicographicallySorted#management_ip_address}
  */
  readonly managementIpAddress?: string;
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#offset DataDnacenterNetworkDeviceLexicographicallySorted#offset}
  */
  readonly offset?: number;
  /**
  * platformId query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#platform_id DataDnacenterNetworkDeviceLexicographicallySorted#platform_id}
  */
  readonly platformId?: string;
  /**
  * reachabilityFailureReason query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#reachability_failure_reason DataDnacenterNetworkDeviceLexicographicallySorted#reachability_failure_reason}
  */
  readonly reachabilityFailureReason?: string;
  /**
  * reachabilityStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#reachability_status DataDnacenterNetworkDeviceLexicographicallySorted#reachability_status}
  */
  readonly reachabilityStatus?: string;
  /**
  * role query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#role DataDnacenterNetworkDeviceLexicographicallySorted#role}
  */
  readonly role?: string;
  /**
  * roleSource query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#role_source DataDnacenterNetworkDeviceLexicographicallySorted#role_source}
  */
  readonly roleSource?: string;
  /**
  * serialNumber query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#serial_number DataDnacenterNetworkDeviceLexicographicallySorted#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * series query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#series DataDnacenterNetworkDeviceLexicographicallySorted#series}
  */
  readonly series?: string;
  /**
  * softwareType query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#software_type DataDnacenterNetworkDeviceLexicographicallySorted#software_type}
  */
  readonly softwareType?: string;
  /**
  * softwareVersion query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#software_version DataDnacenterNetworkDeviceLexicographicallySorted#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * type query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#type DataDnacenterNetworkDeviceLexicographicallySorted#type}
  */
  readonly type?: string;
  /**
  * upTime query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#up_time DataDnacenterNetworkDeviceLexicographicallySorted#up_time}
  */
  readonly upTime?: string;
  /**
  * vrfName query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#vrf_name DataDnacenterNetworkDeviceLexicographicallySorted#vrf_name}
  */
  readonly vrfName?: string;
}
export interface DataDnacenterNetworkDeviceLexicographicallySortedItems {
}

export function dataDnacenterNetworkDeviceLexicographicallySortedItemsToTerraform(struct?: DataDnacenterNetworkDeviceLexicographicallySortedItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceLexicographicallySortedItemsToHclTerraform(struct?: DataDnacenterNetworkDeviceLexicographicallySortedItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceLexicographicallySortedItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceLexicographicallySortedItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceLexicographicallySortedItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getListAttribute('response');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterNetworkDeviceLexicographicallySortedItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceLexicographicallySortedItemsOutputReference {
    return new DataDnacenterNetworkDeviceLexicographicallySortedItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted dnacenter_network_device_lexicographically_sorted}
*/
export class DataDnacenterNetworkDeviceLexicographicallySorted extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_lexicographically_sorted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceLexicographicallySorted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceLexicographicallySorted to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceLexicographicallySorted that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceLexicographicallySorted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_lexicographically_sorted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_lexicographically_sorted dnacenter_network_device_lexicographically_sorted} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceLexicographicallySortedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceLexicographicallySortedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_lexicographically_sorted',
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
    this._errorCode = config.errorCode;
    this._family = config.family;
    this._hostname = config.hostname;
    this._id = config.id;
    this._limit = config.limit;
    this._macAddress = config.macAddress;
    this._managementIpAddress = config.managementIpAddress;
    this._offset = config.offset;
    this._platformId = config.platformId;
    this._reachabilityFailureReason = config.reachabilityFailureReason;
    this._reachabilityStatus = config.reachabilityStatus;
    this._role = config.role;
    this._roleSource = config.roleSource;
    this._serialNumber = config.serialNumber;
    this._series = config.series;
    this._softwareType = config.softwareType;
    this._softwareVersion = config.softwareVersion;
    this._type = config.type;
    this._upTime = config.upTime;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_wlc_ip - computed: false, optional: true, required: false
  private _associatedWlcIp?: string; 
  public get associatedWlcIp() {
    return this.getStringAttribute('associated_wlc_ip');
  }
  public set associatedWlcIp(value: string) {
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
  private _collectionInterval?: string; 
  public get collectionInterval() {
    return this.getStringAttribute('collection_interval');
  }
  public set collectionInterval(value: string) {
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
  private _collectionStatus?: string; 
  public get collectionStatus() {
    return this.getStringAttribute('collection_status');
  }
  public set collectionStatus(value: string) {
    this._collectionStatus = value;
  }
  public resetCollectionStatus() {
    this._collectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionStatusInput() {
    return this._collectionStatus;
  }

  // error_code - computed: false, optional: true, required: false
  private _errorCode?: string; 
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }
  public set errorCode(value: string) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
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
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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
  private _items = new DataDnacenterNetworkDeviceLexicographicallySortedItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
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
  private _managementIpAddress?: string; 
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }
  public set managementIpAddress(value: string) {
    this._managementIpAddress = value;
  }
  public resetManagementIpAddress() {
    this._managementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpAddressInput() {
    return this._managementIpAddress;
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
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // reachability_failure_reason - computed: false, optional: true, required: false
  private _reachabilityFailureReason?: string; 
  public get reachabilityFailureReason() {
    return this.getStringAttribute('reachability_failure_reason');
  }
  public set reachabilityFailureReason(value: string) {
    this._reachabilityFailureReason = value;
  }
  public resetReachabilityFailureReason() {
    this._reachabilityFailureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityFailureReasonInput() {
    return this._reachabilityFailureReason;
  }

  // reachability_status - computed: false, optional: true, required: false
  private _reachabilityStatus?: string; 
  public get reachabilityStatus() {
    return this.getStringAttribute('reachability_status');
  }
  public set reachabilityStatus(value: string) {
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
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_source - computed: false, optional: true, required: false
  private _roleSource?: string; 
  public get roleSource() {
    return this.getStringAttribute('role_source');
  }
  public set roleSource(value: string) {
    this._roleSource = value;
  }
  public resetRoleSource() {
    this._roleSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSourceInput() {
    return this._roleSource;
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

  // series - computed: false, optional: true, required: false
  private _series?: string; 
  public get series() {
    return this.getStringAttribute('series');
  }
  public set series(value: string) {
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
  private _softwareType?: string; 
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }
  public set softwareType(value: string) {
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
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
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

  // up_time - computed: false, optional: true, required: false
  private _upTime?: string; 
  public get upTime() {
    return this.getStringAttribute('up_time');
  }
  public set upTime(value: string) {
    this._upTime = value;
  }
  public resetUpTime() {
    this._upTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInput() {
    return this._upTime;
  }

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_wlc_ip: cdktf.stringToTerraform(this._associatedWlcIp),
      collection_interval: cdktf.stringToTerraform(this._collectionInterval),
      collection_status: cdktf.stringToTerraform(this._collectionStatus),
      error_code: cdktf.stringToTerraform(this._errorCode),
      family: cdktf.stringToTerraform(this._family),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      management_ip_address: cdktf.stringToTerraform(this._managementIpAddress),
      offset: cdktf.numberToTerraform(this._offset),
      platform_id: cdktf.stringToTerraform(this._platformId),
      reachability_failure_reason: cdktf.stringToTerraform(this._reachabilityFailureReason),
      reachability_status: cdktf.stringToTerraform(this._reachabilityStatus),
      role: cdktf.stringToTerraform(this._role),
      role_source: cdktf.stringToTerraform(this._roleSource),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      series: cdktf.stringToTerraform(this._series),
      software_type: cdktf.stringToTerraform(this._softwareType),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      type: cdktf.stringToTerraform(this._type),
      up_time: cdktf.stringToTerraform(this._upTime),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_wlc_ip: {
        value: cdktf.stringToHclTerraform(this._associatedWlcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_interval: {
        value: cdktf.stringToHclTerraform(this._collectionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_status: {
        value: cdktf.stringToHclTerraform(this._collectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_code: {
        value: cdktf.stringToHclTerraform(this._errorCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_ip_address: {
        value: cdktf.stringToHclTerraform(this._managementIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      platform_id: {
        value: cdktf.stringToHclTerraform(this._platformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachability_failure_reason: {
        value: cdktf.stringToHclTerraform(this._reachabilityFailureReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachability_status: {
        value: cdktf.stringToHclTerraform(this._reachabilityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_source: {
        value: cdktf.stringToHclTerraform(this._roleSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series: {
        value: cdktf.stringToHclTerraform(this._series),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_type: {
        value: cdktf.stringToHclTerraform(this._softwareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_time: {
        value: cdktf.stringToHclTerraform(this._upTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
