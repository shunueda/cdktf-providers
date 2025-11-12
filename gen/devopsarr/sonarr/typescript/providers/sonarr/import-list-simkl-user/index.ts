// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListSimklUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#access_token ImportListSimklUser#access_token}
  */
  readonly accessToken?: string;
  /**
  * Auth User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#auth_user ImportListSimklUser#auth_user}
  */
  readonly authUser?: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#enable_automatic_add ImportListSimklUser#enable_automatic_add}
  */
  readonly enableAutomaticAdd: boolean | cdktf.IResolvable;
  /**
  * Expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#expires ImportListSimklUser#expires}
  */
  readonly expires?: string;
  /**
  * Simkl list type. '0' Watching, '1' PlanToWatch, '2' Hold, '3' Completed, '4' Dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#list_type ImportListSimklUser#list_type}
  */
  readonly listType: number;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#name ImportListSimklUser#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#quality_profile_id ImportListSimklUser#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#refresh_token ImportListSimklUser#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#root_folder_path ImportListSimklUser#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Season folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#season_folder ImportListSimklUser#season_folder}
  */
  readonly seasonFolder: boolean | cdktf.IResolvable;
  /**
  * Series type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#series_type ImportListSimklUser#series_type}
  */
  readonly seriesType: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#should_monitor ImportListSimklUser#should_monitor}
  */
  readonly shouldMonitor: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#tags ImportListSimklUser#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user sonarr_import_list_simkl_user}
*/
export class ImportListSimklUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list_simkl_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListSimklUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListSimklUser to import
  * @param importFromId The id of the existing ImportListSimklUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListSimklUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list_simkl_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_simkl_user sonarr_import_list_simkl_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListSimklUserConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListSimklUserConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list_simkl_user',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
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
    this._listType = config.listType;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._refreshToken = config.refreshToken;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._seriesType = config.seriesType;
    this._shouldMonitor = config.shouldMonitor;
    this._tags = config.tags;
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

  // list_type - computed: false, optional: false, required: true
  private _listType?: number; 
  public get listType() {
    return this.getNumberAttribute('list_type');
  }
  public set listType(value: number) {
    this._listType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      auth_user: cdktf.stringToTerraform(this._authUser),
      enable_automatic_add: cdktf.booleanToTerraform(this._enableAutomaticAdd),
      expires: cdktf.stringToTerraform(this._expires),
      list_type: cdktf.numberToTerraform(this._listType),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      series_type: cdktf.stringToTerraform(this._seriesType),
      should_monitor: cdktf.stringToTerraform(this._shouldMonitor),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
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
      list_type: {
        value: cdktf.numberToHclTerraform(this._listType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
