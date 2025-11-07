// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterLicenseDeviceLicenseSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * device_type query parameter. Type of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#device_type DataDnacenterLicenseDeviceLicenseSummary#device_type}
  */
  readonly deviceType?: string;
  /**
  * device_uuid query parameter. Id of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#device_uuid DataDnacenterLicenseDeviceLicenseSummary#device_uuid}
  */
  readonly deviceUuid?: string;
  /**
  * dna_level query parameter. Device Cisco DNA license level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#dna_level DataDnacenterLicenseDeviceLicenseSummary#dna_level}
  */
  readonly dnaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#id DataDnacenterLicenseDeviceLicenseSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#limit DataDnacenterLicenseDeviceLicenseSummary#limit}
  */
  readonly limit: number;
  /**
  * order query parameter. Sorting order
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#order DataDnacenterLicenseDeviceLicenseSummary#order}
  */
  readonly order: string;
  /**
  * page_number query parameter. Page number of response
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#page_number DataDnacenterLicenseDeviceLicenseSummary#page_number}
  */
  readonly pageNumber: number;
  /**
  * registration_status query parameter. Smart license registration status of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#registration_status DataDnacenterLicenseDeviceLicenseSummary#registration_status}
  */
  readonly registrationStatus?: string;
  /**
  * smart_account_id query parameter. Id of smart account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#smart_account_id DataDnacenterLicenseDeviceLicenseSummary#smart_account_id}
  */
  readonly smartAccountId?: number;
  /**
  * sort_by query parameter. Sort result by field
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#sort_by DataDnacenterLicenseDeviceLicenseSummary#sort_by}
  */
  readonly sortBy?: string;
  /**
  * virtual_account_name query parameter. Name of virtual account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#virtual_account_name DataDnacenterLicenseDeviceLicenseSummary#virtual_account_name}
  */
  readonly virtualAccountName?: string;
}
export interface DataDnacenterLicenseDeviceLicenseSummaryItems {
}

