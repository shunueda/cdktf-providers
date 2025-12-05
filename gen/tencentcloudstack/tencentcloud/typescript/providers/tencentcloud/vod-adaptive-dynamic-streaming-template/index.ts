// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodAdaptiveDynamicStreamingTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#comment VodAdaptiveDynamicStreamingTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Whether to prohibit transcoding video from low bitrate to high bitrate. Valid values: `false`,`true`. `false`: no, `true`: yes. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#disable_higher_video_bitrate VodAdaptiveDynamicStreamingTemplate#disable_higher_video_bitrate}
  */
  readonly disableHigherVideoBitrate?: boolean | cdktf.IResolvable;
  /**
  * Whether to prohibit transcoding from low resolution to high resolution. Valid values: `false`,`true`. `false`: no, `true`: yes. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#disable_higher_video_resolution VodAdaptiveDynamicStreamingTemplate#disable_higher_video_resolution}
  */
  readonly disableHigherVideoResolution?: boolean | cdktf.IResolvable;
  /**
  * DRM scheme type. Valid values: `SimpleAES`. If this field is an empty string, DRM will not be performed on the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#drm_type VodAdaptiveDynamicStreamingTemplate#drm_type}
  */
  readonly drmType?: string;
  /**
  * Adaptive bitstream format. Valid values: `HLS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#format VodAdaptiveDynamicStreamingTemplate#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#id VodAdaptiveDynamicStreamingTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template name. Length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#name VodAdaptiveDynamicStreamingTemplate#name}
  */
  readonly name: string;
  /**
  * Segment type, valid when Format is HLS, optional values:
  * - ts: ts segment;
  * - fmp4: fmp4 segment;
  * Default value: ts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#segment_type VodAdaptiveDynamicStreamingTemplate#segment_type}
  */
  readonly segmentType?: string;
  /**
  * The VOD [application](https://intl.cloud.tencent.com/document/product/266/14574) ID. For customers who activate VOD service from December 25, 2023, if they want to access resources in a VOD application (whether it's the default application or a newly created one), they must fill in this field with the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#sub_app_id VodAdaptiveDynamicStreamingTemplate#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * stream_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#stream_info VodAdaptiveDynamicStreamingTemplate#stream_info}
  */
  readonly streamInfo: VodAdaptiveDynamicStreamingTemplateStreamInfo[] | cdktf.IResolvable;
}
export interface VodAdaptiveDynamicStreamingTemplateStreamInfoAudio {
  /**
  * Audio channel system. Valid values: mono, dual, stereo. Default value: dual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#audio_channel VodAdaptiveDynamicStreamingTemplate#audio_channel}
  */
  readonly audioChannel?: string;
  /**
  * Audio stream bitrate in Kbps. Value range: `0` and `[26, 256]`. If the value is `0`, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#bitrate VodAdaptiveDynamicStreamingTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Audio stream encoder. Valid value are: `libfdk_aac` and `libmp3lame`. while `libfdk_aac` is recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#codec VodAdaptiveDynamicStreamingTemplate#codec}
  */
  readonly codec: string;
  /**
  * Audio stream sample rate. Valid values: `32000`, `44100`, `48000`Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#sample_rate VodAdaptiveDynamicStreamingTemplate#sample_rate}
  */
  readonly sampleRate: number;
}

