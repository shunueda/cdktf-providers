// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_quality_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiCameraQualityRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_quality_retention#serial DataMerakiCameraQualityRetention#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_quality_retention meraki_camera_quality_retention}
*/
export class DataMerakiCameraQualityRetention extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_quality_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiCameraQualityRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiCameraQualityRetention to import
  * @param importFromId The id of the existing DataMerakiCameraQualityRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_quality_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiCameraQualityRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_quality_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/camera_quality_retention meraki_camera_quality_retention} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiCameraQualityRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiCameraQualityRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_quality_retention',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_recording_enabled - computed: true, optional: false, required: false
  public get audioRecordingEnabled() {
    return this.getBooleanAttribute('audio_recording_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // motion_based_retention_enabled - computed: true, optional: false, required: false
  public get motionBasedRetentionEnabled() {
    return this.getBooleanAttribute('motion_based_retention_enabled');
  }

  // motion_detector_version - computed: true, optional: false, required: false
  public get motionDetectorVersion() {
    return this.getNumberAttribute('motion_detector_version');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // resolution - computed: true, optional: false, required: false
  public get resolution() {
    return this.getStringAttribute('resolution');
  }

  // restricted_bandwidth_mode_enabled - computed: true, optional: false, required: false
  public get restrictedBandwidthModeEnabled() {
    return this.getBooleanAttribute('restricted_bandwidth_mode_enabled');
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
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
