// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaTranscodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#bucket CiMediaTranscodeTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#id CiMediaTranscodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#name CiMediaTranscodeTemplate#name}
  */
  readonly name: string;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#audio CiMediaTranscodeTemplate#audio}
  */
  readonly audio?: CiMediaTranscodeTemplateAudio;
  /**
  * audio_mix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#audio_mix CiMediaTranscodeTemplate#audio_mix}
  */
  readonly audioMix?: CiMediaTranscodeTemplateAudioMix[] | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#container CiMediaTranscodeTemplate#container}
  */
  readonly container: CiMediaTranscodeTemplateContainer;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#time_interval CiMediaTranscodeTemplate#time_interval}
  */
  readonly timeInterval?: CiMediaTranscodeTemplateTimeInterval;
  /**
  * trans_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#trans_config CiMediaTranscodeTemplate#trans_config}
  */
  readonly transConfig?: CiMediaTranscodeTemplateTransConfig;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#video CiMediaTranscodeTemplate#video}
  */
  readonly video?: CiMediaTranscodeTemplateVideo;
}
export interface CiMediaTranscodeTemplateAudio {
  /**
  * Original audio bit rate, unit: Kbps, Value range: [8, 1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#bitrate CiMediaTranscodeTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * number of channels- When Codec is set to aac/flac, support 1, 2, 4, 5, 6, 8- When Codec is set to mp3/opus, support 1, 2- When Codec is set to Vorbis, only 2 is supported- When Codec is set to amr, only 1 is supported- When Codec is set to pcm_s16le, only 1 and 2 are supported- When the encapsulation format is dash, 8 is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#channels CiMediaTranscodeTemplate#channels}
  */
  readonly channels?: string;
  /**
  * Codec format, value aac, mp3, flac, amr, Vorbis, opus, pcm_s16le.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#codec CiMediaTranscodeTemplate#codec}
  */
  readonly codec?: string;
  /**
  * Keep dual audio tracks, the value is true, false. This parameter is invalid when Video.Codec is H.265.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#keep_two_tracks CiMediaTranscodeTemplate#keep_two_tracks}
  */
  readonly keepTwoTracks?: string;
  /**
  * Whether to delete the source audio stream, the value is true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#remove CiMediaTranscodeTemplate#remove}
  */
  readonly remove?: string;
  /**
  * Sampling bit width- When Codec is set to aac, support fltp- When Codec is set to mp3, fltp, s16p, s32p are supported- When Codec is set to flac, s16, s32, s16p, s32p are supported- When Codec is set to amr, support s16, s16p- When Codec is set to opus, support s16- When Codec is set to pcm_s16le, support s16- When Codec is set to Vorbis, support fltp- This parameter is invalid when Video.Codec is H.265.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#sample_format CiMediaTranscodeTemplate#sample_format}
  */
  readonly sampleFormat?: string;
  /**
  * Sampling Rate- Unit: Hz- Optional 8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 88200, 96000- Different packages, mp3 supports different sampling rates, as shown in the table below- When Codec is set to amr, only 8000 is supported- When Codec is set to opus, it supports 8000, 16000, 24000, 48000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#samplerate CiMediaTranscodeTemplate#samplerate}
  */
  readonly samplerate?: string;
  /**
  * Convert track, the value is true, false. This parameter is invalid when Video.Codec is H.265.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#switch_track CiMediaTranscodeTemplate#switch_track}
  */
  readonly switchTrack?: string;
}

export function ciMediaTranscodeTemplateAudioToTerraform(struct?: CiMediaTranscodeTemplateAudioOutputReference | CiMediaTranscodeTemplateAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    channels: cdktf.stringToTerraform(struct!.channels),
    codec: cdktf.stringToTerraform(struct!.codec),
    keep_two_tracks: cdktf.stringToTerraform(struct!.keepTwoTracks),
    remove: cdktf.stringToTerraform(struct!.remove),
    sample_format: cdktf.stringToTerraform(struct!.sampleFormat),
    samplerate: cdktf.stringToTerraform(struct!.samplerate),
    switch_track: cdktf.stringToTerraform(struct!.switchTrack),
  }
}


