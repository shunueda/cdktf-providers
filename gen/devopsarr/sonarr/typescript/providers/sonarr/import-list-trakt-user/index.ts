// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListTraktUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#access_token ImportListTraktUser#access_token}
  */
  readonly accessToken?: string;
  /**
  * Auth User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#auth_user ImportListTraktUser#auth_user}
  */
  readonly authUser?: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#enable_automatic_add ImportListTraktUser#enable_automatic_add}
  */
  readonly enableAutomaticAdd: boolean | cdktf.IResolvable;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#expires ImportListTraktUser#expires}
  */
  readonly expires?: string;
  /**
  * Limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#limit ImportListTraktUser#limit}
  */
  readonly limit?: number;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#name ImportListTraktUser#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#quality_profile_id ImportListTraktUser#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#refresh_token ImportListTraktUser#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#root_folder_path ImportListTraktUser#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Season folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#season_folder ImportListTraktUser#season_folder}
  */
  readonly seasonFolder: boolean | cdktf.IResolvable;
  /**
  * Series type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#series_type ImportListTraktUser#series_type}
  */
  readonly seriesType: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#should_monitor ImportListTraktUser#should_monitor}
  */
  readonly shouldMonitor: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#tags ImportListTraktUser#tags}
  */
  readonly tags?: number[];
  /**
  * Trakt additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#trakt_additional_parameters ImportListTraktUser#trakt_additional_parameters}
  */
  readonly traktAdditionalParameters?: string;
  /**
  * Trakt list type. '0' UserWatchList, '1' UserWatchedList, '2' UserCollectionList.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#trakt_list_type ImportListTraktUser#trakt_list_type}
  */
  readonly traktListType: number;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#username ImportListTraktUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user sonarr_import_list_trakt_user}
*/
export class ImportListTraktUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list_trakt_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListTraktUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListTraktUser to import
  * @param importFromId The id of the existing ImportListTraktUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListTraktUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list_trakt_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_trakt_user sonarr_import_list_trakt_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListTraktUserConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListTraktUserConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list_trakt_user',
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
    this._accessToken = config.accessToken;
    this._authUser = config.authUser;
    this._enableAutomaticAdd = config.enableAutomaticAdd;
    this._expires = config.expires;
    this._limit = config.limit;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._seriesType = config.seriesType;
    this._shouldMonitor = config.shouldMonitor;
    this._tags = config.tags;
    this._traktAdditionalParameters = config.traktAdditionalParameters;
    this._traktListType = config.traktListType;
    this._username = config.username;
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

  // enable_automatic_add - computed: false, optional: false, required: true
  private _enableAutomaticAdd?: boolean | cdktf.IResolvable; 
  public get enableAutomaticAdd() {
    return this.getBooleanAttribute('enable_automatic_add');
  }
  public set enableAutomaticAdd(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticAdd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticAddInput() {
    return this._enableAutomaticAdd;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // season_folder - computed: false, optional: false, required: true
  private _seasonFolder?: boolean | cdktf.IResolvable; 
  public get seasonFolder() {
    return this.getBooleanAttribute('season_folder');
  }
  public set seasonFolder(value: boolean | cdktf.IResolvable) {
    this._seasonFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonFolderInput() {
    return this._seasonFolder;
  }

  // series_type - computed: false, optional: false, required: true
  private _seriesType?: string; 
  public get seriesType() {
    return this.getStringAttribute('series_type');
  }
  public set seriesType(value: string) {
    this._seriesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesTypeInput() {
    return this._seriesType;
  }

  // should_monitor - computed: false, optional: false, required: true
  private _shouldMonitor?: string; 
  public get shouldMonitor() {
    return this.getStringAttribute('should_monitor');
  }
  public set shouldMonitor(value: string) {
    this._shouldMonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMonitorInput() {
    return this._shouldMonitor;
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

  // trakt_list_type - computed: false, optional: false, required: true
  private _traktListType?: number; 
  public get traktListType() {
    return this.getNumberAttribute('trakt_list_type');
  }
  public set traktListType(value: number) {
    this._traktListType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traktListTypeInput() {
    return this._traktListType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      auth_user: cdktf.stringToTerraform(this._authUser),
      enable_automatic_add: cdktf.booleanToTerraform(this._enableAutomaticAdd),
      expires: cdktf.stringToTerraform(this._expires),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      series_type: cdktf.stringToTerraform(this._seriesType),
      should_monitor: cdktf.stringToTerraform(this._shouldMonitor),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      trakt_additional_parameters: cdktf.stringToTerraform(this._traktAdditionalParameters),
      trakt_list_type: cdktf.numberToTerraform(this._traktListType),
      username: cdktf.stringToTerraform(this._username),
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
      enable_automatic_add: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticAdd),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      season_folder: {
        value: cdktf.booleanToHclTerraform(this._seasonFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      series_type: {
        value: cdktf.stringToHclTerraform(this._seriesType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_monitor: {
        value: cdktf.stringToHclTerraform(this._shouldMonitor),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
