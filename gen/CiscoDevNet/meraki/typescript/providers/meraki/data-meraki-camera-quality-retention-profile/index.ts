// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiCameraQualityRetentionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile#id DataMerakiCameraQualityRetentionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the new profile. Must be unique. This parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile#name DataMerakiCameraQualityRetentionProfile#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile#network_id DataMerakiCameraQualityRetentionProfile#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile meraki_camera_quality_retention_profile}
*/
export class DataMerakiCameraQualityRetentionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_quality_retention_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiCameraQualityRetentionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiCameraQualityRetentionProfile to import
  * @param importFromId The id of the existing DataMerakiCameraQualityRetentionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiCameraQualityRetentionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_quality_retention_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profile meraki_camera_quality_retention_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiCameraQualityRetentionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiCameraQualityRetentionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_quality_retention_profile',
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
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_recording_enabled - computed: true, optional: false, required: false
  public get audioRecordingEnabled() {
    return this.getBooleanAttribute('audio_recording_enabled');
  }

  // cloud_archive_enabled - computed: true, optional: false, required: false
  public get cloudArchiveEnabled() {
    return this.getBooleanAttribute('cloud_archive_enabled');
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

  // max_retention_days - computed: true, optional: false, required: false
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }

  // motion_based_retention_enabled - computed: true, optional: false, required: false
  public get motionBasedRetentionEnabled() {
    return this.getBooleanAttribute('motion_based_retention_enabled');
  }

  // motion_detector_version - computed: true, optional: false, required: false
  public get motionDetectorVersion() {
    return this.getNumberAttribute('motion_detector_version');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // restricted_bandwidth_mode_enabled - computed: true, optional: false, required: false
  public get restrictedBandwidthModeEnabled() {
    return this.getBooleanAttribute('restricted_bandwidth_mode_enabled');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // smart_retention_enabled - computed: true, optional: false, required: false
  public get smartRetentionEnabled() {
    return this.getBooleanAttribute('smart_retention_enabled');
  }

  // video_settings_mv12_mv22_mv72_quality - computed: true, optional: false, required: false
  public get videoSettingsMv12Mv22Mv72Quality() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_quality');
  }

  // video_settings_mv12_mv22_mv72_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv12Mv22Mv72Resolution() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_resolution');
  }

  // video_settings_mv12_we_quality - computed: true, optional: false, required: false
  public get videoSettingsMv12WeQuality() {
    return this.getStringAttribute('video_settings_mv12_we_quality');
  }

  // video_settings_mv12_we_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv12WeResolution() {
    return this.getStringAttribute('video_settings_mv12_we_resolution');
  }

  // video_settings_mv13_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv13MQuality() {
    return this.getStringAttribute('video_settings_mv13_m_quality');
  }

  // video_settings_mv13_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv13MResolution() {
    return this.getStringAttribute('video_settings_mv13_m_resolution');
  }

  // video_settings_mv13_quality - computed: true, optional: false, required: false
  public get videoSettingsMv13Quality() {
    return this.getStringAttribute('video_settings_mv13_quality');
  }

  // video_settings_mv13_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv13Resolution() {
    return this.getStringAttribute('video_settings_mv13_resolution');
  }

  // video_settings_mv21_mv71_quality - computed: true, optional: false, required: false
  public get videoSettingsMv21Mv71Quality() {
    return this.getStringAttribute('video_settings_mv21_mv71_quality');
  }

  // video_settings_mv21_mv71_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv21Mv71Resolution() {
    return this.getStringAttribute('video_settings_mv21_mv71_resolution');
  }

  // video_settings_mv22_x_mv72_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv22XMv72XQuality() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_quality');
  }

  // video_settings_mv22_x_mv72_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv22XMv72XResolution() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_resolution');
  }

  // video_settings_mv23_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23MQuality() {
    return this.getStringAttribute('video_settings_mv23_m_quality');
  }

  // video_settings_mv23_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23MResolution() {
    return this.getStringAttribute('video_settings_mv23_m_resolution');
  }

  // video_settings_mv23_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23Quality() {
    return this.getStringAttribute('video_settings_mv23_quality');
  }

  // video_settings_mv23_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23Resolution() {
    return this.getStringAttribute('video_settings_mv23_resolution');
  }

  // video_settings_mv23_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23XQuality() {
    return this.getStringAttribute('video_settings_mv23_x_quality');
  }

  // video_settings_mv23_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23XResolution() {
    return this.getStringAttribute('video_settings_mv23_x_resolution');
  }

  // video_settings_mv32_quality - computed: true, optional: false, required: false
  public get videoSettingsMv32Quality() {
    return this.getStringAttribute('video_settings_mv32_quality');
  }

  // video_settings_mv32_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv32Resolution() {
    return this.getStringAttribute('video_settings_mv32_resolution');
  }

  // video_settings_mv33_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv33MQuality() {
    return this.getStringAttribute('video_settings_mv33_m_quality');
  }

  // video_settings_mv33_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv33MResolution() {
    return this.getStringAttribute('video_settings_mv33_m_resolution');
  }

  // video_settings_mv33_quality - computed: true, optional: false, required: false
  public get videoSettingsMv33Quality() {
    return this.getStringAttribute('video_settings_mv33_quality');
  }

  // video_settings_mv33_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv33Resolution() {
    return this.getStringAttribute('video_settings_mv33_resolution');
  }

  // video_settings_mv52_quality - computed: true, optional: false, required: false
  public get videoSettingsMv52Quality() {
    return this.getStringAttribute('video_settings_mv52_quality');
  }

  // video_settings_mv52_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv52Resolution() {
    return this.getStringAttribute('video_settings_mv52_resolution');
  }

  // video_settings_mv53_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv53XQuality() {
    return this.getStringAttribute('video_settings_mv53_x_quality');
  }

  // video_settings_mv53_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv53XResolution() {
    return this.getStringAttribute('video_settings_mv53_x_resolution');
  }

  // video_settings_mv63_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63MQuality() {
    return this.getStringAttribute('video_settings_mv63_m_quality');
  }

  // video_settings_mv63_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63MResolution() {
    return this.getStringAttribute('video_settings_mv63_m_resolution');
  }

  // video_settings_mv63_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63Quality() {
    return this.getStringAttribute('video_settings_mv63_quality');
  }

  // video_settings_mv63_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63Resolution() {
    return this.getStringAttribute('video_settings_mv63_resolution');
  }

  // video_settings_mv63_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63XQuality() {
    return this.getStringAttribute('video_settings_mv63_x_quality');
  }

  // video_settings_mv63_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63XResolution() {
    return this.getStringAttribute('video_settings_mv63_x_resolution');
  }

  // video_settings_mv73_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73MQuality() {
    return this.getStringAttribute('video_settings_mv73_m_quality');
  }

  // video_settings_mv73_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73MResolution() {
    return this.getStringAttribute('video_settings_mv73_m_resolution');
  }

  // video_settings_mv73_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73Quality() {
    return this.getStringAttribute('video_settings_mv73_quality');
  }

  // video_settings_mv73_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73Resolution() {
    return this.getStringAttribute('video_settings_mv73_resolution');
  }

  // video_settings_mv73_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73XQuality() {
    return this.getStringAttribute('video_settings_mv73_x_quality');
  }

  // video_settings_mv73_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73XResolution() {
    return this.getStringAttribute('video_settings_mv73_x_resolution');
  }

  // video_settings_mv84_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv84XQuality() {
    return this.getStringAttribute('video_settings_mv84_x_quality');
  }

  // video_settings_mv84_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv84XResolution() {
    return this.getStringAttribute('video_settings_mv84_x_resolution');
  }

  // video_settings_mv93_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93MQuality() {
    return this.getStringAttribute('video_settings_mv93_m_quality');
  }

  // video_settings_mv93_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93MResolution() {
    return this.getStringAttribute('video_settings_mv93_m_resolution');
  }

  // video_settings_mv93_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93Quality() {
    return this.getStringAttribute('video_settings_mv93_quality');
  }

  // video_settings_mv93_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93Resolution() {
    return this.getStringAttribute('video_settings_mv93_resolution');
  }

  // video_settings_mv93_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93XQuality() {
    return this.getStringAttribute('video_settings_mv93_x_quality');
  }

  // video_settings_mv93_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93XResolution() {
    return this.getStringAttribute('video_settings_mv93_x_resolution');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
