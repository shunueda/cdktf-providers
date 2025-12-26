// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaVideoMontageTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#bucket CiMediaVideoMontageTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Collection duration 1: Default automatic analysis duration, 2: The unit is seconds, 3: Support float format, execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#duration CiMediaVideoMontageTemplate#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#id CiMediaVideoMontageTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#name CiMediaVideoMontageTemplate#name}
  */
  readonly name: string;
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#audio CiMediaVideoMontageTemplate#audio}
  */
  readonly audio?: CiMediaVideoMontageTemplateAudio;
  /**
  * audio_mix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#audio_mix CiMediaVideoMontageTemplate#audio_mix}
  */
  readonly audioMix?: CiMediaVideoMontageTemplateAudioMix[] | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#container CiMediaVideoMontageTemplate#container}
  */
  readonly container: CiMediaVideoMontageTemplateContainer;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#video CiMediaVideoMontageTemplate#video}
  */
  readonly video?: CiMediaVideoMontageTemplateVideo;
}
export interface CiMediaVideoMontageTemplateAudio {
  /**
  * Original audio bit rate, unit: Kbps, Value range: [8, 1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#bitrate CiMediaVideoMontageTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * number of channels- When Codec is set to aac, support 1, 2, 4, 5, 6, 8- When Codec is set to mp3, support 1, 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#channels CiMediaVideoMontageTemplate#channels}
  */
  readonly channels?: string;
  /**
  * Codec format, value aac, mp3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#codec CiMediaVideoMontageTemplate#codec}
  */
  readonly codec: string;
  /**
  * Whether to delete the source audio stream, the value is true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#remove CiMediaVideoMontageTemplate#remove}
  */
  readonly remove?: string;
  /**
  * Sampling Rate- Unit: Hz- Optional 11025, 22050, 32000, 44100, 48000, 96000- Different packages, mp3 supports different sampling rates, as shown in the table below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#samplerate CiMediaVideoMontageTemplate#samplerate}
  */
  readonly samplerate?: string;
}

export function ciMediaVideoMontageTemplateAudioToTerraform(struct?: CiMediaVideoMontageTemplateAudioOutputReference | CiMediaVideoMontageTemplateAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    channels: cdktf.stringToTerraform(struct!.channels),
    codec: cdktf.stringToTerraform(struct!.codec),
    remove: cdktf.stringToTerraform(struct!.remove),
    samplerate: cdktf.stringToTerraform(struct!.samplerate),
  }
}


