// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_clients
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrDownloadClientsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRadarrDownloadClientsDownloadClients {
}

export function dataRadarrDownloadClientsDownloadClientsToTerraform(struct?: DataRadarrDownloadClientsDownloadClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrDownloadClientsDownloadClientsToHclTerraform(struct?: DataRadarrDownloadClientsDownloadClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrDownloadClientsDownloadClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRadarrDownloadClientsDownloadClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrDownloadClientsDownloadClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
}

export class DataRadarrDownloadClientsDownloadClientsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataRadarrDownloadClientsDownloadClientsOutputReference {
    return new DataRadarrDownloadClientsDownloadClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_clients radarr_download_clients}
*/
export class DataRadarrDownloadClients extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_clients";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrDownloadClients resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrDownloadClients to import
  * @param importFromId The id of the existing DataRadarrDownloadClients that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_clients#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrDownloadClients to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_clients", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_clients radarr_download_clients} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrDownloadClientsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrDownloadClientsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_clients',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_clients - computed: true, optional: false, required: false
  private _downloadClients = new DataRadarrDownloadClientsDownloadClientsList(this, "download_clients", true);
  public get downloadClients() {
    return this._downloadClients;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
