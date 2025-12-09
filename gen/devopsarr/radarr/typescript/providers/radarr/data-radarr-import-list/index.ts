// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrImportListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list#name DataRadarrImportList#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list radarr_import_list}
*/
export class DataRadarrImportList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrImportList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrImportList to import
  * @param importFromId The id of the existing DataRadarrImportList that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrImportList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list radarr_import_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrImportListConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrImportListConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // auth_user - computed: true, optional: false, required: false
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // cast - computed: true, optional: false, required: false
  public get cast() {
    return this.getBooleanAttribute('cast');
  }

  // cast_director - computed: true, optional: false, required: false
  public get castDirector() {
    return this.getBooleanAttribute('cast_director');
  }

  // cast_producer - computed: true, optional: false, required: false
  public get castProducer() {
    return this.getBooleanAttribute('cast_producer');
  }

  // cast_sound - computed: true, optional: false, required: false
  public get castSound() {
    return this.getBooleanAttribute('cast_sound');
  }

  // cast_writing - computed: true, optional: false, required: false
  public get castWriting() {
    return this.getBooleanAttribute('cast_writing');
  }

  // certification - computed: true, optional: false, required: false
  public get certification() {
    return this.getStringAttribute('certification');
  }

  // company_id - computed: true, optional: false, required: false
  public get companyId() {
    return this.getStringAttribute('company_id');
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // enable_auto - computed: true, optional: false, required: false
  public get enableAuto() {
    return this.getBooleanAttribute('enable_auto');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_genre_ids - computed: true, optional: false, required: false
  public get excludeGenreIds() {
    return this.getStringAttribute('exclude_genre_ids');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // genres - computed: true, optional: false, required: false
  public get genres() {
    return this.getStringAttribute('genres');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // include_genre_ids - computed: true, optional: false, required: false
  public get includeGenreIds() {
    return this.getStringAttribute('include_genre_ids');
  }

  // keyword_id - computed: true, optional: false, required: false
  public get keywordId() {
    return this.getStringAttribute('keyword_id');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getNumberAttribute('language_code');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // list_id - computed: true, optional: false, required: false
  public get listId() {
    return this.getStringAttribute('list_id');
  }

  // list_order - computed: true, optional: false, required: false
  public get listOrder() {
    return this.getNumberAttribute('list_order');
  }

  // list_type - computed: true, optional: false, required: false
  public get listType() {
    return this.getStringAttribute('list_type');
  }

  // listname - computed: true, optional: false, required: false
  public get listname() {
    return this.getStringAttribute('listname');
  }

  // min_score - computed: true, optional: false, required: false
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }

  // min_vote_average - computed: true, optional: false, required: false
  public get minVoteAverage() {
    return this.getStringAttribute('min_vote_average');
  }

  // min_votes - computed: true, optional: false, required: false
  public get minVotes() {
    return this.getStringAttribute('min_votes');
  }

  // minimum_availability - computed: true, optional: false, required: false
  public get minimumAvailability() {
    return this.getStringAttribute('minimum_availability');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
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

  // only_active - computed: true, optional: false, required: false
  public get onlyActive() {
    return this.getBooleanAttribute('only_active');
  }

  // person_id - computed: true, optional: false, required: false
  public get personId() {
    return this.getStringAttribute('person_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // profile_ids - computed: true, optional: false, required: false
  public get profileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('profile_ids')));
  }

  // quality_profile_id - computed: true, optional: false, required: false
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }

  // rating - computed: true, optional: false, required: false
  public get rating() {
    return this.getStringAttribute('rating');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // root_folder_path - computed: true, optional: false, required: false
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }

  // search_on_add - computed: true, optional: false, required: false
  public get searchOnAdd() {
    return this.getBooleanAttribute('search_on_add');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getNumberAttribute('source');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // tmdb_certification - computed: true, optional: false, required: false
  public get tmdbCertification() {
    return this.getStringAttribute('tmdb_certification');
  }

  // tmdb_list_type - computed: true, optional: false, required: false
  public get tmdbListType() {
    return this.getNumberAttribute('tmdb_list_type');
  }

  // trakt_additional_parameters - computed: true, optional: false, required: false
  public get traktAdditionalParameters() {
    return this.getStringAttribute('trakt_additional_parameters');
  }

  // trakt_list_type - computed: true, optional: false, required: false
  public get traktListType() {
    return this.getNumberAttribute('trakt_list_type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_base - computed: true, optional: false, required: false
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }

  // user_list_type - computed: true, optional: false, required: false
  public get userListType() {
    return this.getNumberAttribute('user_list_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getStringAttribute('years');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
