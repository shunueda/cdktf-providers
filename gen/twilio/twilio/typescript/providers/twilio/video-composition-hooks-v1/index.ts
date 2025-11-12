// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VideoCompositionHooksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#audio_sources VideoCompositionHooksV1#audio_sources}
  */
  readonly audioSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#audio_sources_excluded VideoCompositionHooksV1#audio_sources_excluded}
  */
  readonly audioSourcesExcluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#enabled VideoCompositionHooksV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#format VideoCompositionHooksV1#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#friendly_name VideoCompositionHooksV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#id VideoCompositionHooksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#resolution VideoCompositionHooksV1#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#status_callback VideoCompositionHooksV1#status_callback}
  */
  readonly statusCallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#status_callback_method VideoCompositionHooksV1#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#trim VideoCompositionHooksV1#trim}
  */
  readonly trim?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#video_layout VideoCompositionHooksV1#video_layout}
  */
  readonly videoLayout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1 twilio_video_composition_hooks_v1}
*/
export class VideoCompositionHooksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_video_composition_hooks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VideoCompositionHooksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VideoCompositionHooksV1 to import
  * @param importFromId The id of the existing VideoCompositionHooksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VideoCompositionHooksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_video_composition_hooks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/video_composition_hooks_v1 twilio_video_composition_hooks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VideoCompositionHooksV1Config
  */
  public constructor(scope: Construct, id: string, config: VideoCompositionHooksV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_video_composition_hooks_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audioSources = config.audioSources;
    this._audioSourcesExcluded = config.audioSourcesExcluded;
    this._enabled = config.enabled;
    this._format = config.format;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._resolution = config.resolution;
    this._statusCallback = config.statusCallback;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._trim = config.trim;
    this._videoLayout = config.videoLayout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_sources - computed: true, optional: true, required: false
  private _audioSources?: string[]; 
  public get audioSources() {
    return this.getListAttribute('audio_sources');
  }
  public set audioSources(value: string[]) {
    this._audioSources = value;
  }
  public resetAudioSources() {
    this._audioSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSourcesInput() {
    return this._audioSources;
  }

  // audio_sources_excluded - computed: true, optional: true, required: false
  private _audioSourcesExcluded?: string[]; 
  public get audioSourcesExcluded() {
    return this.getListAttribute('audio_sources_excluded');
  }
  public set audioSourcesExcluded(value: string[]) {
    this._audioSourcesExcluded = value;
  }
  public resetAudioSourcesExcluded() {
    this._audioSourcesExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSourcesExcludedInput() {
    return this._audioSourcesExcluded;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // resolution - computed: true, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // status_callback - computed: true, optional: true, required: false
  private _statusCallback?: string; 
  public get statusCallback() {
    return this.getStringAttribute('status_callback');
  }
  public set statusCallback(value: string) {
    this._statusCallback = value;
  }
  public resetStatusCallback() {
    this._statusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackInput() {
    return this._statusCallback;
  }

  // status_callback_method - computed: true, optional: true, required: false
  private _statusCallbackMethod?: string; 
  public get statusCallbackMethod() {
    return this.getStringAttribute('status_callback_method');
  }
  public set statusCallbackMethod(value: string) {
    this._statusCallbackMethod = value;
  }
  public resetStatusCallbackMethod() {
    this._statusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackMethodInput() {
    return this._statusCallbackMethod;
  }

  // trim - computed: true, optional: true, required: false
  private _trim?: boolean | cdktf.IResolvable; 
  public get trim() {
    return this.getBooleanAttribute('trim');
  }
  public set trim(value: boolean | cdktf.IResolvable) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
  }

  // video_layout - computed: true, optional: true, required: false
  private _videoLayout?: string; 
  public get videoLayout() {
    return this.getStringAttribute('video_layout');
  }
  public set videoLayout(value: string) {
    this._videoLayout = value;
  }
  public resetVideoLayout() {
    this._videoLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoLayoutInput() {
    return this._videoLayout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audio_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audioSources),
      audio_sources_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audioSourcesExcluded),
      enabled: cdktf.booleanToTerraform(this._enabled),
      format: cdktf.stringToTerraform(this._format),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      resolution: cdktf.stringToTerraform(this._resolution),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      trim: cdktf.booleanToTerraform(this._trim),
      video_layout: cdktf.stringToTerraform(this._videoLayout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audio_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audioSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audio_sources_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audioSourcesExcluded),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback: {
        value: cdktf.stringToHclTerraform(this._statusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback_method: {
        value: cdktf.stringToHclTerraform(this._statusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim: {
        value: cdktf.booleanToHclTerraform(this._trim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      video_layout: {
        value: cdktf.stringToHclTerraform(this._videoLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
