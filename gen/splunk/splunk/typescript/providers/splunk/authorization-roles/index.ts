// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of capabilities assigned to role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#capabilities AuthorizationRoles#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Maximum number of concurrently running real-time searches that all members of this role can have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#cumulative_realtime_search_jobs_quota AuthorizationRoles#cumulative_realtime_search_jobs_quota}
  */
  readonly cumulativeRealtimeSearchJobsQuota?: number;
  /**
  * Maximum number of concurrently running searches for all role members. Warning message logged when limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#cumulative_search_jobs_quota AuthorizationRoles#cumulative_search_jobs_quota}
  */
  readonly cumulativeSearchJobsQuota?: number;
  /**
  * Specify the folder name of the default app to use for this role. A user-specific default app overrides this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#default_app AuthorizationRoles#default_app}
  */
  readonly defaultApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#id AuthorizationRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a role to import attributes from. To import multiple roles, specify them separately. By default a role imports no other roles. Importing other roles imports all aspects of that role, such as capabilities and allowed indexes to search. In combining multiple roles, the effective value for each attribute is the value with the broadest permissions.nDefault roles: admin, can_delete, power, user. You can specify additional roles created. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#imported_roles AuthorizationRoles#imported_roles}
  */
  readonly importedRoles?: string[];
  /**
  * Required. The name of the user role to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#name AuthorizationRoles#name}
  */
  readonly name: string;
  /**
  * Specify the maximum number of concurrent real-time search jobs for this role. This count is independent from the normal search jobs limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#realtime_search_jobs_quota AuthorizationRoles#realtime_search_jobs_quota}
  */
  readonly realtimeSearchJobsQuota?: number;
  /**
  * Specifies the maximum disk space in MB that can be used by a user's search jobs. For example, a value of 100 limits this role to 100 MB total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_disk_quota AuthorizationRoles#search_disk_quota}
  */
  readonly searchDiskQuota?: number;
  /**
  * Specify a search string that restricts the scope of searches run by this role. Search results for this role only show events that also match the search string you specify. In the case that a user has multiple roles with different search filters, they are combined with an OR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_filter AuthorizationRoles#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * List of indexes that this role has permissions to search. These may be wildcarded, but the index name must begin with an underscore to match internal indexes.Search indexes available by default include the following. All internal indexes    All non-internal indexes    _audit    _blocksignature    _internal    _thefishbucket    history    main    You can also specify other search indexes added to the server. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_indexes_allowed AuthorizationRoles#search_indexes_allowed}
  */
  readonly searchIndexesAllowed?: string[];
  /**
  * For this role, list of indexes to search when no index is specified. These indexes can be wildcarded, with the exception that '*' does not match internal indexes. To match internal indexes, start with '_'. All internal indexes are represented by '_*'. A user with this role can search other indexes using "index= " For example, "index=special_index". Search indexes available by default include the following.     All internal indexes    All non-internal indexes    _audit    _blocksignature    _internal    _thefishbucket    history    main    other search indexes added to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_indexes_default AuthorizationRoles#search_indexes_default}
  */
  readonly searchIndexesDefault?: string[];
  /**
  * The maximum number of concurrent searches a user with this role is allowed to run. For users with multiple roles, the maximum quota value among all of the roles applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_jobs_quota AuthorizationRoles#search_jobs_quota}
  */
  readonly searchJobsQuota?: number;
  /**
  * Maximum time span of a search, in seconds. By default, searches are not limited to any specific time window. To override any search time windows from imported roles, set srchTimeWin to '0', as the 'admin' role does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#search_time_win AuthorizationRoles#search_time_win}
  */
  readonly searchTimeWin?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles splunk_authorization_roles}
