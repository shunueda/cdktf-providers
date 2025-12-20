// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaVoiceSeparateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Output audio IsAudio: output human voice, IsBackground: output background sound, AudioAndBackground: output vocal and background sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#audio_mode CiMediaVoiceSeparateTemplate#audio_mode}
  */
  readonly audioMode: string;
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#bucket CiMediaVoiceSeparateTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#id CiMediaVoiceSeparateTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#name CiMediaVoiceSeparateTemplate#name}
  */
  readonly name: string;
  /**
  * audio_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#audio_config CiMediaVoiceSeparateTemplate#audio_config}
  */
  readonly audioConfig: CiMediaVoiceSeparateTemplateAudioConfig;
}
export interface CiMediaVoiceSeparateTemplateAudioConfig {
  /**
  * Original audio bit rate, unit: Kbps, Value range: [8, 1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#bitrate CiMediaVoiceSeparateTemplate#bitrate}
  */
  readonly bitrate?: string;
  /**
  * number of channels- When Codec is set to aac/flac, support 1, 2, 4, 5, 6, 8- When Codec is set to mp3, support 1, 2- When Codec is set to amr, only 1 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#channels CiMediaVoiceSeparateTemplate#channels}
  */
  readonly channels?: string;
  /**
  * Codec format, value aac, mp3, flac, amr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#codec CiMediaVoiceSeparateTemplate#codec}
  */
  readonly codec: string;
  /**
  * Sampling Rate- 1: Unit: Hz- 2: Optional 8000, 11025, 22050, 32000, 44100, 48000, 96000- 3: When Codec is set to aac/flac, 8000 is not supported- 4: When Codec is set to mp3, 8000 and 96000 are not supported- 5: When Codec is set to amr, only 8000 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#samplerate CiMediaVoiceSeparateTemplate#samplerate}
  */
  readonly samplerate?: string;
}

export function ciMediaVoiceSeparateTemplateAudioConfigToTerraform(struct?: CiMediaVoiceSeparateTemplateAudioConfigOutputReference | CiMediaVoiceSeparateTemplateAudioConfig): any {
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


export function ciMediaVoiceSeparateTemplateAudioConfigToHclTerraform(struct?: CiMediaVoiceSeparateTemplateAudioConfigOutputReference | CiMediaVoiceSeparateTemplateAudioConfig): any {
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

export class CiMediaVoiceSeparateTemplateAudioConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaVoiceSeparateTemplateAudioConfig | undefined {
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

  public set internalValue(value: CiMediaVoiceSeparateTemplateAudioConfig | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template tencentcloud_ci_media_voice_separate_template}
*/
export class CiMediaVoiceSeparateTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_voice_separate_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaVoiceSeparateTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaVoiceSeparateTemplate to import
  * @param importFromId The id of the existing CiMediaVoiceSeparateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaVoiceSeparateTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_voice_separate_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/ci_media_voice_separate_template tencentcloud_ci_media_voice_separate_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaVoiceSeparateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaVoiceSeparateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_voice_separate_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audioMode = config.audioMode;
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._audioConfig.internalValue = config.audioConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_mode - computed: false, optional: false, required: true
  private _audioMode?: string; 
  public get audioMode() {
    return this.getStringAttribute('audio_mode');
  }
  public set audioMode(value: string) {
    this._audioMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioModeInput() {
    return this._audioMode;
  }

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

  // audio_config - computed: false, optional: false, required: true
  private _audioConfig = new CiMediaVoiceSeparateTemplateAudioConfigOutputReference(this, "audio_config");
  public get audioConfig() {
    return this._audioConfig;
  }
  public putAudioConfig(value: CiMediaVoiceSeparateTemplateAudioConfig) {
    this._audioConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioConfigInput() {
    return this._audioConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audio_mode: cdktf.stringToTerraform(this._audioMode),
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      audio_config: ciMediaVoiceSeparateTemplateAudioConfigToTerraform(this._audioConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audio_mode: {
        value: cdktf.stringToHclTerraform(this._audioMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      audio_config: {
        value: ciMediaVoiceSeparateTemplateAudioConfigToHclTerraform(this._audioConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaVoiceSeparateTemplateAudioConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
