// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsTranscodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#comment MpsTranscodeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Encapsulation format, optional values: mp4, flv, hls, mp3, flac, ogg, m4a. Among them, mp3, flac, ogg, m4a are pure audio files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#container MpsTranscodeTemplate#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#id MpsTranscodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Transcoding template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#name MpsTranscodeTemplate#name}
  */
  readonly name?: string;
  /**
  * Whether to remove audio data, value:0: reserved.1: remove.Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#remove_audio MpsTranscodeTemplate#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data, value:0: reserved.1: remove.Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#remove_video MpsTranscodeTemplate#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#audio_template MpsTranscodeTemplate#audio_template}
  */
  readonly audioTemplate?: MpsTranscodeTemplateAudioTemplate;
  /**
  * enhance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#enhance_config MpsTranscodeTemplate#enhance_config}
  */
  readonly enhanceConfig?: MpsTranscodeTemplateEnhanceConfig;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#tehd_config MpsTranscodeTemplate#tehd_config}
  */
  readonly tehdConfig?: MpsTranscodeTemplateTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#video_template MpsTranscodeTemplate#video_template}
  */
  readonly videoTemplate?: MpsTranscodeTemplateVideoTemplate;
}
export interface MpsTranscodeTemplateAudioTemplate {
  /**
  * Audio channel mode, optional values:`1: single channel.2: Dual channel.6: Stereo.When the package format of the media is an audio format (flac, ogg, mp3, m4a), the number of channels is not allowed to be set to stereo.Default: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#audio_channel MpsTranscodeTemplate#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Bit rate of the audio stream, value range: 0 and [26, 256], unit: kbps.When the value is 0, it means that the audio bit rate is consistent with the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#bitrate MpsTranscodeTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Encoding format of frequency stream.When the outer parameter Container is mp3, the optional value is:libmp3lame.When the outer parameter Container is ogg or flac, the optional value is:flac.When the outer parameter Container is m4a, the optional value is:libfdk_aac.libmp3lame.ac3.When the outer parameter Container is mp4 or flv, the optional value is:libfdk_aac: more suitable for mp4.libmp3lame: more suitable for flv.When the outer parameter Container is hls, the optional value is:libfdk_aac.libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#codec MpsTranscodeTemplate#codec}
  */
  readonly codec: string;
  /**
  * Sampling rate of audio stream, optional value.32000.44100.48000.Unit: Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#sample_rate MpsTranscodeTemplate#sample_rate}
  */
  readonly sampleRate: number;
}