export function ciMediaVideoMontageTemplateAudioToHclTerraform(struct?: CiMediaVideoMontageTemplateAudioOutputReference | CiMediaVideoMontageTemplateAudio): any {
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
    remove: {
      value: cdktf.stringToHclTerraform(struct!.remove),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaVideoMontageTemplateAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoMontageTemplateAudio | undefined {
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
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._samplerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerate = this._samplerate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaVideoMontageTemplateAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._channels = undefined;
      this._codec = undefined;
      this._remove = undefined;
      this._samplerate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._channels = value.channels;
      this._codec = value.codec;
      this._remove = value.remove;
      this._samplerate = value.samplerate;
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
}
export interface CiMediaVideoMontageTemplateAudioMixEffectConfig {
  /**
  * bgm transition fade-in duration, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#bgm_fade_time CiMediaVideoMontageTemplate#bgm_fade_time}
  */
  readonly bgmFadeTime?: string;
  /**
  * Enable bgm conversion fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#enable_bgm_fade CiMediaVideoMontageTemplate#enable_bgm_fade}
  */
  readonly enableBgmFade?: string;
  /**
  * enable fade out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#enable_end_fadeout CiMediaVideoMontageTemplate#enable_end_fadeout}
  */
  readonly enableEndFadeout?: string;
  /**
  * enable fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#enable_start_fadein CiMediaVideoMontageTemplate#enable_start_fadein}
  */
  readonly enableStartFadein?: string;
  /**
  * fade out time, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#end_fadeout_time CiMediaVideoMontageTemplate#end_fadeout_time}
  */
  readonly endFadeoutTime?: string;
  /**
  * Fade in duration, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#start_fadein_time CiMediaVideoMontageTemplate#start_fadein_time}
  */
  readonly startFadeinTime?: string;
}

export function ciMediaVideoMontageTemplateAudioMixEffectConfigToTerraform(struct?: CiMediaVideoMontageTemplateAudioMixEffectConfigOutputReference | CiMediaVideoMontageTemplateAudioMixEffectConfig): any {
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


export function ciMediaVideoMontageTemplateAudioMixEffectConfigToHclTerraform(struct?: CiMediaVideoMontageTemplateAudioMixEffectConfigOutputReference | CiMediaVideoMontageTemplateAudioMixEffectConfig): any {
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

export class CiMediaVideoMontageTemplateAudioMixEffectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoMontageTemplateAudioMixEffectConfig | undefined {
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

  public set internalValue(value: CiMediaVideoMontageTemplateAudioMixEffectConfig | undefined) {
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
export interface CiMediaVideoMontageTemplateAudioMix {
  /**
  * The media address of the audio track that needs to be mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#audio_source CiMediaVideoMontageTemplate#audio_source}
  */
  readonly audioSource: string;
  /**
  * Mixing mode Repeat: background sound loop, Once: The background sound is played once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#mix_mode CiMediaVideoMontageTemplate#mix_mode}
  */
  readonly mixMode?: string;
  /**
  * Whether to replace the original audio of the Input media file with the mixed audio track media.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#replace CiMediaVideoMontageTemplate#replace}
  */
  readonly replace?: string;
  /**
  * effect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#effect_config CiMediaVideoMontageTemplate#effect_config}
  */
  readonly effectConfig?: CiMediaVideoMontageTemplateAudioMixEffectConfig;
}

export function ciMediaVideoMontageTemplateAudioMixToTerraform(struct?: CiMediaVideoMontageTemplateAudioMix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_source: cdktf.stringToTerraform(struct!.audioSource),
    mix_mode: cdktf.stringToTerraform(struct!.mixMode),
    replace: cdktf.stringToTerraform(struct!.replace),
    effect_config: ciMediaVideoMontageTemplateAudioMixEffectConfigToTerraform(struct!.effectConfig),
  }
}


export function ciMediaVideoMontageTemplateAudioMixToHclTerraform(struct?: CiMediaVideoMontageTemplateAudioMix | cdktf.IResolvable): any {
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
      value: ciMediaVideoMontageTemplateAudioMixEffectConfigToHclTerraform(struct!.effectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaVideoMontageTemplateAudioMixEffectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaVideoMontageTemplateAudioMixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiMediaVideoMontageTemplateAudioMix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CiMediaVideoMontageTemplateAudioMix | cdktf.IResolvable | undefined) {
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
  private _effectConfig = new CiMediaVideoMontageTemplateAudioMixEffectConfigOutputReference(this, "effect_config");
  public get effectConfig() {
    return this._effectConfig;
  }
  public putEffectConfig(value: CiMediaVideoMontageTemplateAudioMixEffectConfig) {
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

export class CiMediaVideoMontageTemplateAudioMixList extends cdktf.ComplexList {
  public internalValue? : CiMediaVideoMontageTemplateAudioMix[] | cdktf.IResolvable

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
  public get(index: number): CiMediaVideoMontageTemplateAudioMixOutputReference {
    return new CiMediaVideoMontageTemplateAudioMixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiMediaVideoMontageTemplateContainer {
  /**
  * Container format: mp4, flv, hls, ts, mkv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#format CiMediaVideoMontageTemplate#format}
  */
  readonly format: string;
}

export function ciMediaVideoMontageTemplateContainerToTerraform(struct?: CiMediaVideoMontageTemplateContainerOutputReference | CiMediaVideoMontageTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function ciMediaVideoMontageTemplateContainerToHclTerraform(struct?: CiMediaVideoMontageTemplateContainerOutputReference | CiMediaVideoMontageTemplateContainer): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaVideoMontageTemplateContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoMontageTemplateContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaVideoMontageTemplateContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
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
}
export interface CiMediaVideoMontageTemplateVideo {
  /**
  * Bit rate of video output file, value range: [10, 50000], unit: Kbps, auto means adaptive bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#bitrate CiMediaVideoMontageTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * Codec format `H.264`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#codec CiMediaVideoMontageTemplate#codec}
  */
  readonly codec: string;
  /**
  * Bit rate-quality control factor, value range: (0, 51], If Crf is set, the setting of Bitrate will be invalid, When Bitrate is empty, the default is 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#crf CiMediaVideoMontageTemplate#crf}
  */
  readonly crf?: string;
  /**
  * Frame rate, value range: (0, 60], Unit: fps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#fps CiMediaVideoMontageTemplate#fps}
  */
  readonly fps?: string;
  /**
  * High, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#height CiMediaVideoMontageTemplate#height}
  */
  readonly height?: string;
  /**
  * Whether to delete the source audio stream, the value is true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#remove CiMediaVideoMontageTemplate#remove}
  */
  readonly remove?: string;
  /**
  * width, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#width CiMediaVideoMontageTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaVideoMontageTemplateVideoToTerraform(struct?: CiMediaVideoMontageTemplateVideoOutputReference | CiMediaVideoMontageTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    crf: cdktf.stringToTerraform(struct!.crf),
    fps: cdktf.stringToTerraform(struct!.fps),
    height: cdktf.stringToTerraform(struct!.height),
    remove: cdktf.stringToTerraform(struct!.remove),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaVideoMontageTemplateVideoToHclTerraform(struct?: CiMediaVideoMontageTemplateVideoOutputReference | CiMediaVideoMontageTemplateVideo): any {
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
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
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

export class CiMediaVideoMontageTemplateVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVideoMontageTemplateVideo | undefined {
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
    if (this._crf !== undefined) {
      hasAnyValues = true;
      internalValueResult.crf = this._crf;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaVideoMontageTemplateVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._crf = undefined;
      this._fps = undefined;
      this._height = undefined;
      this._remove = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._crf = value.crf;
      this._fps = value.fps;
      this._height = value.height;
      this._remove = value.remove;
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template tencentcloud_ci_media_video_montage_template}
*/
export class CiMediaVideoMontageTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_video_montage_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaVideoMontageTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaVideoMontageTemplate to import
  * @param importFromId The id of the existing CiMediaVideoMontageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaVideoMontageTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_video_montage_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_video_montage_template tencentcloud_ci_media_video_montage_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaVideoMontageTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaVideoMontageTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_video_montage_template',
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
    this._duration = config.duration;
    this._id = config.id;
    this._name = config.name;
    this._audio.internalValue = config.audio;
    this._audioMix.internalValue = config.audioMix;
    this._container.internalValue = config.container;
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
  private _audio = new CiMediaVideoMontageTemplateAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: CiMediaVideoMontageTemplateAudio) {
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
  private _audioMix = new CiMediaVideoMontageTemplateAudioMixList(this, "audio_mix", false);
  public get audioMix() {
    return this._audioMix;
  }
  public putAudioMix(value: CiMediaVideoMontageTemplateAudioMix[] | cdktf.IResolvable) {
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
  private _container = new CiMediaVideoMontageTemplateContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: CiMediaVideoMontageTemplateContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new CiMediaVideoMontageTemplateVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: CiMediaVideoMontageTemplateVideo) {
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
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      audio: ciMediaVideoMontageTemplateAudioToTerraform(this._audio.internalValue),
      audio_mix: cdktf.listMapper(ciMediaVideoMontageTemplateAudioMixToTerraform, true)(this._audioMix.internalValue),
      container: ciMediaVideoMontageTemplateContainerToTerraform(this._container.internalValue),
      video: ciMediaVideoMontageTemplateVideoToTerraform(this._video.internalValue),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
        value: ciMediaVideoMontageTemplateAudioToHclTerraform(this._audio.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoMontageTemplateAudioList",
      },
      audio_mix: {
        value: cdktf.listMapperHcl(ciMediaVideoMontageTemplateAudioMixToHclTerraform, true)(this._audioMix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoMontageTemplateAudioMixList",
      },
      container: {
        value: ciMediaVideoMontageTemplateContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoMontageTemplateContainerList",
      },
      video: {
        value: ciMediaVideoMontageTemplateVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVideoMontageTemplateVideoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
