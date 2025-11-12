// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErrorDisableRecoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#cluster_minlinks_interval ErrorDisableRecovery#cluster_minlinks_interval}
  */
  readonly clusterMinlinksInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#cluster_udld_interval ErrorDisableRecovery#cluster_udld_interval}
  */
  readonly clusterUdldInterval?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#delete_mode ErrorDisableRecovery#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#device ErrorDisableRecovery#device}
  */
  readonly device?: string;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#l2vpn_bport_mac_move_interval ErrorDisableRecovery#l2vpn_bport_mac_move_interval}
  */
  readonly l2VpnBportMacMoveInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_capabilities_conflict_interval ErrorDisableRecovery#link_oam_capabilities_conflict_interval}
  */
  readonly linkOamCapabilitiesConflictInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_critical_event_interval ErrorDisableRecovery#link_oam_critical_event_interval}
  */
  readonly linkOamCriticalEventInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_dampening_interval ErrorDisableRecovery#link_oam_dampening_interval}
  */
  readonly linkOamDampeningInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_discovery_timeout_interval ErrorDisableRecovery#link_oam_discovery_timeout_interval}
  */
  readonly linkOamDiscoveryTimeoutInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_dying_gasp_interval ErrorDisableRecovery#link_oam_dying_gasp_interval}
  */
  readonly linkOamDyingGaspInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_link_fault_interval ErrorDisableRecovery#link_oam_link_fault_interval}
  */
  readonly linkOamLinkFaultInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_miswired_interval ErrorDisableRecovery#link_oam_miswired_interval}
  */
  readonly linkOamMiswiredInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_session_down_interval ErrorDisableRecovery#link_oam_session_down_interval}
  */
  readonly linkOamSessionDownInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#link_oam_threshold_breached_interval ErrorDisableRecovery#link_oam_threshold_breached_interval}
  */
  readonly linkOamThresholdBreachedInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#ot_track_state_change_interval ErrorDisableRecovery#ot_track_state_change_interval}
  */
  readonly otTrackStateChangeInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#pvrst_pvid_mismatch_interval ErrorDisableRecovery#pvrst_pvid_mismatch_interval}
  */
  readonly pvrstPvidMismatchInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#stp_bpdu_guard_interval ErrorDisableRecovery#stp_bpdu_guard_interval}
  */
  readonly stpBpduGuardInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#stp_legacy_bpdu_interval ErrorDisableRecovery#stp_legacy_bpdu_interval}
  */
  readonly stpLegacyBpduInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#udld_loopback_interval ErrorDisableRecovery#udld_loopback_interval}
  */
  readonly udldLoopbackInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#udld_neighbor_mismatch_interval ErrorDisableRecovery#udld_neighbor_mismatch_interval}
  */
  readonly udldNeighborMismatchInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#udld_timeout_interval ErrorDisableRecovery#udld_timeout_interval}
  */
  readonly udldTimeoutInterval?: number;
  /**
  * Configure an interval for the auto-recovery period
  *   - Range: `30`-`1000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#udld_unidirectional_interval ErrorDisableRecovery#udld_unidirectional_interval}
  */
  readonly udldUnidirectionalInterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery iosxr_error_disable_recovery}
