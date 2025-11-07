// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceStackDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceId path parameter. Device ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details#device_id DataDnacenterNetworkDeviceStackDetails#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details#id DataDnacenterNetworkDeviceStackDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterNetworkDeviceStackDetailsItemStackPortInfo {
}

export function dataDnacenterNetworkDeviceStackDetailsItemStackPortInfoToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemStackPortInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemStackPortInfoToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemStackPortInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemStackPortInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemStackPortInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemStackPortInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_synch_ok - computed: true, optional: false, required: false
  public get isSynchOk() {
    return this.getStringAttribute('is_synch_ok');
  }

  // link_active - computed: true, optional: false, required: false
  public get linkActive() {
    return this.getStringAttribute('link_active');
  }

  // link_ok - computed: true, optional: false, required: false
  public get linkOk() {
    return this.getStringAttribute('link_ok');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor_port - computed: true, optional: false, required: false
  public get neighborPort() {
    return this.getStringAttribute('neighbor_port');
  }

  // nr_link_ok_changes - computed: true, optional: false, required: false
  public get nrLinkOkChanges() {
    return this.getNumberAttribute('nr_link_ok_changes');
  }

  // stack_cable_length_info - computed: true, optional: false, required: false
  public get stackCableLengthInfo() {
    return this.getStringAttribute('stack_cable_length_info');
  }

  // stack_port_oper_status_info - computed: true, optional: false, required: false
  public get stackPortOperStatusInfo() {
    return this.getStringAttribute('stack_port_oper_status_info');
  }

  // switch_port - computed: true, optional: false, required: false
  public get switchPort() {
    return this.getStringAttribute('switch_port');
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemStackPortInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemStackPortInfoOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemStackPortInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfo {
}

export function dataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ent_physical_index - computed: true, optional: false, required: false
  public get entPhysicalIndex() {
    return this.getStringAttribute('ent_physical_index');
  }

  // hw_priority - computed: true, optional: false, required: false
  public get hwPriority() {
    return this.getNumberAttribute('hw_priority');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // num_next_reload - computed: true, optional: false, required: false
  public get numNextReload() {
    return this.getNumberAttribute('num_next_reload');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // stack_member_number - computed: true, optional: false, required: false
  public get stackMemberNumber() {
    return this.getNumberAttribute('stack_member_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // switch_priority - computed: true, optional: false, required: false
  public get switchPriority() {
    return this.getNumberAttribute('switch_priority');
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPorts {
}

export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // svl_protocol_status - computed: true, optional: false, required: false
  public get svlProtocolStatus() {
    return this.getStringAttribute('svl_protocol_status');
  }

  // sw_local_interface - computed: true, optional: false, required: false
  public get swLocalInterface() {
    return this.getStringAttribute('sw_local_interface');
  }

  // sw_remote_interface - computed: true, optional: false, required: false
  public get swRemoteInterface() {
    return this.getStringAttribute('sw_remote_interface');
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPoints {
}

export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // svl_member_end_point_ports - computed: true, optional: false, required: false
  private _svlMemberEndPointPorts = new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsSvlMemberEndPointPortsList(this, "svl_member_end_point_ports", false);
  public get svlMemberEndPointPorts() {
    return this._svlMemberEndPointPorts;
  }

  // svl_number - computed: true, optional: false, required: false
  public get svlNumber() {
    return this.getNumberAttribute('svl_number');
  }

  // svl_status - computed: true, optional: false, required: false
  public get svlStatus() {
    return this.getStringAttribute('svl_status');
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettings {
}

export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dad_enabled - computed: true, optional: false, required: false
  public get dadEnabled() {
    return this.getStringAttribute('dad_enabled');
  }

  // dad_interface_name - computed: true, optional: false, required: false
  public get dadInterfaceName() {
    return this.getStringAttribute('dad_interface_name');
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembers {
}

export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // svl_member_end_points - computed: true, optional: false, required: false
  private _svlMemberEndPoints = new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberEndPointsList(this, "svl_member_end_points", false);
  public get svlMemberEndPoints() {
    return this._svlMemberEndPoints;
  }

  // svl_member_number - computed: true, optional: false, required: false
  public get svlMemberNumber() {
    return this.getNumberAttribute('svl_member_number');
  }

  // svl_member_pep_settings - computed: true, optional: false, required: false
  private _svlMemberPepSettings = new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersSvlMemberPepSettingsList(this, "svl_member_pep_settings", false);
  public get svlMemberPepSettings() {
    return this._svlMemberPepSettings;
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfo {
}

export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dad_protocol - computed: true, optional: false, required: false
  public get dadProtocol() {
    return this.getStringAttribute('dad_protocol');
  }

  // dad_recovery_reload_enabled - computed: true, optional: false, required: false
  public get dadRecoveryReloadEnabled() {
    return this.getStringAttribute('dad_recovery_reload_enabled');
  }

  // domain_number - computed: true, optional: false, required: false
  public get domainNumber() {
    return this.getNumberAttribute('domain_number');
  }

  // in_dad_recovery_mode - computed: true, optional: false, required: false
  public get inDadRecoveryMode() {
    return this.getStringAttribute('in_dad_recovery_mode');
  }

  // sw_virtual_status - computed: true, optional: false, required: false
  public get swVirtualStatus() {
    return this.getStringAttribute('sw_virtual_status');
  }

  // switch_members - computed: true, optional: false, required: false
  private _switchMembers = new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoSwitchMembersList(this, "switch_members", false);
  public get switchMembers() {
    return this._switchMembers;
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceStackDetailsItem {
}

export function dataDnacenterNetworkDeviceStackDetailsItemToTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceStackDetailsItemToHclTerraform(struct?: DataDnacenterNetworkDeviceStackDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceStackDetailsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceStackDetailsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceStackDetailsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // stack_port_info - computed: true, optional: false, required: false
  private _stackPortInfo = new DataDnacenterNetworkDeviceStackDetailsItemStackPortInfoList(this, "stack_port_info", false);
  public get stackPortInfo() {
    return this._stackPortInfo;
  }

  // stack_switch_info - computed: true, optional: false, required: false
  private _stackSwitchInfo = new DataDnacenterNetworkDeviceStackDetailsItemStackSwitchInfoList(this, "stack_switch_info", false);
  public get stackSwitchInfo() {
    return this._stackSwitchInfo;
  }

  // svl_switch_info - computed: true, optional: false, required: false
  private _svlSwitchInfo = new DataDnacenterNetworkDeviceStackDetailsItemSvlSwitchInfoList(this, "svl_switch_info", false);
  public get svlSwitchInfo() {
    return this._svlSwitchInfo;
  }
}

export class DataDnacenterNetworkDeviceStackDetailsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceStackDetailsItemOutputReference {
    return new DataDnacenterNetworkDeviceStackDetailsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details dnacenter_network_device_stack_details}
*/
export class DataDnacenterNetworkDeviceStackDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_stack_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceStackDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceStackDetails to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceStackDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceStackDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_stack_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_stack_details dnacenter_network_device_stack_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceStackDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceStackDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_stack_details',
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

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
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
  private _item = new DataDnacenterNetworkDeviceStackDetailsItemList(this, "item", false);
  public get item() {
    return this._item;
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
