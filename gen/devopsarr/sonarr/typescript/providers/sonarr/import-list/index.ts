// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#access_token ImportList#access_token}
  */
  readonly accessToken?: string;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#api_key ImportList#api_key}
  */
  readonly apiKey?: string;
  /**
  * Auth User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#auth_user ImportList#auth_user}
  */
  readonly authUser?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#base_url ImportList#base_url}
  */
  readonly baseUrl?: string;
  /**
  * ImportList configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#config_contract ImportList#config_contract}
  */
  readonly configContract: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#enable_automatic_add ImportList#enable_automatic_add}
  */
  readonly enableAutomaticAdd?: boolean | cdktf.IResolvable;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#expires ImportList#expires}
  */
  readonly expires?: string;
  /**
  * Genres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#genres ImportList#genres}
  */
  readonly genres?: string;
  /**
  * ImportList implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#implementation ImportList#implementation}
  */
  readonly implementation?: string;
  /**
  * Language profile IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#language_profile_ids ImportList#language_profile_ids}
  */
  readonly languageProfileIds?: number[];
  /**
  * Limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#limit ImportList#limit}
  */
  readonly limit?: number;
  /**
  * List ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#list_id ImportList#list_id}
  */
  readonly listId?: string;
  /**
  * Simkl list type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#list_type ImportList#list_type}
  */
  readonly listType?: number;
  /**
  * List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#listname ImportList#listname}
  */
  readonly listname?: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#name ImportList#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#quality_profile_id ImportList#quality_profile_id}
  */
  readonly qualityProfileId?: number;
  /**
  * Quality profile IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#quality_profile_ids ImportList#quality_profile_ids}
  */
  readonly qualityProfileIds?: number[];
  /**
  * Rating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#rating ImportList#rating}
  */
  readonly rating?: string;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#refresh_token ImportList#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#root_folder_path ImportList#root_folder_path}
  */
  readonly rootFolderPath?: string;
  /**
  * Season folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#season_folder ImportList#season_folder}
  */
  readonly seasonFolder?: boolean | cdktf.IResolvable;
  /**
  * Series type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#series_type ImportList#series_type}
  */
  readonly seriesType: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#should_monitor ImportList#should_monitor}
  */
  readonly shouldMonitor?: string;
  /**
  * Tag IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#tag_ids ImportList#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#tags ImportList#tags}
  */
  readonly tags?: number[];
  /**
  * Trakt additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#trakt_additional_parameters ImportList#trakt_additional_parameters}
  */
  readonly traktAdditionalParameters?: string;
  /**
  * Trakt list type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#trakt_list_type ImportList#trakt_list_type}
  */
  readonly traktListType?: number;
  /**
  * URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#url ImportList#url}
  */
  readonly url?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#username ImportList#username}
  */
  readonly username?: string;
  /**
  * Years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#years ImportList#years}
  */
  readonly years?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list sonarr_import_list}
