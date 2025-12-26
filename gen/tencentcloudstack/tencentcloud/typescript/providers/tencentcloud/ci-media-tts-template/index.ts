// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaTtsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#bucket CiMediaTtsTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Audio format, default wav (synchronous)/pcm (asynchronous, wav, mp3, pcm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#codec CiMediaTtsTemplate#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#id CiMediaTtsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Processing mode, default value Asyc, Asyc (asynchronous composition), Sync (synchronous composition), When Asyc is selected, the codec only supports pcm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#mode CiMediaTtsTemplate#mode}
  */
  readonly mode?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#name CiMediaTtsTemplate#name}
  */
  readonly name: string;
  /**
  * Speech rate, the default value is 100, [50,200].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#speed CiMediaTtsTemplate#speed}
  */
  readonly speed?: string;
  /**
  * Timbre, the default value is ruxue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#voice_type CiMediaTtsTemplate#voice_type}
  */
  readonly voiceType?: string;
  /**
  * Volume, default value 0, [-10,10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#volume CiMediaTtsTemplate#volume}
  */
  readonly volume?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template tencentcloud_ci_media_tts_template}
*/
export class CiMediaTtsTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_tts_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaTtsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaTtsTemplate to import
  * @param importFromId The id of the existing CiMediaTtsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaTtsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_tts_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ci_media_tts_template tencentcloud_ci_media_tts_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaTtsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaTtsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_tts_template',
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
    this._codec = config.codec;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._speed = config.speed;
    this._voiceType = config.voiceType;
    this._volume = config.volume;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // voice_type - computed: false, optional: true, required: false
  private _voiceType?: string; 
  public get voiceType() {
    return this.getStringAttribute('voice_type');
  }
  public set voiceType(value: string) {
    this._voiceType = value;
  }
  public resetVoiceType() {
    this._voiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceTypeInput() {
    return this._voiceType;
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      codec: cdktf.stringToTerraform(this._codec),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      speed: cdktf.stringToTerraform(this._speed),
      voice_type: cdktf.stringToTerraform(this._voiceType),
      volume: cdktf.stringToTerraform(this._volume),
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
      codec: {
        value: cdktf.stringToHclTerraform(this._codec),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_type: {
        value: cdktf.stringToHclTerraform(this._voiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume: {
        value: cdktf.stringToHclTerraform(this._volume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
