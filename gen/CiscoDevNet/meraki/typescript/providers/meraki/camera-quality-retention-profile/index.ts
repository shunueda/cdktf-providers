// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraQualityRetentionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to record audio. Can be either true or false. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#audio_recording_enabled CameraQualityRetentionProfile#audio_recording_enabled}
  */
  readonly audioRecordingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#cloud_archive_enabled CameraQualityRetentionProfile#cloud_archive_enabled}
  */
  readonly cloudArchiveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of days for which the data will be stored, or `null` to keep data until storage space runs out. If the former, it can be in the range of one to ninety days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#max_retention_days CameraQualityRetentionProfile#max_retention_days}
  */
  readonly maxRetentionDays?: number;
  /**
  * Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#motion_based_retention_enabled CameraQualityRetentionProfile#motion_based_retention_enabled}
  */
  readonly motionBasedRetentionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#motion_detector_version CameraQualityRetentionProfile#motion_detector_version}
  */
  readonly motionDetectorVersion?: number;
  /**
  * The name of the new profile. Must be unique. This parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#name CameraQualityRetentionProfile#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#network_id CameraQualityRetentionProfile#network_id}
  */
  readonly networkId: string;
  /**
  * Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#restricted_bandwidth_mode_enabled CameraQualityRetentionProfile#restricted_bandwidth_mode_enabled}
  */
  readonly restrictedBandwidthModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Schedule for which this camera will record video, or `null` to always record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#schedule_id CameraQualityRetentionProfile#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * Boolean indicating if Smart Retention is enabled(true) or disabled(false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#smart_retention_enabled CameraQualityRetentionProfile#smart_retention_enabled}
  */
  readonly smartRetentionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv12_mv22_mv72_quality CameraQualityRetentionProfile#video_settings_mv12_mv22_mv72_quality}
  */
  readonly videoSettingsMv12Mv22Mv72Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720` or `1920x1080`.
  *   - Choices: `1280x720`, `1920x1080`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv12_mv22_mv72_resolution CameraQualityRetentionProfile#video_settings_mv12_mv22_mv72_resolution}
  */
  readonly videoSettingsMv12Mv22Mv72Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv12_we_quality CameraQualityRetentionProfile#video_settings_mv12_we_quality}
  */
  readonly videoSettingsMv12WeQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720` or `1920x1080`.
  *   - Choices: `1280x720`, `1920x1080`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv12_we_resolution CameraQualityRetentionProfile#video_settings_mv12_we_resolution}
  */
  readonly videoSettingsMv12WeResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv13_m_quality CameraQualityRetentionProfile#video_settings_mv13_m_quality}
  */
  readonly videoSettingsMv13MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv13_m_resolution CameraQualityRetentionProfile#video_settings_mv13_m_resolution}
  */
  readonly videoSettingsMv13MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv13_quality CameraQualityRetentionProfile#video_settings_mv13_quality}
  */
  readonly videoSettingsMv13Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv13_resolution CameraQualityRetentionProfile#video_settings_mv13_resolution}
  */
  readonly videoSettingsMv13Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv21_mv71_quality CameraQualityRetentionProfile#video_settings_mv21_mv71_quality}
  */
  readonly videoSettingsMv21Mv71Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720`.
  *   - Choices: `1280x720`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv21_mv71_resolution CameraQualityRetentionProfile#video_settings_mv21_mv71_resolution}
  */
  readonly videoSettingsMv21Mv71Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv22_x_mv72_x_quality CameraQualityRetentionProfile#video_settings_mv22_x_mv72_x_quality}
  */
  readonly videoSettingsMv22XMv72XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720`, `1920x1080` or `2688x1512`.
  *   - Choices: `1280x720`, `1920x1080`, `2688x1512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv22_x_mv72_x_resolution CameraQualityRetentionProfile#video_settings_mv22_x_mv72_x_resolution}
  */
  readonly videoSettingsMv22XMv72XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_m_quality CameraQualityRetentionProfile#video_settings_mv23_m_quality}
  */
  readonly videoSettingsMv23MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_m_resolution CameraQualityRetentionProfile#video_settings_mv23_m_resolution}
  */
  readonly videoSettingsMv23MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_quality CameraQualityRetentionProfile#video_settings_mv23_quality}
  */
  readonly videoSettingsMv23Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_resolution CameraQualityRetentionProfile#video_settings_mv23_resolution}
  */
  readonly videoSettingsMv23Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_x_quality CameraQualityRetentionProfile#video_settings_mv23_x_quality}
  */
  readonly videoSettingsMv23XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv23_x_resolution CameraQualityRetentionProfile#video_settings_mv23_x_resolution}
  */
  readonly videoSettingsMv23XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv32_quality CameraQualityRetentionProfile#video_settings_mv32_quality}
  */
  readonly videoSettingsMv32Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080` or `2112x2112`.
  *   - Choices: `1080x1080`, `2112x2112`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv32_resolution CameraQualityRetentionProfile#video_settings_mv32_resolution}
  */
  readonly videoSettingsMv32Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv33_m_quality CameraQualityRetentionProfile#video_settings_mv33_m_quality}
  */
  readonly videoSettingsMv33MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080`, `2112x2112` or `2880x2880`.
  *   - Choices: `1080x1080`, `2112x2112`, `2880x2880`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv33_m_resolution CameraQualityRetentionProfile#video_settings_mv33_m_resolution}
  */
  readonly videoSettingsMv33MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv33_quality CameraQualityRetentionProfile#video_settings_mv33_quality}
  */
  readonly videoSettingsMv33Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080`, `2112x2112` or `2880x2880`.
  *   - Choices: `1080x1080`, `2112x2112`, `2880x2880`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv33_resolution CameraQualityRetentionProfile#video_settings_mv33_resolution}
  */
  readonly videoSettingsMv33Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv52_quality CameraQualityRetentionProfile#video_settings_mv52_quality}
  */
  readonly videoSettingsMv52Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1280x720`, `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1280x720`, `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv52_resolution CameraQualityRetentionProfile#video_settings_mv52_resolution}
  */
  readonly videoSettingsMv52Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv53_x_quality CameraQualityRetentionProfile#video_settings_mv53_x_quality}
  */
  readonly videoSettingsMv53XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv53_x_resolution CameraQualityRetentionProfile#video_settings_mv53_x_resolution}
  */
  readonly videoSettingsMv53XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_m_quality CameraQualityRetentionProfile#video_settings_mv63_m_quality}
  */
  readonly videoSettingsMv63MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_m_resolution CameraQualityRetentionProfile#video_settings_mv63_m_resolution}
  */
  readonly videoSettingsMv63MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_quality CameraQualityRetentionProfile#video_settings_mv63_quality}
  */
  readonly videoSettingsMv63Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_resolution CameraQualityRetentionProfile#video_settings_mv63_resolution}
  */
  readonly videoSettingsMv63Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_x_quality CameraQualityRetentionProfile#video_settings_mv63_x_quality}
  */
  readonly videoSettingsMv63XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv63_x_resolution CameraQualityRetentionProfile#video_settings_mv63_x_resolution}
  */
  readonly videoSettingsMv63XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_m_quality CameraQualityRetentionProfile#video_settings_mv73_m_quality}
  */
  readonly videoSettingsMv73MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_m_resolution CameraQualityRetentionProfile#video_settings_mv73_m_resolution}
  */
  readonly videoSettingsMv73MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_quality CameraQualityRetentionProfile#video_settings_mv73_quality}
  */
  readonly videoSettingsMv73Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_resolution CameraQualityRetentionProfile#video_settings_mv73_resolution}
  */
  readonly videoSettingsMv73Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_x_quality CameraQualityRetentionProfile#video_settings_mv73_x_quality}
  */
  readonly videoSettingsMv73XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1920x1080`, `2688x1512` or `3840x2160`.
  *   - Choices: `1920x1080`, `2688x1512`, `3840x2160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv73_x_resolution CameraQualityRetentionProfile#video_settings_mv73_x_resolution}
  */
  readonly videoSettingsMv73XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard` or `Enhanced`.
  *   - Choices: `Enhanced`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv84_x_quality CameraQualityRetentionProfile#video_settings_mv84_x_quality}
  */
  readonly videoSettingsMv84XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1440x1080` or `2560x1920`.
  *   - Choices: `1440x1080`, `2560x1920`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv84_x_resolution CameraQualityRetentionProfile#video_settings_mv84_x_resolution}
  */
  readonly videoSettingsMv84XResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_m_quality CameraQualityRetentionProfile#video_settings_mv93_m_quality}
  */
  readonly videoSettingsMv93MQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080`, `2112x2112` or `2880x2880`.
  *   - Choices: `1080x1080`, `2112x2112`, `2880x2880`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_m_resolution CameraQualityRetentionProfile#video_settings_mv93_m_resolution}
  */
  readonly videoSettingsMv93MResolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_quality CameraQualityRetentionProfile#video_settings_mv93_quality}
  */
  readonly videoSettingsMv93Quality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080`, `2112x2112` or `2880x2880`.
  *   - Choices: `1080x1080`, `2112x2112`, `2880x2880`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_resolution CameraQualityRetentionProfile#video_settings_mv93_resolution}
  */
  readonly videoSettingsMv93Resolution?: string;
  /**
  * Quality of the camera. Can be one of `Standard`, `Enhanced` or `High`.
  *   - Choices: `Enhanced`, `High`, `Standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_x_quality CameraQualityRetentionProfile#video_settings_mv93_x_quality}
  */
  readonly videoSettingsMv93XQuality?: string;
  /**
  * Resolution of the camera. Can be one of `1080x1080`, `2112x2112` or `2880x2880`.
  *   - Choices: `1080x1080`, `2112x2112`, `2880x2880`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#video_settings_mv93_x_resolution CameraQualityRetentionProfile#video_settings_mv93_x_resolution}
  */
  readonly videoSettingsMv93XResolution?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile meraki_camera_quality_retention_profile}
