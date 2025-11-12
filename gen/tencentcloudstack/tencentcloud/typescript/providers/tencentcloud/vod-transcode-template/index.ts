// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodTranscodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#comment VodTranscodeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * The container format. Valid values: `mp4`, `flv`, `hls`, `mp3`, `flac`, `ogg`, `m4a`, `wav` ( `mp3`, `flac`, `ogg`, `m4a`, and `wav` are audio file formats).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#container VodTranscodeTemplate#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#id VodTranscodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Transcoding template name. Length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#name VodTranscodeTemplate#name}
  */
  readonly name?: string;
  /**
  * Whether to remove audio data. Valid values:0: retain 1: remove Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#remove_audio VodTranscodeTemplate#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data. Valid values:
  * - 0: retain
  * - 1: remove
  * Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#remove_video VodTranscodeTemplate#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * The segment type. This parameter is valid only if `Container` is `hls`. Valid values: `ts`: TS segment; `fmp4`: fMP4 segment Default: `ts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#segment_type VodTranscodeTemplate#segment_type}
  */
  readonly segmentType?: string;
  /**
  * The VOD [application](https://intl.cloud.tencent.com/document/product/266/14574) ID. For customers who activate VOD service from December 25, 2023, if they want to access resources in a VOD application (whether it's the default application or a newly created one), they must fill in this field with the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#sub_app_id VodTranscodeTemplate#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#audio_template VodTranscodeTemplate#audio_template}
  */
  readonly audioTemplate?: VodTranscodeTemplateAudioTemplate;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#tehd_config VodTranscodeTemplate#tehd_config}
  */
  readonly tehdConfig?: VodTranscodeTemplateTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#video_template VodTranscodeTemplate#video_template}
  */
  readonly videoTemplate?: VodTranscodeTemplateVideoTemplate;
}
export interface VodTranscodeTemplateAudioTemplate {
  /**
  * Audio channel system. Valid values:1: mono-channel2: dual-channel6: stereoYou cannot set the sound channel as stereo for media files in container formats for audios (FLAC, OGG, MP3, M4A).Default value: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#audio_channel VodTranscodeTemplate#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#bitrate VodTranscodeTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * The audio codec.If `Container` is `mp3`, the valid value is:`libmp3lame`If `Container` is `ogg` or `flac`, the valid value is:`flac`If `Container` is `m4a`, the valid values are:`libfdk_aac``libmp3lame``ac3`If `Container` is `mp4` or `flv`, the valid values are:`libfdk_aac` (Recommended for MP4)`libmp3lame` (Recommended for FLV)`mp2`If `Container` is `hls`, the valid value is:`libfdk_aac`If `Format` is `HLS` or `MPEG-DASH`, the valid value is:`libfdk_aac`If `Container` is `wav`, the valid value is:`pcm16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#codec VodTranscodeTemplate#codec}
  */
  readonly codec: string;
  /**
  * The audio sample rate. Valid values:`16000` (valid only if `Codec` is `pcm16`)`32000``44100``48000`Unit: Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#sample_rate VodTranscodeTemplate#sample_rate}
  */
  readonly sampleRate: number;
}