export function vodAdaptiveDynamicStreamingTemplateStreamInfoAudioToTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoAudioOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_channel: cdktf.stringToTerraform(struct!.audioChannel),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function vodAdaptiveDynamicStreamingTemplateStreamInfoAudioToHclTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoAudioOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_channel: {
      value: cdktf.stringToHclTerraform(struct!.audioChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodAdaptiveDynamicStreamingTemplateStreamInfoAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodAdaptiveDynamicStreamingTemplateStreamInfoAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioChannel = this._audioChannel;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodAdaptiveDynamicStreamingTemplateStreamInfoAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioChannel = undefined;
      this._bitrate = undefined;
      this._codec = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioChannel = value.audioChannel;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._sampleRate = value.sampleRate;
    }
  }

  // audio_channel - computed: false, optional: true, required: false
  private _audioChannel?: string; 
  public get audioChannel() {
    return this.getStringAttribute('audio_channel');
  }
  public set audioChannel(value: string) {
    this._audioChannel = value;
  }
  public resetAudioChannel() {
    this._audioChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioChannelInput() {
    return this._audioChannel;
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
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

  // sample_rate - computed: false, optional: false, required: true
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig {
  /**
  * Video bitrate limit, which is valid when Type specifies extreme speed HD type. If you leave it empty or enter 0, there is no video bitrate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#max_video_bitrate VodAdaptiveDynamicStreamingTemplate#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * Extreme high-speed HD type, available values:
  * - TEHD-100: super high definition-100th;
  * - OFF: turn off Ultra High definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#type VodAdaptiveDynamicStreamingTemplate#type}
  */
  readonly type: string;
}

export function vodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigToTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigToHclTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_video_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.maxVideoBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitrate = this._maxVideoBitrate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxVideoBitrate = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxVideoBitrate = value.maxVideoBitrate;
      this._type = value.type;
    }
  }

  // max_video_bitrate - computed: true, optional: true, required: false
  private _maxVideoBitrate?: number; 
  public get maxVideoBitrate() {
    return this.getNumberAttribute('max_video_bitrate');
  }
  public set maxVideoBitrate(value: number) {
    this._maxVideoBitrate = value;
  }
  public resetMaxVideoBitrate() {
    this._maxVideoBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitrateInput() {
    return this._maxVideoBitrate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface VodAdaptiveDynamicStreamingTemplateStreamInfoVideo {
  /**
  * Bitrate of video stream in Kbps. Value range: `0` and `[128, 35000]`. If the value is `0`, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#bitrate VodAdaptiveDynamicStreamingTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Video stream encoder. Valid values: `libx264`,`libx265`,`av1`. `libx264`: H.264, `libx265`: H.265, `av1`: AOMedia Video 1. Currently, a resolution within 640x480 must be specified for `H.265`. and the `av1` container only supports mp4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#codec VodAdaptiveDynamicStreamingTemplate#codec}
  */
  readonly codec: string;
  /**
  * Encoding label, valid only if the encoding format of the video stream is H.265 encoding. Available values:
  * - hvc1: stands for hvc1 tag;
  * - hev1: stands for the hev1 tag;
  * Default value: hvc1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#codec_tag VodAdaptiveDynamicStreamingTemplate#codec_tag}
  */
  readonly codecTag?: string;
  /**
  * Fill type. Fill refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported: `stretch`: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot shorter or longer; `black`: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks. Default value: black. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#fill_type VodAdaptiveDynamicStreamingTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate in Hz. Value range: `[0, 60]`. If the value is `0`, the frame rate will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#fps VodAdaptiveDynamicStreamingTemplate#fps}
  */
  readonly fps: number;
  /**
  * Interval between Keyframe I frames, value range: 0 and [1, 100000], unit: number of frames. When you fill in 0 or leave it empty, the gop length is automatically set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#gop VodAdaptiveDynamicStreamingTemplate#gop}
  */
  readonly gop?: number;
  /**
  * Maximum value of the height (or short side) of a video stream in px. Value range: `0` and `[128, 4096]`. If both `width` and `height` are `0`, the resolution will be the same as that of the source video; If `width` is `0`, but `height` is not `0`, `width` will be proportionally scaled; If `width` is not `0`, but `height` is `0`, `height` will be proportionally scaled; If both `width` and `height` are not `0`, the custom resolution will be used. Default value: `0`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#height VodAdaptiveDynamicStreamingTemplate#height}
  */
  readonly height?: number;
  /**
  * Whether the transcoding output still maintains HDR when the original video is HDR (High Dynamic Range). Value range:
  * - ON: if the original file is HDR, the transcoding output remains HDR;, otherwise the transcoding output is SDR (Standard Dynamic Range);
  * - OFF: regardless of whether the original file is HDR or SDR, the transcoding output is SDR;
  * Default value: OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#preserve_hdr_switch VodAdaptiveDynamicStreamingTemplate#preserve_hdr_switch}
  */
  readonly preserveHdrSwitch?: string;
  /**
  * Resolution adaption. Valid values: `true`,`false`. `true`: enabled. In this case, `width` represents the long side of a video, while `height` the short side; `false`: disabled. In this case, `width` represents the width of a video, while `height` the height. Default value: `true`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#resolution_adaptive VodAdaptiveDynamicStreamingTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: boolean | cdktf.IResolvable;
  /**
  * Video constant bit rate control factor, value range is [1,51].
  * Note:
  * - If this parameter is specified, the bitrate control method of CRF will be used for transcoding (the video bitrate will no longer take effect);
  * - This field is required when the video stream encoding format is H.266. The recommended value is 28;
  * - If there are no special requirements, it is not recommended to specify this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#vcrf VodAdaptiveDynamicStreamingTemplate#vcrf}
  */
  readonly vcrf?: number;
  /**
  * Maximum value of the width (or long side) of a video stream in px. Value range: `0` and `[128, 4096]`. If both `width` and `height` are `0`, the resolution will be the same as that of the source video; If `width` is `0`, but `height` is not `0`, `width` will be proportionally scaled; If `width` is not `0`, but `height` is `0`, `height` will be proportionally scaled; If both `width` and `height` are not `0`, the custom resolution will be used. Default value: `0`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#width VodAdaptiveDynamicStreamingTemplate#width}
  */
  readonly width?: number;
}

export function vodAdaptiveDynamicStreamingTemplateStreamInfoVideoToTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoVideoOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    codec_tag: cdktf.stringToTerraform(struct!.codecTag),
    fill_type: cdktf.stringToTerraform(struct!.fillType),
    fps: cdktf.numberToTerraform(struct!.fps),
    gop: cdktf.numberToTerraform(struct!.gop),
    height: cdktf.numberToTerraform(struct!.height),
    preserve_hdr_switch: cdktf.stringToTerraform(struct!.preserveHdrSwitch),
    resolution_adaptive: cdktf.booleanToTerraform(struct!.resolutionAdaptive),
    vcrf: cdktf.numberToTerraform(struct!.vcrf),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function vodAdaptiveDynamicStreamingTemplateStreamInfoVideoToHclTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfoVideoOutputReference | VodAdaptiveDynamicStreamingTemplateStreamInfoVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codec_tag: {
      value: cdktf.stringToHclTerraform(struct!.codecTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_type: {
      value: cdktf.stringToHclTerraform(struct!.fillType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fps: {
      value: cdktf.numberToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gop: {
      value: cdktf.numberToHclTerraform(struct!.gop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preserve_hdr_switch: {
      value: cdktf.stringToHclTerraform(struct!.preserveHdrSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolution_adaptive: {
      value: cdktf.booleanToHclTerraform(struct!.resolutionAdaptive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vcrf: {
      value: cdktf.numberToHclTerraform(struct!.vcrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodAdaptiveDynamicStreamingTemplateStreamInfoVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodAdaptiveDynamicStreamingTemplateStreamInfoVideo | undefined {
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
    if (this._codecTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.codecTag = this._codecTag;
    }
    if (this._fillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillType = this._fillType;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._gop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gop = this._gop;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._preserveHdrSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveHdrSwitch = this._preserveHdrSwitch;
    }
    if (this._resolutionAdaptive !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionAdaptive = this._resolutionAdaptive;
    }
    if (this._vcrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcrf = this._vcrf;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodAdaptiveDynamicStreamingTemplateStreamInfoVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._codecTag = undefined;
      this._fillType = undefined;
      this._fps = undefined;
      this._gop = undefined;
      this._height = undefined;
      this._preserveHdrSwitch = undefined;
      this._resolutionAdaptive = undefined;
      this._vcrf = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._codecTag = value.codecTag;
      this._fillType = value.fillType;
      this._fps = value.fps;
      this._gop = value.gop;
      this._height = value.height;
      this._preserveHdrSwitch = value.preserveHdrSwitch;
      this._resolutionAdaptive = value.resolutionAdaptive;
      this._vcrf = value.vcrf;
      this._width = value.width;
    }
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
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

  // codec_tag - computed: true, optional: true, required: false
  private _codecTag?: string; 
  public get codecTag() {
    return this.getStringAttribute('codec_tag');
  }
  public set codecTag(value: string) {
    this._codecTag = value;
  }
  public resetCodecTag() {
    this._codecTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecTagInput() {
    return this._codecTag;
  }

  // fill_type - computed: false, optional: true, required: false
  private _fillType?: string; 
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }
  public set fillType(value: string) {
    this._fillType = value;
  }
  public resetFillType() {
    this._fillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillTypeInput() {
    return this._fillType;
  }

  // fps - computed: false, optional: false, required: true
  private _fps?: number; 
  public get fps() {
    return this.getNumberAttribute('fps');
  }
  public set fps(value: number) {
    this._fps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // gop - computed: true, optional: true, required: false
  private _gop?: number; 
  public get gop() {
    return this.getNumberAttribute('gop');
  }
  public set gop(value: number) {
    this._gop = value;
  }
  public resetGop() {
    this._gop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopInput() {
    return this._gop;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // preserve_hdr_switch - computed: true, optional: true, required: false
  private _preserveHdrSwitch?: string; 
  public get preserveHdrSwitch() {
    return this.getStringAttribute('preserve_hdr_switch');
  }
  public set preserveHdrSwitch(value: string) {
    this._preserveHdrSwitch = value;
  }
  public resetPreserveHdrSwitch() {
    this._preserveHdrSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveHdrSwitchInput() {
    return this._preserveHdrSwitch;
  }

  // resolution_adaptive - computed: false, optional: true, required: false
  private _resolutionAdaptive?: boolean | cdktf.IResolvable; 
  public get resolutionAdaptive() {
    return this.getBooleanAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: boolean | cdktf.IResolvable) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
  }

  // vcrf - computed: true, optional: true, required: false
  private _vcrf?: number; 
  public get vcrf() {
    return this.getNumberAttribute('vcrf');
  }
  public set vcrf(value: number) {
    this._vcrf = value;
  }
  public resetVcrf() {
    this._vcrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcrfInput() {
    return this._vcrf;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
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
export interface VodAdaptiveDynamicStreamingTemplateStreamInfo {
  /**
  * Whether to remove audio stream. Valid values: `false`: no, `true`: yes. `false` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#remove_audio VodAdaptiveDynamicStreamingTemplate#remove_audio}
  */
  readonly removeAudio?: boolean | cdktf.IResolvable;
  /**
  * Whether to remove video stream. Valid values: `false`: no, `true`: yes. `false` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#remove_video VodAdaptiveDynamicStreamingTemplate#remove_video}
  */
  readonly removeVideo?: boolean | cdktf.IResolvable;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#audio VodAdaptiveDynamicStreamingTemplate#audio}
  */
  readonly audio: VodAdaptiveDynamicStreamingTemplateStreamInfoAudio;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#tehd_config VodAdaptiveDynamicStreamingTemplate#tehd_config}
  */
  readonly tehdConfig?: VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#video VodAdaptiveDynamicStreamingTemplate#video}
  */
  readonly video: VodAdaptiveDynamicStreamingTemplateStreamInfoVideo;
}

export function vodAdaptiveDynamicStreamingTemplateStreamInfoToTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_audio: cdktf.booleanToTerraform(struct!.removeAudio),
    remove_video: cdktf.booleanToTerraform(struct!.removeVideo),
    audio: vodAdaptiveDynamicStreamingTemplateStreamInfoAudioToTerraform(struct!.audio),
    tehd_config: vodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigToTerraform(struct!.tehdConfig),
    video: vodAdaptiveDynamicStreamingTemplateStreamInfoVideoToTerraform(struct!.video),
  }
}


export function vodAdaptiveDynamicStreamingTemplateStreamInfoToHclTerraform(struct?: VodAdaptiveDynamicStreamingTemplateStreamInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_audio: {
      value: cdktf.booleanToHclTerraform(struct!.removeAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_video: {
      value: cdktf.booleanToHclTerraform(struct!.removeVideo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audio: {
      value: vodAdaptiveDynamicStreamingTemplateStreamInfoAudioToHclTerraform(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "VodAdaptiveDynamicStreamingTemplateStreamInfoAudioList",
    },
    tehd_config: {
      value: vodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigToHclTerraform(struct!.tehdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigList",
    },
    video: {
      value: vodAdaptiveDynamicStreamingTemplateStreamInfoVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "VodAdaptiveDynamicStreamingTemplateStreamInfoVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodAdaptiveDynamicStreamingTemplateStreamInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VodAdaptiveDynamicStreamingTemplateStreamInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAudio = this._removeAudio;
    }
    if (this._removeVideo !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeVideo = this._removeVideo;
    }
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._tehdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tehdConfig = this._tehdConfig?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodAdaptiveDynamicStreamingTemplateStreamInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._removeAudio = undefined;
      this._removeVideo = undefined;
      this._audio.internalValue = undefined;
      this._tehdConfig.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._removeAudio = value.removeAudio;
      this._removeVideo = value.removeVideo;
      this._audio.internalValue = value.audio;
      this._tehdConfig.internalValue = value.tehdConfig;
      this._video.internalValue = value.video;
    }
  }

  // remove_audio - computed: false, optional: true, required: false
  private _removeAudio?: boolean | cdktf.IResolvable; 
  public get removeAudio() {
    return this.getBooleanAttribute('remove_audio');
  }
  public set removeAudio(value: boolean | cdktf.IResolvable) {
    this._removeAudio = value;
  }
  public resetRemoveAudio() {
    this._removeAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAudioInput() {
    return this._removeAudio;
  }

  // remove_video - computed: true, optional: true, required: false
  private _removeVideo?: boolean | cdktf.IResolvable; 
  public get removeVideo() {
    return this.getBooleanAttribute('remove_video');
  }
  public set removeVideo(value: boolean | cdktf.IResolvable) {
    this._removeVideo = value;
  }
  public resetRemoveVideo() {
    this._removeVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVideoInput() {
    return this._removeVideo;
  }

  // audio - computed: false, optional: false, required: true
  private _audio = new VodAdaptiveDynamicStreamingTemplateStreamInfoAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: VodAdaptiveDynamicStreamingTemplateStreamInfoAudio) {
    this._audio.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // tehd_config - computed: false, optional: true, required: false
  private _tehdConfig = new VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: VodAdaptiveDynamicStreamingTemplateStreamInfoTehdConfig) {
    this._tehdConfig.internalValue = value;
  }
  public resetTehdConfig() {
    this._tehdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tehdConfigInput() {
    return this._tehdConfig.internalValue;
  }

  // video - computed: false, optional: false, required: true
  private _video = new VodAdaptiveDynamicStreamingTemplateStreamInfoVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: VodAdaptiveDynamicStreamingTemplateStreamInfoVideo) {
    this._video.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class VodAdaptiveDynamicStreamingTemplateStreamInfoList extends cdktf.ComplexList {
  public internalValue? : VodAdaptiveDynamicStreamingTemplateStreamInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VodAdaptiveDynamicStreamingTemplateStreamInfoOutputReference {
    return new VodAdaptiveDynamicStreamingTemplateStreamInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template tencentcloud_vod_adaptive_dynamic_streaming_template}
*/
export class VodAdaptiveDynamicStreamingTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_adaptive_dynamic_streaming_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodAdaptiveDynamicStreamingTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodAdaptiveDynamicStreamingTemplate to import
  * @param importFromId The id of the existing VodAdaptiveDynamicStreamingTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodAdaptiveDynamicStreamingTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_adaptive_dynamic_streaming_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vod_adaptive_dynamic_streaming_template tencentcloud_vod_adaptive_dynamic_streaming_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodAdaptiveDynamicStreamingTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VodAdaptiveDynamicStreamingTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_adaptive_dynamic_streaming_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._disableHigherVideoBitrate = config.disableHigherVideoBitrate;
    this._disableHigherVideoResolution = config.disableHigherVideoResolution;
    this._drmType = config.drmType;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._segmentType = config.segmentType;
    this._subAppId = config.subAppId;
    this._streamInfo.internalValue = config.streamInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // disable_higher_video_bitrate - computed: false, optional: true, required: false
  private _disableHigherVideoBitrate?: boolean | cdktf.IResolvable; 
  public get disableHigherVideoBitrate() {
    return this.getBooleanAttribute('disable_higher_video_bitrate');
  }
  public set disableHigherVideoBitrate(value: boolean | cdktf.IResolvable) {
    this._disableHigherVideoBitrate = value;
  }
  public resetDisableHigherVideoBitrate() {
    this._disableHigherVideoBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHigherVideoBitrateInput() {
    return this._disableHigherVideoBitrate;
  }

  // disable_higher_video_resolution - computed: false, optional: true, required: false
  private _disableHigherVideoResolution?: boolean | cdktf.IResolvable; 
  public get disableHigherVideoResolution() {
    return this.getBooleanAttribute('disable_higher_video_resolution');
  }
  public set disableHigherVideoResolution(value: boolean | cdktf.IResolvable) {
    this._disableHigherVideoResolution = value;
  }
  public resetDisableHigherVideoResolution() {
    this._disableHigherVideoResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHigherVideoResolutionInput() {
    return this._disableHigherVideoResolution;
  }

  // drm_type - computed: false, optional: true, required: false
  private _drmType?: string; 
  public get drmType() {
    return this.getStringAttribute('drm_type');
  }
  public set drmType(value: string) {
    this._drmType = value;
  }
  public resetDrmType() {
    this._drmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmTypeInput() {
    return this._drmType;
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

  // segment_type - computed: true, optional: true, required: false
  private _segmentType?: string; 
  public get segmentType() {
    return this.getStringAttribute('segment_type');
  }
  public set segmentType(value: string) {
    this._segmentType = value;
  }
  public resetSegmentType() {
    this._segmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTypeInput() {
    return this._segmentType;
  }

  // sub_app_id - computed: false, optional: true, required: false
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  public resetSubAppId() {
    this._subAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // stream_info - computed: false, optional: false, required: true
  private _streamInfo = new VodAdaptiveDynamicStreamingTemplateStreamInfoList(this, "stream_info", false);
  public get streamInfo() {
    return this._streamInfo;
  }
  public putStreamInfo(value: VodAdaptiveDynamicStreamingTemplateStreamInfo[] | cdktf.IResolvable) {
    this._streamInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInfoInput() {
    return this._streamInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable_higher_video_bitrate: cdktf.booleanToTerraform(this._disableHigherVideoBitrate),
      disable_higher_video_resolution: cdktf.booleanToTerraform(this._disableHigherVideoResolution),
      drm_type: cdktf.stringToTerraform(this._drmType),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      segment_type: cdktf.stringToTerraform(this._segmentType),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      stream_info: cdktf.listMapper(vodAdaptiveDynamicStreamingTemplateStreamInfoToTerraform, true)(this._streamInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_higher_video_bitrate: {
        value: cdktf.booleanToHclTerraform(this._disableHigherVideoBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_higher_video_resolution: {
        value: cdktf.booleanToHclTerraform(this._disableHigherVideoResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drm_type: {
        value: cdktf.stringToHclTerraform(this._drmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      segment_type: {
        value: cdktf.stringToHclTerraform(this._segmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_info: {
        value: cdktf.listMapperHcl(vodAdaptiveDynamicStreamingTemplateStreamInfoToHclTerraform, true)(this._streamInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodAdaptiveDynamicStreamingTemplateStreamInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