*/
export class CameraQualityRetentionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_quality_retention_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraQualityRetentionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraQualityRetentionProfile to import
  * @param importFromId The id of the existing CameraQualityRetentionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraQualityRetentionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_quality_retention_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_quality_retention_profile meraki_camera_quality_retention_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraQualityRetentionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CameraQualityRetentionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_quality_retention_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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
    this._cloudArchiveEnabled = config.cloudArchiveEnabled;
    this._maxRetentionDays = config.maxRetentionDays;
    this._motionBasedRetentionEnabled = config.motionBasedRetentionEnabled;
    this._motionDetectorVersion = config.motionDetectorVersion;
    this._name = config.name;
    this._networkId = config.networkId;
    this._restrictedBandwidthModeEnabled = config.restrictedBandwidthModeEnabled;
    this._scheduleId = config.scheduleId;
    this._smartRetentionEnabled = config.smartRetentionEnabled;
    this._videoSettingsMv12Mv22Mv72Quality = config.videoSettingsMv12Mv22Mv72Quality;
    this._videoSettingsMv12Mv22Mv72Resolution = config.videoSettingsMv12Mv22Mv72Resolution;
    this._videoSettingsMv12WeQuality = config.videoSettingsMv12WeQuality;
    this._videoSettingsMv12WeResolution = config.videoSettingsMv12WeResolution;
    this._videoSettingsMv13MQuality = config.videoSettingsMv13MQuality;
    this._videoSettingsMv13MResolution = config.videoSettingsMv13MResolution;
    this._videoSettingsMv13Quality = config.videoSettingsMv13Quality;
    this._videoSettingsMv13Resolution = config.videoSettingsMv13Resolution;
    this._videoSettingsMv21Mv71Quality = config.videoSettingsMv21Mv71Quality;
    this._videoSettingsMv21Mv71Resolution = config.videoSettingsMv21Mv71Resolution;
    this._videoSettingsMv22XMv72XQuality = config.videoSettingsMv22XMv72XQuality;
    this._videoSettingsMv22XMv72XResolution = config.videoSettingsMv22XMv72XResolution;
    this._videoSettingsMv23MQuality = config.videoSettingsMv23MQuality;
    this._videoSettingsMv23MResolution = config.videoSettingsMv23MResolution;
    this._videoSettingsMv23Quality = config.videoSettingsMv23Quality;
    this._videoSettingsMv23Resolution = config.videoSettingsMv23Resolution;
    this._videoSettingsMv23XQuality = config.videoSettingsMv23XQuality;
    this._videoSettingsMv23XResolution = config.videoSettingsMv23XResolution;
    this._videoSettingsMv32Quality = config.videoSettingsMv32Quality;
    this._videoSettingsMv32Resolution = config.videoSettingsMv32Resolution;
    this._videoSettingsMv33MQuality = config.videoSettingsMv33MQuality;
    this._videoSettingsMv33MResolution = config.videoSettingsMv33MResolution;
    this._videoSettingsMv33Quality = config.videoSettingsMv33Quality;
    this._videoSettingsMv33Resolution = config.videoSettingsMv33Resolution;
    this._videoSettingsMv52Quality = config.videoSettingsMv52Quality;
    this._videoSettingsMv52Resolution = config.videoSettingsMv52Resolution;
    this._videoSettingsMv53XQuality = config.videoSettingsMv53XQuality;
    this._videoSettingsMv53XResolution = config.videoSettingsMv53XResolution;
    this._videoSettingsMv63MQuality = config.videoSettingsMv63MQuality;
    this._videoSettingsMv63MResolution = config.videoSettingsMv63MResolution;
    this._videoSettingsMv63Quality = config.videoSettingsMv63Quality;
    this._videoSettingsMv63Resolution = config.videoSettingsMv63Resolution;
    this._videoSettingsMv63XQuality = config.videoSettingsMv63XQuality;
    this._videoSettingsMv63XResolution = config.videoSettingsMv63XResolution;
    this._videoSettingsMv73MQuality = config.videoSettingsMv73MQuality;
    this._videoSettingsMv73MResolution = config.videoSettingsMv73MResolution;
    this._videoSettingsMv73Quality = config.videoSettingsMv73Quality;
    this._videoSettingsMv73Resolution = config.videoSettingsMv73Resolution;
    this._videoSettingsMv73XQuality = config.videoSettingsMv73XQuality;
    this._videoSettingsMv73XResolution = config.videoSettingsMv73XResolution;
    this._videoSettingsMv84XQuality = config.videoSettingsMv84XQuality;
    this._videoSettingsMv84XResolution = config.videoSettingsMv84XResolution;
    this._videoSettingsMv93MQuality = config.videoSettingsMv93MQuality;
    this._videoSettingsMv93MResolution = config.videoSettingsMv93MResolution;
    this._videoSettingsMv93Quality = config.videoSettingsMv93Quality;
    this._videoSettingsMv93Resolution = config.videoSettingsMv93Resolution;
    this._videoSettingsMv93XQuality = config.videoSettingsMv93XQuality;
    this._videoSettingsMv93XResolution = config.videoSettingsMv93XResolution;
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

  // cloud_archive_enabled - computed: false, optional: true, required: false
  private _cloudArchiveEnabled?: boolean | cdktf.IResolvable; 
  public get cloudArchiveEnabled() {
    return this.getBooleanAttribute('cloud_archive_enabled');
  }
  public set cloudArchiveEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudArchiveEnabled = value;
  }
  public resetCloudArchiveEnabled() {
    this._cloudArchiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudArchiveEnabledInput() {
    return this._cloudArchiveEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_retention_days - computed: false, optional: true, required: false
  private _maxRetentionDays?: number; 
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }
  public set maxRetentionDays(value: number) {
    this._maxRetentionDays = value;
  }
  public resetMaxRetentionDays() {
    this._maxRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetentionDaysInput() {
    return this._maxRetentionDays;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // schedule_id - computed: false, optional: true, required: false
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  public resetScheduleId() {
    this._scheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // smart_retention_enabled - computed: false, optional: true, required: false
  private _smartRetentionEnabled?: boolean | cdktf.IResolvable; 
  public get smartRetentionEnabled() {
    return this.getBooleanAttribute('smart_retention_enabled');
  }
  public set smartRetentionEnabled(value: boolean | cdktf.IResolvable) {
    this._smartRetentionEnabled = value;
  }
  public resetSmartRetentionEnabled() {
    this._smartRetentionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRetentionEnabledInput() {
    return this._smartRetentionEnabled;
  }

  // video_settings_mv12_mv22_mv72_quality - computed: false, optional: true, required: false
  private _videoSettingsMv12Mv22Mv72Quality?: string; 
  public get videoSettingsMv12Mv22Mv72Quality() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_quality');
  }
  public set videoSettingsMv12Mv22Mv72Quality(value: string) {
    this._videoSettingsMv12Mv22Mv72Quality = value;
  }
  public resetVideoSettingsMv12Mv22Mv72Quality() {
    this._videoSettingsMv12Mv22Mv72Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv12Mv22Mv72QualityInput() {
    return this._videoSettingsMv12Mv22Mv72Quality;
  }

  // video_settings_mv12_mv22_mv72_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv12Mv22Mv72Resolution?: string; 
  public get videoSettingsMv12Mv22Mv72Resolution() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_resolution');
  }
  public set videoSettingsMv12Mv22Mv72Resolution(value: string) {
    this._videoSettingsMv12Mv22Mv72Resolution = value;
  }
  public resetVideoSettingsMv12Mv22Mv72Resolution() {
    this._videoSettingsMv12Mv22Mv72Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv12Mv22Mv72ResolutionInput() {
    return this._videoSettingsMv12Mv22Mv72Resolution;
  }

  // video_settings_mv12_we_quality - computed: false, optional: true, required: false
  private _videoSettingsMv12WeQuality?: string; 
  public get videoSettingsMv12WeQuality() {
    return this.getStringAttribute('video_settings_mv12_we_quality');
  }
  public set videoSettingsMv12WeQuality(value: string) {
    this._videoSettingsMv12WeQuality = value;
  }
  public resetVideoSettingsMv12WeQuality() {
    this._videoSettingsMv12WeQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv12WeQualityInput() {
    return this._videoSettingsMv12WeQuality;
  }

  // video_settings_mv12_we_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv12WeResolution?: string; 
  public get videoSettingsMv12WeResolution() {
    return this.getStringAttribute('video_settings_mv12_we_resolution');
  }
  public set videoSettingsMv12WeResolution(value: string) {
    this._videoSettingsMv12WeResolution = value;
  }
  public resetVideoSettingsMv12WeResolution() {
    this._videoSettingsMv12WeResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv12WeResolutionInput() {
    return this._videoSettingsMv12WeResolution;
  }

  // video_settings_mv13_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv13MQuality?: string; 
  public get videoSettingsMv13MQuality() {
    return this.getStringAttribute('video_settings_mv13_m_quality');
  }
  public set videoSettingsMv13MQuality(value: string) {
    this._videoSettingsMv13MQuality = value;
  }
  public resetVideoSettingsMv13MQuality() {
    this._videoSettingsMv13MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv13MQualityInput() {
    return this._videoSettingsMv13MQuality;
  }

  // video_settings_mv13_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv13MResolution?: string; 
  public get videoSettingsMv13MResolution() {
    return this.getStringAttribute('video_settings_mv13_m_resolution');
  }
  public set videoSettingsMv13MResolution(value: string) {
    this._videoSettingsMv13MResolution = value;
  }
  public resetVideoSettingsMv13MResolution() {
    this._videoSettingsMv13MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv13MResolutionInput() {
    return this._videoSettingsMv13MResolution;
  }

  // video_settings_mv13_quality - computed: false, optional: true, required: false
  private _videoSettingsMv13Quality?: string; 
  public get videoSettingsMv13Quality() {
    return this.getStringAttribute('video_settings_mv13_quality');
  }
  public set videoSettingsMv13Quality(value: string) {
    this._videoSettingsMv13Quality = value;
  }
  public resetVideoSettingsMv13Quality() {
    this._videoSettingsMv13Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv13QualityInput() {
    return this._videoSettingsMv13Quality;
  }

  // video_settings_mv13_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv13Resolution?: string; 
  public get videoSettingsMv13Resolution() {
    return this.getStringAttribute('video_settings_mv13_resolution');
  }
  public set videoSettingsMv13Resolution(value: string) {
    this._videoSettingsMv13Resolution = value;
  }
  public resetVideoSettingsMv13Resolution() {
    this._videoSettingsMv13Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv13ResolutionInput() {
    return this._videoSettingsMv13Resolution;
  }

  // video_settings_mv21_mv71_quality - computed: false, optional: true, required: false
  private _videoSettingsMv21Mv71Quality?: string; 
  public get videoSettingsMv21Mv71Quality() {
    return this.getStringAttribute('video_settings_mv21_mv71_quality');
  }
  public set videoSettingsMv21Mv71Quality(value: string) {
    this._videoSettingsMv21Mv71Quality = value;
  }
  public resetVideoSettingsMv21Mv71Quality() {
    this._videoSettingsMv21Mv71Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv21Mv71QualityInput() {
    return this._videoSettingsMv21Mv71Quality;
  }

  // video_settings_mv21_mv71_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv21Mv71Resolution?: string; 
  public get videoSettingsMv21Mv71Resolution() {
    return this.getStringAttribute('video_settings_mv21_mv71_resolution');
  }
  public set videoSettingsMv21Mv71Resolution(value: string) {
    this._videoSettingsMv21Mv71Resolution = value;
  }
  public resetVideoSettingsMv21Mv71Resolution() {
    this._videoSettingsMv21Mv71Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv21Mv71ResolutionInput() {
    return this._videoSettingsMv21Mv71Resolution;
  }

  // video_settings_mv22_x_mv72_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv22XMv72XQuality?: string; 
  public get videoSettingsMv22XMv72XQuality() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_quality');
  }
  public set videoSettingsMv22XMv72XQuality(value: string) {
    this._videoSettingsMv22XMv72XQuality = value;
  }
  public resetVideoSettingsMv22XMv72XQuality() {
    this._videoSettingsMv22XMv72XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv22XMv72XQualityInput() {
    return this._videoSettingsMv22XMv72XQuality;
  }

  // video_settings_mv22_x_mv72_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv22XMv72XResolution?: string; 
  public get videoSettingsMv22XMv72XResolution() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_resolution');
  }
  public set videoSettingsMv22XMv72XResolution(value: string) {
    this._videoSettingsMv22XMv72XResolution = value;
  }
  public resetVideoSettingsMv22XMv72XResolution() {
    this._videoSettingsMv22XMv72XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv22XMv72XResolutionInput() {
    return this._videoSettingsMv22XMv72XResolution;
  }

  // video_settings_mv23_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv23MQuality?: string; 
  public get videoSettingsMv23MQuality() {
    return this.getStringAttribute('video_settings_mv23_m_quality');
  }
  public set videoSettingsMv23MQuality(value: string) {
    this._videoSettingsMv23MQuality = value;
  }
  public resetVideoSettingsMv23MQuality() {
    this._videoSettingsMv23MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23MQualityInput() {
    return this._videoSettingsMv23MQuality;
  }

  // video_settings_mv23_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv23MResolution?: string; 
  public get videoSettingsMv23MResolution() {
    return this.getStringAttribute('video_settings_mv23_m_resolution');
  }
  public set videoSettingsMv23MResolution(value: string) {
    this._videoSettingsMv23MResolution = value;
  }
  public resetVideoSettingsMv23MResolution() {
    this._videoSettingsMv23MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23MResolutionInput() {
    return this._videoSettingsMv23MResolution;
  }

  // video_settings_mv23_quality - computed: false, optional: true, required: false
  private _videoSettingsMv23Quality?: string; 
  public get videoSettingsMv23Quality() {
    return this.getStringAttribute('video_settings_mv23_quality');
  }
  public set videoSettingsMv23Quality(value: string) {
    this._videoSettingsMv23Quality = value;
  }
  public resetVideoSettingsMv23Quality() {
    this._videoSettingsMv23Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23QualityInput() {
    return this._videoSettingsMv23Quality;
  }

  // video_settings_mv23_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv23Resolution?: string; 
  public get videoSettingsMv23Resolution() {
    return this.getStringAttribute('video_settings_mv23_resolution');
  }
  public set videoSettingsMv23Resolution(value: string) {
    this._videoSettingsMv23Resolution = value;
  }
  public resetVideoSettingsMv23Resolution() {
    this._videoSettingsMv23Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23ResolutionInput() {
    return this._videoSettingsMv23Resolution;
  }

  // video_settings_mv23_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv23XQuality?: string; 
  public get videoSettingsMv23XQuality() {
    return this.getStringAttribute('video_settings_mv23_x_quality');
  }
  public set videoSettingsMv23XQuality(value: string) {
    this._videoSettingsMv23XQuality = value;
  }
  public resetVideoSettingsMv23XQuality() {
    this._videoSettingsMv23XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23XQualityInput() {
    return this._videoSettingsMv23XQuality;
  }

  // video_settings_mv23_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv23XResolution?: string; 
  public get videoSettingsMv23XResolution() {
    return this.getStringAttribute('video_settings_mv23_x_resolution');
  }
  public set videoSettingsMv23XResolution(value: string) {
    this._videoSettingsMv23XResolution = value;
  }
  public resetVideoSettingsMv23XResolution() {
    this._videoSettingsMv23XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv23XResolutionInput() {
    return this._videoSettingsMv23XResolution;
  }

  // video_settings_mv32_quality - computed: false, optional: true, required: false
  private _videoSettingsMv32Quality?: string; 
  public get videoSettingsMv32Quality() {
    return this.getStringAttribute('video_settings_mv32_quality');
  }
  public set videoSettingsMv32Quality(value: string) {
    this._videoSettingsMv32Quality = value;
  }
  public resetVideoSettingsMv32Quality() {
    this._videoSettingsMv32Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv32QualityInput() {
    return this._videoSettingsMv32Quality;
  }

  // video_settings_mv32_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv32Resolution?: string; 
  public get videoSettingsMv32Resolution() {
    return this.getStringAttribute('video_settings_mv32_resolution');
  }
  public set videoSettingsMv32Resolution(value: string) {
    this._videoSettingsMv32Resolution = value;
  }
  public resetVideoSettingsMv32Resolution() {
    this._videoSettingsMv32Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv32ResolutionInput() {
    return this._videoSettingsMv32Resolution;
  }

  // video_settings_mv33_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv33MQuality?: string; 
  public get videoSettingsMv33MQuality() {
    return this.getStringAttribute('video_settings_mv33_m_quality');
  }
  public set videoSettingsMv33MQuality(value: string) {
    this._videoSettingsMv33MQuality = value;
  }
  public resetVideoSettingsMv33MQuality() {
    this._videoSettingsMv33MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv33MQualityInput() {
    return this._videoSettingsMv33MQuality;
  }

  // video_settings_mv33_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv33MResolution?: string; 
  public get videoSettingsMv33MResolution() {
    return this.getStringAttribute('video_settings_mv33_m_resolution');
  }
  public set videoSettingsMv33MResolution(value: string) {
    this._videoSettingsMv33MResolution = value;
  }
  public resetVideoSettingsMv33MResolution() {
    this._videoSettingsMv33MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv33MResolutionInput() {
    return this._videoSettingsMv33MResolution;
  }

  // video_settings_mv33_quality - computed: false, optional: true, required: false
  private _videoSettingsMv33Quality?: string; 
  public get videoSettingsMv33Quality() {
    return this.getStringAttribute('video_settings_mv33_quality');
  }
  public set videoSettingsMv33Quality(value: string) {
    this._videoSettingsMv33Quality = value;
  }
  public resetVideoSettingsMv33Quality() {
    this._videoSettingsMv33Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv33QualityInput() {
    return this._videoSettingsMv33Quality;
  }

  // video_settings_mv33_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv33Resolution?: string; 
  public get videoSettingsMv33Resolution() {
    return this.getStringAttribute('video_settings_mv33_resolution');
  }
  public set videoSettingsMv33Resolution(value: string) {
    this._videoSettingsMv33Resolution = value;
  }
  public resetVideoSettingsMv33Resolution() {
    this._videoSettingsMv33Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv33ResolutionInput() {
    return this._videoSettingsMv33Resolution;
  }

  // video_settings_mv52_quality - computed: false, optional: true, required: false
  private _videoSettingsMv52Quality?: string; 
  public get videoSettingsMv52Quality() {
    return this.getStringAttribute('video_settings_mv52_quality');
  }
  public set videoSettingsMv52Quality(value: string) {
    this._videoSettingsMv52Quality = value;
  }
  public resetVideoSettingsMv52Quality() {
    this._videoSettingsMv52Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv52QualityInput() {
    return this._videoSettingsMv52Quality;
  }

  // video_settings_mv52_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv52Resolution?: string; 
  public get videoSettingsMv52Resolution() {
    return this.getStringAttribute('video_settings_mv52_resolution');
  }
  public set videoSettingsMv52Resolution(value: string) {
    this._videoSettingsMv52Resolution = value;
  }
  public resetVideoSettingsMv52Resolution() {
    this._videoSettingsMv52Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv52ResolutionInput() {
    return this._videoSettingsMv52Resolution;
  }

  // video_settings_mv53_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv53XQuality?: string; 
  public get videoSettingsMv53XQuality() {
    return this.getStringAttribute('video_settings_mv53_x_quality');
  }
  public set videoSettingsMv53XQuality(value: string) {
    this._videoSettingsMv53XQuality = value;
  }
  public resetVideoSettingsMv53XQuality() {
    this._videoSettingsMv53XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv53XQualityInput() {
    return this._videoSettingsMv53XQuality;
  }

  // video_settings_mv53_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv53XResolution?: string; 
  public get videoSettingsMv53XResolution() {
    return this.getStringAttribute('video_settings_mv53_x_resolution');
  }
  public set videoSettingsMv53XResolution(value: string) {
    this._videoSettingsMv53XResolution = value;
  }
  public resetVideoSettingsMv53XResolution() {
    this._videoSettingsMv53XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv53XResolutionInput() {
    return this._videoSettingsMv53XResolution;
  }

  // video_settings_mv63_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv63MQuality?: string; 
  public get videoSettingsMv63MQuality() {
    return this.getStringAttribute('video_settings_mv63_m_quality');
  }
  public set videoSettingsMv63MQuality(value: string) {
    this._videoSettingsMv63MQuality = value;
  }
  public resetVideoSettingsMv63MQuality() {
    this._videoSettingsMv63MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63MQualityInput() {
    return this._videoSettingsMv63MQuality;
  }

  // video_settings_mv63_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv63MResolution?: string; 
  public get videoSettingsMv63MResolution() {
    return this.getStringAttribute('video_settings_mv63_m_resolution');
  }
  public set videoSettingsMv63MResolution(value: string) {
    this._videoSettingsMv63MResolution = value;
  }
  public resetVideoSettingsMv63MResolution() {
    this._videoSettingsMv63MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63MResolutionInput() {
    return this._videoSettingsMv63MResolution;
  }

  // video_settings_mv63_quality - computed: false, optional: true, required: false
  private _videoSettingsMv63Quality?: string; 
  public get videoSettingsMv63Quality() {
    return this.getStringAttribute('video_settings_mv63_quality');
  }
  public set videoSettingsMv63Quality(value: string) {
    this._videoSettingsMv63Quality = value;
  }
  public resetVideoSettingsMv63Quality() {
    this._videoSettingsMv63Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63QualityInput() {
    return this._videoSettingsMv63Quality;
  }

  // video_settings_mv63_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv63Resolution?: string; 
  public get videoSettingsMv63Resolution() {
    return this.getStringAttribute('video_settings_mv63_resolution');
  }
  public set videoSettingsMv63Resolution(value: string) {
    this._videoSettingsMv63Resolution = value;
  }
  public resetVideoSettingsMv63Resolution() {
    this._videoSettingsMv63Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63ResolutionInput() {
    return this._videoSettingsMv63Resolution;
  }

  // video_settings_mv63_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv63XQuality?: string; 
  public get videoSettingsMv63XQuality() {
    return this.getStringAttribute('video_settings_mv63_x_quality');
  }
  public set videoSettingsMv63XQuality(value: string) {
    this._videoSettingsMv63XQuality = value;
  }
  public resetVideoSettingsMv63XQuality() {
    this._videoSettingsMv63XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63XQualityInput() {
    return this._videoSettingsMv63XQuality;
  }

  // video_settings_mv63_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv63XResolution?: string; 
  public get videoSettingsMv63XResolution() {
    return this.getStringAttribute('video_settings_mv63_x_resolution');
  }
  public set videoSettingsMv63XResolution(value: string) {
    this._videoSettingsMv63XResolution = value;
  }
  public resetVideoSettingsMv63XResolution() {
    this._videoSettingsMv63XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv63XResolutionInput() {
    return this._videoSettingsMv63XResolution;
  }

  // video_settings_mv73_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv73MQuality?: string; 
  public get videoSettingsMv73MQuality() {
    return this.getStringAttribute('video_settings_mv73_m_quality');
  }
  public set videoSettingsMv73MQuality(value: string) {
    this._videoSettingsMv73MQuality = value;
  }
  public resetVideoSettingsMv73MQuality() {
    this._videoSettingsMv73MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73MQualityInput() {
    return this._videoSettingsMv73MQuality;
  }

  // video_settings_mv73_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv73MResolution?: string; 
  public get videoSettingsMv73MResolution() {
    return this.getStringAttribute('video_settings_mv73_m_resolution');
  }
  public set videoSettingsMv73MResolution(value: string) {
    this._videoSettingsMv73MResolution = value;
  }
  public resetVideoSettingsMv73MResolution() {
    this._videoSettingsMv73MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73MResolutionInput() {
    return this._videoSettingsMv73MResolution;
  }

  // video_settings_mv73_quality - computed: false, optional: true, required: false
  private _videoSettingsMv73Quality?: string; 
  public get videoSettingsMv73Quality() {
    return this.getStringAttribute('video_settings_mv73_quality');
  }
  public set videoSettingsMv73Quality(value: string) {
    this._videoSettingsMv73Quality = value;
  }
  public resetVideoSettingsMv73Quality() {
    this._videoSettingsMv73Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73QualityInput() {
    return this._videoSettingsMv73Quality;
  }

  // video_settings_mv73_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv73Resolution?: string; 
  public get videoSettingsMv73Resolution() {
    return this.getStringAttribute('video_settings_mv73_resolution');
  }
  public set videoSettingsMv73Resolution(value: string) {
    this._videoSettingsMv73Resolution = value;
  }
  public resetVideoSettingsMv73Resolution() {
    this._videoSettingsMv73Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73ResolutionInput() {
    return this._videoSettingsMv73Resolution;
  }

  // video_settings_mv73_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv73XQuality?: string; 
  public get videoSettingsMv73XQuality() {
    return this.getStringAttribute('video_settings_mv73_x_quality');
  }
  public set videoSettingsMv73XQuality(value: string) {
    this._videoSettingsMv73XQuality = value;
  }
  public resetVideoSettingsMv73XQuality() {
    this._videoSettingsMv73XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73XQualityInput() {
    return this._videoSettingsMv73XQuality;
  }

  // video_settings_mv73_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv73XResolution?: string; 
  public get videoSettingsMv73XResolution() {
    return this.getStringAttribute('video_settings_mv73_x_resolution');
  }
  public set videoSettingsMv73XResolution(value: string) {
    this._videoSettingsMv73XResolution = value;
  }
  public resetVideoSettingsMv73XResolution() {
    this._videoSettingsMv73XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv73XResolutionInput() {
    return this._videoSettingsMv73XResolution;
  }

  // video_settings_mv84_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv84XQuality?: string; 
  public get videoSettingsMv84XQuality() {
    return this.getStringAttribute('video_settings_mv84_x_quality');
  }
  public set videoSettingsMv84XQuality(value: string) {
    this._videoSettingsMv84XQuality = value;
  }
  public resetVideoSettingsMv84XQuality() {
    this._videoSettingsMv84XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv84XQualityInput() {
    return this._videoSettingsMv84XQuality;
  }

  // video_settings_mv84_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv84XResolution?: string; 
  public get videoSettingsMv84XResolution() {
    return this.getStringAttribute('video_settings_mv84_x_resolution');
  }
  public set videoSettingsMv84XResolution(value: string) {
    this._videoSettingsMv84XResolution = value;
  }
  public resetVideoSettingsMv84XResolution() {
    this._videoSettingsMv84XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv84XResolutionInput() {
    return this._videoSettingsMv84XResolution;
  }

  // video_settings_mv93_m_quality - computed: false, optional: true, required: false
  private _videoSettingsMv93MQuality?: string; 
  public get videoSettingsMv93MQuality() {
    return this.getStringAttribute('video_settings_mv93_m_quality');
  }
  public set videoSettingsMv93MQuality(value: string) {
    this._videoSettingsMv93MQuality = value;
  }
  public resetVideoSettingsMv93MQuality() {
    this._videoSettingsMv93MQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93MQualityInput() {
    return this._videoSettingsMv93MQuality;
  }

  // video_settings_mv93_m_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv93MResolution?: string; 
  public get videoSettingsMv93MResolution() {
    return this.getStringAttribute('video_settings_mv93_m_resolution');
  }
  public set videoSettingsMv93MResolution(value: string) {
    this._videoSettingsMv93MResolution = value;
  }
  public resetVideoSettingsMv93MResolution() {
    this._videoSettingsMv93MResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93MResolutionInput() {
    return this._videoSettingsMv93MResolution;
  }

  // video_settings_mv93_quality - computed: false, optional: true, required: false
  private _videoSettingsMv93Quality?: string; 
  public get videoSettingsMv93Quality() {
    return this.getStringAttribute('video_settings_mv93_quality');
  }
  public set videoSettingsMv93Quality(value: string) {
    this._videoSettingsMv93Quality = value;
  }
  public resetVideoSettingsMv93Quality() {
    this._videoSettingsMv93Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93QualityInput() {
    return this._videoSettingsMv93Quality;
  }

  // video_settings_mv93_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv93Resolution?: string; 
  public get videoSettingsMv93Resolution() {
    return this.getStringAttribute('video_settings_mv93_resolution');
  }
  public set videoSettingsMv93Resolution(value: string) {
    this._videoSettingsMv93Resolution = value;
  }
  public resetVideoSettingsMv93Resolution() {
    this._videoSettingsMv93Resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93ResolutionInput() {
    return this._videoSettingsMv93Resolution;
  }

  // video_settings_mv93_x_quality - computed: false, optional: true, required: false
  private _videoSettingsMv93XQuality?: string; 
  public get videoSettingsMv93XQuality() {
    return this.getStringAttribute('video_settings_mv93_x_quality');
  }
  public set videoSettingsMv93XQuality(value: string) {
    this._videoSettingsMv93XQuality = value;
  }
  public resetVideoSettingsMv93XQuality() {
    this._videoSettingsMv93XQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93XQualityInput() {
    return this._videoSettingsMv93XQuality;
  }

  // video_settings_mv93_x_resolution - computed: false, optional: true, required: false
  private _videoSettingsMv93XResolution?: string; 
  public get videoSettingsMv93XResolution() {
    return this.getStringAttribute('video_settings_mv93_x_resolution');
  }
  public set videoSettingsMv93XResolution(value: string) {
    this._videoSettingsMv93XResolution = value;
  }
  public resetVideoSettingsMv93XResolution() {
    this._videoSettingsMv93XResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsMv93XResolutionInput() {
    return this._videoSettingsMv93XResolution;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audio_recording_enabled: cdktf.booleanToTerraform(this._audioRecordingEnabled),
      cloud_archive_enabled: cdktf.booleanToTerraform(this._cloudArchiveEnabled),
      max_retention_days: cdktf.numberToTerraform(this._maxRetentionDays),
      motion_based_retention_enabled: cdktf.booleanToTerraform(this._motionBasedRetentionEnabled),
      motion_detector_version: cdktf.numberToTerraform(this._motionDetectorVersion),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      restricted_bandwidth_mode_enabled: cdktf.booleanToTerraform(this._restrictedBandwidthModeEnabled),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      smart_retention_enabled: cdktf.booleanToTerraform(this._smartRetentionEnabled),
      video_settings_mv12_mv22_mv72_quality: cdktf.stringToTerraform(this._videoSettingsMv12Mv22Mv72Quality),
      video_settings_mv12_mv22_mv72_resolution: cdktf.stringToTerraform(this._videoSettingsMv12Mv22Mv72Resolution),
      video_settings_mv12_we_quality: cdktf.stringToTerraform(this._videoSettingsMv12WeQuality),
      video_settings_mv12_we_resolution: cdktf.stringToTerraform(this._videoSettingsMv12WeResolution),
      video_settings_mv13_m_quality: cdktf.stringToTerraform(this._videoSettingsMv13MQuality),
      video_settings_mv13_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv13MResolution),
      video_settings_mv13_quality: cdktf.stringToTerraform(this._videoSettingsMv13Quality),
      video_settings_mv13_resolution: cdktf.stringToTerraform(this._videoSettingsMv13Resolution),
      video_settings_mv21_mv71_quality: cdktf.stringToTerraform(this._videoSettingsMv21Mv71Quality),
      video_settings_mv21_mv71_resolution: cdktf.stringToTerraform(this._videoSettingsMv21Mv71Resolution),
      video_settings_mv22_x_mv72_x_quality: cdktf.stringToTerraform(this._videoSettingsMv22XMv72XQuality),
      video_settings_mv22_x_mv72_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv22XMv72XResolution),
      video_settings_mv23_m_quality: cdktf.stringToTerraform(this._videoSettingsMv23MQuality),
      video_settings_mv23_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv23MResolution),
      video_settings_mv23_quality: cdktf.stringToTerraform(this._videoSettingsMv23Quality),
      video_settings_mv23_resolution: cdktf.stringToTerraform(this._videoSettingsMv23Resolution),
      video_settings_mv23_x_quality: cdktf.stringToTerraform(this._videoSettingsMv23XQuality),
      video_settings_mv23_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv23XResolution),
      video_settings_mv32_quality: cdktf.stringToTerraform(this._videoSettingsMv32Quality),
      video_settings_mv32_resolution: cdktf.stringToTerraform(this._videoSettingsMv32Resolution),
      video_settings_mv33_m_quality: cdktf.stringToTerraform(this._videoSettingsMv33MQuality),
      video_settings_mv33_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv33MResolution),
      video_settings_mv33_quality: cdktf.stringToTerraform(this._videoSettingsMv33Quality),
      video_settings_mv33_resolution: cdktf.stringToTerraform(this._videoSettingsMv33Resolution),
      video_settings_mv52_quality: cdktf.stringToTerraform(this._videoSettingsMv52Quality),
      video_settings_mv52_resolution: cdktf.stringToTerraform(this._videoSettingsMv52Resolution),
      video_settings_mv53_x_quality: cdktf.stringToTerraform(this._videoSettingsMv53XQuality),
      video_settings_mv53_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv53XResolution),
      video_settings_mv63_m_quality: cdktf.stringToTerraform(this._videoSettingsMv63MQuality),
      video_settings_mv63_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv63MResolution),
      video_settings_mv63_quality: cdktf.stringToTerraform(this._videoSettingsMv63Quality),
      video_settings_mv63_resolution: cdktf.stringToTerraform(this._videoSettingsMv63Resolution),
      video_settings_mv63_x_quality: cdktf.stringToTerraform(this._videoSettingsMv63XQuality),
      video_settings_mv63_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv63XResolution),
      video_settings_mv73_m_quality: cdktf.stringToTerraform(this._videoSettingsMv73MQuality),
      video_settings_mv73_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv73MResolution),
      video_settings_mv73_quality: cdktf.stringToTerraform(this._videoSettingsMv73Quality),
      video_settings_mv73_resolution: cdktf.stringToTerraform(this._videoSettingsMv73Resolution),
      video_settings_mv73_x_quality: cdktf.stringToTerraform(this._videoSettingsMv73XQuality),
      video_settings_mv73_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv73XResolution),
      video_settings_mv84_x_quality: cdktf.stringToTerraform(this._videoSettingsMv84XQuality),
      video_settings_mv84_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv84XResolution),
      video_settings_mv93_m_quality: cdktf.stringToTerraform(this._videoSettingsMv93MQuality),
      video_settings_mv93_m_resolution: cdktf.stringToTerraform(this._videoSettingsMv93MResolution),
      video_settings_mv93_quality: cdktf.stringToTerraform(this._videoSettingsMv93Quality),
      video_settings_mv93_resolution: cdktf.stringToTerraform(this._videoSettingsMv93Resolution),
      video_settings_mv93_x_quality: cdktf.stringToTerraform(this._videoSettingsMv93XQuality),
      video_settings_mv93_x_resolution: cdktf.stringToTerraform(this._videoSettingsMv93XResolution),
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
      cloud_archive_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudArchiveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retention_days: {
        value: cdktf.numberToHclTerraform(this._maxRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      restricted_bandwidth_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._restrictedBandwidthModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_retention_enabled: {
        value: cdktf.booleanToHclTerraform(this._smartRetentionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      video_settings_mv12_mv22_mv72_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv12Mv22Mv72Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv12_mv22_mv72_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv12Mv22Mv72Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv12_we_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv12WeQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv12_we_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv12WeResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv13_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv13MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv13_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv13MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv13_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv13Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv13_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv13Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv21_mv71_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv21Mv71Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv21_mv71_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv21Mv71Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv22_x_mv72_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv22XMv72XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv22_x_mv72_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv22XMv72XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv23_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv23XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv32_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv32Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv32_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv32Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv33_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv33MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv33_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv33MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv33_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv33Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv33_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv33Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv52_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv52Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv52_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv52Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv53_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv53XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv53_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv53XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv63_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv63XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv73_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv73XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv84_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv84XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv84_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv84XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_m_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93MQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_m_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93MResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93Quality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93Resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_x_quality: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93XQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_settings_mv93_x_resolution: {
        value: cdktf.stringToHclTerraform(this._videoSettingsMv93XResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
