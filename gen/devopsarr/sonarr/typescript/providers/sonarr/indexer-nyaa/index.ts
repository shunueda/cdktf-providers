// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerNyaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#additional_parameters IndexerNyaa#additional_parameters}
  */
  readonly additionalParameters?: string;
  /**
  * Search anime in standard format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#anime_standard_format_search IndexerNyaa#anime_standard_format_search}
  */
  readonly animeStandardFormatSearch?: boolean | cdktf.IResolvable;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#base_url IndexerNyaa#base_url}
  */
  readonly baseUrl: string;
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#download_client_id IndexerNyaa#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#enable_automatic_search IndexerNyaa#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#enable_interactive_search IndexerNyaa#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#enable_rss IndexerNyaa#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Minimum seeders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#minimum_seeders IndexerNyaa#minimum_seeders}
  */
  readonly minimumSeeders?: number;
  /**
  * IndexerNyaa name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#name IndexerNyaa#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#priority IndexerNyaa#priority}
  */
  readonly priority?: number;
  /**
  * Season seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#season_pack_seed_time IndexerNyaa#season_pack_seed_time}
  */
  readonly seasonPackSeedTime?: number;
  /**
  * Seed ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#seed_ratio IndexerNyaa#seed_ratio}
  */
  readonly seedRatio?: number;
  /**
  * Seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#seed_time IndexerNyaa#seed_time}
  */
  readonly seedTime?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#tags IndexerNyaa#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa sonarr_indexer_nyaa}
*/
export class IndexerNyaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer_nyaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerNyaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerNyaa to import
  * @param importFromId The id of the existing IndexerNyaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerNyaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer_nyaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_nyaa sonarr_indexer_nyaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerNyaaConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerNyaaConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer_nyaa',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalParameters = config.additionalParameters;
    this._animeStandardFormatSearch = config.animeStandardFormatSearch;
    this._baseUrl = config.baseUrl;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
    this._enableRss = config.enableRss;
    this._minimumSeeders = config.minimumSeeders;
    this._name = config.name;
    this._priority = config.priority;
    this._seasonPackSeedTime = config.seasonPackSeedTime;
    this._seedRatio = config.seedRatio;
    this._seedTime = config.seedTime;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_parameters - computed: true, optional: true, required: false
  private _additionalParameters?: string; 
  public get additionalParameters() {
    return this.getStringAttribute('additional_parameters');
  }
  public set additionalParameters(value: string) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // anime_standard_format_search - computed: true, optional: true, required: false
  private _animeStandardFormatSearch?: boolean | cdktf.IResolvable; 
  public get animeStandardFormatSearch() {
    return this.getBooleanAttribute('anime_standard_format_search');
  }
  public set animeStandardFormatSearch(value: boolean | cdktf.IResolvable) {
    this._animeStandardFormatSearch = value;
  }
  public resetAnimeStandardFormatSearch() {
    this._animeStandardFormatSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animeStandardFormatSearchInput() {
    return this._animeStandardFormatSearch;
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

  // enable_automatic_search - computed: true, optional: true, required: false
  private _enableAutomaticSearch?: boolean | cdktf.IResolvable; 
  public get enableAutomaticSearch() {
    return this.getBooleanAttribute('enable_automatic_search');
  }
  public set enableAutomaticSearch(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticSearch = value;
  }
  public resetEnableAutomaticSearch() {
    this._enableAutomaticSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticSearchInput() {
    return this._enableAutomaticSearch;
  }

  // enable_interactive_search - computed: true, optional: true, required: false
  private _enableInteractiveSearch?: boolean | cdktf.IResolvable; 
  public get enableInteractiveSearch() {
    return this.getBooleanAttribute('enable_interactive_search');
  }
  public set enableInteractiveSearch(value: boolean | cdktf.IResolvable) {
    this._enableInteractiveSearch = value;
  }
  public resetEnableInteractiveSearch() {
    this._enableInteractiveSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractiveSearchInput() {
    return this._enableInteractiveSearch;
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

  // season_pack_seed_time - computed: true, optional: true, required: false
  private _seasonPackSeedTime?: number; 
  public get seasonPackSeedTime() {
    return this.getNumberAttribute('season_pack_seed_time');
  }
  public set seasonPackSeedTime(value: number) {
    this._seasonPackSeedTime = value;
  }
  public resetSeasonPackSeedTime() {
    this._seasonPackSeedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonPackSeedTimeInput() {
    return this._seasonPackSeedTime;
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
      additional_parameters: cdktf.stringToTerraform(this._additionalParameters),
      anime_standard_format_search: cdktf.booleanToTerraform(this._animeStandardFormatSearch),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      minimum_seeders: cdktf.numberToTerraform(this._minimumSeeders),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      season_pack_seed_time: cdktf.numberToTerraform(this._seasonPackSeedTime),
      seed_ratio: cdktf.numberToTerraform(this._seedRatio),
      seed_time: cdktf.numberToTerraform(this._seedTime),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_parameters: {
        value: cdktf.stringToHclTerraform(this._additionalParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anime_standard_format_search: {
        value: cdktf.booleanToHclTerraform(this._animeStandardFormatSearch),
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
      download_client_id: {
        value: cdktf.numberToHclTerraform(this._downloadClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_automatic_search: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_interactive_search: {
        value: cdktf.booleanToHclTerraform(this._enableInteractiveSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      season_pack_seed_time: {
        value: cdktf.numberToHclTerraform(this._seasonPackSeedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
