// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamLibraryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bitrate used for encoding 1080p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_1080p StreamLibrary#bitrate_1080p}
  */
  readonly bitrate1080P?: number;
  /**
  * The bitrate used for encoding 1440p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_1440p StreamLibrary#bitrate_1440p}
  */
  readonly bitrate1440P?: number;
  /**
  * The bitrate used for encoding 2160p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_2160p StreamLibrary#bitrate_2160p}
  */
  readonly bitrate2160P?: number;
  /**
  * The bitrate used for encoding 240p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_240p StreamLibrary#bitrate_240p}
  */
  readonly bitrate240P?: number;
  /**
  * The bitrate used for encoding 360p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_360p StreamLibrary#bitrate_360p}
  */
  readonly bitrate360P?: number;
  /**
  * The bitrate used for encoding 480p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_480p StreamLibrary#bitrate_480p}
  */
  readonly bitrate480P?: number;
  /**
  * The bitrate used for encoding 720p videos, in kilobits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#bitrate_720p StreamLibrary#bitrate_720p}
  */
  readonly bitrate720P?: number;
  /**
  * Indicates whether CDN token authentication is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#cdn_token_authentication_required StreamLibrary#cdn_token_authentication_required}
  */
  readonly cdnTokenAuthenticationRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether content tagging is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#content_tagging_enabled StreamLibrary#content_tagging_enabled}
  */
  readonly contentTaggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines direct play URLs are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#direct_play_enabled StreamLibrary#direct_play_enabled}
  */
  readonly directPlayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the requests without a referrer are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#direct_url_file_access_blocked StreamLibrary#direct_url_file_access_blocked}
  */
  readonly directUrlFileAccessBlocked?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the MediaCage basic DRM is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#drm_mediacage_basic_enabled StreamLibrary#drm_mediacage_basic_enabled}
  */
  readonly drmMediacageBasicEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Early-Play feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#early_play_enabled StreamLibrary#early_play_enabled}
  */
  readonly earlyPlayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Options: `Free`, `Premium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#encoding_tier StreamLibrary#encoding_tier}
  */
  readonly encodingTier?: string;
  /**
  * Indicates whether Just-In-Time Encoding is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#jit_encoding StreamLibrary#jit_encoding}
  */
  readonly jitEncoding?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the MP4 fallback feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#mp4_fallback_enabled StreamLibrary#mp4_fallback_enabled}
  */
  readonly mp4FallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether multiple output audio track support is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#multi_audio_track_support_enabled StreamLibrary#multi_audio_track_support_enabled}
  */
  readonly multiAudioTrackSupportEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the stream library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#name StreamLibrary#name}
  */
  readonly name: string;
  /**
  * Indicates whether to keep original files after encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#original_files_keep StreamLibrary#original_files_keep}
  */
  readonly originalFilesKeep?: boolean | cdktf.IResolvable;
  /**
  * Options: `av1`, `hevc`, `vp9`, `x264`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#output_codecs StreamLibrary#output_codecs}
  */
  readonly outputCodecs?: string[];
  /**
  * The background color of the captions in the video player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_captions_background_color StreamLibrary#player_captions_background_color}
  */
  readonly playerCaptionsBackgroundColor?: string;
  /**
  * The font color of the captions in the video player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_captions_font_color StreamLibrary#player_captions_font_color}
  */
  readonly playerCaptionsFontColor?: string;
  /**
  * The font size of the captions in the video player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_captions_font_size StreamLibrary#player_captions_font_size}
  */
  readonly playerCaptionsFontSize?: number;
  /**
  * Options: `airplay`, `captions`, `chromecast`, `current-time`, `duration`, `fast-forward`, `fullscreen`, `mute`, `pip`, `play`, `play-large`, `progress`, `rewind`, `settings`, `volume`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_controls StreamLibrary#player_controls}
  */
  readonly playerControls?: string[];
  /**
  * Custom HTML to be included in the head of the video player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_custom_head StreamLibrary#player_custom_head}
  */
  readonly playerCustomHead?: string;
  /**
  * Options: `arial`, `inter`, `lato`, `oswald`, `raleway`, `roboto`, `rubik`, `ubuntu`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_font_family StreamLibrary#player_font_family}
  */
  readonly playerFontFamily?: string;
  /**
  * Specifies the language for the video player interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_language StreamLibrary#player_language}
  */
  readonly playerLanguage?: string;
  /**
  * Customizes the appearance of the video player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_primary_color StreamLibrary#player_primary_color}
  */
  readonly playerPrimaryColor?: string;
  /**
  * Specifies the video player version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_version StreamLibrary#player_version}
  */
  readonly playerVersion?: number;
  /**
  * Indicates whether the video watch heatmap should be displayed in the player.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#player_watchtime_heatmap_enabled StreamLibrary#player_watchtime_heatmap_enabled}
  */
  readonly playerWatchtimeHeatmapEnabled?: boolean | cdktf.IResolvable;
  /**
  * The list of allowed referrer domains allowed to access videos in this library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#referers_allowed StreamLibrary#referers_allowed}
  */
  readonly referersAllowed?: string[];
  /**
  * The list of blocked referrer domains blocked from accessing videos in this library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#referers_blocked StreamLibrary#referers_blocked}
  */
  readonly referersBlocked?: string[];
  /**
  * A list of resolutions available for the videos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#resolutions StreamLibrary#resolutions}
  */
  readonly resolutions?: string[];
  /**
  * Indicates whether the automatic audio transcribing is currently enabled for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#transcribing_enabled StreamLibrary#transcribing_enabled}
  */
  readonly transcribingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The list of languages that the captions will be automatically transcribed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#transcribing_languages StreamLibrary#transcribing_languages}
  */
  readonly transcribingLanguages?: string[];
  /**
  * Indicates whether automatic transcribing description generation is currently enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#transcribing_smart_description_enabled StreamLibrary#transcribing_smart_description_enabled}
  */
  readonly transcribingSmartDescriptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether automatic transcribing title generation is currently enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#transcribing_smart_title_enabled StreamLibrary#transcribing_smart_title_enabled}
  */
  readonly transcribingSmartTitleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The URL of the VAST tag for ad integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#vast_tag_url StreamLibrary#vast_tag_url}
  */
  readonly vastTagUrl?: string;
  /**
  * Indicates whether the player token authentication is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#view_token_authentication_required StreamLibrary#view_token_authentication_required}
  */
  readonly viewTokenAuthenticationRequired?: boolean | cdktf.IResolvable;
  /**
  * The height of the watermark (in %).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#watermark_height StreamLibrary#watermark_height}
  */
  readonly watermarkHeight?: number;
  /**
  * The left offset of the watermark position (in %).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#watermark_position_left StreamLibrary#watermark_position_left}
  */
  readonly watermarkPositionLeft?: number;
  /**
  * The top offset of the watermark position (in %).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#watermark_position_top StreamLibrary#watermark_position_top}
  */
  readonly watermarkPositionTop?: number;
  /**
  * The width of the watermark (in %).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#watermark_width StreamLibrary#watermark_width}
  */
  readonly watermarkWidth?: number;
  /**
  * The URL for webhook notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#webhook_url StreamLibrary#webhook_url}
  */
  readonly webhookUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library bunnynet_stream_library}
*/
export class StreamLibrary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_stream_library";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamLibrary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamLibrary to import
  * @param importFromId The id of the existing StreamLibrary that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamLibrary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_stream_library", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs/resources/stream_library bunnynet_stream_library} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamLibraryConfig
  */
  public constructor(scope: Construct, id: string, config: StreamLibraryConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_stream_library',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bitrate1080P = config.bitrate1080P;
    this._bitrate1440P = config.bitrate1440P;
    this._bitrate2160P = config.bitrate2160P;
    this._bitrate240P = config.bitrate240P;
    this._bitrate360P = config.bitrate360P;
    this._bitrate480P = config.bitrate480P;
    this._bitrate720P = config.bitrate720P;
    this._cdnTokenAuthenticationRequired = config.cdnTokenAuthenticationRequired;
    this._contentTaggingEnabled = config.contentTaggingEnabled;
    this._directPlayEnabled = config.directPlayEnabled;
    this._directUrlFileAccessBlocked = config.directUrlFileAccessBlocked;
    this._drmMediacageBasicEnabled = config.drmMediacageBasicEnabled;
    this._earlyPlayEnabled = config.earlyPlayEnabled;
    this._encodingTier = config.encodingTier;
    this._jitEncoding = config.jitEncoding;
    this._mp4FallbackEnabled = config.mp4FallbackEnabled;
    this._multiAudioTrackSupportEnabled = config.multiAudioTrackSupportEnabled;
    this._name = config.name;
    this._originalFilesKeep = config.originalFilesKeep;
    this._outputCodecs = config.outputCodecs;
    this._playerCaptionsBackgroundColor = config.playerCaptionsBackgroundColor;
    this._playerCaptionsFontColor = config.playerCaptionsFontColor;
    this._playerCaptionsFontSize = config.playerCaptionsFontSize;
    this._playerControls = config.playerControls;
    this._playerCustomHead = config.playerCustomHead;
    this._playerFontFamily = config.playerFontFamily;
    this._playerLanguage = config.playerLanguage;
    this._playerPrimaryColor = config.playerPrimaryColor;
    this._playerVersion = config.playerVersion;
    this._playerWatchtimeHeatmapEnabled = config.playerWatchtimeHeatmapEnabled;
    this._referersAllowed = config.referersAllowed;
    this._referersBlocked = config.referersBlocked;
    this._resolutions = config.resolutions;
    this._transcribingEnabled = config.transcribingEnabled;
    this._transcribingLanguages = config.transcribingLanguages;
    this._transcribingSmartDescriptionEnabled = config.transcribingSmartDescriptionEnabled;
    this._transcribingSmartTitleEnabled = config.transcribingSmartTitleEnabled;
    this._vastTagUrl = config.vastTagUrl;
    this._viewTokenAuthenticationRequired = config.viewTokenAuthenticationRequired;
    this._watermarkHeight = config.watermarkHeight;
    this._watermarkPositionLeft = config.watermarkPositionLeft;
    this._watermarkPositionTop = config.watermarkPositionTop;
    this._watermarkWidth = config.watermarkWidth;
    this._webhookUrl = config.webhookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // bitrate_1080p - computed: true, optional: true, required: false
  private _bitrate1080P?: number; 
  public get bitrate1080P() {
    return this.getNumberAttribute('bitrate_1080p');
  }
  public set bitrate1080P(value: number) {
    this._bitrate1080P = value;
  }
  public resetBitrate1080P() {
    this._bitrate1080P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate1080PInput() {
    return this._bitrate1080P;
  }

  // bitrate_1440p - computed: true, optional: true, required: false
  private _bitrate1440P?: number; 
  public get bitrate1440P() {
    return this.getNumberAttribute('bitrate_1440p');
  }
  public set bitrate1440P(value: number) {
    this._bitrate1440P = value;
  }
  public resetBitrate1440P() {
    this._bitrate1440P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate1440PInput() {
    return this._bitrate1440P;
  }

  // bitrate_2160p - computed: true, optional: true, required: false
  private _bitrate2160P?: number; 
  public get bitrate2160P() {
    return this.getNumberAttribute('bitrate_2160p');
  }
  public set bitrate2160P(value: number) {
    this._bitrate2160P = value;
  }
  public resetBitrate2160P() {
    this._bitrate2160P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate2160PInput() {
    return this._bitrate2160P;
  }

  // bitrate_240p - computed: true, optional: true, required: false
  private _bitrate240P?: number; 
  public get bitrate240P() {
    return this.getNumberAttribute('bitrate_240p');
  }
  public set bitrate240P(value: number) {
    this._bitrate240P = value;
  }
  public resetBitrate240P() {
    this._bitrate240P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate240PInput() {
    return this._bitrate240P;
  }

  // bitrate_360p - computed: true, optional: true, required: false
  private _bitrate360P?: number; 
  public get bitrate360P() {
    return this.getNumberAttribute('bitrate_360p');
  }
  public set bitrate360P(value: number) {
    this._bitrate360P = value;
  }
  public resetBitrate360P() {
    this._bitrate360P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate360PInput() {
    return this._bitrate360P;
  }

  // bitrate_480p - computed: true, optional: true, required: false
  private _bitrate480P?: number; 
  public get bitrate480P() {
    return this.getNumberAttribute('bitrate_480p');
  }
  public set bitrate480P(value: number) {
    this._bitrate480P = value;
  }
  public resetBitrate480P() {
    this._bitrate480P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate480PInput() {
    return this._bitrate480P;
  }

  // bitrate_720p - computed: true, optional: true, required: false
  private _bitrate720P?: number; 
  public get bitrate720P() {
    return this.getNumberAttribute('bitrate_720p');
  }
  public set bitrate720P(value: number) {
    this._bitrate720P = value;
  }
  public resetBitrate720P() {
    this._bitrate720P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrate720PInput() {
    return this._bitrate720P;
  }

  // cdn_token_authentication_required - computed: true, optional: true, required: false
  private _cdnTokenAuthenticationRequired?: boolean | cdktf.IResolvable; 
  public get cdnTokenAuthenticationRequired() {
    return this.getBooleanAttribute('cdn_token_authentication_required');
  }
  public set cdnTokenAuthenticationRequired(value: boolean | cdktf.IResolvable) {
    this._cdnTokenAuthenticationRequired = value;
  }
  public resetCdnTokenAuthenticationRequired() {
    this._cdnTokenAuthenticationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnTokenAuthenticationRequiredInput() {
    return this._cdnTokenAuthenticationRequired;
  }

  // content_tagging_enabled - computed: true, optional: true, required: false
  private _contentTaggingEnabled?: boolean | cdktf.IResolvable; 
  public get contentTaggingEnabled() {
    return this.getBooleanAttribute('content_tagging_enabled');
  }
  public set contentTaggingEnabled(value: boolean | cdktf.IResolvable) {
    this._contentTaggingEnabled = value;
  }
  public resetContentTaggingEnabled() {
    this._contentTaggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTaggingEnabledInput() {
    return this._contentTaggingEnabled;
  }

  // direct_play_enabled - computed: true, optional: true, required: false
  private _directPlayEnabled?: boolean | cdktf.IResolvable; 
  public get directPlayEnabled() {
    return this.getBooleanAttribute('direct_play_enabled');
  }
  public set directPlayEnabled(value: boolean | cdktf.IResolvable) {
    this._directPlayEnabled = value;
  }
  public resetDirectPlayEnabled() {
    this._directPlayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPlayEnabledInput() {
    return this._directPlayEnabled;
  }

  // direct_url_file_access_blocked - computed: true, optional: true, required: false
  private _directUrlFileAccessBlocked?: boolean | cdktf.IResolvable; 
  public get directUrlFileAccessBlocked() {
    return this.getBooleanAttribute('direct_url_file_access_blocked');
  }
  public set directUrlFileAccessBlocked(value: boolean | cdktf.IResolvable) {
    this._directUrlFileAccessBlocked = value;
  }
  public resetDirectUrlFileAccessBlocked() {
    this._directUrlFileAccessBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directUrlFileAccessBlockedInput() {
    return this._directUrlFileAccessBlocked;
  }

  // drm_mediacage_basic_enabled - computed: true, optional: true, required: false
  private _drmMediacageBasicEnabled?: boolean | cdktf.IResolvable; 
  public get drmMediacageBasicEnabled() {
    return this.getBooleanAttribute('drm_mediacage_basic_enabled');
  }
  public set drmMediacageBasicEnabled(value: boolean | cdktf.IResolvable) {
    this._drmMediacageBasicEnabled = value;
  }
  public resetDrmMediacageBasicEnabled() {
    this._drmMediacageBasicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmMediacageBasicEnabledInput() {
    return this._drmMediacageBasicEnabled;
  }

  // early_play_enabled - computed: true, optional: true, required: false
  private _earlyPlayEnabled?: boolean | cdktf.IResolvable; 
  public get earlyPlayEnabled() {
    return this.getBooleanAttribute('early_play_enabled');
  }
  public set earlyPlayEnabled(value: boolean | cdktf.IResolvable) {
    this._earlyPlayEnabled = value;
  }
  public resetEarlyPlayEnabled() {
    this._earlyPlayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyPlayEnabledInput() {
    return this._earlyPlayEnabled;
  }

  // encoding_tier - computed: true, optional: true, required: false
  private _encodingTier?: string; 
  public get encodingTier() {
    return this.getStringAttribute('encoding_tier');
  }
  public set encodingTier(value: string) {
    this._encodingTier = value;
  }
  public resetEncodingTier() {
    this._encodingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTierInput() {
    return this._encodingTier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // jit_encoding - computed: true, optional: true, required: false
  private _jitEncoding?: boolean | cdktf.IResolvable; 
  public get jitEncoding() {
    return this.getBooleanAttribute('jit_encoding');
  }
  public set jitEncoding(value: boolean | cdktf.IResolvable) {
    this._jitEncoding = value;
  }
  public resetJitEncoding() {
    this._jitEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitEncodingInput() {
    return this._jitEncoding;
  }

  // mp4_fallback_enabled - computed: true, optional: true, required: false
  private _mp4FallbackEnabled?: boolean | cdktf.IResolvable; 
  public get mp4FallbackEnabled() {
    return this.getBooleanAttribute('mp4_fallback_enabled');
  }
  public set mp4FallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._mp4FallbackEnabled = value;
  }
  public resetMp4FallbackEnabled() {
    this._mp4FallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4FallbackEnabledInput() {
    return this._mp4FallbackEnabled;
  }

  // multi_audio_track_support_enabled - computed: true, optional: true, required: false
  private _multiAudioTrackSupportEnabled?: boolean | cdktf.IResolvable; 
  public get multiAudioTrackSupportEnabled() {
    return this.getBooleanAttribute('multi_audio_track_support_enabled');
  }
  public set multiAudioTrackSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._multiAudioTrackSupportEnabled = value;
  }
  public resetMultiAudioTrackSupportEnabled() {
    this._multiAudioTrackSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAudioTrackSupportEnabledInput() {
    return this._multiAudioTrackSupportEnabled;
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

  // original_files_keep - computed: true, optional: true, required: false
  private _originalFilesKeep?: boolean | cdktf.IResolvable; 
  public get originalFilesKeep() {
    return this.getBooleanAttribute('original_files_keep');
  }
  public set originalFilesKeep(value: boolean | cdktf.IResolvable) {
    this._originalFilesKeep = value;
  }
  public resetOriginalFilesKeep() {
    this._originalFilesKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFilesKeepInput() {
    return this._originalFilesKeep;
  }

  // output_codecs - computed: true, optional: true, required: false
  private _outputCodecs?: string[]; 
  public get outputCodecs() {
    return cdktf.Fn.tolist(this.getListAttribute('output_codecs'));
  }
  public set outputCodecs(value: string[]) {
    this._outputCodecs = value;
  }
  public resetOutputCodecs() {
    this._outputCodecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCodecsInput() {
    return this._outputCodecs;
  }

  // player_captions_background_color - computed: true, optional: true, required: false
  private _playerCaptionsBackgroundColor?: string; 
  public get playerCaptionsBackgroundColor() {
    return this.getStringAttribute('player_captions_background_color');
  }
  public set playerCaptionsBackgroundColor(value: string) {
    this._playerCaptionsBackgroundColor = value;
  }
  public resetPlayerCaptionsBackgroundColor() {
    this._playerCaptionsBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerCaptionsBackgroundColorInput() {
    return this._playerCaptionsBackgroundColor;
  }

  // player_captions_font_color - computed: true, optional: true, required: false
  private _playerCaptionsFontColor?: string; 
  public get playerCaptionsFontColor() {
    return this.getStringAttribute('player_captions_font_color');
  }
  public set playerCaptionsFontColor(value: string) {
    this._playerCaptionsFontColor = value;
  }
  public resetPlayerCaptionsFontColor() {
    this._playerCaptionsFontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerCaptionsFontColorInput() {
    return this._playerCaptionsFontColor;
  }

  // player_captions_font_size - computed: true, optional: true, required: false
  private _playerCaptionsFontSize?: number; 
  public get playerCaptionsFontSize() {
    return this.getNumberAttribute('player_captions_font_size');
  }
  public set playerCaptionsFontSize(value: number) {
    this._playerCaptionsFontSize = value;
  }
  public resetPlayerCaptionsFontSize() {
    this._playerCaptionsFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerCaptionsFontSizeInput() {
    return this._playerCaptionsFontSize;
  }

  // player_controls - computed: true, optional: true, required: false
  private _playerControls?: string[]; 
  public get playerControls() {
    return cdktf.Fn.tolist(this.getListAttribute('player_controls'));
  }
  public set playerControls(value: string[]) {
    this._playerControls = value;
  }
  public resetPlayerControls() {
    this._playerControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerControlsInput() {
    return this._playerControls;
  }

  // player_custom_head - computed: true, optional: true, required: false
  private _playerCustomHead?: string; 
  public get playerCustomHead() {
    return this.getStringAttribute('player_custom_head');
  }
  public set playerCustomHead(value: string) {
    this._playerCustomHead = value;
  }
  public resetPlayerCustomHead() {
    this._playerCustomHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerCustomHeadInput() {
    return this._playerCustomHead;
  }

  // player_font_family - computed: true, optional: true, required: false
  private _playerFontFamily?: string; 
  public get playerFontFamily() {
    return this.getStringAttribute('player_font_family');
  }
  public set playerFontFamily(value: string) {
    this._playerFontFamily = value;
  }
  public resetPlayerFontFamily() {
    this._playerFontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerFontFamilyInput() {
    return this._playerFontFamily;
  }

  // player_language - computed: true, optional: true, required: false
  private _playerLanguage?: string; 
  public get playerLanguage() {
    return this.getStringAttribute('player_language');
  }
  public set playerLanguage(value: string) {
    this._playerLanguage = value;
  }
  public resetPlayerLanguage() {
    this._playerLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerLanguageInput() {
    return this._playerLanguage;
  }

  // player_primary_color - computed: true, optional: true, required: false
  private _playerPrimaryColor?: string; 
  public get playerPrimaryColor() {
    return this.getStringAttribute('player_primary_color');
  }
  public set playerPrimaryColor(value: string) {
    this._playerPrimaryColor = value;
  }
  public resetPlayerPrimaryColor() {
    this._playerPrimaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerPrimaryColorInput() {
    return this._playerPrimaryColor;
  }

  // player_version - computed: true, optional: true, required: false
  private _playerVersion?: number; 
  public get playerVersion() {
    return this.getNumberAttribute('player_version');
  }
  public set playerVersion(value: number) {
    this._playerVersion = value;
  }
  public resetPlayerVersion() {
    this._playerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerVersionInput() {
    return this._playerVersion;
  }

  // player_watchtime_heatmap_enabled - computed: true, optional: true, required: false
  private _playerWatchtimeHeatmapEnabled?: boolean | cdktf.IResolvable; 
  public get playerWatchtimeHeatmapEnabled() {
    return this.getBooleanAttribute('player_watchtime_heatmap_enabled');
  }
  public set playerWatchtimeHeatmapEnabled(value: boolean | cdktf.IResolvable) {
    this._playerWatchtimeHeatmapEnabled = value;
  }
  public resetPlayerWatchtimeHeatmapEnabled() {
    this._playerWatchtimeHeatmapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerWatchtimeHeatmapEnabledInput() {
    return this._playerWatchtimeHeatmapEnabled;
  }

  // pullzone - computed: true, optional: false, required: false
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }

  // referers_allowed - computed: true, optional: true, required: false
  private _referersAllowed?: string[]; 
  public get referersAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('referers_allowed'));
  }
  public set referersAllowed(value: string[]) {
    this._referersAllowed = value;
  }
  public resetReferersAllowed() {
    this._referersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referersAllowedInput() {
    return this._referersAllowed;
  }

  // referers_blocked - computed: true, optional: true, required: false
  private _referersBlocked?: string[]; 
  public get referersBlocked() {
    return cdktf.Fn.tolist(this.getListAttribute('referers_blocked'));
  }
  public set referersBlocked(value: string[]) {
    this._referersBlocked = value;
  }
  public resetReferersBlocked() {
    this._referersBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referersBlockedInput() {
    return this._referersBlocked;
  }

  // resolutions - computed: true, optional: true, required: false
  private _resolutions?: string[]; 
  public get resolutions() {
    return cdktf.Fn.tolist(this.getListAttribute('resolutions'));
  }
  public set resolutions(value: string[]) {
    this._resolutions = value;
  }
  public resetResolutions() {
    this._resolutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionsInput() {
    return this._resolutions;
  }

  // storage_zone - computed: true, optional: false, required: false
  public get storageZone() {
    return this.getNumberAttribute('storage_zone');
  }

  // transcribing_enabled - computed: true, optional: true, required: false
  private _transcribingEnabled?: boolean | cdktf.IResolvable; 
  public get transcribingEnabled() {
    return this.getBooleanAttribute('transcribing_enabled');
  }
  public set transcribingEnabled(value: boolean | cdktf.IResolvable) {
    this._transcribingEnabled = value;
  }
  public resetTranscribingEnabled() {
    this._transcribingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcribingEnabledInput() {
    return this._transcribingEnabled;
  }

  // transcribing_languages - computed: true, optional: true, required: false
  private _transcribingLanguages?: string[]; 
  public get transcribingLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('transcribing_languages'));
  }
  public set transcribingLanguages(value: string[]) {
    this._transcribingLanguages = value;
  }
  public resetTranscribingLanguages() {
    this._transcribingLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcribingLanguagesInput() {
    return this._transcribingLanguages;
  }

  // transcribing_smart_description_enabled - computed: true, optional: true, required: false
  private _transcribingSmartDescriptionEnabled?: boolean | cdktf.IResolvable; 
  public get transcribingSmartDescriptionEnabled() {
    return this.getBooleanAttribute('transcribing_smart_description_enabled');
  }
  public set transcribingSmartDescriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._transcribingSmartDescriptionEnabled = value;
  }
  public resetTranscribingSmartDescriptionEnabled() {
    this._transcribingSmartDescriptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcribingSmartDescriptionEnabledInput() {
    return this._transcribingSmartDescriptionEnabled;
  }

  // transcribing_smart_title_enabled - computed: true, optional: true, required: false
  private _transcribingSmartTitleEnabled?: boolean | cdktf.IResolvable; 
  public get transcribingSmartTitleEnabled() {
    return this.getBooleanAttribute('transcribing_smart_title_enabled');
  }
  public set transcribingSmartTitleEnabled(value: boolean | cdktf.IResolvable) {
    this._transcribingSmartTitleEnabled = value;
  }
  public resetTranscribingSmartTitleEnabled() {
    this._transcribingSmartTitleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcribingSmartTitleEnabledInput() {
    return this._transcribingSmartTitleEnabled;
  }

  // vast_tag_url - computed: true, optional: true, required: false
  private _vastTagUrl?: string; 
  public get vastTagUrl() {
    return this.getStringAttribute('vast_tag_url');
  }
  public set vastTagUrl(value: string) {
    this._vastTagUrl = value;
  }
  public resetVastTagUrl() {
    this._vastTagUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vastTagUrlInput() {
    return this._vastTagUrl;
  }

  // view_token_authentication_required - computed: true, optional: true, required: false
  private _viewTokenAuthenticationRequired?: boolean | cdktf.IResolvable; 
  public get viewTokenAuthenticationRequired() {
    return this.getBooleanAttribute('view_token_authentication_required');
  }
  public set viewTokenAuthenticationRequired(value: boolean | cdktf.IResolvable) {
    this._viewTokenAuthenticationRequired = value;
  }
  public resetViewTokenAuthenticationRequired() {
    this._viewTokenAuthenticationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTokenAuthenticationRequiredInput() {
    return this._viewTokenAuthenticationRequired;
  }

  // watermark_height - computed: true, optional: true, required: false
  private _watermarkHeight?: number; 
  public get watermarkHeight() {
    return this.getNumberAttribute('watermark_height');
  }
  public set watermarkHeight(value: number) {
    this._watermarkHeight = value;
  }
  public resetWatermarkHeight() {
    this._watermarkHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkHeightInput() {
    return this._watermarkHeight;
  }

  // watermark_position_left - computed: true, optional: true, required: false
  private _watermarkPositionLeft?: number; 
  public get watermarkPositionLeft() {
    return this.getNumberAttribute('watermark_position_left');
  }
  public set watermarkPositionLeft(value: number) {
    this._watermarkPositionLeft = value;
  }
  public resetWatermarkPositionLeft() {
    this._watermarkPositionLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkPositionLeftInput() {
    return this._watermarkPositionLeft;
  }

  // watermark_position_top - computed: true, optional: true, required: false
  private _watermarkPositionTop?: number; 
  public get watermarkPositionTop() {
    return this.getNumberAttribute('watermark_position_top');
  }
  public set watermarkPositionTop(value: number) {
    this._watermarkPositionTop = value;
  }
  public resetWatermarkPositionTop() {
    this._watermarkPositionTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkPositionTopInput() {
    return this._watermarkPositionTop;
  }

  // watermark_width - computed: true, optional: true, required: false
  private _watermarkWidth?: number; 
  public get watermarkWidth() {
    return this.getNumberAttribute('watermark_width');
  }
  public set watermarkWidth(value: number) {
    this._watermarkWidth = value;
  }
  public resetWatermarkWidth() {
    this._watermarkWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkWidthInput() {
    return this._watermarkWidth;
  }

  // webhook_url - computed: true, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bitrate_1080p: cdktf.numberToTerraform(this._bitrate1080P),
      bitrate_1440p: cdktf.numberToTerraform(this._bitrate1440P),
      bitrate_2160p: cdktf.numberToTerraform(this._bitrate2160P),
      bitrate_240p: cdktf.numberToTerraform(this._bitrate240P),
      bitrate_360p: cdktf.numberToTerraform(this._bitrate360P),
      bitrate_480p: cdktf.numberToTerraform(this._bitrate480P),
      bitrate_720p: cdktf.numberToTerraform(this._bitrate720P),
      cdn_token_authentication_required: cdktf.booleanToTerraform(this._cdnTokenAuthenticationRequired),
      content_tagging_enabled: cdktf.booleanToTerraform(this._contentTaggingEnabled),
      direct_play_enabled: cdktf.booleanToTerraform(this._directPlayEnabled),
      direct_url_file_access_blocked: cdktf.booleanToTerraform(this._directUrlFileAccessBlocked),
      drm_mediacage_basic_enabled: cdktf.booleanToTerraform(this._drmMediacageBasicEnabled),
      early_play_enabled: cdktf.booleanToTerraform(this._earlyPlayEnabled),
      encoding_tier: cdktf.stringToTerraform(this._encodingTier),
      jit_encoding: cdktf.booleanToTerraform(this._jitEncoding),
      mp4_fallback_enabled: cdktf.booleanToTerraform(this._mp4FallbackEnabled),
      multi_audio_track_support_enabled: cdktf.booleanToTerraform(this._multiAudioTrackSupportEnabled),
      name: cdktf.stringToTerraform(this._name),
      original_files_keep: cdktf.booleanToTerraform(this._originalFilesKeep),
      output_codecs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputCodecs),
      player_captions_background_color: cdktf.stringToTerraform(this._playerCaptionsBackgroundColor),
      player_captions_font_color: cdktf.stringToTerraform(this._playerCaptionsFontColor),
      player_captions_font_size: cdktf.numberToTerraform(this._playerCaptionsFontSize),
      player_controls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._playerControls),
      player_custom_head: cdktf.stringToTerraform(this._playerCustomHead),
      player_font_family: cdktf.stringToTerraform(this._playerFontFamily),
      player_language: cdktf.stringToTerraform(this._playerLanguage),
      player_primary_color: cdktf.stringToTerraform(this._playerPrimaryColor),
      player_version: cdktf.numberToTerraform(this._playerVersion),
      player_watchtime_heatmap_enabled: cdktf.booleanToTerraform(this._playerWatchtimeHeatmapEnabled),
      referers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referersAllowed),
      referers_blocked: cdktf.listMapper(cdktf.stringToTerraform, false)(this._referersBlocked),
      resolutions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resolutions),
      transcribing_enabled: cdktf.booleanToTerraform(this._transcribingEnabled),
      transcribing_languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transcribingLanguages),
      transcribing_smart_description_enabled: cdktf.booleanToTerraform(this._transcribingSmartDescriptionEnabled),
      transcribing_smart_title_enabled: cdktf.booleanToTerraform(this._transcribingSmartTitleEnabled),
      vast_tag_url: cdktf.stringToTerraform(this._vastTagUrl),
      view_token_authentication_required: cdktf.booleanToTerraform(this._viewTokenAuthenticationRequired),
      watermark_height: cdktf.numberToTerraform(this._watermarkHeight),
      watermark_position_left: cdktf.numberToTerraform(this._watermarkPositionLeft),
      watermark_position_top: cdktf.numberToTerraform(this._watermarkPositionTop),
      watermark_width: cdktf.numberToTerraform(this._watermarkWidth),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bitrate_1080p: {
        value: cdktf.numberToHclTerraform(this._bitrate1080P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_1440p: {
        value: cdktf.numberToHclTerraform(this._bitrate1440P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_2160p: {
        value: cdktf.numberToHclTerraform(this._bitrate2160P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_240p: {
        value: cdktf.numberToHclTerraform(this._bitrate240P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_360p: {
        value: cdktf.numberToHclTerraform(this._bitrate360P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_480p: {
        value: cdktf.numberToHclTerraform(this._bitrate480P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bitrate_720p: {
        value: cdktf.numberToHclTerraform(this._bitrate720P),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cdn_token_authentication_required: {
        value: cdktf.booleanToHclTerraform(this._cdnTokenAuthenticationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_tagging_enabled: {
        value: cdktf.booleanToHclTerraform(this._contentTaggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direct_play_enabled: {
        value: cdktf.booleanToHclTerraform(this._directPlayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direct_url_file_access_blocked: {
        value: cdktf.booleanToHclTerraform(this._directUrlFileAccessBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drm_mediacage_basic_enabled: {
        value: cdktf.booleanToHclTerraform(this._drmMediacageBasicEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      early_play_enabled: {
        value: cdktf.booleanToHclTerraform(this._earlyPlayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encoding_tier: {
        value: cdktf.stringToHclTerraform(this._encodingTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_encoding: {
        value: cdktf.booleanToHclTerraform(this._jitEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mp4_fallback_enabled: {
        value: cdktf.booleanToHclTerraform(this._mp4FallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_audio_track_support_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiAudioTrackSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_files_keep: {
        value: cdktf.booleanToHclTerraform(this._originalFilesKeep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_codecs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputCodecs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      player_captions_background_color: {
        value: cdktf.stringToHclTerraform(this._playerCaptionsBackgroundColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_captions_font_color: {
        value: cdktf.stringToHclTerraform(this._playerCaptionsFontColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_captions_font_size: {
        value: cdktf.numberToHclTerraform(this._playerCaptionsFontSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      player_controls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._playerControls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      player_custom_head: {
        value: cdktf.stringToHclTerraform(this._playerCustomHead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_font_family: {
        value: cdktf.stringToHclTerraform(this._playerFontFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_language: {
        value: cdktf.stringToHclTerraform(this._playerLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_primary_color: {
        value: cdktf.stringToHclTerraform(this._playerPrimaryColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_version: {
        value: cdktf.numberToHclTerraform(this._playerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      player_watchtime_heatmap_enabled: {
        value: cdktf.booleanToHclTerraform(this._playerWatchtimeHeatmapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      referers_allowed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referersAllowed),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      referers_blocked: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._referersBlocked),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resolutions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resolutions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transcribing_enabled: {
        value: cdktf.booleanToHclTerraform(this._transcribingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transcribing_languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transcribingLanguages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transcribing_smart_description_enabled: {
        value: cdktf.booleanToHclTerraform(this._transcribingSmartDescriptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transcribing_smart_title_enabled: {
        value: cdktf.booleanToHclTerraform(this._transcribingSmartTitleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vast_tag_url: {
        value: cdktf.stringToHclTerraform(this._vastTagUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_token_authentication_required: {
        value: cdktf.booleanToHclTerraform(this._viewTokenAuthenticationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      watermark_height: {
        value: cdktf.numberToHclTerraform(this._watermarkHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      watermark_position_left: {
        value: cdktf.numberToHclTerraform(this._watermarkPositionLeft),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      watermark_position_top: {
        value: cdktf.numberToHclTerraform(this._watermarkPositionTop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      watermark_width: {
        value: cdktf.numberToHclTerraform(this._watermarkWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
