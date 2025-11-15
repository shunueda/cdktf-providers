// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#items SwitchPorts#items}
  */
  readonly items: SwitchPortsItems[] | cdktf.IResolvable;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#organization_id SwitchPorts#organization_id}
  */
  readonly organizationId: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#serial SwitchPorts#serial}
  */
  readonly serial: string;
}
export interface SwitchPortsItems {
  /**
  * The number of a custom access policy to configure on the switch port. Only applicable when `accessPolicyType` is `Custom access policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#access_policy_number SwitchPorts#access_policy_number}
  */
  readonly accessPolicyNumber?: number;
  /**
  * The type of the access policy of the switch port. Only applicable to access ports. Can be one of `Open`, `Custom access policy`, `MAC allow list` or `Sticky MAC allow list`.
  *   - Choices: `Custom access policy`, `MAC allow list`, `Open`, `Sticky MAC allow list`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#access_policy_type SwitchPorts#access_policy_type}
  */
  readonly accessPolicyType?: string;
  /**
  * The adaptive policy group ID that will be used to tag traffic through this switch port. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API. Cannot be applied to a port on a switch bound to profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#adaptive_policy_group_id SwitchPorts#adaptive_policy_group_id}
  */
  readonly adaptivePolicyGroupId?: string;
  /**
  * The VLANs allowed on the switch port. Only applicable to trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#allowed_vlans SwitchPorts#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#dai_trusted SwitchPorts#dai_trusted}
  */
  readonly daiTrusted?: boolean | cdktf.IResolvable;
  /**
  * The Energy Efficient Ethernet status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#dot3az_enabled SwitchPorts#dot3az_enabled}
  */
  readonly dot3AzEnabled?: boolean | cdktf.IResolvable;
  /**
  * The status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#enabled SwitchPorts#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#flexible_stacking_enabled SwitchPorts#flexible_stacking_enabled}
  */
  readonly flexibleStackingEnabled?: boolean | cdktf.IResolvable;
  /**
  * For C9500-32QC, whether or not the port is enabled for high speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#high_speed_enabled SwitchPorts#high_speed_enabled}
  */
  readonly highSpeedEnabled?: boolean | cdktf.IResolvable;
  /**
  * The isolation status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#isolation_enabled SwitchPorts#isolation_enabled}
  */
  readonly isolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The link speed for the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#link_negotiation SwitchPorts#link_negotiation}
  */
  readonly linkNegotiation?: string;
  /**
  * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when `accessPolicyType` is `MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#mac_allow_list SwitchPorts#mac_allow_list}
  */
  readonly macAllowList?: string[];
  /**
  * The maximum number of MAC addresses for regular MAC allow list. Only applicable when `accessPolicyType` is `MAC allow list`. Note: Config only supported on verions greater than ms18 only for classic switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#mac_whitelist_limit SwitchPorts#mac_whitelist_limit}
  */
  readonly macWhitelistLimit?: number;
  /**
  * The name of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#name SwitchPorts#name}
  */
  readonly name?: string;
  /**
  * If true, Peer SGT is enabled for traffic through this switch port. Applicable to trunk port only, not access port. Cannot be applied to a port on a switch bound to profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#peer_sgt_capable SwitchPorts#peer_sgt_capable}
  */
  readonly peerSgtCapable?: boolean | cdktf.IResolvable;
  /**
  * The PoE status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#poe_enabled SwitchPorts#poe_enabled}
  */
  readonly poeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#port_id SwitchPorts#port_id}
  */
  readonly portId: string;
  /**
  * The ID of the port schedule. A value of null will clear the port schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#port_schedule_id SwitchPorts#port_schedule_id}
  */
  readonly portScheduleId?: string;
  /**
  * When enabled, override this port`s configuration with a port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#profile_enabled SwitchPorts#profile_enabled}
  */
  readonly profileEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the ID of the port profile used to override the port`s configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#profile_id SwitchPorts#profile_id}
  */
  readonly profileId?: string;
  /**
  * When enabled, the IName of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#profile_iname SwitchPorts#profile_iname}
  */
  readonly profileIname?: string;
  /**
  * The rapid spanning tree protocol status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#rstp_enabled SwitchPorts#rstp_enabled}
  */
  readonly rstpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The initial list of MAC addresses for sticky Mac allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#sticky_mac_allow_list SwitchPorts#sticky_mac_allow_list}
  */
  readonly stickyMacAllowList?: string[];
  /**
  * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#sticky_mac_allow_list_limit SwitchPorts#sticky_mac_allow_list_limit}
  */
  readonly stickyMacAllowListLimit?: number;
  /**
  * The storm control status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#storm_control_enabled SwitchPorts#storm_control_enabled}
  */
  readonly stormControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The state of the STP guard (`disabled`, `root guard`, `bpdu guard` or `loop guard`).
  *   - Choices: `bpdu guard`, `disabled`, `loop guard`, `root guard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#stp_guard SwitchPorts#stp_guard}
  */
  readonly stpGuard?: string;
  /**
  * The list of tags of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#tags SwitchPorts#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the switch port (`trunk`, `access` or `stack`).
  *   - Choices: `access`, `stack`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#type SwitchPorts#type}
  */
  readonly type?: string;
  /**
  * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
  *   - Choices: `Alert only`, `Enforce`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#udld SwitchPorts#udld}
  */
  readonly udld?: string;
  /**
  * The VLAN of the switch port. For a trunk port, this is the native VLAN. A null value will clear the value set for trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#vlan SwitchPorts#vlan}
  */
  readonly vlan?: number;
  /**
  * The voice VLAN of the switch port. Only applicable to access ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#voice_vlan SwitchPorts#voice_vlan}
  */
  readonly voiceVlan?: number;
}

