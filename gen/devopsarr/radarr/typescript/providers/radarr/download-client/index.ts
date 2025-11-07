// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add paused flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#add_paused DownloadClient#add_paused}
  */
  readonly addPaused?: boolean | cdktf.IResolvable;
  /**
  * Add stopped flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#add_stopped DownloadClient#add_stopped}
  */
  readonly addStopped?: boolean | cdktf.IResolvable;
  /**
  * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#additional_tags DownloadClient#additional_tags}
  */
  readonly additionalTags?: number[];
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#api_key DownloadClient#api_key}
  */
  readonly apiKey?: string;
  /**
  * API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#api_url DownloadClient#api_url}
  */
  readonly apiUrl?: string;
  /**
  * App ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#app_id DownloadClient#app_id}
  */
  readonly appId?: string;
  /**
  * App Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#app_token DownloadClient#app_token}
  */
  readonly appToken?: string;
  /**
  * Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#category DownloadClient#category}
  */
  readonly category?: string;
  /**
  * DownloadClient configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#config_contract DownloadClient#config_contract}
  */
  readonly configContract: string;
  /**
  * Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#destination DownloadClient#destination}
  */
  readonly destination?: string;
  /**
  * Movie directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#destination_directory DownloadClient#destination_directory}
  */
  readonly destinationDirectory?: string;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#enable DownloadClient#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Field tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#field_tags DownloadClient#field_tags}
  */
  readonly fieldTags?: string[];
  /**
  * First and last flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#first_and_last DownloadClient#first_and_last}
  */
  readonly firstAndLast?: boolean | cdktf.IResolvable;
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#host DownloadClient#host}
  */
  readonly host?: string;
  /**
  * DownloadClient implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#implementation DownloadClient#implementation}
  */
  readonly implementation: string;
  /**
  * Initial state. `0` Start, `1` ForceStart, `2` Pause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#initial_state DownloadClient#initial_state}
  */
  readonly initialState?: number;
  /**
  * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#intial_state DownloadClient#intial_state}
  */
  readonly intialState?: number;
  /**
  * Magnet file extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#magnet_file_extension DownloadClient#magnet_file_extension}
  */
  readonly magnetFileExtension?: string;
  /**
  * Movie category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#movie_category DownloadClient#movie_category}
  */
  readonly movieCategory?: string;
  /**
  * Movie directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#movie_directory DownloadClient#movie_directory}
  */
  readonly movieDirectory?: string;
  /**
  * Movie imported category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#movie_imported_category DownloadClient#movie_imported_category}
  */
  readonly movieImportedCategory?: string;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#name DownloadClient#name}
  */
  readonly name: string;
  /**
  * NZB folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#nzb_folder DownloadClient#nzb_folder}
  */
  readonly nzbFolder?: string;
  /**
  * Older Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#older_movie_priority DownloadClient#older_movie_priority}
  */
  readonly olderMoviePriority?: number;
  /**
  * Older Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#older_priority DownloadClient#older_priority}
  */
  readonly olderPriority?: number;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#password DownloadClient#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#port DownloadClient#port}
  */
  readonly port?: number;
  /**
  * Post import tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#post_import_tags DownloadClient#post_import_tags}
  */
  readonly postImportTags?: string[];
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#priority DownloadClient#priority}
  */
  readonly priority?: number;
  /**
  * Protocol. Valid values are 'usenet' and 'torrent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#protocol DownloadClient#protocol}
  */
  readonly protocol: string;
  /**
  * Read only flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#read_only DownloadClient#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Recent Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#recent_movie_priority DownloadClient#recent_movie_priority}
  */
  readonly recentMoviePriority?: number;
  /**
  * Recent Movie priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#recent_priority DownloadClient#recent_priority}
  */
  readonly recentPriority?: number;
  /**
  * Remove completed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#remove_completed_downloads DownloadClient#remove_completed_downloads}
  */
  readonly removeCompletedDownloads?: boolean | cdktf.IResolvable;
  /**
  * Remove failed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#remove_failed_downloads DownloadClient#remove_failed_downloads}
  */
  readonly removeFailedDownloads?: boolean | cdktf.IResolvable;
  /**
  * RPC path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#rpc_path DownloadClient#rpc_path}
  */
  readonly rpcPath?: string;
  /**
  * Save magnet files flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#save_magnet_files DownloadClient#save_magnet_files}
  */
  readonly saveMagnetFiles?: boolean | cdktf.IResolvable;
  /**
  * Secret token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#secret_token DownloadClient#secret_token}
  */
  readonly secretToken?: string;
  /**
  * Sequential order flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#sequential_order DownloadClient#sequential_order}
  */
  readonly sequentialOrder?: boolean | cdktf.IResolvable;
  /**
  * Start on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#start_on_add DownloadClient#start_on_add}
  */
  readonly startOnAdd?: boolean | cdktf.IResolvable;
  /**
  * STRM folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#strm_folder DownloadClient#strm_folder}
  */
  readonly strmFolder?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#tags DownloadClient#tags}
  */
  readonly tags?: number[];
  /**
  * Torrent folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#torrent_folder DownloadClient#torrent_folder}
  */
  readonly torrentFolder?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#url_base DownloadClient#url_base}
  */
  readonly urlBase?: string;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#use_ssl DownloadClient#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#username DownloadClient#username}
  */
  readonly username?: string;
  /**
  * Watch folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#watch_folder DownloadClient#watch_folder}
  */
  readonly watchFolder?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client radarr_download_client}
