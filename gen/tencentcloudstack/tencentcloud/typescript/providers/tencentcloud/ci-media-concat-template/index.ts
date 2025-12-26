// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaConcatTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#bucket CiMediaConcatTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#id CiMediaConcatTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#name CiMediaConcatTemplate#name}
  */
  readonly name: string;
  /**
  * concat_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#concat_template CiMediaConcatTemplate#concat_template}
  */
  readonly concatTemplate: CiMediaConcatTemplateConcatTemplate;
}
export interface CiMediaConcatTemplateConcatTemplateAudio {
  /**
  * Original audio bit rate, unit: Kbps, Value range: [8, 1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#bitrate CiMediaConcatTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * number of channels- When Codec is set to aac, support 1, 2, 4, 5, 6, 8- When Codec is set to mp3, support 1, 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#channels CiMediaConcatTemplate#channels}
  */
  readonly channels?: string;
  /**
  * Codec format, value aac, mp3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#codec CiMediaConcatTemplate#codec}
  */
  readonly codec: string;
  /**
  * Sampling Rate- Unit: Hz- Optional 11025, 22050, 32000, 44100, 48000, 96000- Different packages, mp3 supports different sampling rates, as shown in the table below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#samplerate CiMediaConcatTemplate#samplerate}
  */
  readonly samplerate?: string;
}

export function ciMediaConcatTemplateConcatTemplateAudioToTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioOutputReference | CiMediaConcatTemplateConcatTemplateAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.stringToTerraform(struct!.bitrate),
    channels: cdktf.stringToTerraform(struct!.channels),
    codec: cdktf.stringToTerraform(struct!.codec),
    samplerate: cdktf.stringToTerraform(struct!.samplerate),
  }
}


