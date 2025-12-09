// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerPassThePopcornConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#api_key IndexerPassThePopcorn#api_key}
  */
  readonly apiKey?: string;
  /**
  * API user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#api_user IndexerPassThePopcorn#api_user}
  */
  readonly apiUser?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#base_url IndexerPassThePopcorn#base_url}
  */
  readonly baseUrl: string;
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#download_client_id IndexerPassThePopcorn#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#enable_automatic_search IndexerPassThePopcorn#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#enable_interactive_search IndexerPassThePopcorn#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#enable_rss IndexerPassThePopcorn#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Minimum seeders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#minimum_seeders IndexerPassThePopcorn#minimum_seeders}
  */
  readonly minimumSeeders?: number;
  /**
  * Languages list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#multi_languages IndexerPassThePopcorn#multi_languages}
  */
  readonly multiLanguages?: number[];
  /**
  * IndexerPassThePopcorn name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#name IndexerPassThePopcorn#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#priority IndexerPassThePopcorn#priority}
  */
  readonly priority?: number;
  /**
  * Flag list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#required_flags IndexerPassThePopcorn#required_flags}
  */
  readonly requiredFlags?: number[];
  /**
  * Seed ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#seed_ratio IndexerPassThePopcorn#seed_ratio}
  */
  readonly seedRatio?: number;
  /**
  * Seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#seed_time IndexerPassThePopcorn#seed_time}
  */
  readonly seedTime?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#tags IndexerPassThePopcorn#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn radarr_indexer_pass_the_popcorn}
*/
export class IndexerPassThePopcorn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer_pass_the_popcorn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerPassThePopcorn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerPassThePopcorn to import
  * @param importFromId The id of the existing IndexerPassThePopcorn that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerPassThePopcorn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer_pass_the_popcorn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/indexer_pass_the_popcorn radarr_indexer_pass_the_popcorn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerPassThePopcornConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerPassThePopcornConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer_pass_the_popcorn',
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
    this._apiKey = config.apiKey;
    this._apiUser = config.apiUser;
    this._baseUrl = config.baseUrl;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_user - computed: true, optional: true, required: false
  private _apiUser?: string; 
  public get apiUser() {
    return this.getStringAttribute('api_user');
  }
  public set apiUser(value: string) {
    this._apiUser = value;
  }
  public resetApiUser() {
    this._apiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_user: cdktf.stringToTerraform(this._apiUser),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
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
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_user: {
        value: cdktf.stringToHclTerraform(this._apiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
