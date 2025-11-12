// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#access_token ImportList#access_token}
  */
  readonly accessToken?: string;
  /**
  * Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#account_id ImportList#account_id}
  */
  readonly accountId?: string;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#api_key ImportList#api_key}
  */
  readonly apiKey?: string;
  /**
  * Auth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#auth_user ImportList#auth_user}
  */
  readonly authUser?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#base_url ImportList#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Include cast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#cast ImportList#cast}
  */
  readonly cast?: boolean | cdktf.IResolvable;
  /**
  * Include cast director.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#cast_director ImportList#cast_director}
  */
  readonly castDirector?: boolean | cdktf.IResolvable;
  /**
  * Include cast producer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#cast_producer ImportList#cast_producer}
  */
  readonly castProducer?: boolean | cdktf.IResolvable;
  /**
  * Include cast sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#cast_sound ImportList#cast_sound}
  */
  readonly castSound?: boolean | cdktf.IResolvable;
  /**
  * Include cast writing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#cast_writing ImportList#cast_writing}
  */
  readonly castWriting?: boolean | cdktf.IResolvable;
  /**
  * Certification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#certification ImportList#certification}
  */
  readonly certification?: string;
  /**
  * Company ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#company_id ImportList#company_id}
  */
  readonly companyId?: string;
  /**
  * ImportList configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#config_contract ImportList#config_contract}
  */
  readonly configContract: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#enable_auto ImportList#enable_auto}
  */
  readonly enableAuto?: boolean | cdktf.IResolvable;
  /**
  * Enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#enabled ImportList#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Exclude genre IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#exclude_genre_ids ImportList#exclude_genre_ids}
  */
  readonly excludeGenreIds?: string;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#expires ImportList#expires}
  */
  readonly expires?: string;
  /**
  * Genres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#genres ImportList#genres}
  */
  readonly genres?: string;
  /**
  * ImportList implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#implementation ImportList#implementation}
  */
  readonly implementation?: string;
  /**
  * Include genre IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#include_genre_ids ImportList#include_genre_ids}
  */
  readonly includeGenreIds?: string;
  /**
  * Keyword ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#keyword_id ImportList#keyword_id}
  */
  readonly keywordId?: string;
  /**
  * Language code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#language_code ImportList#language_code}
  */
  readonly languageCode?: number;
  /**
  * limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#limit ImportList#limit}
  */
  readonly limit?: number;
  /**
  * Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#link ImportList#link}
  */
  readonly link?: string;
  /**
  * List ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#list_id ImportList#list_id}
  */
  readonly listId?: string;
  /**
  * List order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#list_order ImportList#list_order}
  */
  readonly listOrder?: number;
  /**
  * List type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#list_type ImportList#list_type}
  */
  readonly listType: string;
  /**
  * List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#listname ImportList#listname}
  */
  readonly listname?: string;
  /**
  * Min score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#min_score ImportList#min_score}
  */
  readonly minScore?: number;
  /**
  * Min vote average.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#min_vote_average ImportList#min_vote_average}
  */
  readonly minVoteAverage?: string;
  /**
  * Min votes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#min_votes ImportList#min_votes}
  */
  readonly minVotes?: string;
  /**
  * Minimum availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#minimum_availability ImportList#minimum_availability}
  */
  readonly minimumAvailability: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#monitor ImportList#monitor}
  */
  readonly monitor: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#name ImportList#name}
  */
  readonly name: string;
  /**
  * Only active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#only_active ImportList#only_active}
  */
  readonly onlyActive?: boolean | cdktf.IResolvable;
  /**
  * Person ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#person_id ImportList#person_id}
  */
  readonly personId?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#port ImportList#port}
  */
  readonly port?: number;
  /**
  * Profile IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#profile_ids ImportList#profile_ids}
  */
  readonly profileIds?: number[];
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#quality_profile_id ImportList#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Rating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#rating ImportList#rating}
  */
  readonly rating?: string;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#refresh_token ImportList#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#root_folder_path ImportList#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Search on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#search_on_add ImportList#search_on_add}
  */
  readonly searchOnAdd?: boolean | cdktf.IResolvable;
  /**
  * Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#source ImportList#source}
  */
  readonly source?: number;
  /**
  * Tag IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#tag_ids ImportList#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#tags ImportList#tags}
  */
  readonly tags?: number[];
  /**
  * Certification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#tmdb_certification ImportList#tmdb_certification}
  */
  readonly tmdbCertification?: string;
  /**
  * TMDB list type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#tmdb_list_type ImportList#tmdb_list_type}
  */
  readonly tmdbListType?: number;
  /**
  * Trakt additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#trakt_additional_parameters ImportList#trakt_additional_parameters}
  */
  readonly traktAdditionalParameters?: string;
  /**
  * Trakt list type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#trakt_list_type ImportList#trakt_list_type}
  */
  readonly traktListType?: number;
  /**
  * URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#url ImportList#url}
  */
  readonly url?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#url_base ImportList#url_base}
  */
  readonly urlBase?: string;
  /**
  * User list type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#user_list_type ImportList#user_list_type}
  */
  readonly userListType?: number;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#username ImportList#username}
  */
  readonly username?: string;
  /**
  * Years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#years ImportList#years}
  */
  readonly years?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list radarr_import_list}
