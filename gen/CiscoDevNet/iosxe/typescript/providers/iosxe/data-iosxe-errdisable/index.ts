// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/errdisable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeErrdisableConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/errdisable#device DataIosxeErrdisable#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/errdisable iosxe_errdisable}
*/
export class DataIosxeErrdisable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_errdisable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeErrdisable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeErrdisable to import
  * @param importFromId The id of the existing DataIosxeErrdisable that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/errdisable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeErrdisable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_errdisable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/errdisable iosxe_errdisable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeErrdisableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeErrdisableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_errdisable',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detect_cause_all - computed: true, optional: false, required: false
  public get detectCauseAll() {
    return this.getBooleanAttribute('detect_cause_all');
  }

  // detect_cause_arp_inspection - computed: true, optional: false, required: false
  public get detectCauseArpInspection() {
    return this.getBooleanAttribute('detect_cause_arp_inspection');
  }

  // detect_cause_bpduguard - computed: true, optional: false, required: false
  public get detectCauseBpduguard() {
    return this.getBooleanAttribute('detect_cause_bpduguard');
  }

  // detect_cause_dhcp_rate_limit - computed: true, optional: false, required: false
  public get detectCauseDhcpRateLimit() {
    return this.getBooleanAttribute('detect_cause_dhcp_rate_limit');
  }

  // detect_cause_dtp_flap - computed: true, optional: false, required: false
  public get detectCauseDtpFlap() {
    return this.getBooleanAttribute('detect_cause_dtp_flap');
  }

  // detect_cause_gbic_invalid - computed: true, optional: false, required: false
  public get detectCauseGbicInvalid() {
    return this.getBooleanAttribute('detect_cause_gbic_invalid');
  }

  // detect_cause_inline_power - computed: true, optional: false, required: false
  public get detectCauseInlinePower() {
    return this.getBooleanAttribute('detect_cause_inline_power');
  }

  // detect_cause_l2ptguard - computed: true, optional: false, required: false
  public get detectCauseL2Ptguard() {
    return this.getBooleanAttribute('detect_cause_l2ptguard');
  }

  // detect_cause_link_flap - computed: true, optional: false, required: false
  public get detectCauseLinkFlap() {
    return this.getBooleanAttribute('detect_cause_link_flap');
  }

  // detect_cause_loopback - computed: true, optional: false, required: false
  public get detectCauseLoopback() {
    return this.getBooleanAttribute('detect_cause_loopback');
  }

  // detect_cause_loopdetect - computed: true, optional: false, required: false
  public get detectCauseLoopdetect() {
    return this.getBooleanAttribute('detect_cause_loopdetect');
  }

  // detect_cause_mlacp_minlink - computed: true, optional: false, required: false
  public get detectCauseMlacpMinlink() {
    return this.getBooleanAttribute('detect_cause_mlacp_minlink');
  }

  // detect_cause_pagp_flap - computed: true, optional: false, required: false
  public get detectCausePagpFlap() {
    return this.getBooleanAttribute('detect_cause_pagp_flap');
  }

  // detect_cause_pppoe_ia_rate_limit - computed: true, optional: false, required: false
  public get detectCausePppoeIaRateLimit() {
    return this.getBooleanAttribute('detect_cause_pppoe_ia_rate_limit');
  }

  // detect_cause_security_violation_shutdown_vlan - computed: true, optional: false, required: false
  public get detectCauseSecurityViolationShutdownVlan() {
    return this.getBooleanAttribute('detect_cause_security_violation_shutdown_vlan');
  }

  // detect_cause_sfp_config_mismatch - computed: true, optional: false, required: false
  public get detectCauseSfpConfigMismatch() {
    return this.getBooleanAttribute('detect_cause_sfp_config_mismatch');
  }

  // detect_cause_small_frame - computed: true, optional: false, required: false
  public get detectCauseSmallFrame() {
    return this.getBooleanAttribute('detect_cause_small_frame');
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

  // flap_setting_cause_dtp_flap_max_flaps - computed: true, optional: false, required: false
  public get flapSettingCauseDtpFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_dtp_flap_max_flaps');
  }

  // flap_setting_cause_dtp_flap_time - computed: true, optional: false, required: false
  public get flapSettingCauseDtpFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_dtp_flap_time');
  }

  // flap_setting_cause_link_flap_max_flaps - computed: true, optional: false, required: false
  public get flapSettingCauseLinkFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_link_flap_max_flaps');
  }

  // flap_setting_cause_link_flap_time - computed: true, optional: false, required: false
  public get flapSettingCauseLinkFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_link_flap_time');
  }

  // flap_setting_cause_pagp_flap_max_flaps - computed: true, optional: false, required: false
  public get flapSettingCausePagpFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_pagp_flap_max_flaps');
  }

  // flap_setting_cause_pagp_flap_time - computed: true, optional: false, required: false
  public get flapSettingCausePagpFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_pagp_flap_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recovery_cause_all - computed: true, optional: false, required: false
  public get recoveryCauseAll() {
    return this.getBooleanAttribute('recovery_cause_all');
  }

  // recovery_cause_arp_inspection - computed: true, optional: false, required: false
  public get recoveryCauseArpInspection() {
    return this.getBooleanAttribute('recovery_cause_arp_inspection');
  }

  // recovery_cause_bpduguard - computed: true, optional: false, required: false
  public get recoveryCauseBpduguard() {
    return this.getBooleanAttribute('recovery_cause_bpduguard');
  }

  // recovery_cause_channel_misconfig - computed: true, optional: false, required: false
  public get recoveryCauseChannelMisconfig() {
    return this.getBooleanAttribute('recovery_cause_channel_misconfig');
  }

  // recovery_cause_dhcp_rate_limit - computed: true, optional: false, required: false
  public get recoveryCauseDhcpRateLimit() {
    return this.getBooleanAttribute('recovery_cause_dhcp_rate_limit');
  }

  // recovery_cause_dtp_flap - computed: true, optional: false, required: false
  public get recoveryCauseDtpFlap() {
    return this.getBooleanAttribute('recovery_cause_dtp_flap');
  }

  // recovery_cause_gbic_invalid - computed: true, optional: false, required: false
  public get recoveryCauseGbicInvalid() {
    return this.getBooleanAttribute('recovery_cause_gbic_invalid');
  }

  // recovery_cause_inline_power - computed: true, optional: false, required: false
  public get recoveryCauseInlinePower() {
    return this.getBooleanAttribute('recovery_cause_inline_power');
  }

  // recovery_cause_l2ptguard - computed: true, optional: false, required: false
  public get recoveryCauseL2Ptguard() {
    return this.getBooleanAttribute('recovery_cause_l2ptguard');
  }

  // recovery_cause_link_flap - computed: true, optional: false, required: false
  public get recoveryCauseLinkFlap() {
    return this.getBooleanAttribute('recovery_cause_link_flap');
  }

  // recovery_cause_link_monitor_failure - computed: true, optional: false, required: false
  public get recoveryCauseLinkMonitorFailure() {
    return this.getBooleanAttribute('recovery_cause_link_monitor_failure');
  }

  // recovery_cause_loopback - computed: true, optional: false, required: false
  public get recoveryCauseLoopback() {
    return this.getBooleanAttribute('recovery_cause_loopback');
  }

  // recovery_cause_loopdetect - computed: true, optional: false, required: false
  public get recoveryCauseLoopdetect() {
    return this.getBooleanAttribute('recovery_cause_loopdetect');
  }

  // recovery_cause_mac_limit - computed: true, optional: false, required: false
  public get recoveryCauseMacLimit() {
    return this.getBooleanAttribute('recovery_cause_mac_limit');
  }

  // recovery_cause_mlacp_minlink - computed: true, optional: false, required: false
  public get recoveryCauseMlacpMinlink() {
    return this.getBooleanAttribute('recovery_cause_mlacp_minlink');
  }

  // recovery_cause_mrp_miscabling - computed: true, optional: false, required: false
  public get recoveryCauseMrpMiscabling() {
    return this.getBooleanAttribute('recovery_cause_mrp_miscabling');
  }

  // recovery_cause_oam_remote_failure - computed: true, optional: false, required: false
  public get recoveryCauseOamRemoteFailure() {
    return this.getBooleanAttribute('recovery_cause_oam_remote_failure');
  }

  // recovery_cause_pagp_flap - computed: true, optional: false, required: false
  public get recoveryCausePagpFlap() {
    return this.getBooleanAttribute('recovery_cause_pagp_flap');
  }

  // recovery_cause_port_mode_failure - computed: true, optional: false, required: false
  public get recoveryCausePortModeFailure() {
    return this.getBooleanAttribute('recovery_cause_port_mode_failure');
  }

  // recovery_cause_pppoe_ia_rate_limit - computed: true, optional: false, required: false
  public get recoveryCausePppoeIaRateLimit() {
    return this.getBooleanAttribute('recovery_cause_pppoe_ia_rate_limit');
  }

  // recovery_cause_psecure_violation - computed: true, optional: false, required: false
  public get recoveryCausePsecureViolation() {
    return this.getBooleanAttribute('recovery_cause_psecure_violation');
  }

  // recovery_cause_psp - computed: true, optional: false, required: false
  public get recoveryCausePsp() {
    return this.getBooleanAttribute('recovery_cause_psp');
  }

  // recovery_cause_security_violation - computed: true, optional: false, required: false
  public get recoveryCauseSecurityViolation() {
    return this.getBooleanAttribute('recovery_cause_security_violation');
  }

  // recovery_cause_sfp_config_mismatch - computed: true, optional: false, required: false
  public get recoveryCauseSfpConfigMismatch() {
    return this.getBooleanAttribute('recovery_cause_sfp_config_mismatch');
  }

  // recovery_cause_small_frame - computed: true, optional: false, required: false
  public get recoveryCauseSmallFrame() {
    return this.getBooleanAttribute('recovery_cause_small_frame');
  }

  // recovery_cause_storm_control - computed: true, optional: false, required: false
  public get recoveryCauseStormControl() {
    return this.getBooleanAttribute('recovery_cause_storm_control');
  }

  // recovery_cause_udld - computed: true, optional: false, required: false
  public get recoveryCauseUdld() {
    return this.getBooleanAttribute('recovery_cause_udld');
  }

  // recovery_cause_unicast_flood - computed: true, optional: false, required: false
  public get recoveryCauseUnicastFlood() {
    return this.getBooleanAttribute('recovery_cause_unicast_flood');
  }

  // recovery_cause_vmps - computed: true, optional: false, required: false
  public get recoveryCauseVmps() {
    return this.getBooleanAttribute('recovery_cause_vmps');
  }

  // recovery_interval - computed: true, optional: false, required: false
  public get recoveryInterval() {
    return this.getNumberAttribute('recovery_interval');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
