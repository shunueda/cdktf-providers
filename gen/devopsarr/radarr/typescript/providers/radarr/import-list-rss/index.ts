// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListRssConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#enable_auto ImportListRss#enable_auto}
  */
  readonly enableAuto?: boolean | cdktf.IResolvable;
  /**
  * Enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#enabled ImportListRss#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#link ImportListRss#link}
  */
  readonly link: string;
  /**
  * List order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#list_order ImportListRss#list_order}
  */
  readonly listOrder?: number;
  /**
  * Minimum availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#minimum_availability ImportListRss#minimum_availability}
  */
  readonly minimumAvailability: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#monitor ImportListRss#monitor}
  */
  readonly monitor: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#name ImportListRss#name}
  */
  readonly name: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#quality_profile_id ImportListRss#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#root_folder_path ImportListRss#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Search on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#search_on_add ImportListRss#search_on_add}
  */
  readonly searchOnAdd?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#tags ImportListRss#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss radarr_import_list_rss}
*/
export class ImportListRss extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_rss";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListRss resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListRss to import
  * @param importFromId The id of the existing ImportListRss that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListRss to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_rss", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/import_list_rss radarr_import_list_rss} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListRssConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListRssConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_rss',
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
    this._enableAuto = config.enableAuto;
    this._enabled = config.enabled;
    this._link = config.link;
    this._listOrder = config.listOrder;
    this._minimumAvailability = config.minimumAvailability;
    this._monitor = config.monitor;
    this._name = config.name;
    this._qualityProfileId = config.qualityProfileId;
    this._rootFolderPath = config.rootFolderPath;
    this._searchOnAdd = config.searchOnAdd;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_auto - computed: true, optional: true, required: false
  private _enableAuto?: boolean | cdktf.IResolvable; 
  public get enableAuto() {
    return this.getBooleanAttribute('enable_auto');
  }
  public set enableAuto(value: boolean | cdktf.IResolvable) {
    this._enableAuto = value;
  }
  public resetEnableAuto() {
    this._enableAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoInput() {
    return this._enableAuto;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // link - computed: false, optional: false, required: true
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // list_order - computed: true, optional: true, required: false
  private _listOrder?: number; 
  public get listOrder() {
    return this.getNumberAttribute('list_order');
  }
  public set listOrder(value: number) {
    this._listOrder = value;
  }
  public resetListOrder() {
    this._listOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOrderInput() {
    return this._listOrder;
  }

  // minimum_availability - computed: false, optional: false, required: true
  private _minimumAvailability?: string; 
  public get minimumAvailability() {
    return this.getStringAttribute('minimum_availability');
  }
  public set minimumAvailability(value: string) {
    this._minimumAvailability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAvailabilityInput() {
    return this._minimumAvailability;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
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

  // search_on_add - computed: true, optional: true, required: false
  private _searchOnAdd?: boolean | cdktf.IResolvable; 
  public get searchOnAdd() {
    return this.getBooleanAttribute('search_on_add');
  }
  public set searchOnAdd(value: boolean | cdktf.IResolvable) {
    this._searchOnAdd = value;
  }
  public resetSearchOnAdd() {
    this._searchOnAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOnAddInput() {
    return this._searchOnAdd;
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
      enable_auto: cdktf.booleanToTerraform(this._enableAuto),
      enabled: cdktf.booleanToTerraform(this._enabled),
      link: cdktf.stringToTerraform(this._link),
      list_order: cdktf.numberToTerraform(this._listOrder),
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      search_on_add: cdktf.booleanToTerraform(this._searchOnAdd),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_auto: {
        value: cdktf.booleanToHclTerraform(this._enableAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_order: {
        value: cdktf.numberToHclTerraform(this._listOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_availability: {
        value: cdktf.stringToHclTerraform(this._minimumAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
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
      search_on_add: {
        value: cdktf.booleanToHclTerraform(this._searchOnAdd),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
