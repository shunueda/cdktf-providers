// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailoverSetupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#enable FailoverSetup#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#failed_interfaces_threshold FailoverSetup#failed_interfaces_threshold}
  */
  readonly failedInterfacesThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#failed_interfaces_threshold_unit FailoverSetup#failed_interfaces_threshold_unit}
  */
  readonly failedInterfacesThresholdUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#hex_key FailoverSetup#hex_key}
  */
  readonly hexKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#http_replication FailoverSetup#http_replication}
  */
  readonly httpReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#id FailoverSetup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#interface_hold_time FailoverSetup#interface_hold_time}
  */
  readonly interfaceHoldTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#ipsec_key FailoverSetup#ipsec_key}
  */
  readonly ipsecKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_failover_name FailoverSetup#lan_failover_name}
  */
  readonly lanFailoverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_interface_hw_id FailoverSetup#lan_interface_hw_id}
  */
  readonly lanInterfaceHwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_net_mask FailoverSetup#lan_net_mask}
  */
  readonly lanNetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_preferred_role FailoverSetup#lan_preferred_role}
  */
  readonly lanPreferredRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_primary_ip FailoverSetup#lan_primary_ip}
  */
  readonly lanPrimaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#lan_secondary_ip FailoverSetup#lan_secondary_ip}
  */
  readonly lanSecondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#monitored_poll_time FailoverSetup#monitored_poll_time}
  */
  readonly monitoredPollTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#monitored_poll_time_unit FailoverSetup#monitored_poll_time_unit}
  */
  readonly monitoredPollTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#replication_rate FailoverSetup#replication_rate}
  */
  readonly replicationRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#shared_key FailoverSetup#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#state_failover_name FailoverSetup#state_failover_name}
  */
  readonly stateFailoverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#state_interface_hw_id FailoverSetup#state_interface_hw_id}
  */
  readonly stateInterfaceHwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#state_net_mask FailoverSetup#state_net_mask}
  */
  readonly stateNetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#state_primary_ip FailoverSetup#state_primary_ip}
  */
  readonly statePrimaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#state_secondary_ip FailoverSetup#state_secondary_ip}
  */
  readonly stateSecondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#unit_hold_time FailoverSetup#unit_hold_time}
  */
  readonly unitHoldTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#unit_hold_time_unit FailoverSetup#unit_hold_time_unit}
  */
  readonly unitHoldTimeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#unit_poll_time FailoverSetup#unit_poll_time}
  */
  readonly unitPollTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#unit_poll_time_unit FailoverSetup#unit_poll_time_unit}
  */
  readonly unitPollTimeUnit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup ciscoasa_failover_setup}
