// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterLicenseDeviceLicenseDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * device_uuid path parameter. Id of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details#device_uuid DataDnacenterLicenseDeviceLicenseDetails#device_uuid}
  */
  readonly deviceUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details#id DataDnacenterLicenseDeviceLicenseDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPoints {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_type - computed: true, optional: false, required: false
  public get apType() {
    return this.getStringAttribute('ap_type');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModules {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModules | undefined) {
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

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // module_type - computed: true, optional: false, required: false
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCards {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supervisor_card_type - computed: true, optional: false, required: false
  public get supervisorCardType() {
    return this.getStringAttribute('supervisor_card_type');
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetails {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // board_serial_number - computed: true, optional: false, required: false
  public get boardSerialNumber() {
    return this.getStringAttribute('board_serial_number');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // supervisor_cards - computed: true, optional: false, required: false
  private _supervisorCards = new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsSupervisorCardsList(this, "supervisor_cards", false);
  public get supervisorCards() {
    return this._supervisorCards;
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevices {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevices | undefined) {
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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseDeviceLicenseDetailsItems {
}

export function dataDnacenterLicenseDeviceLicenseDetailsItemsToTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceLicenseDetailsItemsToHclTerraform(struct?: DataDnacenterLicenseDeviceLicenseDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceLicenseDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceLicenseDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_points - computed: true, optional: false, required: false
  private _accessPoints = new DataDnacenterLicenseDeviceLicenseDetailsItemsAccessPointsList(this, "access_points", false);
  public get accessPoints() {
    return this._accessPoints;
  }

  // chassis_details - computed: true, optional: false, required: false
  private _chassisDetails = new DataDnacenterLicenseDeviceLicenseDetailsItemsChassisDetailsList(this, "chassis_details", false);
  public get chassisDetails() {
    return this._chassisDetails;
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

  // feature_license - computed: true, optional: false, required: false
  public get featureLicense() {
    return this.getListAttribute('feature_license');
  }

  // has_sup_cards - computed: true, optional: false, required: false
  public get hasSupCards() {
    return this.getStringAttribute('has_sup_cards');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_license_expired - computed: true, optional: false, required: false
  public get isLicenseExpired() {
    return this.getStringAttribute('is_license_expired');
  }

  // is_stacked_device - computed: true, optional: false, required: false
  public get isStackedDevice() {
    return this.getStringAttribute('is_stacked_device');
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

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // sntc_status - computed: true, optional: false, required: false
  public get sntcStatus() {
    return this.getStringAttribute('sntc_status');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // stacked_devices - computed: true, optional: false, required: false
  private _stackedDevices = new DataDnacenterLicenseDeviceLicenseDetailsItemsStackedDevicesList(this, "stacked_devices", false);
  public get stackedDevices() {
    return this._stackedDevices;
  }

  // udi - computed: true, optional: false, required: false
  public get udi() {
    return this.getStringAttribute('udi');
  }

  // virtual_account_name - computed: true, optional: false, required: false
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
}

export class DataDnacenterLicenseDeviceLicenseDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceLicenseDetailsItemsOutputReference {
    return new DataDnacenterLicenseDeviceLicenseDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details dnacenter_license_device_license_details}
*/
export class DataDnacenterLicenseDeviceLicenseDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_device_license_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterLicenseDeviceLicenseDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterLicenseDeviceLicenseDetails to import
  * @param importFromId The id of the existing DataDnacenterLicenseDeviceLicenseDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterLicenseDeviceLicenseDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_device_license_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_license_details dnacenter_license_device_license_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterLicenseDeviceLicenseDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterLicenseDeviceLicenseDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_device_license_details',
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
    this._deviceUuid = config.deviceUuid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_uuid - computed: false, optional: false, required: true
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
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
  private _items = new DataDnacenterLicenseDeviceLicenseDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
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
