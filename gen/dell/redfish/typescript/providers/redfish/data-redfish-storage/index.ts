// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedfishStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IDs of the storage controllers to be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#controller_ids DataRedfishStorage#controller_ids}
  */
  readonly controllerIds?: string[];
  /**
  * List of names of the storage controller to be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#controller_names DataRedfishStorage#controller_names}
  */
  readonly controllerNames?: string[];
  /**
  * System ID of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#system_id DataRedfishStorage#system_id}
  */
  readonly systemId?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#redfish_server DataRedfishStorage#redfish_server}
  */
  readonly redfishServer?: DataRedfishStorageRedfishServer[] | cdktf.IResolvable;
}
export interface DataRedfishStorageStorageOemDellDellController {
}

export function dataRedfishStorageStorageOemDellDellControllerToTerraform(struct?: DataRedfishStorageStorageOemDellDellController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageOemDellDellControllerToHclTerraform(struct?: DataRedfishStorageStorageOemDellDellController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageOemDellDellControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageOemDellDellController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageOemDellDellController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_state - computed: true, optional: false, required: false
  public get alarmState() {
    return this.getStringAttribute('alarm_state');
  }

  // auto_config_behavior - computed: true, optional: false, required: false
  public get autoConfigBehavior() {
    return this.getStringAttribute('auto_config_behavior');
  }

  // boot_virtual_disk_fqdd - computed: true, optional: false, required: false
  public get bootVirtualDiskFqdd() {
    return this.getStringAttribute('boot_virtual_disk_fqdd');
  }

  // cache_size_in_mb - computed: true, optional: false, required: false
  public get cacheSizeInMb() {
    return this.getNumberAttribute('cache_size_in_mb');
  }

  // cachecade_capability - computed: true, optional: false, required: false
  public get cachecadeCapability() {
    return this.getStringAttribute('cachecade_capability');
  }

  // connector_count - computed: true, optional: false, required: false
  public get connectorCount() {
    return this.getNumberAttribute('connector_count');
  }

  // controller_description - computed: true, optional: false, required: false
  public get controllerDescription() {
    return this.getStringAttribute('controller_description');
  }

  // controller_firmware_version - computed: true, optional: false, required: false
  public get controllerFirmwareVersion() {
    return this.getStringAttribute('controller_firmware_version');
  }

  // controller_id - computed: true, optional: false, required: false
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }

  // controller_name - computed: true, optional: false, required: false
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }

  // current_controller_mode - computed: true, optional: false, required: false
  public get currentControllerMode() {
    return this.getStringAttribute('current_controller_mode');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // device_card_data_bus_width - computed: true, optional: false, required: false
  public get deviceCardDataBusWidth() {
    return this.getStringAttribute('device_card_data_bus_width');
  }

  // device_card_slot_length - computed: true, optional: false, required: false
  public get deviceCardSlotLength() {
    return this.getStringAttribute('device_card_slot_length');
  }

  // device_card_slot_type - computed: true, optional: false, required: false
  public get deviceCardSlotType() {
    return this.getStringAttribute('device_card_slot_type');
  }

  // driver_version - computed: true, optional: false, required: false
  public get driverVersion() {
    return this.getStringAttribute('driver_version');
  }

  // encryption_capability - computed: true, optional: false, required: false
  public get encryptionCapability() {
    return this.getStringAttribute('encryption_capability');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // last_system_inventory_time - computed: true, optional: false, required: false
  public get lastSystemInventoryTime() {
    return this.getStringAttribute('last_system_inventory_time');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // max_available_pci_link_speed - computed: true, optional: false, required: false
  public get maxAvailablePciLinkSpeed() {
    return this.getStringAttribute('max_available_pci_link_speed');
  }

  // max_possible_pci_link_speed - computed: true, optional: false, required: false
  public get maxPossiblePciLinkSpeed() {
    return this.getStringAttribute('max_possible_pci_link_speed');
  }

  // patrol_read_state - computed: true, optional: false, required: false
  public get patrolReadState() {
    return this.getStringAttribute('patrol_read_state');
  }

  // pci_slot - computed: true, optional: false, required: false
  public get pciSlot() {
    return this.getStringAttribute('pci_slot');
  }

  // persistent_hotspare - computed: true, optional: false, required: false
  public get persistentHotspare() {
    return this.getStringAttribute('persistent_hotspare');
  }

  // realtime_capability - computed: true, optional: false, required: false
  public get realtimeCapability() {
    return this.getStringAttribute('realtime_capability');
  }

  // rollup_status - computed: true, optional: false, required: false
  public get rollupStatus() {
    return this.getStringAttribute('rollup_status');
  }

  // sas_address - computed: true, optional: false, required: false
  public get sasAddress() {
    return this.getStringAttribute('sas_address');
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }

  // shared_slot_assignment_allowed - computed: true, optional: false, required: false
  public get sharedSlotAssignmentAllowed() {
    return this.getStringAttribute('shared_slot_assignment_allowed');
  }

  // sliced_vd_capability - computed: true, optional: false, required: false
  public get slicedVdCapability() {
    return this.getStringAttribute('sliced_vd_capability');
  }

  // support_controller_boot_mode - computed: true, optional: false, required: false
  public get supportControllerBootMode() {
    return this.getStringAttribute('support_controller_boot_mode');
  }

  // support_enhanced_auto_foreign_import - computed: true, optional: false, required: false
  public get supportEnhancedAutoForeignImport() {
    return this.getStringAttribute('support_enhanced_auto_foreign_import');
  }

  // support_raid_10_uneven_spans - computed: true, optional: false, required: false
  public get supportRaid10UnevenSpans() {
    return this.getStringAttribute('support_raid_10_uneven_spans');
  }

  // supports_lk_mto_sekm_transition - computed: true, optional: false, required: false
  public get supportsLkMtoSekmTransition() {
    return this.getStringAttribute('supports_lk_mto_sekm_transition');
  }

  // t_10_pi_capability - computed: true, optional: false, required: false
  public get t10PiCapability() {
    return this.getStringAttribute('t_10_pi_capability');
  }
}
export interface DataRedfishStorageStorageOemDellDellControllerBattery {
}

export function dataRedfishStorageStorageOemDellDellControllerBatteryToTerraform(struct?: DataRedfishStorageStorageOemDellDellControllerBattery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageOemDellDellControllerBatteryToHclTerraform(struct?: DataRedfishStorageStorageOemDellDellControllerBattery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageOemDellDellControllerBatteryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageOemDellDellControllerBattery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageOemDellDellControllerBattery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_battery_description - computed: true, optional: false, required: false
  public get controllerBatteryDescription() {
    return this.getStringAttribute('controller_battery_description');
  }

  // controller_battery_id - computed: true, optional: false, required: false
  public get controllerBatteryId() {
    return this.getStringAttribute('controller_battery_id');
  }

  // controller_battery_name - computed: true, optional: false, required: false
  public get controllerBatteryName() {
    return this.getStringAttribute('controller_battery_name');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // primary_status - computed: true, optional: false, required: false
  public get primaryStatus() {
    return this.getStringAttribute('primary_status');
  }

  // raid_state - computed: true, optional: false, required: false
  public get raidState() {
    return this.getStringAttribute('raid_state');
  }
}
export interface DataRedfishStorageStorageOemDell {
}

export function dataRedfishStorageStorageOemDellToTerraform(struct?: DataRedfishStorageStorageOemDell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageOemDellToHclTerraform(struct?: DataRedfishStorageStorageOemDell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageOemDellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageOemDell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageOemDell | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell_controller - computed: true, optional: false, required: false
  private _dellController = new DataRedfishStorageStorageOemDellDellControllerOutputReference(this, "dell_controller");
  public get dellController() {
    return this._dellController;
  }

  // dell_controller_battery - computed: true, optional: false, required: false
  private _dellControllerBattery = new DataRedfishStorageStorageOemDellDellControllerBatteryOutputReference(this, "dell_controller_battery");
  public get dellControllerBattery() {
    return this._dellControllerBattery;
  }
}
export interface DataRedfishStorageStorageOem {
}

export function dataRedfishStorageStorageOemToTerraform(struct?: DataRedfishStorageStorageOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageOemToHclTerraform(struct?: DataRedfishStorageStorageOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageOemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageOem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageOem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell - computed: true, optional: false, required: false
  private _dell = new DataRedfishStorageStorageOemDellOutputReference(this, "dell");
  public get dell() {
    return this._dell;
  }
}
export interface DataRedfishStorageStorageStatus {
}

export function dataRedfishStorageStorageStatusToTerraform(struct?: DataRedfishStorageStorageStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageStatusToHclTerraform(struct?: DataRedfishStorageStorageStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishStorageStorageStorageControllersCacheSummary {
}

export function dataRedfishStorageStorageStorageControllersCacheSummaryToTerraform(struct?: DataRedfishStorageStorageStorageControllersCacheSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageStorageControllersCacheSummaryToHclTerraform(struct?: DataRedfishStorageStorageStorageControllersCacheSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageStorageControllersCacheSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageStorageControllersCacheSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageStorageControllersCacheSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_cache_size_mi_b - computed: true, optional: false, required: false
  public get totalCacheSizeMiB() {
    return this.getNumberAttribute('total_cache_size_mi_b');
  }
}
export interface DataRedfishStorageStorageStorageControllersStatus {
}

export function dataRedfishStorageStorageStorageControllersStatusToTerraform(struct?: DataRedfishStorageStorageStorageControllersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageStorageControllersStatusToHclTerraform(struct?: DataRedfishStorageStorageStorageControllersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageStorageControllersStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageStorageStorageControllersStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageStorageControllersStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishStorageStorageStorageControllers {
}

export function dataRedfishStorageStorageStorageControllersToTerraform(struct?: DataRedfishStorageStorageStorageControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageStorageControllersToHclTerraform(struct?: DataRedfishStorageStorageStorageControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageStorageControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageStorageStorageControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorageStorageControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_summary - computed: true, optional: false, required: false
  private _cacheSummary = new DataRedfishStorageStorageStorageControllersCacheSummaryOutputReference(this, "cache_summary");
  public get cacheSummary() {
    return this._cacheSummary;
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
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

  // speed_gbps - computed: true, optional: false, required: false
  public get speedGbps() {
    return this.getNumberAttribute('speed_gbps');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishStorageStorageStorageControllersStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // supported_controller_protocols - computed: true, optional: false, required: false
  public get supportedControllerProtocols() {
    return this.getListAttribute('supported_controller_protocols');
  }

  // supported_device_protocols - computed: true, optional: false, required: false
  public get supportedDeviceProtocols() {
    return this.getListAttribute('supported_device_protocols');
  }

  // supported_raid_types - computed: true, optional: false, required: false
  public get supportedRaidTypes() {
    return this.getListAttribute('supported_raid_types');
  }
}

export class DataRedfishStorageStorageStorageControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishStorageStorageStorageControllersOutputReference {
    return new DataRedfishStorageStorageStorageControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageStorage {
}

export function dataRedfishStorageStorageToTerraform(struct?: DataRedfishStorageStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageStorageToHclTerraform(struct?: DataRedfishStorageStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageStorage | undefined) {
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

  // drive_ids - computed: true, optional: false, required: false
  public get driveIds() {
    return this.getListAttribute('drive_ids');
  }

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getListAttribute('drives');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oem - computed: true, optional: false, required: false
  private _oem = new DataRedfishStorageStorageOemOutputReference(this, "oem");
  public get oem() {
    return this._oem;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishStorageStorageStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // storage_controller_id - computed: true, optional: false, required: false
  public get storageControllerId() {
    return this.getStringAttribute('storage_controller_id');
  }

  // storage_controllers - computed: true, optional: false, required: false
  private _storageControllers = new DataRedfishStorageStorageStorageControllersList(this, "storage_controllers", false);
  public get storageControllers() {
    return this._storageControllers;
  }
}

export class DataRedfishStorageStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishStorageStorageOutputReference {
    return new DataRedfishStorageStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#endpoint DataRedfishStorage#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#password DataRedfishStorage#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#redfish_alias DataRedfishStorage#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#ssl_insecure DataRedfishStorage#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#user DataRedfishStorage#user}
  */
  readonly user?: string;
}

export function dataRedfishStorageRedfishServerToTerraform(struct?: DataRedfishStorageRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataRedfishStorageRedfishServerToHclTerraform(struct?: DataRedfishStorageRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishStorageRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class DataRedfishStorageRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DataRedfishStorageRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishStorageRedfishServerOutputReference {
    return new DataRedfishStorageRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage redfish_storage}
*/
export class DataRedfishStorage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedfishStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedfishStorage to import
  * @param importFromId The id of the existing DataRedfishStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedfishStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage redfish_storage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedfishStorageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRedfishStorageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_storage',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controllerIds = config.controllerIds;
    this._controllerNames = config.controllerNames;
    this._systemId = config.systemId;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_ids - computed: false, optional: true, required: false
  private _controllerIds?: string[]; 
  public get controllerIds() {
    return this.getListAttribute('controller_ids');
  }
  public set controllerIds(value: string[]) {
    this._controllerIds = value;
  }
  public resetControllerIds() {
    this._controllerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdsInput() {
    return this._controllerIds;
  }

  // controller_names - computed: false, optional: true, required: false
  private _controllerNames?: string[]; 
  public get controllerNames() {
    return this.getListAttribute('controller_names');
  }
  public set controllerNames(value: string[]) {
    this._controllerNames = value;
  }
  public resetControllerNames() {
    this._controllerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNamesInput() {
    return this._controllerNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataRedfishStorageStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DataRedfishStorageRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DataRedfishStorageRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      controller_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controllerIds),
      controller_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controllerNames),
      system_id: cdktf.stringToTerraform(this._systemId),
      redfish_server: cdktf.listMapper(dataRedfishStorageRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controllerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      controller_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controllerNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(dataRedfishStorageRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedfishStorageRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