*/
export class FailoverSetup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_failover_setup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailoverSetup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailoverSetup to import
  * @param importFromId The id of the existing FailoverSetup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailoverSetup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_failover_setup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_setup ciscoasa_failover_setup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverSetupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FailoverSetupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_failover_setup',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._failedInterfacesThreshold = config.failedInterfacesThreshold;
    this._failedInterfacesThresholdUnit = config.failedInterfacesThresholdUnit;
    this._hexKey = config.hexKey;
    this._httpReplication = config.httpReplication;
    this._id = config.id;
    this._interfaceHoldTime = config.interfaceHoldTime;
    this._ipsecKey = config.ipsecKey;
    this._lanFailoverName = config.lanFailoverName;
    this._lanInterfaceHwId = config.lanInterfaceHwId;
    this._lanNetMask = config.lanNetMask;
    this._lanPreferredRole = config.lanPreferredRole;
    this._lanPrimaryIp = config.lanPrimaryIp;
    this._lanSecondaryIp = config.lanSecondaryIp;
    this._monitoredPollTime = config.monitoredPollTime;
    this._monitoredPollTimeUnit = config.monitoredPollTimeUnit;
    this._replicationRate = config.replicationRate;
    this._sharedKey = config.sharedKey;
    this._stateFailoverName = config.stateFailoverName;
    this._stateInterfaceHwId = config.stateInterfaceHwId;
    this._stateNetMask = config.stateNetMask;
    this._statePrimaryIp = config.statePrimaryIp;
    this._stateSecondaryIp = config.stateSecondaryIp;
    this._unitHoldTime = config.unitHoldTime;
    this._unitHoldTimeUnit = config.unitHoldTimeUnit;
    this._unitPollTime = config.unitPollTime;
    this._unitPollTimeUnit = config.unitPollTimeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // failed_interfaces_threshold - computed: false, optional: true, required: false
  private _failedInterfacesThreshold?: string; 
  public get failedInterfacesThreshold() {
    return this.getStringAttribute('failed_interfaces_threshold');
  }
  public set failedInterfacesThreshold(value: string) {
    this._failedInterfacesThreshold = value;
  }
  public resetFailedInterfacesThreshold() {
    this._failedInterfacesThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInterfacesThresholdInput() {
    return this._failedInterfacesThreshold;
  }

  // failed_interfaces_threshold_unit - computed: false, optional: true, required: false
  private _failedInterfacesThresholdUnit?: string; 
  public get failedInterfacesThresholdUnit() {
    return this.getStringAttribute('failed_interfaces_threshold_unit');
  }
  public set failedInterfacesThresholdUnit(value: string) {
    this._failedInterfacesThresholdUnit = value;
  }
  public resetFailedInterfacesThresholdUnit() {
    this._failedInterfacesThresholdUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInterfacesThresholdUnitInput() {
    return this._failedInterfacesThresholdUnit;
  }

  // hex_key - computed: false, optional: true, required: false
  private _hexKey?: boolean | cdktf.IResolvable; 
  public get hexKey() {
    return this.getBooleanAttribute('hex_key');
  }
  public set hexKey(value: boolean | cdktf.IResolvable) {
    this._hexKey = value;
  }
  public resetHexKey() {
    this._hexKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexKeyInput() {
    return this._hexKey;
  }

  // http_replication - computed: false, optional: true, required: false
  private _httpReplication?: boolean | cdktf.IResolvable; 
  public get httpReplication() {
    return this.getBooleanAttribute('http_replication');
  }
  public set httpReplication(value: boolean | cdktf.IResolvable) {
    this._httpReplication = value;
  }
  public resetHttpReplication() {
    this._httpReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReplicationInput() {
    return this._httpReplication;
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

  // interface_hold_time - computed: false, optional: true, required: false
  private _interfaceHoldTime?: string; 
  public get interfaceHoldTime() {
    return this.getStringAttribute('interface_hold_time');
  }
  public set interfaceHoldTime(value: string) {
    this._interfaceHoldTime = value;
  }
  public resetInterfaceHoldTime() {
    this._interfaceHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceHoldTimeInput() {
    return this._interfaceHoldTime;
  }

  // ipsec_key - computed: false, optional: true, required: false
  private _ipsecKey?: string; 
  public get ipsecKey() {
    return this.getStringAttribute('ipsec_key');
  }
  public set ipsecKey(value: string) {
    this._ipsecKey = value;
  }
  public resetIpsecKey() {
    this._ipsecKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecKeyInput() {
    return this._ipsecKey;
  }

  // lan_failover_name - computed: false, optional: true, required: false
  private _lanFailoverName?: string; 
  public get lanFailoverName() {
    return this.getStringAttribute('lan_failover_name');
  }
  public set lanFailoverName(value: string) {
    this._lanFailoverName = value;
  }
  public resetLanFailoverName() {
    this._lanFailoverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanFailoverNameInput() {
    return this._lanFailoverName;
  }

  // lan_interface_hw_id - computed: false, optional: true, required: false
  private _lanInterfaceHwId?: string; 
  public get lanInterfaceHwId() {
    return this.getStringAttribute('lan_interface_hw_id');
  }
  public set lanInterfaceHwId(value: string) {
    this._lanInterfaceHwId = value;
  }
  public resetLanInterfaceHwId() {
    this._lanInterfaceHwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceHwIdInput() {
    return this._lanInterfaceHwId;
  }

  // lan_net_mask - computed: false, optional: true, required: false
  private _lanNetMask?: string; 
  public get lanNetMask() {
    return this.getStringAttribute('lan_net_mask');
  }
  public set lanNetMask(value: string) {
    this._lanNetMask = value;
  }
  public resetLanNetMask() {
    this._lanNetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanNetMaskInput() {
    return this._lanNetMask;
  }

  // lan_preferred_role - computed: false, optional: true, required: false
  private _lanPreferredRole?: string; 
  public get lanPreferredRole() {
    return this.getStringAttribute('lan_preferred_role');
  }
  public set lanPreferredRole(value: string) {
    this._lanPreferredRole = value;
  }
  public resetLanPreferredRole() {
    this._lanPreferredRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPreferredRoleInput() {
    return this._lanPreferredRole;
  }

  // lan_primary_ip - computed: false, optional: true, required: false
  private _lanPrimaryIp?: string; 
  public get lanPrimaryIp() {
    return this.getStringAttribute('lan_primary_ip');
  }
  public set lanPrimaryIp(value: string) {
    this._lanPrimaryIp = value;
  }
  public resetLanPrimaryIp() {
    this._lanPrimaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPrimaryIpInput() {
    return this._lanPrimaryIp;
  }

  // lan_secondary_ip - computed: false, optional: true, required: false
  private _lanSecondaryIp?: string; 
  public get lanSecondaryIp() {
    return this.getStringAttribute('lan_secondary_ip');
  }
  public set lanSecondaryIp(value: string) {
    this._lanSecondaryIp = value;
  }
  public resetLanSecondaryIp() {
    this._lanSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSecondaryIpInput() {
    return this._lanSecondaryIp;
  }

  // monitored_poll_time - computed: false, optional: true, required: false
  private _monitoredPollTime?: string; 
  public get monitoredPollTime() {
    return this.getStringAttribute('monitored_poll_time');
  }
  public set monitoredPollTime(value: string) {
    this._monitoredPollTime = value;
  }
  public resetMonitoredPollTime() {
    this._monitoredPollTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredPollTimeInput() {
    return this._monitoredPollTime;
  }

  // monitored_poll_time_unit - computed: false, optional: true, required: false
  private _monitoredPollTimeUnit?: string; 
  public get monitoredPollTimeUnit() {
    return this.getStringAttribute('monitored_poll_time_unit');
  }
  public set monitoredPollTimeUnit(value: string) {
    this._monitoredPollTimeUnit = value;
  }
  public resetMonitoredPollTimeUnit() {
    this._monitoredPollTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredPollTimeUnitInput() {
    return this._monitoredPollTimeUnit;
  }

  // replication_rate - computed: false, optional: true, required: false
  private _replicationRate?: number; 
  public get replicationRate() {
    return this.getNumberAttribute('replication_rate');
  }
  public set replicationRate(value: number) {
    this._replicationRate = value;
  }
  public resetReplicationRate() {
    this._replicationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRateInput() {
    return this._replicationRate;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // state_failover_name - computed: false, optional: true, required: false
  private _stateFailoverName?: string; 
  public get stateFailoverName() {
    return this.getStringAttribute('state_failover_name');
  }
  public set stateFailoverName(value: string) {
    this._stateFailoverName = value;
  }
  public resetStateFailoverName() {
    this._stateFailoverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateFailoverNameInput() {
    return this._stateFailoverName;
  }

  // state_interface_hw_id - computed: false, optional: true, required: false
  private _stateInterfaceHwId?: string; 
  public get stateInterfaceHwId() {
    return this.getStringAttribute('state_interface_hw_id');
  }
  public set stateInterfaceHwId(value: string) {
    this._stateInterfaceHwId = value;
  }
  public resetStateInterfaceHwId() {
    this._stateInterfaceHwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInterfaceHwIdInput() {
    return this._stateInterfaceHwId;
  }

  // state_net_mask - computed: false, optional: true, required: false
  private _stateNetMask?: string; 
  public get stateNetMask() {
    return this.getStringAttribute('state_net_mask');
  }
  public set stateNetMask(value: string) {
    this._stateNetMask = value;
  }
  public resetStateNetMask() {
    this._stateNetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNetMaskInput() {
    return this._stateNetMask;
  }

  // state_primary_ip - computed: false, optional: true, required: false
  private _statePrimaryIp?: string; 
  public get statePrimaryIp() {
    return this.getStringAttribute('state_primary_ip');
  }
  public set statePrimaryIp(value: string) {
    this._statePrimaryIp = value;
  }
  public resetStatePrimaryIp() {
    this._statePrimaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePrimaryIpInput() {
    return this._statePrimaryIp;
  }

  // state_secondary_ip - computed: false, optional: true, required: false
  private _stateSecondaryIp?: string; 
  public get stateSecondaryIp() {
    return this.getStringAttribute('state_secondary_ip');
  }
  public set stateSecondaryIp(value: string) {
    this._stateSecondaryIp = value;
  }
  public resetStateSecondaryIp() {
    this._stateSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateSecondaryIpInput() {
    return this._stateSecondaryIp;
  }

  // unit_hold_time - computed: false, optional: true, required: false
  private _unitHoldTime?: string; 
  public get unitHoldTime() {
    return this.getStringAttribute('unit_hold_time');
  }
  public set unitHoldTime(value: string) {
    this._unitHoldTime = value;
  }
  public resetUnitHoldTime() {
    this._unitHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitHoldTimeInput() {
    return this._unitHoldTime;
  }

  // unit_hold_time_unit - computed: false, optional: true, required: false
  private _unitHoldTimeUnit?: string; 
  public get unitHoldTimeUnit() {
    return this.getStringAttribute('unit_hold_time_unit');
  }
  public set unitHoldTimeUnit(value: string) {
    this._unitHoldTimeUnit = value;
  }
  public resetUnitHoldTimeUnit() {
    this._unitHoldTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitHoldTimeUnitInput() {
    return this._unitHoldTimeUnit;
  }

  // unit_poll_time - computed: false, optional: true, required: false
  private _unitPollTime?: string; 
  public get unitPollTime() {
    return this.getStringAttribute('unit_poll_time');
  }
  public set unitPollTime(value: string) {
    this._unitPollTime = value;
  }
  public resetUnitPollTime() {
    this._unitPollTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitPollTimeInput() {
    return this._unitPollTime;
  }

  // unit_poll_time_unit - computed: false, optional: true, required: false
  private _unitPollTimeUnit?: string; 
  public get unitPollTimeUnit() {
    return this.getStringAttribute('unit_poll_time_unit');
  }
  public set unitPollTimeUnit(value: string) {
    this._unitPollTimeUnit = value;
  }
  public resetUnitPollTimeUnit() {
    this._unitPollTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitPollTimeUnitInput() {
    return this._unitPollTimeUnit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      failed_interfaces_threshold: cdktf.stringToTerraform(this._failedInterfacesThreshold),
      failed_interfaces_threshold_unit: cdktf.stringToTerraform(this._failedInterfacesThresholdUnit),
      hex_key: cdktf.booleanToTerraform(this._hexKey),
      http_replication: cdktf.booleanToTerraform(this._httpReplication),
      id: cdktf.stringToTerraform(this._id),
      interface_hold_time: cdktf.stringToTerraform(this._interfaceHoldTime),
      ipsec_key: cdktf.stringToTerraform(this._ipsecKey),
      lan_failover_name: cdktf.stringToTerraform(this._lanFailoverName),
      lan_interface_hw_id: cdktf.stringToTerraform(this._lanInterfaceHwId),
      lan_net_mask: cdktf.stringToTerraform(this._lanNetMask),
      lan_preferred_role: cdktf.stringToTerraform(this._lanPreferredRole),
      lan_primary_ip: cdktf.stringToTerraform(this._lanPrimaryIp),
      lan_secondary_ip: cdktf.stringToTerraform(this._lanSecondaryIp),
      monitored_poll_time: cdktf.stringToTerraform(this._monitoredPollTime),
      monitored_poll_time_unit: cdktf.stringToTerraform(this._monitoredPollTimeUnit),
      replication_rate: cdktf.numberToTerraform(this._replicationRate),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      state_failover_name: cdktf.stringToTerraform(this._stateFailoverName),
      state_interface_hw_id: cdktf.stringToTerraform(this._stateInterfaceHwId),
      state_net_mask: cdktf.stringToTerraform(this._stateNetMask),
      state_primary_ip: cdktf.stringToTerraform(this._statePrimaryIp),
      state_secondary_ip: cdktf.stringToTerraform(this._stateSecondaryIp),
      unit_hold_time: cdktf.stringToTerraform(this._unitHoldTime),
      unit_hold_time_unit: cdktf.stringToTerraform(this._unitHoldTimeUnit),
      unit_poll_time: cdktf.stringToTerraform(this._unitPollTime),
      unit_poll_time_unit: cdktf.stringToTerraform(this._unitPollTimeUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failed_interfaces_threshold: {
        value: cdktf.stringToHclTerraform(this._failedInterfacesThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_interfaces_threshold_unit: {
        value: cdktf.stringToHclTerraform(this._failedInterfacesThresholdUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hex_key: {
        value: cdktf.booleanToHclTerraform(this._hexKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_replication: {
        value: cdktf.booleanToHclTerraform(this._httpReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_hold_time: {
        value: cdktf.stringToHclTerraform(this._interfaceHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_key: {
        value: cdktf.stringToHclTerraform(this._ipsecKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_failover_name: {
        value: cdktf.stringToHclTerraform(this._lanFailoverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_interface_hw_id: {
        value: cdktf.stringToHclTerraform(this._lanInterfaceHwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_net_mask: {
        value: cdktf.stringToHclTerraform(this._lanNetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_preferred_role: {
        value: cdktf.stringToHclTerraform(this._lanPreferredRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_primary_ip: {
        value: cdktf.stringToHclTerraform(this._lanPrimaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_secondary_ip: {
        value: cdktf.stringToHclTerraform(this._lanSecondaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored_poll_time: {
        value: cdktf.stringToHclTerraform(this._monitoredPollTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored_poll_time_unit: {
        value: cdktf.stringToHclTerraform(this._monitoredPollTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_rate: {
        value: cdktf.numberToHclTerraform(this._replicationRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_key: {
        value: cdktf.stringToHclTerraform(this._sharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_failover_name: {
        value: cdktf.stringToHclTerraform(this._stateFailoverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_interface_hw_id: {
        value: cdktf.stringToHclTerraform(this._stateInterfaceHwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_net_mask: {
        value: cdktf.stringToHclTerraform(this._stateNetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_primary_ip: {
        value: cdktf.stringToHclTerraform(this._statePrimaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_secondary_ip: {
        value: cdktf.stringToHclTerraform(this._stateSecondaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_hold_time: {
        value: cdktf.stringToHclTerraform(this._unitHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_hold_time_unit: {
        value: cdktf.stringToHclTerraform(this._unitHoldTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_poll_time: {
        value: cdktf.stringToHclTerraform(this._unitPollTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_poll_time_unit: {
        value: cdktf.stringToHclTerraform(this._unitPollTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
