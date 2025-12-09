// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrDownloadClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client#name DataRadarrDownloadClient#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client radarr_download_client}
*/
export class DataRadarrDownloadClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrDownloadClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrDownloadClient to import
  * @param importFromId The id of the existing DataRadarrDownloadClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrDownloadClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client radarr_download_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrDownloadClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrDownloadClientConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client',
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

  // add_paused - computed: true, optional: false, required: false
  public get addPaused() {
    return this.getBooleanAttribute('add_paused');
  }

  // add_stopped - computed: true, optional: false, required: false
  public get addStopped() {
    return this.getBooleanAttribute('add_stopped');
  }

  // additional_tags - computed: true, optional: false, required: false
  public get additionalTags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('additional_tags')));
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_token - computed: true, optional: false, required: false
  public get appToken() {
    return this.getStringAttribute('app_token');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_directory - computed: true, optional: false, required: false
  public get destinationDirectory() {
    return this.getStringAttribute('destination_directory');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // field_tags - computed: true, optional: false, required: false
  public get fieldTags() {
    return cdktf.Fn.tolist(this.getListAttribute('field_tags'));
  }

  // first_and_last - computed: true, optional: false, required: false
  public get firstAndLast() {
    return this.getBooleanAttribute('first_and_last');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // initial_state - computed: true, optional: false, required: false
  public get initialState() {
    return this.getNumberAttribute('initial_state');
  }

  // intial_state - computed: true, optional: false, required: false
  public get intialState() {
    return this.getNumberAttribute('intial_state');
  }

  // magnet_file_extension - computed: true, optional: false, required: false
  public get magnetFileExtension() {
    return this.getStringAttribute('magnet_file_extension');
  }

  // movie_category - computed: true, optional: false, required: false
  public get movieCategory() {
    return this.getStringAttribute('movie_category');
  }

  // movie_directory - computed: true, optional: false, required: false
  public get movieDirectory() {
    return this.getStringAttribute('movie_directory');
  }

  // movie_imported_category - computed: true, optional: false, required: false
  public get movieImportedCategory() {
    return this.getStringAttribute('movie_imported_category');
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

  // nzb_folder - computed: true, optional: false, required: false
  public get nzbFolder() {
    return this.getStringAttribute('nzb_folder');
  }

  // older_movie_priority - computed: true, optional: false, required: false
  public get olderMoviePriority() {
    return this.getNumberAttribute('older_movie_priority');
  }

  // older_priority - computed: true, optional: false, required: false
  public get olderPriority() {
    return this.getNumberAttribute('older_priority');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // post_import_tags - computed: true, optional: false, required: false
  public get postImportTags() {
    return cdktf.Fn.tolist(this.getListAttribute('post_import_tags'));
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // recent_movie_priority - computed: true, optional: false, required: false
  public get recentMoviePriority() {
    return this.getNumberAttribute('recent_movie_priority');
  }

  // recent_priority - computed: true, optional: false, required: false
  public get recentPriority() {
    return this.getNumberAttribute('recent_priority');
  }

  // remove_completed_downloads - computed: true, optional: false, required: false
  public get removeCompletedDownloads() {
    return this.getBooleanAttribute('remove_completed_downloads');
  }

  // remove_failed_downloads - computed: true, optional: false, required: false
  public get removeFailedDownloads() {
    return this.getBooleanAttribute('remove_failed_downloads');
  }

  // rpc_path - computed: true, optional: false, required: false
  public get rpcPath() {
    return this.getStringAttribute('rpc_path');
  }

  // save_magnet_files - computed: true, optional: false, required: false
  public get saveMagnetFiles() {
    return this.getBooleanAttribute('save_magnet_files');
  }

  // secret_token - computed: true, optional: false, required: false
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }

  // sequential_order - computed: true, optional: false, required: false
  public get sequentialOrder() {
    return this.getBooleanAttribute('sequential_order');
  }

  // start_on_add - computed: true, optional: false, required: false
  public get startOnAdd() {
    return this.getBooleanAttribute('start_on_add');
  }

  // strm_folder - computed: true, optional: false, required: false
  public get strmFolder() {
    return this.getStringAttribute('strm_folder');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // torrent_folder - computed: true, optional: false, required: false
  public get torrentFolder() {
    return this.getStringAttribute('torrent_folder');
  }

  // url_base - computed: true, optional: false, required: false
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }

  // use_ssl - computed: true, optional: false, required: false
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // watch_folder - computed: true, optional: false, required: false
  public get watchFolder() {
    return this.getStringAttribute('watch_folder');
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
