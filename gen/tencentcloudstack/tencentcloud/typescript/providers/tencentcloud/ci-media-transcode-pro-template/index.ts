// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaTranscodeProTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#bucket CiMediaTranscodeProTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#id CiMediaTranscodeProTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#name CiMediaTranscodeProTemplate#name}
  */
  readonly name: string;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#audio CiMediaTranscodeProTemplate#audio}
  */
  readonly audio?: CiMediaTranscodeProTemplateAudio;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#container CiMediaTranscodeProTemplate#container}
  */
  readonly container: CiMediaTranscodeProTemplateContainer;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#time_interval CiMediaTranscodeProTemplate#time_interval}
  */
  readonly timeInterval?: CiMediaTranscodeProTemplateTimeInterval;
  /**
  * trans_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#trans_config CiMediaTranscodeProTemplate#trans_config}
  */
  readonly transConfig?: CiMediaTranscodeProTemplateTransConfig;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#video CiMediaTranscodeProTemplate#video}
  */
  readonly video?: CiMediaTranscodeProTemplateVideo;
}
export interface CiMediaTranscodeProTemplateAudio {
  /**
  * Codec format, value aac, mp3, flac, amr, Vorbis, opus, pcm_s16le.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#codec CiMediaTranscodeProTemplate#codec}
  */
  readonly codec: string;
  /**
  * Whether to delete the source audio stream, the value is true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#remove CiMediaTranscodeProTemplate#remove}
  */
  readonly remove?: string;
}

export function ciMediaTranscodeProTemplateAudioToTerraform(struct?: CiMediaTranscodeProTemplateAudioOutputReference | CiMediaTranscodeProTemplateAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    remove: cdktf.stringToTerraform(struct!.remove),
  }
}


export function ciMediaTranscodeProTemplateAudioToHclTerraform(struct?: CiMediaTranscodeProTemplateAudioOutputReference | CiMediaTranscodeProTemplateAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove: {
      value: cdktf.stringToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codec = undefined;
      this._remove = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codec = value.codec;
      this._remove = value.remove;
    }
  }

  // codec - computed: false, optional: false, required: true
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string; 
  public get remove() {
    return this.getStringAttribute('remove');
  }
  public set remove(value: string) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }
}
export interface CiMediaTranscodeProTemplateContainerClipConfig {
  /**
  * Fragmentation duration, default 5s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#duration CiMediaTranscodeProTemplate#duration}
  */
  readonly duration?: string;
}

