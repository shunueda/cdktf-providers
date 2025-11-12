// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MplsOamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#delete_mode MplsOam#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#device MplsOam#device}
  */
  readonly device?: string;
  /**
  * OAM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#oam MplsOam#oam}
  */
  readonly oam?: boolean | cdktf.IResolvable;
  /**
  * Wait time between each iteration of DPM - default is 30mins
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#oam_dpm_interval MplsOam#oam_dpm_interval}
  */
  readonly oamDpmInterval?: number;
  /**
  * DPM packets per second rate - default is 50pps
  *   - Range: `1`-`250`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#oam_dpm_pps MplsOam#oam_dpm_pps}
  */
  readonly oamDpmPps?: number;
  /**
  * Disable sending vendor extension TLV with echo req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#oam_echo_disable_vendor_extension MplsOam#oam_echo_disable_vendor_extension}
  */
  readonly oamEchoDisableVendorExtension?: boolean | cdktf.IResolvable;
  /**
  * Use Reverse LSP as the control channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#oam_echo_reply_mode_control_channel_allow_reverse_lsp MplsOam#oam_echo_reply_mode_control_channel_allow_reverse_lsp}
  */
  readonly oamEchoReplyModeControlChannelAllowReverseLsp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam iosxr_mpls_oam}
*/
export class MplsOam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_mpls_oam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MplsOam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MplsOam to import
  * @param importFromId The id of the existing MplsOam that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MplsOam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_mpls_oam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_oam iosxr_mpls_oam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MplsOamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MplsOamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_mpls_oam',
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._oam = config.oam;
    this._oamDpmInterval = config.oamDpmInterval;
    this._oamDpmPps = config.oamDpmPps;
    this._oamEchoDisableVendorExtension = config.oamEchoDisableVendorExtension;
    this._oamEchoReplyModeControlChannelAllowReverseLsp = config.oamEchoReplyModeControlChannelAllowReverseLsp;
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

  // oam - computed: false, optional: true, required: false
  private _oam?: boolean | cdktf.IResolvable; 
  public get oam() {
    return this.getBooleanAttribute('oam');
  }
  public set oam(value: boolean | cdktf.IResolvable) {
    this._oam = value;
  }
  public resetOam() {
    this._oam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oamInput() {
    return this._oam;
  }

  // oam_dpm_interval - computed: false, optional: true, required: false
  private _oamDpmInterval?: number; 
  public get oamDpmInterval() {
    return this.getNumberAttribute('oam_dpm_interval');
  }
  public set oamDpmInterval(value: number) {
    this._oamDpmInterval = value;
  }
  public resetOamDpmInterval() {
    this._oamDpmInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oamDpmIntervalInput() {
    return this._oamDpmInterval;
  }

  // oam_dpm_pps - computed: false, optional: true, required: false
  private _oamDpmPps?: number; 
  public get oamDpmPps() {
    return this.getNumberAttribute('oam_dpm_pps');
  }
  public set oamDpmPps(value: number) {
    this._oamDpmPps = value;
  }
  public resetOamDpmPps() {
    this._oamDpmPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oamDpmPpsInput() {
    return this._oamDpmPps;
  }

  // oam_echo_disable_vendor_extension - computed: false, optional: true, required: false
  private _oamEchoDisableVendorExtension?: boolean | cdktf.IResolvable; 
  public get oamEchoDisableVendorExtension() {
    return this.getBooleanAttribute('oam_echo_disable_vendor_extension');
  }
  public set oamEchoDisableVendorExtension(value: boolean | cdktf.IResolvable) {
    this._oamEchoDisableVendorExtension = value;
  }
  public resetOamEchoDisableVendorExtension() {
    this._oamEchoDisableVendorExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oamEchoDisableVendorExtensionInput() {
    return this._oamEchoDisableVendorExtension;
  }

  // oam_echo_reply_mode_control_channel_allow_reverse_lsp - computed: false, optional: true, required: false
  private _oamEchoReplyModeControlChannelAllowReverseLsp?: boolean | cdktf.IResolvable; 
  public get oamEchoReplyModeControlChannelAllowReverseLsp() {
    return this.getBooleanAttribute('oam_echo_reply_mode_control_channel_allow_reverse_lsp');
  }
  public set oamEchoReplyModeControlChannelAllowReverseLsp(value: boolean | cdktf.IResolvable) {
    this._oamEchoReplyModeControlChannelAllowReverseLsp = value;
  }
  public resetOamEchoReplyModeControlChannelAllowReverseLsp() {
    this._oamEchoReplyModeControlChannelAllowReverseLsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oamEchoReplyModeControlChannelAllowReverseLspInput() {
    return this._oamEchoReplyModeControlChannelAllowReverseLsp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      oam: cdktf.booleanToTerraform(this._oam),
      oam_dpm_interval: cdktf.numberToTerraform(this._oamDpmInterval),
      oam_dpm_pps: cdktf.numberToTerraform(this._oamDpmPps),
      oam_echo_disable_vendor_extension: cdktf.booleanToTerraform(this._oamEchoDisableVendorExtension),
      oam_echo_reply_mode_control_channel_allow_reverse_lsp: cdktf.booleanToTerraform(this._oamEchoReplyModeControlChannelAllowReverseLsp),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oam: {
        value: cdktf.booleanToHclTerraform(this._oam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oam_dpm_interval: {
        value: cdktf.numberToHclTerraform(this._oamDpmInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oam_dpm_pps: {
        value: cdktf.numberToHclTerraform(this._oamDpmPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oam_echo_disable_vendor_extension: {
        value: cdktf.booleanToHclTerraform(this._oamEchoDisableVendorExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oam_echo_reply_mode_control_channel_allow_reverse_lsp: {
        value: cdktf.booleanToHclTerraform(this._oamEchoReplyModeControlChannelAllowReverseLsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
