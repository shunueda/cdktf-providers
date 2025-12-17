// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErrdisableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#delete_mode Errdisable#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Enable error detection on all cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_all Errdisable#detect_cause_all}
  */
  readonly detectCauseAll?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection for arp inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_arp_inspection Errdisable#detect_cause_arp_inspection}
  */
  readonly detectCauseArpInspection?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on bpdu-guard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_bpduguard Errdisable#detect_cause_bpduguard}
  */
  readonly detectCauseBpduguard?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on dhcp-rate-limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_dhcp_rate_limit Errdisable#detect_cause_dhcp_rate_limit}
  */
  readonly detectCauseDhcpRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on dtp-flapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_dtp_flap Errdisable#detect_cause_dtp_flap}
  */
  readonly detectCauseDtpFlap?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on gbic-invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_gbic_invalid Errdisable#detect_cause_gbic_invalid}
  */
  readonly detectCauseGbicInvalid?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection for inline-power
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_inline_power Errdisable#detect_cause_inline_power}
  */
  readonly detectCauseInlinePower?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from l2protocol-tunnel error disable state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_l2ptguard Errdisable#detect_cause_l2ptguard}
  */
  readonly detectCauseL2Ptguard?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on linkstate-flapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_link_flap Errdisable#detect_cause_link_flap}
  */
  readonly detectCauseLinkFlap?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on loopback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_loopback Errdisable#detect_cause_loopback}
  */
  readonly detectCauseLoopback?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on loop detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_loopdetect Errdisable#detect_cause_loopdetect}
  */
  readonly detectCauseLoopdetect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_mlacp_minlink Errdisable#detect_cause_mlacp_minlink}
  */
  readonly detectCauseMlacpMinlink?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on pagp-flapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_pagp_flap Errdisable#detect_cause_pagp_flap}
  */
  readonly detectCausePagpFlap?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on PPPoE IA rate-limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_pppoe_ia_rate_limit Errdisable#detect_cause_pppoe_ia_rate_limit}
  */
  readonly detectCausePppoeIaRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Shutdown vlan on 802.1x-guard violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_security_violation_shutdown_vlan Errdisable#detect_cause_security_violation_shutdown_vlan}
  */
  readonly detectCauseSecurityViolationShutdownVlan?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on SFP config mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_sfp_config_mismatch Errdisable#detect_cause_sfp_config_mismatch}
  */
  readonly detectCauseSfpConfigMismatch?: boolean | cdktf.IResolvable;
  /**
  * Enable error detection on small_frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#detect_cause_small_frame Errdisable#detect_cause_small_frame}
  */
  readonly detectCauseSmallFrame?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#device Errdisable#device}
  */
  readonly device?: string;
  /**
  * maximum flaps allowed before setting to errdisable
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_dtp_flap_max_flaps Errdisable#flap_setting_cause_dtp_flap_max_flaps}
  */
  readonly flapSettingCauseDtpFlapMaxFlaps?: number;
  /**
  * time period the flaps are counted
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_dtp_flap_time Errdisable#flap_setting_cause_dtp_flap_time}
  */
  readonly flapSettingCauseDtpFlapTime?: number;
  /**
  * maximum flaps allowed before setting to errdisable
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_link_flap_max_flaps Errdisable#flap_setting_cause_link_flap_max_flaps}
  */
  readonly flapSettingCauseLinkFlapMaxFlaps?: number;
  /**
  * time period the flaps are counted
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_link_flap_time Errdisable#flap_setting_cause_link_flap_time}
  */
  readonly flapSettingCauseLinkFlapTime?: number;
  /**
  * maximum flaps allowed before setting to errdisable
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_pagp_flap_max_flaps Errdisable#flap_setting_cause_pagp_flap_max_flaps}
  */
  readonly flapSettingCausePagpFlapMaxFlaps?: number;
  /**
  * time period the flaps are counted
  *   - Range: `1`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#flap_setting_cause_pagp_flap_time Errdisable#flap_setting_cause_pagp_flap_time}
  */
  readonly flapSettingCausePagpFlapTime?: number;
  /**
  * Enable timer to recover from all error causes (DEPRECATED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_all Errdisable#recovery_cause_all}
  */
  readonly recoveryCauseAll?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from arp inspection error disable state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_arp_inspection Errdisable#recovery_cause_arp_inspection}
  */
  readonly recoveryCauseArpInspection?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from BPDU Guard error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_bpduguard Errdisable#recovery_cause_bpduguard}
  */
  readonly recoveryCauseBpduguard?: boolean | cdktf.IResolvable;
  /**
  * (STP)  Enable timer to recover from channel misconfiguration error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_channel_misconfig Errdisable#recovery_cause_channel_misconfig}
  */
  readonly recoveryCauseChannelMisconfig?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from dhcp-rate-limit error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_dhcp_rate_limit Errdisable#recovery_cause_dhcp_rate_limit}
  */
  readonly recoveryCauseDhcpRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from dtp-flap error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_dtp_flap Errdisable#recovery_cause_dtp_flap}
  */
  readonly recoveryCauseDtpFlap?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from invalid GBIC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_gbic_invalid Errdisable#recovery_cause_gbic_invalid}
  */
  readonly recoveryCauseGbicInvalid?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from inline-power error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_inline_power Errdisable#recovery_cause_inline_power}
  */
  readonly recoveryCauseInlinePower?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from l2protocol-tunnel error disable state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_l2ptguard Errdisable#recovery_cause_l2ptguard}
  */
  readonly recoveryCauseL2Ptguard?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from link-flap error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_link_flap Errdisable#recovery_cause_link_flap}
  */
  readonly recoveryCauseLinkFlap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_link_monitor_failure Errdisable#recovery_cause_link_monitor_failure}
  */
  readonly recoveryCauseLinkMonitorFailure?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from loopback error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_loopback Errdisable#recovery_cause_loopback}
  */
  readonly recoveryCauseLoopback?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from loop detect error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_loopdetect Errdisable#recovery_cause_loopdetect}
  */
  readonly recoveryCauseLoopdetect?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from mac limit disable state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_mac_limit Errdisable#recovery_cause_mac_limit}
  */
  readonly recoveryCauseMacLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_mlacp_minlink Errdisable#recovery_cause_mlacp_minlink}
  */
  readonly recoveryCauseMlacpMinlink?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from mrp miscabling disable state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_mrp_miscabling Errdisable#recovery_cause_mrp_miscabling}
  */
  readonly recoveryCauseMrpMiscabling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_oam_remote_failure Errdisable#recovery_cause_oam_remote_failure}
  */
  readonly recoveryCauseOamRemoteFailure?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from pagp-flap error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_pagp_flap Errdisable#recovery_cause_pagp_flap}
  */
  readonly recoveryCausePagpFlap?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from port mode change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_port_mode_failure Errdisable#recovery_cause_port_mode_failure}
  */
  readonly recoveryCausePortModeFailure?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from PPPoE IA rate-limit error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_pppoe_ia_rate_limit Errdisable#recovery_cause_pppoe_ia_rate_limit}
  */
  readonly recoveryCausePppoeIaRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from psecure violation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_psecure_violation Errdisable#recovery_cause_psecure_violation}
  */
  readonly recoveryCausePsecureViolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_psp Errdisable#recovery_cause_psp}
  */
  readonly recoveryCausePsp?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from 802.1x violation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_security_violation Errdisable#recovery_cause_security_violation}
  */
  readonly recoveryCauseSecurityViolation?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from SFP config mismatch error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_sfp_config_mismatch Errdisable#recovery_cause_sfp_config_mismatch}
  */
  readonly recoveryCauseSfpConfigMismatch?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from small frame error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_small_frame Errdisable#recovery_cause_small_frame}
  */
  readonly recoveryCauseSmallFrame?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from storm-control error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_storm_control Errdisable#recovery_cause_storm_control}
  */
  readonly recoveryCauseStormControl?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from udld error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_udld Errdisable#recovery_cause_udld}
  */
  readonly recoveryCauseUdld?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_unicast_flood Errdisable#recovery_cause_unicast_flood}
  */
  readonly recoveryCauseUnicastFlood?: boolean | cdktf.IResolvable;
  /**
  * Enable timer to recover from vmps shutdown error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_cause_vmps Errdisable#recovery_cause_vmps}
  */
  readonly recoveryCauseVmps?: boolean | cdktf.IResolvable;
  /**
  * Error disable recovery timer value
  *   - Range: `30`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#recovery_interval Errdisable#recovery_interval}
  */
  readonly recoveryInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable iosxe_errdisable}
