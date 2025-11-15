// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraQualityRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#audio_recording_enabled CameraQualityRetention#audio_recording_enabled}
  */
  readonly audioRecordingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#motion_based_retention_enabled CameraQualityRetention#motion_based_retention_enabled}
  */
  readonly motionBasedRetentionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#motion_detector_version CameraQualityRetention#motion_detector_version}
  */
  readonly motionDetectorVersion?: number;
  /**
  * The ID of a quality and retention profile to assign to the camera. The profile`s settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#profile_id CameraQualityRetention#profile_id}
  */
  readonly profileId?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `High` or `Enhanced`. Not all qualities are supported by every camera model.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#quality CameraQualityRetention#quality}
  */
  readonly quality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720`, `1920x1080`, `1080x1080`, `2112x2112`, `2880x2880`, `2688x1512` or `3840x2160`.Not all resolutions are supported by every camera model.
  *   - Choices: `1080x1080`, `1280x720`, `1920x1080`, `2112x2112`, `2688x1512`, `2880x2880`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#resolution CameraQualityRetention#resolution}
  */
  readonly resolution?: string;
  /**
  * Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#restricted_bandwidth_mode_enabled CameraQualityRetention#restricted_bandwidth_mode_enabled}
  */
  readonly restrictedBandwidthModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#serial CameraQualityRetention#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention meraki_camera_quality_retention}
*/
export class CameraQualityRetention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_quality_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraQualityRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraQualityRetention to import
  * @param importFromId The id of the existing CameraQualityRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraQualityRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_quality_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/camera_quality_retention meraki_camera_quality_retention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraQualityRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: CameraQualityRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_quality_retention',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audioRecordingEnabled = config.audioRecordingEnabled;
    this._motionBasedRetentionEnabled = config.motionBasedRetentionEnabled;
    this._motionDetectorVersion = config.motionDetectorVersion;
    this._profileId = config.profileId;
    this._quality = config.quality;
    this._resolution = config.resolution;
    this._restrictedBandwidthModeEnabled = config.restrictedBandwidthModeEnabled;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_recording_enabled - computed: false, optional: true, required: false
  private _audioRecordingEnabled?: boolean | cdktf.IResolvable; 
  public get audioRecordingEnabled() {
    return this.getBooleanAttribute('audio_recording_enabled');
  }
  public set audioRecordingEnabled(value: boolean | cdktf.IResolvable) {
    this._audioRecordingEnabled = value;
  }
  public resetAudioRecordingEnabled() {
    this._audioRecordingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRecordingEnabledInput() {
    return this._audioRecordingEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // motion_based_retention_enabled - computed: false, optional: true, required: false
  private _motionBasedRetentionEnabled?: boolean | cdktf.IResolvable; 
  public get motionBasedRetentionEnabled() {
    return this.getBooleanAttribute('motion_based_retention_enabled');
  }
  public set motionBasedRetentionEnabled(value: boolean | cdktf.IResolvable) {
    this._motionBasedRetentionEnabled = value;
  }
  public resetMotionBasedRetentionEnabled() {
    this._motionBasedRetentionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motionBasedRetentionEnabledInput() {
    return this._motionBasedRetentionEnabled;
  }

  // motion_detector_version - computed: false, optional: true, required: false
  private _motionDetectorVersion?: number; 
  public get motionDetectorVersion() {
    return this.getNumberAttribute('motion_detector_version');
  }
  public set motionDetectorVersion(value: number) {
    this._motionDetectorVersion = value;
  }
  public resetMotionDetectorVersion() {
    this._motionDetectorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motionDetectorVersionInput() {
    return this._motionDetectorVersion;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // quality - computed: false, optional: true, required: false
  private _quality?: string; 
  public get quality() {
    return this.getStringAttribute('quality');
  }
  public set quality(value: string) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // restricted_bandwidth_mode_enabled - computed: false, optional: true, required: false
  private _restrictedBandwidthModeEnabled?: boolean | cdktf.IResolvable; 
  public get restrictedBandwidthModeEnabled() {
    return this.getBooleanAttribute('restricted_bandwidth_mode_enabled');
  }
  public set restrictedBandwidthModeEnabled(value: boolean | cdktf.IResolvable) {
    this._restrictedBandwidthModeEnabled = value;
  }
  public resetRestrictedBandwidthModeEnabled() {
    this._restrictedBandwidthModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedBandwidthModeEnabledInput() {
    return this._restrictedBandwidthModeEnabled;
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
      audio_recording_enabled: cdktf.booleanToTerraform(this._audioRecordingEnabled),
      motion_based_retention_enabled: cdktf.booleanToTerraform(this._motionBasedRetentionEnabled),
      motion_detector_version: cdktf.numberToTerraform(this._motionDetectorVersion),
      profile_id: cdktf.stringToTerraform(this._profileId),
      quality: cdktf.stringToTerraform(this._quality),
      resolution: cdktf.stringToTerraform(this._resolution),
      restricted_bandwidth_mode_enabled: cdktf.booleanToTerraform(this._restrictedBandwidthModeEnabled),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audio_recording_enabled: {
        value: cdktf.booleanToHclTerraform(this._audioRecordingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      motion_based_retention_enabled: {
        value: cdktf.booleanToHclTerraform(this._motionBasedRetentionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      motion_detector_version: {
        value: cdktf.numberToHclTerraform(this._motionDetectorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quality: {
        value: cdktf.stringToHclTerraform(this._quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_bandwidth_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._restrictedBandwidthModeEnabled),
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