*/
export class AuthorizationRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_authorization_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizationRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizationRoles to import
  * @param importFromId The id of the existing AuthorizationRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizationRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_authorization_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authorization_roles splunk_authorization_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationRolesConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizationRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_authorization_roles',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capabilities = config.capabilities;
    this._cumulativeRealtimeSearchJobsQuota = config.cumulativeRealtimeSearchJobsQuota;
    this._cumulativeSearchJobsQuota = config.cumulativeSearchJobsQuota;
    this._defaultApp = config.defaultApp;
    this._id = config.id;
    this._importedRoles = config.importedRoles;
    this._name = config.name;
    this._realtimeSearchJobsQuota = config.realtimeSearchJobsQuota;
    this._searchDiskQuota = config.searchDiskQuota;
    this._searchFilter = config.searchFilter;
    this._searchIndexesAllowed = config.searchIndexesAllowed;
    this._searchIndexesDefault = config.searchIndexesDefault;
    this._searchJobsQuota = config.searchJobsQuota;
    this._searchTimeWin = config.searchTimeWin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // cumulative_realtime_search_jobs_quota - computed: false, optional: true, required: false
  private _cumulativeRealtimeSearchJobsQuota?: number; 
  public get cumulativeRealtimeSearchJobsQuota() {
    return this.getNumberAttribute('cumulative_realtime_search_jobs_quota');
  }
  public set cumulativeRealtimeSearchJobsQuota(value: number) {
    this._cumulativeRealtimeSearchJobsQuota = value;
  }
  public resetCumulativeRealtimeSearchJobsQuota() {
    this._cumulativeRealtimeSearchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeRealtimeSearchJobsQuotaInput() {
    return this._cumulativeRealtimeSearchJobsQuota;
  }

  // cumulative_search_jobs_quota - computed: false, optional: true, required: false
  private _cumulativeSearchJobsQuota?: number; 
  public get cumulativeSearchJobsQuota() {
    return this.getNumberAttribute('cumulative_search_jobs_quota');
  }
  public set cumulativeSearchJobsQuota(value: number) {
    this._cumulativeSearchJobsQuota = value;
  }
  public resetCumulativeSearchJobsQuota() {
    this._cumulativeSearchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeSearchJobsQuotaInput() {
    return this._cumulativeSearchJobsQuota;
  }

  // default_app - computed: true, optional: true, required: false
  private _defaultApp?: string; 
  public get defaultApp() {
    return this.getStringAttribute('default_app');
  }
  public set defaultApp(value: string) {
    this._defaultApp = value;
  }
  public resetDefaultApp() {
    this._defaultApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppInput() {
    return this._defaultApp;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // imported_roles - computed: true, optional: true, required: false
  private _importedRoles?: string[]; 
  public get importedRoles() {
    return this.getListAttribute('imported_roles');
  }
  public set importedRoles(value: string[]) {
    this._importedRoles = value;
  }
  public resetImportedRoles() {
    this._importedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedRolesInput() {
    return this._importedRoles;
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

  // realtime_search_jobs_quota - computed: false, optional: true, required: false
  private _realtimeSearchJobsQuota?: number; 
  public get realtimeSearchJobsQuota() {
    return this.getNumberAttribute('realtime_search_jobs_quota');
  }
  public set realtimeSearchJobsQuota(value: number) {
    this._realtimeSearchJobsQuota = value;
  }
  public resetRealtimeSearchJobsQuota() {
    this._realtimeSearchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeSearchJobsQuotaInput() {
    return this._realtimeSearchJobsQuota;
  }

  // search_disk_quota - computed: false, optional: true, required: false
  private _searchDiskQuota?: number; 
  public get searchDiskQuota() {
    return this.getNumberAttribute('search_disk_quota');
  }
  public set searchDiskQuota(value: number) {
    this._searchDiskQuota = value;
  }
  public resetSearchDiskQuota() {
    this._searchDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDiskQuotaInput() {
    return this._searchDiskQuota;
  }

  // search_filter - computed: true, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_indexes_allowed - computed: true, optional: true, required: false
  private _searchIndexesAllowed?: string[]; 
  public get searchIndexesAllowed() {
    return this.getListAttribute('search_indexes_allowed');
  }
  public set searchIndexesAllowed(value: string[]) {
    this._searchIndexesAllowed = value;
  }
  public resetSearchIndexesAllowed() {
    this._searchIndexesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIndexesAllowedInput() {
    return this._searchIndexesAllowed;
  }

  // search_indexes_default - computed: true, optional: true, required: false
  private _searchIndexesDefault?: string[]; 
  public get searchIndexesDefault() {
    return this.getListAttribute('search_indexes_default');
  }
  public set searchIndexesDefault(value: string[]) {
    this._searchIndexesDefault = value;
  }
  public resetSearchIndexesDefault() {
    this._searchIndexesDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIndexesDefaultInput() {
    return this._searchIndexesDefault;
  }

  // search_jobs_quota - computed: false, optional: true, required: false
  private _searchJobsQuota?: number; 
  public get searchJobsQuota() {
    return this.getNumberAttribute('search_jobs_quota');
  }
  public set searchJobsQuota(value: number) {
    this._searchJobsQuota = value;
  }
  public resetSearchJobsQuota() {
    this._searchJobsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchJobsQuotaInput() {
    return this._searchJobsQuota;
  }

  // search_time_win - computed: false, optional: true, required: false
  private _searchTimeWin?: number; 
  public get searchTimeWin() {
    return this.getNumberAttribute('search_time_win');
  }
  public set searchTimeWin(value: number) {
    this._searchTimeWin = value;
  }
  public resetSearchTimeWin() {
    this._searchTimeWin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeWinInput() {
    return this._searchTimeWin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      cumulative_realtime_search_jobs_quota: cdktf.numberToTerraform(this._cumulativeRealtimeSearchJobsQuota),
      cumulative_search_jobs_quota: cdktf.numberToTerraform(this._cumulativeSearchJobsQuota),
      default_app: cdktf.stringToTerraform(this._defaultApp),
      id: cdktf.stringToTerraform(this._id),
      imported_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importedRoles),
      name: cdktf.stringToTerraform(this._name),
      realtime_search_jobs_quota: cdktf.numberToTerraform(this._realtimeSearchJobsQuota),
      search_disk_quota: cdktf.numberToTerraform(this._searchDiskQuota),
      search_filter: cdktf.stringToTerraform(this._searchFilter),
      search_indexes_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchIndexesAllowed),
      search_indexes_default: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchIndexesDefault),
      search_jobs_quota: cdktf.numberToTerraform(this._searchJobsQuota),
      search_time_win: cdktf.numberToTerraform(this._searchTimeWin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cumulative_realtime_search_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._cumulativeRealtimeSearchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cumulative_search_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._cumulativeSearchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_app: {
        value: cdktf.stringToHclTerraform(this._defaultApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imported_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importedRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realtime_search_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._realtimeSearchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_disk_quota: {
        value: cdktf.numberToHclTerraform(this._searchDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_filter: {
        value: cdktf.stringToHclTerraform(this._searchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_indexes_allowed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchIndexesAllowed),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_indexes_default: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchIndexesDefault),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_jobs_quota: {
        value: cdktf.numberToHclTerraform(this._searchJobsQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_time_win: {
        value: cdktf.numberToHclTerraform(this._searchTimeWin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
