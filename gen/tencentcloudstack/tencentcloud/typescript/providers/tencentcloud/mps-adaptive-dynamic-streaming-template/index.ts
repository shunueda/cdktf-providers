// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsAdaptiveDynamicStreamingTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#comment MpsAdaptiveDynamicStreamingTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Whether to prohibit video from low bit rate to high bit rate, value range:0: no.1: yes.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#disable_higher_video_bitrate MpsAdaptiveDynamicStreamingTemplate#disable_higher_video_bitrate}
  */
  readonly disableHigherVideoBitrate?: number;
  /**
  * Whether to prohibit the conversion of video resolution to high resolution, value range:0: no.1: yes.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#disable_higher_video_resolution MpsAdaptiveDynamicStreamingTemplate#disable_higher_video_resolution}
  */
  readonly disableHigherVideoResolution?: number;
  /**
  * Adaptive transcoding format, value range:HLS, MPEG-DASH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#format MpsAdaptiveDynamicStreamingTemplate#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#id MpsAdaptiveDynamicStreamingTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#name MpsAdaptiveDynamicStreamingTemplate#name}
  */
  readonly name?: string;
  /**
  * stream_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#stream_infos MpsAdaptiveDynamicStreamingTemplate#stream_infos}
  */
  readonly streamInfos: MpsAdaptiveDynamicStreamingTemplateStreamInfos[] | cdktf.IResolvable;
}
export interface MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio {
  /**
  * Audio channel mode, optional values:`1: single channel.2: Dual channel.6: Stereo.When the package format of the media is an audio format (flac, ogg, mp3, m4a), the number of channels is not allowed to be set to stereo.Default: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#audio_channel MpsAdaptiveDynamicStreamingTemplate#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Bit rate of the audio stream, value range: 0 and [26, 256], unit: kbps.When the value is 0, it means that the audio bit rate is consistent with the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#bitrate MpsAdaptiveDynamicStreamingTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Encoding format of audio stream.When the outer parameter Container is mp3, the optional value is:libmp3lame.When the outer parameter Container is ogg or flac, the optional value is:flac.When the outer parameter Container is m4a, the optional value is:libfdk_aac.libmp3lame.ac3.When the outer parameter Container is mp4 or flv, the optional value is:libfdk_aac: more suitable for mp4.libmp3lame: more suitable for flv.When the outer parameter Container is hls, the optional value is:libfdk_aac.libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#codec MpsAdaptiveDynamicStreamingTemplate#codec}
  */
  readonly codec: string;
  /**
  * Sampling rate of audio stream, optional value.32000.44100.48000.Unit: Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#sample_rate MpsAdaptiveDynamicStreamingTemplate#sample_rate}
  */
  readonly sampleRate: number;
}

