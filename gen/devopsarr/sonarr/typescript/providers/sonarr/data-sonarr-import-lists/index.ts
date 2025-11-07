// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/import_lists
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrImportListsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSonarrImportListsImportLists {
}

export function dataSonarrImportListsImportListsToTerraform(struct?: DataSonarrImportListsImportLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSonarrImportListsImportListsToHclTerraform(struct?: DataSonarrImportListsImportLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSonarrImportListsImportListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSonarrImportListsImportLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSonarrImportListsImportLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
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

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // enable_automatic_add - computed: true, optional: false, required: false
  public get enableAutomaticAdd() {
    return this.getBooleanAttribute('enable_automatic_add');
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

  // language_profile_ids - computed: true, optional: false, required: false
  public get languageProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('language_profile_ids')));
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // list_id - computed: true, optional: false, required: false
  public get listId() {
    return this.getStringAttribute('list_id');
  }

  // list_type - computed: true, optional: false, required: false
  public get listType() {
    return this.getNumberAttribute('list_type');
  }

  // listname - computed: true, optional: false, required: false
  public get listname() {
    return this.getStringAttribute('listname');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quality_profile_id - computed: true, optional: false, required: false
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }

  // quality_profile_ids - computed: true, optional: false, required: false
  public get qualityProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('quality_profile_ids')));
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

  // season_folder - computed: true, optional: false, required: false
  public get seasonFolder() {
    return this.getBooleanAttribute('season_folder');
  }

  // series_type - computed: true, optional: false, required: false
  public get seriesType() {
    return this.getStringAttribute('series_type');
  }

  // should_monitor - computed: true, optional: false, required: false
  public get shouldMonitor() {
    return this.getStringAttribute('should_monitor');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getStringAttribute('years');
  }
}

export class DataSonarrImportListsImportListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSonarrImportListsImportListsOutputReference {
    return new DataSonarrImportListsImportListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/import_lists sonarr_import_lists}
*/
export class DataSonarrImportLists extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_lists";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrImportLists resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrImportLists to import
  * @param importFromId The id of the existing DataSonarrImportLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/import_lists#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrImportLists to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_lists", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/import_lists sonarr_import_lists} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrImportListsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrImportListsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_lists',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_lists - computed: true, optional: false, required: false
  private _importLists = new DataSonarrImportListsImportListsList(this, "import_lists", true);
  public get importLists() {
    return this._importLists;
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
