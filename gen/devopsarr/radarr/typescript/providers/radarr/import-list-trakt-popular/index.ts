// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListTraktPopularConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#access_token ImportListTraktPopular#access_token}
  */
  readonly accessToken: string;
  /**
  * Auth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#auth_user ImportListTraktPopular#auth_user}
  */
  readonly authUser: string;
  /**
  * Certification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#certification ImportListTraktPopular#certification}
  */
  readonly certification?: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#enable_auto ImportListTraktPopular#enable_auto}
  */
  readonly enableAuto?: boolean | cdktf.IResolvable;
  /**
  * Enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#enabled ImportListTraktPopular#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#expires ImportListTraktPopular#expires}
  */
  readonly expires?: string;
  /**
  * Genres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#genres ImportListTraktPopular#genres}
  */
  readonly genres?: string;
  /**
  * limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#limit ImportListTraktPopular#limit}
  */
  readonly limit: number;
  /**
  * List order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#list_order ImportListTraktPopular#list_order}
  */
  readonly listOrder?: number;
  /**
  * Minimum availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#minimum_availability ImportListTraktPopular#minimum_availability}
  */
  readonly minimumAvailability: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#monitor ImportListTraktPopular#monitor}
  */
  readonly monitor: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#name ImportListTraktPopular#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#quality_profile_id ImportListTraktPopular#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Rating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#rating ImportListTraktPopular#rating}
  */
  readonly rating?: string;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#refresh_token ImportListTraktPopular#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#root_folder_path ImportListTraktPopular#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Search on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#search_on_add ImportListTraktPopular#search_on_add}
  */
  readonly searchOnAdd?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#tags ImportListTraktPopular#tags}
  */
  readonly tags?: number[];
  /**
  * Trakt additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#trakt_additional_parameters ImportListTraktPopular#trakt_additional_parameters}
  */
  readonly traktAdditionalParameters?: string;
  /**
  * Trakt list type.`0` Trending, `1` Popular, `2` Anticipated, `3` BoxOffice, `4` TopWatchedByWeek, `5` TopWatchedByMonth, `6` TopWatchedByYear, `7` TopWatchedByAllTime, `8` RecommendedByWeek, `9` RecommendedByMonth, `10` RecommendedByYear, `10` RecommendedByAllTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#trakt_list_type ImportListTraktPopular#trakt_list_type}
  */
  readonly traktListType?: number;
  /**
  * Years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#years ImportListTraktPopular#years}
  */
  readonly years?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular radarr_import_list_trakt_popular}
*/
export class ImportListTraktPopular extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_trakt_popular";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListTraktPopular resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListTraktPopular to import
  * @param importFromId The id of the existing ImportListTraktPopular that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListTraktPopular to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_trakt_popular", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_trakt_popular radarr_import_list_trakt_popular} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListTraktPopularConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListTraktPopularConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_trakt_popular',
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
    this._accessToken = config.accessToken;
    this._authUser = config.authUser;
    this._certification = config.certification;
    this._enableAuto = config.enableAuto;
    this._enabled = config.enabled;
    this._expires = config.expires;
    this._genres = config.genres;
    this._limit = config.limit;
    this._listOrder = config.listOrder;
    this._minimumAvailability = config.minimumAvailability;
    this._monitor = config.monitor;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._rating = config.rating;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._searchOnAdd = config.searchOnAdd;
    this._tags = config.tags;
    this._traktAdditionalParameters = config.traktAdditionalParameters;
    this._traktListType = config.traktListType;
    this._years = config.years;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // auth_user - computed: false, optional: false, required: true
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
  }

  // certification - computed: true, optional: true, required: false
  private _certification?: string; 
  public get certification() {
    return this.getStringAttribute('certification');
  }
  public set certification(value: string) {
    this._certification = value;
  }
  public resetCertification() {
    this._certification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificationInput() {
    return this._certification;
  }

  // enable_auto - computed: true, optional: true, required: false
  private _enableAuto?: boolean | cdktf.IResolvable; 
  public get enableAuto() {
    return this.getBooleanAttribute('enable_auto');
  }
  public set enableAuto(value: boolean | cdktf.IResolvable) {
    this._enableAuto = value;
  }
  public resetEnableAuto() {
    this._enableAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoInput() {
    return this._enableAuto;
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

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // list_order - computed: true, optional: true, required: false
  private _listOrder?: number; 
  public get listOrder() {
    return this.getNumberAttribute('list_order');
  }
  public set listOrder(value: number) {
    this._listOrder = value;
  }
  public resetListOrder() {
    this._listOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOrderInput() {
    return this._listOrder;
  }

  // minimum_availability - computed: false, optional: false, required: true
  private _minimumAvailability?: string; 
  public get minimumAvailability() {
    return this.getStringAttribute('minimum_availability');
  }
  public set minimumAvailability(value: string) {
    this._minimumAvailability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAvailabilityInput() {
    return this._minimumAvailability;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
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

  // search_on_add - computed: true, optional: true, required: false
  private _searchOnAdd?: boolean | cdktf.IResolvable; 
  public get searchOnAdd() {
    return this.getBooleanAttribute('search_on_add');
  }
  public set searchOnAdd(value: boolean | cdktf.IResolvable) {
    this._searchOnAdd = value;
  }
  public resetSearchOnAdd() {
    this._searchOnAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOnAddInput() {
    return this._searchOnAdd;
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
      certification: cdktf.stringToTerraform(this._certification),
      enable_auto: cdktf.booleanToTerraform(this._enableAuto),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expires: cdktf.stringToTerraform(this._expires),
      genres: cdktf.stringToTerraform(this._genres),
      limit: cdktf.numberToTerraform(this._limit),
      list_order: cdktf.numberToTerraform(this._listOrder),
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      rating: cdktf.stringToTerraform(this._rating),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      search_on_add: cdktf.booleanToTerraform(this._searchOnAdd),
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
      certification: {
        value: cdktf.stringToHclTerraform(this._certification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto: {
        value: cdktf.booleanToHclTerraform(this._enableAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      list_order: {
        value: cdktf.numberToHclTerraform(this._listOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_availability: {
        value: cdktf.stringToHclTerraform(this._minimumAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
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
      search_on_add: {
        value: cdktf.booleanToHclTerraform(this._searchOnAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
