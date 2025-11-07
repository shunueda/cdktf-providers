// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_oam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrMplsOamConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_oam#device DataIosxrMplsOam#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_oam iosxr_mpls_oam}
*/
export class DataIosxrMplsOam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_mpls_oam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrMplsOam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrMplsOam to import
  * @param importFromId The id of the existing DataIosxrMplsOam that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_oam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrMplsOam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_mpls_oam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_oam iosxr_mpls_oam} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrMplsOamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrMplsOamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_mpls_oam',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
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

  // oam - computed: true, optional: false, required: false
  public get oam() {
    return this.getBooleanAttribute('oam');
  }

  // oam_dpm_interval - computed: true, optional: false, required: false
  public get oamDpmInterval() {
    return this.getNumberAttribute('oam_dpm_interval');
  }

  // oam_dpm_pps - computed: true, optional: false, required: false
  public get oamDpmPps() {
    return this.getNumberAttribute('oam_dpm_pps');
  }

  // oam_echo_disable_vendor_extension - computed: true, optional: false, required: false
  public get oamEchoDisableVendorExtension() {
    return this.getBooleanAttribute('oam_echo_disable_vendor_extension');
  }

  // oam_echo_reply_mode_control_channel_allow_reverse_lsp - computed: true, optional: false, required: false
  public get oamEchoReplyModeControlChannelAllowReverseLsp() {
    return this.getBooleanAttribute('oam_echo_reply_mode_control_channel_allow_reverse_lsp');
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
