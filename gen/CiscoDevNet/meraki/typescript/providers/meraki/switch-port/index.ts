// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of a custom access policy to configure on the switch port. Only applicable when `accessPolicyType` is `Custom access policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#access_policy_number SwitchPort#access_policy_number}
  */
  readonly accessPolicyNumber?: number;
  /**
  * The type of the access policy of the switch port. Only applicable to access ports. Can be one of `Open`, `Custom access policy`, `MAC allow list` or `Sticky MAC allow list`.
  *   - Choices: `Custom access policy`, `MAC allow list`, `Open`, `Sticky MAC allow list`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#access_policy_type SwitchPort#access_policy_type}
  */
  readonly accessPolicyType?: string;
  /**
  * The adaptive policy group ID that will be used to tag traffic through this switch port. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API. Cannot be applied to a port on a switch bound to profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#adaptive_policy_group_id SwitchPort#adaptive_policy_group_id}
  */
  readonly adaptivePolicyGroupId?: string;
  /**
  * The VLANs allowed on the switch port. Only applicable to trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#allowed_vlans SwitchPort#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#dai_trusted SwitchPort#dai_trusted}
  */
  readonly daiTrusted?: boolean | cdktf.IResolvable;
  /**
  * The Energy Efficient Ethernet status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#dot3az_enabled SwitchPort#dot3az_enabled}
  */
  readonly dot3AzEnabled?: boolean | cdktf.IResolvable;
  /**
  * The status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#enabled SwitchPort#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#flexible_stacking_enabled SwitchPort#flexible_stacking_enabled}
  */
  readonly flexibleStackingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The isolation status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#isolation_enabled SwitchPort#isolation_enabled}
  */
  readonly isolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The link speed for the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#link_negotiation SwitchPort#link_negotiation}
  */
  readonly linkNegotiation?: string;
  /**
  * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when `accessPolicyType` is `MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#mac_allow_list SwitchPort#mac_allow_list}
  */
  readonly macAllowList?: string[];
  /**
  * The maximum number of MAC addresses for regular MAC allow list. Only applicable when `accessPolicyType` is `MAC allow list`. Note: Config only supported on verions greater than ms18 only for classic switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#mac_whitelist_limit SwitchPort#mac_whitelist_limit}
  */
  readonly macWhitelistLimit?: number;
  /**
  * The name of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#name SwitchPort#name}
  */
  readonly name?: string;
  /**
  * If true, Peer SGT is enabled for traffic through this switch port. Applicable to trunk port only, not access port. Cannot be applied to a port on a switch bound to profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#peer_sgt_capable SwitchPort#peer_sgt_capable}
  */
  readonly peerSgtCapable?: boolean | cdktf.IResolvable;
  /**
  * The PoE status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#poe_enabled SwitchPort#poe_enabled}
  */
  readonly poeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#port_id SwitchPort#port_id}
  */
  readonly portId: string;
  /**
  * The ID of the port schedule. A value of null will clear the port schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#port_schedule_id SwitchPort#port_schedule_id}
  */
  readonly portScheduleId?: string;
  /**
  * When enabled, override this port`s configuration with a port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#profile_enabled SwitchPort#profile_enabled}
  */
  readonly profileEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the ID of the port profile used to override the port`s configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#profile_id SwitchPort#profile_id}
  */
  readonly profileId?: string;
  /**
  * When enabled, the IName of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#profile_iname SwitchPort#profile_iname}
  */
  readonly profileIname?: string;
  /**
  * The rapid spanning tree protocol status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#rstp_enabled SwitchPort#rstp_enabled}
  */
  readonly rstpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#serial SwitchPort#serial}
  */
  readonly serial: string;
  /**
  * The initial list of MAC addresses for sticky Mac allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#sticky_mac_allow_list SwitchPort#sticky_mac_allow_list}
  */
  readonly stickyMacAllowList?: string[];
  /**
  * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#sticky_mac_allow_list_limit SwitchPort#sticky_mac_allow_list_limit}
  */
  readonly stickyMacAllowListLimit?: number;
  /**
  * The storm control status of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#storm_control_enabled SwitchPort#storm_control_enabled}
  */
  readonly stormControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The state of the STP guard (`disabled`, `root guard`, `bpdu guard` or `loop guard`).
  *   - Choices: `bpdu guard`, `disabled`, `loop guard`, `root guard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#stp_guard SwitchPort#stp_guard}
  */
  readonly stpGuard?: string;
  /**
  * The list of tags of the switch port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#tags SwitchPort#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the switch port (`trunk`, `access` or `stack`).
  *   - Choices: `access`, `stack`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#type SwitchPort#type}
  */
  readonly type?: string;
  /**
  * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
  *   - Choices: `Alert only`, `Enforce`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#udld SwitchPort#udld}
  */
  readonly udld?: string;
  /**
  * The VLAN of the switch port. For a trunk port, this is the native VLAN. A null value will clear the value set for trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#vlan SwitchPort#vlan}
  */
  readonly vlan?: number;
  /**
  * The voice VLAN of the switch port. Only applicable to access ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#voice_vlan SwitchPort#voice_vlan}
  */
  readonly voiceVlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port meraki_switch_port}
