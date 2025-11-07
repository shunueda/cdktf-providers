// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterEoxStatusDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceId path parameter. Device instance UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device#device_id DataDnacenterEoxStatusDevice#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device#id DataDnacenterEoxStatusDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterEoxStatusDeviceItemEoxDetails {
}

export function dataDnacenterEoxStatusDeviceItemEoxDetailsToTerraform(struct?: DataDnacenterEoxStatusDeviceItemEoxDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterEoxStatusDeviceItemEoxDetailsToHclTerraform(struct?: DataDnacenterEoxStatusDeviceItemEoxDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterEoxStatusDeviceItemEoxDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterEoxStatusDeviceItemEoxDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterEoxStatusDeviceItemEoxDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bulletin_headline - computed: true, optional: false, required: false
  public get bulletinHeadline() {
    return this.getStringAttribute('bulletin_headline');
  }

  // bulletin_number - computed: true, optional: false, required: false
  public get bulletinNumber() {
    return this.getStringAttribute('bulletin_number');
  }

  // bulletin_url - computed: true, optional: false, required: false
  public get bulletinUrl() {
    return this.getStringAttribute('bulletin_url');
  }

  // end_of_hardware_new_service_attachment_date - computed: true, optional: false, required: false
  public get endOfHardwareNewServiceAttachmentDate() {
    return this.getNumberAttribute('end_of_hardware_new_service_attachment_date');
  }

  // end_of_hardware_service_contract_renewal_date - computed: true, optional: false, required: false
  public get endOfHardwareServiceContractRenewalDate() {
    return this.getNumberAttribute('end_of_hardware_service_contract_renewal_date');
  }

  // end_of_last_hardware_ship_date - computed: true, optional: false, required: false
  public get endOfLastHardwareShipDate() {
    return this.getNumberAttribute('end_of_last_hardware_ship_date');
  }

  // end_of_life_date - computed: true, optional: false, required: false
  public get endOfLifeDate() {
    return this.getNumberAttribute('end_of_life_date');
  }

  // end_of_life_external_announcement_date - computed: true, optional: false, required: false
  public get endOfLifeExternalAnnouncementDate() {
    return this.getNumberAttribute('end_of_life_external_announcement_date');
  }

  // end_of_sale_date - computed: true, optional: false, required: false
  public get endOfSaleDate() {
    return this.getNumberAttribute('end_of_sale_date');
  }

  // end_of_signature_releases_date - computed: true, optional: false, required: false
  public get endOfSignatureReleasesDate() {
    return this.getNumberAttribute('end_of_signature_releases_date');
  }

  // end_of_software_maintenance_releases_date - computed: true, optional: false, required: false
  public get endOfSoftwareMaintenanceReleasesDate() {
    return this.getNumberAttribute('end_of_software_maintenance_releases_date');
  }

  // end_of_software_vulnerability_or_security_support_date - computed: true, optional: false, required: false
  public get endOfSoftwareVulnerabilityOrSecuritySupportDate() {
    return this.getNumberAttribute('end_of_software_vulnerability_or_security_support_date');
  }

  // end_of_software_vulnerability_or_security_support_date_hw - computed: true, optional: false, required: false
  public get endOfSoftwareVulnerabilityOrSecuritySupportDateHw() {
    return this.getNumberAttribute('end_of_software_vulnerability_or_security_support_date_hw');
  }

  // eox_alert_type - computed: true, optional: false, required: false
  public get eoxAlertType() {
    return this.getStringAttribute('eox_alert_type');
  }

  // last_date_of_support - computed: true, optional: false, required: false
  public get lastDateOfSupport() {
    return this.getNumberAttribute('last_date_of_support');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataDnacenterEoxStatusDeviceItemEoxDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterEoxStatusDeviceItemEoxDetailsOutputReference {
    return new DataDnacenterEoxStatusDeviceItemEoxDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterEoxStatusDeviceItem {
}

export function dataDnacenterEoxStatusDeviceItemToTerraform(struct?: DataDnacenterEoxStatusDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterEoxStatusDeviceItemToHclTerraform(struct?: DataDnacenterEoxStatusDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterEoxStatusDeviceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterEoxStatusDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterEoxStatusDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_count - computed: true, optional: false, required: false
  public get alertCount() {
    return this.getNumberAttribute('alert_count');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getListAttribute('comments');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // eox_details - computed: true, optional: false, required: false
  private _eoxDetails = new DataDnacenterEoxStatusDeviceItemEoxDetailsList(this, "eox_details", false);
  public get eoxDetails() {
    return this._eoxDetails;
  }

  // last_scan_time - computed: true, optional: false, required: false
  public get lastScanTime() {
    return this.getNumberAttribute('last_scan_time');
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }
}

export class DataDnacenterEoxStatusDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterEoxStatusDeviceItemOutputReference {
    return new DataDnacenterEoxStatusDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterEoxStatusDeviceItemsSummary {
}

export function dataDnacenterEoxStatusDeviceItemsSummaryToTerraform(struct?: DataDnacenterEoxStatusDeviceItemsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterEoxStatusDeviceItemsSummaryToHclTerraform(struct?: DataDnacenterEoxStatusDeviceItemsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterEoxStatusDeviceItemsSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterEoxStatusDeviceItemsSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterEoxStatusDeviceItemsSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eox_type - computed: true, optional: false, required: false
  public get eoxType() {
    return this.getStringAttribute('eox_type');
  }
}

export class DataDnacenterEoxStatusDeviceItemsSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterEoxStatusDeviceItemsSummaryOutputReference {
    return new DataDnacenterEoxStatusDeviceItemsSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterEoxStatusDeviceItems {
}

export function dataDnacenterEoxStatusDeviceItemsToTerraform(struct?: DataDnacenterEoxStatusDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterEoxStatusDeviceItemsToHclTerraform(struct?: DataDnacenterEoxStatusDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterEoxStatusDeviceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterEoxStatusDeviceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterEoxStatusDeviceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_count - computed: true, optional: false, required: false
  public get alertCount() {
    return this.getNumberAttribute('alert_count');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // last_scan_time - computed: true, optional: false, required: false
  public get lastScanTime() {
    return this.getNumberAttribute('last_scan_time');
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataDnacenterEoxStatusDeviceItemsSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }
}

export class DataDnacenterEoxStatusDeviceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterEoxStatusDeviceItemsOutputReference {
    return new DataDnacenterEoxStatusDeviceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device dnacenter_eox_status_device}
*/
export class DataDnacenterEoxStatusDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_eox_status_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterEoxStatusDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterEoxStatusDevice to import
  * @param importFromId The id of the existing DataDnacenterEoxStatusDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterEoxStatusDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_eox_status_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/eox_status_device dnacenter_eox_status_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterEoxStatusDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterEoxStatusDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_eox_status_device',
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
    this._deviceId = config.deviceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterEoxStatusDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterEoxStatusDeviceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