export function vodTranscodeTemplateAudioTemplateToTerraform(struct?: VodTranscodeTemplateAudioTemplateOutputReference | VodTranscodeTemplateAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_channel: cdktf.numberToTerraform(struct!.audioChannel),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function vodTranscodeTemplateAudioTemplateToHclTerraform(struct?: VodTranscodeTemplateAudioTemplateOutputReference | VodTranscodeTemplateAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_channel: {
      value: cdktf.numberToHclTerraform(struct!.audioChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VodTranscodeTemplateAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodTranscodeTemplateAudioTemplate | undefined {
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

  public set internalValue(value: VodTranscodeTemplateAudioTemplate | undefined) {
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
  private _audioChannel?: number; 
  public get audioChannel() {
    return this.getNumberAttribute('audio_channel');
  }
  public set audioChannel(value: number) {
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
export interface VodTranscodeTemplateTehdConfig {
  /**
  * Maximum bitrate, which is valid when `Type` is `TESHD`.If this parameter is left blank or 0 is entered, there will be no upper limit for bitrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#max_video_bitrate VodTranscodeTemplate#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * TESHD transcoding type. Valid values: TEHD-100, OFF (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#type VodTranscodeTemplate#type}
  */
  readonly type: string;
}

export function vodTranscodeTemplateTehdConfigToTerraform(struct?: VodTranscodeTemplateTehdConfigOutputReference | VodTranscodeTemplateTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vodTranscodeTemplateTehdConfigToHclTerraform(struct?: VodTranscodeTemplateTehdConfigOutputReference | VodTranscodeTemplateTehdConfig): any {
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

export class VodTranscodeTemplateTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodTranscodeTemplateTehdConfig | undefined {
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

  public set internalValue(value: VodTranscodeTemplateTehdConfig | undefined) {
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

  // max_video_bitrate - computed: false, optional: true, required: false
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
export interface VodTranscodeTemplateVideoTemplate {
  /**
  * Bitrate of video stream in Kbps. Value range: 0 and [128, 35,000].If the value is 0, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#bitrate VodTranscodeTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * The video codec. Valid values:libx264: H.264; libx265: H.265; av1: AOMedia Video 1; H.266: H.266. The AOMedia Video 1 and H.266 codecs can only be used for MP4 files. Only CRF is supported for H.266 currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#codec VodTranscodeTemplate#codec}
  */
  readonly codec: string;
  /**
  * The codec tag. This parameter is valid only if the H.265 codec is used. Valid values:hvc1hev1Default value: hvc1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#codec_tag VodTranscodeTemplate#codec_tag}
  */
  readonly codecTag?: string;
  /**
  * Fill type, the way of processing a screenshot when the configured aspect ratio is different from that of the source video. Valid values:stretch: stretches the video image frame by frame to fill the screen. The video image may become squashed or stretched after transcoding.black: fills the uncovered area with black color, without changing the image&#39;s aspect ratio.white: fills the uncovered area with white color, without changing the image&#39;s aspect ratio.gauss: applies Gaussian blur to the uncovered area, without changing the image&#39;s aspect ratio.Default value: black.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#fill_type VodTranscodeTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate in Hz. Value range: [0,100].If the value is 0, the frame rate will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#fps VodTranscodeTemplate#fps}
  */
  readonly fps: number;
  /**
  * I-frame interval in frames. Valid values: 0 and 1-100000.When this parameter is set to 0 or left empty, `Gop` will be automatically set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#gop VodTranscodeTemplate#gop}
  */
  readonly gop?: number;
  /**
  * The maximum video height (or short side) in pixels. Value range: 0 and [128, 8192].If both `Width` and `Height` are 0, the output resolution will be the same as that of the source video.If `Width` is 0 and `Height` is not, the video width will be proportionally scaled.If `Width` is not 0 and `Height` is, the video height will be proportionally scaled.If neither `Width` nor `Height` is 0, the specified width and height will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#height VodTranscodeTemplate#height}
  */
  readonly height?: number;
  /**
  * Whether to output an HDR (high dynamic range) video if the source video is HDR. Valid values:ON: If the source video is HDR, output an HDR video; if not, output an SDR (standard dynamic range) video.OFF: Output an SDR video regardless of whether the source video is HDR.Default value: OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#preserve_hdr_switch VodTranscodeTemplate#preserve_hdr_switch}
  */
  readonly preserveHdrSwitch?: string;
  /**
  * Resolution adaption. Valid values:open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.Default value: open.Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#resolution_adaptive VodTranscodeTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The video constant rate factor (CRF). Value range: 1-51.If this parameter is specified, CRF encoding will be used and the bitrate parameter will be ignored.If `Codec` is `H.266`, this parameter is required (`28` is recommended).We don't recommend using this parameter unless you have special requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#vcrf VodTranscodeTemplate#vcrf}
  */
  readonly vcrf?: number;
  /**
  * The maximum video width (or long side) in pixels. Value range: 0 and [128, 8192].If both `Width` and `Height` are 0, the output resolution will be the same as that of the source video.If `Width` is 0 and `Height` is not, the video width will be proportionally scaled.If `Width` is not 0 and `Height` is, the video height will be proportionally scaled.If neither `Width` nor `Height` is 0, the specified width and height will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#width VodTranscodeTemplate#width}
  */
  readonly width?: number;
}

export function vodTranscodeTemplateVideoTemplateToTerraform(struct?: VodTranscodeTemplateVideoTemplateOutputReference | VodTranscodeTemplateVideoTemplate): any {
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
    resolution_adaptive: cdktf.stringToTerraform(struct!.resolutionAdaptive),
    vcrf: cdktf.numberToTerraform(struct!.vcrf),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function vodTranscodeTemplateVideoTemplateToHclTerraform(struct?: VodTranscodeTemplateVideoTemplateOutputReference | VodTranscodeTemplateVideoTemplate): any {
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
      value: cdktf.stringToHclTerraform(struct!.resolutionAdaptive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VodTranscodeTemplateVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodTranscodeTemplateVideoTemplate | undefined {
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

  public set internalValue(value: VodTranscodeTemplateVideoTemplate | undefined) {
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

  // codec_tag - computed: false, optional: true, required: false
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

  // gop - computed: false, optional: true, required: false
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

  // preserve_hdr_switch - computed: false, optional: true, required: false
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
  private _resolutionAdaptive?: string; 
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: string) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
  }

  // vcrf - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template tencentcloud_vod_transcode_template}
*/
export class VodTranscodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_transcode_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodTranscodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodTranscodeTemplate to import
  * @param importFromId The id of the existing VodTranscodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodTranscodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_transcode_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vod_transcode_template tencentcloud_vod_transcode_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodTranscodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VodTranscodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_transcode_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._container = config.container;
    this._id = config.id;
    this._name = config.name;
    this._removeAudio = config.removeAudio;
    this._removeVideo = config.removeVideo;
    this._segmentType = config.segmentType;
    this._subAppId = config.subAppId;
    this._audioTemplate.internalValue = config.audioTemplate;
    this._tehdConfig.internalValue = config.tehdConfig;
    this._videoTemplate.internalValue = config.videoTemplate;
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

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // name - computed: false, optional: true, required: false
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

  // remove_audio - computed: false, optional: true, required: false
  private _removeAudio?: number; 
  public get removeAudio() {
    return this.getNumberAttribute('remove_audio');
  }
  public set removeAudio(value: number) {
    this._removeAudio = value;
  }
  public resetRemoveAudio() {
    this._removeAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAudioInput() {
    return this._removeAudio;
  }

  // remove_video - computed: false, optional: true, required: false
  private _removeVideo?: number; 
  public get removeVideo() {
    return this.getNumberAttribute('remove_video');
  }
  public set removeVideo(value: number) {
    this._removeVideo = value;
  }
  public resetRemoveVideo() {
    this._removeVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVideoInput() {
    return this._removeVideo;
  }

  // segment_type - computed: false, optional: true, required: false
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

  // audio_template - computed: false, optional: true, required: false
  private _audioTemplate = new VodTranscodeTemplateAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: VodTranscodeTemplateAudioTemplate) {
    this._audioTemplate.internalValue = value;
  }
  public resetAudioTemplate() {
    this._audioTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTemplateInput() {
    return this._audioTemplate.internalValue;
  }

  // tehd_config - computed: false, optional: true, required: false
  private _tehdConfig = new VodTranscodeTemplateTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: VodTranscodeTemplateTehdConfig) {
    this._tehdConfig.internalValue = value;
  }
  public resetTehdConfig() {
    this._tehdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tehdConfigInput() {
    return this._tehdConfig.internalValue;
  }

  // video_template - computed: false, optional: true, required: false
  private _videoTemplate = new VodTranscodeTemplateVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: VodTranscodeTemplateVideoTemplate) {
    this._videoTemplate.internalValue = value;
  }
  public resetVideoTemplate() {
    this._videoTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoTemplateInput() {
    return this._videoTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      container: cdktf.stringToTerraform(this._container),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remove_audio: cdktf.numberToTerraform(this._removeAudio),
      remove_video: cdktf.numberToTerraform(this._removeVideo),
      segment_type: cdktf.stringToTerraform(this._segmentType),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      audio_template: vodTranscodeTemplateAudioTemplateToTerraform(this._audioTemplate.internalValue),
      tehd_config: vodTranscodeTemplateTehdConfigToTerraform(this._tehdConfig.internalValue),
      video_template: vodTranscodeTemplateVideoTemplateToTerraform(this._videoTemplate.internalValue),
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
      container: {
        value: cdktf.stringToHclTerraform(this._container),
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
      remove_audio: {
        value: cdktf.numberToHclTerraform(this._removeAudio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_video: {
        value: cdktf.numberToHclTerraform(this._removeVideo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      audio_template: {
        value: vodTranscodeTemplateAudioTemplateToHclTerraform(this._audioTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodTranscodeTemplateAudioTemplateList",
      },
      tehd_config: {
        value: vodTranscodeTemplateTehdConfigToHclTerraform(this._tehdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodTranscodeTemplateTehdConfigList",
      },
      video_template: {
        value: vodTranscodeTemplateVideoTemplateToHclTerraform(this._videoTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodTranscodeTemplateVideoTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
