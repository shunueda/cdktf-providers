// https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientTorrentBlackholeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#enable DownloadClientTorrentBlackhole#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Magnet file extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#magnet_file_extension DownloadClientTorrentBlackhole#magnet_file_extension}
  */
  readonly magnetFileExtension?: string;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#name DownloadClientTorrentBlackhole#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#priority DownloadClientTorrentBlackhole#priority}
  */
  readonly priority?: number;
  /**
  * Save magnet files flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#save_magnet_files DownloadClientTorrentBlackhole#save_magnet_files}
  */
  readonly saveMagnetFiles?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#tags DownloadClientTorrentBlackhole#tags}
  */
  readonly tags?: number[];
  /**
  * Torrent folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#torrent_folder DownloadClientTorrentBlackhole#torrent_folder}
  */
  readonly torrentFolder: string;
}
export interface DownloadClientTorrentBlackholeCategories {
  /**
  * List of categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#categories DownloadClientTorrentBlackhole#categories}
  */
  readonly categories?: number[];
  /**
  * Name of client category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#name DownloadClientTorrentBlackhole#name}
  */
  readonly name?: string;
}

export function downloadClientTorrentBlackholeCategoriesToTerraform(struct?: DownloadClientTorrentBlackholeCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.categories),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function downloadClientTorrentBlackholeCategoriesToHclTerraform(struct?: DownloadClientTorrentBlackholeCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DownloadClientTorrentBlackholeCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DownloadClientTorrentBlackholeCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DownloadClientTorrentBlackholeCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._name = value.name;
    }
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: number[]; 
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }
  public set categories(value: number[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DownloadClientTorrentBlackholeCategoriesList extends cdktf.ComplexList {
  public internalValue? : DownloadClientTorrentBlackholeCategories[] | cdktf.IResolvable

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
  public get(index: number): DownloadClientTorrentBlackholeCategoriesOutputReference {
    return new DownloadClientTorrentBlackholeCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole prowlarr_download_client_torrent_blackhole}
*/
export class DownloadClientTorrentBlackhole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_download_client_torrent_blackhole";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientTorrentBlackhole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientTorrentBlackhole to import
  * @param importFromId The id of the existing DownloadClientTorrentBlackhole that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientTorrentBlackhole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_download_client_torrent_blackhole", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/download_client_torrent_blackhole prowlarr_download_client_torrent_blackhole} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientTorrentBlackholeConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientTorrentBlackholeConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_download_client_torrent_blackhole',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.0.2',
        providerVersionConstraint: '3.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._magnetFileExtension = config.magnetFileExtension;
    this._name = config.name;
    this._priority = config.priority;
    this._saveMagnetFiles = config.saveMagnetFiles;
    this._tags = config.tags;
    this._torrentFolder = config.torrentFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  private _categories = new DownloadClientTorrentBlackholeCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // torrent_folder - computed: false, optional: false, required: true
  private _torrentFolder?: string; 
  public get torrentFolder() {
    return this.getStringAttribute('torrent_folder');
  }
  public set torrentFolder(value: string) {
    this._torrentFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get torrentFolderInput() {
    return this._torrentFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      magnet_file_extension: cdktf.stringToTerraform(this._magnetFileExtension),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      save_magnet_files: cdktf.booleanToTerraform(this._saveMagnetFiles),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      torrent_folder: cdktf.stringToTerraform(this._torrentFolder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      magnet_file_extension: {
        value: cdktf.stringToHclTerraform(this._magnetFileExtension),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      save_magnet_files: {
        value: cdktf.booleanToHclTerraform(this._saveMagnetFiles),
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
      torrent_folder: {
        value: cdktf.stringToHclTerraform(this._torrentFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