export function mpsAdaptiveDynamicStreamingTemplateStreamInfosAudioToTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfosAudioOutputReference | MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio): any {
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


export function mpsAdaptiveDynamicStreamingTemplateStreamInfosAudioToHclTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfosAudioOutputReference | MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio): any {
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

export class MpsAdaptiveDynamicStreamingTemplateStreamInfosAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio | undefined {
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

  public set internalValue(value: MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio | undefined) {
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
export interface MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo {
  /**
  * Bit rate of the video stream, value range: 0 and [128, 35000], unit: kbps.When the value is 0, it means that the video bit rate is consistent with the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#bitrate MpsAdaptiveDynamicStreamingTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Encoding format of the video stream, optional value:libx264: H.264 encoding.libx265: H.265 encoding.av1: AOMedia Video 1 encoding.Note: Currently H.265 encoding must specify a resolution, and it needs to be within 640*480.Note: av1 encoded containers currently only support mp4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#codec MpsAdaptiveDynamicStreamingTemplate#codec}
  */
  readonly codec: string;
  /**
  * Filling type, when the aspect ratio of the video stream configuration is inconsistent with the aspect ratio of the original video, the processing method for transcoding is filling. Optional filling type:stretch: Stretching, stretching each frame to fill the entire screen, which may cause the transcoded video to be squashed or stretched.black: Leave black, keep the video aspect ratio unchanged, and fill the rest of the edge with black.white: Leave blank, keep the aspect ratio of the video, and fill the rest of the edge with white.gauss: Gaussian blur, keep the aspect ratio of the video unchanged, and use Gaussian blur for the rest of the edge.Default value: black.Note: Adaptive stream only supports stretch, black.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#fill_type MpsAdaptiveDynamicStreamingTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate, value range: [0, 100], unit: Hz.When the value is 0, it means that the frame rate is consistent with the original video.Note: The value range for adaptive code rate is [0, 60].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#fps MpsAdaptiveDynamicStreamingTemplate#fps}
  */
  readonly fps: number;
  /**
  * The interval between keyframe I frames, value range: 0 and [1, 100000], unit: number of frames.When filling 0 or not filling, the system will automatically set the gop length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#gop MpsAdaptiveDynamicStreamingTemplate#gop}
  */
  readonly gop?: number;
  /**
  * The maximum value of the height (or short side) of the video streaming, value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#height MpsAdaptiveDynamicStreamingTemplate#height}
  */
  readonly height?: number;
  /**
  * Adaptive resolution, optional value:open: At this time, Width represents the long side of the video, Height represents the short side of the video.close: At this point, Width represents the width of the video, and Height represents the height of the video.Default value: open.Note: In adaptive mode, Width cannot be smaller than Height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#resolution_adaptive MpsAdaptiveDynamicStreamingTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * Video constant bit rate control factor, the value range is [1, 51].If this parameter is specified, the code rate control method of CRF will be used for transcoding (the video code rate will no longer take effect).If there is no special requirement, it is not recommended to specify this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#vcrf MpsAdaptiveDynamicStreamingTemplate#vcrf}
  */
  readonly vcrf?: number;
  /**
  * The maximum value of the width (or long side) of the video streaming, value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#width MpsAdaptiveDynamicStreamingTemplate#width}
  */
  readonly width?: number;
}

export function mpsAdaptiveDynamicStreamingTemplateStreamInfosVideoToTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfosVideoOutputReference | MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    fill_type: cdktf.stringToTerraform(struct!.fillType),
    fps: cdktf.numberToTerraform(struct!.fps),
    gop: cdktf.numberToTerraform(struct!.gop),
    height: cdktf.numberToTerraform(struct!.height),
    resolution_adaptive: cdktf.stringToTerraform(struct!.resolutionAdaptive),
    vcrf: cdktf.numberToTerraform(struct!.vcrf),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function mpsAdaptiveDynamicStreamingTemplateStreamInfosVideoToHclTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfosVideoOutputReference | MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo): any {
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

export class MpsAdaptiveDynamicStreamingTemplateStreamInfosVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo | undefined {
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

  public set internalValue(value: MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._fillType = undefined;
      this._fps = undefined;
      this._gop = undefined;
      this._height = undefined;
      this._resolutionAdaptive = undefined;
      this._vcrf = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._fillType = value.fillType;
      this._fps = value.fps;
      this._gop = value.gop;
      this._height = value.height;
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
export interface MpsAdaptiveDynamicStreamingTemplateStreamInfos {
  /**
  * Whether to remove audio stream, value:0: reserved.1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#remove_audio MpsAdaptiveDynamicStreamingTemplate#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video stream, value:0: reserved.1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#remove_video MpsAdaptiveDynamicStreamingTemplate#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#audio MpsAdaptiveDynamicStreamingTemplate#audio}
  */
  readonly audio: MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#video MpsAdaptiveDynamicStreamingTemplate#video}
  */
  readonly video: MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo;
}

export function mpsAdaptiveDynamicStreamingTemplateStreamInfosToTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_audio: cdktf.numberToTerraform(struct!.removeAudio),
    remove_video: cdktf.numberToTerraform(struct!.removeVideo),
    audio: mpsAdaptiveDynamicStreamingTemplateStreamInfosAudioToTerraform(struct!.audio),
    video: mpsAdaptiveDynamicStreamingTemplateStreamInfosVideoToTerraform(struct!.video),
  }
}


export function mpsAdaptiveDynamicStreamingTemplateStreamInfosToHclTerraform(struct?: MpsAdaptiveDynamicStreamingTemplateStreamInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_audio: {
      value: cdktf.numberToHclTerraform(struct!.removeAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_video: {
      value: cdktf.numberToHclTerraform(struct!.removeVideo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audio: {
      value: mpsAdaptiveDynamicStreamingTemplateStreamInfosAudioToHclTerraform(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "MpsAdaptiveDynamicStreamingTemplateStreamInfosAudioList",
    },
    video: {
      value: mpsAdaptiveDynamicStreamingTemplateStreamInfosVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "MpsAdaptiveDynamicStreamingTemplateStreamInfosVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAdaptiveDynamicStreamingTemplateStreamInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsAdaptiveDynamicStreamingTemplateStreamInfos | cdktf.IResolvable | undefined {
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
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAdaptiveDynamicStreamingTemplateStreamInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._removeAudio = undefined;
      this._removeVideo = undefined;
      this._audio.internalValue = undefined;
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
      this._video.internalValue = value.video;
    }
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

  // audio - computed: false, optional: false, required: true
  private _audio = new MpsAdaptiveDynamicStreamingTemplateStreamInfosAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: MpsAdaptiveDynamicStreamingTemplateStreamInfosAudio) {
    this._audio.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // video - computed: false, optional: false, required: true
  private _video = new MpsAdaptiveDynamicStreamingTemplateStreamInfosVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: MpsAdaptiveDynamicStreamingTemplateStreamInfosVideo) {
    this._video.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class MpsAdaptiveDynamicStreamingTemplateStreamInfosList extends cdktf.ComplexList {
  public internalValue? : MpsAdaptiveDynamicStreamingTemplateStreamInfos[] | cdktf.IResolvable

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
  public get(index: number): MpsAdaptiveDynamicStreamingTemplateStreamInfosOutputReference {
    return new MpsAdaptiveDynamicStreamingTemplateStreamInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template tencentcloud_mps_adaptive_dynamic_streaming_template}
*/
export class MpsAdaptiveDynamicStreamingTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_adaptive_dynamic_streaming_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsAdaptiveDynamicStreamingTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsAdaptiveDynamicStreamingTemplate to import
  * @param importFromId The id of the existing MpsAdaptiveDynamicStreamingTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsAdaptiveDynamicStreamingTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_adaptive_dynamic_streaming_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/mps_adaptive_dynamic_streaming_template tencentcloud_mps_adaptive_dynamic_streaming_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsAdaptiveDynamicStreamingTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MpsAdaptiveDynamicStreamingTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_adaptive_dynamic_streaming_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._streamInfos.internalValue = config.streamInfos;
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

  // disable_higher_video_bitrate - computed: false, optional: true, required: false
  private _disableHigherVideoBitrate?: number; 
  public get disableHigherVideoBitrate() {
    return this.getNumberAttribute('disable_higher_video_bitrate');
  }
  public set disableHigherVideoBitrate(value: number) {
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
  private _disableHigherVideoResolution?: number; 
  public get disableHigherVideoResolution() {
    return this.getNumberAttribute('disable_higher_video_resolution');
  }
  public set disableHigherVideoResolution(value: number) {
    this._disableHigherVideoResolution = value;
  }
  public resetDisableHigherVideoResolution() {
    this._disableHigherVideoResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHigherVideoResolutionInput() {
    return this._disableHigherVideoResolution;
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

  // stream_infos - computed: false, optional: false, required: true
  private _streamInfos = new MpsAdaptiveDynamicStreamingTemplateStreamInfosList(this, "stream_infos", false);
  public get streamInfos() {
    return this._streamInfos;
  }
  public putStreamInfos(value: MpsAdaptiveDynamicStreamingTemplateStreamInfos[] | cdktf.IResolvable) {
    this._streamInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInfosInput() {
    return this._streamInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable_higher_video_bitrate: cdktf.numberToTerraform(this._disableHigherVideoBitrate),
      disable_higher_video_resolution: cdktf.numberToTerraform(this._disableHigherVideoResolution),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stream_infos: cdktf.listMapper(mpsAdaptiveDynamicStreamingTemplateStreamInfosToTerraform, true)(this._streamInfos.internalValue),
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
        value: cdktf.numberToHclTerraform(this._disableHigherVideoBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_higher_video_resolution: {
        value: cdktf.numberToHclTerraform(this._disableHigherVideoResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      stream_infos: {
        value: cdktf.listMapperHcl(mpsAdaptiveDynamicStreamingTemplateStreamInfosToHclTerraform, true)(this._streamInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAdaptiveDynamicStreamingTemplateStreamInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
