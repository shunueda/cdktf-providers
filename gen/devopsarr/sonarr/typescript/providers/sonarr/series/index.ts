// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SeriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Monitored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#monitored Series#monitored}
  */
  readonly monitored: boolean | cdktf.IResolvable;
  /**
  * Series Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#path Series#path}
  */
  readonly path: string;
  /**
  * Quality Profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#quality_profile_id Series#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Series Root Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#root_folder_path Series#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Season Folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#season_folder Series#season_folder}
  */
  readonly seasonFolder: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#tags Series#tags}
  */
  readonly tags?: number[];
  /**
  * Series Title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#title Series#title}
  */
  readonly title: string;
  /**
  * Series Title in kebab format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#title_slug Series#title_slug}
  */
  readonly titleSlug: string;
  /**
  * TVDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#tvdb_id Series#tvdb_id}
  */
  readonly tvdbId: number;
  /**
  * Scene numbering flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#use_scene_numbering Series#use_scene_numbering}
  */
  readonly useSceneNumbering: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series sonarr_series}
*/
export class Series extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_series";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Series resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Series to import
  * @param importFromId The id of the existing Series that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Series to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_series", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/series sonarr_series} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SeriesConfig
  */
  public constructor(scope: Construct, id: string, config: SeriesConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_series',
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
    this._monitored = config.monitored;
    this._path = config.path;
    this._qualityProfileId = config.qualityProfileId;
    this._rootFolderPath = config.rootFolderPath;
    this._seasonFolder = config.seasonFolder;
    this._tags = config.tags;
    this._title = config.title;
    this._titleSlug = config.titleSlug;
    this._tvdbId = config.tvdbId;
    this._useSceneNumbering = config.useSceneNumbering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // monitored - computed: false, optional: false, required: true
  private _monitored?: boolean | cdktf.IResolvable; 
  public get monitored() {
    return this.getBooleanAttribute('monitored');
  }
  public set monitored(value: boolean | cdktf.IResolvable) {
    this._monitored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredInput() {
    return this._monitored;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_slug - computed: false, optional: false, required: true
  private _titleSlug?: string; 
  public get titleSlug() {
    return this.getStringAttribute('title_slug');
  }
  public set titleSlug(value: string) {
    this._titleSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSlugInput() {
    return this._titleSlug;
  }

  // tvdb_id - computed: false, optional: false, required: true
  private _tvdbId?: number; 
  public get tvdbId() {
    return this.getNumberAttribute('tvdb_id');
  }
  public set tvdbId(value: number) {
    this._tvdbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tvdbIdInput() {
    return this._tvdbId;
  }

  // use_scene_numbering - computed: false, optional: false, required: true
  private _useSceneNumbering?: boolean | cdktf.IResolvable; 
  public get useSceneNumbering() {
    return this.getBooleanAttribute('use_scene_numbering');
  }
  public set useSceneNumbering(value: boolean | cdktf.IResolvable) {
    this._useSceneNumbering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useSceneNumberingInput() {
    return this._useSceneNumbering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitored: cdktf.booleanToTerraform(this._monitored),
      path: cdktf.stringToTerraform(this._path),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      season_folder: cdktf.booleanToTerraform(this._seasonFolder),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      title_slug: cdktf.stringToTerraform(this._titleSlug),
      tvdb_id: cdktf.numberToTerraform(this._tvdbId),
      use_scene_numbering: cdktf.booleanToTerraform(this._useSceneNumbering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitored: {
        value: cdktf.booleanToHclTerraform(this._monitored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title_slug: {
        value: cdktf.stringToHclTerraform(this._titleSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tvdb_id: {
        value: cdktf.numberToHclTerraform(this._tvdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_scene_numbering: {
        value: cdktf.booleanToHclTerraform(this._useSceneNumbering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
