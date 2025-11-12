// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListTraktPopularConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#access_token ImportListTraktPopular#access_token}
  */
  readonly accessToken?: string;
  /**
  * Auth User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#auth_user ImportListTraktPopular#auth_user}
  */
  readonly authUser?: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#enable_automatic_add ImportListTraktPopular#enable_automatic_add}
  */
  readonly enableAutomaticAdd: boolean | cdktf.IResolvable;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#expires ImportListTraktPopular#expires}
  */
  readonly expires?: string;
  /**
  * Genres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#genres ImportListTraktPopular#genres}
  */
  readonly genres?: string;
  /**
  * Limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#limit ImportListTraktPopular#limit}
  */
  readonly limit?: number;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#name ImportListTraktPopular#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#quality_profile_id ImportListTraktPopular#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Rating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#rating ImportListTraktPopular#rating}
  */
  readonly rating?: string;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#refresh_token ImportListTraktPopular#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#root_folder_path ImportListTraktPopular#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Season folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#season_folder ImportListTraktPopular#season_folder}
  */
  readonly seasonFolder: boolean | cdktf.IResolvable;
  /**
  * Series type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#series_type ImportListTraktPopular#series_type}
  */
  readonly seriesType: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#should_monitor ImportListTraktPopular#should_monitor}
  */
  readonly shouldMonitor: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#tags ImportListTraktPopular#tags}
  */
  readonly tags?: number[];
  /**
  * Trakt additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#trakt_additional_parameters ImportListTraktPopular#trakt_additional_parameters}
  */
  readonly traktAdditionalParameters?: string;
  /**
  * Trakt list type. '0' Trending, '1' Popular, '2' Anticipated, '3' TopWatchedByWeek, '4' TopWatchedByMonth, '5' TopWatchedByYear, '6' TopWatchedByAllTime, '7' RecommendedByWeek, '8' RecommendedByMonth, '9' RecommendedByYear, '10' RecommendedByAllTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#trakt_list_type ImportListTraktPopular#trakt_list_type}
  */
  readonly traktListType: number;
  /**
  * Years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#years ImportListTraktPopular#years}
  */
  readonly years?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular sonarr_import_list_trakt_popular}
*/
export class ImportListTraktPopular extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list_trakt_popular";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListTraktPopular resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListTraktPopular to import
  * @param importFromId The id of the existing ImportListTraktPopular that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListTraktPopular to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list_trakt_popular", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_popular sonarr_import_list_trakt_popular} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListTraktPopularConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListTraktPopularConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list_trakt_popular',
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
    this._accessToken = config.accessToken;
    this._authUser = config.authUser;
    this._enableAutomaticAdd = config.enableAutomaticAdd;
    this._expires = config.expires;
    this._genres = config.genres;
    this._limit = config.limit;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._rating = config.rating;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._seriesType = config.seriesType;
    this._shouldMonitor = config.shouldMonitor;
    this._tags = config.tags;
    this._traktAdditionalParameters = config.traktAdditionalParameters;
    this._traktListType = config.traktListType;
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

  // enable_automatic_add - computed: false, optional: false, required: true
  private _enableAutomaticAdd?: boolean | cdktf.IResolvable; 
  public get enableAutomaticAdd() {
    return this.getBooleanAttribute('enable_automatic_add');
  }
  public set enableAutomaticAdd(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticAdd = value;
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

  // quality_profile_id - computed: false, optional: false, required: true
  private _qualityProfileId?: number; 
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }
  public set qualityProfileId(value: number) {
    this._qualityProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileIdInput() {
    return this._qualityProfileId;
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

  // root_folder_path - computed: false, optional: false, required: true
  private _rootFolderPath?: string; 
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }
  public set rootFolderPath(value: string) {
    this._rootFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderPathInput() {
    return this._rootFolderPath;
  }

  // season_folder - computed: false, optional: false, required: true
  private _seasonFolder?: boolean | cdktf.IResolvable; 
  public get seasonFolder() {
    return this.getBooleanAttribute('season_folder');
  }
  public set seasonFolder(value: boolean | cdktf.IResolvable) {
    this._seasonFolder = value;
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

  // should_monitor - computed: false, optional: false, required: true
  private _shouldMonitor?: string; 
  public get shouldMonitor() {
    return this.getStringAttribute('should_monitor');
  }
  public set shouldMonitor(value: string) {
    this._shouldMonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMonitorInput() {
    return this._shouldMonitor;
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

  // trakt_list_type - computed: false, optional: false, required: true
  private _traktListType?: number; 
  public get traktListType() {
    return this.getNumberAttribute('trakt_list_type');
  }
  public set traktListType(value: number) {
    this._traktListType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traktListTypeInput() {
    return this._traktListType;
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
      auth_user: cdktf.stringToTerraform(this._authUser),
      enable_automatic_add: cdktf.booleanToTerraform(this._enableAutomaticAdd),
      expires: cdktf.stringToTerraform(this._expires),
      genres: cdktf.stringToTerraform(this._genres),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      rating: cdktf.stringToTerraform(this._rating),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      series_type: cdktf.stringToTerraform(this._seriesType),
      should_monitor: cdktf.stringToTerraform(this._shouldMonitor),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      trakt_additional_parameters: cdktf.stringToTerraform(this._traktAdditionalParameters),
      trakt_list_type: cdktf.numberToTerraform(this._traktListType),
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
      auth_user: {
        value: cdktf.stringToHclTerraform(this._authUser),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      quality_profile_id: {
        value: cdktf.numberToHclTerraform(this._qualityProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