export function switchPortsItemsToTerraform(struct?: SwitchPortsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policy_number: cdktf.numberToTerraform(struct!.accessPolicyNumber),
    access_policy_type: cdktf.stringToTerraform(struct!.accessPolicyType),
    adaptive_policy_group_id: cdktf.stringToTerraform(struct!.adaptivePolicyGroupId),
    allowed_vlans: cdktf.stringToTerraform(struct!.allowedVlans),
    dai_trusted: cdktf.booleanToTerraform(struct!.daiTrusted),
    dot3az_enabled: cdktf.booleanToTerraform(struct!.dot3AzEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flexible_stacking_enabled: cdktf.booleanToTerraform(struct!.flexibleStackingEnabled),
    high_speed_enabled: cdktf.booleanToTerraform(struct!.highSpeedEnabled),
    isolation_enabled: cdktf.booleanToTerraform(struct!.isolationEnabled),
    link_negotiation: cdktf.stringToTerraform(struct!.linkNegotiation),
    mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macAllowList),
    mac_whitelist_limit: cdktf.numberToTerraform(struct!.macWhitelistLimit),
    name: cdktf.stringToTerraform(struct!.name),
    peer_sgt_capable: cdktf.booleanToTerraform(struct!.peerSgtCapable),
    poe_enabled: cdktf.booleanToTerraform(struct!.poeEnabled),
    port_id: cdktf.stringToTerraform(struct!.portId),
    port_schedule_id: cdktf.stringToTerraform(struct!.portScheduleId),
    profile_enabled: cdktf.booleanToTerraform(struct!.profileEnabled),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    profile_iname: cdktf.stringToTerraform(struct!.profileIname),
    rstp_enabled: cdktf.booleanToTerraform(struct!.rstpEnabled),
    sticky_mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stickyMacAllowList),
    sticky_mac_allow_list_limit: cdktf.numberToTerraform(struct!.stickyMacAllowListLimit),
    storm_control_enabled: cdktf.booleanToTerraform(struct!.stormControlEnabled),
    stp_guard: cdktf.stringToTerraform(struct!.stpGuard),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    udld: cdktf.stringToTerraform(struct!.udld),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    voice_vlan: cdktf.numberToTerraform(struct!.voiceVlan),
  }
}