export function dataDnacenterLicenseDeviceLicenseSummaryItemsToTerraform(struct?: DataDnacenterLicenseDeviceLicenseSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseSummaryItemsToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseSummaryItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseSummaryItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseSummaryItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_status - computed: true, optional: false, required: false
  public get authorizationStatus() {
    return this.getStringAttribute('authorization_status');
  }

  // customer_tag1 - computed: true, optional: false, required: false
  public get customerTag1() {
    return this.getStringAttribute('customer_tag1');
  }

  // customer_tag2 - computed: true, optional: false, required: false
  public get customerTag2() {
    return this.getStringAttribute('customer_tag2');
  }

  // customer_tag3 - computed: true, optional: false, required: false
  public get customerTag3() {
    return this.getStringAttribute('customer_tag3');
  }

  // customer_tag4 - computed: true, optional: false, required: false
  public get customerTag4() {
    return this.getStringAttribute('customer_tag4');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // device_uuid - computed: true, optional: false, required: false
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }

  // dna_level - computed: true, optional: false, required: false
  public get dnaLevel() {
    return this.getStringAttribute('dna_level');
  }

  // evaluation_license_expiry - computed: true, optional: false, required: false
  public get evaluationLicenseExpiry() {
    return this.getStringAttribute('evaluation_license_expiry');
  }

  // hsec_status - computed: true, optional: false, required: false
  public get hsecStatus() {
    return this.getStringAttribute('hsec_status');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_license_expired - computed: true, optional: false, required: false
  public get isLicenseExpired() {
    return this.getStringAttribute('is_license_expired');
  }

  // is_performance_allowed - computed: true, optional: false, required: false
  public get isPerformanceAllowed() {
    return this.getStringAttribute('is_performance_allowed');
  }

  // is_wireless - computed: true, optional: false, required: false
  public get isWireless() {
    return this.getStringAttribute('is_wireless');
  }

  // is_wireless_capable - computed: true, optional: false, required: false
  public get isWirelessCapable() {
    return this.getStringAttribute('is_wireless_capable');
  }

  // last_successful_rum_usage_upload_time - computed: true, optional: false, required: false
  public get lastSuccessfulRumUsageUploadTime() {
    return this.getStringAttribute('last_successful_rum_usage_upload_time');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // license_mode - computed: true, optional: false, required: false
  public get licenseMode() {
    return this.getStringAttribute('license_mode');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // network_license - computed: true, optional: false, required: false
  public get networkLicense() {
    return this.getStringAttribute('network_license');
  }

  // performance_license - computed: true, optional: false, required: false
  public get performanceLicense() {
    return this.getStringAttribute('performance_license');
  }

  // registration_status - computed: true, optional: false, required: false
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }

  // reservation_status - computed: true, optional: false, required: false
  public get reservationStatus() {
    return this.getStringAttribute('reservation_status');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // sle_auth_code - computed: true, optional: false, required: false
  public get sleAuthCode() {
    return this.getStringAttribute('sle_auth_code');
  }

  // sle_state - computed: true, optional: false, required: false
  public get sleState() {
    return this.getStringAttribute('sle_state');
  }

  // smart_account_name - computed: true, optional: false, required: false
  public get smartAccountName() {
    return this.getStringAttribute('smart_account_name');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // throughput_level - computed: true, optional: false, required: false
  public get throughputLevel() {
    return this.getStringAttribute('throughput_level');
  }

  // total_access_point_count - computed: true, optional: false, required: false
  public get totalAccessPointCount() {
    return this.getNumberAttribute('total_access_point_count');
  }

  // virtual_account_name - computed: true, optional: false, required: false
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }

  // wireless_capable_dna_license - computed: true, optional: false, required: false
  public get wirelessCapableDnaLicense() {
    return this.getStringAttribute('wireless_capable_dna_license');
  }

  // wireless_capable_network_license - computed: true, optional: false, required: false
  public get wirelessCapableNetworkLicense() {
    return this.getStringAttribute('wireless_capable_network_license');
  }
}

export class DataDnacenterLicenseDeviceLicenseSummaryItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseSummaryItemsOutputReference {
    return new DataDnacenterLicenseDeviceLicenseSummaryItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary dnacenter_license_device_license_summary}
*/
export class DataDnacenterLicenseDeviceLicenseSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_device_license_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterLicenseDeviceLicenseSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterLicenseDeviceLicenseSummary to import
  * @param importFromId The id of the existing DataDnacenterLicenseDeviceLicenseSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterLicenseDeviceLicenseSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_device_license_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_summary dnacenter_license_device_license_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterLicenseDeviceLicenseSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterLicenseDeviceLicenseSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_device_license_summary',
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
    this._deviceType = config.deviceType;
    this._deviceUuid = config.deviceUuid;
    this._dnaLevel = config.dnaLevel;
    this._id = config.id;
    this._limit = config.limit;
    this._order = config.order;
    this._pageNumber = config.pageNumber;
    this._registrationStatus = config.registrationStatus;
    this._smartAccountId = config.smartAccountId;
    this._sortBy = config.sortBy;
    this._virtualAccountName = config.virtualAccountName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // device_uuid - computed: false, optional: true, required: false
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  public resetDeviceUuid() {
    this._deviceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
  }

  // dna_level - computed: false, optional: true, required: false
  private _dnaLevel?: string; 
  public get dnaLevel() {
    return this.getStringAttribute('dna_level');
  }
  public set dnaLevel(value: string) {
    this._dnaLevel = value;
  }
  public resetDnaLevel() {
    this._dnaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnaLevelInput() {
    return this._dnaLevel;
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
  private _items = new DataDnacenterLicenseDeviceLicenseSummaryItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // page_number - computed: false, optional: false, required: true
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // registration_status - computed: false, optional: true, required: false
  private _registrationStatus?: string; 
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }
  public set registrationStatus(value: string) {
    this._registrationStatus = value;
  }
  public resetRegistrationStatus() {
    this._registrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationStatusInput() {
    return this._registrationStatus;
  }

  // smart_account_id - computed: false, optional: true, required: false
  private _smartAccountId?: number; 
  public get smartAccountId() {
    return this.getNumberAttribute('smart_account_id');
  }
  public set smartAccountId(value: number) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // virtual_account_name - computed: false, optional: true, required: false
  private _virtualAccountName?: string; 
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
  public set virtualAccountName(value: string) {
    this._virtualAccountName = value;
  }
  public resetVirtualAccountName() {
    this._virtualAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountNameInput() {
    return this._virtualAccountName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type: cdktf.stringToTerraform(this._deviceType),
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      dna_level: cdktf.stringToTerraform(this._dnaLevel),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      order: cdktf.stringToTerraform(this._order),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      registration_status: cdktf.stringToTerraform(this._registrationStatus),
      smart_account_id: cdktf.numberToTerraform(this._smartAccountId),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      virtual_account_name: cdktf.stringToTerraform(this._virtualAccountName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dna_level: {
        value: cdktf.stringToHclTerraform(this._dnaLevel),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registration_status: {
        value: cdktf.stringToHclTerraform(this._registrationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_account_id: {
        value: cdktf.numberToHclTerraform(this._smartAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_account_name: {
        value: cdktf.stringToHclTerraform(this._virtualAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