*/
export class ErrorDisableRecovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_error_disable_recovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ErrorDisableRecovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ErrorDisableRecovery to import
  * @param importFromId The id of the existing ErrorDisableRecovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ErrorDisableRecovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_error_disable_recovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/error_disable_recovery iosxr_error_disable_recovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErrorDisableRecoveryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ErrorDisableRecoveryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_error_disable_recovery',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterMinlinksInterval = config.clusterMinlinksInterval;
    this._clusterUdldInterval = config.clusterUdldInterval;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._l2VpnBportMacMoveInterval = config.l2VpnBportMacMoveInterval;
    this._linkOamCapabilitiesConflictInterval = config.linkOamCapabilitiesConflictInterval;
    this._linkOamCriticalEventInterval = config.linkOamCriticalEventInterval;
    this._linkOamDampeningInterval = config.linkOamDampeningInterval;
    this._linkOamDiscoveryTimeoutInterval = config.linkOamDiscoveryTimeoutInterval;
    this._linkOamDyingGaspInterval = config.linkOamDyingGaspInterval;
    this._linkOamLinkFaultInterval = config.linkOamLinkFaultInterval;
    this._linkOamMiswiredInterval = config.linkOamMiswiredInterval;
    this._linkOamSessionDownInterval = config.linkOamSessionDownInterval;
    this._linkOamThresholdBreachedInterval = config.linkOamThresholdBreachedInterval;
    this._otTrackStateChangeInterval = config.otTrackStateChangeInterval;
    this._pvrstPvidMismatchInterval = config.pvrstPvidMismatchInterval;
    this._stpBpduGuardInterval = config.stpBpduGuardInterval;
    this._stpLegacyBpduInterval = config.stpLegacyBpduInterval;
    this._udldLoopbackInterval = config.udldLoopbackInterval;
    this._udldNeighborMismatchInterval = config.udldNeighborMismatchInterval;
    this._udldTimeoutInterval = config.udldTimeoutInterval;
    this._udldUnidirectionalInterval = config.udldUnidirectionalInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_minlinks_interval - computed: false, optional: true, required: false
  private _clusterMinlinksInterval?: number; 
  public get clusterMinlinksInterval() {
    return this.getNumberAttribute('cluster_minlinks_interval');
  }
  public set clusterMinlinksInterval(value: number) {
    this._clusterMinlinksInterval = value;
  }
  public resetClusterMinlinksInterval() {
    this._clusterMinlinksInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMinlinksIntervalInput() {
    return this._clusterMinlinksInterval;
  }

  // cluster_udld_interval - computed: false, optional: true, required: false
  private _clusterUdldInterval?: number; 
  public get clusterUdldInterval() {
    return this.getNumberAttribute('cluster_udld_interval');
  }
  public set clusterUdldInterval(value: number) {
    this._clusterUdldInterval = value;
  }
  public resetClusterUdldInterval() {
    this._clusterUdldInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUdldIntervalInput() {
    return this._clusterUdldInterval;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l2vpn_bport_mac_move_interval - computed: false, optional: true, required: false
  private _l2VpnBportMacMoveInterval?: number; 
  public get l2VpnBportMacMoveInterval() {
    return this.getNumberAttribute('l2vpn_bport_mac_move_interval');
  }
  public set l2VpnBportMacMoveInterval(value: number) {
    this._l2VpnBportMacMoveInterval = value;
  }
  public resetL2VpnBportMacMoveInterval() {
    this._l2VpnBportMacMoveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2VpnBportMacMoveIntervalInput() {
    return this._l2VpnBportMacMoveInterval;
  }

  // link_oam_capabilities_conflict_interval - computed: false, optional: true, required: false
  private _linkOamCapabilitiesConflictInterval?: number; 
  public get linkOamCapabilitiesConflictInterval() {
    return this.getNumberAttribute('link_oam_capabilities_conflict_interval');
  }
  public set linkOamCapabilitiesConflictInterval(value: number) {
    this._linkOamCapabilitiesConflictInterval = value;
  }
  public resetLinkOamCapabilitiesConflictInterval() {
    this._linkOamCapabilitiesConflictInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamCapabilitiesConflictIntervalInput() {
    return this._linkOamCapabilitiesConflictInterval;
  }

  // link_oam_critical_event_interval - computed: false, optional: true, required: false
  private _linkOamCriticalEventInterval?: number; 
  public get linkOamCriticalEventInterval() {
    return this.getNumberAttribute('link_oam_critical_event_interval');
  }
  public set linkOamCriticalEventInterval(value: number) {
    this._linkOamCriticalEventInterval = value;
  }
  public resetLinkOamCriticalEventInterval() {
    this._linkOamCriticalEventInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamCriticalEventIntervalInput() {
    return this._linkOamCriticalEventInterval;
  }

  // link_oam_dampening_interval - computed: false, optional: true, required: false
  private _linkOamDampeningInterval?: number; 
  public get linkOamDampeningInterval() {
    return this.getNumberAttribute('link_oam_dampening_interval');
  }
  public set linkOamDampeningInterval(value: number) {
    this._linkOamDampeningInterval = value;
  }
  public resetLinkOamDampeningInterval() {
    this._linkOamDampeningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamDampeningIntervalInput() {
    return this._linkOamDampeningInterval;
  }

  // link_oam_discovery_timeout_interval - computed: false, optional: true, required: false
  private _linkOamDiscoveryTimeoutInterval?: number; 
  public get linkOamDiscoveryTimeoutInterval() {
    return this.getNumberAttribute('link_oam_discovery_timeout_interval');
  }
  public set linkOamDiscoveryTimeoutInterval(value: number) {
    this._linkOamDiscoveryTimeoutInterval = value;
  }
  public resetLinkOamDiscoveryTimeoutInterval() {
    this._linkOamDiscoveryTimeoutInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamDiscoveryTimeoutIntervalInput() {
    return this._linkOamDiscoveryTimeoutInterval;
  }

  // link_oam_dying_gasp_interval - computed: false, optional: true, required: false
  private _linkOamDyingGaspInterval?: number; 
  public get linkOamDyingGaspInterval() {
    return this.getNumberAttribute('link_oam_dying_gasp_interval');
  }
  public set linkOamDyingGaspInterval(value: number) {
    this._linkOamDyingGaspInterval = value;
  }
  public resetLinkOamDyingGaspInterval() {
    this._linkOamDyingGaspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamDyingGaspIntervalInput() {
    return this._linkOamDyingGaspInterval;
  }

  // link_oam_link_fault_interval - computed: false, optional: true, required: false
  private _linkOamLinkFaultInterval?: number; 
  public get linkOamLinkFaultInterval() {
    return this.getNumberAttribute('link_oam_link_fault_interval');
  }
  public set linkOamLinkFaultInterval(value: number) {
    this._linkOamLinkFaultInterval = value;
  }
  public resetLinkOamLinkFaultInterval() {
    this._linkOamLinkFaultInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamLinkFaultIntervalInput() {
    return this._linkOamLinkFaultInterval;
  }

  // link_oam_miswired_interval - computed: false, optional: true, required: false
  private _linkOamMiswiredInterval?: number; 
  public get linkOamMiswiredInterval() {
    return this.getNumberAttribute('link_oam_miswired_interval');
  }
  public set linkOamMiswiredInterval(value: number) {
    this._linkOamMiswiredInterval = value;
  }
  public resetLinkOamMiswiredInterval() {
    this._linkOamMiswiredInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamMiswiredIntervalInput() {
    return this._linkOamMiswiredInterval;
  }

  // link_oam_session_down_interval - computed: false, optional: true, required: false
  private _linkOamSessionDownInterval?: number; 
  public get linkOamSessionDownInterval() {
    return this.getNumberAttribute('link_oam_session_down_interval');
  }
  public set linkOamSessionDownInterval(value: number) {
    this._linkOamSessionDownInterval = value;
  }
  public resetLinkOamSessionDownInterval() {
    this._linkOamSessionDownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamSessionDownIntervalInput() {
    return this._linkOamSessionDownInterval;
  }

  // link_oam_threshold_breached_interval - computed: false, optional: true, required: false
  private _linkOamThresholdBreachedInterval?: number; 
  public get linkOamThresholdBreachedInterval() {
    return this.getNumberAttribute('link_oam_threshold_breached_interval');
  }
  public set linkOamThresholdBreachedInterval(value: number) {
    this._linkOamThresholdBreachedInterval = value;
  }
  public resetLinkOamThresholdBreachedInterval() {
    this._linkOamThresholdBreachedInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOamThresholdBreachedIntervalInput() {
    return this._linkOamThresholdBreachedInterval;
  }

  // ot_track_state_change_interval - computed: false, optional: true, required: false
  private _otTrackStateChangeInterval?: number; 
  public get otTrackStateChangeInterval() {
    return this.getNumberAttribute('ot_track_state_change_interval');
  }
  public set otTrackStateChangeInterval(value: number) {
    this._otTrackStateChangeInterval = value;
  }
  public resetOtTrackStateChangeInterval() {
    this._otTrackStateChangeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otTrackStateChangeIntervalInput() {
    return this._otTrackStateChangeInterval;
  }

  // pvrst_pvid_mismatch_interval - computed: false, optional: true, required: false
  private _pvrstPvidMismatchInterval?: number; 
  public get pvrstPvidMismatchInterval() {
    return this.getNumberAttribute('pvrst_pvid_mismatch_interval');
  }
  public set pvrstPvidMismatchInterval(value: number) {
    this._pvrstPvidMismatchInterval = value;
  }
  public resetPvrstPvidMismatchInterval() {
    this._pvrstPvidMismatchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvrstPvidMismatchIntervalInput() {
    return this._pvrstPvidMismatchInterval;
  }

  // stp_bpdu_guard_interval - computed: false, optional: true, required: false
  private _stpBpduGuardInterval?: number; 
  public get stpBpduGuardInterval() {
    return this.getNumberAttribute('stp_bpdu_guard_interval');
  }
  public set stpBpduGuardInterval(value: number) {
    this._stpBpduGuardInterval = value;
  }
  public resetStpBpduGuardInterval() {
    this._stpBpduGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBpduGuardIntervalInput() {
    return this._stpBpduGuardInterval;
  }

  // stp_legacy_bpdu_interval - computed: false, optional: true, required: false
  private _stpLegacyBpduInterval?: number; 
  public get stpLegacyBpduInterval() {
    return this.getNumberAttribute('stp_legacy_bpdu_interval');
  }
  public set stpLegacyBpduInterval(value: number) {
    this._stpLegacyBpduInterval = value;
  }
  public resetStpLegacyBpduInterval() {
    this._stpLegacyBpduInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpLegacyBpduIntervalInput() {
    return this._stpLegacyBpduInterval;
  }

  // udld_loopback_interval - computed: false, optional: true, required: false
  private _udldLoopbackInterval?: number; 
  public get udldLoopbackInterval() {
    return this.getNumberAttribute('udld_loopback_interval');
  }
  public set udldLoopbackInterval(value: number) {
    this._udldLoopbackInterval = value;
  }
  public resetUdldLoopbackInterval() {
    this._udldLoopbackInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldLoopbackIntervalInput() {
    return this._udldLoopbackInterval;
  }

  // udld_neighbor_mismatch_interval - computed: false, optional: true, required: false
  private _udldNeighborMismatchInterval?: number; 
  public get udldNeighborMismatchInterval() {
    return this.getNumberAttribute('udld_neighbor_mismatch_interval');
  }
  public set udldNeighborMismatchInterval(value: number) {
    this._udldNeighborMismatchInterval = value;
  }
  public resetUdldNeighborMismatchInterval() {
    this._udldNeighborMismatchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldNeighborMismatchIntervalInput() {
    return this._udldNeighborMismatchInterval;
  }

  // udld_timeout_interval - computed: false, optional: true, required: false
  private _udldTimeoutInterval?: number; 
  public get udldTimeoutInterval() {
    return this.getNumberAttribute('udld_timeout_interval');
  }
  public set udldTimeoutInterval(value: number) {
    this._udldTimeoutInterval = value;
  }
  public resetUdldTimeoutInterval() {
    this._udldTimeoutInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldTimeoutIntervalInput() {
    return this._udldTimeoutInterval;
  }

  // udld_unidirectional_interval - computed: false, optional: true, required: false
  private _udldUnidirectionalInterval?: number; 
  public get udldUnidirectionalInterval() {
    return this.getNumberAttribute('udld_unidirectional_interval');
  }
  public set udldUnidirectionalInterval(value: number) {
    this._udldUnidirectionalInterval = value;
  }
  public resetUdldUnidirectionalInterval() {
    this._udldUnidirectionalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udldUnidirectionalIntervalInput() {
    return this._udldUnidirectionalInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_minlinks_interval: cdktf.numberToTerraform(this._clusterMinlinksInterval),
      cluster_udld_interval: cdktf.numberToTerraform(this._clusterUdldInterval),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      l2vpn_bport_mac_move_interval: cdktf.numberToTerraform(this._l2VpnBportMacMoveInterval),
      link_oam_capabilities_conflict_interval: cdktf.numberToTerraform(this._linkOamCapabilitiesConflictInterval),
      link_oam_critical_event_interval: cdktf.numberToTerraform(this._linkOamCriticalEventInterval),
      link_oam_dampening_interval: cdktf.numberToTerraform(this._linkOamDampeningInterval),
      link_oam_discovery_timeout_interval: cdktf.numberToTerraform(this._linkOamDiscoveryTimeoutInterval),
      link_oam_dying_gasp_interval: cdktf.numberToTerraform(this._linkOamDyingGaspInterval),
      link_oam_link_fault_interval: cdktf.numberToTerraform(this._linkOamLinkFaultInterval),
      link_oam_miswired_interval: cdktf.numberToTerraform(this._linkOamMiswiredInterval),
      link_oam_session_down_interval: cdktf.numberToTerraform(this._linkOamSessionDownInterval),
      link_oam_threshold_breached_interval: cdktf.numberToTerraform(this._linkOamThresholdBreachedInterval),
      ot_track_state_change_interval: cdktf.numberToTerraform(this._otTrackStateChangeInterval),
      pvrst_pvid_mismatch_interval: cdktf.numberToTerraform(this._pvrstPvidMismatchInterval),
      stp_bpdu_guard_interval: cdktf.numberToTerraform(this._stpBpduGuardInterval),
      stp_legacy_bpdu_interval: cdktf.numberToTerraform(this._stpLegacyBpduInterval),
      udld_loopback_interval: cdktf.numberToTerraform(this._udldLoopbackInterval),
      udld_neighbor_mismatch_interval: cdktf.numberToTerraform(this._udldNeighborMismatchInterval),
      udld_timeout_interval: cdktf.numberToTerraform(this._udldTimeoutInterval),
      udld_unidirectional_interval: cdktf.numberToTerraform(this._udldUnidirectionalInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_minlinks_interval: {
        value: cdktf.numberToHclTerraform(this._clusterMinlinksInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_udld_interval: {
        value: cdktf.numberToHclTerraform(this._clusterUdldInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2vpn_bport_mac_move_interval: {
        value: cdktf.numberToHclTerraform(this._l2VpnBportMacMoveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_capabilities_conflict_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamCapabilitiesConflictInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_critical_event_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamCriticalEventInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_dampening_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamDampeningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_discovery_timeout_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamDiscoveryTimeoutInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_dying_gasp_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamDyingGaspInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_link_fault_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamLinkFaultInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_miswired_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamMiswiredInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_session_down_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamSessionDownInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_oam_threshold_breached_interval: {
        value: cdktf.numberToHclTerraform(this._linkOamThresholdBreachedInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ot_track_state_change_interval: {
        value: cdktf.numberToHclTerraform(this._otTrackStateChangeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pvrst_pvid_mismatch_interval: {
        value: cdktf.numberToHclTerraform(this._pvrstPvidMismatchInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_bpdu_guard_interval: {
        value: cdktf.numberToHclTerraform(this._stpBpduGuardInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_legacy_bpdu_interval: {
        value: cdktf.numberToHclTerraform(this._stpLegacyBpduInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udld_loopback_interval: {
        value: cdktf.numberToHclTerraform(this._udldLoopbackInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udld_neighbor_mismatch_interval: {
        value: cdktf.numberToHclTerraform(this._udldNeighborMismatchInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udld_timeout_interval: {
        value: cdktf.numberToHclTerraform(this._udldTimeoutInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udld_unidirectional_interval: {
        value: cdktf.numberToHclTerraform(this._udldUnidirectionalInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