export function ciMediaTranscodeTemplateAudioToHclTerraform(struct?: CiMediaTranscodeTemplateAudioOutputReference | CiMediaTranscodeTemplateAudio): any {
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
    channels: {
      value: cdktf.stringToHclTerraform(struct!.channels),
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
    keep_two_tracks: {
      value: cdktf.stringToHclTerraform(struct!.keepTwoTracks),
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
    sample_format: {
      value: cdktf.stringToHclTerraform(struct!.sampleFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samplerate: {
      value: cdktf.stringToHclTerraform(struct!.samplerate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_track: {
      value: cdktf.stringToHclTerraform(struct!.switchTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._keepTwoTracks !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTwoTracks = this._keepTwoTracks;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._sampleFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleFormat = this._sampleFormat;
    }
    if (this._samplerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerate = this._samplerate;
    }
    if (this._switchTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchTrack = this._switchTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._channels = undefined;
      this._codec = undefined;
      this._keepTwoTracks = undefined;
      this._remove = undefined;
      this._sampleFormat = undefined;
      this._samplerate = undefined;
      this._switchTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._channels = value.channels;
      this._codec = value.codec;
      this._keepTwoTracks = value.keepTwoTracks;
      this._remove = value.remove;
      this._sampleFormat = value.sampleFormat;
      this._samplerate = value.samplerate;
      this._switchTrack = value.switchTrack;
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

  // channels - computed: false, optional: true, required: false
  private _channels?: string; 
  public get channels() {
    return this.getStringAttribute('channels');
  }
  public set channels(value: string) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
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

  // keep_two_tracks - computed: false, optional: true, required: false
  private _keepTwoTracks?: string; 
  public get keepTwoTracks() {
    return this.getStringAttribute('keep_two_tracks');
  }
  public set keepTwoTracks(value: string) {
    this._keepTwoTracks = value;
  }
  public resetKeepTwoTracks() {
    this._keepTwoTracks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTwoTracksInput() {
    return this._keepTwoTracks;
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

  // sample_format - computed: false, optional: true, required: false
  private _sampleFormat?: string; 
  public get sampleFormat() {
    return this.getStringAttribute('sample_format');
  }
  public set sampleFormat(value: string) {
    this._sampleFormat = value;
  }
  public resetSampleFormat() {
    this._sampleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleFormatInput() {
    return this._sampleFormat;
  }

  // samplerate - computed: false, optional: true, required: false
  private _samplerate?: string; 
  public get samplerate() {
    return this.getStringAttribute('samplerate');
  }
  public set samplerate(value: string) {
    this._samplerate = value;
  }
  public resetSamplerate() {
    this._samplerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerateInput() {
    return this._samplerate;
  }

  // switch_track - computed: false, optional: true, required: false
  private _switchTrack?: string; 
  public get switchTrack() {
    return this.getStringAttribute('switch_track');
  }
  public set switchTrack(value: string) {
    this._switchTrack = value;
  }
  public resetSwitchTrack() {
    this._switchTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTrackInput() {
    return this._switchTrack;
  }
}
export interface CiMediaTranscodeTemplateAudioMixEffectConfig {
  /**
  * bgm transition fade-in duration, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#bgm_fade_time CiMediaTranscodeTemplate#bgm_fade_time}
  */
  readonly bgmFadeTime?: string;
  /**
  * Enable bgm conversion fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#enable_bgm_fade CiMediaTranscodeTemplate#enable_bgm_fade}
  */
  readonly enableBgmFade?: string;
  /**
  * enable fade out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#enable_end_fadeout CiMediaTranscodeTemplate#enable_end_fadeout}
  */
  readonly enableEndFadeout?: string;
  /**
  * enable fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#enable_start_fadein CiMediaTranscodeTemplate#enable_start_fadein}
  */
  readonly enableStartFadein?: string;
  /**
  * fade out time, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#end_fadeout_time CiMediaTranscodeTemplate#end_fadeout_time}
  */
  readonly endFadeoutTime?: string;
  /**
  * Fade in duration, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#start_fadein_time CiMediaTranscodeTemplate#start_fadein_time}
  */
  readonly startFadeinTime?: string;
}

export function ciMediaTranscodeTemplateAudioMixEffectConfigToTerraform(struct?: CiMediaTranscodeTemplateAudioMixEffectConfigOutputReference | CiMediaTranscodeTemplateAudioMixEffectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgm_fade_time: cdktf.stringToTerraform(struct!.bgmFadeTime),
    enable_bgm_fade: cdktf.stringToTerraform(struct!.enableBgmFade),
    enable_end_fadeout: cdktf.stringToTerraform(struct!.enableEndFadeout),
    enable_start_fadein: cdktf.stringToTerraform(struct!.enableStartFadein),
    end_fadeout_time: cdktf.stringToTerraform(struct!.endFadeoutTime),
    start_fadein_time: cdktf.stringToTerraform(struct!.startFadeinTime),
  }
}


export function ciMediaTranscodeTemplateAudioMixEffectConfigToHclTerraform(struct?: CiMediaTranscodeTemplateAudioMixEffectConfigOutputReference | CiMediaTranscodeTemplateAudioMixEffectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgm_fade_time: {
      value: cdktf.stringToHclTerraform(struct!.bgmFadeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_bgm_fade: {
      value: cdktf.stringToHclTerraform(struct!.enableBgmFade),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_end_fadeout: {
      value: cdktf.stringToHclTerraform(struct!.enableEndFadeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_start_fadein: {
      value: cdktf.stringToHclTerraform(struct!.enableStartFadein),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_fadeout_time: {
      value: cdktf.stringToHclTerraform(struct!.endFadeoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_fadein_time: {
      value: cdktf.stringToHclTerraform(struct!.startFadeinTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateAudioMixEffectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateAudioMixEffectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgmFadeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgmFadeTime = this._bgmFadeTime;
    }
    if (this._enableBgmFade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBgmFade = this._enableBgmFade;
    }
    if (this._enableEndFadeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEndFadeout = this._enableEndFadeout;
    }
    if (this._enableStartFadein !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStartFadein = this._enableStartFadein;
    }
    if (this._endFadeoutTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endFadeoutTime = this._endFadeoutTime;
    }
    if (this._startFadeinTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startFadeinTime = this._startFadeinTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateAudioMixEffectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgmFadeTime = undefined;
      this._enableBgmFade = undefined;
      this._enableEndFadeout = undefined;
      this._enableStartFadein = undefined;
      this._endFadeoutTime = undefined;
      this._startFadeinTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgmFadeTime = value.bgmFadeTime;
      this._enableBgmFade = value.enableBgmFade;
      this._enableEndFadeout = value.enableEndFadeout;
      this._enableStartFadein = value.enableStartFadein;
      this._endFadeoutTime = value.endFadeoutTime;
      this._startFadeinTime = value.startFadeinTime;
    }
  }

  // bgm_fade_time - computed: false, optional: true, required: false
  private _bgmFadeTime?: string; 
  public get bgmFadeTime() {
    return this.getStringAttribute('bgm_fade_time');
  }
  public set bgmFadeTime(value: string) {
    this._bgmFadeTime = value;
  }
  public resetBgmFadeTime() {
    this._bgmFadeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgmFadeTimeInput() {
    return this._bgmFadeTime;
  }

  // enable_bgm_fade - computed: false, optional: true, required: false
  private _enableBgmFade?: string; 
  public get enableBgmFade() {
    return this.getStringAttribute('enable_bgm_fade');
  }
  public set enableBgmFade(value: string) {
    this._enableBgmFade = value;
  }
  public resetEnableBgmFade() {
    this._enableBgmFade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgmFadeInput() {
    return this._enableBgmFade;
  }

  // enable_end_fadeout - computed: false, optional: true, required: false
  private _enableEndFadeout?: string; 
  public get enableEndFadeout() {
    return this.getStringAttribute('enable_end_fadeout');
  }
  public set enableEndFadeout(value: string) {
    this._enableEndFadeout = value;
  }
  public resetEnableEndFadeout() {
    this._enableEndFadeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndFadeoutInput() {
    return this._enableEndFadeout;
  }

  // enable_start_fadein - computed: false, optional: true, required: false
  private _enableStartFadein?: string; 
  public get enableStartFadein() {
    return this.getStringAttribute('enable_start_fadein');
  }
  public set enableStartFadein(value: string) {
    this._enableStartFadein = value;
  }
  public resetEnableStartFadein() {
    this._enableStartFadein = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStartFadeinInput() {
    return this._enableStartFadein;
  }

  // end_fadeout_time - computed: false, optional: true, required: false
  private _endFadeoutTime?: string; 
  public get endFadeoutTime() {
    return this.getStringAttribute('end_fadeout_time');
  }
  public set endFadeoutTime(value: string) {
    this._endFadeoutTime = value;
  }
  public resetEndFadeoutTime() {
    this._endFadeoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endFadeoutTimeInput() {
    return this._endFadeoutTime;
  }

  // start_fadein_time - computed: false, optional: true, required: false
  private _startFadeinTime?: string; 
  public get startFadeinTime() {
    return this.getStringAttribute('start_fadein_time');
  }
  public set startFadeinTime(value: string) {
    this._startFadeinTime = value;
  }
  public resetStartFadeinTime() {
    this._startFadeinTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startFadeinTimeInput() {
    return this._startFadeinTime;
  }
}
export interface CiMediaTranscodeTemplateAudioMix {
  /**
  * The media address of the audio track that needs to be mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#audio_source CiMediaTranscodeTemplate#audio_source}
  */
  readonly audioSource: string;
  /**
  * Mixing mode Repeat: background sound loop, Once: The background sound is played once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#mix_mode CiMediaTranscodeTemplate#mix_mode}
  */
  readonly mixMode?: string;
  /**
  * Whether to replace the original audio of the Input media file with the mixed audio track media.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#replace CiMediaTranscodeTemplate#replace}
  */
  readonly replace?: string;
  /**
  * effect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#effect_config CiMediaTranscodeTemplate#effect_config}
  */
  readonly effectConfig?: CiMediaTranscodeTemplateAudioMixEffectConfig;
}

export function ciMediaTranscodeTemplateAudioMixToTerraform(struct?: CiMediaTranscodeTemplateAudioMix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_source: cdktf.stringToTerraform(struct!.audioSource),
    mix_mode: cdktf.stringToTerraform(struct!.mixMode),
    replace: cdktf.stringToTerraform(struct!.replace),
    effect_config: ciMediaTranscodeTemplateAudioMixEffectConfigToTerraform(struct!.effectConfig),
  }
}


export function ciMediaTranscodeTemplateAudioMixToHclTerraform(struct?: CiMediaTranscodeTemplateAudioMix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_source: {
      value: cdktf.stringToHclTerraform(struct!.audioSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mix_mode: {
      value: cdktf.stringToHclTerraform(struct!.mixMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect_config: {
      value: ciMediaTranscodeTemplateAudioMixEffectConfigToHclTerraform(struct!.effectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaTranscodeTemplateAudioMixEffectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateAudioMixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiMediaTranscodeTemplateAudioMix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSource = this._audioSource;
    }
    if (this._mixMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixMode = this._mixMode;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._effectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectConfig = this._effectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateAudioMix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioSource = undefined;
      this._mixMode = undefined;
      this._replace = undefined;
      this._effectConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioSource = value.audioSource;
      this._mixMode = value.mixMode;
      this._replace = value.replace;
      this._effectConfig.internalValue = value.effectConfig;
    }
  }

  // audio_source - computed: false, optional: false, required: true
  private _audioSource?: string; 
  public get audioSource() {
    return this.getStringAttribute('audio_source');
  }
  public set audioSource(value: string) {
    this._audioSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSourceInput() {
    return this._audioSource;
  }

  // mix_mode - computed: false, optional: true, required: false
  private _mixMode?: string; 
  public get mixMode() {
    return this.getStringAttribute('mix_mode');
  }
  public set mixMode(value: string) {
    this._mixMode = value;
  }
  public resetMixMode() {
    this._mixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixModeInput() {
    return this._mixMode;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // effect_config - computed: false, optional: true, required: false
  private _effectConfig = new CiMediaTranscodeTemplateAudioMixEffectConfigOutputReference(this, "effect_config");
  public get effectConfig() {
    return this._effectConfig;
  }
  public putEffectConfig(value: CiMediaTranscodeTemplateAudioMixEffectConfig) {
    this._effectConfig.internalValue = value;
  }
  public resetEffectConfig() {
    this._effectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectConfigInput() {
    return this._effectConfig.internalValue;
  }
}

export class CiMediaTranscodeTemplateAudioMixList extends cdktf.ComplexList {
  public internalValue? : CiMediaTranscodeTemplateAudioMix[] | cdktf.IResolvable

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
  public get(index: number): CiMediaTranscodeTemplateAudioMixOutputReference {
    return new CiMediaTranscodeTemplateAudioMixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiMediaTranscodeTemplateContainerClipConfig {
  /**
  * Fragmentation duration, default 5s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#duration CiMediaTranscodeTemplate#duration}
  */
  readonly duration?: string;
}

export function ciMediaTranscodeTemplateContainerClipConfigToTerraform(struct?: CiMediaTranscodeTemplateContainerClipConfigOutputReference | CiMediaTranscodeTemplateContainerClipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function ciMediaTranscodeTemplateContainerClipConfigToHclTerraform(struct?: CiMediaTranscodeTemplateContainerClipConfigOutputReference | CiMediaTranscodeTemplateContainerClipConfig): any {
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

export class CiMediaTranscodeTemplateContainerClipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateContainerClipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateContainerClipConfig | undefined) {
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
export interface CiMediaTranscodeTemplateContainer {
  /**
  * Package format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#format CiMediaTranscodeTemplate#format}
  */
  readonly format: string;
  /**
  * clip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#clip_config CiMediaTranscodeTemplate#clip_config}
  */
  readonly clipConfig?: CiMediaTranscodeTemplateContainerClipConfig;
}

export function ciMediaTranscodeTemplateContainerToTerraform(struct?: CiMediaTranscodeTemplateContainerOutputReference | CiMediaTranscodeTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    clip_config: ciMediaTranscodeTemplateContainerClipConfigToTerraform(struct!.clipConfig),
  }
}


export function ciMediaTranscodeTemplateContainerToHclTerraform(struct?: CiMediaTranscodeTemplateContainerOutputReference | CiMediaTranscodeTemplateContainer): any {
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
      value: ciMediaTranscodeTemplateContainerClipConfigToHclTerraform(struct!.clipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaTranscodeTemplateContainerClipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateContainer | undefined {
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

  public set internalValue(value: CiMediaTranscodeTemplateContainer | undefined) {
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
  private _clipConfig = new CiMediaTranscodeTemplateContainerClipConfigOutputReference(this, "clip_config");
  public get clipConfig() {
    return this._clipConfig;
  }
  public putClipConfig(value: CiMediaTranscodeTemplateContainerClipConfig) {
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
export interface CiMediaTranscodeTemplateTimeInterval {
  /**
  * duration, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#duration CiMediaTranscodeTemplate#duration}
  */
  readonly duration?: string;
  /**
  * Starting time, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#start CiMediaTranscodeTemplate#start}
  */
  readonly start?: string;
}

export function ciMediaTranscodeTemplateTimeIntervalToTerraform(struct?: CiMediaTranscodeTemplateTimeIntervalOutputReference | CiMediaTranscodeTemplateTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function ciMediaTranscodeTemplateTimeIntervalToHclTerraform(struct?: CiMediaTranscodeTemplateTimeIntervalOutputReference | CiMediaTranscodeTemplateTimeInterval): any {
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

export class CiMediaTranscodeTemplateTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateTimeInterval | undefined {
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

  public set internalValue(value: CiMediaTranscodeTemplateTimeInterval | undefined) {
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
export interface CiMediaTranscodeTemplateTransConfigHlsEncrypt {
  /**
  * Whether to enable HLS encryption, support encryption when Container.Format is hls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#is_hls_encrypt CiMediaTranscodeTemplate#is_hls_encrypt}
  */
  readonly isHlsEncrypt?: string;
  /**
  * HLS encrypted key, this parameter is only meaningful when IsHlsEncrypt is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#uri_key CiMediaTranscodeTemplate#uri_key}
  */
  readonly uriKey?: string;
}

export function ciMediaTranscodeTemplateTransConfigHlsEncryptToTerraform(struct?: CiMediaTranscodeTemplateTransConfigHlsEncryptOutputReference | CiMediaTranscodeTemplateTransConfigHlsEncrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_hls_encrypt: cdktf.stringToTerraform(struct!.isHlsEncrypt),
    uri_key: cdktf.stringToTerraform(struct!.uriKey),
  }
}


export function ciMediaTranscodeTemplateTransConfigHlsEncryptToHclTerraform(struct?: CiMediaTranscodeTemplateTransConfigHlsEncryptOutputReference | CiMediaTranscodeTemplateTransConfigHlsEncrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_hls_encrypt: {
      value: cdktf.stringToHclTerraform(struct!.isHlsEncrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_key: {
      value: cdktf.stringToHclTerraform(struct!.uriKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateTransConfigHlsEncryptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateTransConfigHlsEncrypt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHlsEncrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHlsEncrypt = this._isHlsEncrypt;
    }
    if (this._uriKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriKey = this._uriKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateTransConfigHlsEncrypt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isHlsEncrypt = undefined;
      this._uriKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isHlsEncrypt = value.isHlsEncrypt;
      this._uriKey = value.uriKey;
    }
  }

  // is_hls_encrypt - computed: true, optional: true, required: false
  private _isHlsEncrypt?: string; 
  public get isHlsEncrypt() {
    return this.getStringAttribute('is_hls_encrypt');
  }
  public set isHlsEncrypt(value: string) {
    this._isHlsEncrypt = value;
  }
  public resetIsHlsEncrypt() {
    this._isHlsEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHlsEncryptInput() {
    return this._isHlsEncrypt;
  }

  // uri_key - computed: true, optional: true, required: false
  private _uriKey?: string; 
  public get uriKey() {
    return this.getStringAttribute('uri_key');
  }
  public set uriKey(value: string) {
    this._uriKey = value;
  }
  public resetUriKey() {
    this._uriKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriKeyInput() {
    return this._uriKey;
  }
}
export interface CiMediaTranscodeTemplateTransConfig {
  /**
  * Resolution adjustment method, value scale, crop, pad, none, When the aspect ratio of the output video is different from the original video, adjust the resolution accordingly according to this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#adj_dar_method CiMediaTranscodeTemplate#adj_dar_method}
  */
  readonly adjDarMethod?: string;
  /**
  * Audio bit rate adjustment mode, value 0, 1; when the output audio bit rate is greater than the original audio bit rate, 0 means use the original audio bit rate; 1 means return transcoding failed, Take effect when IsCheckAudioBitrate is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#audio_bitrate_adj_method CiMediaTranscodeTemplate#audio_bitrate_adj_method}
  */
  readonly audioBitrateAdjMethod?: string;
  /**
  * Whether to delete the MetaData information in the file, true, false, When false, keep source file information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#delete_metadata CiMediaTranscodeTemplate#delete_metadata}
  */
  readonly deleteMetadata?: string;
  /**
  * Whether to check the audio code rate, true, false, When false, transcode according to configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#is_check_audio_bitrate CiMediaTranscodeTemplate#is_check_audio_bitrate}
  */
  readonly isCheckAudioBitrate?: string;
  /**
  * Whether to check the resolution, when it is false, transcode according to the configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#is_check_reso CiMediaTranscodeTemplate#is_check_reso}
  */
  readonly isCheckReso?: string;
  /**
  * Whether to check the video code rate, when it is false, transcode according to the configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#is_check_video_bitrate CiMediaTranscodeTemplate#is_check_video_bitrate}
  */
  readonly isCheckVideoBitrate?: string;
  /**
  * Whether to enable HDR to SDR true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#is_hdr2_sdr CiMediaTranscodeTemplate#is_hdr2_sdr}
  */
  readonly isHdr2Sdr?: string;
  /**
  * Resolution adjustment mode, value 0, 1; 0 means use the original video resolution; 1 means return transcoding failed, Take effect when IsCheckReso is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#reso_adj_method CiMediaTranscodeTemplate#reso_adj_method}
  */
  readonly resoAdjMethod?: string;
  /**
  * Video bit rate adjustment method, value 0, 1; when the output video bit rate is greater than the original video bit rate, 0 means use the original video bit rate; 1 means return transcoding failed, Take effect when IsCheckVideoBitrate is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#video_bitrate_adj_method CiMediaTranscodeTemplate#video_bitrate_adj_method}
  */
  readonly videoBitrateAdjMethod?: string;
  /**
  * hls_encrypt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#hls_encrypt CiMediaTranscodeTemplate#hls_encrypt}
  */
  readonly hlsEncrypt?: CiMediaTranscodeTemplateTransConfigHlsEncrypt;
}

export function ciMediaTranscodeTemplateTransConfigToTerraform(struct?: CiMediaTranscodeTemplateTransConfigOutputReference | CiMediaTranscodeTemplateTransConfig): any {
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
    hls_encrypt: ciMediaTranscodeTemplateTransConfigHlsEncryptToTerraform(struct!.hlsEncrypt),
  }
}


export function ciMediaTranscodeTemplateTransConfigToHclTerraform(struct?: CiMediaTranscodeTemplateTransConfigOutputReference | CiMediaTranscodeTemplateTransConfig): any {
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
    hls_encrypt: {
      value: ciMediaTranscodeTemplateTransConfigHlsEncryptToHclTerraform(struct!.hlsEncrypt),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaTranscodeTemplateTransConfigHlsEncryptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaTranscodeTemplateTransConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateTransConfig | undefined {
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
    if (this._hlsEncrypt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsEncrypt = this._hlsEncrypt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaTranscodeTemplateTransConfig | undefined) {
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
      this._hlsEncrypt.internalValue = undefined;
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
      this._hlsEncrypt.internalValue = value.hlsEncrypt;
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

  // hls_encrypt - computed: false, optional: true, required: false
  private _hlsEncrypt = new CiMediaTranscodeTemplateTransConfigHlsEncryptOutputReference(this, "hls_encrypt");
  public get hlsEncrypt() {
    return this._hlsEncrypt;
  }
  public putHlsEncrypt(value: CiMediaTranscodeTemplateTransConfigHlsEncrypt) {
    this._hlsEncrypt.internalValue = value;
  }
  public resetHlsEncrypt() {
    this._hlsEncrypt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsEncryptInput() {
    return this._hlsEncrypt.internalValue;
  }
}
export interface CiMediaTranscodeTemplateVideo {
  /**
  * Bit rate of video output file, value range: [10, 50000], unit: Kbps, auto means adaptive bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#bitrate CiMediaTranscodeTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * buffer size, Value range: [1000, 128000], Unit: Kb, This parameter is not supported when Codec is VP8/VP9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#bufsize CiMediaTranscodeTemplate#bufsize}
  */
  readonly bufsize?: string;
  /**
  * Codec format, default value: `H.264`, when format is WebM, it is VP8, value range: `H.264`, `H.265`, `VP8`, `VP9`, `AV1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#codec CiMediaTranscodeTemplate#codec}
  */
  readonly codec?: string;
  /**
  * Bit rate-quality control factor, value range: (0, 51], If Crf is set, the setting of Bitrate will be invalid, When Bitrate is empty, the default is 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#crf CiMediaTranscodeTemplate#crf}
  */
  readonly crf?: string;
  /**
  * Frame rate, value range: (0, 60], Unit: fps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#fps CiMediaTranscodeTemplate#fps}
  */
  readonly fps?: string;
  /**
  * The maximum number of frames between key frames, value range: [1, 100000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#gop CiMediaTranscodeTemplate#gop}
  */
  readonly gop?: string;
  /**
  * High, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#height CiMediaTranscodeTemplate#height}
  */
  readonly height?: string;
  /**
  * Adaptive length,true, false, This parameter is not supported when Codec is VP8/VP9/AV1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#long_short_mode CiMediaTranscodeTemplate#long_short_mode}
  */
  readonly longShortMode?: string;
  /**
  * Peak video bit rate, Value range: [10, 50000], Unit: Kbps, This parameter is not supported when Codec is VP8/VP9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#maxrate CiMediaTranscodeTemplate#maxrate}
  */
  readonly maxrate?: string;
  /**
  * video color format, H.264 support: yuv420p, yuv422p, yuv444p, yuvj420p, yuvj422p, yuvj444p, auto, H.265 support: yuv420p, yuv420p10le, auto, This parameter is not supported when Codec is VP8/VP9/AV1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#pixfmt CiMediaTranscodeTemplate#pixfmt}
  */
  readonly pixfmt?: string;
  /**
  * Video Algorithm Presets- H.264 supports this parameter, the values are veryfast, fast, medium, slow, slower- VP8 supports this parameter, the value is good, realtime- AV1 supports this parameter, the value is 5 (recommended value), 4- H.265 and VP9 do not support this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#preset CiMediaTranscodeTemplate#preset}
  */
  readonly preset?: string;
  /**
  * encoding level, Support baseline, main, high, auto- When Pixfmt is auto, this parameter can only be set to auto, when it is set to other options, the parameter value will be set to auto- baseline: suitable for mobile devices- main: suitable for standard resolution devices- high: suitable for high-resolution devices- Only H.264 supports this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#profile CiMediaTranscodeTemplate#profile}
  */
  readonly profile?: string;
  /**
  * Whether to delete the video stream, true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#remove CiMediaTranscodeTemplate#remove}
  */
  readonly remove?: string;
  /**
  * Rotation angle, Value range: [0, 360), Unit: degree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#rotate CiMediaTranscodeTemplate#rotate}
  */
  readonly rotate?: string;
  /**
  * width, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#width CiMediaTranscodeTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaTranscodeTemplateVideoToTerraform(struct?: CiMediaTranscodeTemplateVideoOutputReference | CiMediaTranscodeTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    bufsize: cdktf.stringToTerraform(struct!.bufsize),
    codec: cdktf.stringToTerraform(struct!.codec),
    crf: cdktf.stringToTerraform(struct!.crf),
    fps: cdktf.stringToTerraform(struct!.fps),
    gop: cdktf.stringToTerraform(struct!.gop),
    height: cdktf.stringToTerraform(struct!.height),
    long_short_mode: cdktf.stringToTerraform(struct!.longShortMode),
    maxrate: cdktf.stringToTerraform(struct!.maxrate),
    pixfmt: cdktf.stringToTerraform(struct!.pixfmt),
    preset: cdktf.stringToTerraform(struct!.preset),
    profile: cdktf.stringToTerraform(struct!.profile),
    remove: cdktf.stringToTerraform(struct!.remove),
    rotate: cdktf.stringToTerraform(struct!.rotate),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaTranscodeTemplateVideoToHclTerraform(struct?: CiMediaTranscodeTemplateVideoOutputReference | CiMediaTranscodeTemplateVideo): any {
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
    bufsize: {
      value: cdktf.stringToHclTerraform(struct!.bufsize),
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
    crf: {
      value: cdktf.stringToHclTerraform(struct!.crf),
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
    gop: {
      value: cdktf.stringToHclTerraform(struct!.gop),
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
    long_short_mode: {
      value: cdktf.stringToHclTerraform(struct!.longShortMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxrate: {
      value: cdktf.stringToHclTerraform(struct!.maxrate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pixfmt: {
      value: cdktf.stringToHclTerraform(struct!.pixfmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
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
    remove: {
      value: cdktf.stringToHclTerraform(struct!.remove),
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

export class CiMediaTranscodeTemplateVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaTranscodeTemplateVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufsize = this._bufsize;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._crf !== undefined) {
      hasAnyValues = true;
      internalValueResult.crf = this._crf;
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
    if (this._longShortMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.longShortMode = this._longShortMode;
    }
    if (this._maxrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxrate = this._maxrate;
    }
    if (this._pixfmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.pixfmt = this._pixfmt;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
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

  public set internalValue(value: CiMediaTranscodeTemplateVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._bufsize = undefined;
      this._codec = undefined;
      this._crf = undefined;
      this._fps = undefined;
      this._gop = undefined;
      this._height = undefined;
      this._longShortMode = undefined;
      this._maxrate = undefined;
      this._pixfmt = undefined;
      this._preset = undefined;
      this._profile = undefined;
      this._remove = undefined;
      this._rotate = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._bufsize = value.bufsize;
      this._codec = value.codec;
      this._crf = value.crf;
      this._fps = value.fps;
      this._gop = value.gop;
      this._height = value.height;
      this._longShortMode = value.longShortMode;
      this._maxrate = value.maxrate;
      this._pixfmt = value.pixfmt;
      this._preset = value.preset;
      this._profile = value.profile;
      this._remove = value.remove;
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

  // bufsize - computed: false, optional: true, required: false
  private _bufsize?: string; 
  public get bufsize() {
    return this.getStringAttribute('bufsize');
  }
  public set bufsize(value: string) {
    this._bufsize = value;
  }
  public resetBufsize() {
    this._bufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufsizeInput() {
    return this._bufsize;
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

  // crf - computed: false, optional: true, required: false
  private _crf?: string; 
  public get crf() {
    return this.getStringAttribute('crf');
  }
  public set crf(value: string) {
    this._crf = value;
  }
  public resetCrf() {
    this._crf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crfInput() {
    return this._crf;
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

  // gop - computed: false, optional: true, required: false
  private _gop?: string; 
  public get gop() {
    return this.getStringAttribute('gop');
  }
  public set gop(value: string) {
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

  // long_short_mode - computed: false, optional: true, required: false
  private _longShortMode?: string; 
  public get longShortMode() {
    return this.getStringAttribute('long_short_mode');
  }
  public set longShortMode(value: string) {
    this._longShortMode = value;
  }
  public resetLongShortMode() {
    this._longShortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longShortModeInput() {
    return this._longShortMode;
  }

  // maxrate - computed: false, optional: true, required: false
  private _maxrate?: string; 
  public get maxrate() {
    return this.getStringAttribute('maxrate');
  }
  public set maxrate(value: string) {
    this._maxrate = value;
  }
  public resetMaxrate() {
    this._maxrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxrateInput() {
    return this._maxrate;
  }

  // pixfmt - computed: false, optional: true, required: false
  private _pixfmt?: string; 
  public get pixfmt() {
    return this.getStringAttribute('pixfmt');
  }
  public set pixfmt(value: string) {
    this._pixfmt = value;
  }
  public resetPixfmt() {
    this._pixfmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pixfmtInput() {
    return this._pixfmt;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template tencentcloud_ci_media_transcode_template}
*/
export class CiMediaTranscodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_transcode_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaTranscodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaTranscodeTemplate to import
  * @param importFromId The id of the existing CiMediaTranscodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaTranscodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_transcode_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_transcode_template tencentcloud_ci_media_transcode_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaTranscodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaTranscodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_transcode_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._audioMix.internalValue = config.audioMix;
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
  private _audio = new CiMediaTranscodeTemplateAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: CiMediaTranscodeTemplateAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // audio_mix - computed: false, optional: true, required: false
  private _audioMix = new CiMediaTranscodeTemplateAudioMixList(this, "audio_mix", false);
  public get audioMix() {
    return this._audioMix;
  }
  public putAudioMix(value: CiMediaTranscodeTemplateAudioMix[] | cdktf.IResolvable) {
    this._audioMix.internalValue = value;
  }
  public resetAudioMix() {
    this._audioMix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioMixInput() {
    return this._audioMix.internalValue;
  }

  // container - computed: false, optional: false, required: true
  private _container = new CiMediaTranscodeTemplateContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: CiMediaTranscodeTemplateContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new CiMediaTranscodeTemplateTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: CiMediaTranscodeTemplateTimeInterval) {
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
  private _transConfig = new CiMediaTranscodeTemplateTransConfigOutputReference(this, "trans_config");
  public get transConfig() {
    return this._transConfig;
  }
  public putTransConfig(value: CiMediaTranscodeTemplateTransConfig) {
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
  private _video = new CiMediaTranscodeTemplateVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: CiMediaTranscodeTemplateVideo) {
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
      audio: ciMediaTranscodeTemplateAudioToTerraform(this._audio.internalValue),
      audio_mix: cdktf.listMapper(ciMediaTranscodeTemplateAudioMixToTerraform, true)(this._audioMix.internalValue),
      container: ciMediaTranscodeTemplateContainerToTerraform(this._container.internalValue),
      time_interval: ciMediaTranscodeTemplateTimeIntervalToTerraform(this._timeInterval.internalValue),
      trans_config: ciMediaTranscodeTemplateTransConfigToTerraform(this._transConfig.internalValue),
      video: ciMediaTranscodeTemplateVideoToTerraform(this._video.internalValue),
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
        value: ciMediaTranscodeTemplateAudioToHclTerraform(this._audio.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateAudioList",
      },
      audio_mix: {
        value: cdktf.listMapperHcl(ciMediaTranscodeTemplateAudioMixToHclTerraform, true)(this._audioMix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateAudioMixList",
      },
      container: {
        value: ciMediaTranscodeTemplateContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateContainerList",
      },
      time_interval: {
        value: ciMediaTranscodeTemplateTimeIntervalToHclTerraform(this._timeInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateTimeIntervalList",
      },
      trans_config: {
        value: ciMediaTranscodeTemplateTransConfigToHclTerraform(this._transConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateTransConfigList",
      },
      video: {
        value: ciMediaTranscodeTemplateVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaTranscodeTemplateVideoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