*/
export class Errdisable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_errdisable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Errdisable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Errdisable to import
  * @param importFromId The id of the existing Errdisable that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Errdisable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_errdisable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/errdisable iosxe_errdisable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErrdisableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ErrdisableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_errdisable',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._detectCauseAll = config.detectCauseAll;
    this._detectCauseArpInspection = config.detectCauseArpInspection;
    this._detectCauseBpduguard = config.detectCauseBpduguard;
    this._detectCauseDhcpRateLimit = config.detectCauseDhcpRateLimit;
    this._detectCauseDtpFlap = config.detectCauseDtpFlap;
    this._detectCauseGbicInvalid = config.detectCauseGbicInvalid;
    this._detectCauseInlinePower = config.detectCauseInlinePower;
    this._detectCauseL2Ptguard = config.detectCauseL2Ptguard;
    this._detectCauseLinkFlap = config.detectCauseLinkFlap;
    this._detectCauseLoopback = config.detectCauseLoopback;
    this._detectCauseLoopdetect = config.detectCauseLoopdetect;
    this._detectCauseMlacpMinlink = config.detectCauseMlacpMinlink;
    this._detectCausePagpFlap = config.detectCausePagpFlap;
    this._detectCausePppoeIaRateLimit = config.detectCausePppoeIaRateLimit;
    this._detectCauseSecurityViolationShutdownVlan = config.detectCauseSecurityViolationShutdownVlan;
    this._detectCauseSfpConfigMismatch = config.detectCauseSfpConfigMismatch;
    this._detectCauseSmallFrame = config.detectCauseSmallFrame;
    this._device = config.device;
    this._flapSettingCauseDtpFlapMaxFlaps = config.flapSettingCauseDtpFlapMaxFlaps;
    this._flapSettingCauseDtpFlapTime = config.flapSettingCauseDtpFlapTime;
    this._flapSettingCauseLinkFlapMaxFlaps = config.flapSettingCauseLinkFlapMaxFlaps;
    this._flapSettingCauseLinkFlapTime = config.flapSettingCauseLinkFlapTime;
    this._flapSettingCausePagpFlapMaxFlaps = config.flapSettingCausePagpFlapMaxFlaps;
    this._flapSettingCausePagpFlapTime = config.flapSettingCausePagpFlapTime;
    this._recoveryCauseAll = config.recoveryCauseAll;
    this._recoveryCauseArpInspection = config.recoveryCauseArpInspection;
    this._recoveryCauseBpduguard = config.recoveryCauseBpduguard;
    this._recoveryCauseChannelMisconfig = config.recoveryCauseChannelMisconfig;
    this._recoveryCauseDhcpRateLimit = config.recoveryCauseDhcpRateLimit;
    this._recoveryCauseDtpFlap = config.recoveryCauseDtpFlap;
    this._recoveryCauseGbicInvalid = config.recoveryCauseGbicInvalid;
    this._recoveryCauseInlinePower = config.recoveryCauseInlinePower;
    this._recoveryCauseL2Ptguard = config.recoveryCauseL2Ptguard;
    this._recoveryCauseLinkFlap = config.recoveryCauseLinkFlap;
    this._recoveryCauseLinkMonitorFailure = config.recoveryCauseLinkMonitorFailure;
    this._recoveryCauseLoopback = config.recoveryCauseLoopback;
    this._recoveryCauseLoopdetect = config.recoveryCauseLoopdetect;
    this._recoveryCauseMacLimit = config.recoveryCauseMacLimit;
    this._recoveryCauseMlacpMinlink = config.recoveryCauseMlacpMinlink;
    this._recoveryCauseMrpMiscabling = config.recoveryCauseMrpMiscabling;
    this._recoveryCauseOamRemoteFailure = config.recoveryCauseOamRemoteFailure;
    this._recoveryCausePagpFlap = config.recoveryCausePagpFlap;
    this._recoveryCausePortModeFailure = config.recoveryCausePortModeFailure;
    this._recoveryCausePppoeIaRateLimit = config.recoveryCausePppoeIaRateLimit;
    this._recoveryCausePsecureViolation = config.recoveryCausePsecureViolation;
    this._recoveryCausePsp = config.recoveryCausePsp;
    this._recoveryCauseSecurityViolation = config.recoveryCauseSecurityViolation;
    this._recoveryCauseSfpConfigMismatch = config.recoveryCauseSfpConfigMismatch;
    this._recoveryCauseSmallFrame = config.recoveryCauseSmallFrame;
    this._recoveryCauseStormControl = config.recoveryCauseStormControl;
    this._recoveryCauseUdld = config.recoveryCauseUdld;
    this._recoveryCauseUnicastFlood = config.recoveryCauseUnicastFlood;
    this._recoveryCauseVmps = config.recoveryCauseVmps;
    this._recoveryInterval = config.recoveryInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // detect_cause_all - computed: false, optional: true, required: false
  private _detectCauseAll?: boolean | cdktf.IResolvable; 
  public get detectCauseAll() {
    return this.getBooleanAttribute('detect_cause_all');
  }
  public set detectCauseAll(value: boolean | cdktf.IResolvable) {
    this._detectCauseAll = value;
  }
  public resetDetectCauseAll() {
    this._detectCauseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseAllInput() {
    return this._detectCauseAll;
  }

  // detect_cause_arp_inspection - computed: false, optional: true, required: false
  private _detectCauseArpInspection?: boolean | cdktf.IResolvable; 
  public get detectCauseArpInspection() {
    return this.getBooleanAttribute('detect_cause_arp_inspection');
  }
  public set detectCauseArpInspection(value: boolean | cdktf.IResolvable) {
    this._detectCauseArpInspection = value;
  }
  public resetDetectCauseArpInspection() {
    this._detectCauseArpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseArpInspectionInput() {
    return this._detectCauseArpInspection;
  }

  // detect_cause_bpduguard - computed: false, optional: true, required: false
  private _detectCauseBpduguard?: boolean | cdktf.IResolvable; 
  public get detectCauseBpduguard() {
    return this.getBooleanAttribute('detect_cause_bpduguard');
  }
  public set detectCauseBpduguard(value: boolean | cdktf.IResolvable) {
    this._detectCauseBpduguard = value;
  }
  public resetDetectCauseBpduguard() {
    this._detectCauseBpduguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseBpduguardInput() {
    return this._detectCauseBpduguard;
  }

  // detect_cause_dhcp_rate_limit - computed: false, optional: true, required: false
  private _detectCauseDhcpRateLimit?: boolean | cdktf.IResolvable; 
  public get detectCauseDhcpRateLimit() {
    return this.getBooleanAttribute('detect_cause_dhcp_rate_limit');
  }
  public set detectCauseDhcpRateLimit(value: boolean | cdktf.IResolvable) {
    this._detectCauseDhcpRateLimit = value;
  }
  public resetDetectCauseDhcpRateLimit() {
    this._detectCauseDhcpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseDhcpRateLimitInput() {
    return this._detectCauseDhcpRateLimit;
  }

  // detect_cause_dtp_flap - computed: false, optional: true, required: false
  private _detectCauseDtpFlap?: boolean | cdktf.IResolvable; 
  public get detectCauseDtpFlap() {
    return this.getBooleanAttribute('detect_cause_dtp_flap');
  }
  public set detectCauseDtpFlap(value: boolean | cdktf.IResolvable) {
    this._detectCauseDtpFlap = value;
  }
  public resetDetectCauseDtpFlap() {
    this._detectCauseDtpFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseDtpFlapInput() {
    return this._detectCauseDtpFlap;
  }

  // detect_cause_gbic_invalid - computed: false, optional: true, required: false
  private _detectCauseGbicInvalid?: boolean | cdktf.IResolvable; 
  public get detectCauseGbicInvalid() {
    return this.getBooleanAttribute('detect_cause_gbic_invalid');
  }
  public set detectCauseGbicInvalid(value: boolean | cdktf.IResolvable) {
    this._detectCauseGbicInvalid = value;
  }
  public resetDetectCauseGbicInvalid() {
    this._detectCauseGbicInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseGbicInvalidInput() {
    return this._detectCauseGbicInvalid;
  }

  // detect_cause_inline_power - computed: false, optional: true, required: false
  private _detectCauseInlinePower?: boolean | cdktf.IResolvable; 
  public get detectCauseInlinePower() {
    return this.getBooleanAttribute('detect_cause_inline_power');
  }
  public set detectCauseInlinePower(value: boolean | cdktf.IResolvable) {
    this._detectCauseInlinePower = value;
  }
  public resetDetectCauseInlinePower() {
    this._detectCauseInlinePower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseInlinePowerInput() {
    return this._detectCauseInlinePower;
  }

  // detect_cause_l2ptguard - computed: false, optional: true, required: false
  private _detectCauseL2Ptguard?: boolean | cdktf.IResolvable; 
  public get detectCauseL2Ptguard() {
    return this.getBooleanAttribute('detect_cause_l2ptguard');
  }
  public set detectCauseL2Ptguard(value: boolean | cdktf.IResolvable) {
    this._detectCauseL2Ptguard = value;
  }
  public resetDetectCauseL2Ptguard() {
    this._detectCauseL2Ptguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseL2PtguardInput() {
    return this._detectCauseL2Ptguard;
  }

  // detect_cause_link_flap - computed: false, optional: true, required: false
  private _detectCauseLinkFlap?: boolean | cdktf.IResolvable; 
  public get detectCauseLinkFlap() {
    return this.getBooleanAttribute('detect_cause_link_flap');
  }
  public set detectCauseLinkFlap(value: boolean | cdktf.IResolvable) {
    this._detectCauseLinkFlap = value;
  }
  public resetDetectCauseLinkFlap() {
    this._detectCauseLinkFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseLinkFlapInput() {
    return this._detectCauseLinkFlap;
  }

  // detect_cause_loopback - computed: false, optional: true, required: false
  private _detectCauseLoopback?: boolean | cdktf.IResolvable; 
  public get detectCauseLoopback() {
    return this.getBooleanAttribute('detect_cause_loopback');
  }
  public set detectCauseLoopback(value: boolean | cdktf.IResolvable) {
    this._detectCauseLoopback = value;
  }
  public resetDetectCauseLoopback() {
    this._detectCauseLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseLoopbackInput() {
    return this._detectCauseLoopback;
  }

  // detect_cause_loopdetect - computed: false, optional: true, required: false
  private _detectCauseLoopdetect?: boolean | cdktf.IResolvable; 
  public get detectCauseLoopdetect() {
    return this.getBooleanAttribute('detect_cause_loopdetect');
  }
  public set detectCauseLoopdetect(value: boolean | cdktf.IResolvable) {
    this._detectCauseLoopdetect = value;
  }
  public resetDetectCauseLoopdetect() {
    this._detectCauseLoopdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseLoopdetectInput() {
    return this._detectCauseLoopdetect;
  }

  // detect_cause_mlacp_minlink - computed: false, optional: true, required: false
  private _detectCauseMlacpMinlink?: boolean | cdktf.IResolvable; 
  public get detectCauseMlacpMinlink() {
    return this.getBooleanAttribute('detect_cause_mlacp_minlink');
  }
  public set detectCauseMlacpMinlink(value: boolean | cdktf.IResolvable) {
    this._detectCauseMlacpMinlink = value;
  }
  public resetDetectCauseMlacpMinlink() {
    this._detectCauseMlacpMinlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseMlacpMinlinkInput() {
    return this._detectCauseMlacpMinlink;
  }

  // detect_cause_pagp_flap - computed: false, optional: true, required: false
  private _detectCausePagpFlap?: boolean | cdktf.IResolvable; 
  public get detectCausePagpFlap() {
    return this.getBooleanAttribute('detect_cause_pagp_flap');
  }
  public set detectCausePagpFlap(value: boolean | cdktf.IResolvable) {
    this._detectCausePagpFlap = value;
  }
  public resetDetectCausePagpFlap() {
    this._detectCausePagpFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCausePagpFlapInput() {
    return this._detectCausePagpFlap;
  }

  // detect_cause_pppoe_ia_rate_limit - computed: false, optional: true, required: false
  private _detectCausePppoeIaRateLimit?: boolean | cdktf.IResolvable; 
  public get detectCausePppoeIaRateLimit() {
    return this.getBooleanAttribute('detect_cause_pppoe_ia_rate_limit');
  }
  public set detectCausePppoeIaRateLimit(value: boolean | cdktf.IResolvable) {
    this._detectCausePppoeIaRateLimit = value;
  }
  public resetDetectCausePppoeIaRateLimit() {
    this._detectCausePppoeIaRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCausePppoeIaRateLimitInput() {
    return this._detectCausePppoeIaRateLimit;
  }

  // detect_cause_security_violation_shutdown_vlan - computed: false, optional: true, required: false
  private _detectCauseSecurityViolationShutdownVlan?: boolean | cdktf.IResolvable; 
  public get detectCauseSecurityViolationShutdownVlan() {
    return this.getBooleanAttribute('detect_cause_security_violation_shutdown_vlan');
  }
  public set detectCauseSecurityViolationShutdownVlan(value: boolean | cdktf.IResolvable) {
    this._detectCauseSecurityViolationShutdownVlan = value;
  }
  public resetDetectCauseSecurityViolationShutdownVlan() {
    this._detectCauseSecurityViolationShutdownVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseSecurityViolationShutdownVlanInput() {
    return this._detectCauseSecurityViolationShutdownVlan;
  }

  // detect_cause_sfp_config_mismatch - computed: false, optional: true, required: false
  private _detectCauseSfpConfigMismatch?: boolean | cdktf.IResolvable; 
  public get detectCauseSfpConfigMismatch() {
    return this.getBooleanAttribute('detect_cause_sfp_config_mismatch');
  }
  public set detectCauseSfpConfigMismatch(value: boolean | cdktf.IResolvable) {
    this._detectCauseSfpConfigMismatch = value;
  }
  public resetDetectCauseSfpConfigMismatch() {
    this._detectCauseSfpConfigMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseSfpConfigMismatchInput() {
    return this._detectCauseSfpConfigMismatch;
  }

  // detect_cause_small_frame - computed: false, optional: true, required: false
  private _detectCauseSmallFrame?: boolean | cdktf.IResolvable; 
  public get detectCauseSmallFrame() {
    return this.getBooleanAttribute('detect_cause_small_frame');
  }
  public set detectCauseSmallFrame(value: boolean | cdktf.IResolvable) {
    this._detectCauseSmallFrame = value;
  }
  public resetDetectCauseSmallFrame() {
    this._detectCauseSmallFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCauseSmallFrameInput() {
    return this._detectCauseSmallFrame;
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

  // flap_setting_cause_dtp_flap_max_flaps - computed: false, optional: true, required: false
  private _flapSettingCauseDtpFlapMaxFlaps?: number; 
  public get flapSettingCauseDtpFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_dtp_flap_max_flaps');
  }
  public set flapSettingCauseDtpFlapMaxFlaps(value: number) {
    this._flapSettingCauseDtpFlapMaxFlaps = value;
  }
  public resetFlapSettingCauseDtpFlapMaxFlaps() {
    this._flapSettingCauseDtpFlapMaxFlaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCauseDtpFlapMaxFlapsInput() {
    return this._flapSettingCauseDtpFlapMaxFlaps;
  }

  // flap_setting_cause_dtp_flap_time - computed: false, optional: true, required: false
  private _flapSettingCauseDtpFlapTime?: number; 
  public get flapSettingCauseDtpFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_dtp_flap_time');
  }
  public set flapSettingCauseDtpFlapTime(value: number) {
    this._flapSettingCauseDtpFlapTime = value;
  }
  public resetFlapSettingCauseDtpFlapTime() {
    this._flapSettingCauseDtpFlapTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCauseDtpFlapTimeInput() {
    return this._flapSettingCauseDtpFlapTime;
  }

  // flap_setting_cause_link_flap_max_flaps - computed: false, optional: true, required: false
  private _flapSettingCauseLinkFlapMaxFlaps?: number; 
  public get flapSettingCauseLinkFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_link_flap_max_flaps');
  }
  public set flapSettingCauseLinkFlapMaxFlaps(value: number) {
    this._flapSettingCauseLinkFlapMaxFlaps = value;
  }
  public resetFlapSettingCauseLinkFlapMaxFlaps() {
    this._flapSettingCauseLinkFlapMaxFlaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCauseLinkFlapMaxFlapsInput() {
    return this._flapSettingCauseLinkFlapMaxFlaps;
  }

  // flap_setting_cause_link_flap_time - computed: false, optional: true, required: false
  private _flapSettingCauseLinkFlapTime?: number; 
  public get flapSettingCauseLinkFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_link_flap_time');
  }
  public set flapSettingCauseLinkFlapTime(value: number) {
    this._flapSettingCauseLinkFlapTime = value;
  }
  public resetFlapSettingCauseLinkFlapTime() {
    this._flapSettingCauseLinkFlapTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCauseLinkFlapTimeInput() {
    return this._flapSettingCauseLinkFlapTime;
  }

  // flap_setting_cause_pagp_flap_max_flaps - computed: false, optional: true, required: false
  private _flapSettingCausePagpFlapMaxFlaps?: number; 
  public get flapSettingCausePagpFlapMaxFlaps() {
    return this.getNumberAttribute('flap_setting_cause_pagp_flap_max_flaps');
  }
  public set flapSettingCausePagpFlapMaxFlaps(value: number) {
    this._flapSettingCausePagpFlapMaxFlaps = value;
  }
  public resetFlapSettingCausePagpFlapMaxFlaps() {
    this._flapSettingCausePagpFlapMaxFlaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCausePagpFlapMaxFlapsInput() {
    return this._flapSettingCausePagpFlapMaxFlaps;
  }

  // flap_setting_cause_pagp_flap_time - computed: false, optional: true, required: false
  private _flapSettingCausePagpFlapTime?: number; 
  public get flapSettingCausePagpFlapTime() {
    return this.getNumberAttribute('flap_setting_cause_pagp_flap_time');
  }
  public set flapSettingCausePagpFlapTime(value: number) {
    this._flapSettingCausePagpFlapTime = value;
  }
  public resetFlapSettingCausePagpFlapTime() {
    this._flapSettingCausePagpFlapTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapSettingCausePagpFlapTimeInput() {
    return this._flapSettingCausePagpFlapTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recovery_cause_all - computed: false, optional: true, required: false
  private _recoveryCauseAll?: boolean | cdktf.IResolvable; 
  public get recoveryCauseAll() {
    return this.getBooleanAttribute('recovery_cause_all');
  }
  public set recoveryCauseAll(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseAll = value;
  }
  public resetRecoveryCauseAll() {
    this._recoveryCauseAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseAllInput() {
    return this._recoveryCauseAll;
  }

  // recovery_cause_arp_inspection - computed: false, optional: true, required: false
  private _recoveryCauseArpInspection?: boolean | cdktf.IResolvable; 
  public get recoveryCauseArpInspection() {
    return this.getBooleanAttribute('recovery_cause_arp_inspection');
  }
  public set recoveryCauseArpInspection(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseArpInspection = value;
  }
  public resetRecoveryCauseArpInspection() {
    this._recoveryCauseArpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseArpInspectionInput() {
    return this._recoveryCauseArpInspection;
  }

  // recovery_cause_bpduguard - computed: false, optional: true, required: false
  private _recoveryCauseBpduguard?: boolean | cdktf.IResolvable; 
  public get recoveryCauseBpduguard() {
    return this.getBooleanAttribute('recovery_cause_bpduguard');
  }
  public set recoveryCauseBpduguard(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseBpduguard = value;
  }
  public resetRecoveryCauseBpduguard() {
    this._recoveryCauseBpduguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseBpduguardInput() {
    return this._recoveryCauseBpduguard;
  }

  // recovery_cause_channel_misconfig - computed: false, optional: true, required: false
  private _recoveryCauseChannelMisconfig?: boolean | cdktf.IResolvable; 
  public get recoveryCauseChannelMisconfig() {
    return this.getBooleanAttribute('recovery_cause_channel_misconfig');
  }
  public set recoveryCauseChannelMisconfig(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseChannelMisconfig = value;
  }
  public resetRecoveryCauseChannelMisconfig() {
    this._recoveryCauseChannelMisconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseChannelMisconfigInput() {
    return this._recoveryCauseChannelMisconfig;
  }

  // recovery_cause_dhcp_rate_limit - computed: false, optional: true, required: false
  private _recoveryCauseDhcpRateLimit?: boolean | cdktf.IResolvable; 
  public get recoveryCauseDhcpRateLimit() {
    return this.getBooleanAttribute('recovery_cause_dhcp_rate_limit');
  }
  public set recoveryCauseDhcpRateLimit(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseDhcpRateLimit = value;
  }
  public resetRecoveryCauseDhcpRateLimit() {
    this._recoveryCauseDhcpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseDhcpRateLimitInput() {
    return this._recoveryCauseDhcpRateLimit;
  }

  // recovery_cause_dtp_flap - computed: false, optional: true, required: false
  private _recoveryCauseDtpFlap?: boolean | cdktf.IResolvable; 
  public get recoveryCauseDtpFlap() {
    return this.getBooleanAttribute('recovery_cause_dtp_flap');
  }
  public set recoveryCauseDtpFlap(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseDtpFlap = value;
  }
  public resetRecoveryCauseDtpFlap() {
    this._recoveryCauseDtpFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseDtpFlapInput() {
    return this._recoveryCauseDtpFlap;
  }

  // recovery_cause_gbic_invalid - computed: false, optional: true, required: false
  private _recoveryCauseGbicInvalid?: boolean | cdktf.IResolvable; 
  public get recoveryCauseGbicInvalid() {
    return this.getBooleanAttribute('recovery_cause_gbic_invalid');
  }
  public set recoveryCauseGbicInvalid(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseGbicInvalid = value;
  }
  public resetRecoveryCauseGbicInvalid() {
    this._recoveryCauseGbicInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseGbicInvalidInput() {
    return this._recoveryCauseGbicInvalid;
  }

  // recovery_cause_inline_power - computed: false, optional: true, required: false
  private _recoveryCauseInlinePower?: boolean | cdktf.IResolvable; 
  public get recoveryCauseInlinePower() {
    return this.getBooleanAttribute('recovery_cause_inline_power');
  }
  public set recoveryCauseInlinePower(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseInlinePower = value;
  }
  public resetRecoveryCauseInlinePower() {
    this._recoveryCauseInlinePower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseInlinePowerInput() {
    return this._recoveryCauseInlinePower;
  }

  // recovery_cause_l2ptguard - computed: false, optional: true, required: false
  private _recoveryCauseL2Ptguard?: boolean | cdktf.IResolvable; 
  public get recoveryCauseL2Ptguard() {
    return this.getBooleanAttribute('recovery_cause_l2ptguard');
  }
  public set recoveryCauseL2Ptguard(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseL2Ptguard = value;
  }
  public resetRecoveryCauseL2Ptguard() {
    this._recoveryCauseL2Ptguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseL2PtguardInput() {
    return this._recoveryCauseL2Ptguard;
  }

  // recovery_cause_link_flap - computed: false, optional: true, required: false
  private _recoveryCauseLinkFlap?: boolean | cdktf.IResolvable; 
  public get recoveryCauseLinkFlap() {
    return this.getBooleanAttribute('recovery_cause_link_flap');
  }
  public set recoveryCauseLinkFlap(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseLinkFlap = value;
  }
  public resetRecoveryCauseLinkFlap() {
    this._recoveryCauseLinkFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseLinkFlapInput() {
    return this._recoveryCauseLinkFlap;
  }

  // recovery_cause_link_monitor_failure - computed: false, optional: true, required: false
  private _recoveryCauseLinkMonitorFailure?: boolean | cdktf.IResolvable; 
  public get recoveryCauseLinkMonitorFailure() {
    return this.getBooleanAttribute('recovery_cause_link_monitor_failure');
  }
  public set recoveryCauseLinkMonitorFailure(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseLinkMonitorFailure = value;
  }
  public resetRecoveryCauseLinkMonitorFailure() {
    this._recoveryCauseLinkMonitorFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseLinkMonitorFailureInput() {
    return this._recoveryCauseLinkMonitorFailure;
  }

  // recovery_cause_loopback - computed: false, optional: true, required: false
  private _recoveryCauseLoopback?: boolean | cdktf.IResolvable; 
  public get recoveryCauseLoopback() {
    return this.getBooleanAttribute('recovery_cause_loopback');
  }
  public set recoveryCauseLoopback(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseLoopback = value;
  }
  public resetRecoveryCauseLoopback() {
    this._recoveryCauseLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseLoopbackInput() {
    return this._recoveryCauseLoopback;
  }

  // recovery_cause_loopdetect - computed: false, optional: true, required: false
  private _recoveryCauseLoopdetect?: boolean | cdktf.IResolvable; 
  public get recoveryCauseLoopdetect() {
    return this.getBooleanAttribute('recovery_cause_loopdetect');
  }
  public set recoveryCauseLoopdetect(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseLoopdetect = value;
  }
  public resetRecoveryCauseLoopdetect() {
    this._recoveryCauseLoopdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseLoopdetectInput() {
    return this._recoveryCauseLoopdetect;
  }

  // recovery_cause_mac_limit - computed: false, optional: true, required: false
  private _recoveryCauseMacLimit?: boolean | cdktf.IResolvable; 
  public get recoveryCauseMacLimit() {
    return this.getBooleanAttribute('recovery_cause_mac_limit');
  }
  public set recoveryCauseMacLimit(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseMacLimit = value;
  }
  public resetRecoveryCauseMacLimit() {
    this._recoveryCauseMacLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseMacLimitInput() {
    return this._recoveryCauseMacLimit;
  }

  // recovery_cause_mlacp_minlink - computed: false, optional: true, required: false
  private _recoveryCauseMlacpMinlink?: boolean | cdktf.IResolvable; 
  public get recoveryCauseMlacpMinlink() {
    return this.getBooleanAttribute('recovery_cause_mlacp_minlink');
  }
  public set recoveryCauseMlacpMinlink(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseMlacpMinlink = value;
  }
  public resetRecoveryCauseMlacpMinlink() {
    this._recoveryCauseMlacpMinlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseMlacpMinlinkInput() {
    return this._recoveryCauseMlacpMinlink;
  }

  // recovery_cause_mrp_miscabling - computed: false, optional: true, required: false
  private _recoveryCauseMrpMiscabling?: boolean | cdktf.IResolvable; 
  public get recoveryCauseMrpMiscabling() {
    return this.getBooleanAttribute('recovery_cause_mrp_miscabling');
  }
  public set recoveryCauseMrpMiscabling(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseMrpMiscabling = value;
  }
  public resetRecoveryCauseMrpMiscabling() {
    this._recoveryCauseMrpMiscabling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseMrpMiscablingInput() {
    return this._recoveryCauseMrpMiscabling;
  }

  // recovery_cause_oam_remote_failure - computed: false, optional: true, required: false
  private _recoveryCauseOamRemoteFailure?: boolean | cdktf.IResolvable; 
  public get recoveryCauseOamRemoteFailure() {
    return this.getBooleanAttribute('recovery_cause_oam_remote_failure');
  }
  public set recoveryCauseOamRemoteFailure(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseOamRemoteFailure = value;
  }
  public resetRecoveryCauseOamRemoteFailure() {
    this._recoveryCauseOamRemoteFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseOamRemoteFailureInput() {
    return this._recoveryCauseOamRemoteFailure;
  }

  // recovery_cause_pagp_flap - computed: false, optional: true, required: false
  private _recoveryCausePagpFlap?: boolean | cdktf.IResolvable; 
  public get recoveryCausePagpFlap() {
    return this.getBooleanAttribute('recovery_cause_pagp_flap');
  }
  public set recoveryCausePagpFlap(value: boolean | cdktf.IResolvable) {
    this._recoveryCausePagpFlap = value;
  }
  public resetRecoveryCausePagpFlap() {
    this._recoveryCausePagpFlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCausePagpFlapInput() {
    return this._recoveryCausePagpFlap;
  }

  // recovery_cause_port_mode_failure - computed: false, optional: true, required: false
  private _recoveryCausePortModeFailure?: boolean | cdktf.IResolvable; 
  public get recoveryCausePortModeFailure() {
    return this.getBooleanAttribute('recovery_cause_port_mode_failure');
  }
  public set recoveryCausePortModeFailure(value: boolean | cdktf.IResolvable) {
    this._recoveryCausePortModeFailure = value;
  }
  public resetRecoveryCausePortModeFailure() {
    this._recoveryCausePortModeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCausePortModeFailureInput() {
    return this._recoveryCausePortModeFailure;
  }

  // recovery_cause_pppoe_ia_rate_limit - computed: false, optional: true, required: false
  private _recoveryCausePppoeIaRateLimit?: boolean | cdktf.IResolvable; 
  public get recoveryCausePppoeIaRateLimit() {
    return this.getBooleanAttribute('recovery_cause_pppoe_ia_rate_limit');
  }
  public set recoveryCausePppoeIaRateLimit(value: boolean | cdktf.IResolvable) {
    this._recoveryCausePppoeIaRateLimit = value;
  }
  public resetRecoveryCausePppoeIaRateLimit() {
    this._recoveryCausePppoeIaRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCausePppoeIaRateLimitInput() {
    return this._recoveryCausePppoeIaRateLimit;
  }

  // recovery_cause_psecure_violation - computed: false, optional: true, required: false
  private _recoveryCausePsecureViolation?: boolean | cdktf.IResolvable; 
  public get recoveryCausePsecureViolation() {
    return this.getBooleanAttribute('recovery_cause_psecure_violation');
  }
  public set recoveryCausePsecureViolation(value: boolean | cdktf.IResolvable) {
    this._recoveryCausePsecureViolation = value;
  }
  public resetRecoveryCausePsecureViolation() {
    this._recoveryCausePsecureViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCausePsecureViolationInput() {
    return this._recoveryCausePsecureViolation;
  }

  // recovery_cause_psp - computed: false, optional: true, required: false
  private _recoveryCausePsp?: boolean | cdktf.IResolvable; 
  public get recoveryCausePsp() {
    return this.getBooleanAttribute('recovery_cause_psp');
  }
  public set recoveryCausePsp(value: boolean | cdktf.IResolvable) {
    this._recoveryCausePsp = value;
  }
  public resetRecoveryCausePsp() {
    this._recoveryCausePsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCausePspInput() {
    return this._recoveryCausePsp;
  }

  // recovery_cause_security_violation - computed: false, optional: true, required: false
  private _recoveryCauseSecurityViolation?: boolean | cdktf.IResolvable; 
  public get recoveryCauseSecurityViolation() {
    return this.getBooleanAttribute('recovery_cause_security_violation');
  }
  public set recoveryCauseSecurityViolation(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseSecurityViolation = value;
  }
  public resetRecoveryCauseSecurityViolation() {
    this._recoveryCauseSecurityViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseSecurityViolationInput() {
    return this._recoveryCauseSecurityViolation;
  }

  // recovery_cause_sfp_config_mismatch - computed: false, optional: true, required: false
  private _recoveryCauseSfpConfigMismatch?: boolean | cdktf.IResolvable; 
  public get recoveryCauseSfpConfigMismatch() {
    return this.getBooleanAttribute('recovery_cause_sfp_config_mismatch');
  }
  public set recoveryCauseSfpConfigMismatch(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseSfpConfigMismatch = value;
  }
  public resetRecoveryCauseSfpConfigMismatch() {
    this._recoveryCauseSfpConfigMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseSfpConfigMismatchInput() {
    return this._recoveryCauseSfpConfigMismatch;
  }

  // recovery_cause_small_frame - computed: false, optional: true, required: false
  private _recoveryCauseSmallFrame?: boolean | cdktf.IResolvable; 
  public get recoveryCauseSmallFrame() {
    return this.getBooleanAttribute('recovery_cause_small_frame');
  }
  public set recoveryCauseSmallFrame(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseSmallFrame = value;
  }
  public resetRecoveryCauseSmallFrame() {
    this._recoveryCauseSmallFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseSmallFrameInput() {
    return this._recoveryCauseSmallFrame;
  }

  // recovery_cause_storm_control - computed: false, optional: true, required: false
  private _recoveryCauseStormControl?: boolean | cdktf.IResolvable; 
  public get recoveryCauseStormControl() {
    return this.getBooleanAttribute('recovery_cause_storm_control');
  }
  public set recoveryCauseStormControl(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseStormControl = value;
  }
  public resetRecoveryCauseStormControl() {
    this._recoveryCauseStormControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseStormControlInput() {
    return this._recoveryCauseStormControl;
  }

  // recovery_cause_udld - computed: false, optional: true, required: false
  private _recoveryCauseUdld?: boolean | cdktf.IResolvable; 
  public get recoveryCauseUdld() {
    return this.getBooleanAttribute('recovery_cause_udld');
  }
  public set recoveryCauseUdld(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseUdld = value;
  }
  public resetRecoveryCauseUdld() {
    this._recoveryCauseUdld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseUdldInput() {
    return this._recoveryCauseUdld;
  }

  // recovery_cause_unicast_flood - computed: false, optional: true, required: false
  private _recoveryCauseUnicastFlood?: boolean | cdktf.IResolvable; 
  public get recoveryCauseUnicastFlood() {
    return this.getBooleanAttribute('recovery_cause_unicast_flood');
  }
  public set recoveryCauseUnicastFlood(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseUnicastFlood = value;
  }
  public resetRecoveryCauseUnicastFlood() {
    this._recoveryCauseUnicastFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseUnicastFloodInput() {
    return this._recoveryCauseUnicastFlood;
  }

  // recovery_cause_vmps - computed: false, optional: true, required: false
  private _recoveryCauseVmps?: boolean | cdktf.IResolvable; 
  public get recoveryCauseVmps() {
    return this.getBooleanAttribute('recovery_cause_vmps');
  }
  public set recoveryCauseVmps(value: boolean | cdktf.IResolvable) {
    this._recoveryCauseVmps = value;
  }
  public resetRecoveryCauseVmps() {
    this._recoveryCauseVmps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryCauseVmpsInput() {
    return this._recoveryCauseVmps;
  }

  // recovery_interval - computed: false, optional: true, required: false
  private _recoveryInterval?: number; 
  public get recoveryInterval() {
    return this.getNumberAttribute('recovery_interval');
  }
  public set recoveryInterval(value: number) {
    this._recoveryInterval = value;
  }
  public resetRecoveryInterval() {
    this._recoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryIntervalInput() {
    return this._recoveryInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      detect_cause_all: cdktf.booleanToTerraform(this._detectCauseAll),
      detect_cause_arp_inspection: cdktf.booleanToTerraform(this._detectCauseArpInspection),
      detect_cause_bpduguard: cdktf.booleanToTerraform(this._detectCauseBpduguard),
      detect_cause_dhcp_rate_limit: cdktf.booleanToTerraform(this._detectCauseDhcpRateLimit),
      detect_cause_dtp_flap: cdktf.booleanToTerraform(this._detectCauseDtpFlap),
      detect_cause_gbic_invalid: cdktf.booleanToTerraform(this._detectCauseGbicInvalid),
      detect_cause_inline_power: cdktf.booleanToTerraform(this._detectCauseInlinePower),
      detect_cause_l2ptguard: cdktf.booleanToTerraform(this._detectCauseL2Ptguard),
      detect_cause_link_flap: cdktf.booleanToTerraform(this._detectCauseLinkFlap),
      detect_cause_loopback: cdktf.booleanToTerraform(this._detectCauseLoopback),
      detect_cause_loopdetect: cdktf.booleanToTerraform(this._detectCauseLoopdetect),
      detect_cause_mlacp_minlink: cdktf.booleanToTerraform(this._detectCauseMlacpMinlink),
      detect_cause_pagp_flap: cdktf.booleanToTerraform(this._detectCausePagpFlap),
      detect_cause_pppoe_ia_rate_limit: cdktf.booleanToTerraform(this._detectCausePppoeIaRateLimit),
      detect_cause_security_violation_shutdown_vlan: cdktf.booleanToTerraform(this._detectCauseSecurityViolationShutdownVlan),
      detect_cause_sfp_config_mismatch: cdktf.booleanToTerraform(this._detectCauseSfpConfigMismatch),
      detect_cause_small_frame: cdktf.booleanToTerraform(this._detectCauseSmallFrame),
      device: cdktf.stringToTerraform(this._device),
      flap_setting_cause_dtp_flap_max_flaps: cdktf.numberToTerraform(this._flapSettingCauseDtpFlapMaxFlaps),
      flap_setting_cause_dtp_flap_time: cdktf.numberToTerraform(this._flapSettingCauseDtpFlapTime),
      flap_setting_cause_link_flap_max_flaps: cdktf.numberToTerraform(this._flapSettingCauseLinkFlapMaxFlaps),
      flap_setting_cause_link_flap_time: cdktf.numberToTerraform(this._flapSettingCauseLinkFlapTime),
      flap_setting_cause_pagp_flap_max_flaps: cdktf.numberToTerraform(this._flapSettingCausePagpFlapMaxFlaps),
      flap_setting_cause_pagp_flap_time: cdktf.numberToTerraform(this._flapSettingCausePagpFlapTime),
      recovery_cause_all: cdktf.booleanToTerraform(this._recoveryCauseAll),
      recovery_cause_arp_inspection: cdktf.booleanToTerraform(this._recoveryCauseArpInspection),
      recovery_cause_bpduguard: cdktf.booleanToTerraform(this._recoveryCauseBpduguard),
      recovery_cause_channel_misconfig: cdktf.booleanToTerraform(this._recoveryCauseChannelMisconfig),
      recovery_cause_dhcp_rate_limit: cdktf.booleanToTerraform(this._recoveryCauseDhcpRateLimit),
      recovery_cause_dtp_flap: cdktf.booleanToTerraform(this._recoveryCauseDtpFlap),
      recovery_cause_gbic_invalid: cdktf.booleanToTerraform(this._recoveryCauseGbicInvalid),
      recovery_cause_inline_power: cdktf.booleanToTerraform(this._recoveryCauseInlinePower),
      recovery_cause_l2ptguard: cdktf.booleanToTerraform(this._recoveryCauseL2Ptguard),
      recovery_cause_link_flap: cdktf.booleanToTerraform(this._recoveryCauseLinkFlap),
      recovery_cause_link_monitor_failure: cdktf.booleanToTerraform(this._recoveryCauseLinkMonitorFailure),
      recovery_cause_loopback: cdktf.booleanToTerraform(this._recoveryCauseLoopback),
      recovery_cause_loopdetect: cdktf.booleanToTerraform(this._recoveryCauseLoopdetect),
      recovery_cause_mac_limit: cdktf.booleanToTerraform(this._recoveryCauseMacLimit),
      recovery_cause_mlacp_minlink: cdktf.booleanToTerraform(this._recoveryCauseMlacpMinlink),
      recovery_cause_mrp_miscabling: cdktf.booleanToTerraform(this._recoveryCauseMrpMiscabling),
      recovery_cause_oam_remote_failure: cdktf.booleanToTerraform(this._recoveryCauseOamRemoteFailure),
      recovery_cause_pagp_flap: cdktf.booleanToTerraform(this._recoveryCausePagpFlap),
      recovery_cause_port_mode_failure: cdktf.booleanToTerraform(this._recoveryCausePortModeFailure),
      recovery_cause_pppoe_ia_rate_limit: cdktf.booleanToTerraform(this._recoveryCausePppoeIaRateLimit),
      recovery_cause_psecure_violation: cdktf.booleanToTerraform(this._recoveryCausePsecureViolation),
      recovery_cause_psp: cdktf.booleanToTerraform(this._recoveryCausePsp),
      recovery_cause_security_violation: cdktf.booleanToTerraform(this._recoveryCauseSecurityViolation),
      recovery_cause_sfp_config_mismatch: cdktf.booleanToTerraform(this._recoveryCauseSfpConfigMismatch),
      recovery_cause_small_frame: cdktf.booleanToTerraform(this._recoveryCauseSmallFrame),
      recovery_cause_storm_control: cdktf.booleanToTerraform(this._recoveryCauseStormControl),
      recovery_cause_udld: cdktf.booleanToTerraform(this._recoveryCauseUdld),
      recovery_cause_unicast_flood: cdktf.booleanToTerraform(this._recoveryCauseUnicastFlood),
      recovery_cause_vmps: cdktf.booleanToTerraform(this._recoveryCauseVmps),
      recovery_interval: cdktf.numberToTerraform(this._recoveryInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_cause_all: {
        value: cdktf.booleanToHclTerraform(this._detectCauseAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_arp_inspection: {
        value: cdktf.booleanToHclTerraform(this._detectCauseArpInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_bpduguard: {
        value: cdktf.booleanToHclTerraform(this._detectCauseBpduguard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_dhcp_rate_limit: {
        value: cdktf.booleanToHclTerraform(this._detectCauseDhcpRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_dtp_flap: {
        value: cdktf.booleanToHclTerraform(this._detectCauseDtpFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_gbic_invalid: {
        value: cdktf.booleanToHclTerraform(this._detectCauseGbicInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_inline_power: {
        value: cdktf.booleanToHclTerraform(this._detectCauseInlinePower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_l2ptguard: {
        value: cdktf.booleanToHclTerraform(this._detectCauseL2Ptguard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_link_flap: {
        value: cdktf.booleanToHclTerraform(this._detectCauseLinkFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_loopback: {
        value: cdktf.booleanToHclTerraform(this._detectCauseLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_loopdetect: {
        value: cdktf.booleanToHclTerraform(this._detectCauseLoopdetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_mlacp_minlink: {
        value: cdktf.booleanToHclTerraform(this._detectCauseMlacpMinlink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_pagp_flap: {
        value: cdktf.booleanToHclTerraform(this._detectCausePagpFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_pppoe_ia_rate_limit: {
        value: cdktf.booleanToHclTerraform(this._detectCausePppoeIaRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_security_violation_shutdown_vlan: {
        value: cdktf.booleanToHclTerraform(this._detectCauseSecurityViolationShutdownVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_sfp_config_mismatch: {
        value: cdktf.booleanToHclTerraform(this._detectCauseSfpConfigMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_cause_small_frame: {
        value: cdktf.booleanToHclTerraform(this._detectCauseSmallFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flap_setting_cause_dtp_flap_max_flaps: {
        value: cdktf.numberToHclTerraform(this._flapSettingCauseDtpFlapMaxFlaps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_setting_cause_dtp_flap_time: {
        value: cdktf.numberToHclTerraform(this._flapSettingCauseDtpFlapTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_setting_cause_link_flap_max_flaps: {
        value: cdktf.numberToHclTerraform(this._flapSettingCauseLinkFlapMaxFlaps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_setting_cause_link_flap_time: {
        value: cdktf.numberToHclTerraform(this._flapSettingCauseLinkFlapTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_setting_cause_pagp_flap_max_flaps: {
        value: cdktf.numberToHclTerraform(this._flapSettingCausePagpFlapMaxFlaps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flap_setting_cause_pagp_flap_time: {
        value: cdktf.numberToHclTerraform(this._flapSettingCausePagpFlapTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_cause_all: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_arp_inspection: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseArpInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_bpduguard: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseBpduguard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_channel_misconfig: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseChannelMisconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_dhcp_rate_limit: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseDhcpRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_dtp_flap: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseDtpFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_gbic_invalid: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseGbicInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_inline_power: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseInlinePower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_l2ptguard: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseL2Ptguard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_link_flap: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseLinkFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_link_monitor_failure: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseLinkMonitorFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_loopback: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_loopdetect: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseLoopdetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_mac_limit: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseMacLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_mlacp_minlink: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseMlacpMinlink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_mrp_miscabling: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseMrpMiscabling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_oam_remote_failure: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseOamRemoteFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_pagp_flap: {
        value: cdktf.booleanToHclTerraform(this._recoveryCausePagpFlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_port_mode_failure: {
        value: cdktf.booleanToHclTerraform(this._recoveryCausePortModeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_pppoe_ia_rate_limit: {
        value: cdktf.booleanToHclTerraform(this._recoveryCausePppoeIaRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_psecure_violation: {
        value: cdktf.booleanToHclTerraform(this._recoveryCausePsecureViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_psp: {
        value: cdktf.booleanToHclTerraform(this._recoveryCausePsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_security_violation: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseSecurityViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_sfp_config_mismatch: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseSfpConfigMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_small_frame: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseSmallFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_storm_control: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseStormControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_udld: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseUdld),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_unicast_flood: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseUnicastFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_cause_vmps: {
        value: cdktf.booleanToHclTerraform(this._recoveryCauseVmps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recovery_interval: {
        value: cdktf.numberToHclTerraform(this._recoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
