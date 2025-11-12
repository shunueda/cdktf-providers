// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/error_disable_recovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrErrorDisableRecoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/error_disable_recovery#device DataIosxrErrorDisableRecovery#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/error_disable_recovery iosxr_error_disable_recovery}
*/
export class DataIosxrErrorDisableRecovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_error_disable_recovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrErrorDisableRecovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrErrorDisableRecovery to import
  * @param importFromId The id of the existing DataIosxrErrorDisableRecovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/error_disable_recovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrErrorDisableRecovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_error_disable_recovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/error_disable_recovery iosxr_error_disable_recovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrErrorDisableRecoveryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrErrorDisableRecoveryConfig = {}) {
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_minlinks_interval - computed: true, optional: false, required: false
  public get clusterMinlinksInterval() {
    return this.getNumberAttribute('cluster_minlinks_interval');
  }

  // cluster_udld_interval - computed: true, optional: false, required: false
  public get clusterUdldInterval() {
    return this.getNumberAttribute('cluster_udld_interval');
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

  // l2vpn_bport_mac_move_interval - computed: true, optional: false, required: false
  public get l2VpnBportMacMoveInterval() {
    return this.getNumberAttribute('l2vpn_bport_mac_move_interval');
  }

  // link_oam_capabilities_conflict_interval - computed: true, optional: false, required: false
  public get linkOamCapabilitiesConflictInterval() {
    return this.getNumberAttribute('link_oam_capabilities_conflict_interval');
  }

  // link_oam_critical_event_interval - computed: true, optional: false, required: false
  public get linkOamCriticalEventInterval() {
    return this.getNumberAttribute('link_oam_critical_event_interval');
  }

  // link_oam_dampening_interval - computed: true, optional: false, required: false
  public get linkOamDampeningInterval() {
    return this.getNumberAttribute('link_oam_dampening_interval');
  }

  // link_oam_discovery_timeout_interval - computed: true, optional: false, required: false
  public get linkOamDiscoveryTimeoutInterval() {
    return this.getNumberAttribute('link_oam_discovery_timeout_interval');
  }

  // link_oam_dying_gasp_interval - computed: true, optional: false, required: false
  public get linkOamDyingGaspInterval() {
    return this.getNumberAttribute('link_oam_dying_gasp_interval');
  }

  // link_oam_link_fault_interval - computed: true, optional: false, required: false
  public get linkOamLinkFaultInterval() {
    return this.getNumberAttribute('link_oam_link_fault_interval');
  }

  // link_oam_miswired_interval - computed: true, optional: false, required: false
  public get linkOamMiswiredInterval() {
    return this.getNumberAttribute('link_oam_miswired_interval');
  }

  // link_oam_session_down_interval - computed: true, optional: false, required: false
  public get linkOamSessionDownInterval() {
    return this.getNumberAttribute('link_oam_session_down_interval');
  }

  // link_oam_threshold_breached_interval - computed: true, optional: false, required: false
  public get linkOamThresholdBreachedInterval() {
    return this.getNumberAttribute('link_oam_threshold_breached_interval');
  }

  // ot_track_state_change_interval - computed: true, optional: false, required: false
  public get otTrackStateChangeInterval() {
    return this.getNumberAttribute('ot_track_state_change_interval');
  }

  // pvrst_pvid_mismatch_interval - computed: true, optional: false, required: false
  public get pvrstPvidMismatchInterval() {
    return this.getNumberAttribute('pvrst_pvid_mismatch_interval');
  }

  // stp_bpdu_guard_interval - computed: true, optional: false, required: false
  public get stpBpduGuardInterval() {
    return this.getNumberAttribute('stp_bpdu_guard_interval');
  }

  // stp_legacy_bpdu_interval - computed: true, optional: false, required: false
  public get stpLegacyBpduInterval() {
    return this.getNumberAttribute('stp_legacy_bpdu_interval');
  }

  // udld_loopback_interval - computed: true, optional: false, required: false
  public get udldLoopbackInterval() {
    return this.getNumberAttribute('udld_loopback_interval');
  }

  // udld_neighbor_mismatch_interval - computed: true, optional: false, required: false
  public get udldNeighborMismatchInterval() {
    return this.getNumberAttribute('udld_neighbor_mismatch_interval');
  }

  // udld_timeout_interval - computed: true, optional: false, required: false
  public get udldTimeoutInterval() {
    return this.getNumberAttribute('udld_timeout_interval');
  }

  // udld_unidirectional_interval - computed: true, optional: false, required: false
  public get udldUnidirectionalInterval() {
    return this.getNumberAttribute('udld_unidirectional_interval');
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
