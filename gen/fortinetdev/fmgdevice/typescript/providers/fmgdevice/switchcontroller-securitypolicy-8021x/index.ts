// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSecuritypolicy8021XConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#auth_fail_vlan SwitchcontrollerSecuritypolicy8021X#auth_fail_vlan}
  */
  readonly authFailVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#auth_fail_vlan_id SwitchcontrollerSecuritypolicy8021X#auth_fail_vlan_id}
  */
  readonly authFailVlanId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#auth_order SwitchcontrollerSecuritypolicy8021X#auth_order}
  */
  readonly authOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#auth_priority SwitchcontrollerSecuritypolicy8021X#auth_priority}
  */
  readonly authPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#authserver_timeout_period SwitchcontrollerSecuritypolicy8021X#authserver_timeout_period}
  */
  readonly authserverTimeoutPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#authserver_timeout_tagged SwitchcontrollerSecuritypolicy8021X#authserver_timeout_tagged}
  */
  readonly authserverTimeoutTagged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#authserver_timeout_tagged_vlanid SwitchcontrollerSecuritypolicy8021X#authserver_timeout_tagged_vlanid}
  */
  readonly authserverTimeoutTaggedVlanid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#authserver_timeout_vlan SwitchcontrollerSecuritypolicy8021X#authserver_timeout_vlan}
  */
  readonly authserverTimeoutVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#authserver_timeout_vlanid SwitchcontrollerSecuritypolicy8021X#authserver_timeout_vlanid}
  */
  readonly authserverTimeoutVlanid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#dacl SwitchcontrollerSecuritypolicy8021X#dacl}
  */
  readonly dacl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#device_name SwitchcontrollerSecuritypolicy8021X#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#device_vdom SwitchcontrollerSecuritypolicy8021X#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#eap_auto_untagged_vlans SwitchcontrollerSecuritypolicy8021X#eap_auto_untagged_vlans}
  */
  readonly eapAutoUntaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#eap_passthru SwitchcontrollerSecuritypolicy8021X#eap_passthru}
  */
  readonly eapPassthru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#framevid_apply SwitchcontrollerSecuritypolicy8021X#framevid_apply}
  */
  readonly framevidApply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#guest_auth_delay SwitchcontrollerSecuritypolicy8021X#guest_auth_delay}
  */
  readonly guestAuthDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#guest_vlan SwitchcontrollerSecuritypolicy8021X#guest_vlan}
  */
  readonly guestVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#guest_vlan_id SwitchcontrollerSecuritypolicy8021X#guest_vlan_id}
  */
  readonly guestVlanId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#id SwitchcontrollerSecuritypolicy8021X#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#mac_auth_bypass SwitchcontrollerSecuritypolicy8021X#mac_auth_bypass}
  */
  readonly macAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#name SwitchcontrollerSecuritypolicy8021X#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#open_auth SwitchcontrollerSecuritypolicy8021X#open_auth}
  */
  readonly openAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#policy_type SwitchcontrollerSecuritypolicy8021X#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#radius_timeout_overwrite SwitchcontrollerSecuritypolicy8021X#radius_timeout_overwrite}
  */
  readonly radiusTimeoutOverwrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#security_mode SwitchcontrollerSecuritypolicy8021X#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#user_group SwitchcontrollerSecuritypolicy8021X#user_group}
  */
  readonly userGroup?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x fmgdevice_switchcontroller_securitypolicy_8021x}
