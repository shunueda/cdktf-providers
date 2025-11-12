// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListTmdbPersonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Include cast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#cast ImportListTmdbPerson#cast}
  */
  readonly cast?: boolean | cdktf.IResolvable;
  /**
  * Include cast director.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#cast_director ImportListTmdbPerson#cast_director}
  */
  readonly castDirector?: boolean | cdktf.IResolvable;
  /**
  * Include cast producer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#cast_producer ImportListTmdbPerson#cast_producer}
  */
  readonly castProducer?: boolean | cdktf.IResolvable;
  /**
  * Include cast sound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#cast_sound ImportListTmdbPerson#cast_sound}
  */
  readonly castSound?: boolean | cdktf.IResolvable;
  /**
  * Include cast writing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#cast_writing ImportListTmdbPerson#cast_writing}
  */
  readonly castWriting?: boolean | cdktf.IResolvable;
  /**
  * Enable automatic add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#enable_auto ImportListTmdbPerson#enable_auto}
  */
  readonly enableAuto?: boolean | cdktf.IResolvable;
  /**
  * Enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#enabled ImportListTmdbPerson#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#list_order ImportListTmdbPerson#list_order}
  */
  readonly listOrder?: number;
  /**
  * Minimum availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#minimum_availability ImportListTmdbPerson#minimum_availability}
  */
  readonly minimumAvailability: string;
  /**
  * Should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#monitor ImportListTmdbPerson#monitor}
  */
  readonly monitor: string;
  /**
  * Import List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#name ImportListTmdbPerson#name}
  */
  readonly name: string;
  /**
  * Person ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#person_id ImportListTmdbPerson#person_id}
  */
  readonly personId: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#quality_profile_id ImportListTmdbPerson#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * Root folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#root_folder_path ImportListTmdbPerson#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Search on add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#search_on_add ImportListTmdbPerson#search_on_add}
  */
  readonly searchOnAdd?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#tags ImportListTmdbPerson#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person radarr_import_list_tmdb_person}
*/
export class ImportListTmdbPerson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_tmdb_person";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListTmdbPerson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListTmdbPerson to import
  * @param importFromId The id of the existing ImportListTmdbPerson that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListTmdbPerson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_tmdb_person", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_tmdb_person radarr_import_list_tmdb_person} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListTmdbPersonConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListTmdbPersonConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_tmdb_person',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cast = config.cast;
    this._castDirector = config.castDirector;
    this._castProducer = config.castProducer;
    this._castSound = config.castSound;
    this._castWriting = config.castWriting;
    this._enableAuto = config.enableAuto;
    this._enabled = config.enabled;
    this._listOrder = config.listOrder;
    this._minimumAvailability = config.minimumAvailability;
    this._monitor = config.monitor;
    this._name = config.name;
    this._personId = config.personId;
    this._qualityProfileId = config.qualityProfileId;
    this._rootFolderPath = config.rootFolderPath;
    this._searchOnAdd = config.searchOnAdd;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cast - computed: true, optional: true, required: false
  private _cast?: boolean | cdktf.IResolvable; 
  public get cast() {
    return this.getBooleanAttribute('cast');
  }
  public set cast(value: boolean | cdktf.IResolvable) {
    this._cast = value;
  }
  public resetCast() {
    this._cast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castInput() {
    return this._cast;
  }

  // cast_director - computed: true, optional: true, required: false
  private _castDirector?: boolean | cdktf.IResolvable; 
  public get castDirector() {
    return this.getBooleanAttribute('cast_director');
  }
  public set castDirector(value: boolean | cdktf.IResolvable) {
    this._castDirector = value;
  }
  public resetCastDirector() {
    this._castDirector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castDirectorInput() {
    return this._castDirector;
  }

  // cast_producer - computed: true, optional: true, required: false
  private _castProducer?: boolean | cdktf.IResolvable; 
  public get castProducer() {
    return this.getBooleanAttribute('cast_producer');
  }
  public set castProducer(value: boolean | cdktf.IResolvable) {
    this._castProducer = value;
  }
  public resetCastProducer() {
    this._castProducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castProducerInput() {
    return this._castProducer;
  }

  // cast_sound - computed: true, optional: true, required: false
  private _castSound?: boolean | cdktf.IResolvable; 
  public get castSound() {
    return this.getBooleanAttribute('cast_sound');
  }
  public set castSound(value: boolean | cdktf.IResolvable) {
    this._castSound = value;
  }
  public resetCastSound() {
    this._castSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castSoundInput() {
    return this._castSound;
  }

  // cast_writing - computed: true, optional: true, required: false
  private _castWriting?: boolean | cdktf.IResolvable; 
  public get castWriting() {
    return this.getBooleanAttribute('cast_writing');
  }
  public set castWriting(value: boolean | cdktf.IResolvable) {
    this._castWriting = value;
  }
  public resetCastWriting() {
    this._castWriting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castWritingInput() {
    return this._castWriting;
  }

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

  // person_id - computed: false, optional: false, required: true
  private _personId?: string; 
  public get personId() {
    return this.getStringAttribute('person_id');
  }
  public set personId(value: string) {
    this._personId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personIdInput() {
    return this._personId;
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
      cast: cdktf.booleanToTerraform(this._cast),
      cast_director: cdktf.booleanToTerraform(this._castDirector),
      cast_producer: cdktf.booleanToTerraform(this._castProducer),
      cast_sound: cdktf.booleanToTerraform(this._castSound),
      cast_writing: cdktf.booleanToTerraform(this._castWriting),
      enable_auto: cdktf.booleanToTerraform(this._enableAuto),
      enabled: cdktf.booleanToTerraform(this._enabled),
      list_order: cdktf.numberToTerraform(this._listOrder),
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      person_id: cdktf.stringToTerraform(this._personId),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      root_folder_path: cdktf.stringToTerraform(this._rootFolderPath),
      search_on_add: cdktf.booleanToTerraform(this._searchOnAdd),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cast: {
        value: cdktf.booleanToHclTerraform(this._cast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_director: {
        value: cdktf.booleanToHclTerraform(this._castDirector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_producer: {
        value: cdktf.booleanToHclTerraform(this._castProducer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_sound: {
        value: cdktf.booleanToHclTerraform(this._castSound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cast_writing: {
        value: cdktf.booleanToHclTerraform(this._castWriting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      person_id: {
        value: cdktf.stringToHclTerraform(this._personId),
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
