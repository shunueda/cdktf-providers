// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filters to apply while fetching devices. Only one among `filter_expression`, `ids` and `device_service_tags` can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#filters DataOmeDevice#filters}
  */
  readonly filters?: DataOmeDeviceFilters;
  /**
  * The types of inventory types to fetch. Accepted values are `serverDeviceCards`, `serverProcessors`, `serverDellVideos`, `serverNetworkInterfaces`, `serverFcCards`, `serverOperatingSystems`, `serverVirtualFlashes`, `serverPowerSupplies`, `serverArrayDisks`, `serverRaidControllers`, `serverMemoryDevices`, `serverStorageEnclosures`, `serverSupportedPowerStates`, `deviceLicense`, `deviceCapabilities`, `deviceFru`, `deviceManagement`, `deviceSoftware`, `subsystemRollupStatus`, `deviceInventory`. If not configured, all inventory types are fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#inventory_types DataOmeDevice#inventory_types}
  */
  readonly inventoryTypes?: string[];
}
export interface DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityType {
}

export function dataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityTypeToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityTypeToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capability_id - computed: true, optional: false, required: false
  public get capabilityId() {
    return this.getNumberAttribute('capability_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id_owner - computed: true, optional: false, required: false
  public get idOwner() {
    return this.getNumberAttribute('id_owner');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryCapabilities {
}

export function dataOmeDeviceDevicesDetailedInventoryCapabilitiesToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryCapabilitiesToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capability_type - computed: true, optional: false, required: false
  private _capabilityType = new DataOmeDeviceDevicesDetailedInventoryCapabilitiesCapabilityTypeOutputReference(this, "capability_type");
  public get capabilityType() {
    return this._capabilityType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryCapabilitiesOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryCpus {
}

export function dataOmeDeviceDevicesDetailedInventoryCpusToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryCpusToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryCpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryCpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryCpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryCpus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brand_name - computed: true, optional: false, required: false
  public get brandName() {
    return this.getStringAttribute('brand_name');
  }

  // current_speed - computed: true, optional: false, required: false
  public get currentSpeed() {
    return this.getNumberAttribute('current_speed');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // max_speed - computed: true, optional: false, required: false
  public get maxSpeed() {
    return this.getNumberAttribute('max_speed');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // number_of_cores - computed: true, optional: false, required: false
  public get numberOfCores() {
    return this.getNumberAttribute('number_of_cores');
  }

  // number_of_enabled_cores - computed: true, optional: false, required: false
  public get numberOfEnabledCores() {
    return this.getNumberAttribute('number_of_enabled_cores');
  }

  // slot_number - computed: true, optional: false, required: false
  public get slotNumber() {
    return this.getStringAttribute('slot_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // voltage - computed: true, optional: false, required: false
  public get voltage() {
    return this.getStringAttribute('voltage');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryCpusList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryCpusOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryCpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryDisks {
}

export function dataOmeDeviceDevicesDetailedInventoryDisksToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryDisksToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // disk_number - computed: true, optional: false, required: false
  public get diskNumber() {
    return this.getStringAttribute('disk_number');
  }

  // enclosure_id - computed: true, optional: false, required: false
  public get enclosureId() {
    return this.getStringAttribute('enclosure_id');
  }

  // encryption_ability - computed: true, optional: false, required: false
  public get encryptionAbility() {
    return this.getBooleanAttribute('encryption_ability');
  }

  // form_factor - computed: true, optional: false, required: false
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }

  // free_space - computed: true, optional: false, required: false
  public get freeSpace() {
    return this.getStringAttribute('free_space');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manufactured_day - computed: true, optional: false, required: false
  public get manufacturedDay() {
    return this.getNumberAttribute('manufactured_day');
  }

  // manufactured_week - computed: true, optional: false, required: false
  public get manufacturedWeek() {
    return this.getNumberAttribute('manufactured_week');
  }

  // manufactured_year - computed: true, optional: false, required: false
  public get manufacturedYear() {
    return this.getNumberAttribute('manufactured_year');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // model_number - computed: true, optional: false, required: false
  public get modelNumber() {
    return this.getStringAttribute('model_number');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // predictive_failure_state - computed: true, optional: false, required: false
  public get predictiveFailureState() {
    return this.getStringAttribute('predictive_failure_state');
  }

  // raid_status - computed: true, optional: false, required: false
  public get raidStatus() {
    return this.getStringAttribute('raid_status');
  }

  // remaining_read_write_endurance - computed: true, optional: false, required: false
  public get remainingReadWriteEndurance() {
    return this.getStringAttribute('remaining_read_write_endurance');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // sas_address - computed: true, optional: false, required: false
  public get sasAddress() {
    return this.getStringAttribute('sas_address');
  }

  // security_state - computed: true, optional: false, required: false
  public get securityState() {
    return this.getStringAttribute('security_state');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // slot_number - computed: true, optional: false, required: false
  public get slotNumber() {
    return this.getNumberAttribute('slot_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_string - computed: true, optional: false, required: false
  public get statusString() {
    return this.getStringAttribute('status_string');
  }

  // used_space - computed: true, optional: false, required: false
  public get usedSpace() {
    return this.getStringAttribute('used_space');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryDisksOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryFcis {
}

export function dataOmeDeviceDevicesDetailedInventoryFcisToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryFcis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryFcisToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryFcis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryFcisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryFcis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryFcis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // first_fctarget_lun - computed: true, optional: false, required: false
  public get firstFctargetLun() {
    return this.getStringAttribute('first_fctarget_lun');
  }

  // first_fctarget_wwpn - computed: true, optional: false, required: false
  public get firstFctargetWwpn() {
    return this.getStringAttribute('first_fctarget_wwpn');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }

  // second_fctarget_lun - computed: true, optional: false, required: false
  public get secondFctargetLun() {
    return this.getStringAttribute('second_fctarget_lun');
  }

  // second_fctarget_wwpn - computed: true, optional: false, required: false
  public get secondFctargetWwpn() {
    return this.getStringAttribute('second_fctarget_wwpn');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // virtual_wwn - computed: true, optional: false, required: false
  public get virtualWwn() {
    return this.getStringAttribute('virtual_wwn');
  }

  // virtual_wwpn - computed: true, optional: false, required: false
  public get virtualWwpn() {
    return this.getStringAttribute('virtual_wwpn');
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // wwpn - computed: true, optional: false, required: false
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryFcisList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryFcisOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryFcisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryFrus {
}

export function dataOmeDeviceDevicesDetailedInventoryFrusToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryFrus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryFrusToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryFrus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryFrusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryFrus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryFrus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryFrusList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryFrusOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryFrusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryLicensesLicenseType {
}

export function dataOmeDeviceDevicesDetailedInventoryLicensesLicenseTypeToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLicensesLicenseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryLicensesLicenseTypeToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLicensesLicenseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryLicensesLicenseTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryLicensesLicenseType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryLicensesLicenseType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getNumberAttribute('license_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryLicenses {
}

export function dataOmeDeviceDevicesDetailedInventoryLicensesToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryLicensesToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_devices - computed: true, optional: false, required: false
  public get assignedDevices() {
    return this.getStringAttribute('assigned_devices');
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }

  // eval_time_remaining - computed: true, optional: false, required: false
  public get evalTimeRemaining() {
    return this.getNumberAttribute('eval_time_remaining');
  }

  // license_bound - computed: true, optional: false, required: false
  public get licenseBound() {
    return this.getNumberAttribute('license_bound');
  }

  // license_description - computed: true, optional: false, required: false
  public get licenseDescription() {
    return this.getStringAttribute('license_description');
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getNumberAttribute('license_status');
  }

  // license_type - computed: true, optional: false, required: false
  private _licenseType = new DataOmeDeviceDevicesDetailedInventoryLicensesLicenseTypeOutputReference(this, "license_type");
  public get licenseType() {
    return this._licenseType;
  }

  // sold_date - computed: true, optional: false, required: false
  public get soldDate() {
    return this.getStringAttribute('sold_date');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryLicensesOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryLocations {
}

export function dataOmeDeviceDevicesDetailedInventoryLocationsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryLocationsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aisle - computed: true, optional: false, required: false
  public get aisle() {
    return this.getStringAttribute('aisle');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // management_system_unit - computed: true, optional: false, required: false
  public get managementSystemUnit() {
    return this.getNumberAttribute('management_system_unit');
  }

  // rack - computed: true, optional: false, required: false
  public get rack() {
    return this.getStringAttribute('rack');
  }

  // rackslot - computed: true, optional: false, required: false
  public get rackslot() {
    return this.getStringAttribute('rackslot');
  }

  // room - computed: true, optional: false, required: false
  public get room() {
    return this.getStringAttribute('room');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryLocationsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgents {
}

export function dataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_name - computed: true, optional: false, required: false
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }

  // has_creds - computed: true, optional: false, required: false
  public get hasCreds() {
    return this.getNumberAttribute('has_creds');
  }

  // management_profile_id - computed: true, optional: false, required: false
  public get managementProfileId() {
    return this.getNumberAttribute('management_profile_id');
  }

  // management_url - computed: true, optional: false, required: false
  public get managementUrl() {
    return this.getStringAttribute('management_url');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_date_time - computed: true, optional: false, required: false
  public get statusDateTime() {
    return this.getStringAttribute('status_date_time');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementType {
}

export function dataOmeDeviceDevicesDetailedInventoryManagementInfoManagementTypeToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryManagementInfoManagementTypeToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getNumberAttribute('management_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryManagementInfo {
}

export function dataOmeDeviceDevicesDetailedInventoryManagementInfoToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryManagementInfoToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryManagementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryManagementInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryManagementInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryManagementInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // end_point_agents - computed: true, optional: false, required: false
  private _endPointAgents = new DataOmeDeviceDevicesDetailedInventoryManagementInfoEndPointAgentsList(this, "end_point_agents", false);
  public get endPointAgents() {
    return this._endPointAgents;
  }

  // instrumentation_name - computed: true, optional: false, required: false
  public get instrumentationName() {
    return this.getStringAttribute('instrumentation_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // management_id - computed: true, optional: false, required: false
  public get managementId() {
    return this.getNumberAttribute('management_id');
  }

  // management_type - computed: true, optional: false, required: false
  private _managementType = new DataOmeDeviceDevicesDetailedInventoryManagementInfoManagementTypeOutputReference(this, "management_type");
  public get managementType() {
    return this._managementType;
  }
}

export class DataOmeDeviceDevicesDetailedInventoryManagementInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryManagementInfoOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryManagementInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryMemory {
}

export function dataOmeDeviceDevicesDetailedInventoryMemoryToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryMemoryToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bank_name - computed: true, optional: false, required: false
  public get bankName() {
    return this.getStringAttribute('bank_name');
  }

  // current_operating_speed - computed: true, optional: false, required: false
  public get currentOperatingSpeed() {
    return this.getNumberAttribute('current_operating_speed');
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // manufacturer_date - computed: true, optional: false, required: false
  public get manufacturerDate() {
    return this.getStringAttribute('manufacturer_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getStringAttribute('rank');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getNumberAttribute('speed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // type_details - computed: true, optional: false, required: false
  public get typeDetails() {
    return this.getStringAttribute('type_details');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryMemoryList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryMemoryOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitions {
}

export function dataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_mac_address - computed: true, optional: false, required: false
  public get currentMacAddress() {
    return this.getStringAttribute('current_mac_address');
  }

  // fcoe_mode - computed: true, optional: false, required: false
  public get fcoeMode() {
    return this.getStringAttribute('fcoe_mode');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // iscsi_mode - computed: true, optional: false, required: false
  public get iscsiMode() {
    return this.getStringAttribute('iscsi_mode');
  }

  // max_bandwidth - computed: true, optional: false, required: false
  public get maxBandwidth() {
    return this.getNumberAttribute('max_bandwidth');
  }

  // min_bandwidth - computed: true, optional: false, required: false
  public get minBandwidth() {
    return this.getNumberAttribute('min_bandwidth');
  }

  // nic_mode - computed: true, optional: false, required: false
  public get nicMode() {
    return this.getStringAttribute('nic_mode');
  }

  // permanent_fcoe_mac_address - computed: true, optional: false, required: false
  public get permanentFcoeMacAddress() {
    return this.getStringAttribute('permanent_fcoe_mac_address');
  }

  // permanent_iscsi_mac_address - computed: true, optional: false, required: false
  public get permanentIscsiMacAddress() {
    return this.getStringAttribute('permanent_iscsi_mac_address');
  }

  // permanent_mac_address - computed: true, optional: false, required: false
  public get permanentMacAddress() {
    return this.getStringAttribute('permanent_mac_address');
  }

  // virtual_mac_address - computed: true, optional: false, required: false
  public get virtualMacAddress() {
    return this.getStringAttribute('virtual_mac_address');
  }

  // virtual_wwn - computed: true, optional: false, required: false
  public get virtualWwn() {
    return this.getStringAttribute('virtual_wwn');
  }

  // virtual_wwpn - computed: true, optional: false, required: false
  public get virtualWwpn() {
    return this.getStringAttribute('virtual_wwpn');
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // wwpn - computed: true, optional: false, required: false
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryNicsPorts {
}

export function dataOmeDeviceDevicesDetailedInventoryNicsPortsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNicsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryNicsPortsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNicsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryNicsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryNicsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryNicsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_speed - computed: true, optional: false, required: false
  public get linkSpeed() {
    return this.getNumberAttribute('link_speed');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataOmeDeviceDevicesDetailedInventoryNicsPortsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryNicsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryNicsPortsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryNicsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryNics {
}

export function dataOmeDeviceDevicesDetailedInventoryNicsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryNicsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryNics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryNics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nic_id - computed: true, optional: false, required: false
  public get nicId() {
    return this.getStringAttribute('nic_id');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataOmeDeviceDevicesDetailedInventoryNicsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryNicsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryNicsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryOs {
}

export function dataOmeDeviceDevicesDetailedInventoryOsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryOsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryOsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryOs | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryOsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryOsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryOsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryPowerState {
}

export function dataOmeDeviceDevicesDetailedInventoryPowerStateToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryPowerStateToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryPowerState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryPowerStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryPowerState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryPowerState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getNumberAttribute('power_state');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryPowerStateList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryPowerStateOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryPowerStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryPowerSupply {
}

export function dataOmeDeviceDevicesDetailedInventoryPowerSupplyToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryPowerSupply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryPowerSupplyToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryPowerSupply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryPowerSupplyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryPowerSupply | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryPowerSupply | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ac_input - computed: true, optional: false, required: false
  public get acInput() {
    return this.getBooleanAttribute('ac_input');
  }

  // ac_output - computed: true, optional: false, required: false
  public get acOutput() {
    return this.getBooleanAttribute('ac_output');
  }

  // active_input_voltage - computed: true, optional: false, required: false
  public get activeInputVoltage() {
    return this.getStringAttribute('active_input_voltage');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // input_power_units - computed: true, optional: false, required: false
  public get inputPowerUnits() {
    return this.getStringAttribute('input_power_units');
  }

  // input_voltage - computed: true, optional: false, required: false
  public get inputVoltage() {
    return this.getNumberAttribute('input_voltage');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // output_watts - computed: true, optional: false, required: false
  public get outputWatts() {
    return this.getNumberAttribute('output_watts');
  }

  // power_supply_type - computed: true, optional: false, required: false
  public get powerSupplyType() {
    return this.getNumberAttribute('power_supply_type');
  }

  // range1_max_input_power_watts - computed: true, optional: false, required: false
  public get range1MaxInputPowerWatts() {
    return this.getNumberAttribute('range1_max_input_power_watts');
  }

  // range1_max_input_voltage_high_milli_volts - computed: true, optional: false, required: false
  public get range1MaxInputVoltageHighMilliVolts() {
    return this.getNumberAttribute('range1_max_input_voltage_high_milli_volts');
  }

  // rated_max_output_power - computed: true, optional: false, required: false
  public get ratedMaxOutputPower() {
    return this.getNumberAttribute('rated_max_output_power');
  }

  // redundancy_state - computed: true, optional: false, required: false
  public get redundancyState() {
    return this.getStringAttribute('redundancy_state');
  }

  // requested_state - computed: true, optional: false, required: false
  public get requestedState() {
    return this.getNumberAttribute('requested_state');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // switching_supply - computed: true, optional: false, required: false
  public get switchingSupply() {
    return this.getBooleanAttribute('switching_supply');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryPowerSupplyList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryPowerSupplyOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryPowerSupplyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisks {
}

export function dataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_policy - computed: true, optional: false, required: false
  public get cachePolicy() {
    return this.getStringAttribute('cache_policy');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // layout - computed: true, optional: false, required: false
  public get layout() {
    return this.getStringAttribute('layout');
  }

  // lock_status - computed: true, optional: false, required: false
  public get lockStatus() {
    return this.getStringAttribute('lock_status');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // raid_controller_id - computed: true, optional: false, required: false
  public get raidControllerId() {
    return this.getNumberAttribute('raid_controller_id');
  }

  // read_policy - computed: true, optional: false, required: false
  public get readPolicy() {
    return this.getStringAttribute('read_policy');
  }

  // rollup_status - computed: true, optional: false, required: false
  public get rollupStatus() {
    return this.getNumberAttribute('rollup_status');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // stripe_size - computed: true, optional: false, required: false
  public get stripeSize() {
    return this.getStringAttribute('stripe_size');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getNumberAttribute('target_id');
  }

  // write_policy - computed: true, optional: false, required: false
  public get writePolicy() {
    return this.getStringAttribute('write_policy');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryRaidControllers {
}

export function dataOmeDeviceDevicesDetailedInventoryRaidControllersToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryRaidControllersToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryRaidControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryRaidControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryRaidControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_size_in_mb - computed: true, optional: false, required: false
  public get cacheSizeInMb() {
    return this.getNumberAttribute('cache_size_in_mb');
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // driver_version - computed: true, optional: false, required: false
  public get driverVersion() {
    return this.getStringAttribute('driver_version');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pci_slot - computed: true, optional: false, required: false
  public get pciSlot() {
    return this.getStringAttribute('pci_slot');
  }

  // rollup_status - computed: true, optional: false, required: false
  public get rollupStatus() {
    return this.getNumberAttribute('rollup_status');
  }

  // rollup_status_string - computed: true, optional: false, required: false
  public get rollupStatusString() {
    return this.getStringAttribute('rollup_status_string');
  }

  // server_virtual_disks - computed: true, optional: false, required: false
  private _serverVirtualDisks = new DataOmeDeviceDevicesDetailedInventoryRaidControllersServerVirtualDisksList(this, "server_virtual_disks", false);
  public get serverVirtualDisks() {
    return this._serverVirtualDisks;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_type - computed: true, optional: false, required: false
  public get statusType() {
    return this.getStringAttribute('status_type');
  }

  // storage_assignment_allowed - computed: true, optional: false, required: false
  public get storageAssignmentAllowed() {
    return this.getStringAttribute('storage_assignment_allowed');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryRaidControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryRaidControllersOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryRaidControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryServerDeviceCards {
}

export function dataOmeDeviceDevicesDetailedInventoryServerDeviceCardsToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryServerDeviceCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryServerDeviceCardsToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryServerDeviceCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryServerDeviceCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryServerDeviceCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryServerDeviceCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // databus_width - computed: true, optional: false, required: false
  public get databusWidth() {
    return this.getStringAttribute('databus_width');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // slot_length - computed: true, optional: false, required: false
  public get slotLength() {
    return this.getStringAttribute('slot_length');
  }

  // slot_number - computed: true, optional: false, required: false
  public get slotNumber() {
    return this.getStringAttribute('slot_number');
  }

  // slot_type - computed: true, optional: false, required: false
  public get slotType() {
    return this.getStringAttribute('slot_type');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryServerDeviceCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryServerDeviceCardsOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryServerDeviceCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventorySoftwares {
}

export function dataOmeDeviceDevicesDetailedInventorySoftwaresToTerraform(struct?: DataOmeDeviceDevicesDetailedInventorySoftwares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventorySoftwaresToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventorySoftwares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventorySoftwaresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventorySoftwares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventorySoftwares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // installation_date - computed: true, optional: false, required: false
  public get installationDate() {
    return this.getStringAttribute('installation_date');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // pci_device_id - computed: true, optional: false, required: false
  public get pciDeviceId() {
    return this.getStringAttribute('pci_device_id');
  }

  // software_type - computed: true, optional: false, required: false
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceDevicesDetailedInventorySoftwaresList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventorySoftwaresOutputReference {
    return new DataOmeDeviceDevicesDetailedInventorySoftwaresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventoryStorageEnclosures {
}

export function dataOmeDeviceDevicesDetailedInventoryStorageEnclosuresToTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryStorageEnclosures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryStorageEnclosuresToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventoryStorageEnclosures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryStorageEnclosuresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventoryStorageEnclosures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventoryStorageEnclosures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backplane_part_num - computed: true, optional: false, required: false
  public get backplanePartNum() {
    return this.getStringAttribute('backplane_part_num');
  }

  // channel_number - computed: true, optional: false, required: false
  public get channelNumber() {
    return this.getStringAttribute('channel_number');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number_of_fan_packs - computed: true, optional: false, required: false
  public get numberOfFanPacks() {
    return this.getNumberAttribute('number_of_fan_packs');
  }

  // rollup_status - computed: true, optional: false, required: false
  public get rollupStatus() {
    return this.getNumberAttribute('rollup_status');
  }

  // slot_count - computed: true, optional: false, required: false
  public get slotCount() {
    return this.getNumberAttribute('slot_count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_type - computed: true, optional: false, required: false
  public get statusType() {
    return this.getStringAttribute('status_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceDevicesDetailedInventoryStorageEnclosuresList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventoryStorageEnclosuresOutputReference {
    return new DataOmeDeviceDevicesDetailedInventoryStorageEnclosuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatus {
}

export function dataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusToTerraform(struct?: DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subsystem_name - computed: true, optional: false, required: false
  public get subsystemName() {
    return this.getStringAttribute('subsystem_name');
  }
}

export class DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusOutputReference {
    return new DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDetailedInventory {
}

export function dataOmeDeviceDevicesDetailedInventoryToTerraform(struct?: DataOmeDeviceDevicesDetailedInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDetailedInventoryToHclTerraform(struct?: DataOmeDeviceDevicesDetailedInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDetailedInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceDevicesDetailedInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDetailedInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataOmeDeviceDevicesDetailedInventoryCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // cpus - computed: true, optional: false, required: false
  private _cpus = new DataOmeDeviceDevicesDetailedInventoryCpusList(this, "cpus", false);
  public get cpus() {
    return this._cpus;
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataOmeDeviceDevicesDetailedInventoryDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // fcis - computed: true, optional: false, required: false
  private _fcis = new DataOmeDeviceDevicesDetailedInventoryFcisList(this, "fcis", false);
  public get fcis() {
    return this._fcis;
  }

  // frus - computed: true, optional: false, required: false
  private _frus = new DataOmeDeviceDevicesDetailedInventoryFrusList(this, "frus", false);
  public get frus() {
    return this._frus;
  }

  // licenses - computed: true, optional: false, required: false
  private _licenses = new DataOmeDeviceDevicesDetailedInventoryLicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataOmeDeviceDevicesDetailedInventoryLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // management_info - computed: true, optional: false, required: false
  private _managementInfo = new DataOmeDeviceDevicesDetailedInventoryManagementInfoList(this, "management_info", false);
  public get managementInfo() {
    return this._managementInfo;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataOmeDeviceDevicesDetailedInventoryMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }

  // nics - computed: true, optional: false, required: false
  private _nics = new DataOmeDeviceDevicesDetailedInventoryNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }

  // os - computed: true, optional: false, required: false
  private _os = new DataOmeDeviceDevicesDetailedInventoryOsList(this, "os", false);
  public get os() {
    return this._os;
  }

  // power_state - computed: true, optional: false, required: false
  private _powerState = new DataOmeDeviceDevicesDetailedInventoryPowerStateList(this, "power_state", false);
  public get powerState() {
    return this._powerState;
  }

  // power_supply - computed: true, optional: false, required: false
  private _powerSupply = new DataOmeDeviceDevicesDetailedInventoryPowerSupplyList(this, "power_supply", false);
  public get powerSupply() {
    return this._powerSupply;
  }

  // raid_controllers - computed: true, optional: false, required: false
  private _raidControllers = new DataOmeDeviceDevicesDetailedInventoryRaidControllersList(this, "raid_controllers", false);
  public get raidControllers() {
    return this._raidControllers;
  }

  // server_device_cards - computed: true, optional: false, required: false
  private _serverDeviceCards = new DataOmeDeviceDevicesDetailedInventoryServerDeviceCardsList(this, "server_device_cards", false);
  public get serverDeviceCards() {
    return this._serverDeviceCards;
  }

  // softwares - computed: true, optional: false, required: false
  private _softwares = new DataOmeDeviceDevicesDetailedInventorySoftwaresList(this, "softwares", false);
  public get softwares() {
    return this._softwares;
  }

  // storage_enclosures - computed: true, optional: false, required: false
  private _storageEnclosures = new DataOmeDeviceDevicesDetailedInventoryStorageEnclosuresList(this, "storage_enclosures", false);
  public get storageEnclosures() {
    return this._storageEnclosures;
  }

  // subsytem_rollup_status - computed: true, optional: false, required: false
  private _subsytemRollupStatus = new DataOmeDeviceDevicesDetailedInventorySubsytemRollupStatusList(this, "subsytem_rollup_status", false);
  public get subsytemRollupStatus() {
    return this._subsytemRollupStatus;
  }
}
export interface DataOmeDeviceDevicesDeviceManagementManagementProfile {
}

export function dataOmeDeviceDevicesDeviceManagementManagementProfileToTerraform(struct?: DataOmeDeviceDevicesDeviceManagementManagementProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDeviceManagementManagementProfileToHclTerraform(struct?: DataOmeDeviceDevicesDeviceManagementManagementProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDeviceManagementManagementProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDeviceManagementManagementProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDeviceManagementManagementProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_name - computed: true, optional: false, required: false
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }

  // has_creds - computed: true, optional: false, required: false
  public get hasCreds() {
    return this.getNumberAttribute('has_creds');
  }

  // management_id - computed: true, optional: false, required: false
  public get managementId() {
    return this.getNumberAttribute('management_id');
  }

  // management_profile_id - computed: true, optional: false, required: false
  public get managementProfileId() {
    return this.getNumberAttribute('management_profile_id');
  }

  // management_url - computed: true, optional: false, required: false
  public get managementUrl() {
    return this.getStringAttribute('management_url');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_date_time - computed: true, optional: false, required: false
  public get statusDateTime() {
    return this.getStringAttribute('status_date_time');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOmeDeviceDevicesDeviceManagementManagementProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDeviceManagementManagementProfileOutputReference {
    return new DataOmeDeviceDevicesDeviceManagementManagementProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDeviceManagement {
}

export function dataOmeDeviceDevicesDeviceManagementToTerraform(struct?: DataOmeDeviceDevicesDeviceManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDeviceManagementToHclTerraform(struct?: DataOmeDeviceDevicesDeviceManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDeviceManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDeviceManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDeviceManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // instrumentation_name - computed: true, optional: false, required: false
  public get instrumentationName() {
    return this.getStringAttribute('instrumentation_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // management_id - computed: true, optional: false, required: false
  public get managementId() {
    return this.getNumberAttribute('management_id');
  }

  // management_profile - computed: true, optional: false, required: false
  private _managementProfile = new DataOmeDeviceDevicesDeviceManagementManagementProfileList(this, "management_profile", true);
  public get managementProfile() {
    return this._managementProfile;
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getNumberAttribute('management_type');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
}

export class DataOmeDeviceDevicesDeviceManagementList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDeviceManagementOutputReference {
    return new DataOmeDeviceDevicesDeviceManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesDiscoveryConfigurationJobInformation {
}

export function dataOmeDeviceDevicesDiscoveryConfigurationJobInformationToTerraform(struct?: DataOmeDeviceDevicesDiscoveryConfigurationJobInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesDiscoveryConfigurationJobInformationToHclTerraform(struct?: DataOmeDeviceDevicesDiscoveryConfigurationJobInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesDiscoveryConfigurationJobInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevicesDiscoveryConfigurationJobInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesDiscoveryConfigurationJobInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // discovery_job_name - computed: true, optional: false, required: false
  public get discoveryJobName() {
    return this.getStringAttribute('discovery_job_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}

export class DataOmeDeviceDevicesDiscoveryConfigurationJobInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesDiscoveryConfigurationJobInformationOutputReference {
    return new DataOmeDeviceDevicesDiscoveryConfigurationJobInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceDevicesSlotConfiguration {
}

export function dataOmeDeviceDevicesSlotConfigurationToTerraform(struct?: DataOmeDeviceDevicesSlotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesSlotConfigurationToHclTerraform(struct?: DataOmeDeviceDevicesSlotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesSlotConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceDevicesSlotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevicesSlotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chassis_name - computed: true, optional: false, required: false
  public get chassisName() {
    return this.getStringAttribute('chassis_name');
  }
}
export interface DataOmeDeviceDevices {
}

export function dataOmeDeviceDevicesToTerraform(struct?: DataOmeDeviceDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeDeviceDevicesToHclTerraform(struct?: DataOmeDeviceDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeDeviceDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeDeviceDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_tag - computed: true, optional: false, required: false
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }

  // chassis_ip - computed: true, optional: false, required: false
  public get chassisIp() {
    return this.getStringAttribute('chassis_ip');
  }

  // chassis_service_tag - computed: true, optional: false, required: false
  public get chassisServiceTag() {
    return this.getStringAttribute('chassis_service_tag');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getBooleanAttribute('connection_state');
  }

  // connection_state_reason - computed: true, optional: false, required: false
  public get connectionStateReason() {
    return this.getNumberAttribute('connection_state_reason');
  }

  // detailed_inventory - computed: true, optional: false, required: false
  private _detailedInventory = new DataOmeDeviceDevicesDetailedInventoryOutputReference(this, "detailed_inventory");
  public get detailedInventory() {
    return this._detailedInventory;
  }

  // device_capabilities - computed: true, optional: false, required: false
  public get deviceCapabilities() {
    return this.getNumberListAttribute('device_capabilities');
  }

  // device_management - computed: true, optional: false, required: false
  private _deviceManagement = new DataOmeDeviceDevicesDeviceManagementList(this, "device_management", false);
  public get deviceManagement() {
    return this._deviceManagement;
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_service_tag - computed: true, optional: false, required: false
  public get deviceServiceTag() {
    return this.getStringAttribute('device_service_tag');
  }

  // device_subscription - computed: true, optional: false, required: false
  public get deviceSubscription() {
    return this.getStringAttribute('device_subscription');
  }

  // discovery_configuration_job_information - computed: true, optional: false, required: false
  private _discoveryConfigurationJobInformation = new DataOmeDeviceDevicesDiscoveryConfigurationJobInformationList(this, "discovery_configuration_job_information", false);
  public get discoveryConfigurationJobInformation() {
    return this._discoveryConfigurationJobInformation;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_inventory_time - computed: true, optional: false, required: false
  public get lastInventoryTime() {
    return this.getStringAttribute('last_inventory_time');
  }

  // last_status_time - computed: true, optional: false, required: false
  public get lastStatusTime() {
    return this.getStringAttribute('last_status_time');
  }

  // managed_state - computed: true, optional: false, required: false
  public get managedState() {
    return this.getNumberAttribute('managed_state');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getNumberAttribute('power_state');
  }

  // slot_configuration - computed: true, optional: false, required: false
  private _slotConfiguration = new DataOmeDeviceDevicesSlotConfigurationOutputReference(this, "slot_configuration");
  public get slotConfiguration() {
    return this._slotConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getNumberAttribute('system_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataOmeDeviceDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeDeviceDevicesOutputReference {
    return new DataOmeDeviceDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeDeviceFilters {
  /**
  * Service tags of the devices to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#device_service_tags DataOmeDevice#device_service_tags}
  */
  readonly deviceServiceTags?: string[];
  /**
  * OData `$filter` compatible expression to be used for querying devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#filter_expression DataOmeDevice#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * IDs of the devices to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#ids DataOmeDevice#ids}
  */
  readonly ids?: number[];
  /**
  * IP expressions of the devices to fetch. Supported expressions are IPv4, IPv6, CIDRs and IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#ip_expressions DataOmeDevice#ip_expressions}
  */
  readonly ipExpressions?: string[];
}

export function dataOmeDeviceFiltersToTerraform(struct?: DataOmeDeviceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceServiceTags),
    filter_expression: cdktf.stringToTerraform(struct!.filterExpression),
    ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ids),
    ip_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipExpressions),
  }
}


export function dataOmeDeviceFiltersToHclTerraform(struct?: DataOmeDeviceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_service_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceServiceTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.filterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ip_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipExpressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOmeDeviceFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeDeviceFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceServiceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceServiceTags = this._deviceServiceTags;
    }
    if (this._filterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpression = this._filterExpression;
    }
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._ipExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpressions = this._ipExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeDeviceFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceServiceTags = undefined;
      this._filterExpression = undefined;
      this._ids = undefined;
      this._ipExpressions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceServiceTags = value.deviceServiceTags;
      this._filterExpression = value.filterExpression;
      this._ids = value.ids;
      this._ipExpressions = value.ipExpressions;
    }
  }

  // device_service_tags - computed: false, optional: true, required: false
  private _deviceServiceTags?: string[]; 
  public get deviceServiceTags() {
    return this.getListAttribute('device_service_tags');
  }
  public set deviceServiceTags(value: string[]) {
    this._deviceServiceTags = value;
  }
  public resetDeviceServiceTags() {
    this._deviceServiceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServiceTagsInput() {
    return this._deviceServiceTags;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return this.getNumberListAttribute('ids');
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // ip_expressions - computed: false, optional: true, required: false
  private _ipExpressions?: string[]; 
  public get ipExpressions() {
    return this.getListAttribute('ip_expressions');
  }
  public set ipExpressions(value: string[]) {
    this._ipExpressions = value;
  }
  public resetIpExpressions() {
    this._ipExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionsInput() {
    return this._ipExpressions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device ome_device}
*/
export class DataOmeDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeDevice to import
  * @param importFromId The id of the existing DataOmeDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/device ome_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_device',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters.internalValue = config.filters;
    this._inventoryTypes = config.inventoryTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices - computed: true, optional: false, required: false
  private _devices = new DataOmeDeviceDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataOmeDeviceFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataOmeDeviceFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inventory_types - computed: false, optional: true, required: false
  private _inventoryTypes?: string[]; 
  public get inventoryTypes() {
    return this.getListAttribute('inventory_types');
  }
  public set inventoryTypes(value: string[]) {
    this._inventoryTypes = value;
  }
  public resetInventoryTypes() {
    this._inventoryTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryTypesInput() {
    return this._inventoryTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: dataOmeDeviceFiltersToTerraform(this._filters.internalValue),
      inventory_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inventoryTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: dataOmeDeviceFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOmeDeviceFilters",
      },
      inventory_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inventoryTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