*/
export class SwitchPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchPort to import
  * @param importFromId The id of the existing SwitchPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_port meraki_switch_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchPortConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchPortConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_port',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicyNumber = config.accessPolicyNumber;
    this._accessPolicyType = config.accessPolicyType;
    this._adaptivePolicyGroupId = config.adaptivePolicyGroupId;
    this._allowedVlans = config.allowedVlans;
    this._daiTrusted = config.daiTrusted;
    this._dot3AzEnabled = config.dot3AzEnabled;
    this._enabled = config.enabled;
    this._flexibleStackingEnabled = config.flexibleStackingEnabled;
    this._isolationEnabled = config.isolationEnabled;
    this._linkNegotiation = config.linkNegotiation;
    this._macAllowList = config.macAllowList;
    this._macWhitelistLimit = config.macWhitelistLimit;
    this._name = config.name;
    this._peerSgtCapable = config.peerSgtCapable;
    this._poeEnabled = config.poeEnabled;
    this._portId = config.portId;
    this._portScheduleId = config.portScheduleId;
    this._profileEnabled = config.profileEnabled;
    this._profileId = config.profileId;
    this._profileIname = config.profileIname;
    this._rstpEnabled = config.rstpEnabled;
    this._serial = config.serial;
    this._stickyMacAllowList = config.stickyMacAllowList;
    this._stickyMacAllowListLimit = config.stickyMacAllowListLimit;
    this._stormControlEnabled = config.stormControlEnabled;
    this._stpGuard = config.stpGuard;
    this._tags = config.tags;
    this._type = config.type;
    this._udld = config.udld;
    this._vlan = config.vlan;
    this._voiceVlan = config.voiceVlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_number: cdktf.numberToTerraform(this._accessPolicyNumber),
      access_policy_type: cdktf.stringToTerraform(this._accessPolicyType),
      adaptive_policy_group_id: cdktf.stringToTerraform(this._adaptivePolicyGroupId),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      dai_trusted: cdktf.booleanToTerraform(this._daiTrusted),
      dot3az_enabled: cdktf.booleanToTerraform(this._dot3AzEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      flexible_stacking_enabled: cdktf.booleanToTerraform(this._flexibleStackingEnabled),
      isolation_enabled: cdktf.booleanToTerraform(this._isolationEnabled),
      link_negotiation: cdktf.stringToTerraform(this._linkNegotiation),
      mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAllowList),
      mac_whitelist_limit: cdktf.numberToTerraform(this._macWhitelistLimit),
      name: cdktf.stringToTerraform(this._name),
      peer_sgt_capable: cdktf.booleanToTerraform(this._peerSgtCapable),
      poe_enabled: cdktf.booleanToTerraform(this._poeEnabled),
      port_id: cdktf.stringToTerraform(this._portId),
      port_schedule_id: cdktf.stringToTerraform(this._portScheduleId),
      profile_enabled: cdktf.booleanToTerraform(this._profileEnabled),
      profile_id: cdktf.stringToTerraform(this._profileId),
      profile_iname: cdktf.stringToTerraform(this._profileIname),
      rstp_enabled: cdktf.booleanToTerraform(this._rstpEnabled),
      serial: cdktf.stringToTerraform(this._serial),
      sticky_mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stickyMacAllowList),
      sticky_mac_allow_list_limit: cdktf.numberToTerraform(this._stickyMacAllowListLimit),
      storm_control_enabled: cdktf.booleanToTerraform(this._stormControlEnabled),
      stp_guard: cdktf.stringToTerraform(this._stpGuard),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      udld: cdktf.stringToTerraform(this._udld),
      vlan: cdktf.numberToTerraform(this._vlan),
      voice_vlan: cdktf.numberToTerraform(this._voiceVlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_number: {
        value: cdktf.numberToHclTerraform(this._accessPolicyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_policy_type: {
        value: cdktf.stringToHclTerraform(this._accessPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_policy_group_id: {
        value: cdktf.stringToHclTerraform(this._adaptivePolicyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dai_trusted: {
        value: cdktf.booleanToHclTerraform(this._daiTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot3az_enabled: {
        value: cdktf.booleanToHclTerraform(this._dot3AzEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flexible_stacking_enabled: {
        value: cdktf.booleanToHclTerraform(this._flexibleStackingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._isolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_negotiation: {
        value: cdktf.stringToHclTerraform(this._linkNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAllowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mac_whitelist_limit: {
        value: cdktf.numberToHclTerraform(this._macWhitelistLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_sgt_capable: {
        value: cdktf.booleanToHclTerraform(this._peerSgtCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      poe_enabled: {
        value: cdktf.booleanToHclTerraform(this._poeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_schedule_id: {
        value: cdktf.stringToHclTerraform(this._portScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_enabled: {
        value: cdktf.booleanToHclTerraform(this._profileEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_iname: {
        value: cdktf.stringToHclTerraform(this._profileIname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rstp_enabled: {
        value: cdktf.booleanToHclTerraform(this._rstpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sticky_mac_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stickyMacAllowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sticky_mac_allow_list_limit: {
        value: cdktf.numberToHclTerraform(this._stickyMacAllowListLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._stormControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stp_guard: {
        value: cdktf.stringToHclTerraform(this._stpGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udld: {
        value: cdktf.stringToHclTerraform(this._udld),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      voice_vlan: {
        value: cdktf.numberToHclTerraform(this._voiceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