export function ciMediaConcatTemplateConcatTemplateAudioToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioOutputReference | CiMediaConcatTemplateConcatTemplateAudio): any {
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

export class CiMediaConcatTemplateConcatTemplateAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaConcatTemplateConcatTemplateAudio | undefined {
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
    if (this._samplerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerate = this._samplerate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._channels = undefined;
      this._codec = undefined;
      this._samplerate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._channels = value.channels;
      this._codec = value.codec;
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
export interface CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig {
  /**
  * bgm transition fade-in duration, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#bgm_fade_time CiMediaConcatTemplate#bgm_fade_time}
  */
  readonly bgmFadeTime?: string;
  /**
  * Enable bgm conversion fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#enable_bgm_fade CiMediaConcatTemplate#enable_bgm_fade}
  */
  readonly enableBgmFade?: string;
  /**
  * enable fade out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#enable_end_fadeout CiMediaConcatTemplate#enable_end_fadeout}
  */
  readonly enableEndFadeout?: string;
  /**
  * enable fade in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#enable_start_fadein CiMediaConcatTemplate#enable_start_fadein}
  */
  readonly enableStartFadein?: string;
  /**
  * fade out time, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#end_fadeout_time CiMediaConcatTemplate#end_fadeout_time}
  */
  readonly endFadeoutTime?: string;
  /**
  * Fade in duration, greater than 0, support floating point numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#start_fadein_time CiMediaConcatTemplate#start_fadein_time}
  */
  readonly startFadeinTime?: string;
}

export function ciMediaConcatTemplateConcatTemplateAudioMixEffectConfigToTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioMixEffectConfigOutputReference | CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig): any {
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


export function ciMediaConcatTemplateConcatTemplateAudioMixEffectConfigToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioMixEffectConfigOutputReference | CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig): any {
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

export class CiMediaConcatTemplateConcatTemplateAudioMixEffectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig | undefined {
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

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig | undefined) {
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

  // end_fadeout_time - computed: true, optional: true, required: false
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
export interface CiMediaConcatTemplateConcatTemplateAudioMix {
  /**
  * The media address of the audio track that needs to be mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#audio_source CiMediaConcatTemplate#audio_source}
  */
  readonly audioSource: string;
  /**
  * Mixing mode Repeat: background sound loop, Once: The background sound is played once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#mix_mode CiMediaConcatTemplate#mix_mode}
  */
  readonly mixMode?: string;
  /**
  * Whether to replace the original audio of the Input media file with the mixed audio track media.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#replace CiMediaConcatTemplate#replace}
  */
  readonly replace?: string;
  /**
  * effect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#effect_config CiMediaConcatTemplate#effect_config}
  */
  readonly effectConfig?: CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig;
}

export function ciMediaConcatTemplateConcatTemplateAudioMixToTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioMix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_source: cdktf.stringToTerraform(struct!.audioSource),
    mix_mode: cdktf.stringToTerraform(struct!.mixMode),
    replace: cdktf.stringToTerraform(struct!.replace),
    effect_config: ciMediaConcatTemplateConcatTemplateAudioMixEffectConfigToTerraform(struct!.effectConfig),
  }
}


export function ciMediaConcatTemplateConcatTemplateAudioMixToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateAudioMix | cdktf.IResolvable): any {
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
      value: ciMediaConcatTemplateConcatTemplateAudioMixEffectConfigToHclTerraform(struct!.effectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateAudioMixEffectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaConcatTemplateConcatTemplateAudioMixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiMediaConcatTemplateConcatTemplateAudioMix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateAudioMix | cdktf.IResolvable | undefined) {
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
  private _effectConfig = new CiMediaConcatTemplateConcatTemplateAudioMixEffectConfigOutputReference(this, "effect_config");
  public get effectConfig() {
    return this._effectConfig;
  }
  public putEffectConfig(value: CiMediaConcatTemplateConcatTemplateAudioMixEffectConfig) {
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

export class CiMediaConcatTemplateConcatTemplateAudioMixList extends cdktf.ComplexList {
  public internalValue? : CiMediaConcatTemplateConcatTemplateAudioMix[] | cdktf.IResolvable

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
  public get(index: number): CiMediaConcatTemplateConcatTemplateAudioMixOutputReference {
    return new CiMediaConcatTemplateConcatTemplateAudioMixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiMediaConcatTemplateConcatTemplateConcatFragment {
  /**
  * node type, `start`, `end`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#mode CiMediaConcatTemplate#mode}
  */
  readonly mode: string;
  /**
  * Splicing object address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#url CiMediaConcatTemplate#url}
  */
  readonly url: string;
}

export function ciMediaConcatTemplateConcatTemplateConcatFragmentToTerraform(struct?: CiMediaConcatTemplateConcatTemplateConcatFragment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ciMediaConcatTemplateConcatTemplateConcatFragmentToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateConcatFragment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaConcatTemplateConcatTemplateConcatFragmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiMediaConcatTemplateConcatTemplateConcatFragment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateConcatFragment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._url = value.url;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CiMediaConcatTemplateConcatTemplateConcatFragmentList extends cdktf.ComplexList {
  public internalValue? : CiMediaConcatTemplateConcatTemplateConcatFragment[] | cdktf.IResolvable

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
  public get(index: number): CiMediaConcatTemplateConcatTemplateConcatFragmentOutputReference {
    return new CiMediaConcatTemplateConcatTemplateConcatFragmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiMediaConcatTemplateConcatTemplateContainer {
  /**
  * Container format: mp4, flv, hls, ts, mp3, aac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#format CiMediaConcatTemplate#format}
  */
  readonly format: string;
}

export function ciMediaConcatTemplateConcatTemplateContainerToTerraform(struct?: CiMediaConcatTemplateConcatTemplateContainerOutputReference | CiMediaConcatTemplateConcatTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function ciMediaConcatTemplateConcatTemplateContainerToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateContainerOutputReference | CiMediaConcatTemplateConcatTemplateContainer): any {
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

export class CiMediaConcatTemplateConcatTemplateContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaConcatTemplateConcatTemplateContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateContainer | undefined) {
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
export interface CiMediaConcatTemplateConcatTemplateVideo {
  /**
  * Original audio bit rate, unit: Kbps, Value range: [8, 1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#bitrate CiMediaConcatTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * Codec format `H.264`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#codec CiMediaConcatTemplate#codec}
  */
  readonly codec: string;
  /**
  * Bit rate-quality control factor, value range: (0, 51], If Crf is set, the setting of Bitrate will be invalid, When Bitrate is empty, the default is 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#crf CiMediaConcatTemplate#crf}
  */
  readonly crf?: string;
  /**
  * Frame rate, value range: (0, 60], Unit: fps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#fps CiMediaConcatTemplate#fps}
  */
  readonly fps?: string;
  /**
  * High, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#height CiMediaConcatTemplate#height}
  */
  readonly height?: string;
  /**
  * Whether to delete the source audio stream, the value is true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#remove CiMediaConcatTemplate#remove}
  */
  readonly remove?: string;
  /**
  * Rotation angle, Value range: [0, 360), Unit: degree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#rotate CiMediaConcatTemplate#rotate}
  */
  readonly rotate?: string;
  /**
  * width, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#width CiMediaConcatTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaConcatTemplateConcatTemplateVideoToTerraform(struct?: CiMediaConcatTemplateConcatTemplateVideoOutputReference | CiMediaConcatTemplateConcatTemplateVideo): any {
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
    rotate: cdktf.stringToTerraform(struct!.rotate),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaConcatTemplateConcatTemplateVideoToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateVideoOutputReference | CiMediaConcatTemplateConcatTemplateVideo): any {
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

export class CiMediaConcatTemplateConcatTemplateVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaConcatTemplateConcatTemplateVideo | undefined {
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

  public set internalValue(value: CiMediaConcatTemplateConcatTemplateVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._crf = undefined;
      this._fps = undefined;
      this._height = undefined;
      this._remove = undefined;
      this._rotate = undefined;
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

  // remove - computed: true, optional: true, required: false
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
export interface CiMediaConcatTemplateConcatTemplate {
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#audio CiMediaConcatTemplate#audio}
  */
  readonly audio?: CiMediaConcatTemplateConcatTemplateAudio;
  /**
  * audio_mix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#audio_mix CiMediaConcatTemplate#audio_mix}
  */
  readonly audioMix?: CiMediaConcatTemplateConcatTemplateAudioMix[] | cdktf.IResolvable;
  /**
  * concat_fragment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#concat_fragment CiMediaConcatTemplate#concat_fragment}
  */
  readonly concatFragment: CiMediaConcatTemplateConcatTemplateConcatFragment[] | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#container CiMediaConcatTemplate#container}
  */
  readonly container: CiMediaConcatTemplateConcatTemplateContainer;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#video CiMediaConcatTemplate#video}
  */
  readonly video?: CiMediaConcatTemplateConcatTemplateVideo;
}

export function ciMediaConcatTemplateConcatTemplateToTerraform(struct?: CiMediaConcatTemplateConcatTemplateOutputReference | CiMediaConcatTemplateConcatTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio: ciMediaConcatTemplateConcatTemplateAudioToTerraform(struct!.audio),
    audio_mix: cdktf.listMapper(ciMediaConcatTemplateConcatTemplateAudioMixToTerraform, true)(struct!.audioMix),
    concat_fragment: cdktf.listMapper(ciMediaConcatTemplateConcatTemplateConcatFragmentToTerraform, true)(struct!.concatFragment),
    container: ciMediaConcatTemplateConcatTemplateContainerToTerraform(struct!.container),
    video: ciMediaConcatTemplateConcatTemplateVideoToTerraform(struct!.video),
  }
}


export function ciMediaConcatTemplateConcatTemplateToHclTerraform(struct?: CiMediaConcatTemplateConcatTemplateOutputReference | CiMediaConcatTemplateConcatTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio: {
      value: ciMediaConcatTemplateConcatTemplateAudioToHclTerraform(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateAudioList",
    },
    audio_mix: {
      value: cdktf.listMapperHcl(ciMediaConcatTemplateConcatTemplateAudioMixToHclTerraform, true)(struct!.audioMix),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateAudioMixList",
    },
    concat_fragment: {
      value: cdktf.listMapperHcl(ciMediaConcatTemplateConcatTemplateConcatFragmentToHclTerraform, true)(struct!.concatFragment),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateConcatFragmentList",
    },
    container: {
      value: ciMediaConcatTemplateConcatTemplateContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateContainerList",
    },
    video: {
      value: ciMediaConcatTemplateConcatTemplateVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaConcatTemplateConcatTemplateVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaConcatTemplateConcatTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaConcatTemplateConcatTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._audioMix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioMix = this._audioMix?.internalValue;
    }
    if (this._concatFragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concatFragment = this._concatFragment?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaConcatTemplateConcatTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audio.internalValue = undefined;
      this._audioMix.internalValue = undefined;
      this._concatFragment.internalValue = undefined;
      this._container.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audio.internalValue = value.audio;
      this._audioMix.internalValue = value.audioMix;
      this._concatFragment.internalValue = value.concatFragment;
      this._container.internalValue = value.container;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new CiMediaConcatTemplateConcatTemplateAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: CiMediaConcatTemplateConcatTemplateAudio) {
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
  private _audioMix = new CiMediaConcatTemplateConcatTemplateAudioMixList(this, "audio_mix", false);
  public get audioMix() {
    return this._audioMix;
  }
  public putAudioMix(value: CiMediaConcatTemplateConcatTemplateAudioMix[] | cdktf.IResolvable) {
    this._audioMix.internalValue = value;
  }
  public resetAudioMix() {
    this._audioMix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioMixInput() {
    return this._audioMix.internalValue;
  }

  // concat_fragment - computed: false, optional: false, required: true
  private _concatFragment = new CiMediaConcatTemplateConcatTemplateConcatFragmentList(this, "concat_fragment", false);
  public get concatFragment() {
    return this._concatFragment;
  }
  public putConcatFragment(value: CiMediaConcatTemplateConcatTemplateConcatFragment[] | cdktf.IResolvable) {
    this._concatFragment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concatFragmentInput() {
    return this._concatFragment.internalValue;
  }

  // container - computed: false, optional: false, required: true
  private _container = new CiMediaConcatTemplateConcatTemplateContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: CiMediaConcatTemplateConcatTemplateContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new CiMediaConcatTemplateConcatTemplateVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: CiMediaConcatTemplateConcatTemplateVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template tencentcloud_ci_media_concat_template}
*/
export class CiMediaConcatTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_concat_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaConcatTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaConcatTemplate to import
  * @param importFromId The id of the existing CiMediaConcatTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaConcatTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_concat_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_concat_template tencentcloud_ci_media_concat_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaConcatTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaConcatTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_concat_template',
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
    this._concatTemplate.internalValue = config.concatTemplate;
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

  // concat_template - computed: false, optional: false, required: true
  private _concatTemplate = new CiMediaConcatTemplateConcatTemplateOutputReference(this, "concat_template");
  public get concatTemplate() {
    return this._concatTemplate;
  }
  public putConcatTemplate(value: CiMediaConcatTemplateConcatTemplate) {
    this._concatTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concatTemplateInput() {
    return this._concatTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      concat_template: ciMediaConcatTemplateConcatTemplateToTerraform(this._concatTemplate.internalValue),
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
      concat_template: {
        value: ciMediaConcatTemplateConcatTemplateToHclTerraform(this._concatTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaConcatTemplateConcatTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