*/
export class DownloadClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClient to import
  * @param importFromId The id of the existing DownloadClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client radarr_download_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client',
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
    this._addPaused = config.addPaused;
    this._addStopped = config.addStopped;
    this._additionalTags = config.additionalTags;
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._appId = config.appId;
    this._appToken = config.appToken;
    this._category = config.category;
    this._configContract = config.configContract;
    this._destination = config.destination;
    this._destinationDirectory = config.destinationDirectory;
    this._enable = config.enable;
    this._fieldTags = config.fieldTags;
    this._firstAndLast = config.firstAndLast;
    this._host = config.host;
    this._implementation = config.implementation;
    this._initialState = config.initialState;
    this._intialState = config.intialState;
    this._magnetFileExtension = config.magnetFileExtension;
    this._movieCategory = config.movieCategory;
    this._movieDirectory = config.movieDirectory;
    this._movieImportedCategory = config.movieImportedCategory;
    this._name = config.name;
    this._nzbFolder = config.nzbFolder;
    this._olderMoviePriority = config.olderMoviePriority;
    this._olderPriority = config.olderPriority;
    this._password = config.password;
    this._port = config.port;
    this._postImportTags = config.postImportTags;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._readOnly = config.readOnly;
    this._recentMoviePriority = config.recentMoviePriority;
    this._recentPriority = config.recentPriority;
    this._removeCompletedDownloads = config.removeCompletedDownloads;
    this._removeFailedDownloads = config.removeFailedDownloads;
    this._rpcPath = config.rpcPath;
    this._saveMagnetFiles = config.saveMagnetFiles;
    this._secretToken = config.secretToken;
    this._sequentialOrder = config.sequentialOrder;
    this._startOnAdd = config.startOnAdd;
    this._strmFolder = config.strmFolder;
    this._tags = config.tags;
    this._torrentFolder = config.torrentFolder;
    this._urlBase = config.urlBase;
    this._useSsl = config.useSsl;
    this._username = config.username;
    this._watchFolder = config.watchFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paused - computed: true, optional: true, required: false
  private _addPaused?: boolean | cdktf.IResolvable; 
  public get addPaused() {
    return this.getBooleanAttribute('add_paused');
  }
  public set addPaused(value: boolean | cdktf.IResolvable) {
    this._addPaused = value;
  }
  public resetAddPaused() {
    this._addPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPausedInput() {
    return this._addPaused;
  }

  // add_stopped - computed: true, optional: true, required: false
  private _addStopped?: boolean | cdktf.IResolvable; 
  public get addStopped() {
    return this.getBooleanAttribute('add_stopped');
  }
  public set addStopped(value: boolean | cdktf.IResolvable) {
    this._addStopped = value;
  }
  public resetAddStopped() {
    this._addStopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStoppedInput() {
    return this._addStopped;
  }

  // additional_tags - computed: true, optional: true, required: false
  private _additionalTags?: number[]; 
  public get additionalTags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('additional_tags')));
  }
  public set additionalTags(value: number[]) {
    this._additionalTags = value;
  }
  public resetAdditionalTags() {
    this._additionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags;
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

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_token - computed: true, optional: true, required: false
  private _appToken?: string; 
  public get appToken() {
    return this.getStringAttribute('app_token');
  }
  public set appToken(value: string) {
    this._appToken = value;
  }
  public resetAppToken() {
    this._appToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTokenInput() {
    return this._appToken;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_directory - computed: true, optional: true, required: false
  private _destinationDirectory?: string; 
  public get destinationDirectory() {
    return this.getStringAttribute('destination_directory');
  }
  public set destinationDirectory(value: string) {
    this._destinationDirectory = value;
  }
  public resetDestinationDirectory() {
    this._destinationDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirectoryInput() {
    return this._destinationDirectory;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // field_tags - computed: true, optional: true, required: false
  private _fieldTags?: string[]; 
  public get fieldTags() {
    return cdktf.Fn.tolist(this.getListAttribute('field_tags'));
  }
  public set fieldTags(value: string[]) {
    this._fieldTags = value;
  }
  public resetFieldTags() {
    this._fieldTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTagsInput() {
    return this._fieldTags;
  }

  // first_and_last - computed: true, optional: true, required: false
  private _firstAndLast?: boolean | cdktf.IResolvable; 
  public get firstAndLast() {
    return this.getBooleanAttribute('first_and_last');
  }
  public set firstAndLast(value: boolean | cdktf.IResolvable) {
    this._firstAndLast = value;
  }
  public resetFirstAndLast() {
    this._firstAndLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAndLastInput() {
    return this._firstAndLast;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // initial_state - computed: true, optional: true, required: false
  private _initialState?: number; 
  public get initialState() {
    return this.getNumberAttribute('initial_state');
  }
  public set initialState(value: number) {
    this._initialState = value;
  }
  public resetInitialState() {
    this._initialState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialStateInput() {
    return this._initialState;
  }

  // intial_state - computed: true, optional: true, required: false
  private _intialState?: number; 
  public get intialState() {
    return this.getNumberAttribute('intial_state');
  }
  public set intialState(value: number) {
    this._intialState = value;
  }
  public resetIntialState() {
    this._intialState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intialStateInput() {
    return this._intialState;
  }

  // magnet_file_extension - computed: true, optional: true, required: false
  private _magnetFileExtension?: string; 
  public get magnetFileExtension() {
    return this.getStringAttribute('magnet_file_extension');
  }
  public set magnetFileExtension(value: string) {
    this._magnetFileExtension = value;
  }
  public resetMagnetFileExtension() {
    this._magnetFileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magnetFileExtensionInput() {
    return this._magnetFileExtension;
  }

  // movie_category - computed: true, optional: true, required: false
  private _movieCategory?: string; 
  public get movieCategory() {
    return this.getStringAttribute('movie_category');
  }
  public set movieCategory(value: string) {
    this._movieCategory = value;
  }
  public resetMovieCategory() {
    this._movieCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieCategoryInput() {
    return this._movieCategory;
  }

  // movie_directory - computed: true, optional: true, required: false
  private _movieDirectory?: string; 
  public get movieDirectory() {
    return this.getStringAttribute('movie_directory');
  }
  public set movieDirectory(value: string) {
    this._movieDirectory = value;
  }
  public resetMovieDirectory() {
    this._movieDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieDirectoryInput() {
    return this._movieDirectory;
  }

  // movie_imported_category - computed: true, optional: true, required: false
  private _movieImportedCategory?: string; 
  public get movieImportedCategory() {
    return this.getStringAttribute('movie_imported_category');
  }
  public set movieImportedCategory(value: string) {
    this._movieImportedCategory = value;
  }
  public resetMovieImportedCategory() {
    this._movieImportedCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieImportedCategoryInput() {
    return this._movieImportedCategory;
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

  // nzb_folder - computed: true, optional: true, required: false
  private _nzbFolder?: string; 
  public get nzbFolder() {
    return this.getStringAttribute('nzb_folder');
  }
  public set nzbFolder(value: string) {
    this._nzbFolder = value;
  }
  public resetNzbFolder() {
    this._nzbFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nzbFolderInput() {
    return this._nzbFolder;
  }

  // older_movie_priority - computed: true, optional: true, required: false
  private _olderMoviePriority?: number; 
  public get olderMoviePriority() {
    return this.getNumberAttribute('older_movie_priority');
  }
  public set olderMoviePriority(value: number) {
    this._olderMoviePriority = value;
  }
  public resetOlderMoviePriority() {
    this._olderMoviePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderMoviePriorityInput() {
    return this._olderMoviePriority;
  }

  // older_priority - computed: true, optional: true, required: false
  private _olderPriority?: number; 
  public get olderPriority() {
    return this.getNumberAttribute('older_priority');
  }
  public set olderPriority(value: number) {
    this._olderPriority = value;
  }
  public resetOlderPriority() {
    this._olderPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderPriorityInput() {
    return this._olderPriority;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // post_import_tags - computed: true, optional: true, required: false
  private _postImportTags?: string[]; 
  public get postImportTags() {
    return cdktf.Fn.tolist(this.getListAttribute('post_import_tags'));
  }
  public set postImportTags(value: string[]) {
    this._postImportTags = value;
  }
  public resetPostImportTags() {
    this._postImportTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postImportTagsInput() {
    return this._postImportTags;
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

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recent_movie_priority - computed: true, optional: true, required: false
  private _recentMoviePriority?: number; 
  public get recentMoviePriority() {
    return this.getNumberAttribute('recent_movie_priority');
  }
  public set recentMoviePriority(value: number) {
    this._recentMoviePriority = value;
  }
  public resetRecentMoviePriority() {
    this._recentMoviePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentMoviePriorityInput() {
    return this._recentMoviePriority;
  }

  // recent_priority - computed: true, optional: true, required: false
  private _recentPriority?: number; 
  public get recentPriority() {
    return this.getNumberAttribute('recent_priority');
  }
  public set recentPriority(value: number) {
    this._recentPriority = value;
  }
  public resetRecentPriority() {
    this._recentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentPriorityInput() {
    return this._recentPriority;
  }

  // remove_completed_downloads - computed: true, optional: true, required: false
  private _removeCompletedDownloads?: boolean | cdktf.IResolvable; 
  public get removeCompletedDownloads() {
    return this.getBooleanAttribute('remove_completed_downloads');
  }
  public set removeCompletedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeCompletedDownloads = value;
  }
  public resetRemoveCompletedDownloads() {
    this._removeCompletedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCompletedDownloadsInput() {
    return this._removeCompletedDownloads;
  }

  // remove_failed_downloads - computed: true, optional: true, required: false
  private _removeFailedDownloads?: boolean | cdktf.IResolvable; 
  public get removeFailedDownloads() {
    return this.getBooleanAttribute('remove_failed_downloads');
  }
  public set removeFailedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeFailedDownloads = value;
  }
  public resetRemoveFailedDownloads() {
    this._removeFailedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFailedDownloadsInput() {
    return this._removeFailedDownloads;
  }

  // rpc_path - computed: true, optional: true, required: false
  private _rpcPath?: string; 
  public get rpcPath() {
    return this.getStringAttribute('rpc_path');
  }
  public set rpcPath(value: string) {
    this._rpcPath = value;
  }
  public resetRpcPath() {
    this._rpcPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcPathInput() {
    return this._rpcPath;
  }

  // save_magnet_files - computed: true, optional: true, required: false
  private _saveMagnetFiles?: boolean | cdktf.IResolvable; 
  public get saveMagnetFiles() {
    return this.getBooleanAttribute('save_magnet_files');
  }
  public set saveMagnetFiles(value: boolean | cdktf.IResolvable) {
    this._saveMagnetFiles = value;
  }
  public resetSaveMagnetFiles() {
    this._saveMagnetFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveMagnetFilesInput() {
    return this._saveMagnetFiles;
  }

  // secret_token - computed: true, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }

  // sequential_order - computed: true, optional: true, required: false
  private _sequentialOrder?: boolean | cdktf.IResolvable; 
  public get sequentialOrder() {
    return this.getBooleanAttribute('sequential_order');
  }
  public set sequentialOrder(value: boolean | cdktf.IResolvable) {
    this._sequentialOrder = value;
  }
  public resetSequentialOrder() {
    this._sequentialOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequentialOrderInput() {
    return this._sequentialOrder;
  }

  // start_on_add - computed: true, optional: true, required: false
  private _startOnAdd?: boolean | cdktf.IResolvable; 
  public get startOnAdd() {
    return this.getBooleanAttribute('start_on_add');
  }
  public set startOnAdd(value: boolean | cdktf.IResolvable) {
    this._startOnAdd = value;
  }
  public resetStartOnAdd() {
    this._startOnAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnAddInput() {
    return this._startOnAdd;
  }

  // strm_folder - computed: true, optional: true, required: false
  private _strmFolder?: string; 
  public get strmFolder() {
    return this.getStringAttribute('strm_folder');
  }
  public set strmFolder(value: string) {
    this._strmFolder = value;
  }
  public resetStrmFolder() {
    this._strmFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strmFolderInput() {
    return this._strmFolder;
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

  // torrent_folder - computed: true, optional: true, required: false
  private _torrentFolder?: string; 
  public get torrentFolder() {
    return this.getStringAttribute('torrent_folder');
  }
  public set torrentFolder(value: string) {
    this._torrentFolder = value;
  }
  public resetTorrentFolder() {
    this._torrentFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torrentFolderInput() {
    return this._torrentFolder;
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

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
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

  // watch_folder - computed: true, optional: true, required: false
  private _watchFolder?: string; 
  public get watchFolder() {
    return this.getStringAttribute('watch_folder');
  }
  public set watchFolder(value: string) {
    this._watchFolder = value;
  }
  public resetWatchFolder() {
    this._watchFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFolderInput() {
    return this._watchFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_paused: cdktf.booleanToTerraform(this._addPaused),
      add_stopped: cdktf.booleanToTerraform(this._addStopped),
      additional_tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._additionalTags),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      app_id: cdktf.stringToTerraform(this._appId),
      app_token: cdktf.stringToTerraform(this._appToken),
      category: cdktf.stringToTerraform(this._category),
      config_contract: cdktf.stringToTerraform(this._configContract),
      destination: cdktf.stringToTerraform(this._destination),
      destination_directory: cdktf.stringToTerraform(this._destinationDirectory),
      enable: cdktf.booleanToTerraform(this._enable),
      field_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldTags),
      first_and_last: cdktf.booleanToTerraform(this._firstAndLast),
      host: cdktf.stringToTerraform(this._host),
      implementation: cdktf.stringToTerraform(this._implementation),
      initial_state: cdktf.numberToTerraform(this._initialState),
      intial_state: cdktf.numberToTerraform(this._intialState),
      magnet_file_extension: cdktf.stringToTerraform(this._magnetFileExtension),
      movie_category: cdktf.stringToTerraform(this._movieCategory),
      movie_directory: cdktf.stringToTerraform(this._movieDirectory),
      movie_imported_category: cdktf.stringToTerraform(this._movieImportedCategory),
      name: cdktf.stringToTerraform(this._name),
      nzb_folder: cdktf.stringToTerraform(this._nzbFolder),
      older_movie_priority: cdktf.numberToTerraform(this._olderMoviePriority),
      older_priority: cdktf.numberToTerraform(this._olderPriority),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      post_import_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postImportTags),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      recent_movie_priority: cdktf.numberToTerraform(this._recentMoviePriority),
      recent_priority: cdktf.numberToTerraform(this._recentPriority),
      remove_completed_downloads: cdktf.booleanToTerraform(this._removeCompletedDownloads),
      remove_failed_downloads: cdktf.booleanToTerraform(this._removeFailedDownloads),
      rpc_path: cdktf.stringToTerraform(this._rpcPath),
      save_magnet_files: cdktf.booleanToTerraform(this._saveMagnetFiles),
      secret_token: cdktf.stringToTerraform(this._secretToken),
      sequential_order: cdktf.booleanToTerraform(this._sequentialOrder),
      start_on_add: cdktf.booleanToTerraform(this._startOnAdd),
      strm_folder: cdktf.stringToTerraform(this._strmFolder),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      torrent_folder: cdktf.stringToTerraform(this._torrentFolder),
      url_base: cdktf.stringToTerraform(this._urlBase),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      username: cdktf.stringToTerraform(this._username),
      watch_folder: cdktf.stringToTerraform(this._watchFolder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paused: {
        value: cdktf.booleanToHclTerraform(this._addPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_stopped: {
        value: cdktf.booleanToHclTerraform(this._addStopped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._additionalTags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_token: {
        value: cdktf.stringToHclTerraform(this._appToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_directory: {
        value: cdktf.stringToHclTerraform(this._destinationDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      first_and_last: {
        value: cdktf.booleanToHclTerraform(this._firstAndLast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      initial_state: {
        value: cdktf.numberToHclTerraform(this._initialState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      intial_state: {
        value: cdktf.numberToHclTerraform(this._intialState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      magnet_file_extension: {
        value: cdktf.stringToHclTerraform(this._magnetFileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_category: {
        value: cdktf.stringToHclTerraform(this._movieCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_directory: {
        value: cdktf.stringToHclTerraform(this._movieDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_imported_category: {
        value: cdktf.stringToHclTerraform(this._movieImportedCategory),
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
      nzb_folder: {
        value: cdktf.stringToHclTerraform(this._nzbFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      older_movie_priority: {
        value: cdktf.numberToHclTerraform(this._olderMoviePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      older_priority: {
        value: cdktf.numberToHclTerraform(this._olderPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      post_import_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postImportTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recent_movie_priority: {
        value: cdktf.numberToHclTerraform(this._recentMoviePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recent_priority: {
        value: cdktf.numberToHclTerraform(this._recentPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_completed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeCompletedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_failed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeFailedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpc_path: {
        value: cdktf.stringToHclTerraform(this._rpcPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_magnet_files: {
        value: cdktf.booleanToHclTerraform(this._saveMagnetFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_token: {
        value: cdktf.stringToHclTerraform(this._secretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequential_order: {
        value: cdktf.booleanToHclTerraform(this._sequentialOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_on_add: {
        value: cdktf.booleanToHclTerraform(this._startOnAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strm_folder: {
        value: cdktf.stringToHclTerraform(this._strmFolder),
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
      torrent_folder: {
        value: cdktf.stringToHclTerraform(this._torrentFolder),
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
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watch_folder: {
        value: cdktf.stringToHclTerraform(this._watchFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