export function ciMediaTranscodeProTemplateContainerClipConfigToTerraform(struct?: CiMediaTranscodeProTemplateContainerClipConfigOutputReference | CiMediaTranscodeProTemplateContainerClipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function ciMediaTranscodeProTemplateContainerClipConfigToHclTerraform(struct?: CiMediaTranscodeProTemplateContainerClipConfigOutputReference | CiMediaTranscodeProTemplateContainerClipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateContainerClipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateContainerClipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateContainerClipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CiMediaTranscodeProTemplateContainer {
  /**
  * Package format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#format CiMediaTranscodeProTemplate#format}
  */
  readonly format: string;
  /**
  * clip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#clip_config CiMediaTranscodeProTemplate#clip_config}
  */
  readonly clipConfig?: CiMediaTranscodeProTemplateContainerClipConfig;
}

export function ciMediaTranscodeProTemplateContainerToTerraform(struct?: CiMediaTranscodeProTemplateContainerOutputReference | CiMediaTranscodeProTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    clip_config: ciMediaTranscodeProTemplateContainerClipConfigToTerraform(struct!.clipConfig),
  }
}


export function ciMediaTranscodeProTemplateContainerToHclTerraform(struct?: CiMediaTranscodeProTemplateContainerOutputReference | CiMediaTranscodeProTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clip_config: {
      value: ciMediaTranscodeProTemplateContainerClipConfigToHclTerraform(struct!.clipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaTranscodeProTemplateContainerClipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._clipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipConfig = this._clipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._clipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._clipConfig.internalValue = value.clipConfig;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // clip_config - computed: false, optional: true, required: false
  private _clipConfig = new CiMediaTranscodeProTemplateContainerClipConfigOutputReference(this, "clip_config");
  public get clipConfig() {
    return this._clipConfig;
  }
  public putClipConfig(value: CiMediaTranscodeProTemplateContainerClipConfig) {
    this._clipConfig.internalValue = value;
  }
  public resetClipConfig() {
    this._clipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipConfigInput() {
    return this._clipConfig.internalValue;
  }
}
export interface CiMediaTranscodeProTemplateTimeInterval {
  /**
  * duration, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#duration CiMediaTranscodeProTemplate#duration}
  */
  readonly duration?: string;
  /**
  * Starting time, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#start CiMediaTranscodeProTemplate#start}
  */
  readonly start?: string;
}

export function ciMediaTranscodeProTemplateTimeIntervalToTerraform(struct?: CiMediaTranscodeProTemplateTimeIntervalOutputReference | CiMediaTranscodeProTemplateTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function ciMediaTranscodeProTemplateTimeIntervalToHclTerraform(struct?: CiMediaTranscodeProTemplateTimeIntervalOutputReference | CiMediaTranscodeProTemplateTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._start = value.start;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface CiMediaTranscodeProTemplateTransConfig {
  /**
  * Resolution adjustment method, value scale, crop, pad, none, When the aspect ratio of the output video is different from the original video, adjust the resolution accordingly according to this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#adj_dar_method CiMediaTranscodeProTemplate#adj_dar_method}
  */
  readonly adjDarMethod?: string;
  /**
  * Audio bit rate adjustment mode, value 0, 1; when the output audio bit rate is greater than the original audio bit rate, 0 means use the original audio bit rate; 1 means return transcoding failed, Take effect when IsCheckAudioBitrate is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#audio_bitrate_adj_method CiMediaTranscodeProTemplate#audio_bitrate_adj_method}
  */
  readonly audioBitrateAdjMethod?: string;
  /**
  * Whether to delete the MetaData information in the file, true, false, When false, keep source file information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#delete_metadata CiMediaTranscodeProTemplate#delete_metadata}
  */
  readonly deleteMetadata?: string;
  /**
  * Whether to check the audio code rate, true, false, When false, transcode according to configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#is_check_audio_bitrate CiMediaTranscodeProTemplate#is_check_audio_bitrate}
  */
  readonly isCheckAudioBitrate?: string;
  /**
  * Whether to check the resolution, when it is false, transcode according to the configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#is_check_reso CiMediaTranscodeProTemplate#is_check_reso}
  */
  readonly isCheckReso?: string;
  /**
  * Whether to check the video code rate, when it is false, transcode according to the configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#is_check_video_bitrate CiMediaTranscodeProTemplate#is_check_video_bitrate}
  */
  readonly isCheckVideoBitrate?: string;
  /**
  * Whether to enable HDR to SDR true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#is_hdr2_sdr CiMediaTranscodeProTemplate#is_hdr2_sdr}
  */
  readonly isHdr2Sdr?: string;
  /**
  * Resolution adjustment mode, value 0, 1; 0 means use the original video resolution; 1 means return transcoding failed, Take effect when IsCheckReso is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#reso_adj_method CiMediaTranscodeProTemplate#reso_adj_method}
  */
  readonly resoAdjMethod?: string;
  /**
  * Video bit rate adjustment method, value 0, 1; when the output video bit rate is greater than the original video bit rate, 0 means use the original video bit rate; 1 means return transcoding failed, Take effect when IsCheckVideoBitrate is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#video_bitrate_adj_method CiMediaTranscodeProTemplate#video_bitrate_adj_method}
  */
  readonly videoBitrateAdjMethod?: string;
}

export function ciMediaTranscodeProTemplateTransConfigToTerraform(struct?: CiMediaTranscodeProTemplateTransConfigOutputReference | CiMediaTranscodeProTemplateTransConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adj_dar_method: cdktf.stringToTerraform(struct!.adjDarMethod),
    audio_bitrate_adj_method: cdktf.stringToTerraform(struct!.audioBitrateAdjMethod),
    delete_metadata: cdktf.stringToTerraform(struct!.deleteMetadata),
    is_check_audio_bitrate: cdktf.stringToTerraform(struct!.isCheckAudioBitrate),
    is_check_reso: cdktf.stringToTerraform(struct!.isCheckReso),
    is_check_video_bitrate: cdktf.stringToTerraform(struct!.isCheckVideoBitrate),
    is_hdr2_sdr: cdktf.stringToTerraform(struct!.isHdr2Sdr),
    reso_adj_method: cdktf.stringToTerraform(struct!.resoAdjMethod),
    video_bitrate_adj_method: cdktf.stringToTerraform(struct!.videoBitrateAdjMethod),
  }
}


export function ciMediaTranscodeProTemplateTransConfigToHclTerraform(struct?: CiMediaTranscodeProTemplateTransConfigOutputReference | CiMediaTranscodeProTemplateTransConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adj_dar_method: {
      value: cdktf.stringToHclTerraform(struct!.adjDarMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audio_bitrate_adj_method: {
      value: cdktf.stringToHclTerraform(struct!.audioBitrateAdjMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_metadata: {
      value: cdktf.stringToHclTerraform(struct!.deleteMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_check_audio_bitrate: {
      value: cdktf.stringToHclTerraform(struct!.isCheckAudioBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_check_reso: {
      value: cdktf.stringToHclTerraform(struct!.isCheckReso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_check_video_bitrate: {
      value: cdktf.stringToHclTerraform(struct!.isCheckVideoBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hdr2_sdr: {
      value: cdktf.stringToHclTerraform(struct!.isHdr2Sdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reso_adj_method: {
      value: cdktf.stringToHclTerraform(struct!.resoAdjMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_bitrate_adj_method: {
      value: cdktf.stringToHclTerraform(struct!.videoBitrateAdjMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateTransConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateTransConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjDarMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjDarMethod = this._adjDarMethod;
    }
    if (this._audioBitrateAdjMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioBitrateAdjMethod = this._audioBitrateAdjMethod;
    }
    if (this._deleteMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMetadata = this._deleteMetadata;
    }
    if (this._isCheckAudioBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckAudioBitrate = this._isCheckAudioBitrate;
    }
    if (this._isCheckReso !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckReso = this._isCheckReso;
    }
    if (this._isCheckVideoBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckVideoBitrate = this._isCheckVideoBitrate;
    }
    if (this._isHdr2Sdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHdr2Sdr = this._isHdr2Sdr;
    }
    if (this._resoAdjMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resoAdjMethod = this._resoAdjMethod;
    }
    if (this._videoBitrateAdjMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoBitrateAdjMethod = this._videoBitrateAdjMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateTransConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjDarMethod = undefined;
      this._audioBitrateAdjMethod = undefined;
      this._deleteMetadata = undefined;
      this._isCheckAudioBitrate = undefined;
      this._isCheckReso = undefined;
      this._isCheckVideoBitrate = undefined;
      this._isHdr2Sdr = undefined;
      this._resoAdjMethod = undefined;
      this._videoBitrateAdjMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjDarMethod = value.adjDarMethod;
      this._audioBitrateAdjMethod = value.audioBitrateAdjMethod;
      this._deleteMetadata = value.deleteMetadata;
      this._isCheckAudioBitrate = value.isCheckAudioBitrate;
      this._isCheckReso = value.isCheckReso;
      this._isCheckVideoBitrate = value.isCheckVideoBitrate;
      this._isHdr2Sdr = value.isHdr2Sdr;
      this._resoAdjMethod = value.resoAdjMethod;
      this._videoBitrateAdjMethod = value.videoBitrateAdjMethod;
    }
  }

  // adj_dar_method - computed: false, optional: true, required: false
  private _adjDarMethod?: string; 
  public get adjDarMethod() {
    return this.getStringAttribute('adj_dar_method');
  }
  public set adjDarMethod(value: string) {
    this._adjDarMethod = value;
  }
  public resetAdjDarMethod() {
    this._adjDarMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjDarMethodInput() {
    return this._adjDarMethod;
  }

  // audio_bitrate_adj_method - computed: false, optional: true, required: false
  private _audioBitrateAdjMethod?: string; 
  public get audioBitrateAdjMethod() {
    return this.getStringAttribute('audio_bitrate_adj_method');
  }
  public set audioBitrateAdjMethod(value: string) {
    this._audioBitrateAdjMethod = value;
  }
  public resetAudioBitrateAdjMethod() {
    this._audioBitrateAdjMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioBitrateAdjMethodInput() {
    return this._audioBitrateAdjMethod;
  }

  // delete_metadata - computed: false, optional: true, required: false
  private _deleteMetadata?: string; 
  public get deleteMetadata() {
    return this.getStringAttribute('delete_metadata');
  }
  public set deleteMetadata(value: string) {
    this._deleteMetadata = value;
  }
  public resetDeleteMetadata() {
    this._deleteMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMetadataInput() {
    return this._deleteMetadata;
  }

  // is_check_audio_bitrate - computed: false, optional: true, required: false
  private _isCheckAudioBitrate?: string; 
  public get isCheckAudioBitrate() {
    return this.getStringAttribute('is_check_audio_bitrate');
  }
  public set isCheckAudioBitrate(value: string) {
    this._isCheckAudioBitrate = value;
  }
  public resetIsCheckAudioBitrate() {
    this._isCheckAudioBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckAudioBitrateInput() {
    return this._isCheckAudioBitrate;
  }

  // is_check_reso - computed: false, optional: true, required: false
  private _isCheckReso?: string; 
  public get isCheckReso() {
    return this.getStringAttribute('is_check_reso');
  }
  public set isCheckReso(value: string) {
    this._isCheckReso = value;
  }
  public resetIsCheckReso() {
    this._isCheckReso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckResoInput() {
    return this._isCheckReso;
  }

  // is_check_video_bitrate - computed: false, optional: true, required: false
  private _isCheckVideoBitrate?: string; 
  public get isCheckVideoBitrate() {
    return this.getStringAttribute('is_check_video_bitrate');
  }
  public set isCheckVideoBitrate(value: string) {
    this._isCheckVideoBitrate = value;
  }
  public resetIsCheckVideoBitrate() {
    this._isCheckVideoBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckVideoBitrateInput() {
    return this._isCheckVideoBitrate;
  }

  // is_hdr2_sdr - computed: false, optional: true, required: false
  private _isHdr2Sdr?: string; 
  public get isHdr2Sdr() {
    return this.getStringAttribute('is_hdr2_sdr');
  }
  public set isHdr2Sdr(value: string) {
    this._isHdr2Sdr = value;
  }
  public resetIsHdr2Sdr() {
    this._isHdr2Sdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHdr2SdrInput() {
    return this._isHdr2Sdr;
  }

  // reso_adj_method - computed: false, optional: true, required: false
  private _resoAdjMethod?: string; 
  public get resoAdjMethod() {
    return this.getStringAttribute('reso_adj_method');
  }
  public set resoAdjMethod(value: string) {
    this._resoAdjMethod = value;
  }
  public resetResoAdjMethod() {
    this._resoAdjMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resoAdjMethodInput() {
    return this._resoAdjMethod;
  }

  // video_bitrate_adj_method - computed: false, optional: true, required: false
  private _videoBitrateAdjMethod?: string; 
  public get videoBitrateAdjMethod() {
    return this.getStringAttribute('video_bitrate_adj_method');
  }
  public set videoBitrateAdjMethod(value: string) {
    this._videoBitrateAdjMethod = value;
  }
  public resetVideoBitrateAdjMethod() {
    this._videoBitrateAdjMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoBitrateAdjMethodInput() {
    return this._videoBitrateAdjMethod;
  }
}
export interface CiMediaTranscodeProTemplateVideo {
  /**
  * Bit rate of video output file, value range: [10, 50000], unit: Kbps, auto means adaptive bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#bitrate CiMediaTranscodeProTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * Codec format, default value: `H.264`, when format is WebM, it is VP8, value range: `H.264`, `H.265`, `VP8`, `VP9`, `AV1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#codec CiMediaTranscodeProTemplate#codec}
  */
  readonly codec?: string;
  /**
  * Frame rate, value range: (0, 60], Unit: fps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#fps CiMediaTranscodeProTemplate#fps}
  */
  readonly fps?: string;
  /**
  * High, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#height CiMediaTranscodeProTemplate#height}
  */
  readonly height?: string;
  /**
  * field pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#interlaced CiMediaTranscodeProTemplate#interlaced}
  */
  readonly interlaced?: string;
  /**
  * encoding level, Support baseline, main, high, auto- When Pixfmt is auto, this parameter can only be set to auto, when it is set to other options, the parameter value will be set to auto- baseline: suitable for mobile devices- main: suitable for standard resolution devices- high: suitable for high-resolution devices- Only H.264 supports this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#profile CiMediaTranscodeProTemplate#profile}
  */
  readonly profile?: string;
  /**
  * Rotation angle, Value range: [0, 360), Unit: degree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#rotate CiMediaTranscodeProTemplate#rotate}
  */
  readonly rotate?: string;
  /**
  * width, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#width CiMediaTranscodeProTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaTranscodeProTemplateVideoToTerraform(struct?: CiMediaTranscodeProTemplateVideoOutputReference | CiMediaTranscodeProTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    fps: cdktf.stringToTerraform(struct!.fps),
    height: cdktf.stringToTerraform(struct!.height),
    interlaced: cdktf.stringToTerraform(struct!.interlaced),
    profile: cdktf.stringToTerraform(struct!.profile),
    rotate: cdktf.stringToTerraform(struct!.rotate),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaTranscodeProTemplateVideoToHclTerraform(struct?: CiMediaTranscodeProTemplateVideoOutputReference | CiMediaTranscodeProTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate: {
      value: cdktf.stringToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fps: {
      value: cdktf.stringToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interlaced: {
      value: cdktf.stringToHclTerraform(struct!.interlaced),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotate: {
      value: cdktf.stringToHclTerraform(struct!.rotate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeProTemplateVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeProTemplateVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._interlaced !== undefined) {
      hasAnyValues = true;
      internalValueResult.interlaced = this._interlaced;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._rotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotate = this._rotate;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeProTemplateVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._fps = undefined;
      this._height = undefined;
      this._interlaced = undefined;
      this._profile = undefined;
      this._rotate = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._fps = value.fps;
      this._height = value.height;
      this._interlaced = value.interlaced;
      this._profile = value.profile;
      this._rotate = value.rotate;
      this._width = value.width;
    }
  }

  // bitrate - computed: false, optional: true, required: false
  private _bitrate?: string; 
  public get bitrate() {
    return this.getStringAttribute('bitrate');
  }
  public set bitrate(value: string) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // fps - computed: false, optional: true, required: false
  private _fps?: string; 
  public get fps() {
    return this.getStringAttribute('fps');
  }
  public set fps(value: string) {
    this._fps = value;
  }
  public resetFps() {
    this._fps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // interlaced - computed: false, optional: true, required: false
  private _interlaced?: string; 
  public get interlaced() {
    return this.getStringAttribute('interlaced');
  }
  public set interlaced(value: string) {
    this._interlaced = value;
  }
  public resetInterlaced() {
    this._interlaced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interlacedInput() {
    return this._interlaced;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // rotate - computed: false, optional: true, required: false
  private _rotate?: string; 
  public get rotate() {
    return this.getStringAttribute('rotate');
  }
  public set rotate(value: string) {
    this._rotate = value;
  }
  public resetRotate() {
    this._rotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template tencentcloud_ci_media_transcode_pro_template}
*/
export class CiMediaTranscodeProTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_transcode_pro_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaTranscodeProTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaTranscodeProTemplate to import
  * @param importFromId The id of the existing CiMediaTranscodeProTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaTranscodeProTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_transcode_pro_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ci_media_transcode_pro_template tencentcloud_ci_media_transcode_pro_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaTranscodeProTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaTranscodeProTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_transcode_pro_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._audio.internalValue = config.audio;
    this._container.internalValue = config.container;
    this._timeInterval.internalValue = config.timeInterval;
    this._transConfig.internalValue = config.transConfig;
    this._video.internalValue = config.video;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // audio - computed: false, optional: true, required: false
  private _audio = new CiMediaTranscodeProTemplateAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: CiMediaTranscodeProTemplateAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // container - computed: false, optional: false, required: true
  private _container = new CiMediaTranscodeProTemplateContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: CiMediaTranscodeProTemplateContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new CiMediaTranscodeProTemplateTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: CiMediaTranscodeProTemplateTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }

  // trans_config - computed: false, optional: true, required: false
  private _transConfig = new CiMediaTranscodeProTemplateTransConfigOutputReference(this, "trans_config");
  public get transConfig() {
    return this._transConfig;
  }
  public putTransConfig(value: CiMediaTranscodeProTemplateTransConfig) {
    this._transConfig.internalValue = value;
  }
  public resetTransConfig() {
    this._transConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transConfigInput() {
    return this._transConfig.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new CiMediaTranscodeProTemplateVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: CiMediaTranscodeProTemplateVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      audio: ciMediaTranscodeProTemplateAudioToTerraform(this._audio.internalValue),
      container: ciMediaTranscodeProTemplateContainerToTerraform(this._container.internalValue),
      time_interval: ciMediaTranscodeProTemplateTimeIntervalToTerraform(this._timeInterval.internalValue),
      trans_config: ciMediaTranscodeProTemplateTransConfigToTerraform(this._transConfig.internalValue),
      video: ciMediaTranscodeProTemplateVideoToTerraform(this._video.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      audio: {
        value: ciMediaTranscodeProTemplateAudioToHclTerraform(this._audio.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeProTemplateAudioList",
      },
      container: {
        value: ciMediaTranscodeProTemplateContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeProTemplateContainerList",
      },
      time_interval: {
        value: ciMediaTranscodeProTemplateTimeIntervalToHclTerraform(this._timeInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeProTemplateTimeIntervalList",
      },
      trans_config: {
        value: ciMediaTranscodeProTemplateTransConfigToHclTerraform(this._transConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeProTemplateTransConfigList",
      },
      video: {
        value: ciMediaTranscodeProTemplateVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeProTemplateVideoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