*/
export class ImportList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportList to import
  * @param importFromId The id of the existing ImportList that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list radarr_import_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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
    this._accountId = config.accountId;
    this._apiKey = config.apiKey;
    this._authUser = config.authUser;
    this._baseUrl = config.baseUrl;
    this._cast = config.cast;
    this._castDirector = config.castDirector;
    this._castProducer = config.castProducer;
    this._castSound = config.castSound;
    this._castWriting = config.castWriting;
    this._certification = config.certification;
    this._companyId = config.companyId;
    this._configContract = config.configContract;
    this._enableAuto = config.enableAuto;
    this._enabled = config.enabled;
    this._excludeGenreIds = config.excludeGenreIds;
    this._expires = config.expires;
    this._genres = config.genres;
    this._implementation = config.implementation;
    this._includeGenreIds = config.includeGenreIds;
    this._keywordId = config.keywordId;
    this._languageCode = config.languageCode;
    this._limit = config.limit;
    this._link = config.link;
    this._listId = config.listId;
    this._listOrder = config.listOrder;
    this._listType = config.listType;
    this._listname = config.listname;
    this._minScore = config.minScore;
    this._minVoteAverage = config.minVoteAverage;
    this._minVotes = config.minVotes;
    this._minimumAvailability = config.minimumAvailability;
    this._monitor = config.monitor;
    this._name = config.name;
    this._onlyActive = config.onlyActive;
    this._personId = config.personId;
    this._port = config.port;
    this._profileIds = config.profileIds;
    this._qualityProfileId = config.qualityProfileId;
    this._rating = config.rating;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._searchOnAdd = config.searchOnAdd;
    this._source = config.source;
    this._tagIds = config.tagIds;
    this._tags = config.tags;
    this._tmdbCertification = config.tmdbCertification;
    this._tmdbListType = config.tmdbListType;
    this._traktAdditionalParameters = config.traktAdditionalParameters;
    this._traktListType = config.traktListType;
    this._url = config.url;
    this._urlBase = config.urlBase;
    this._userListType = config.userListType;
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

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // cast - computed: true, optional: true, required: false
  private _cast?: boolean | cdktf.IResolvable; 
  public get cast() {
    return this.getBooleanAttribute('cast');
  }
  public set cast(value: boolean | cdktf.IResolvable) {
    this._cast = value;
  }
  public resetCast() {
    this._cast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castInput() {
    return this._cast;
  }

  // cast_director - computed: true, optional: true, required: false
  private _castDirector?: boolean | cdktf.IResolvable; 
  public get castDirector() {
    return this.getBooleanAttribute('cast_director');
  }
  public set castDirector(value: boolean | cdktf.IResolvable) {
    this._castDirector = value;
  }
  public resetCastDirector() {
    this._castDirector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castDirectorInput() {
    return this._castDirector;
  }

  // cast_producer - computed: true, optional: true, required: false
  private _castProducer?: boolean | cdktf.IResolvable; 
  public get castProducer() {
    return this.getBooleanAttribute('cast_producer');
  }
  public set castProducer(value: boolean | cdktf.IResolvable) {
    this._castProducer = value;
  }
  public resetCastProducer() {
    this._castProducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castProducerInput() {
    return this._castProducer;
  }

  // cast_sound - computed: true, optional: true, required: false
  private _castSound?: boolean | cdktf.IResolvable; 
  public get castSound() {
    return this.getBooleanAttribute('cast_sound');
  }
  public set castSound(value: boolean | cdktf.IResolvable) {
    this._castSound = value;
  }
  public resetCastSound() {
    this._castSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castSoundInput() {
    return this._castSound;
  }

  // cast_writing - computed: true, optional: true, required: false
  private _castWriting?: boolean | cdktf.IResolvable; 
  public get castWriting() {
    return this.getBooleanAttribute('cast_writing');
  }
  public set castWriting(value: boolean | cdktf.IResolvable) {
    this._castWriting = value;
  }
  public resetCastWriting() {
    this._castWriting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castWritingInput() {
    return this._castWriting;
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

  // company_id - computed: true, optional: true, required: false
  private _companyId?: string; 
  public get companyId() {
    return this.getStringAttribute('company_id');
  }
  public set companyId(value: string) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
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

  // keyword_id - computed: true, optional: true, required: false
  private _keywordId?: string; 
  public get keywordId() {
    return this.getStringAttribute('keyword_id');
  }
  public set keywordId(value: string) {
    this._keywordId = value;
  }
  public resetKeywordId() {
    this._keywordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordIdInput() {
    return this._keywordId;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: number; 
  public get languageCode() {
    return this.getNumberAttribute('language_code');
  }
  public set languageCode(value: number) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
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

  // list_type - computed: false, optional: false, required: true
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
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

  // min_score - computed: true, optional: true, required: false
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  public resetMinScore() {
    this._minScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
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

  // only_active - computed: true, optional: true, required: false
  private _onlyActive?: boolean | cdktf.IResolvable; 
  public get onlyActive() {
    return this.getBooleanAttribute('only_active');
  }
  public set onlyActive(value: boolean | cdktf.IResolvable) {
    this._onlyActive = value;
  }
  public resetOnlyActive() {
    this._onlyActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyActiveInput() {
    return this._onlyActive;
  }

  // person_id - computed: true, optional: true, required: false
  private _personId?: string; 
  public get personId() {
    return this.getStringAttribute('person_id');
  }
  public set personId(value: string) {
    this._personId = value;
  }
  public resetPersonId() {
    this._personId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personIdInput() {
    return this._personId;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profile_ids - computed: true, optional: true, required: false
  private _profileIds?: number[]; 
  public get profileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('profile_ids')));
  }
  public set profileIds(value: number[]) {
    this._profileIds = value;
  }
  public resetProfileIds() {
    this._profileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdsInput() {
    return this._profileIds;
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

  // source - computed: true, optional: true, required: false
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // tmdb_list_type - computed: true, optional: true, required: false
  private _tmdbListType?: number; 
  public get tmdbListType() {
    return this.getNumberAttribute('tmdb_list_type');
  }
  public set tmdbListType(value: number) {
    this._tmdbListType = value;
  }
  public resetTmdbListType() {
    this._tmdbListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmdbListTypeInput() {
    return this._tmdbListType;
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

  // url_base - computed: true, optional: true, required: false
  private _urlBase?: string; 
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }
  public set urlBase(value: string) {
    this._urlBase = value;
  }
  public resetUrlBase() {
    this._urlBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBaseInput() {
    return this._urlBase;
  }

  // user_list_type - computed: true, optional: true, required: false
  private _userListType?: number; 
  public get userListType() {
    return this.getNumberAttribute('user_list_type');
  }
  public set userListType(value: number) {
    this._userListType = value;
  }
  public resetUserListType() {
    this._userListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListTypeInput() {
    return this._userListType;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      auth_user: cdktf.stringToTerraform(this._authUser),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      cast: cdktf.booleanToTerraform(this._cast),
      cast_director: cdktf.booleanToTerraform(this._castDirector),
      cast_producer: cdktf.booleanToTerraform(this._castProducer),
      cast_sound: cdktf.booleanToTerraform(this._castSound),
      cast_writing: cdktf.booleanToTerraform(this._castWriting),
      certification: cdktf.stringToTerraform(this._certification),
      company_id: cdktf.stringToTerraform(this._companyId),
      config_contract: cdktf.stringToTerraform(this._configContract),
      enable_auto: cdktf.booleanToTerraform(this._enableAuto),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_genre_ids: cdktf.stringToTerraform(this._excludeGenreIds),
      expires: cdktf.stringToTerraform(this._expires),
      genres: cdktf.stringToTerraform(this._genres),
      implementation: cdktf.stringToTerraform(this._implementation),
      include_genre_ids: cdktf.stringToTerraform(this._includeGenreIds),
      keyword_id: cdktf.stringToTerraform(this._keywordId),
      language_code: cdktf.numberToTerraform(this._languageCode),
      limit: cdktf.numberToTerraform(this._limit),
      link: cdktf.stringToTerraform(this._link),
      list_id: cdktf.stringToTerraform(this._listId),
      list_order: cdktf.numberToTerraform(this._listOrder),
      list_type: cdktf.stringToTerraform(this._listType),
      listname: cdktf.stringToTerraform(this._listname),
      min_score: cdktf.numberToTerraform(this._minScore),
      min_vote_average: cdktf.stringToTerraform(this._minVoteAverage),
      min_votes: cdktf.stringToTerraform(this._minVotes),
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      only_active: cdktf.booleanToTerraform(this._onlyActive),
      person_id: cdktf.stringToTerraform(this._personId),
      port: cdktf.numberToTerraform(this._port),
      profile_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._profileIds),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      rating: cdktf.stringToTerraform(this._rating),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      search_on_add: cdktf.booleanToTerraform(this._searchOnAdd),
      source: cdktf.numberToTerraform(this._source),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      tmdb_certification: cdktf.stringToTerraform(this._tmdbCertification),
      tmdb_list_type: cdktf.numberToTerraform(this._tmdbListType),
      trakt_additional_parameters: cdktf.stringToTerraform(this._traktAdditionalParameters),
      trakt_list_type: cdktf.numberToTerraform(this._traktListType),
      url: cdktf.stringToTerraform(this._url),
      url_base: cdktf.stringToTerraform(this._urlBase),
      user_list_type: cdktf.numberToTerraform(this._userListType),
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
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      cast: {
        value: cdktf.booleanToHclTerraform(this._cast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_director: {
        value: cdktf.booleanToHclTerraform(this._castDirector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_producer: {
        value: cdktf.booleanToHclTerraform(this._castProducer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_sound: {
        value: cdktf.booleanToHclTerraform(this._castSound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_writing: {
        value: cdktf.booleanToHclTerraform(this._castWriting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certification: {
        value: cdktf.stringToHclTerraform(this._certification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.stringToHclTerraform(this._companyId),
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
      include_genre_ids: {
        value: cdktf.stringToHclTerraform(this._includeGenreIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_id: {
        value: cdktf.stringToHclTerraform(this._keywordId),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_order: {
        value: cdktf.numberToHclTerraform(this._listOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      list_type: {
        value: cdktf.stringToHclTerraform(this._listType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listname: {
        value: cdktf.stringToHclTerraform(this._listname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_score: {
        value: cdktf.numberToHclTerraform(this._minScore),
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
      only_active: {
        value: cdktf.booleanToHclTerraform(this._onlyActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      person_id: {
        value: cdktf.stringToHclTerraform(this._personId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._profileIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      source: {
        value: cdktf.numberToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      url_base: {
        value: cdktf.stringToHclTerraform(this._urlBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_list_type: {
        value: cdktf.numberToHclTerraform(this._userListType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