export function mpsTranscodeTemplateAudioTemplateToTerraform(struct?: MpsTranscodeTemplateAudioTemplateOutputReference | MpsTranscodeTemplateAudioTemplate): any {
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


export function mpsTranscodeTemplateAudioTemplateToHclTerraform(struct?: MpsTranscodeTemplateAudioTemplateOutputReference | MpsTranscodeTemplateAudioTemplate): any {
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

export class MpsTranscodeTemplateAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateAudioTemplate | undefined {
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

  public set internalValue(value: MpsTranscodeTemplateAudioTemplate | undefined) {
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
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: weak/strong.Default value: weak.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: weak/normal/strong.Default value: weak.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: weak/strong.Default value: weak.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance {
  /**
  * Intensity, value range: 0.0~1.0.Default value: 0.0.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#intensity MpsTranscodeTemplate#intensity}
  */
  readonly intensity?: number;
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intensity: cdktf.numberToTerraform(struct!.intensity),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intensity: {
      value: cdktf.numberToHclTerraform(struct!.intensity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intensity !== undefined) {
      hasAnyValues = true;
      internalValueResult.intensity = this._intensity;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intensity = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intensity = value.intensity;
      this._switch = value.switch;
    }
  }

  // intensity - computed: false, optional: true, required: false
  private _intensity?: number; 
  public get intensity() {
    return this.getNumberAttribute('intensity');
  }
  public set intensity(value: number) {
    this._intensity = value;
  }
  public resetIntensity() {
    this._intensity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intensityInput() {
    return this._intensity;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate {
  /**
  * Frame rate, value range: [0, 100], unit: Hz.Default value: 0.Note: For transcoding, this parameter will override the Fps inside the VideoTemplate.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#fps MpsTranscodeTemplate#fps}
  */
  readonly fps?: number;
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fps: cdktf.numberToTerraform(struct!.fps),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fps: {
      value: cdktf.numberToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fps = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fps = value.fps;
      this._switch = value.switch;
    }
  }

  // fps - computed: false, optional: true, required: false
  private _fps?: number; 
  public get fps() {
    return this.getNumberAttribute('fps');
  }
  public set fps(value: number) {
    this._fps = value;
  }
  public resetFps() {
    this._fps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: HDR10/HLG.Default value: HDR10.Note: The encoding method of video needs to be libx265.Note: Video encoding bit depth is 10.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: weak/normal/strong.Default value: weak.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance {
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value: normal.Default value: normal.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair {
  /**
  * Intensity, value range: 0.0~1.0.Default value: 0.0.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#intensity MpsTranscodeTemplate#intensity}
  */
  readonly intensity?: number;
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intensity: cdktf.numberToTerraform(struct!.intensity),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intensity: {
      value: cdktf.numberToHclTerraform(struct!.intensity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intensity !== undefined) {
      hasAnyValues = true;
      internalValueResult.intensity = this._intensity;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intensity = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intensity = value.intensity;
      this._switch = value.switch;
    }
  }

  // intensity - computed: false, optional: true, required: false
  private _intensity?: number; 
  public get intensity() {
    return this.getNumberAttribute('intensity');
  }
  public set intensity(value: number) {
    this._intensity = value;
  }
  public resetIntensity() {
    this._intensity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intensityInput() {
    return this._intensity;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance {
  /**
  * Intensity, value range: 0.0~1.0.Default value: 0.0.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#intensity MpsTranscodeTemplate#intensity}
  */
  readonly intensity?: number;
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intensity: cdktf.numberToTerraform(struct!.intensity),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intensity: {
      value: cdktf.numberToHclTerraform(struct!.intensity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intensity !== undefined) {
      hasAnyValues = true;
      internalValueResult.intensity = this._intensity;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intensity = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intensity = value.intensity;
      this._switch = value.switch;
    }
  }

  // intensity - computed: false, optional: true, required: false
  private _intensity?: number; 
  public get intensity() {
    return this.getNumberAttribute('intensity');
  }
  public set intensity(value: number) {
    this._intensity = value;
  }
  public resetIntensity() {
    this._intensity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intensityInput() {
    return this._intensity;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution {
  /**
  * Super resolution multiple, optional value:2: currently only supports 2x super resolution.Default value: 2.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#size MpsTranscodeTemplate#size}
  */
  readonly size?: number;
  /**
  * Capability configuration switch, optional value: ON/OFF.Default value: ON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#switch MpsTranscodeTemplate#switch}
  */
  readonly switch?: string;
  /**
  * Type, optional value:lq: super-resolution for low-definition video with more noise.hq: super resolution for high-definition video.Default value: lq.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type?: string;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._switch = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._switch = value.switch;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsTranscodeTemplateEnhanceConfigVideoEnhance {
  /**
  * artifact_repair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#artifact_repair MpsTranscodeTemplate#artifact_repair}
  */
  readonly artifactRepair?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair;
  /**
  * color_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#color_enhance MpsTranscodeTemplate#color_enhance}
  */
  readonly colorEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance;
  /**
  * denoise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#denoise MpsTranscodeTemplate#denoise}
  */
  readonly denoise?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise;
  /**
  * face_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#face_enhance MpsTranscodeTemplate#face_enhance}
  */
  readonly faceEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance;
  /**
  * frame_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#frame_rate MpsTranscodeTemplate#frame_rate}
  */
  readonly frameRate?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate;
  /**
  * hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#hdr MpsTranscodeTemplate#hdr}
  */
  readonly hdr?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr;
  /**
  * image_quality_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#image_quality_enhance MpsTranscodeTemplate#image_quality_enhance}
  */
  readonly imageQualityEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance;
  /**
  * low_light_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#low_light_enhance MpsTranscodeTemplate#low_light_enhance}
  */
  readonly lowLightEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance;
  /**
  * scratch_repair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#scratch_repair MpsTranscodeTemplate#scratch_repair}
  */
  readonly scratchRepair?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair;
  /**
  * sharp_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#sharp_enhance MpsTranscodeTemplate#sharp_enhance}
  */
  readonly sharpEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance;
  /**
  * super_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#super_resolution MpsTranscodeTemplate#super_resolution}
  */
  readonly superResolution?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution;
}

export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_repair: mpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairToTerraform(struct!.artifactRepair),
    color_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceToTerraform(struct!.colorEnhance),
    denoise: mpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseToTerraform(struct!.denoise),
    face_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceToTerraform(struct!.faceEnhance),
    frame_rate: mpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateToTerraform(struct!.frameRate),
    hdr: mpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrToTerraform(struct!.hdr),
    image_quality_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceToTerraform(struct!.imageQualityEnhance),
    low_light_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceToTerraform(struct!.lowLightEnhance),
    scratch_repair: mpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairToTerraform(struct!.scratchRepair),
    sharp_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceToTerraform(struct!.sharpEnhance),
    super_resolution: mpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionToTerraform(struct!.superResolution),
  }
}


export function mpsTranscodeTemplateEnhanceConfigVideoEnhanceToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigVideoEnhanceOutputReference | MpsTranscodeTemplateEnhanceConfigVideoEnhance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_repair: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairToHclTerraform(struct!.artifactRepair),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairList",
    },
    color_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceToHclTerraform(struct!.colorEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceList",
    },
    denoise: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseToHclTerraform(struct!.denoise),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseList",
    },
    face_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceToHclTerraform(struct!.faceEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceList",
    },
    frame_rate: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateToHclTerraform(struct!.frameRate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateList",
    },
    hdr: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrToHclTerraform(struct!.hdr),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrList",
    },
    image_quality_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceToHclTerraform(struct!.imageQualityEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceList",
    },
    low_light_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceToHclTerraform(struct!.lowLightEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceList",
    },
    scratch_repair: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairToHclTerraform(struct!.scratchRepair),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairList",
    },
    sharp_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceToHclTerraform(struct!.sharpEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceList",
    },
    super_resolution: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionToHclTerraform(struct!.superResolution),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigVideoEnhanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfigVideoEnhance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactRepair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactRepair = this._artifactRepair?.internalValue;
    }
    if (this._colorEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorEnhance = this._colorEnhance?.internalValue;
    }
    if (this._denoise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denoise = this._denoise?.internalValue;
    }
    if (this._faceEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceEnhance = this._faceEnhance?.internalValue;
    }
    if (this._frameRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRate = this._frameRate?.internalValue;
    }
    if (this._hdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr?.internalValue;
    }
    if (this._imageQualityEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageQualityEnhance = this._imageQualityEnhance?.internalValue;
    }
    if (this._lowLightEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLightEnhance = this._lowLightEnhance?.internalValue;
    }
    if (this._scratchRepair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scratchRepair = this._scratchRepair?.internalValue;
    }
    if (this._sharpEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharpEnhance = this._sharpEnhance?.internalValue;
    }
    if (this._superResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.superResolution = this._superResolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfigVideoEnhance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactRepair.internalValue = undefined;
      this._colorEnhance.internalValue = undefined;
      this._denoise.internalValue = undefined;
      this._faceEnhance.internalValue = undefined;
      this._frameRate.internalValue = undefined;
      this._hdr.internalValue = undefined;
      this._imageQualityEnhance.internalValue = undefined;
      this._lowLightEnhance.internalValue = undefined;
      this._scratchRepair.internalValue = undefined;
      this._sharpEnhance.internalValue = undefined;
      this._superResolution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactRepair.internalValue = value.artifactRepair;
      this._colorEnhance.internalValue = value.colorEnhance;
      this._denoise.internalValue = value.denoise;
      this._faceEnhance.internalValue = value.faceEnhance;
      this._frameRate.internalValue = value.frameRate;
      this._hdr.internalValue = value.hdr;
      this._imageQualityEnhance.internalValue = value.imageQualityEnhance;
      this._lowLightEnhance.internalValue = value.lowLightEnhance;
      this._scratchRepair.internalValue = value.scratchRepair;
      this._sharpEnhance.internalValue = value.sharpEnhance;
      this._superResolution.internalValue = value.superResolution;
    }
  }

  // artifact_repair - computed: false, optional: true, required: false
  private _artifactRepair = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepairOutputReference(this, "artifact_repair");
  public get artifactRepair() {
    return this._artifactRepair;
  }
  public putArtifactRepair(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceArtifactRepair) {
    this._artifactRepair.internalValue = value;
  }
  public resetArtifactRepair() {
    this._artifactRepair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactRepairInput() {
    return this._artifactRepair.internalValue;
  }

  // color_enhance - computed: false, optional: true, required: false
  private _colorEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhanceOutputReference(this, "color_enhance");
  public get colorEnhance() {
    return this._colorEnhance;
  }
  public putColorEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceColorEnhance) {
    this._colorEnhance.internalValue = value;
  }
  public resetColorEnhance() {
    this._colorEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorEnhanceInput() {
    return this._colorEnhance.internalValue;
  }

  // denoise - computed: false, optional: true, required: false
  private _denoise = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoiseOutputReference(this, "denoise");
  public get denoise() {
    return this._denoise;
  }
  public putDenoise(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceDenoise) {
    this._denoise.internalValue = value;
  }
  public resetDenoise() {
    this._denoise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denoiseInput() {
    return this._denoise.internalValue;
  }

  // face_enhance - computed: false, optional: true, required: false
  private _faceEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhanceOutputReference(this, "face_enhance");
  public get faceEnhance() {
    return this._faceEnhance;
  }
  public putFaceEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFaceEnhance) {
    this._faceEnhance.internalValue = value;
  }
  public resetFaceEnhance() {
    this._faceEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceEnhanceInput() {
    return this._faceEnhance.internalValue;
  }

  // frame_rate - computed: false, optional: true, required: false
  private _frameRate = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRateOutputReference(this, "frame_rate");
  public get frameRate() {
    return this._frameRate;
  }
  public putFrameRate(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceFrameRate) {
    this._frameRate.internalValue = value;
  }
  public resetFrameRate() {
    this._frameRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateInput() {
    return this._frameRate.internalValue;
  }

  // hdr - computed: false, optional: true, required: false
  private _hdr = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdrOutputReference(this, "hdr");
  public get hdr() {
    return this._hdr;
  }
  public putHdr(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceHdr) {
    this._hdr.internalValue = value;
  }
  public resetHdr() {
    this._hdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr.internalValue;
  }

  // image_quality_enhance - computed: false, optional: true, required: false
  private _imageQualityEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhanceOutputReference(this, "image_quality_enhance");
  public get imageQualityEnhance() {
    return this._imageQualityEnhance;
  }
  public putImageQualityEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceImageQualityEnhance) {
    this._imageQualityEnhance.internalValue = value;
  }
  public resetImageQualityEnhance() {
    this._imageQualityEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageQualityEnhanceInput() {
    return this._imageQualityEnhance.internalValue;
  }

  // low_light_enhance - computed: false, optional: true, required: false
  private _lowLightEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhanceOutputReference(this, "low_light_enhance");
  public get lowLightEnhance() {
    return this._lowLightEnhance;
  }
  public putLowLightEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceLowLightEnhance) {
    this._lowLightEnhance.internalValue = value;
  }
  public resetLowLightEnhance() {
    this._lowLightEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLightEnhanceInput() {
    return this._lowLightEnhance.internalValue;
  }

  // scratch_repair - computed: false, optional: true, required: false
  private _scratchRepair = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepairOutputReference(this, "scratch_repair");
  public get scratchRepair() {
    return this._scratchRepair;
  }
  public putScratchRepair(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceScratchRepair) {
    this._scratchRepair.internalValue = value;
  }
  public resetScratchRepair() {
    this._scratchRepair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scratchRepairInput() {
    return this._scratchRepair.internalValue;
  }

  // sharp_enhance - computed: false, optional: true, required: false
  private _sharpEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhanceOutputReference(this, "sharp_enhance");
  public get sharpEnhance() {
    return this._sharpEnhance;
  }
  public putSharpEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSharpEnhance) {
    this._sharpEnhance.internalValue = value;
  }
  public resetSharpEnhance() {
    this._sharpEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharpEnhanceInput() {
    return this._sharpEnhance.internalValue;
  }

  // super_resolution - computed: false, optional: true, required: false
  private _superResolution = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolutionOutputReference(this, "super_resolution");
  public get superResolution() {
    return this._superResolution;
  }
  public putSuperResolution(value: MpsTranscodeTemplateEnhanceConfigVideoEnhanceSuperResolution) {
    this._superResolution.internalValue = value;
  }
  public resetSuperResolution() {
    this._superResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superResolutionInput() {
    return this._superResolution.internalValue;
  }
}
export interface MpsTranscodeTemplateEnhanceConfig {
  /**
  * video_enhance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#video_enhance MpsTranscodeTemplate#video_enhance}
  */
  readonly videoEnhance?: MpsTranscodeTemplateEnhanceConfigVideoEnhance;
}

export function mpsTranscodeTemplateEnhanceConfigToTerraform(struct?: MpsTranscodeTemplateEnhanceConfigOutputReference | MpsTranscodeTemplateEnhanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    video_enhance: mpsTranscodeTemplateEnhanceConfigVideoEnhanceToTerraform(struct!.videoEnhance),
  }
}


export function mpsTranscodeTemplateEnhanceConfigToHclTerraform(struct?: MpsTranscodeTemplateEnhanceConfigOutputReference | MpsTranscodeTemplateEnhanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    video_enhance: {
      value: mpsTranscodeTemplateEnhanceConfigVideoEnhanceToHclTerraform(struct!.videoEnhance),
      isBlock: true,
      type: "list",
      storageClassType: "MpsTranscodeTemplateEnhanceConfigVideoEnhanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsTranscodeTemplateEnhanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateEnhanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._videoEnhance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoEnhance = this._videoEnhance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsTranscodeTemplateEnhanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._videoEnhance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._videoEnhance.internalValue = value.videoEnhance;
    }
  }

  // video_enhance - computed: false, optional: true, required: false
  private _videoEnhance = new MpsTranscodeTemplateEnhanceConfigVideoEnhanceOutputReference(this, "video_enhance");
  public get videoEnhance() {
    return this._videoEnhance;
  }
  public putVideoEnhance(value: MpsTranscodeTemplateEnhanceConfigVideoEnhance) {
    this._videoEnhance.internalValue = value;
  }
  public resetVideoEnhance() {
    this._videoEnhance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoEnhanceInput() {
    return this._videoEnhance.internalValue;
  }
}
export interface MpsTranscodeTemplateTehdConfig {
  /**
  * The upper limit of the video bit rate, which is valid when the Type specifies the ultra-fast HD type.Do not fill in or fill in 0 means that there is no upper limit on the video bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#max_video_bitrate MpsTranscodeTemplate#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * Extremely high-definition type, optional value:TEHD-100: Extreme HD-100.Not filling means that the ultra-fast high-definition is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#type MpsTranscodeTemplate#type}
  */
  readonly type: string;
}

export function mpsTranscodeTemplateTehdConfigToTerraform(struct?: MpsTranscodeTemplateTehdConfigOutputReference | MpsTranscodeTemplateTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsTranscodeTemplateTehdConfigToHclTerraform(struct?: MpsTranscodeTemplateTehdConfigOutputReference | MpsTranscodeTemplateTehdConfig): any {
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

export class MpsTranscodeTemplateTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateTehdConfig | undefined {
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

  public set internalValue(value: MpsTranscodeTemplateTehdConfig | undefined) {
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
export interface MpsTranscodeTemplateVideoTemplate {
  /**
  * Bit rate of the video stream, value range: 0 and [128, 35000], unit: kbps.When the value is 0, it means that the video bit rate is consistent with the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#bitrate MpsTranscodeTemplate#bitrate}
  */
  readonly bitrate: number;
  /**
  * Encoding format of the video stream, optional value:libx264: H.264 encoding.libx265: H.265 encoding.av1: AOMedia Video 1 encoding.Note: Currently H.265 encoding must specify a resolution, and it needs to be within 640*480.Note: av1 encoded containers currently only support mp4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#codec MpsTranscodeTemplate#codec}
  */
  readonly codec: string;
  /**
  * Filling method, when the aspect ratio of the video stream configuration is inconsistent with the aspect ratio of the original video, the processing method for transcoding is filling. Optional filling method:stretch: Stretch, stretch each frame to fill the entire screen, which may cause the transcoded video to be squashed or stretched.black: Leave black, keep the aspect ratio of the video unchanged, and fill the rest of the edge with black.white: Leave blank, keep the aspect ratio of the video unchanged, and fill the rest of the edge with white.gauss: Gaussian blur, keep the aspect ratio of the video unchanged, and fill the rest of the edge with Gaussian blur.Default: black.Note: Adaptive stream only supports stretch, black.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#fill_type MpsTranscodeTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate, value range: [0, 100], unit: Hz.When the value is 0, it means that the frame rate is consistent with the original video.Note: The value range for adaptive code rate is [0, 60].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#fps MpsTranscodeTemplate#fps}
  */
  readonly fps: number;
  /**
  * The interval between keyframe I frames, value range: 0 and [1, 100000], unit: number of frames.When filling 0 or not filling, the system will automatically set the gop length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#gop MpsTranscodeTemplate#gop}
  */
  readonly gop?: number;
  /**
  * The maximum value of video stream height (or short side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#height MpsTranscodeTemplate#height}
  */
  readonly height?: number;
  /**
  * Adaptive resolution, optional values:```open: open, at this time, Width represents the long side of the video, Height represents the short side of the video.close: close, at this time, Width represents the width of the video, and Height represents the height of the video.Default: open.Note: In adaptive mode, Width cannot be smaller than Height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#resolution_adaptive MpsTranscodeTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * Video constant bit rate control factor, the value range is [1, 51].If this parameter is specified, the code rate control method of CRF will be used for transcoding (the video code rate will no longer take effect).If there is no special requirement, it is not recommended to specify this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#vcrf MpsTranscodeTemplate#vcrf}
  */
  readonly vcrf?: number;
  /**
  * The maximum value of video stream width (or long side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#width MpsTranscodeTemplate#width}
  */
  readonly width?: number;
}

export function mpsTranscodeTemplateVideoTemplateToTerraform(struct?: MpsTranscodeTemplateVideoTemplateOutputReference | MpsTranscodeTemplateVideoTemplate): any {
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


export function mpsTranscodeTemplateVideoTemplateToHclTerraform(struct?: MpsTranscodeTemplateVideoTemplateOutputReference | MpsTranscodeTemplateVideoTemplate): any {
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

export class MpsTranscodeTemplateVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsTranscodeTemplateVideoTemplate | undefined {
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

  public set internalValue(value: MpsTranscodeTemplateVideoTemplate | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template tencentcloud_mps_transcode_template}
*/
export class MpsTranscodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_transcode_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsTranscodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsTranscodeTemplate to import
  * @param importFromId The id of the existing MpsTranscodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsTranscodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_transcode_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_transcode_template tencentcloud_mps_transcode_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsTranscodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MpsTranscodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_transcode_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._audioTemplate.internalValue = config.audioTemplate;
    this._enhanceConfig.internalValue = config.enhanceConfig;
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

  // audio_template - computed: false, optional: true, required: false
  private _audioTemplate = new MpsTranscodeTemplateAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: MpsTranscodeTemplateAudioTemplate) {
    this._audioTemplate.internalValue = value;
  }
  public resetAudioTemplate() {
    this._audioTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTemplateInput() {
    return this._audioTemplate.internalValue;
  }

  // enhance_config - computed: false, optional: true, required: false
  private _enhanceConfig = new MpsTranscodeTemplateEnhanceConfigOutputReference(this, "enhance_config");
  public get enhanceConfig() {
    return this._enhanceConfig;
  }
  public putEnhanceConfig(value: MpsTranscodeTemplateEnhanceConfig) {
    this._enhanceConfig.internalValue = value;
  }
  public resetEnhanceConfig() {
    this._enhanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceConfigInput() {
    return this._enhanceConfig.internalValue;
  }

  // tehd_config - computed: false, optional: true, required: false
  private _tehdConfig = new MpsTranscodeTemplateTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: MpsTranscodeTemplateTehdConfig) {
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
  private _videoTemplate = new MpsTranscodeTemplateVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: MpsTranscodeTemplateVideoTemplate) {
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
      audio_template: mpsTranscodeTemplateAudioTemplateToTerraform(this._audioTemplate.internalValue),
      enhance_config: mpsTranscodeTemplateEnhanceConfigToTerraform(this._enhanceConfig.internalValue),
      tehd_config: mpsTranscodeTemplateTehdConfigToTerraform(this._tehdConfig.internalValue),
      video_template: mpsTranscodeTemplateVideoTemplateToTerraform(this._videoTemplate.internalValue),
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
      audio_template: {
        value: mpsTranscodeTemplateAudioTemplateToHclTerraform(this._audioTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsTranscodeTemplateAudioTemplateList",
      },
      enhance_config: {
        value: mpsTranscodeTemplateEnhanceConfigToHclTerraform(this._enhanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsTranscodeTemplateEnhanceConfigList",
      },
      tehd_config: {
        value: mpsTranscodeTemplateTehdConfigToHclTerraform(this._tehdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsTranscodeTemplateTehdConfigList",
      },
      video_template: {
        value: mpsTranscodeTemplateVideoTemplateToHclTerraform(this._videoTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsTranscodeTemplateVideoTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
