// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template#device DataIosxeTemplate#device}
  */
  readonly device?: string;
  /**
  * Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template#template_name DataIosxeTemplate#template_name}
  */
  readonly templateName: string;
}
export interface DataIosxeTemplateDeviceTrackingAttachPolicy {
}

export function dataIosxeTemplateDeviceTrackingAttachPolicyToTerraform(struct?: DataIosxeTemplateDeviceTrackingAttachPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeTemplateDeviceTrackingAttachPolicyToHclTerraform(struct?: DataIosxeTemplateDeviceTrackingAttachPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeTemplateDeviceTrackingAttachPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeTemplateDeviceTrackingAttachPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeTemplateDeviceTrackingAttachPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // vlan_range - computed: true, optional: false, required: false
  public get vlanRange() {
    return this.getStringAttribute('vlan_range');
  }
}

export class DataIosxeTemplateDeviceTrackingAttachPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeTemplateDeviceTrackingAttachPolicyOutputReference {
    return new DataIosxeTemplateDeviceTrackingAttachPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeTemplateIpAccessGroup {
}

export function dataIosxeTemplateIpAccessGroupToTerraform(struct?: DataIosxeTemplateIpAccessGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeTemplateIpAccessGroupToHclTerraform(struct?: DataIosxeTemplateIpAccessGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeTemplateIpAccessGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeTemplateIpAccessGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeTemplateIpAccessGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }
}

export class DataIosxeTemplateIpAccessGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeTemplateIpAccessGroupOutputReference {
    return new DataIosxeTemplateIpAccessGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeTemplateSwitchportPortSecurityMaximumRange {
}

export function dataIosxeTemplateSwitchportPortSecurityMaximumRangeToTerraform(struct?: DataIosxeTemplateSwitchportPortSecurityMaximumRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeTemplateSwitchportPortSecurityMaximumRangeToHclTerraform(struct?: DataIosxeTemplateSwitchportPortSecurityMaximumRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeTemplateSwitchportPortSecurityMaximumRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeTemplateSwitchportPortSecurityMaximumRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeTemplateSwitchportPortSecurityMaximumRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getNumberAttribute('range');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getBooleanAttribute('vlan');
  }

  // vlan_access - computed: true, optional: false, required: false
  public get vlanAccess() {
    return this.getBooleanAttribute('vlan_access');
  }
}

export class DataIosxeTemplateSwitchportPortSecurityMaximumRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeTemplateSwitchportPortSecurityMaximumRangeOutputReference {
    return new DataIosxeTemplateSwitchportPortSecurityMaximumRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template iosxe_template}
*/
export class DataIosxeTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeTemplate to import
  * @param importFromId The id of the existing DataIosxeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/template iosxe_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_template',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_session_closed - computed: true, optional: false, required: false
  public get accessSessionClosed() {
    return this.getBooleanAttribute('access_session_closed');
  }

  // access_session_control_direction - computed: true, optional: false, required: false
  public get accessSessionControlDirection() {
    return this.getStringAttribute('access_session_control_direction');
  }

  // access_session_host_mode - computed: true, optional: false, required: false
  public get accessSessionHostMode() {
    return this.getStringAttribute('access_session_host_mode');
  }

  // access_session_interface_template_sticky - computed: true, optional: false, required: false
  public get accessSessionInterfaceTemplateSticky() {
    return this.getBooleanAttribute('access_session_interface_template_sticky');
  }

  // access_session_interface_template_sticky_timer - computed: true, optional: false, required: false
  public get accessSessionInterfaceTemplateStickyTimer() {
    return this.getNumberAttribute('access_session_interface_template_sticky_timer');
  }

  // access_session_monitor - computed: true, optional: false, required: false
  public get accessSessionMonitor() {
    return this.getBooleanAttribute('access_session_monitor');
  }

  // access_session_port_control - computed: true, optional: false, required: false
  public get accessSessionPortControl() {
    return this.getStringAttribute('access_session_port_control');
  }

  // authentication_periodic - computed: true, optional: false, required: false
  public get authenticationPeriodic() {
    return this.getBooleanAttribute('authentication_periodic');
  }

  // authentication_timer_reauthenticate_range - computed: true, optional: false, required: false
  public get authenticationTimerReauthenticateRange() {
    return this.getNumberAttribute('authentication_timer_reauthenticate_range');
  }

  // authentication_timer_reauthenticate_server - computed: true, optional: false, required: false
  public get authenticationTimerReauthenticateServer() {
    return this.getBooleanAttribute('authentication_timer_reauthenticate_server');
  }

  // cts_manual - computed: true, optional: false, required: false
  public get ctsManual() {
    return this.getBooleanAttribute('cts_manual');
  }

  // cts_manual_policy_static_sgt - computed: true, optional: false, required: false
  public get ctsManualPolicyStaticSgt() {
    return this.getNumberAttribute('cts_manual_policy_static_sgt');
  }

  // cts_manual_policy_static_trusted - computed: true, optional: false, required: false
  public get ctsManualPolicyStaticTrusted() {
    return this.getBooleanAttribute('cts_manual_policy_static_trusted');
  }

  // cts_manual_propagate_sgt - computed: true, optional: false, required: false
  public get ctsManualPropagateSgt() {
    return this.getBooleanAttribute('cts_manual_propagate_sgt');
  }

  // cts_role_based_enforcement - computed: true, optional: false, required: false
  public get ctsRoleBasedEnforcement() {
    return this.getBooleanAttribute('cts_role_based_enforcement');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_tracking - computed: true, optional: false, required: false
  public get deviceTracking() {
    return this.getBooleanAttribute('device_tracking');
  }

  // device_tracking_attach_policy - computed: true, optional: false, required: false
  private _deviceTrackingAttachPolicy = new DataIosxeTemplateDeviceTrackingAttachPolicyList(this, "device_tracking_attach_policy", false);
  public get deviceTrackingAttachPolicy() {
    return this._deviceTrackingAttachPolicy;
  }

  // device_tracking_vlan_range - computed: true, optional: false, required: false
  public get deviceTrackingVlanRange() {
    return this.getStringAttribute('device_tracking_vlan_range');
  }

  // dot1x_max_reauth_req - computed: true, optional: false, required: false
  public get dot1XMaxReauthReq() {
    return this.getNumberAttribute('dot1x_max_reauth_req');
  }

  // dot1x_max_req - computed: true, optional: false, required: false
  public get dot1XMaxReq() {
    return this.getNumberAttribute('dot1x_max_req');
  }

  // dot1x_pae - computed: true, optional: false, required: false
  public get dot1XPae() {
    return this.getStringAttribute('dot1x_pae');
  }

  // dot1x_timeout_quiet_period - computed: true, optional: false, required: false
  public get dot1XTimeoutQuietPeriod() {
    return this.getNumberAttribute('dot1x_timeout_quiet_period');
  }

  // dot1x_timeout_ratelimit_period - computed: true, optional: false, required: false
  public get dot1XTimeoutRatelimitPeriod() {
    return this.getNumberAttribute('dot1x_timeout_ratelimit_period');
  }

  // dot1x_timeout_server_timeout - computed: true, optional: false, required: false
  public get dot1XTimeoutServerTimeout() {
    return this.getNumberAttribute('dot1x_timeout_server_timeout');
  }

  // dot1x_timeout_supp_timeout - computed: true, optional: false, required: false
  public get dot1XTimeoutSuppTimeout() {
    return this.getNumberAttribute('dot1x_timeout_supp_timeout');
  }

  // dot1x_timeout_tx_period - computed: true, optional: false, required: false
  public get dot1XTimeoutTxPeriod() {
    return this.getNumberAttribute('dot1x_timeout_tx_period');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group - computed: true, optional: false, required: false
  private _ipAccessGroup = new DataIosxeTemplateIpAccessGroupList(this, "ip_access_group", false);
  public get ipAccessGroup() {
    return this._ipAccessGroup;
  }

  // ip_dhcp_snooping_limit_rate - computed: true, optional: false, required: false
  public get ipDhcpSnoopingLimitRate() {
    return this.getNumberAttribute('ip_dhcp_snooping_limit_rate');
  }

  // ip_dhcp_snooping_trust - computed: true, optional: false, required: false
  public get ipDhcpSnoopingTrust() {
    return this.getBooleanAttribute('ip_dhcp_snooping_trust');
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // mab - computed: true, optional: false, required: false
  public get mab() {
    return this.getBooleanAttribute('mab');
  }

  // mab_eap - computed: true, optional: false, required: false
  public get mabEap() {
    return this.getBooleanAttribute('mab_eap');
  }

  // service_policy_input - computed: true, optional: false, required: false
  public get servicePolicyInput() {
    return this.getStringAttribute('service_policy_input');
  }

  // service_policy_output - computed: true, optional: false, required: false
  public get servicePolicyOutput() {
    return this.getStringAttribute('service_policy_output');
  }

  // service_policy_type_control_subscriber - computed: true, optional: false, required: false
  public get servicePolicyTypeControlSubscriber() {
    return this.getStringAttribute('service_policy_type_control_subscriber');
  }

  // source_template - computed: true, optional: false, required: false
  public get sourceTemplate() {
    return this.getStringAttribute('source_template');
  }

  // spanning_tree_bpduguard_enable - computed: true, optional: false, required: false
  public get spanningTreeBpduguardEnable() {
    return this.getBooleanAttribute('spanning_tree_bpduguard_enable');
  }

  // spanning_tree_portfast - computed: true, optional: false, required: false
  public get spanningTreePortfast() {
    return this.getBooleanAttribute('spanning_tree_portfast');
  }

  // spanning_tree_portfast_disable - computed: true, optional: false, required: false
  public get spanningTreePortfastDisable() {
    return this.getBooleanAttribute('spanning_tree_portfast_disable');
  }

  // spanning_tree_portfast_edge - computed: true, optional: false, required: false
  public get spanningTreePortfastEdge() {
    return this.getBooleanAttribute('spanning_tree_portfast_edge');
  }

  // spanning_tree_portfast_network - computed: true, optional: false, required: false
  public get spanningTreePortfastNetwork() {
    return this.getBooleanAttribute('spanning_tree_portfast_network');
  }

  // spanning_tree_service_policy - computed: true, optional: false, required: false
  public get spanningTreeServicePolicy() {
    return this.getBooleanAttribute('spanning_tree_service_policy');
  }

  // storm_control_action_shutdown - computed: true, optional: false, required: false
  public get stormControlActionShutdown() {
    return this.getBooleanAttribute('storm_control_action_shutdown');
  }

  // storm_control_action_trap - computed: true, optional: false, required: false
  public get stormControlActionTrap() {
    return this.getBooleanAttribute('storm_control_action_trap');
  }

  // storm_control_broadcast_level_bps_threshold - computed: true, optional: false, required: false
  public get stormControlBroadcastLevelBpsThreshold() {
    return this.getNumberAttribute('storm_control_broadcast_level_bps_threshold');
  }

  // storm_control_broadcast_level_pps_threshold - computed: true, optional: false, required: false
  public get stormControlBroadcastLevelPpsThreshold() {
    return this.getStringAttribute('storm_control_broadcast_level_pps_threshold');
  }

  // storm_control_broadcast_level_threshold - computed: true, optional: false, required: false
  public get stormControlBroadcastLevelThreshold() {
    return this.getNumberAttribute('storm_control_broadcast_level_threshold');
  }

  // storm_control_multicast_level_bps_threshold - computed: true, optional: false, required: false
  public get stormControlMulticastLevelBpsThreshold() {
    return this.getNumberAttribute('storm_control_multicast_level_bps_threshold');
  }

  // storm_control_multicast_level_pps_threshold - computed: true, optional: false, required: false
  public get stormControlMulticastLevelPpsThreshold() {
    return this.getStringAttribute('storm_control_multicast_level_pps_threshold');
  }

  // storm_control_multicast_level_threshold - computed: true, optional: false, required: false
  public get stormControlMulticastLevelThreshold() {
    return this.getNumberAttribute('storm_control_multicast_level_threshold');
  }

  // subscriber_aging_inactivity_timer_probe - computed: true, optional: false, required: false
  public get subscriberAgingInactivityTimerProbe() {
    return this.getBooleanAttribute('subscriber_aging_inactivity_timer_probe');
  }

  // subscriber_aging_inactivity_timer_value - computed: true, optional: false, required: false
  public get subscriberAgingInactivityTimerValue() {
    return this.getNumberAttribute('subscriber_aging_inactivity_timer_value');
  }

  // subscriber_aging_probe - computed: true, optional: false, required: false
  public get subscriberAgingProbe() {
    return this.getBooleanAttribute('subscriber_aging_probe');
  }

  // switchport_access_vlan - computed: true, optional: false, required: false
  public get switchportAccessVlan() {
    return this.getNumberAttribute('switchport_access_vlan');
  }

  // switchport_block_unicast - computed: true, optional: false, required: false
  public get switchportBlockUnicast() {
    return this.getBooleanAttribute('switchport_block_unicast');
  }

  // switchport_mode_access - computed: true, optional: false, required: false
  public get switchportModeAccess() {
    return this.getBooleanAttribute('switchport_mode_access');
  }

  // switchport_mode_trunk - computed: true, optional: false, required: false
  public get switchportModeTrunk() {
    return this.getBooleanAttribute('switchport_mode_trunk');
  }

  // switchport_nonegotiate - computed: true, optional: false, required: false
  public get switchportNonegotiate() {
    return this.getBooleanAttribute('switchport_nonegotiate');
  }

  // switchport_port_security - computed: true, optional: false, required: false
  public get switchportPortSecurity() {
    return this.getBooleanAttribute('switchport_port_security');
  }

  // switchport_port_security_aging_static - computed: true, optional: false, required: false
  public get switchportPortSecurityAgingStatic() {
    return this.getBooleanAttribute('switchport_port_security_aging_static');
  }

  // switchport_port_security_aging_time - computed: true, optional: false, required: false
  public get switchportPortSecurityAgingTime() {
    return this.getNumberAttribute('switchport_port_security_aging_time');
  }

  // switchport_port_security_aging_type - computed: true, optional: false, required: false
  public get switchportPortSecurityAgingType() {
    return this.getBooleanAttribute('switchport_port_security_aging_type');
  }

  // switchport_port_security_aging_type_inactivity - computed: true, optional: false, required: false
  public get switchportPortSecurityAgingTypeInactivity() {
    return this.getBooleanAttribute('switchport_port_security_aging_type_inactivity');
  }

  // switchport_port_security_maximum_range - computed: true, optional: false, required: false
  private _switchportPortSecurityMaximumRange = new DataIosxeTemplateSwitchportPortSecurityMaximumRangeList(this, "switchport_port_security_maximum_range", false);
  public get switchportPortSecurityMaximumRange() {
    return this._switchportPortSecurityMaximumRange;
  }

  // switchport_port_security_violation_protect - computed: true, optional: false, required: false
  public get switchportPortSecurityViolationProtect() {
    return this.getBooleanAttribute('switchport_port_security_violation_protect');
  }

  // switchport_port_security_violation_restrict - computed: true, optional: false, required: false
  public get switchportPortSecurityViolationRestrict() {
    return this.getBooleanAttribute('switchport_port_security_violation_restrict');
  }

  // switchport_port_security_violation_shutdown - computed: true, optional: false, required: false
  public get switchportPortSecurityViolationShutdown() {
    return this.getBooleanAttribute('switchport_port_security_violation_shutdown');
  }

  // switchport_private_vlan_host_association_primary_range - computed: true, optional: false, required: false
  public get switchportPrivateVlanHostAssociationPrimaryRange() {
    return this.getNumberAttribute('switchport_private_vlan_host_association_primary_range');
  }

  // switchport_private_vlan_host_association_secondary_range - computed: true, optional: false, required: false
  public get switchportPrivateVlanHostAssociationSecondaryRange() {
    return this.getNumberAttribute('switchport_private_vlan_host_association_secondary_range');
  }

  // switchport_trunk_allowed_vlans - computed: true, optional: false, required: false
  public get switchportTrunkAllowedVlans() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans');
  }

  // switchport_trunk_allowed_vlans_all - computed: true, optional: false, required: false
  public get switchportTrunkAllowedVlansAll() {
    return this.getBooleanAttribute('switchport_trunk_allowed_vlans_all');
  }

  // switchport_trunk_allowed_vlans_none - computed: true, optional: false, required: false
  public get switchportTrunkAllowedVlansNone() {
    return this.getBooleanAttribute('switchport_trunk_allowed_vlans_none');
  }

  // switchport_trunk_native_vlan_tag - computed: true, optional: false, required: false
  public get switchportTrunkNativeVlanTag() {
    return this.getBooleanAttribute('switchport_trunk_native_vlan_tag');
  }

  // switchport_trunk_native_vlan_vlan_id - computed: true, optional: false, required: false
  public get switchportTrunkNativeVlanVlanId() {
    return this.getNumberAttribute('switchport_trunk_native_vlan_vlan_id');
  }

  // switchport_voice_vlan - computed: true, optional: false, required: false
  public get switchportVoiceVlan() {
    return this.getNumberAttribute('switchport_voice_vlan');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
