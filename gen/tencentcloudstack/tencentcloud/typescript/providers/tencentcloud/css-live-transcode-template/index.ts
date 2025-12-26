// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssLiveTranscodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * default aac, not support now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#acodec CssLiveTranscodeTemplate#acodec}
  */
  readonly acodec?: string;
  /**
  * high speed mode adapt bitrate, support 0 - 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#adapt_bitrate_percent CssLiveTranscodeTemplate#adapt_bitrate_percent}
  */
  readonly adaptBitratePercent?: number;
  /**
  * enable high speed mode, default 0, 1 for enable, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#ai_trans_code CssLiveTranscodeTemplate#ai_trans_code}
  */
  readonly aiTransCode?: number;
  /**
  * default 0, range 0 - 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#audio_bitrate CssLiveTranscodeTemplate#audio_bitrate}
  */
  readonly audioBitrate?: number;
  /**
  * base on origin bitrate if origin bitrate is lower than the setting bitrate. default 0, 1 for yes, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#bitrate_to_orig CssLiveTranscodeTemplate#bitrate_to_orig}
  */
  readonly bitrateToOrig?: number;
  /**
  * template desc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#description CssLiveTranscodeTemplate#description}
  */
  readonly description?: string;
  /**
  * DRM tracks, support AUDIO/SD/HD/UHD1/UHD2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#drm_tracks CssLiveTranscodeTemplate#drm_tracks}
  */
  readonly drmTracks?: string;
  /**
  * DRM type, support fairplay/normalaes/widevine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#drm_type CssLiveTranscodeTemplate#drm_type}
  */
  readonly drmType?: string;
  /**
  * video fps, default 0, range 0 - 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#fps CssLiveTranscodeTemplate#fps}
  */
  readonly fps?: number;
  /**
  * base on origin fps if origin fps is lower than the setting fps. default 0, 1 for yes, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#fps_to_orig CssLiveTranscodeTemplate#fps_to_orig}
  */
  readonly fpsToOrig?: number;
  /**
  * gop of the video, second, default origin of the video, range 2 - 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#gop CssLiveTranscodeTemplate#gop}
  */
  readonly gop?: number;
  /**
  * template height, default 0, range 0 - 3000, must be pow of 2, needed while AiTransCode = 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#height CssLiveTranscodeTemplate#height}
  */
  readonly height?: number;
  /**
  * base on origin height if origin height is lower than the setting height. default 0, 1 for yes, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#height_to_orig CssLiveTranscodeTemplate#height_to_orig}
  */
  readonly heightToOrig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#id CssLiveTranscodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * keep audio or not, default 1 for yes, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#need_audio CssLiveTranscodeTemplate#need_audio}
  */
  readonly needAudio?: number;
  /**
  * keep video or not, default 1 for yes, 0 for no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#need_video CssLiveTranscodeTemplate#need_video}
  */
  readonly needVideo?: number;
  /**
  * quality of the video, default baseline, support baseline/main/high.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#profile CssLiveTranscodeTemplate#profile}
  */
  readonly profile?: string;
  /**
  * roate degree, default 0, support 0/90/180/270.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#rotate CssLiveTranscodeTemplate#rotate}
  */
  readonly rotate?: number;
  /**
  * let the short edge as the height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#short_edge_as_height CssLiveTranscodeTemplate#short_edge_as_height}
  */
  readonly shortEdgeAsHeight?: number;
  /**
  * template name, only support 0-9 and a-z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#template_name CssLiveTranscodeTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * video codec, default origin, support h264/h265/origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#vcodec CssLiveTranscodeTemplate#vcodec}
  */
  readonly vcodec?: string;
  /**
  * video bitrate, 0 for origin, range 0kbps - 8000kbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#video_bitrate CssLiveTranscodeTemplate#video_bitrate}
  */
  readonly videoBitrate: number;
  /**
  * template width, default 0, range 0 - 3000, must be pow of 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#width CssLiveTranscodeTemplate#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template tencentcloud_css_live_transcode_template}
*/
export class CssLiveTranscodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_live_transcode_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssLiveTranscodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssLiveTranscodeTemplate to import
  * @param importFromId The id of the existing CssLiveTranscodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssLiveTranscodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_live_transcode_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_live_transcode_template tencentcloud_css_live_transcode_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssLiveTranscodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CssLiveTranscodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_live_transcode_template',
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
    this._acodec = config.acodec;
    this._adaptBitratePercent = config.adaptBitratePercent;
    this._aiTransCode = config.aiTransCode;
    this._audioBitrate = config.audioBitrate;
    this._bitrateToOrig = config.bitrateToOrig;
    this._description = config.description;
    this._drmTracks = config.drmTracks;
    this._drmType = config.drmType;
    this._fps = config.fps;
    this._fpsToOrig = config.fpsToOrig;
    this._gop = config.gop;
    this._height = config.height;
    this._heightToOrig = config.heightToOrig;
    this._id = config.id;
    this._needAudio = config.needAudio;
    this._needVideo = config.needVideo;
    this._profile = config.profile;
    this._rotate = config.rotate;
    this._shortEdgeAsHeight = config.shortEdgeAsHeight;
    this._templateName = config.templateName;
    this._vcodec = config.vcodec;
    this._videoBitrate = config.videoBitrate;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acodec - computed: false, optional: true, required: false
  private _acodec?: string; 
  public get acodec() {
    return this.getStringAttribute('acodec');
  }
  public set acodec(value: string) {
    this._acodec = value;
  }
  public resetAcodec() {
    this._acodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acodecInput() {
    return this._acodec;
  }

  // adapt_bitrate_percent - computed: false, optional: true, required: false
  private _adaptBitratePercent?: number; 
  public get adaptBitratePercent() {
    return this.getNumberAttribute('adapt_bitrate_percent');
  }
  public set adaptBitratePercent(value: number) {
    this._adaptBitratePercent = value;
  }
  public resetAdaptBitratePercent() {
    this._adaptBitratePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptBitratePercentInput() {
    return this._adaptBitratePercent;
  }

  // ai_trans_code - computed: false, optional: true, required: false
  private _aiTransCode?: number; 
  public get aiTransCode() {
    return this.getNumberAttribute('ai_trans_code');
  }
  public set aiTransCode(value: number) {
    this._aiTransCode = value;
  }
  public resetAiTransCode() {
    this._aiTransCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiTransCodeInput() {
    return this._aiTransCode;
  }

  // audio_bitrate - computed: false, optional: true, required: false
  private _audioBitrate?: number; 
  public get audioBitrate() {
    return this.getNumberAttribute('audio_bitrate');
  }
  public set audioBitrate(value: number) {
    this._audioBitrate = value;
  }
  public resetAudioBitrate() {
    this._audioBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioBitrateInput() {
    return this._audioBitrate;
  }

  // bitrate_to_orig - computed: false, optional: true, required: false
  private _bitrateToOrig?: number; 
  public get bitrateToOrig() {
    return this.getNumberAttribute('bitrate_to_orig');
  }
  public set bitrateToOrig(value: number) {
    this._bitrateToOrig = value;
  }
  public resetBitrateToOrig() {
    this._bitrateToOrig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateToOrigInput() {
    return this._bitrateToOrig;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // drm_tracks - computed: false, optional: true, required: false
  private _drmTracks?: string; 
  public get drmTracks() {
    return this.getStringAttribute('drm_tracks');
  }
  public set drmTracks(value: string) {
    this._drmTracks = value;
  }
  public resetDrmTracks() {
    this._drmTracks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmTracksInput() {
    return this._drmTracks;
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

  // fps_to_orig - computed: false, optional: true, required: false
  private _fpsToOrig?: number; 
  public get fpsToOrig() {
    return this.getNumberAttribute('fps_to_orig');
  }
  public set fpsToOrig(value: number) {
    this._fpsToOrig = value;
  }
  public resetFpsToOrig() {
    this._fpsToOrig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsToOrigInput() {
    return this._fpsToOrig;
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

  // height_to_orig - computed: false, optional: true, required: false
  private _heightToOrig?: number; 
  public get heightToOrig() {
    return this.getNumberAttribute('height_to_orig');
  }
  public set heightToOrig(value: number) {
    this._heightToOrig = value;
  }
  public resetHeightToOrig() {
    this._heightToOrig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightToOrigInput() {
    return this._heightToOrig;
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

  // need_audio - computed: false, optional: true, required: false
  private _needAudio?: number; 
  public get needAudio() {
    return this.getNumberAttribute('need_audio');
  }
  public set needAudio(value: number) {
    this._needAudio = value;
  }
  public resetNeedAudio() {
    this._needAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needAudioInput() {
    return this._needAudio;
  }

  // need_video - computed: false, optional: true, required: false
  private _needVideo?: number; 
  public get needVideo() {
    return this.getNumberAttribute('need_video');
  }
  public set needVideo(value: number) {
    this._needVideo = value;
  }
  public resetNeedVideo() {
    this._needVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needVideoInput() {
    return this._needVideo;
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

  // rotate - computed: false, optional: true, required: false
  private _rotate?: number; 
  public get rotate() {
    return this.getNumberAttribute('rotate');
  }
  public set rotate(value: number) {
    this._rotate = value;
  }
  public resetRotate() {
    this._rotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate;
  }

  // short_edge_as_height - computed: false, optional: true, required: false
  private _shortEdgeAsHeight?: number; 
  public get shortEdgeAsHeight() {
    return this.getNumberAttribute('short_edge_as_height');
  }
  public set shortEdgeAsHeight(value: number) {
    this._shortEdgeAsHeight = value;
  }
  public resetShortEdgeAsHeight() {
    this._shortEdgeAsHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortEdgeAsHeightInput() {
    return this._shortEdgeAsHeight;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vcodec - computed: false, optional: true, required: false
  private _vcodec?: string; 
  public get vcodec() {
    return this.getStringAttribute('vcodec');
  }
  public set vcodec(value: string) {
    this._vcodec = value;
  }
  public resetVcodec() {
    this._vcodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcodecInput() {
    return this._vcodec;
  }

  // video_bitrate - computed: false, optional: false, required: true
  private _videoBitrate?: number; 
  public get videoBitrate() {
    return this.getNumberAttribute('video_bitrate');
  }
  public set videoBitrate(value: number) {
    this._videoBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoBitrateInput() {
    return this._videoBitrate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acodec: cdktf.stringToTerraform(this._acodec),
      adapt_bitrate_percent: cdktf.numberToTerraform(this._adaptBitratePercent),
      ai_trans_code: cdktf.numberToTerraform(this._aiTransCode),
      audio_bitrate: cdktf.numberToTerraform(this._audioBitrate),
      bitrate_to_orig: cdktf.numberToTerraform(this._bitrateToOrig),
      description: cdktf.stringToTerraform(this._description),
      drm_tracks: cdktf.stringToTerraform(this._drmTracks),
      drm_type: cdktf.stringToTerraform(this._drmType),
      fps: cdktf.numberToTerraform(this._fps),
      fps_to_orig: cdktf.numberToTerraform(this._fpsToOrig),
      gop: cdktf.numberToTerraform(this._gop),
      height: cdktf.numberToTerraform(this._height),
      height_to_orig: cdktf.numberToTerraform(this._heightToOrig),
      id: cdktf.stringToTerraform(this._id),
      need_audio: cdktf.numberToTerraform(this._needAudio),
      need_video: cdktf.numberToTerraform(this._needVideo),
      profile: cdktf.stringToTerraform(this._profile),
      rotate: cdktf.numberToTerraform(this._rotate),
      short_edge_as_height: cdktf.numberToTerraform(this._shortEdgeAsHeight),
      template_name: cdktf.stringToTerraform(this._templateName),
      vcodec: cdktf.stringToTerraform(this._vcodec),
      video_bitrate: cdktf.numberToTerraform(this._videoBitrate),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acodec: {
        value: cdktf.stringToHclTerraform(this._acodec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adapt_bitrate_percent: {
        value: cdktf.numberToHclTerraform(this._adaptBitratePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ai_trans_code: {
        value: cdktf.numberToHclTerraform(this._aiTransCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audio_bitrate: {
        value: cdktf.numberToHclTerraform(this._audioBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_to_orig: {
        value: cdktf.numberToHclTerraform(this._bitrateToOrig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drm_tracks: {
        value: cdktf.stringToHclTerraform(this._drmTracks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drm_type: {
        value: cdktf.stringToHclTerraform(this._drmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fps: {
        value: cdktf.numberToHclTerraform(this._fps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fps_to_orig: {
        value: cdktf.numberToHclTerraform(this._fpsToOrig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gop: {
        value: cdktf.numberToHclTerraform(this._gop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      height_to_orig: {
        value: cdktf.numberToHclTerraform(this._heightToOrig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_audio: {
        value: cdktf.numberToHclTerraform(this._needAudio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      need_video: {
        value: cdktf.numberToHclTerraform(this._needVideo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate: {
        value: cdktf.numberToHclTerraform(this._rotate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short_edge_as_height: {
        value: cdktf.numberToHclTerraform(this._shortEdgeAsHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcodec: {
        value: cdktf.stringToHclTerraform(this._vcodec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_bitrate: {
        value: cdktf.numberToHclTerraform(this._videoBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
