// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#additional_parameters Indexer#additional_parameters}
  */
  readonly additionalParameters?: string;
  /**
  * Allow zero size files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#allow_zero_size Indexer#allow_zero_size}
  */
  readonly allowZeroSize?: boolean | cdktf.IResolvable;
  /**
  * Anime categories list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#anime_categories Indexer#anime_categories}
  */
  readonly animeCategories?: number[];
  /**
  * Search anime in standard format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#anime_standard_format_search Indexer#anime_standard_format_search}
  */
  readonly animeStandardFormatSearch?: boolean | cdktf.IResolvable;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#api_key Indexer#api_key}
  */
  readonly apiKey?: string;
  /**
  * API path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#api_path Indexer#api_path}
  */
  readonly apiPath?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#base_url Indexer#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Captcha token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#captcha_token Indexer#captcha_token}
  */
  readonly captchaToken?: string;
  /**
  * Categories list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#categories Indexer#categories}
  */
  readonly categories?: number[];
  /**
  * Indexer configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#config_contract Indexer#config_contract}
  */
  readonly configContract: string;
  /**
  * Cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#cookie Indexer#cookie}
  */
  readonly cookie?: string;
  /**
  * Delay before grabbing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#delay Indexer#delay}
  */
  readonly delay?: number;
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#download_client_id Indexer#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#enable_automatic_search Indexer#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#enable_interactive_search Indexer#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#enable_rss Indexer#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Indexer implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#implementation Indexer#implementation}
  */
  readonly implementation: string;
  /**
  * Minimum seeders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#minimum_seeders Indexer#minimum_seeders}
  */
  readonly minimumSeeders?: number;
  /**
  * Indexer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#name Indexer#name}
  */
  readonly name: string;
  /**
  * Passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#passkey Indexer#passkey}
  */
  readonly passkey?: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#priority Indexer#priority}
  */
  readonly priority?: number;
  /**
  * Protocol. Valid values are 'usenet' and 'torrent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#protocol Indexer#protocol}
  */
  readonly protocol: string;
  /**
  * Allow ranked only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#ranked_only Indexer#ranked_only}
  */
  readonly rankedOnly?: boolean | cdktf.IResolvable;
  /**
  * Season seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#season_pack_seed_time Indexer#season_pack_seed_time}
  */
  readonly seasonPackSeedTime?: number;
  /**
  * Seed ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#seed_ratio Indexer#seed_ratio}
  */
  readonly seedRatio?: number;
  /**
  * Seed time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#seed_time Indexer#seed_time}
  */
  readonly seedTime?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#tags Indexer#tags}
  */
  readonly tags?: number[];
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#username Indexer#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer sonarr_indexer}
*/
export class Indexer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Indexer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Indexer to import
  * @param importFromId The id of the existing Indexer that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Indexer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer sonarr_indexer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
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
    this._allowZeroSize = config.allowZeroSize;
    this._animeCategories = config.animeCategories;
    this._animeStandardFormatSearch = config.animeStandardFormatSearch;
    this._apiKey = config.apiKey;
    this._apiPath = config.apiPath;
    this._baseUrl = config.baseUrl;
    this._captchaToken = config.captchaToken;
    this._categories = config.categories;
    this._configContract = config.configContract;
    this._cookie = config.cookie;
    this._delay = config.delay;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
    this._enableRss = config.enableRss;
    this._implementation = config.implementation;
    this._minimumSeeders = config.minimumSeeders;
    this._name = config.name;
    this._passkey = config.passkey;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._rankedOnly = config.rankedOnly;
    this._seasonPackSeedTime = config.seasonPackSeedTime;
    this._seedRatio = config.seedRatio;
    this._seedTime = config.seedTime;
    this._tags = config.tags;
    this._username = config.username;
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

  // anime_categories - computed: true, optional: true, required: false
  private _animeCategories?: number[]; 
  public get animeCategories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('anime_categories')));
  }
  public set animeCategories(value: number[]) {
    this._animeCategories = value;
  }
  public resetAnimeCategories() {
    this._animeCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animeCategoriesInput() {
    return this._animeCategories;
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

  // api_path - computed: true, optional: true, required: false
  private _apiPath?: string; 
  public get apiPath() {
    return this.getStringAttribute('api_path');
  }
  public set apiPath(value: string) {
    this._apiPath = value;
  }
  public resetApiPath() {
    this._apiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPathInput() {
    return this._apiPath;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // captcha_token - computed: true, optional: true, required: false
  private _captchaToken?: string; 
  public get captchaToken() {
    return this.getStringAttribute('captcha_token');
  }
  public set captchaToken(value: string) {
    this._captchaToken = value;
  }
  public resetCaptchaToken() {
    this._captchaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTokenInput() {
    return this._captchaToken;
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: number[]; 
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }
  public set categories(value: number[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // config_contract - computed: false, optional: false, required: true
  private _configContract?: string; 
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }
  public set configContract(value: string) {
    this._configContract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContractInput() {
    return this._configContract;
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

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
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

  // passkey - computed: true, optional: true, required: false
  private _passkey?: string; 
  public get passkey() {
    return this.getStringAttribute('passkey');
  }
  public set passkey(value: string) {
    this._passkey = value;
  }
  public resetPasskey() {
    this._passkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passkeyInput() {
    return this._passkey;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // ranked_only - computed: true, optional: true, required: false
  private _rankedOnly?: boolean | cdktf.IResolvable; 
  public get rankedOnly() {
    return this.getBooleanAttribute('ranked_only');
  }
  public set rankedOnly(value: boolean | cdktf.IResolvable) {
    this._rankedOnly = value;
  }
  public resetRankedOnly() {
    this._rankedOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankedOnlyInput() {
    return this._rankedOnly;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_parameters: cdktf.stringToTerraform(this._additionalParameters),
      allow_zero_size: cdktf.booleanToTerraform(this._allowZeroSize),
      anime_categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._animeCategories),
      anime_standard_format_search: cdktf.booleanToTerraform(this._animeStandardFormatSearch),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_path: cdktf.stringToTerraform(this._apiPath),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      captcha_token: cdktf.stringToTerraform(this._captchaToken),
      categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._categories),
      config_contract: cdktf.stringToTerraform(this._configContract),
      cookie: cdktf.stringToTerraform(this._cookie),
      delay: cdktf.numberToTerraform(this._delay),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      implementation: cdktf.stringToTerraform(this._implementation),
      minimum_seeders: cdktf.numberToTerraform(this._minimumSeeders),
      name: cdktf.stringToTerraform(this._name),
      passkey: cdktf.stringToTerraform(this._passkey),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      ranked_only: cdktf.booleanToTerraform(this._rankedOnly),
      season_pack_seed_time: cdktf.numberToTerraform(this._seasonPackSeedTime),
      seed_ratio: cdktf.numberToTerraform(this._seedRatio),
      seed_time: cdktf.numberToTerraform(this._seedTime),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
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
      allow_zero_size: {
        value: cdktf.booleanToHclTerraform(this._allowZeroSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anime_categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._animeCategories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      anime_standard_format_search: {
        value: cdktf.booleanToHclTerraform(this._animeStandardFormatSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_path: {
        value: cdktf.stringToHclTerraform(this._apiPath),
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
      captcha_token: {
        value: cdktf.stringToHclTerraform(this._captchaToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
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
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      passkey: {
        value: cdktf.stringToHclTerraform(this._passkey),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ranked_only: {
        value: cdktf.booleanToHclTerraform(this._rankedOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