*/
export class ImportList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportList to import
  * @param importFromId The id of the existing ImportList that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list sonarr_import_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list',
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
    this._accessToken = config.accessToken;
    this._apiKey = config.apiKey;
    this._authUser = config.authUser;
    this._baseUrl = config.baseUrl;
    this._configContract = config.configContract;
    this._enableAutomaticAdd = config.enableAutomaticAdd;
    this._expires = config.expires;
    this._genres = config.genres;
    this._implementation = config.implementation;
    this._languageProfileIds = config.languageProfileIds;
    this._limit = config.limit;
    this._listId = config.listId;
    this._listType = config.listType;
    this._listname = config.listname;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._qualityProfileIds = config.qualityProfileIds;
    this._rating = config.rating;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._seriesType = config.seriesType;
    this._shouldMonitor = config.shouldMonitor;
    this._tagIds = config.tagIds;
    this._tags = config.tags;
    this._traktAdditionalParameters = config.traktAdditionalParameters;
    this._traktListType = config.traktListType;
    this._url = config.url;
    this._username = config.username;
    this._years = config.years;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // auth_user - computed: true, optional: true, required: false
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  public resetAuthUser() {
    this._authUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
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

  // enable_automatic_add - computed: true, optional: true, required: false
  private _enableAutomaticAdd?: boolean | cdktf.IResolvable; 
  public get enableAutomaticAdd() {
    return this.getBooleanAttribute('enable_automatic_add');
  }
  public set enableAutomaticAdd(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticAdd = value;
  }
  public resetEnableAutomaticAdd() {
    this._enableAutomaticAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticAddInput() {
    return this._enableAutomaticAdd;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // genres - computed: true, optional: true, required: false
  private _genres?: string; 
  public get genres() {
    return this.getStringAttribute('genres');
  }
  public set genres(value: string) {
    this._genres = value;
  }
  public resetGenres() {
    this._genres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genresInput() {
    return this._genres;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: true, required: false
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  public resetImplementation() {
    this._implementation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // language_profile_ids - computed: true, optional: true, required: false
  private _languageProfileIds?: number[]; 
  public get languageProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('language_profile_ids')));
  }
  public set languageProfileIds(value: number[]) {
    this._languageProfileIds = value;
  }
  public resetLanguageProfileIds() {
    this._languageProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageProfileIdsInput() {
    return this._languageProfileIds;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // list_id - computed: true, optional: true, required: false
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  public resetListId() {
    this._listId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // list_type - computed: true, optional: true, required: false
  private _listType?: number; 
  public get listType() {
    return this.getNumberAttribute('list_type');
  }
  public set listType(value: number) {
    this._listType = value;
  }
  public resetListType() {
    this._listType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }

  // listname - computed: true, optional: true, required: false
  private _listname?: string; 
  public get listname() {
    return this.getStringAttribute('listname');
  }
  public set listname(value: string) {
    this._listname = value;
  }
  public resetListname() {
    this._listname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listnameInput() {
    return this._listname;
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

  // quality_profile_id - computed: true, optional: true, required: false
  private _qualityProfileId?: number; 
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }
  public set qualityProfileId(value: number) {
    this._qualityProfileId = value;
  }
  public resetQualityProfileId() {
    this._qualityProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileIdInput() {
    return this._qualityProfileId;
  }

  // quality_profile_ids - computed: true, optional: true, required: false
  private _qualityProfileIds?: number[]; 
  public get qualityProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('quality_profile_ids')));
  }
  public set qualityProfileIds(value: number[]) {
    this._qualityProfileIds = value;
  }
  public resetQualityProfileIds() {
    this._qualityProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileIdsInput() {
    return this._qualityProfileIds;
  }

  // rating - computed: true, optional: true, required: false
  private _rating?: string; 
  public get rating() {
    return this.getStringAttribute('rating');
  }
  public set rating(value: string) {
    this._rating = value;
  }
  public resetRating() {
    this._rating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingInput() {
    return this._rating;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // root_folder_path - computed: true, optional: true, required: false
  private _rootFolderPath?: string; 
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }
  public set rootFolderPath(value: string) {
    this._rootFolderPath = value;
  }
  public resetRootFolderPath() {
    this._rootFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderPathInput() {
    return this._rootFolderPath;
  }

  // season_folder - computed: true, optional: true, required: false
  private _seasonFolder?: boolean | cdktf.IResolvable; 
  public get seasonFolder() {
    return this.getBooleanAttribute('season_folder');
  }
  public set seasonFolder(value: boolean | cdktf.IResolvable) {
    this._seasonFolder = value;
  }
  public resetSeasonFolder() {
    this._seasonFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonFolderInput() {
    return this._seasonFolder;
  }

  // series_type - computed: false, optional: false, required: true
  private _seriesType?: string; 
  public get seriesType() {
    return this.getStringAttribute('series_type');
  }
  public set seriesType(value: string) {
    this._seriesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesTypeInput() {
    return this._seriesType;
  }

  // should_monitor - computed: true, optional: true, required: false
  private _shouldMonitor?: string; 
  public get shouldMonitor() {
    return this.getStringAttribute('should_monitor');
  }
  public set shouldMonitor(value: string) {
    this._shouldMonitor = value;
  }
  public resetShouldMonitor() {
    this._shouldMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMonitorInput() {
    return this._shouldMonitor;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
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

  // trakt_additional_parameters - computed: true, optional: true, required: false
  private _traktAdditionalParameters?: string; 
  public get traktAdditionalParameters() {
    return this.getStringAttribute('trakt_additional_parameters');
  }
  public set traktAdditionalParameters(value: string) {
    this._traktAdditionalParameters = value;
  }
  public resetTraktAdditionalParameters() {
    this._traktAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traktAdditionalParametersInput() {
    return this._traktAdditionalParameters;
  }

  // trakt_list_type - computed: true, optional: true, required: false
  private _traktListType?: number; 
  public get traktListType() {
    return this.getNumberAttribute('trakt_list_type');
  }
  public set traktListType(value: number) {
    this._traktListType = value;
  }
  public resetTraktListType() {
    this._traktListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traktListTypeInput() {
    return this._traktListType;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // years - computed: true, optional: true, required: false
  private _years?: string; 
  public get years() {
    return this.getStringAttribute('years');
  }
  public set years(value: string) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_key: cdktf.stringToTerraform(this._apiKey),
      auth_user: cdktf.stringToTerraform(this._authUser),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      config_contract: cdktf.stringToTerraform(this._configContract),
      enable_automatic_add: cdktf.booleanToTerraform(this._enableAutomaticAdd),
      expires: cdktf.stringToTerraform(this._expires),
      genres: cdktf.stringToTerraform(this._genres),
      implementation: cdktf.stringToTerraform(this._implementation),
      language_profile_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._languageProfileIds),
      limit: cdktf.numberToTerraform(this._limit),
      list_id: cdktf.stringToTerraform(this._listId),
      list_type: cdktf.numberToTerraform(this._listType),
      listname: cdktf.stringToTerraform(this._listname),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      quality_profile_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._qualityProfileIds),
      rating: cdktf.stringToTerraform(this._rating),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      series_type: cdktf.stringToTerraform(this._seriesType),
      should_monitor: cdktf.stringToTerraform(this._shouldMonitor),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      trakt_additional_parameters: cdktf.stringToTerraform(this._traktAdditionalParameters),
      trakt_list_type: cdktf.numberToTerraform(this._traktListType),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      years: cdktf.stringToTerraform(this._years),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_user: {
        value: cdktf.stringToHclTerraform(this._authUser),
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
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_automatic_add: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      genres: {
        value: cdktf.stringToHclTerraform(this._genres),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._languageProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_type: {
        value: cdktf.numberToHclTerraform(this._listType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listname: {
        value: cdktf.stringToHclTerraform(this._listname),
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
      quality_profile_id: {
        value: cdktf.numberToHclTerraform(this._qualityProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quality_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._qualityProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      rating: {
        value: cdktf.stringToHclTerraform(this._rating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_folder_path: {
        value: cdktf.stringToHclTerraform(this._rootFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      season_folder: {
        value: cdktf.booleanToHclTerraform(this._seasonFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      series_type: {
        value: cdktf.stringToHclTerraform(this._seriesType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_monitor: {
        value: cdktf.stringToHclTerraform(this._shouldMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      trakt_additional_parameters: {
        value: cdktf.stringToHclTerraform(this._traktAdditionalParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trakt_list_type: {
        value: cdktf.numberToHclTerraform(this._traktListType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      years: {
        value: cdktf.stringToHclTerraform(this._years),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
