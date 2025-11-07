// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterWirelessAccesspointConfigurationSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary#id DataDnacenterWirelessAccesspointConfigurationSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key query parameter. The ethernet MAC address of Access point
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary#key DataDnacenterWirelessAccesspointConfigurationSummary#key}
  */
  readonly key: string;
}
export interface DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKey {
}

export function dataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyToTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyToHclTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKey | undefined) {
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

  // long_type - computed: true, optional: false, required: false
  public get longType() {
    return this.getStringAttribute('long_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyOutputReference {
    return new DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKey {
}

export function dataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyToTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyToHclTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKey | undefined) {
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

  // long_type - computed: true, optional: false, required: false
  public get longType() {
    return this.getStringAttribute('long_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyOutputReference {
    return new DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtos {
}

export function dataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosToTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosToHclTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // antenna_angle - computed: true, optional: false, required: false
  public get antennaAngle() {
    return this.getNumberAttribute('antenna_angle');
  }

  // antenna_elev_angle - computed: true, optional: false, required: false
  public get antennaElevAngle() {
    return this.getNumberAttribute('antenna_elev_angle');
  }

  // antenna_gain - computed: true, optional: false, required: false
  public get antennaGain() {
    return this.getNumberAttribute('antenna_gain');
  }

  // antenna_pattern_name - computed: true, optional: false, required: false
  public get antennaPatternName() {
    return this.getStringAttribute('antenna_pattern_name');
  }

  // auth_entity_class - computed: true, optional: false, required: false
  public get authEntityClass() {
    return this.getStringAttribute('auth_entity_class');
  }

  // auth_entity_id - computed: true, optional: false, required: false
  public get authEntityId() {
    return this.getStringAttribute('auth_entity_id');
  }

  // change_log_list - computed: true, optional: false, required: false
  public get changeLogList() {
    return this.getStringAttribute('change_log_list');
  }

  // channel_assignment_mode - computed: true, optional: false, required: false
  public get channelAssignmentMode() {
    return this.getStringAttribute('channel_assignment_mode');
  }

  // channel_number - computed: true, optional: false, required: false
  public get channelNumber() {
    return this.getNumberAttribute('channel_number');
  }

  // channel_width - computed: true, optional: false, required: false
  public get channelWidth() {
    return this.getStringAttribute('channel_width');
  }

  // clean_air_si - computed: true, optional: false, required: false
  public get cleanAirSi() {
    return this.getStringAttribute('clean_air_si');
  }

  // creation_order_index - computed: true, optional: false, required: false
  public get creationOrderIndex() {
    return this.getNumberAttribute('creation_order_index');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // if_type - computed: true, optional: false, required: false
  public get ifType() {
    return this.getNumberAttribute('if_type');
  }

  // if_type_value - computed: true, optional: false, required: false
  public get ifTypeValue() {
    return this.getStringAttribute('if_type_value');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getStringAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_origin - computed: true, optional: false, required: false
  public get instanceOrigin() {
    return this.getStringAttribute('instance_origin');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getStringAttribute('instance_updated_on');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // internal_key - computed: true, optional: false, required: false
  private _internalKey = new DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosInternalKeyList(this, "internal_key", false);
  public get internalKey() {
    return this._internalKey;
  }

  // is_being_changed - computed: true, optional: false, required: false
  public get isBeingChanged() {
    return this.getStringAttribute('is_being_changed');
  }

  // lazy_loaded_entities - computed: true, optional: false, required: false
  public get lazyLoadedEntities() {
    return this.getStringAttribute('lazy_loaded_entities');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // ordered_list_oeassoc_name - computed: true, optional: false, required: false
  public get orderedListOeassocName() {
    return this.getStringAttribute('ordered_list_oeassoc_name');
  }

  // ordered_list_oeindex - computed: true, optional: false, required: false
  public get orderedListOeindex() {
    return this.getNumberAttribute('ordered_list_oeindex');
  }

  // power_assignment_mode - computed: true, optional: false, required: false
  public get powerAssignmentMode() {
    return this.getStringAttribute('power_assignment_mode');
  }

  // powerlevel - computed: true, optional: false, required: false
  public get powerlevel() {
    return this.getNumberAttribute('powerlevel');
  }

  // radio_band - computed: true, optional: false, required: false
  public get radioBand() {
    return this.getStringAttribute('radio_band');
  }

  // radio_role_assignment - computed: true, optional: false, required: false
  public get radioRoleAssignment() {
    return this.getStringAttribute('radio_role_assignment');
  }

  // slot_id - computed: true, optional: false, required: false
  public get slotId() {
    return this.getNumberAttribute('slot_id');
  }
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosOutputReference {
    return new DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessAccesspointConfigurationSummaryItem {
}

export function dataDnacenterWirelessAccesspointConfigurationSummaryItemToTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessAccesspointConfigurationSummaryItemToHclTerraform(struct?: DataDnacenterWirelessAccesspointConfigurationSummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessAccesspointConfigurationSummaryItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessAccesspointConfigurationSummaryItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // ap_height - computed: true, optional: false, required: false
  public get apHeight() {
    return this.getNumberAttribute('ap_height');
  }

  // ap_mode - computed: true, optional: false, required: false
  public get apMode() {
    return this.getStringAttribute('ap_mode');
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // auth_entity_class - computed: true, optional: false, required: false
  public get authEntityClass() {
    return this.getStringAttribute('auth_entity_class');
  }

  // auth_entity_id - computed: true, optional: false, required: false
  public get authEntityId() {
    return this.getStringAttribute('auth_entity_id');
  }

  // change_log_list - computed: true, optional: false, required: false
  public get changeLogList() {
    return this.getStringAttribute('change_log_list');
  }

  // creation_order_index - computed: true, optional: false, required: false
  public get creationOrderIndex() {
    return this.getNumberAttribute('creation_order_index');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // eth_mac - computed: true, optional: false, required: false
  public get ethMac() {
    return this.getStringAttribute('eth_mac');
  }

  // failover_priority - computed: true, optional: false, required: false
  public get failoverPriority() {
    return this.getStringAttribute('failover_priority');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getStringAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_origin - computed: true, optional: false, required: false
  public get instanceOrigin() {
    return this.getStringAttribute('instance_origin');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getStringAttribute('instance_updated_on');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // internal_key - computed: true, optional: false, required: false
  private _internalKey = new DataDnacenterWirelessAccesspointConfigurationSummaryItemInternalKeyList(this, "internal_key", false);
  public get internalKey() {
    return this._internalKey;
  }

  // is_being_changed - computed: true, optional: false, required: false
  public get isBeingChanged() {
    return this.getStringAttribute('is_being_changed');
  }

  // lazy_loaded_entities - computed: true, optional: false, required: false
  public get lazyLoadedEntities() {
    return this.getStringAttribute('lazy_loaded_entities');
  }

  // led_brightness_level - computed: true, optional: false, required: false
  public get ledBrightnessLevel() {
    return this.getNumberAttribute('led_brightness_level');
  }

  // led_status - computed: true, optional: false, required: false
  public get ledStatus() {
    return this.getStringAttribute('led_status');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mesh_dtos - computed: true, optional: false, required: false
  public get meshDtos() {
    return this.getListAttribute('mesh_dtos');
  }

  // ordered_list_oeassoc_name - computed: true, optional: false, required: false
  public get orderedListOeassocName() {
    return this.getStringAttribute('ordered_list_oeassoc_name');
  }

  // ordered_list_oeindex - computed: true, optional: false, required: false
  public get orderedListOeindex() {
    return this.getNumberAttribute('ordered_list_oeindex');
  }

  // primary_controller_name - computed: true, optional: false, required: false
  public get primaryControllerName() {
    return this.getStringAttribute('primary_controller_name');
  }

  // primary_ip_address - computed: true, optional: false, required: false
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }

  // radio_dtos - computed: true, optional: false, required: false
  private _radioDtos = new DataDnacenterWirelessAccesspointConfigurationSummaryItemRadioDtosList(this, "radio_dtos", false);
  public get radioDtos() {
    return this._radioDtos;
  }

  // secondary_controller_name - computed: true, optional: false, required: false
  public get secondaryControllerName() {
    return this.getStringAttribute('secondary_controller_name');
  }

  // secondary_ip_address - computed: true, optional: false, required: false
  public get secondaryIpAddress() {
    return this.getStringAttribute('secondary_ip_address');
  }

  // tertiary_controller_name - computed: true, optional: false, required: false
  public get tertiaryControllerName() {
    return this.getStringAttribute('tertiary_controller_name');
  }

  // tertiary_ip_address - computed: true, optional: false, required: false
  public get tertiaryIpAddress() {
    return this.getStringAttribute('tertiary_ip_address');
  }
}

export class DataDnacenterWirelessAccesspointConfigurationSummaryItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessAccesspointConfigurationSummaryItemOutputReference {
    return new DataDnacenterWirelessAccesspointConfigurationSummaryItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary dnacenter_wireless_accesspoint_configuration_summary}
*/
export class DataDnacenterWirelessAccesspointConfigurationSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_accesspoint_configuration_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterWirelessAccesspointConfigurationSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterWirelessAccesspointConfigurationSummary to import
  * @param importFromId The id of the existing DataDnacenterWirelessAccesspointConfigurationSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterWirelessAccesspointConfigurationSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_accesspoint_configuration_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_accesspoint_configuration_summary dnacenter_wireless_accesspoint_configuration_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterWirelessAccesspointConfigurationSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterWirelessAccesspointConfigurationSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_accesspoint_configuration_summary',
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
    this._id = config.id;
    this._key = config.key;
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
  private _item = new DataDnacenterWirelessAccesspointConfigurationSummaryItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
