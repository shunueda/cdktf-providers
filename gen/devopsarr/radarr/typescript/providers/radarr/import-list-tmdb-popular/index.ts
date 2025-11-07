// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListTmdbPopularConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#enable_auto ImportListTmdbPopular#enable_auto}
  */
  readonly enableAuto?: boolean | cdktf.IResolvable;
  /**
  * Enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#enabled ImportListTmdbPopular#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Exclude genre IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#exclude_genre_ids ImportListTmdbPopular#exclude_genre_ids}
  */
  readonly excludeGenreIds?: string;
  /**
  * Include genre IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#include_genre_ids ImportListTmdbPopular#include_genre_ids}
  */
  readonly includeGenreIds?: string;
  /**
  * Language code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#language_code ImportListTmdbPopular#language_code}
  */
  readonly languageCode: number;
  /**
  * List order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#list_order ImportListTmdbPopular#list_order}
  */
  readonly listOrder?: number;
  /**
  * Min vote average.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#min_vote_average ImportListTmdbPopular#min_vote_average}
  */
  readonly minVoteAverage?: string;
  /**
  * Min votes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#min_votes ImportListTmdbPopular#min_votes}
  */
  readonly minVotes?: string;
  /**
  * Minimum availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#minimum_availability ImportListTmdbPopular#minimum_availability}
  */
  readonly minimumAvailability: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#monitor ImportListTmdbPopular#monitor}
  */
  readonly monitor: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#name ImportListTmdbPopular#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#quality_profile_id ImportListTmdbPopular#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#root_folder_path ImportListTmdbPopular#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Search on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#search_on_add ImportListTmdbPopular#search_on_add}
  */
  readonly searchOnAdd?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#tags ImportListTmdbPopular#tags}
  */
  readonly tags?: number[];
  /**
  * Certification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#tmdb_certification ImportListTmdbPopular#tmdb_certification}
  */
  readonly tmdbCertification?: string;
  /**
  * TMDB list type. `1` Theaters, `2` Popular, `3` Top, `4` Upcoming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#tmdb_list_type ImportListTmdbPopular#tmdb_list_type}
  */
  readonly tmdbListType: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular radarr_import_list_tmdb_popular}
*/
export class ImportListTmdbPopular extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_tmdb_popular";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListTmdbPopular resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListTmdbPopular to import
  * @param importFromId The id of the existing ImportListTmdbPopular that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListTmdbPopular to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_tmdb_popular", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_popular radarr_import_list_tmdb_popular} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListTmdbPopularConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListTmdbPopularConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_tmdb_popular',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAuto = config.enableAuto;
    this._enabled = config.enabled;
    this._excludeGenreIds = config.excludeGenreIds;
    this._includeGenreIds = config.includeGenreIds;
    this._languageCode = config.languageCode;
    this._listOrder = config.listOrder;
    this._minVoteAverage = config.minVoteAverage;
    this._minVotes = config.minVotes;
    this._minimumAvailability = config.minimumAvailability;
    this._monitor = config.monitor;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._rootFolderPath = config.rootFolderPath;
    this._searchOnAdd = config.searchOnAdd;
    this._tags = config.tags;
    this._tmdbCertification = config.tmdbCertification;
    this._tmdbListType = config.tmdbListType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // exclude_genre_ids - computed: true, optional: true, required: false
  private _excludeGenreIds?: string; 
  public get excludeGenreIds() {
    return this.getStringAttribute('exclude_genre_ids');
  }
  public set excludeGenreIds(value: string) {
    this._excludeGenreIds = value;
  }
  public resetExcludeGenreIds() {
    this._excludeGenreIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGenreIdsInput() {
    return this._excludeGenreIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_genre_ids - computed: true, optional: true, required: false
  private _includeGenreIds?: string; 
  public get includeGenreIds() {
    return this.getStringAttribute('include_genre_ids');
  }
  public set includeGenreIds(value: string) {
    this._includeGenreIds = value;
  }
  public resetIncludeGenreIds() {
    this._includeGenreIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGenreIdsInput() {
    return this._includeGenreIds;
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: number; 
  public get languageCode() {
    return this.getNumberAttribute('language_code');
  }
  public set languageCode(value: number) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // min_vote_average - computed: true, optional: true, required: false
  private _minVoteAverage?: string; 
  public get minVoteAverage() {
    return this.getStringAttribute('min_vote_average');
  }
  public set minVoteAverage(value: string) {
    this._minVoteAverage = value;
  }
  public resetMinVoteAverage() {
    this._minVoteAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVoteAverageInput() {
    return this._minVoteAverage;
  }

  // min_votes - computed: true, optional: true, required: false
  private _minVotes?: string; 
  public get minVotes() {
    return this.getStringAttribute('min_votes');
  }
  public set minVotes(value: string) {
    this._minVotes = value;
  }
  public resetMinVotes() {
    this._minVotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVotesInput() {
    return this._minVotes;
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

  // tmdb_certification - computed: true, optional: true, required: false
  private _tmdbCertification?: string; 
  public get tmdbCertification() {
    return this.getStringAttribute('tmdb_certification');
  }
  public set tmdbCertification(value: string) {
    this._tmdbCertification = value;
  }
  public resetTmdbCertification() {
    this._tmdbCertification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmdbCertificationInput() {
    return this._tmdbCertification;
  }

  // tmdb_list_type - computed: false, optional: false, required: true
  private _tmdbListType?: number; 
  public get tmdbListType() {
    return this.getNumberAttribute('tmdb_list_type');
  }
  public set tmdbListType(value: number) {
    this._tmdbListType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tmdbListTypeInput() {
    return this._tmdbListType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_auto: cdktf.booleanToTerraform(this._enableAuto),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_genre_ids: cdktf.stringToTerraform(this._excludeGenreIds),
      include_genre_ids: cdktf.stringToTerraform(this._includeGenreIds),
      language_code: cdktf.numberToTerraform(this._languageCode),
      list_order: cdktf.numberToTerraform(this._listOrder),
      min_vote_average: cdktf.stringToTerraform(this._minVoteAverage),
      min_votes: cdktf.stringToTerraform(this._minVotes),
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      search_on_add: cdktf.booleanToTerraform(this._searchOnAdd),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      tmdb_certification: cdktf.stringToTerraform(this._tmdbCertification),
      tmdb_list_type: cdktf.numberToTerraform(this._tmdbListType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      exclude_genre_ids: {
        value: cdktf.stringToHclTerraform(this._excludeGenreIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_genre_ids: {
        value: cdktf.stringToHclTerraform(this._includeGenreIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language_code: {
        value: cdktf.numberToHclTerraform(this._languageCode),
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
      min_vote_average: {
        value: cdktf.stringToHclTerraform(this._minVoteAverage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_votes: {
        value: cdktf.stringToHclTerraform(this._minVotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tmdb_certification: {
        value: cdktf.stringToHclTerraform(this._tmdbCertification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmdb_list_type: {
        value: cdktf.numberToHclTerraform(this._tmdbListType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
