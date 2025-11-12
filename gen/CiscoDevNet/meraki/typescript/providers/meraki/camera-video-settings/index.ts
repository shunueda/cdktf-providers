// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraVideoSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean indicating if external rtsp stream is exposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings#external_rtsp_enabled CameraVideoSettings#external_rtsp_enabled}
  */
  readonly externalRtspEnabled: boolean | cdktf.IResolvable;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings#serial CameraVideoSettings#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings meraki_camera_video_settings}
*/
export class CameraVideoSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_video_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraVideoSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraVideoSettings to import
  * @param importFromId The id of the existing CameraVideoSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraVideoSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_video_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_video_settings meraki_camera_video_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraVideoSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CameraVideoSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_video_settings',
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
    this._externalRtspEnabled = config.externalRtspEnabled;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_rtsp_enabled - computed: false, optional: false, required: true
  private _externalRtspEnabled?: boolean | cdktf.IResolvable; 
  public get externalRtspEnabled() {
    return this.getBooleanAttribute('external_rtsp_enabled');
  }
  public set externalRtspEnabled(value: boolean | cdktf.IResolvable) {
    this._externalRtspEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRtspEnabledInput() {
    return this._externalRtspEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      external_rtsp_enabled: cdktf.booleanToTerraform(this._externalRtspEnabled),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_rtsp_enabled: {
        value: cdktf.booleanToHclTerraform(this._externalRtspEnabled),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
