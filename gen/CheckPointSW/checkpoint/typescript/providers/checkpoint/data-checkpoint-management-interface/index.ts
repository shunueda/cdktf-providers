// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#color DataCheckpointManagementInterface#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#comments DataCheckpointManagementInterface#comments}
  */
  readonly comments?: string;
  /**
  * Gateway or cluster object uid that the interface belongs to. <font color="red">Required only if</font> name was specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#gateway_uid DataCheckpointManagementInterface#gateway_uid}
  */
  readonly gatewayUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#id DataCheckpointManagementInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#name DataCheckpointManagementInterface#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#uid DataCheckpointManagementInterface#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementInterfaceAntiSpoofingSettings {
}

export function dataCheckpointManagementInterfaceAntiSpoofingSettingsToTerraform(struct?: DataCheckpointManagementInterfaceAntiSpoofingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceAntiSpoofingSettingsToHclTerraform(struct?: DataCheckpointManagementInterfaceAntiSpoofingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceAntiSpoofingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceAntiSpoofingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceAntiSpoofingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // exclude_packets - computed: true, optional: false, required: false
  public get excludePackets() {
    return this.getBooleanAttribute('exclude_packets');
  }

  // excluded_network_name - computed: true, optional: false, required: false
  public get excludedNetworkName() {
    return this.getStringAttribute('excluded_network_name');
  }

  // excluded_network_uid - computed: true, optional: false, required: false
  public get excludedNetworkUid() {
    return this.getStringAttribute('excluded_network_uid');
  }

  // spoof_tracking - computed: true, optional: false, required: false
  public get spoofTracking() {
    return this.getStringAttribute('spoof_tracking');
  }
}

export class DataCheckpointManagementInterfaceAntiSpoofingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceAntiSpoofingSettingsOutputReference {
    return new DataCheckpointManagementInterfaceAntiSpoofingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementInterfaceClusterMembers {
}

export function dataCheckpointManagementInterfaceClusterMembersToTerraform(struct?: DataCheckpointManagementInterfaceClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceClusterMembersToHclTerraform(struct?: DataCheckpointManagementInterfaceClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceClusterMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceClusterMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceClusterMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask_length - computed: true, optional: false, required: false
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }

  // ipv4_network_mask - computed: true, optional: false, required: false
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_mask_length - computed: true, optional: false, required: false
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }

  // ipv6_network_mask - computed: true, optional: false, required: false
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }

  // member_name - computed: true, optional: false, required: false
  public get memberName() {
    return this.getStringAttribute('member_name');
  }

  // member_uid - computed: true, optional: false, required: false
  public get memberUid() {
    return this.getStringAttribute('member_uid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_mask - computed: true, optional: false, required: false
  public get networkMask() {
    return this.getStringAttribute('network_mask');
  }
}

export class DataCheckpointManagementInterfaceClusterMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceClusterMembersOutputReference {
    return new DataCheckpointManagementInterfaceClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementInterfaceSecurityZoneSettings {
}

export function dataCheckpointManagementInterfaceSecurityZoneSettingsToTerraform(struct?: DataCheckpointManagementInterfaceSecurityZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceSecurityZoneSettingsToHclTerraform(struct?: DataCheckpointManagementInterfaceSecurityZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceSecurityZoneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceSecurityZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceSecurityZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_calculated - computed: true, optional: false, required: false
  public get autoCalculated() {
    return this.getBooleanAttribute('auto_calculated');
  }

  // auto_calculated_zone - computed: true, optional: false, required: false
  public get autoCalculatedZone() {
    return this.getStringAttribute('auto_calculated_zone');
  }

  // auto_calculated_zone_uid - computed: true, optional: false, required: false
  public get autoCalculatedZoneUid() {
    return this.getStringAttribute('auto_calculated_zone_uid');
  }

  // specific_security_zone_enabled - computed: true, optional: false, required: false
  public get specificSecurityZoneEnabled() {
    return this.getBooleanAttribute('specific_security_zone_enabled');
  }

  // specific_zone - computed: true, optional: false, required: false
  public get specificZone() {
    return this.getStringAttribute('specific_zone');
  }

  // specific_zone_uid - computed: true, optional: false, required: false
  public get specificZoneUid() {
    return this.getStringAttribute('specific_zone_uid');
  }
}

export class DataCheckpointManagementInterfaceSecurityZoneSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceSecurityZoneSettingsOutputReference {
    return new DataCheckpointManagementInterfaceSecurityZoneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementInterfaceTopologySettings {
}

export function dataCheckpointManagementInterfaceTopologySettingsToTerraform(struct?: DataCheckpointManagementInterfaceTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceTopologySettingsToHclTerraform(struct?: DataCheckpointManagementInterfaceTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceTopologySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceTopologySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceTopologySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_leads_to_dmz - computed: true, optional: false, required: false
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }

  // ip_address_behind_this_interface - computed: true, optional: false, required: false
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }

  // specific_network - computed: true, optional: false, required: false
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }

  // specific_network_uid - computed: true, optional: false, required: false
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
}

export class DataCheckpointManagementInterfaceTopologySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceTopologySettingsOutputReference {
    return new DataCheckpointManagementInterfaceTopologySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementInterfaceTopologySettingsAutomatic {
}

export function dataCheckpointManagementInterfaceTopologySettingsAutomaticToTerraform(struct?: DataCheckpointManagementInterfaceTopologySettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceTopologySettingsAutomaticToHclTerraform(struct?: DataCheckpointManagementInterfaceTopologySettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceTopologySettingsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceTopologySettingsAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceTopologySettingsAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_leads_to_dmz - computed: true, optional: false, required: false
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }

  // ip_address_behind_this_interface - computed: true, optional: false, required: false
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }

  // specific_network - computed: true, optional: false, required: false
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }

  // specific_network_uid - computed: true, optional: false, required: false
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
}

export class DataCheckpointManagementInterfaceTopologySettingsAutomaticList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceTopologySettingsAutomaticOutputReference {
    return new DataCheckpointManagementInterfaceTopologySettingsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementInterfaceTopologySettingsManual {
}

export function dataCheckpointManagementInterfaceTopologySettingsManualToTerraform(struct?: DataCheckpointManagementInterfaceTopologySettingsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementInterfaceTopologySettingsManualToHclTerraform(struct?: DataCheckpointManagementInterfaceTopologySettingsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementInterfaceTopologySettingsManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementInterfaceTopologySettingsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementInterfaceTopologySettingsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_leads_to_dmz - computed: true, optional: false, required: false
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }

  // ip_address_behind_this_interface - computed: true, optional: false, required: false
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }

  // specific_network - computed: true, optional: false, required: false
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }

  // specific_network_uid - computed: true, optional: false, required: false
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
}

export class DataCheckpointManagementInterfaceTopologySettingsManualList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementInterfaceTopologySettingsManualOutputReference {
    return new DataCheckpointManagementInterfaceTopologySettingsManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface checkpoint_management_interface}
*/
export class DataCheckpointManagementInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementInterface to import
  * @param importFromId The id of the existing DataCheckpointManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_interface checkpoint_management_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._gatewayUid = config.gatewayUid;
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_spoofing - computed: true, optional: false, required: false
  public get antiSpoofing() {
    return this.getBooleanAttribute('anti_spoofing');
  }

  // anti_spoofing_settings - computed: true, optional: false, required: false
  private _antiSpoofingSettings = new DataCheckpointManagementInterfaceAntiSpoofingSettingsList(this, "anti_spoofing_settings", false);
  public get antiSpoofingSettings() {
    return this._antiSpoofingSettings;
  }

  // cluster_members - computed: true, optional: false, required: false
  private _clusterMembers = new DataCheckpointManagementInterfaceClusterMembersList(this, "cluster_members", false);
  public get clusterMembers() {
    return this._clusterMembers;
  }

  // cluster_network_type - computed: true, optional: false, required: false
  public get clusterNetworkType() {
    return this.getStringAttribute('cluster_network_type');
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dynamic_ip - computed: true, optional: false, required: false
  public get dynamicIp() {
    return this.getBooleanAttribute('dynamic_ip');
  }

  // gateway_uid - computed: false, optional: true, required: false
  private _gatewayUid?: string; 
  public get gatewayUid() {
    return this.getStringAttribute('gateway_uid');
  }
  public set gatewayUid(value: string) {
    this._gatewayUid = value;
  }
  public resetGatewayUid() {
    this._gatewayUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUidInput() {
    return this._gatewayUid;
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask_length - computed: true, optional: false, required: false
  public get ipv4MaskLength() {
    return this.getNumberAttribute('ipv4_mask_length');
  }

  // ipv4_network_mask - computed: true, optional: false, required: false
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_mask_length - computed: true, optional: false, required: false
  public get ipv6MaskLength() {
    return this.getNumberAttribute('ipv6_mask_length');
  }

  // ipv6_network_mask - computed: true, optional: false, required: false
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }

  // monitored_by_cluster - computed: true, optional: false, required: false
  public get monitoredByCluster() {
    return this.getBooleanAttribute('monitored_by_cluster');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_interface_type - computed: true, optional: false, required: false
  public get networkInterfaceType() {
    return this.getStringAttribute('network_interface_type');
  }

  // security_zone_settings - computed: true, optional: false, required: false
  private _securityZoneSettings = new DataCheckpointManagementInterfaceSecurityZoneSettingsList(this, "security_zone_settings", false);
  public get securityZoneSettings() {
    return this._securityZoneSettings;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // topology_automatic - computed: true, optional: false, required: false
  public get topologyAutomatic() {
    return this.getStringAttribute('topology_automatic');
  }

  // topology_manual - computed: true, optional: false, required: false
  public get topologyManual() {
    return this.getStringAttribute('topology_manual');
  }

  // topology_settings - computed: true, optional: false, required: false
  private _topologySettings = new DataCheckpointManagementInterfaceTopologySettingsList(this, "topology_settings", false);
  public get topologySettings() {
    return this._topologySettings;
  }

  // topology_settings_automatic - computed: true, optional: false, required: false
  private _topologySettingsAutomatic = new DataCheckpointManagementInterfaceTopologySettingsAutomaticList(this, "topology_settings_automatic", false);
  public get topologySettingsAutomatic() {
    return this._topologySettingsAutomatic;
  }

  // topology_settings_manual - computed: true, optional: false, required: false
  private _topologySettingsManual = new DataCheckpointManagementInterfaceTopologySettingsManualList(this, "topology_settings_manual", false);
  public get topologySettingsManual() {
    return this._topologySettingsManual;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      gateway_uid: cdktf.stringToTerraform(this._gatewayUid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_uid: {
        value: cdktf.stringToHclTerraform(this._gatewayUid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
