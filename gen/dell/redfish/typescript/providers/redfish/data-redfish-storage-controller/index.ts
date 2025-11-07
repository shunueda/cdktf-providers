// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedfishStorageControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#redfish_server DataRedfishStorageController#redfish_server}
  */
  readonly redfishServer?: DataRedfishStorageControllerRedfishServer[] | cdktf.IResolvable;
  /**
  * storage_controller_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#storage_controller_filter DataRedfishStorageController#storage_controller_filter}
  */
  readonly storageControllerFilter?: DataRedfishStorageControllerStorageControllerFilter;
}
export interface DataRedfishStorageControllerStorageControllersAssembly {
}

export function dataRedfishStorageControllerStorageControllersAssemblyToTerraform(struct?: DataRedfishStorageControllerStorageControllersAssembly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersAssemblyToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersAssembly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersAssemblyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersAssembly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersAssembly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }
}
export interface DataRedfishStorageControllerStorageControllersCacheSummary {
}

export function dataRedfishStorageControllerStorageControllersCacheSummaryToTerraform(struct?: DataRedfishStorageControllerStorageControllersCacheSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersCacheSummaryToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersCacheSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersCacheSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersCacheSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersCacheSummary | undefined) {
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
export interface DataRedfishStorageControllerStorageControllersControllerRates {
}

export function dataRedfishStorageControllerStorageControllersControllerRatesToTerraform(struct?: DataRedfishStorageControllerStorageControllersControllerRates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersControllerRatesToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersControllerRates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersControllerRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersControllerRates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersControllerRates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consistency_check_rate_percent - computed: true, optional: false, required: false
  public get consistencyCheckRatePercent() {
    return this.getNumberAttribute('consistency_check_rate_percent');
  }

  // rebuild_rate_percent - computed: true, optional: false, required: false
  public get rebuildRatePercent() {
    return this.getNumberAttribute('rebuild_rate_percent');
  }
}
export interface DataRedfishStorageControllerStorageControllersIdentifiers {
}

export function dataRedfishStorageControllerStorageControllersIdentifiersToTerraform(struct?: DataRedfishStorageControllerStorageControllersIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersIdentifiersToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerStorageControllersIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // durable_name - computed: true, optional: false, required: false
  public get durableName() {
    return this.getStringAttribute('durable_name');
  }

  // durable_name_format - computed: true, optional: false, required: false
  public get durableNameFormat() {
    return this.getStringAttribute('durable_name_format');
  }
}

export class DataRedfishStorageControllerStorageControllersIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishStorageControllerStorageControllersIdentifiersOutputReference {
    return new DataRedfishStorageControllerStorageControllersIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerStorageControllersLinksPcieFunctions {
}

export function dataRedfishStorageControllerStorageControllersLinksPcieFunctionsToTerraform(struct?: DataRedfishStorageControllerStorageControllersLinksPcieFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersLinksPcieFunctionsToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersLinksPcieFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersLinksPcieFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerStorageControllersLinksPcieFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersLinksPcieFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }
}

export class DataRedfishStorageControllerStorageControllersLinksPcieFunctionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishStorageControllerStorageControllersLinksPcieFunctionsOutputReference {
    return new DataRedfishStorageControllerStorageControllersLinksPcieFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerStorageControllersLinks {
}

export function dataRedfishStorageControllerStorageControllersLinksToTerraform(struct?: DataRedfishStorageControllerStorageControllersLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersLinksToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pcie_functions - computed: true, optional: false, required: false
  private _pcieFunctions = new DataRedfishStorageControllerStorageControllersLinksPcieFunctionsList(this, "pcie_functions", false);
  public get pcieFunctions() {
    return this._pcieFunctions;
  }
}
export interface DataRedfishStorageControllerStorageControllersOemDellDellStorageController {
}

export function dataRedfishStorageControllerStorageControllersOemDellDellStorageControllerToTerraform(struct?: DataRedfishStorageControllerStorageControllersOemDellDellStorageController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersOemDellDellStorageControllerToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersOemDellDellStorageController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersOemDellDellStorageControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersOemDellDellStorageController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersOemDellDellStorageController | undefined) {
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

  // background_initialization_rate_percent - computed: true, optional: false, required: false
  public get backgroundInitializationRatePercent() {
    return this.getNumberAttribute('background_initialization_rate_percent');
  }

  // battery_learn_mode - computed: true, optional: false, required: false
  public get batteryLearnMode() {
    return this.getStringAttribute('battery_learn_mode');
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

  // check_consistency_mode - computed: true, optional: false, required: false
  public get checkConsistencyMode() {
    return this.getStringAttribute('check_consistency_mode');
  }

  // connector_count - computed: true, optional: false, required: false
  public get connectorCount() {
    return this.getNumberAttribute('connector_count');
  }

  // controller_boot_mode - computed: true, optional: false, required: false
  public get controllerBootMode() {
    return this.getStringAttribute('controller_boot_mode');
  }

  // controller_firmware_version - computed: true, optional: false, required: false
  public get controllerFirmwareVersion() {
    return this.getStringAttribute('controller_firmware_version');
  }

  // controller_mode - computed: true, optional: false, required: false
  public get controllerMode() {
    return this.getStringAttribute('controller_mode');
  }

  // copyback_mode - computed: true, optional: false, required: false
  public get copybackMode() {
    return this.getStringAttribute('copyback_mode');
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

  // enhanced_auto_import_foreign_configuration_mode - computed: true, optional: false, required: false
  public get enhancedAutoImportForeignConfigurationMode() {
    return this.getStringAttribute('enhanced_auto_import_foreign_configuration_mode');
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

  // load_balance_mode - computed: true, optional: false, required: false
  public get loadBalanceMode() {
    return this.getStringAttribute('load_balance_mode');
  }

  // max_available_pci_link_speed - computed: true, optional: false, required: false
  public get maxAvailablePciLinkSpeed() {
    return this.getStringAttribute('max_available_pci_link_speed');
  }

  // max_drives_in_span_count - computed: true, optional: false, required: false
  public get maxDrivesInSpanCount() {
    return this.getNumberAttribute('max_drives_in_span_count');
  }

  // max_possible_pci_link_speed - computed: true, optional: false, required: false
  public get maxPossiblePciLinkSpeed() {
    return this.getStringAttribute('max_possible_pci_link_speed');
  }

  // max_spans_in_volume_count - computed: true, optional: false, required: false
  public get maxSpansInVolumeCount() {
    return this.getNumberAttribute('max_spans_in_volume_count');
  }

  // max_supported_volumes_count - computed: true, optional: false, required: false
  public get maxSupportedVolumesCount() {
    return this.getNumberAttribute('max_supported_volumes_count');
  }

  // patrol_read_iterations_count - computed: true, optional: false, required: false
  public get patrolReadIterationsCount() {
    return this.getNumberAttribute('patrol_read_iterations_count');
  }

  // patrol_read_mode - computed: true, optional: false, required: false
  public get patrolReadMode() {
    return this.getStringAttribute('patrol_read_mode');
  }

  // patrol_read_rate_percent - computed: true, optional: false, required: false
  public get patrolReadRatePercent() {
    return this.getNumberAttribute('patrol_read_rate_percent');
  }

  // patrol_read_state - computed: true, optional: false, required: false
  public get patrolReadState() {
    return this.getStringAttribute('patrol_read_state');
  }

  // patrol_read_unconfigured_area_mode - computed: true, optional: false, required: false
  public get patrolReadUnconfiguredAreaMode() {
    return this.getStringAttribute('patrol_read_unconfigured_area_mode');
  }

  // pci_slot - computed: true, optional: false, required: false
  public get pciSlot() {
    return this.getStringAttribute('pci_slot');
  }

  // persistent_hotspare - computed: true, optional: false, required: false
  public get persistentHotspare() {
    return this.getStringAttribute('persistent_hotspare');
  }

  // persistent_hotspare_mode - computed: true, optional: false, required: false
  public get persistentHotspareMode() {
    return this.getStringAttribute('persistent_hotspare_mode');
  }

  // raid_mode - computed: true, optional: false, required: false
  public get raidMode() {
    return this.getStringAttribute('raid_mode');
  }

  // real_time_capability - computed: true, optional: false, required: false
  public get realTimeCapability() {
    return this.getStringAttribute('real_time_capability');
  }

  // reconstruct_rate_percent - computed: true, optional: false, required: false
  public get reconstructRatePercent() {
    return this.getNumberAttribute('reconstruct_rate_percent');
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

  // spindown_idle_time_seconds - computed: true, optional: false, required: false
  public get spindownIdleTimeSeconds() {
    return this.getNumberAttribute('spindown_idle_time_seconds');
  }

  // support_controller_boot_mode - computed: true, optional: false, required: false
  public get supportControllerBootMode() {
    return this.getStringAttribute('support_controller_boot_mode');
  }

  // support_enhanced_auto_foreign_import - computed: true, optional: false, required: false
  public get supportEnhancedAutoForeignImport() {
    return this.getStringAttribute('support_enhanced_auto_foreign_import');
  }

  // support_raid10_uneven_spans - computed: true, optional: false, required: false
  public get supportRaid10UnevenSpans() {
    return this.getStringAttribute('support_raid10_uneven_spans');
  }

  // supported_initialization_types - computed: true, optional: false, required: false
  public get supportedInitializationTypes() {
    return this.getListAttribute('supported_initialization_types');
  }

  // supports_lkm_to_sekm_transition - computed: true, optional: false, required: false
  public get supportsLkmToSekmTransition() {
    return this.getStringAttribute('supports_lkm_to_sekm_transition');
  }

  // t10_pi_capability - computed: true, optional: false, required: false
  public get t10PiCapability() {
    return this.getStringAttribute('t10_pi_capability');
  }
}
export interface DataRedfishStorageControllerStorageControllersOemDell {
}

export function dataRedfishStorageControllerStorageControllersOemDellToTerraform(struct?: DataRedfishStorageControllerStorageControllersOemDell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersOemDellToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersOemDell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersOemDellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersOemDell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersOemDell | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell_storage_controller - computed: true, optional: false, required: false
  private _dellStorageController = new DataRedfishStorageControllerStorageControllersOemDellDellStorageControllerOutputReference(this, "dell_storage_controller");
  public get dellStorageController() {
    return this._dellStorageController;
  }
}
export interface DataRedfishStorageControllerStorageControllersOem {
}

export function dataRedfishStorageControllerStorageControllersOemToTerraform(struct?: DataRedfishStorageControllerStorageControllersOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersOemToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersOemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersOem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersOem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell - computed: true, optional: false, required: false
  private _dell = new DataRedfishStorageControllerStorageControllersOemDellOutputReference(this, "dell");
  public get dell() {
    return this._dell;
  }
}
export interface DataRedfishStorageControllerStorageControllersStatus {
}

export function dataRedfishStorageControllerStorageControllersStatusToTerraform(struct?: DataRedfishStorageControllerStorageControllersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersStatusToHclTerraform(struct?: DataRedfishStorageControllerStorageControllersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllersStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllersStatus | undefined) {
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
export interface DataRedfishStorageControllerStorageControllers {
}

export function dataRedfishStorageControllerStorageControllersToTerraform(struct?: DataRedfishStorageControllerStorageControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishStorageControllerStorageControllersToHclTerraform(struct?: DataRedfishStorageControllerStorageControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishStorageControllerStorageControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerStorageControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assembly - computed: true, optional: false, required: false
  private _assembly = new DataRedfishStorageControllerStorageControllersAssemblyOutputReference(this, "assembly");
  public get assembly() {
    return this._assembly;
  }

  // cache_summary - computed: true, optional: false, required: false
  private _cacheSummary = new DataRedfishStorageControllerStorageControllersCacheSummaryOutputReference(this, "cache_summary");
  public get cacheSummary() {
    return this._cacheSummary;
  }

  // controller_rates - computed: true, optional: false, required: false
  private _controllerRates = new DataRedfishStorageControllerStorageControllersControllerRatesOutputReference(this, "controller_rates");
  public get controllerRates() {
    return this._controllerRates;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifiers - computed: true, optional: false, required: false
  private _identifiers = new DataRedfishStorageControllerStorageControllersIdentifiersList(this, "identifiers", false);
  public get identifiers() {
    return this._identifiers;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataRedfishStorageControllerStorageControllersLinksOutputReference(this, "links");
  public get links() {
    return this._links;
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

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // oem - computed: true, optional: false, required: false
  private _oem = new DataRedfishStorageControllerStorageControllersOemOutputReference(this, "oem");
  public get oem() {
    return this._oem;
  }

  // speed_gbps - computed: true, optional: false, required: false
  public get speedGbps() {
    return this.getNumberAttribute('speed_gbps');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishStorageControllerStorageControllersStatusOutputReference(this, "status");
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

export class DataRedfishStorageControllerStorageControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishStorageControllerStorageControllersOutputReference {
    return new DataRedfishStorageControllerStorageControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#endpoint DataRedfishStorageController#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#password DataRedfishStorageController#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#redfish_alias DataRedfishStorageController#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#ssl_insecure DataRedfishStorageController#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#user DataRedfishStorageController#user}
  */
  readonly user?: string;
}

export function dataRedfishStorageControllerRedfishServerToTerraform(struct?: DataRedfishStorageControllerRedfishServer | cdktf.IResolvable): any {
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


export function dataRedfishStorageControllerRedfishServerToHclTerraform(struct?: DataRedfishStorageControllerRedfishServer | cdktf.IResolvable): any {
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

export class DataRedfishStorageControllerRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerRedfishServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRedfishStorageControllerRedfishServer | cdktf.IResolvable | undefined) {
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

export class DataRedfishStorageControllerRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DataRedfishStorageControllerRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishStorageControllerRedfishServerOutputReference {
    return new DataRedfishStorageControllerRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerStorageControllerFilterSystemsStorages {
  /**
  * Filter for storage controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#controller_ids DataRedfishStorageController#controller_ids}
  */
  readonly controllerIds?: string[];
  /**
  * Filter for storages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#storage_id DataRedfishStorageController#storage_id}
  */
  readonly storageId: string;
}

export function dataRedfishStorageControllerStorageControllerFilterSystemsStoragesToTerraform(struct?: DataRedfishStorageControllerStorageControllerFilterSystemsStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controllerIds),
    storage_id: cdktf.stringToTerraform(struct!.storageId),
  }
}


export function dataRedfishStorageControllerStorageControllerFilterSystemsStoragesToHclTerraform(struct?: DataRedfishStorageControllerStorageControllerFilterSystemsStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controllerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishStorageControllerStorageControllerFilterSystemsStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerStorageControllerFilterSystemsStorages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerIds = this._controllerIds;
    }
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllerFilterSystemsStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerIds = undefined;
      this._storageId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerIds = value.controllerIds;
      this._storageId = value.storageId;
    }
  }

  // controller_ids - computed: false, optional: true, required: false
  private _controllerIds?: string[]; 
  public get controllerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('controller_ids'));
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

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }
}

export class DataRedfishStorageControllerStorageControllerFilterSystemsStoragesList extends cdktf.ComplexList {
  public internalValue? : DataRedfishStorageControllerStorageControllerFilterSystemsStorages[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishStorageControllerStorageControllerFilterSystemsStoragesOutputReference {
    return new DataRedfishStorageControllerStorageControllerFilterSystemsStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerStorageControllerFilterSystems {
  /**
  * Filter for storages and storage controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#storages DataRedfishStorageController#storages}
  */
  readonly storages?: DataRedfishStorageControllerStorageControllerFilterSystemsStorages[] | cdktf.IResolvable;
  /**
  * Filter for systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#system_id DataRedfishStorageController#system_id}
  */
  readonly systemId: string;
}

export function dataRedfishStorageControllerStorageControllerFilterSystemsToTerraform(struct?: DataRedfishStorageControllerStorageControllerFilterSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storages: cdktf.listMapper(dataRedfishStorageControllerStorageControllerFilterSystemsStoragesToTerraform, false)(struct!.storages),
    system_id: cdktf.stringToTerraform(struct!.systemId),
  }
}


export function dataRedfishStorageControllerStorageControllerFilterSystemsToHclTerraform(struct?: DataRedfishStorageControllerStorageControllerFilterSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storages: {
      value: cdktf.listMapperHcl(dataRedfishStorageControllerStorageControllerFilterSystemsStoragesToHclTerraform, false)(struct!.storages),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedfishStorageControllerStorageControllerFilterSystemsStoragesList",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishStorageControllerStorageControllerFilterSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishStorageControllerStorageControllerFilterSystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storages = this._storages?.internalValue;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllerFilterSystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storages.internalValue = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storages.internalValue = value.storages;
      this._systemId = value.systemId;
    }
  }

  // storages - computed: false, optional: true, required: false
  private _storages = new DataRedfishStorageControllerStorageControllerFilterSystemsStoragesList(this, "storages", false);
  public get storages() {
    return this._storages;
  }
  public putStorages(value: DataRedfishStorageControllerStorageControllerFilterSystemsStorages[] | cdktf.IResolvable) {
    this._storages.internalValue = value;
  }
  public resetStorages() {
    this._storages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagesInput() {
    return this._storages.internalValue;
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

export class DataRedfishStorageControllerStorageControllerFilterSystemsList extends cdktf.ComplexList {
  public internalValue? : DataRedfishStorageControllerStorageControllerFilterSystems[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishStorageControllerStorageControllerFilterSystemsOutputReference {
    return new DataRedfishStorageControllerStorageControllerFilterSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishStorageControllerStorageControllerFilter {
  /**
  * Filter for systems, storages and storage controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#systems DataRedfishStorageController#systems}
  */
  readonly systems?: DataRedfishStorageControllerStorageControllerFilterSystems[] | cdktf.IResolvable;
}

export function dataRedfishStorageControllerStorageControllerFilterToTerraform(struct?: DataRedfishStorageControllerStorageControllerFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    systems: cdktf.listMapper(dataRedfishStorageControllerStorageControllerFilterSystemsToTerraform, false)(struct!.systems),
  }
}


export function dataRedfishStorageControllerStorageControllerFilterToHclTerraform(struct?: DataRedfishStorageControllerStorageControllerFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    systems: {
      value: cdktf.listMapperHcl(dataRedfishStorageControllerStorageControllerFilterSystemsToHclTerraform, false)(struct!.systems),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedfishStorageControllerStorageControllerFilterSystemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishStorageControllerStorageControllerFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishStorageControllerStorageControllerFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systems = this._systems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishStorageControllerStorageControllerFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systems.internalValue = value.systems;
    }
  }

  // systems - computed: false, optional: true, required: false
  private _systems = new DataRedfishStorageControllerStorageControllerFilterSystemsList(this, "systems", false);
  public get systems() {
    return this._systems;
  }
  public putSystems(value: DataRedfishStorageControllerStorageControllerFilterSystems[] | cdktf.IResolvable) {
    this._systems.internalValue = value;
  }
  public resetSystems() {
    this._systems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemsInput() {
    return this._systems.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller redfish_storage_controller}
*/
export class DataRedfishStorageController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_storage_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedfishStorageController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedfishStorageController to import
  * @param importFromId The id of the existing DataRedfishStorageController that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedfishStorageController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_storage_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/storage_controller redfish_storage_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedfishStorageControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRedfishStorageControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_storage_controller',
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
    this._redfishServer.internalValue = config.redfishServer;
    this._storageControllerFilter.internalValue = config.storageControllerFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_controllers - computed: true, optional: false, required: false
  private _storageControllers = new DataRedfishStorageControllerStorageControllersList(this, "storage_controllers", false);
  public get storageControllers() {
    return this._storageControllers;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DataRedfishStorageControllerRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DataRedfishStorageControllerRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // storage_controller_filter - computed: false, optional: true, required: false
  private _storageControllerFilter = new DataRedfishStorageControllerStorageControllerFilterOutputReference(this, "storage_controller_filter");
  public get storageControllerFilter() {
    return this._storageControllerFilter;
  }
  public putStorageControllerFilter(value: DataRedfishStorageControllerStorageControllerFilter) {
    this._storageControllerFilter.internalValue = value;
  }
  public resetStorageControllerFilter() {
    this._storageControllerFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllerFilterInput() {
    return this._storageControllerFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      redfish_server: cdktf.listMapper(dataRedfishStorageControllerRedfishServerToTerraform, true)(this._redfishServer.internalValue),
      storage_controller_filter: dataRedfishStorageControllerStorageControllerFilterToTerraform(this._storageControllerFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      redfish_server: {
        value: cdktf.listMapperHcl(dataRedfishStorageControllerRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedfishStorageControllerRedfishServerList",
      },
      storage_controller_filter: {
        value: dataRedfishStorageControllerStorageControllerFilterToHclTerraform(this._storageControllerFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRedfishStorageControllerStorageControllerFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
