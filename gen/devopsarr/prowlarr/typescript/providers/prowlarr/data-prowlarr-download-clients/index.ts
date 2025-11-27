// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/download_clients
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProwlarrDownloadClientsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataProwlarrDownloadClientsDownloadClientsCategories {
}

export function dataProwlarrDownloadClientsDownloadClientsCategoriesToTerraform(struct?: DataProwlarrDownloadClientsDownloadClientsCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProwlarrDownloadClientsDownloadClientsCategoriesToHclTerraform(struct?: DataProwlarrDownloadClientsDownloadClientsCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProwlarrDownloadClientsDownloadClientsCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProwlarrDownloadClientsDownloadClientsCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProwlarrDownloadClientsDownloadClientsCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataProwlarrDownloadClientsDownloadClientsCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataProwlarrDownloadClientsDownloadClientsCategoriesOutputReference {
    return new DataProwlarrDownloadClientsDownloadClientsCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProwlarrDownloadClientsDownloadClients {
}

export function dataProwlarrDownloadClientsDownloadClientsToTerraform(struct?: DataProwlarrDownloadClientsDownloadClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProwlarrDownloadClientsDownloadClientsToHclTerraform(struct?: DataProwlarrDownloadClientsDownloadClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProwlarrDownloadClientsDownloadClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProwlarrDownloadClientsDownloadClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProwlarrDownloadClientsDownloadClients | undefined) {
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

  // categories - computed: true, optional: false, required: false
  private _categories = new DataProwlarrDownloadClientsDownloadClientsCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
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

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // field_tags - computed: true, optional: false, required: false
  public get fieldTags() {
    return cdktf.Fn.tolist(this.getListAttribute('field_tags'));
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

  // item_priority - computed: true, optional: false, required: false
  public get itemPriority() {
    return this.getNumberAttribute('item_priority');
  }

  // magnet_file_extension - computed: true, optional: false, required: false
  public get magnetFileExtension() {
    return this.getStringAttribute('magnet_file_extension');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nzb_folder - computed: true, optional: false, required: false
  public get nzbFolder() {
    return this.getStringAttribute('nzb_folder');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // post_im_tags - computed: true, optional: false, required: false
  public get postImTags() {
    return cdktf.Fn.tolist(this.getListAttribute('post_im_tags'));
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

  // start_on_add - computed: true, optional: false, required: false
  public get startOnAdd() {
    return this.getBooleanAttribute('start_on_add');
  }

  // station_directory - computed: true, optional: false, required: false
  public get stationDirectory() {
    return this.getStringAttribute('station_directory');
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

  // tv_imported_category - computed: true, optional: false, required: false
  public get tvImportedCategory() {
    return this.getStringAttribute('tv_imported_category');
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
}

export class DataProwlarrDownloadClientsDownloadClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataProwlarrDownloadClientsDownloadClientsOutputReference {
    return new DataProwlarrDownloadClientsDownloadClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/download_clients prowlarr_download_clients}
*/
export class DataProwlarrDownloadClients extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_download_clients";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProwlarrDownloadClients resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProwlarrDownloadClients to import
  * @param importFromId The id of the existing DataProwlarrDownloadClients that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/download_clients#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProwlarrDownloadClients to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_download_clients", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/download_clients prowlarr_download_clients} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProwlarrDownloadClientsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProwlarrDownloadClientsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_download_clients',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
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
  private _downloadClients = new DataProwlarrDownloadClientsDownloadClientsList(this, "download_clients", true);
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