export function switchPortsItemsToHclTerraform(struct?: SwitchPortsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policy_number: {
      value: cdktf.numberToHclTerraform(struct!.accessPolicyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adaptive_policy_group_id: {
      value: cdktf.stringToHclTerraform(struct!.adaptivePolicyGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dai_trusted: {
      value: cdktf.booleanToHclTerraform(struct!.daiTrusted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot3az_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dot3AzEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flexible_stacking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.flexibleStackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_speed_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.highSpeedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isolationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_negotiation: {
      value: cdktf.stringToHclTerraform(struct!.linkNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macAllowList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mac_whitelist_limit: {
      value: cdktf.numberToHclTerraform(struct!.macWhitelistLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_sgt_capable: {
      value: cdktf.booleanToHclTerraform(struct!.peerSgtCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    poe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.poeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_schedule_id: {
      value: cdktf.stringToHclTerraform(struct!.portScheduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.profileEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_iname: {
      value: cdktf.stringToHclTerraform(struct!.profileIname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rstp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rstpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sticky_mac_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stickyMacAllowList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sticky_mac_allow_list_limit: {
      value: cdktf.numberToHclTerraform(struct!.stickyMacAllowListLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storm_control_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.stormControlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stp_guard: {
      value: cdktf.stringToHclTerraform(struct!.stpGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udld: {
      value: cdktf.stringToHclTerraform(struct!.udld),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice_vlan: {
      value: cdktf.numberToHclTerraform(struct!.voiceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchPortsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchPortsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyNumber = this._accessPolicyNumber;
    }
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    if (this._adaptivePolicyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptivePolicyGroupId = this._adaptivePolicyGroupId;
    }
    if (this._allowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans;
    }
    if (this._daiTrusted !== undefined) {
      hasAnyValues = true;
      internalValueResult.daiTrusted = this._daiTrusted;
    }
    if (this._dot3AzEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot3AzEnabled = this._dot3AzEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flexibleStackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexibleStackingEnabled = this._flexibleStackingEnabled;
    }
    if (this._highSpeedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.highSpeedEnabled = this._highSpeedEnabled;
    }
    if (this._isolationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationEnabled = this._isolationEnabled;
    }
    if (this._linkNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkNegotiation = this._linkNegotiation;
    }
    if (this._macAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAllowList = this._macAllowList;
    }
    if (this._macWhitelistLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.macWhitelistLimit = this._macWhitelistLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerSgtCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSgtCapable = this._peerSgtCapable;
    }
    if (this._poeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeEnabled = this._poeEnabled;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._portScheduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScheduleId = this._portScheduleId;
    }
    if (this._profileEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileEnabled = this._profileEnabled;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._profileIname !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileIname = this._profileIname;
    }
    if (this._rstpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstpEnabled = this._rstpEnabled;
    }
    if (this._stickyMacAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyMacAllowList = this._stickyMacAllowList;
    }
    if (this._stickyMacAllowListLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyMacAllowListLimit = this._stickyMacAllowListLimit;
    }
    if (this._stormControlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.stormControlEnabled = this._stormControlEnabled;
    }
    if (this._stpGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpGuard = this._stpGuard;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._udld !== undefined) {
      hasAnyValues = true;
      internalValueResult.udld = this._udld;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._voiceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceVlan = this._voiceVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchPortsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyNumber = undefined;
      this._accessPolicyType = undefined;
      this._adaptivePolicyGroupId = undefined;
      this._allowedVlans = undefined;
      this._daiTrusted = undefined;
      this._dot3AzEnabled = undefined;
      this._enabled = undefined;
      this._flexibleStackingEnabled = undefined;
      this._highSpeedEnabled = undefined;
      this._isolationEnabled = undefined;
      this._linkNegotiation = undefined;
      this._macAllowList = undefined;
      this._macWhitelistLimit = undefined;
      this._name = undefined;
      this._peerSgtCapable = undefined;
      this._poeEnabled = undefined;
      this._portId = undefined;
      this._portScheduleId = undefined;
      this._profileEnabled = undefined;
      this._profileId = undefined;
      this._profileIname = undefined;
      this._rstpEnabled = undefined;
      this._stickyMacAllowList = undefined;
      this._stickyMacAllowListLimit = undefined;
      this._stormControlEnabled = undefined;
      this._stpGuard = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._udld = undefined;
      this._vlan = undefined;
      this._voiceVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyNumber = value.accessPolicyNumber;
      this._accessPolicyType = value.accessPolicyType;
      this._adaptivePolicyGroupId = value.adaptivePolicyGroupId;
      this._allowedVlans = value.allowedVlans;
      this._daiTrusted = value.daiTrusted;
      this._dot3AzEnabled = value.dot3AzEnabled;
      this._enabled = value.enabled;
      this._flexibleStackingEnabled = value.flexibleStackingEnabled;
      this._highSpeedEnabled = value.highSpeedEnabled;
      this._isolationEnabled = value.isolationEnabled;
      this._linkNegotiation = value.linkNegotiation;
      this._macAllowList = value.macAllowList;
      this._macWhitelistLimit = value.macWhitelistLimit;
      this._name = value.name;
      this._peerSgtCapable = value.peerSgtCapable;
      this._poeEnabled = value.poeEnabled;
      this._portId = value.portId;
      this._portScheduleId = value.portScheduleId;
      this._profileEnabled = value.profileEnabled;
      this._profileId = value.profileId;
      this._profileIname = value.profileIname;
      this._rstpEnabled = value.rstpEnabled;
      this._stickyMacAllowList = value.stickyMacAllowList;
      this._stickyMacAllowListLimit = value.stickyMacAllowListLimit;
      this._stormControlEnabled = value.stormControlEnabled;
      this._stpGuard = value.stpGuard;
      this._tags = value.tags;
      this._type = value.type;
      this._udld = value.udld;
      this._vlan = value.vlan;
      this._voiceVlan = value.voiceVlan;
    }
  }

  // access_policy_number - computed: false, optional: true, required: false
  private _accessPolicyNumber?: number; 
  public get accessPolicyNumber() {
    return this.getNumberAttribute('access_policy_number');
  }
  public set accessPolicyNumber(value: number) {
    this._accessPolicyNumber = value;
  }
  public resetAccessPolicyNumber() {
    this._accessPolicyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyNumberInput() {
    return this._accessPolicyNumber;
  }

  // access_policy_type - computed: false, optional: true, required: false
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  public resetAccessPolicyType() {
    this._accessPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }

  // adaptive_policy_group_id - computed: false, optional: true, required: false
  private _adaptivePolicyGroupId?: string; 
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }
  public set adaptivePolicyGroupId(value: string) {
    this._adaptivePolicyGroupId = value;
  }
  public resetAdaptivePolicyGroupId() {
    this._adaptivePolicyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptivePolicyGroupIdInput() {
    return this._adaptivePolicyGroupId;
  }

  // allowed_vlans - computed: false, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // dai_trusted - computed: false, optional: true, required: false
  private _daiTrusted?: boolean | cdktf.IResolvable; 
  public get daiTrusted() {
    return this.getBooleanAttribute('dai_trusted');
  }
  public set daiTrusted(value: boolean | cdktf.IResolvable) {
    this._daiTrusted = value;
  }
  public resetDaiTrusted() {
    this._daiTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daiTrustedInput() {
    return this._daiTrusted;
  }

  // dot3az_enabled - computed: false, optional: true, required: false
  private _dot3AzEnabled?: boolean | cdktf.IResolvable; 
  public get dot3AzEnabled() {
    return this.getBooleanAttribute('dot3az_enabled');
  }
  public set dot3AzEnabled(value: boolean | cdktf.IResolvable) {
    this._dot3AzEnabled = value;
  }
  public resetDot3AzEnabled() {
    this._dot3AzEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot3AzEnabledInput() {
    return this._dot3AzEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // flexible_stacking_enabled - computed: false, optional: true, required: false
  private _flexibleStackingEnabled?: boolean | cdktf.IResolvable; 
  public get flexibleStackingEnabled() {
    return this.getBooleanAttribute('flexible_stacking_enabled');
  }
  public set flexibleStackingEnabled(value: boolean | cdktf.IResolvable) {
    this._flexibleStackingEnabled = value;
  }
  public resetFlexibleStackingEnabled() {
    this._flexibleStackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleStackingEnabledInput() {
    return this._flexibleStackingEnabled;
  }

  // high_speed_enabled - computed: false, optional: true, required: false
  private _highSpeedEnabled?: boolean | cdktf.IResolvable; 
  public get highSpeedEnabled() {
    return this.getBooleanAttribute('high_speed_enabled');
  }
  public set highSpeedEnabled(value: boolean | cdktf.IResolvable) {
    this._highSpeedEnabled = value;
  }
  public resetHighSpeedEnabled() {
    this._highSpeedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpeedEnabledInput() {
    return this._highSpeedEnabled;
  }

  // isolation_enabled - computed: false, optional: true, required: false
  private _isolationEnabled?: boolean | cdktf.IResolvable; 
  public get isolationEnabled() {
    return this.getBooleanAttribute('isolation_enabled');
  }
  public set isolationEnabled(value: boolean | cdktf.IResolvable) {
    this._isolationEnabled = value;
  }
  public resetIsolationEnabled() {
    this._isolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationEnabledInput() {
    return this._isolationEnabled;
  }

  // link_negotiation - computed: false, optional: true, required: false
  private _linkNegotiation?: string; 
  public get linkNegotiation() {
    return this.getStringAttribute('link_negotiation');
  }
  public set linkNegotiation(value: string) {
    this._linkNegotiation = value;
  }
  public resetLinkNegotiation() {
    this._linkNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNegotiationInput() {
    return this._linkNegotiation;
  }

  // mac_allow_list - computed: false, optional: true, required: false
  private _macAllowList?: string[]; 
  public get macAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_allow_list'));
  }
  public set macAllowList(value: string[]) {
    this._macAllowList = value;
  }
  public resetMacAllowList() {
    this._macAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAllowListInput() {
    return this._macAllowList;
  }

  // mac_whitelist_limit - computed: false, optional: true, required: false
  private _macWhitelistLimit?: number; 
  public get macWhitelistLimit() {
    return this.getNumberAttribute('mac_whitelist_limit');
  }
  public set macWhitelistLimit(value: number) {
    this._macWhitelistLimit = value;
  }
  public resetMacWhitelistLimit() {
    this._macWhitelistLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macWhitelistLimitInput() {
    return this._macWhitelistLimit;
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

  // peer_sgt_capable - computed: false, optional: true, required: false
  private _peerSgtCapable?: boolean | cdktf.IResolvable; 
  public get peerSgtCapable() {
    return this.getBooleanAttribute('peer_sgt_capable');
  }
  public set peerSgtCapable(value: boolean | cdktf.IResolvable) {
    this._peerSgtCapable = value;
  }
  public resetPeerSgtCapable() {
    this._peerSgtCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSgtCapableInput() {
    return this._peerSgtCapable;
  }

  // poe_enabled - computed: false, optional: true, required: false
  private _poeEnabled?: boolean | cdktf.IResolvable; 
  public get poeEnabled() {
    return this.getBooleanAttribute('poe_enabled');
  }
  public set poeEnabled(value: boolean | cdktf.IResolvable) {
    this._poeEnabled = value;
  }
  public resetPoeEnabled() {
    this._poeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeEnabledInput() {
    return this._poeEnabled;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // port_schedule_id - computed: false, optional: true, required: false
  private _portScheduleId?: string; 
  public get portScheduleId() {
    return this.getStringAttribute('port_schedule_id');
  }
  public set portScheduleId(value: string) {
    this._portScheduleId = value;
  }
  public resetPortScheduleId() {
    this._portScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScheduleIdInput() {
    return this._portScheduleId;
  }

  // profile_enabled - computed: false, optional: true, required: false
  private _profileEnabled?: boolean | cdktf.IResolvable; 
  public get profileEnabled() {
    return this.getBooleanAttribute('profile_enabled');
  }
  public set profileEnabled(value: boolean | cdktf.IResolvable) {
    this._profileEnabled = value;
  }
  public resetProfileEnabled() {
    this._profileEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEnabledInput() {
    return this._profileEnabled;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_iname - computed: false, optional: true, required: false
  private _profileIname?: string; 
  public get profileIname() {
    return this.getStringAttribute('profile_iname');
  }
  public set profileIname(value: string) {
    this._profileIname = value;
  }
  public resetProfileIname() {
    this._profileIname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInameInput() {
    return this._profileIname;
  }

  // rstp_enabled - computed: false, optional: true, required: false
  private _rstpEnabled?: boolean | cdktf.IResolvable; 
  public get rstpEnabled() {
    return this.getBooleanAttribute('rstp_enabled');
  }
  public set rstpEnabled(value: boolean | cdktf.IResolvable) {
    this._rstpEnabled = value;
  }
  public resetRstpEnabled() {
    this._rstpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstpEnabledInput() {
    return this._rstpEnabled;
  }

  // sticky_mac_allow_list - computed: false, optional: true, required: false
  private _stickyMacAllowList?: string[]; 
  public get stickyMacAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('sticky_mac_allow_list'));
  }
  public set stickyMacAllowList(value: string[]) {
    this._stickyMacAllowList = value;
  }
  public resetStickyMacAllowList() {
    this._stickyMacAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMacAllowListInput() {
    return this._stickyMacAllowList;
  }

  // sticky_mac_allow_list_limit - computed: false, optional: true, required: false
  private _stickyMacAllowListLimit?: number; 
  public get stickyMacAllowListLimit() {
    return this.getNumberAttribute('sticky_mac_allow_list_limit');
  }
  public set stickyMacAllowListLimit(value: number) {
    this._stickyMacAllowListLimit = value;
  }
  public resetStickyMacAllowListLimit() {
    this._stickyMacAllowListLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMacAllowListLimitInput() {
    return this._stickyMacAllowListLimit;
  }

  // storm_control_enabled - computed: false, optional: true, required: false
  private _stormControlEnabled?: boolean | cdktf.IResolvable; 
  public get stormControlEnabled() {
    return this.getBooleanAttribute('storm_control_enabled');
  }
  public set stormControlEnabled(value: boolean | cdktf.IResolvable) {
    this._stormControlEnabled = value;
  }
  public resetStormControlEnabled() {
    this._stormControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlEnabledInput() {
    return this._stormControlEnabled;
  }

  // stp_guard - computed: false, optional: true, required: false
  private _stpGuard?: string; 
  public get stpGuard() {
    return this.getStringAttribute('stp_guard');
  }
  public set stpGuard(value: string) {
    this._stpGuard = value;
  }
  public resetStpGuard() {
    this._stpGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpGuardInput() {
    return this._stpGuard;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // udld - computed: false, optional: true, required: false
  private _udld?: string; 
  public get udld() {
    return this.getStringAttribute('udld');
  }
  public set udld(value: string) {
    this._udld = value;
  }
  public resetUdld() {
    this._udld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldInput() {
    return this._udld;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // voice_vlan - computed: false, optional: true, required: false
  private _voiceVlan?: number; 
  public get voiceVlan() {
    return this.getNumberAttribute('voice_vlan');
  }
  public set voiceVlan(value: number) {
    this._voiceVlan = value;
  }
  public resetVoiceVlan() {
    this._voiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanInput() {
    return this._voiceVlan;
  }
}

export class SwitchPortsItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchPortsItems[] | cdktf.IResolvable

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
  public get(index: number): SwitchPortsItemsOutputReference {
    return new SwitchPortsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports meraki_switch_ports}
*/
export class SwitchPorts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchPorts to import
  * @param importFromId The id of the existing SwitchPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_ports meraki_switch_ports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchPortsConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchPortsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_ports',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SwitchPortsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchPortsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(switchPortsItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchPortsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchPortsItemsList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
