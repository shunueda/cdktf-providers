// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerTorrentRssConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow zero size files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#allow_zero_size IndexerTorrentRss#allow_zero_size}
  */
  readonly allowZeroSize?: boolean | cdktf.IResolvable;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#base_url IndexerTorrentRss#base_url}
  */
  readonly baseUrl: string;
  /**
  * Cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#cookie IndexerTorrentRss#cookie}
  */
  readonly cookie?: string;
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#download_client_id IndexerTorrentRss#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#enable_rss IndexerTorrentRss#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Minimum seeders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#minimum_seeders IndexerTorrentRss#minimum_seeders}
  */
  readonly minimumSeeders?: number;
  /**
  * Languages list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#multi_languages IndexerTorrentRss#multi_languages}
  */
  readonly multiLanguages?: number[];
  /**
  * IndexerTorrentRss name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#name IndexerTorrentRss#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#priority IndexerTorrentRss#priority}
  */
  readonly priority?: number;
  /**
  * Flag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#required_flags IndexerTorrentRss#required_flags}
  */
  readonly requiredFlags?: number[];
  /**
  * Seed ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#seed_ratio IndexerTorrentRss#seed_ratio}
  */
  readonly seedRatio?: number;
  /**
  * Seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#seed_time IndexerTorrentRss#seed_time}
  */
  readonly seedTime?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#tags IndexerTorrentRss#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss radarr_indexer_torrent_rss}
*/
export class IndexerTorrentRss extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer_torrent_rss";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerTorrentRss resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerTorrentRss to import
  * @param importFromId The id of the existing IndexerTorrentRss that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerTorrentRss to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer_torrent_rss", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_torrent_rss radarr_indexer_torrent_rss} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerTorrentRssConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerTorrentRssConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer_torrent_rss',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowZeroSize = config.allowZeroSize;
    this._baseUrl = config.baseUrl;
    this._cookie = config.cookie;
    this._downloadClientId = config.downloadClientId;
    this._enableRss = config.enableRss;
    this._minimumSeeders = config.minimumSeeders;
    this._multiLanguages = config.multiLanguages;
    this._name = config.name;
    this._priority = config.priority;
    this._requiredFlags = config.requiredFlags;
    this._seedRatio = config.seedRatio;
    this._seedTime = config.seedTime;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_zero_size - computed: true, optional: true, required: false
  private _allowZeroSize?: boolean | cdktf.IResolvable; 
  public get allowZeroSize() {
    return this.getBooleanAttribute('allow_zero_size');
  }
  public set allowZeroSize(value: boolean | cdktf.IResolvable) {
    this._allowZeroSize = value;
  }
  public resetAllowZeroSize() {
    this._allowZeroSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowZeroSizeInput() {
    return this._allowZeroSize;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // download_client_id - computed: true, optional: true, required: false
  private _downloadClientId?: number; 
  public get downloadClientId() {
    return this.getNumberAttribute('download_client_id');
  }
  public set downloadClientId(value: number) {
    this._downloadClientId = value;
  }
  public resetDownloadClientId() {
    this._downloadClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadClientIdInput() {
    return this._downloadClientId;
  }

  // enable_rss - computed: true, optional: true, required: false
  private _enableRss?: boolean | cdktf.IResolvable; 
  public get enableRss() {
    return this.getBooleanAttribute('enable_rss');
  }
  public set enableRss(value: boolean | cdktf.IResolvable) {
    this._enableRss = value;
  }
  public resetEnableRss() {
    this._enableRss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRssInput() {
    return this._enableRss;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_seeders - computed: true, optional: true, required: false
  private _minimumSeeders?: number; 
  public get minimumSeeders() {
    return this.getNumberAttribute('minimum_seeders');
  }
  public set minimumSeeders(value: number) {
    this._minimumSeeders = value;
  }
  public resetMinimumSeeders() {
    this._minimumSeeders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSeedersInput() {
    return this._minimumSeeders;
  }

  // multi_languages - computed: true, optional: true, required: false
  private _multiLanguages?: number[]; 
  public get multiLanguages() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('multi_languages')));
  }
  public set multiLanguages(value: number[]) {
    this._multiLanguages = value;
  }
  public resetMultiLanguages() {
    this._multiLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLanguagesInput() {
    return this._multiLanguages;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // required_flags - computed: true, optional: true, required: false
  private _requiredFlags?: number[]; 
  public get requiredFlags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('required_flags')));
  }
  public set requiredFlags(value: number[]) {
    this._requiredFlags = value;
  }
  public resetRequiredFlags() {
    this._requiredFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredFlagsInput() {
    return this._requiredFlags;
  }

  // seed_ratio - computed: true, optional: true, required: false
  private _seedRatio?: number; 
  public get seedRatio() {
    return this.getNumberAttribute('seed_ratio');
  }
  public set seedRatio(value: number) {
    this._seedRatio = value;
  }
  public resetSeedRatio() {
    this._seedRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedRatioInput() {
    return this._seedRatio;
  }

  // seed_time - computed: true, optional: true, required: false
  private _seedTime?: number; 
  public get seedTime() {
    return this.getNumberAttribute('seed_time');
  }
  public set seedTime(value: number) {
    this._seedTime = value;
  }
  public resetSeedTime() {
    this._seedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedTimeInput() {
    return this._seedTime;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_zero_size: cdktf.booleanToTerraform(this._allowZeroSize),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      cookie: cdktf.stringToTerraform(this._cookie),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      minimum_seeders: cdktf.numberToTerraform(this._minimumSeeders),
      multi_languages: cdktf.listMapper(cdktf.numberToTerraform, false)(this._multiLanguages),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      required_flags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._requiredFlags),
      seed_ratio: cdktf.numberToTerraform(this._seedRatio),
      seed_time: cdktf.numberToTerraform(this._seedTime),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_zero_size: {
        value: cdktf.booleanToHclTerraform(this._allowZeroSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie: {
        value: cdktf.stringToHclTerraform(this._cookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_client_id: {
        value: cdktf.numberToHclTerraform(this._downloadClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_rss: {
        value: cdktf.booleanToHclTerraform(this._enableRss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_seeders: {
        value: cdktf.numberToHclTerraform(this._minimumSeeders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_languages: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._multiLanguages),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      required_flags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._requiredFlags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      seed_ratio: {
        value: cdktf.numberToHclTerraform(this._seedRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seed_time: {
        value: cdktf.numberToHclTerraform(this._seedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