*/
export class SwitchcontrollerSecuritypolicy8021X extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_securitypolicy_8021x";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSecuritypolicy8021X resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSecuritypolicy8021X to import
  * @param importFromId The id of the existing SwitchcontrollerSecuritypolicy8021X that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSecuritypolicy8021X to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_securitypolicy_8021x", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_securitypolicy_8021x fmgdevice_switchcontroller_securitypolicy_8021x} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSecuritypolicy8021XConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSecuritypolicy8021XConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_securitypolicy_8021x',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authFailVlan = config.authFailVlan;
    this._authFailVlanId = config.authFailVlanId;
    this._authOrder = config.authOrder;
    this._authPriority = config.authPriority;
    this._authserverTimeoutPeriod = config.authserverTimeoutPeriod;
    this._authserverTimeoutTagged = config.authserverTimeoutTagged;
    this._authserverTimeoutTaggedVlanid = config.authserverTimeoutTaggedVlanid;
    this._authserverTimeoutVlan = config.authserverTimeoutVlan;
    this._authserverTimeoutVlanid = config.authserverTimeoutVlanid;
    this._dacl = config.dacl;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._eapAutoUntaggedVlans = config.eapAutoUntaggedVlans;
    this._eapPassthru = config.eapPassthru;
    this._framevidApply = config.framevidApply;
    this._guestAuthDelay = config.guestAuthDelay;
    this._guestVlan = config.guestVlan;
    this._guestVlanId = config.guestVlanId;
    this._id = config.id;
    this._macAuthBypass = config.macAuthBypass;
    this._name = config.name;
    this._openAuth = config.openAuth;
    this._policyType = config.policyType;
    this._radiusTimeoutOverwrite = config.radiusTimeoutOverwrite;
    this._securityMode = config.securityMode;
    this._userGroup = config.userGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_fail_vlan - computed: true, optional: true, required: false
  private _authFailVlan?: string; 
  public get authFailVlan() {
    return this.getStringAttribute('auth_fail_vlan');
  }
  public set authFailVlan(value: string) {
    this._authFailVlan = value;
  }
  public resetAuthFailVlan() {
    this._authFailVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanInput() {
    return this._authFailVlan;
  }

  // auth_fail_vlan_id - computed: true, optional: true, required: false
  private _authFailVlanId?: string[]; 
  public get authFailVlanId() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_fail_vlan_id'));
  }
  public set authFailVlanId(value: string[]) {
    this._authFailVlanId = value;
  }
  public resetAuthFailVlanId() {
    this._authFailVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanIdInput() {
    return this._authFailVlanId;
  }

  // auth_order - computed: false, optional: true, required: false
  private _authOrder?: string; 
  public get authOrder() {
    return this.getStringAttribute('auth_order');
  }
  public set authOrder(value: string) {
    this._authOrder = value;
  }
  public resetAuthOrder() {
    this._authOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOrderInput() {
    return this._authOrder;
  }

  // auth_priority - computed: false, optional: true, required: false
  private _authPriority?: string; 
  public get authPriority() {
    return this.getStringAttribute('auth_priority');
  }
  public set authPriority(value: string) {
    this._authPriority = value;
  }
  public resetAuthPriority() {
    this._authPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPriorityInput() {
    return this._authPriority;
  }

  // authserver_timeout_period - computed: false, optional: true, required: false
  private _authserverTimeoutPeriod?: number; 
  public get authserverTimeoutPeriod() {
    return this.getNumberAttribute('authserver_timeout_period');
  }
  public set authserverTimeoutPeriod(value: number) {
    this._authserverTimeoutPeriod = value;
  }
  public resetAuthserverTimeoutPeriod() {
    this._authserverTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutPeriodInput() {
    return this._authserverTimeoutPeriod;
  }

  // authserver_timeout_tagged - computed: false, optional: true, required: false
  private _authserverTimeoutTagged?: string; 
  public get authserverTimeoutTagged() {
    return this.getStringAttribute('authserver_timeout_tagged');
  }
  public set authserverTimeoutTagged(value: string) {
    this._authserverTimeoutTagged = value;
  }
  public resetAuthserverTimeoutTagged() {
    this._authserverTimeoutTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedInput() {
    return this._authserverTimeoutTagged;
  }

  // authserver_timeout_tagged_vlanid - computed: true, optional: true, required: false
  private _authserverTimeoutTaggedVlanid?: string[]; 
  public get authserverTimeoutTaggedVlanid() {
    return cdktf.Fn.tolist(this.getListAttribute('authserver_timeout_tagged_vlanid'));
  }
  public set authserverTimeoutTaggedVlanid(value: string[]) {
    this._authserverTimeoutTaggedVlanid = value;
  }
  public resetAuthserverTimeoutTaggedVlanid() {
    this._authserverTimeoutTaggedVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedVlanidInput() {
    return this._authserverTimeoutTaggedVlanid;
  }

  // authserver_timeout_vlan - computed: true, optional: true, required: false
  private _authserverTimeoutVlan?: string; 
  public get authserverTimeoutVlan() {
    return this.getStringAttribute('authserver_timeout_vlan');
  }
  public set authserverTimeoutVlan(value: string) {
    this._authserverTimeoutVlan = value;
  }
  public resetAuthserverTimeoutVlan() {
    this._authserverTimeoutVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanInput() {
    return this._authserverTimeoutVlan;
  }

  // authserver_timeout_vlanid - computed: true, optional: true, required: false
  private _authserverTimeoutVlanid?: string[]; 
  public get authserverTimeoutVlanid() {
    return cdktf.Fn.tolist(this.getListAttribute('authserver_timeout_vlanid'));
  }
  public set authserverTimeoutVlanid(value: string[]) {
    this._authserverTimeoutVlanid = value;
  }
  public resetAuthserverTimeoutVlanid() {
    this._authserverTimeoutVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanidInput() {
    return this._authserverTimeoutVlanid;
  }

  // dacl - computed: true, optional: true, required: false
  private _dacl?: string; 
  public get dacl() {
    return this.getStringAttribute('dacl');
  }
  public set dacl(value: string) {
    this._dacl = value;
  }
  public resetDacl() {
    this._dacl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daclInput() {
    return this._dacl;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // eap_auto_untagged_vlans - computed: true, optional: true, required: false
  private _eapAutoUntaggedVlans?: string; 
  public get eapAutoUntaggedVlans() {
    return this.getStringAttribute('eap_auto_untagged_vlans');
  }
  public set eapAutoUntaggedVlans(value: string) {
    this._eapAutoUntaggedVlans = value;
  }
  public resetEapAutoUntaggedVlans() {
    this._eapAutoUntaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAutoUntaggedVlansInput() {
    return this._eapAutoUntaggedVlans;
  }

  // eap_passthru - computed: true, optional: true, required: false
  private _eapPassthru?: string; 
  public get eapPassthru() {
    return this.getStringAttribute('eap_passthru');
  }
  public set eapPassthru(value: string) {
    this._eapPassthru = value;
  }
  public resetEapPassthru() {
    this._eapPassthru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPassthruInput() {
    return this._eapPassthru;
  }

  // framevid_apply - computed: true, optional: true, required: false
  private _framevidApply?: string; 
  public get framevidApply() {
    return this.getStringAttribute('framevid_apply');
  }
  public set framevidApply(value: string) {
    this._framevidApply = value;
  }
  public resetFramevidApply() {
    this._framevidApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framevidApplyInput() {
    return this._framevidApply;
  }

  // guest_auth_delay - computed: true, optional: true, required: false
  private _guestAuthDelay?: number; 
  public get guestAuthDelay() {
    return this.getNumberAttribute('guest_auth_delay');
  }
  public set guestAuthDelay(value: number) {
    this._guestAuthDelay = value;
  }
  public resetGuestAuthDelay() {
    this._guestAuthDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthDelayInput() {
    return this._guestAuthDelay;
  }

  // guest_vlan - computed: true, optional: true, required: false
  private _guestVlan?: string; 
  public get guestVlan() {
    return this.getStringAttribute('guest_vlan');
  }
  public set guestVlan(value: string) {
    this._guestVlan = value;
  }
  public resetGuestVlan() {
    this._guestVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanInput() {
    return this._guestVlan;
  }

  // guest_vlan_id - computed: true, optional: true, required: false
  private _guestVlanId?: string[]; 
  public get guestVlanId() {
    return cdktf.Fn.tolist(this.getListAttribute('guest_vlan_id'));
  }
  public set guestVlanId(value: string[]) {
    this._guestVlanId = value;
  }
  public resetGuestVlanId() {
    this._guestVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanIdInput() {
    return this._guestVlanId;
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

  // mac_auth_bypass - computed: true, optional: true, required: false
  private _macAuthBypass?: string; 
  public get macAuthBypass() {
    return this.getStringAttribute('mac_auth_bypass');
  }
  public set macAuthBypass(value: string) {
    this._macAuthBypass = value;
  }
  public resetMacAuthBypass() {
    this._macAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthBypassInput() {
    return this._macAuthBypass;
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

  // open_auth - computed: true, optional: true, required: false
  private _openAuth?: string; 
  public get openAuth() {
    return this.getStringAttribute('open_auth');
  }
  public set openAuth(value: string) {
    this._openAuth = value;
  }
  public resetOpenAuth() {
    this._openAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAuthInput() {
    return this._openAuth;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // radius_timeout_overwrite - computed: true, optional: true, required: false
  private _radiusTimeoutOverwrite?: string; 
  public get radiusTimeoutOverwrite() {
    return this.getStringAttribute('radius_timeout_overwrite');
  }
  public set radiusTimeoutOverwrite(value: string) {
    this._radiusTimeoutOverwrite = value;
  }
  public resetRadiusTimeoutOverwrite() {
    this._radiusTimeoutOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTimeoutOverwriteInput() {
    return this._radiusTimeoutOverwrite;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // user_group - computed: true, optional: true, required: false
  private _userGroup?: string[]; 
  public get userGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('user_group'));
  }
  public set userGroup(value: string[]) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_fail_vlan: cdktf.stringToTerraform(this._authFailVlan),
      auth_fail_vlan_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authFailVlanId),
      auth_order: cdktf.stringToTerraform(this._authOrder),
      auth_priority: cdktf.stringToTerraform(this._authPriority),
      authserver_timeout_period: cdktf.numberToTerraform(this._authserverTimeoutPeriod),
      authserver_timeout_tagged: cdktf.stringToTerraform(this._authserverTimeoutTagged),
      authserver_timeout_tagged_vlanid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authserverTimeoutTaggedVlanid),
      authserver_timeout_vlan: cdktf.stringToTerraform(this._authserverTimeoutVlan),
      authserver_timeout_vlanid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authserverTimeoutVlanid),
      dacl: cdktf.stringToTerraform(this._dacl),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      eap_auto_untagged_vlans: cdktf.stringToTerraform(this._eapAutoUntaggedVlans),
      eap_passthru: cdktf.stringToTerraform(this._eapPassthru),
      framevid_apply: cdktf.stringToTerraform(this._framevidApply),
      guest_auth_delay: cdktf.numberToTerraform(this._guestAuthDelay),
      guest_vlan: cdktf.stringToTerraform(this._guestVlan),
      guest_vlan_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guestVlanId),
      id: cdktf.stringToTerraform(this._id),
      mac_auth_bypass: cdktf.stringToTerraform(this._macAuthBypass),
      name: cdktf.stringToTerraform(this._name),
      open_auth: cdktf.stringToTerraform(this._openAuth),
      policy_type: cdktf.stringToTerraform(this._policyType),
      radius_timeout_overwrite: cdktf.stringToTerraform(this._radiusTimeoutOverwrite),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      user_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_fail_vlan: {
        value: cdktf.stringToHclTerraform(this._authFailVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_fail_vlan_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authFailVlanId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_order: {
        value: cdktf.stringToHclTerraform(this._authOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_priority: {
        value: cdktf.stringToHclTerraform(this._authPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_period: {
        value: cdktf.numberToHclTerraform(this._authserverTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authserver_timeout_tagged: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutTagged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_tagged_vlanid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authserverTimeoutTaggedVlanid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authserver_timeout_vlan: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_vlanid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authserverTimeoutVlanid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dacl: {
        value: cdktf.stringToHclTerraform(this._dacl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_auto_untagged_vlans: {
        value: cdktf.stringToHclTerraform(this._eapAutoUntaggedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_passthru: {
        value: cdktf.stringToHclTerraform(this._eapPassthru),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framevid_apply: {
        value: cdktf.stringToHclTerraform(this._framevidApply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_auth_delay: {
        value: cdktf.numberToHclTerraform(this._guestAuthDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guest_vlan: {
        value: cdktf.stringToHclTerraform(this._guestVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_vlan_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guestVlanId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._macAuthBypass),
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
      open_auth: {
        value: cdktf.stringToHclTerraform(this._openAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_timeout_overwrite: {
        value: cdktf.stringToHclTerraform(this._radiusTimeoutOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
