// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListSonarrConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#api_key ImportListSonarr#api_key}
  */
  readonly apiKey: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#base_url ImportListSonarr#base_url}
  */
  readonly baseUrl: string;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#enable_automatic_add ImportListSonarr#enable_automatic_add}
  */
  readonly enableAutomaticAdd: boolean | cdktf.IResolvable;
  /**
  * Language profile IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#language_profile_ids ImportListSonarr#language_profile_ids}
  */
  readonly languageProfileIds?: number[];
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#name ImportListSonarr#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#quality_profile_id ImportListSonarr#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Quality profile IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#quality_profile_ids ImportListSonarr#quality_profile_ids}
  */
  readonly qualityProfileIds?: number[];
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#root_folder_path ImportListSonarr#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Season folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#season_folder ImportListSonarr#season_folder}
  */
  readonly seasonFolder: boolean | cdktf.IResolvable;
  /**
  * Series type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#series_type ImportListSonarr#series_type}
  */
  readonly seriesType: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#should_monitor ImportListSonarr#should_monitor}
  */
  readonly shouldMonitor: string;
  /**
  * Tag IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#tag_ids ImportListSonarr#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#tags ImportListSonarr#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr sonarr_import_list_sonarr}
*/
export class ImportListSonarr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list_sonarr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListSonarr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListSonarr to import
  * @param importFromId The id of the existing ImportListSonarr that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListSonarr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list_sonarr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_sonarr sonarr_import_list_sonarr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListSonarrConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListSonarrConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list_sonarr',
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
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._enableAutomaticAdd = config.enableAutomaticAdd;
    this._languageProfileIds = config.languageProfileIds;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._qualityProfileIds = config.qualityProfileIds;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._seriesType = config.seriesType;
    this._shouldMonitor = config.shouldMonitor;
    this._tagIds = config.tagIds;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // language_profile_ids - computed: true, optional: true, required: false
  private _languageProfileIds?: number[]; 
  public get languageProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('language_profile_ids')));
  }
  public set languageProfileIds(value: number[]) {
    this._languageProfileIds = value;
  }
  public resetLanguageProfileIds() {
    this._languageProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageProfileIdsInput() {
    return this._languageProfileIds;
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

  // quality_profile_ids - computed: true, optional: true, required: false
  private _qualityProfileIds?: number[]; 
  public get qualityProfileIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('quality_profile_ids')));
  }
  public set qualityProfileIds(value: number[]) {
    this._qualityProfileIds = value;
  }
  public resetQualityProfileIds() {
    this._qualityProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileIdsInput() {
    return this._qualityProfileIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      enable_automatic_add: cdktf.booleanToTerraform(this._enableAutomaticAdd),
      language_profile_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._languageProfileIds),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      quality_profile_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._qualityProfileIds),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      series_type: cdktf.stringToTerraform(this._seriesType),
      should_monitor: cdktf.stringToTerraform(this._shouldMonitor),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      enable_automatic_add: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._languageProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      quality_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._qualityProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
